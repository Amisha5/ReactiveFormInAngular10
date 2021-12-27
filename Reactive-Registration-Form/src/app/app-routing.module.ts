import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignUpFormComponent } from './Component/sign-up-form/sign-up-form.component';


const routes: Routes = [
  {
    path:"signup",
    component:SignUpFormComponent
  },
  {
    path:"home", redirectTo:"/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
