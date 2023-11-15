import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceCalculateComponent } from './price-calculate/price-calculate.component';
import { PriceViewComponent } from './price-view/price-view.component';


const routes: Routes = [
  { path: '**', redirectTo: 'price-view', pathMatch: 'full' },
  {path: 'price-calculate', component: PriceCalculateComponent},
  {path: 'price-view', component: PriceViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
