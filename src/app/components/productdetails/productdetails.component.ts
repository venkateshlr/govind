import { Component, OnInit, Input, ViewContainerRef} from '@angular/core';
import { Config, ConfigWebService } from '../../service/WebService';
import { Hero } from '../../hero';
import {CartComponent} from '../cart/cart.component';
import { Product } from '../../product';
import { ComponentFactoryResolver, ViewChild } from'@angular/core';
import {SharedPreferences} from '../../utils/SharedPreferences';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private configWebService: ConfigWebService,
    private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    public mSharedPreferences: SharedPreferences,
    //public product: Product
    ) { }

  @ViewChild('containerProduct', { static: true, read: ViewContainerRef }) 
  entryProduct: ViewContainerRef;

  @Input('productName') productName;
  @Input('priceMYR') priceMYR;
  @Input('imagePath') imagePath;
  @Input('detailedDescription') detailedDescription;
  @Input('detailedDescription1') detailedDescription1;
  @Input('detailedDescription2') detailedDescription2;
  
  items: Product[] = [];

  ngOnInit(): void {
    
    console.log("[info] Received below information Productdetails : OnInit");

    
   
    console.log(this.productName);
    console.log(this.priceMYR)
    console.log(this.imagePath);
    console.log(this.detailedDescription);
    console.log(this.detailedDescription1);
    console.log(this.detailedDescription2);
    
  }

  showCart(): void {
    //this.configWebService.addToCart(product);
    //window.alert('Your product has been added to the cart!');
    this.mSharedPreferences.productdetailsShow=false;
    

    this.entryProduct.clear();
    const factory = this.resolver.resolveComponentFactory(CartComponent);
    const componentRef = this.entryProduct.createComponent(factory).instance;
    this.mSharedPreferences.cartShow=true;
    //componentRef.productName=this.productName;
    //componentRef.priceMYR=this.priceMYR;
    //componentRef.imagePath=this.imagePath;
    
    const product: Product = { productName: this.productName, priceMYR:this.priceMYR,imagePath: this.imagePath } as Product;
    
    this.items.push(product);
    componentRef.items=this.items;
  }

  /*addToCart(product: Product) {
    this.configWebService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }*/

  

}





  

  

  


