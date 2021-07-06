import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { takeWhile } from "rxjs/operators";

import { InventoryService } from "src/app/services/inventory.service";

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: [`./add-edit-item.component.scss`]
})
export class AddEditItemComponent implements OnInit, OnDestroy {
  addEditFrom: FormGroup;
  addEditFromSubmitted = false;
  addEditFromSubmitting = false;
  inventoryData: any;
  isEdit = false;
  isAlive = true;
  id: any;

  constructor(
    private _FormBuilder: FormBuilder,
    private _InventoryService: InventoryService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.addEditFrom = this._FormBuilder.group({
      group_id: [null],
      group_name: [null, [Validators.required]],
      item_type: [null, [Validators.required]],
      product_type: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
      quantity: [null, [Validators.required]]
    })
  }
  ngOnInit() {
    this._InventoryService.getInventoryDataWithObservable().pipe(takeWhile(() => this.isAlive)).subscribe((data) => {
      this.inventoryData = data;
    });
    this.id = this._ActivatedRoute.snapshot.params.id;
    if (this.id > 0) {
      this.isEdit = true;
      let [filterData] = this.inventoryData.filter((val: any) => val.group_id === Number(this.id));
      this.addEditFrom.setValue(filterData);
    } else {
      this.isEdit = false;
    }

  }
  ngOnDestroy() {
    this.isAlive = false
  }
  addEditFromSubmit() {
    this.addEditFromSubmitted = true;
    if (this.addEditFrom.valid) {
      this.addEditFrom.controls.group_id.setValue(Math.floor(Math.random() * 10000));
      this.addEditFromSubmitting = true;
      if (this.isEdit) {
        this.inventoryData.forEach((val: any, index: any, array: any) => {
          if (val.group_id === Number(this.id)) {
            array.splice(index, 1);
          }
        })
      }
      this.inventoryData.push(this.addEditFrom.value);
      this._InventoryService.setInventoryData(this.inventoryData);
      this._Router.navigate([`/dashboard/inventory`]);

    }
  }
}
