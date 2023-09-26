import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CgprotectFormComponent } from './cgprotect-form/cgprotect-form.component';
import { AuthGuard } from './guards/auth.guard';
import { LeadsComponent } from './leads/leads.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path:'',
    component:LoginpageComponent
  },
  {
    path:'login',
    component:LoginpageComponent
  },
 
  {
    path:'sidenav',component:SidenavComponent,canActivate:[AuthGuard]
  },
    
      { path: 'leads', component:LeadsComponent,canActivate:[AuthGuard]},
      { path: 'cgprotectform', component:CgprotectFormComponent,canActivate:[AuthGuard]},
      {path:'todos',component:TodosComponent},
      {path:'**',component:NotFoundComponent}
  ];
  
  

  // // otherwise redirect to home
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
