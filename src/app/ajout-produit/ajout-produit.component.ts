import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProduitService } from '../service/produit.service';
import { Produit } from '../modele/produit';
@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  form!:FormGroup;
  isSubmitted = false;
  constructor( private service : ProduitService , private router : Router,private route:ActivatedRoute,private formBuilder:FormBuilder) {
       
  }
  ngOnInit(): void {
    this._initForm();
  }
  private _initForm(){
    this.form = this.formBuilder.group({
      name:['',Validators.required],
      price:['',Validators.required],
      countInStock:['',Validators.required],
    });
  }
   onSubmit(){
    this.isSubmitted =true;

    const productFormDate = new FormData();

    //productFormDate.append('name',this.productForm.name.value);
    
    this._addProduct(productFormDate);
    Object.keys(this.productForm).map((key)=>{
      productFormDate.append(key,this.productForm[key].value);
    })
    this._addProduct(productFormDate);

   }
   private _addProduct(productData: FormData){
    this.service.createProduct(productData).subscribe((produit:Produit) =>{
      console.log(produit);
    })
  }
  reset(){
    this.router.navigate(['/listproduit']).then(()=>{
      window.location.reload();
    })
  }
  get productForm(){
    return this.form.controls;
  }
}