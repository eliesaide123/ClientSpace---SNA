import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  addDB(item: any, dbName: string, storeName: string): Promise<void> {
    debugger;
    return new Promise<void>((resolve, reject) => {
      const request = window.indexedDB.open(dbName);

      request.onerror = (event: Event) => {
        console.error("IndexedDB error:", event);
        reject(event);
      };

      request.onsuccess = (event: Event) => {
        const db = (event.target as any).result;
        const transaction = db.transaction([storeName], "readwrite");
        const objectStore = transaction.objectStore(storeName);

        const addRequest = objectStore.add(item);
        
        addRequest.onsuccess = () => {
          console.log("Item added to IndexedDB successfully.");
          resolve();
        };
        
        addRequest.onerror = (event: Event) => {
          const error = (event.target as IDBOpenDBRequest).error;
          console.error("Error adding item to IndexedDB:", error);
          reject(error);
        };
      };

      request.onupgradeneeded = (event: Event) => {
        const db = (event.target as any).result;
        db.createObjectStore(storeName, { autoIncrement: true });
      };
    });
  }

  getDB<T>(dbName: string, storeName: string): Observable<T | null> {
    return new Observable<T | null>((observer) => {
      const request = window.indexedDB.open(dbName);
  
      request.onerror = (event: Event) => {
        console.error("IndexedDB error:", event);
        observer.error(event);
      };
  
      request.onsuccess = (event: Event) => {
        const db = (event.target as any).result;
        const transaction = db.transaction([storeName], "readonly");
        const objectStore = transaction.objectStore(storeName);
  
        const getRequest = objectStore.getAll(); // Retrieve all data from the object store
  
        getRequest.onsuccess = (event: Event) => {
          const data = (event.target as IDBRequest).result;
          if (data && data.length > 0) {
            observer.next(data[0]); // Emit the first item in the store
          } else {
            observer.next(null); // No items in the store
          }
          observer.complete(); // Complete the observable
        };
  
        getRequest.onerror = (event: Event) => {
          console.error("Error getting data from IndexedDB:", event);
          observer.error(event);
        };
      };
    });
  } 

  deleteDB(dbName: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const request = window.indexedDB.deleteDatabase(dbName);

      request.onsuccess = () => {
        console.log("Database deleted successfully");
        resolve();
      };

      request.onerror = (event: Event) => {
        console.error("Error deleting database:", event);
        reject(event);
      };

      request.onblocked = (event: Event) => {
        console.warn("Database deletion blocked:", event);
        reject(event);
      };
    });
  }
}