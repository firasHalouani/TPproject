import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../modele/produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
 
  host="http://localhost:3000/api/v1/products/"
  constructor(private http : HttpClient) { }
  getAllProduct():Observable <Produit[]>{

    return this.http.get<Produit[]>(this.host)

  }
  getProductByID(id:number):Observable<Produit>{
    return this.http.get<Produit>(this.host+id)

  }
  removeProduct(id:number):Observable<void>{
    return this.http.delete<void>(this.host+id)

  }
  
  createProduct(productData:FormData):Observable<Produit>{
    return this.http.post<Produit>(this.host, productData)
  }
  update(id:number , p:Produit):Observable<void>
  {
    return this.http.put<void>(this.host+id , p)
  }
}
