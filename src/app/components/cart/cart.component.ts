import { Component, OnInit, Input} from '@angular/core';
import { ConfigWebService } from '../../service/WebService';
import { Product } from '../../product';
import {SharedPreferences} from '../../utils/SharedPreferences';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //@Input('product') product[];
  @Input() items : Product[];
  
  productName:String;
  priceMYR:String;
  imagePath:String;
  
  
  constructor(  private configWebService: ConfigWebService,
    public mSharedPreferences: SharedPreferences,
   
    ) { }

  ngOnInit(): void {

    this.mSharedPreferences.cartShow_STATUS(true);
    console.log(this.mSharedPreferences.cartShow);

    console.log("[info] Received below information Cart : OnInit");
    console.log(this.items.length);
    this.productName=this.items[0].productName;
    this.priceMYR=this.items[0].priceMYR;
    this.imagePath=this.items[0].imagePath;
    
    
    
  }

   
  

  
}
