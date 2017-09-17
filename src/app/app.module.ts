import { NgModule }      from '@angular/core';
import { MembersComponent } from './members/members.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MembershipComponent } from './membership/membership.component';
import { DirectoryComponent } from './directory/directory.component';
import { MatrimonialComponent } from './matrimonial/matrimonial.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  imports:      [
     BrowserModule,     
     FormsModule,
     HttpModule,
     RouterModule.forRoot([
      {
        path: '',
        redirectTo: "/home",
        pathMatch: 'full'
      },
       {
       path:  'home',
       component: HomeComponent
     },
     {
       path:  'aboutus',
       component:AboutusComponent
     },
     {
       path:  'membership',
       component:MembershipComponent
     },
     {
       path:  'directory',
       component:DirectoryComponent
     },
     {
       path:  'matrimonial',
       component:MatrimonialComponent
     },
     {
       path:  'contactus',
       component:ContactusComponent
     }
    ])
    ],
    providers:[],
  declarations: [ AppComponent, ProductComponent, MembersComponent, HomeComponent, AboutusComponent, MembershipComponent, DirectoryComponent, MatrimonialComponent, ContactusComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
