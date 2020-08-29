import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsCollection: AngularFirestoreCollection<Product>;
  productsList: Observable<Product[]>;

  constructor(private firestore: AngularFirestore) {
    this.productsList = this.firestore.collection('Products').valueChanges();
  }

  getProductList() {
    return this.productsList;
  }
}
