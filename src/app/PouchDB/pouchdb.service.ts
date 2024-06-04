import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb-browser';
import { AuthResponse } from '../shared/models/AuthResponse';

interface PouchDBDocument {
  _id: string;
  _rev?: string;
  response: AuthResponse;
}

@Injectable({
  providedIn: 'root'
})
export class PouchdbService {
  private db: PouchDB.Database;

  constructor() {
    this.db = new PouchDB('SNA_DB');
  }

  async addItem(doc: any) {
    try {
      // Check if the document already exists
      const existingDoc = await this.db.get<PouchDBDocument>(doc._id);
      debugger
      // If the document exists, update it
      doc._rev = existingDoc._rev;
      const result = await this.db.put(doc);
      return result;
    } catch (error) {
      // If the document doesn't exist, create it
      const result = await this.db.put(doc);
      return result;
    }
  }

  async getItem(id: string) {
    try {
      // Fetch the document from PouchDB
      const doc = await this.db.get<PouchDBDocument>(id);
      return doc; // Return the fetched document
    } catch (error) {
      // Handle errors if the document retrieval fails
      console.error(`Error retrieving document with ID ${id} from PouchDB:`, error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }

  async getLatestUser() {
    try {
      const result = await this.db.allDocs<PouchDBDocument>({
        include_docs: true,
        descending: true, // Sort by descending to get the latest document first
        limit: 1
      });
      if (result.rows.length > 0) {
        const latestDoc = result.rows[result.rows.length - 1].doc;
        return latestDoc;
      } else {
        return undefined;
      }
    } catch (error) {
      console.error('Error fetching latest user from PouchDB:', error);
      throw error;
    }
  }
  
  async deleteAllDocuments() {
    try {
      const result = await this.db.allDocs({ include_docs: true });
      const docsToDelete = result.rows
        .filter(row => row.doc) // Filter out rows where doc is undefined
        .map(row => ({ _id: row.id, _rev: row.doc!._rev, _deleted: true })); // Use non-null assertion operator (!)
      const responses = await this.db.bulkDocs(docsToDelete);
      console.log('All documents deleted successfully.');
      return responses;
    } catch (error) {
      console.error('Error deleting all documents:', error);
      throw error;
    }
  } 
}