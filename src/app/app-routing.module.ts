import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutProdDrComponent } from './ajout-prod-dr/ajout-prod-dr.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ListproduitComponent } from './listproduit/listprodui.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"produit", component:ProduitComponent},
  {path:"listproduit", component:ListproduitComponent},
  {path:"ajoutproduit", component:AjoutProduitComponent},
  {path:"ajoutproduit1", component:AjoutProdDrComponent},

  {path:"Product/:id", component:DetailProduitComponent},
  {path:"", redirectTo:"produit" , pathMatch:"full"},
  {path:"**", component:PageNotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
