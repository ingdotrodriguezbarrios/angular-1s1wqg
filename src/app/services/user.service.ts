import { Injectable } from '@angular/core';
import { User } from './../model/user';

@Injectable()
export class UserService {
  dbName : string = "database";
  objectStorageName : string = "user";
  user : User[] = [
      {id:1,name:"Jeferson",email:"jr@zyos.co"},
      {id:2,name:"Miguelo",email:"mtorres@zyos.co"},
      {id:2,name:"Sergio",email:"sh@zyos.co"}
    ]; 
  constructor() { 
    let request : IDBOpenDBRequest = indexedDB.open(this.dbName,1);
    request.onsuccess = this.initializeDatabase;
  }

  private initializeDatabase(event:Event){
    let target : IDBOpenDBRequest = <IDBOpenDBRequest>event.target;
    let db : IDBDatabase = target.result;
    let objectStorage = db.createObjectStore(this.objectStorageName,{keyPath:"id"});
  }

}