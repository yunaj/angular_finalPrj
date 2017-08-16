import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { ScmMainModule } from './scm-main/scm-main.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    FormsModule,
    HttpModule,

    //app modules
    ScmMainModule,
    ProductModule,
    CategoryModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
