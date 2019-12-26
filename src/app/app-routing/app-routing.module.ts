import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { TodoComponent } from '../todo/todo.component';
const routes:Routes=[{path:'login',component:LoginComponent},
{path:'todo',component:TodoComponent},
{path:'',component:LoginComponent}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],exports:[RouterModule]
})
export class AppRoutingModule { }
