import { Injectable } from '@angular/core';
import { User } from './../model/user';

@Injectable()
export class UserService {
  private static DB_NAME : string = "database";
  private static OBJECT_STORAGE_NAME : string = "user";
  private static INITIAL_USER_LIST : User[] = [
      {id:1,name:"Jeferson",email:"jr@zyos.co"},
      {id:2,name:"Miguelo",email:"mtorres@zyos.co"},
      {id:2,name:"Sergio",email:"sh@zyos.co"}
    ]; 
  constructor() { 
    let request : IDBOpenDBRequest = indexedDB.open(UserService.DB_NAME,1);
    request.onsuccess = this.initializeDatabase;
  }

  private initializeDatabase(event:Event){
    let target : IDBOpenDBRequest = <IDBOpenDBRequest>event.target;
    let db : IDBDatabase = target.result;
    let objectStorage = db.createObjectStore(UserService.OBJECT_STORAGE_NAME,{keyPath:"id"});
    objectStorage.transaction.oncomplete = function(event){
      db.transaction(UserService.OBJECT_STORAGE_NAME,"readwrite")
    };
  }
}