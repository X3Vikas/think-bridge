import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { takeLast, takeWhile } from "rxjs/operators";
import { InventoryService } from "src/app/services/inventory.service";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from "@angular/router";
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: [`./inventory.component.scss`]
})
export class InventroyComponent implements OnInit, OnDestroy {
  isAlive = true;
  inventoryData: any;
  displayedColumns: string[] = ['group_id', 'group_name', 'item_type', 'product_type', 'description', 'price', 'quantity', 'action'];
  dataSource: any;
  @ViewChild(MatSort) sort: any;
  @ViewChild(MatPaginator) paginator: any;
  constructor(
    private _InventoryService: InventoryService,
    private _Router: Router
  ) { }
  ngOnInit() {
    this._InventoryService.getInventoryDataWithObservable().pipe(takeWhile(() => this.isAlive)).subscribe((data) => {
      this.inventoryData = data;
      this.dataSource = new MatTableDataSource(this.inventoryData);

    });



  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy() {
    this.isAlive = false
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delete(id: any) {
    this.inventoryData.forEach((val: any, index: any, array: any) => {
      if (val.group_id === id) {
        array.splice(index, 1);
      }
    })
    this.dataSource = new MatTableDataSource(this.inventoryData);
  }

  Addedit(id: any) {
    this._Router.navigate([`dashboard/add-edit-item/${id}`])
  }

}
