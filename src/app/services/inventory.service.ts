import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventroyData: Subject<any>;
  inventory = [];
  constructor() {
    this.inventroyData = new BehaviorSubject<any>(null);
  }



  setInventoryData(data: any) {
    this.inventroyData.next(data);
    this.inventory = data;

  }
  getInventoryData() {
    return this.inventory;

  }
  getInventoryDataWithObservable(): Observable<any> {
    return this.inventroyData.asObservable();

  }
}
