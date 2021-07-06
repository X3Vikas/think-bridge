import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { InventoryService } from 'src/app/services/inventory.service';
import { InventoryData } from 'src/app/models/inventory';


@Component({
  selector: `app-home`,
  templateUrl: `./home.component.html`,
  styleUrls: [`./home.component.scss`]
})

export class HomeComponent implements OnInit {
  inventoryData = InventoryData;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private _InventoryService: InventoryService
  ) { }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  ngOnInit() {
    this._InventoryService.setInventoryData(this.inventoryData)

  }


}
