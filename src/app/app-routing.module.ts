import { HomeComponent } from './components/home/home.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { PeopleComponent } from './components/people/people.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
