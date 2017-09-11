import { NgModule }      from '@angular/core';
import { MembersComponent } from './members/members.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  imports:      [
     BrowserModule,     
     FormsModule,
     HttpModule,
     RouterModule.forRoot([
       {
       path:  'member',
       component: MembersComponent
     },
     {
       path:  'product',
       component:ProductComponent
     }
    ])
    ],
    providers:[],
  declarations: [ AppComponent, ProductComponent, MembersComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
