import { NgModule } from "@angular/core";
import { HomeRouting, route } from './home.routing';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatBadgeModule } from '@angular/material/badge'
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./home.component";
import { InventroyComponent } from "./components/inventory/inventory.component";
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditItemComponent } from "./components/inventory/add-edit-item/add-edit-item.component";

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    InventroyComponent,
    AddEditItemComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HomeRouting,
    MatGridListModule,
    MatInputModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],


})
export class HomeModule {
  constructor() { }
}
