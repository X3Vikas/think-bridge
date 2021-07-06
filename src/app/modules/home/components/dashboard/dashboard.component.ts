import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, takeWhile } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { InventoryService } from 'src/app/services/inventory.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  inventoryData = [];
  isAlive = true;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private _InventoryService: InventoryService
  ) { }
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [{ title: 'Total Items', cols: 1, rows: 1 }];
      } return [{ title: 'Total Items', cols: 1, rows: 1 }];
    })
  );
  ngOnInit() {
    this._InventoryService.getInventoryDataWithObservable().pipe(takeWhile(() => this.isAlive)).subscribe((data) => {
      this.inventoryData = data;
    });
  }
  ngOnDestroy() {
    this.isAlive = false;
  }
}
