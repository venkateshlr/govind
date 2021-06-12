import { Component, OnInit, Input, ViewContainerRef} from '@angular/core';
import { Config, ConfigWebService } from '../../service/WebService';
import { Hero } from '../../hero';
import {FeaturedComponent} from '../featured/featured.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private configWebService: ConfigWebService,
    private viewContainerRef: ViewContainerRef) { }

  @Input('productName') productName;
  @Input('priceMYR') priceMYR;
  @Input('imagePath') imagePath;
  @Input('detailedDescription') detailedDescription;
  @Input('detailedDescription1') detailedDescription1;
  @Input('detailedDescription2') detailedDescription2;
  

  ngOnInit(): void {
   
    console.log(this.detailedDescription);
    console.log(this.productName);
    console.log(this.priceMYR)
    //this.imagePath="/assets/img/"+this.imagePath
    console.log(this.imagePath);
    ///uploads/img/jordan1.jpg
    ///assets/img/fd.png
    console.log(this.detailedDescription);
    console.log(this.detailedDescription1);
    console.log(this.detailedDescription2);
    
  }

  addToCart(product: Product) {
    this.configWebService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  /*getProductDetails(): void{
    let i=0;
    
    console.log("[info] OnInit is starting : featureComponent ");
    
    this.configWebService
    .productInformation()
     .subscribe((data: any) => {
      console.log("[info] Products table is retrived as below ");
          console.log(data);
          this.products = data.arr;
     
          console.log(this.products.length);
          for (let i = 0; i < this.products.length; i++) {
            console.log("[info] Retrive image from below path ");
            let imageName=this.products[i].imagePath;
            console.log(imageName);
            let reader = new FileReader();
            
            this.configWebService.getPicture(imageName).
                subscribe((data: Blob) => {
                    reader.addEventListener("load", () => {
                    //this.ProductImage1 = reader.result;
                    this.imageRetResult[i]=reader.result;
                    }, false);
                if (data) {
                    reader.readAsDataURL(data);
                }
            }, error => {
              console.log(error);
            })
     console.log(this.ProductImage1); 
     }
    });
  }
*/

}
