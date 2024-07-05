import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  addDB(item: any, dbName: string, storeName: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);

        request.onerror = (event: Event) => {
            console.error("IndexedDB error:", event);
            reject(event);
        };

        request.onsuccess = (event: Event) => {
            const db = (event.target as any).result;
            const transaction = db.transaction([storeName], 'readwrite');
            const objectStore = transaction.objectStore(storeName);

            const putRequest = objectStore.put(item, 1);

            putRequest.onsuccess = () => {
                console.log("Item updated in IndexedDB successfully.");
                resolve();
            };

            putRequest.onerror = (event: Event) => {
                const error = (event.target as IDBRequest).error;
                console.error("Error updating item in IndexedDB:", error);
                reject(error);
            };

            // Optionally, commit the transaction after successful put
            transaction.oncomplete = () => {
                console.log("Transaction completed.");
            };

            transaction.onerror = (event: Event) => {
                console.error("Transaction error:", event);
                reject(event);
            };
        };

        request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
            const db = (event.target as any).result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { autoIncrement: true });
            }
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
        const transaction = db.transaction([storeName]);
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

  deleteAllDatabases(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const request = indexedDB.databases();

      request.then((dbInfos: IDBDatabaseInfo[]) => {
        const promises: Promise<void>[] = [];

        for (const dbInfo of dbInfos) {
          const dbName = dbInfo.name;
          if (typeof dbName === 'string') {
            const deleteRequest = indexedDB.deleteDatabase(dbName);

            deleteRequest.onsuccess = () => {
              console.log("Database deleted successfully:", dbName);
            };

            deleteRequest.onerror = (event: Event) => {
              console.error("Error deleting database:", dbName, event);
            };

            promises.push(new Promise<void>((res, rej) => {
              deleteRequest.onsuccess = () => res();
              deleteRequest.onerror = (event) => rej(event);
            }));
          }
        }

        Promise.all(promises)
          .then(() => resolve()) // Resolve with void
          .catch(error => reject(error));
      }).catch((error: DOMException) => {
        console.error("Error getting database names:", error);
        reject(error);
      });
    });
  }
}