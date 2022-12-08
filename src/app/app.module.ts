import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProduitComponent } from './produit/produit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { AjoutProdDrComponent } from './ajout-prod-dr/ajout-prod-dr.component';
import { ListproduitComponent } from './listproduit/listprodui.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProduitComponent,
    ListproduitComponent,
    PageNotFoundComponent,
    DetailProduitComponent,
    AjoutProduitComponent,
    AjoutProdDrComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
