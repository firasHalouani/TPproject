import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-ajout-prod-dr',
  templateUrl: './ajout-prod-dr.component.html',
  styleUrls: ['./ajout-prod-dr.component.css']
})
export class AjoutProdDrComponent implements OnInit {
 
  constructor( private service : ProduitService , private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(formproduct : NgForm){
  //console.log(formproduct.value)
    let p=formproduct.value
     p.urlImg="./assets/images/"+p.nom.replace(" ","")+".jpg"
     this.service.createProduct(p).subscribe(data =>{
      alert('Ajout avec succé')
    })
     this.router.navigate(['/listproduit']).then(()=>{
       window.location.reload();
     })
   }
}
