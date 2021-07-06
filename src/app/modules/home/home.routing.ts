import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AddEditItemComponent } from "./components/inventory/add-edit-item/add-edit-item.component";
import { InventroyComponent } from "./components/inventory/inventory.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: 'dashboard', component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'inventory', component: InventroyComponent },
      { path: 'add-edit-item/:id', component: AddEditItemComponent }

    ]
  }

]

export const route = [

]

@NgModule({
  declarations: [],
  providers: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouting {
  constructor() { }
}
