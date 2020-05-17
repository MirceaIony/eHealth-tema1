import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';


const routes: Routes = [
  { 
    path: "", 
    redirectTo:"patients", 
    pathMatch:"full" 
  },
  { 
    path: "patients", 
    component: PatientListComponent 
  },
  { 
    path: "patient/:id", 
    component: PatientDetailComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
