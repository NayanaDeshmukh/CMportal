import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AdminCreatecompanyComponent } from './admin/admin-createcompany/admin-createcompany.component';
import { AdminEditcompanyComponent } from './admin/admin-editcompany/admin-editcompany.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminListblogsComponent } from './admin/admin-listblogs/admin-listblogs.component';
import { AdminListcompanyComponent } from './admin/admin-listcompany/admin-listcompany.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminLogoutComponent } from './admin/admin-logout/admin-logout.component';
import { CreateemployeeComponent } from './admin/createemployee/createemployee.component';
import { EditemployeeComponent } from './admin/editemployee/editemployee.component';
import { ListemployeeComponent } from './admin/listemployee/listemployee.component';
import { UsercreateComponent } from './admin/usercreate/usercreate.component';
import { UsereditComponent } from './admin/useredit/useredit.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { DefaultComponent } from './default/default.component';
import { AboutusComponent } from './enduser/aboutus/aboutus.component';
import { BlogsComponent } from './enduser/blogs/blogs.component';
import { BlogseditComponent } from './enduser/blogsedit/blogsedit.component';
import { BlogsregformComponent } from './enduser/blogsregform/blogsregform.component';
import { ContactComponent } from './enduser/contact/contact.component';
import { HomeComponent } from './enduser/home/home.component';
import { UserloginComponent } from './enduser/userlogin/userlogin.component';
import { WriteblogsComponent } from './enduser/writeblogs/writeblogs.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutusComponent},
  {path:'contact',component:ContactComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'blogsregform',component:BlogsregformComponent},
  {path:'blogswrite',component:WriteblogsComponent},
  {path:'editblog/:id',component:BlogseditComponent},
  {path:'createcompany',component:AdminCreatecompanyComponent},
  {path:'editcompany/:id',component:AdminEditcompanyComponent},
  {path:'listcompany',component:AdminListcompanyComponent},
  {path:'createemployee',component:CreateemployeeComponent},
  {path:'editemployee/:id',component:EditemployeeComponent},
  {path:'listemployee',component:ListemployeeComponent},
  {path:'cview',component:UsercreateComponent},
  {path:'edituser/:id',component:UsereditComponent},
  {path:'listuser',component:UserlistComponent},
  {path:'adminblogs',component:AdminListblogsComponent},
  {path:'admincontact',component:AdminContactComponent},
  {path:'eview',component:AdminLoginComponent},
  {path:'logout',component:AdminLogoutComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'adminheader',component:AdminHeaderComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path:'**',component:DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
