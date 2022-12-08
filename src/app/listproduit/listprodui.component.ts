import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, reduce } from 'rxjs';
import { Produit } from '../modele/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
//products1!:Array<any>
productF!:Produit[]
AF='Masquer'
products!:Produit[]


//  =[
// //   {id:1 , nom:"Computer" , prix:5667 , quantite:23 , urlImg:'assets/images/OIP.jpg'},
// //   {id:2 , nom:"Printer" , prix:1233 , quantite:2, urlImg:'assets/images/OIP (1).jpg'},
// //   {id:3 , nom:"Smart Phone" , prix:6785 , quantite:0, urlImg:'assets/images/OIP (2).jpg'},
// //   ];
  constructor( private service : ProduitService,private router: Router) { }
  
 // this.produit=this.http.get(http//localhost:);
  ngOnInit(): void {
 // this.productF=this.products;
 this.getAllProduct();
  }
/*   supprimer(p:any)
    {
  let index = this.products.indexOf(p,0)
 // this.products.splice(index,1)
 this.service.removeProduct(index).subscribe((data)=>{
  this.getAllProduct();
 });
    } */
    Afficher(){
      if (this.AF=='Masquer')
      {this.AF='Afficher'}
      else{
        this.AF='Masquer'
      }
    }
    set VFiltre(a:number){
      //console.log(a)
      this.productF=this.Ffiltrer(a);
    }
  Ffiltrer(b:number):Produit[]{
    
     return this.products.filter(x=>x.id==b)
     
    }
    getColor(q:number){
      if( q==0 )
        return 'red'
      else 
        return 'black'
    }
    getAllProduct(){
      this.service.getAllProduct().subscribe((data ) =>{
        this.products=data;
        this.productF=this.products;
      })
    }

    removeProduct(productId: number){
      this.service.removeProduct(productId).subscribe(response=>{
        this.getAllProduct();
      })     
  }

  reset(){
    this.getAllProduct();
  }
}
  
