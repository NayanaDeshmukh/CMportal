import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminCreatecompanyComponent } from './admin/admin-createcompany/admin-createcompany.component';
import { AdminListcompanyComponent } from './admin/admin-listcompany/admin-listcompany.component';
import { AdminEditcompanyComponent } from './admin/admin-editcompany/admin-editcompany.component';
import { EditemployeeComponent } from './admin/editemployee/editemployee.component';
import { CreateemployeeComponent } from './admin/createemployee/createemployee.component';
import { ListemployeeComponent } from './admin/listemployee/listemployee.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminListblogsComponent } from './admin/admin-listblogs/admin-listblogs.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { UsercreateComponent } from './admin/usercreate/usercreate.component';
import { UsereditComponent } from './admin/useredit/useredit.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { HomeComponent } from './enduser/home/home.component';
import { AboutusComponent } from './enduser/aboutus/aboutus.component';
import { ContactComponent } from './enduser/contact/contact.component';
import { BlogsComponent } from './enduser/blogs/blogs.component';
import { DefaultComponent } from './default/default.component';
import { UserHeaderComponent } from './enduser/user-header/user-header.component';
import { UserFooterComponent } from './enduser/user-footer/user-footer.component';
import { PortalService } from './service/portal.service';
import { HttpClientModule } from '@angular/common/http';
import { BlogsregformComponent } from './enduser/blogsregform/blogsregform.component';
import { WriteblogsComponent } from './enduser/writeblogs/writeblogs.component';
import { UserloginComponent } from './enduser/userlogin/userlogin.component';
import { AdminLogoutComponent } from './admin/admin-logout/admin-logout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogseditComponent } from './enduser/blogsedit/blogsedit.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminCreatecompanyComponent,
    AdminListcompanyComponent,
    AdminEditcompanyComponent,
    EditemployeeComponent,
    CreateemployeeComponent,
    ListemployeeComponent,
    AdminLoginComponent,
    AdminListblogsComponent,
    AdminContactComponent,
    UsercreateComponent,
    UsereditComponent,
    UserlistComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    BlogsComponent,
    DefaultComponent,
    UserHeaderComponent,
    UserFooterComponent,
    BlogsregformComponent,
    WriteblogsComponent,
    UserloginComponent,
    AdminLogoutComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BlogseditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,
     HttpClientModule

  ],
  providers: [PortalService, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
