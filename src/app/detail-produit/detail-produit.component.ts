import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { __param } from 'tslib';
import { Produit } from '../modele/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  id!:number;
  prod:any;
   products!:Produit[]
   /*=[
  //   {id:1 , nom:"Computer" , prix:5667 , quantite:23 , urlImg:'assets/images/OIP.jpg'},
  //   {id:2 , nom:"Printer" , prix:1233 , quantite:2, urlImg:'assets/images/OIP (1).jpg'},
  //   {id:3 , nom:"Smart Phone" , prix:6785 , quantite:0, urlImg:'assets/images/OIP (2).jpg'},
  //   ];*/
  constructor(private ar: ActivatedRoute , 
              private route: Router,
              private service : ProduitService) { }

  ngOnInit(): void {
    // id = this.ar.snapshot.params['id']
    this.ar.paramMap.subscribe((param:any ) =>{
      this.id=param.get('id')
    })
   // this.prod = this.products.find(x=>x.id==this.id);
   //console.log(prod);
   this.service.getProductByID(this.id).subscribe((data)=> {
    this.prod=data;
   })


  }
  back(){
    this.route.navigate(['/listproduit'])
  }

  


}
