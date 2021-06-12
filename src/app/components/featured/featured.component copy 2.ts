import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ViewContainerRef, ComponentFactoryResolver } from'@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import {Router} from "@angular/router"
import { AppComponent } from '../../app.component';
import {SharedPreferences} from '../../utils/SharedPreferences';
import { ConfigWebService } from '../../service/WebService';
import { Hero } from '../../hero';
import { Product } from '../../product';
import { Observable, throwError } from 'rxjs';
import { catchError, retry , map} from 'rxjs/operators';
 
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})

export class FeaturedComponent implements OnInit {
  public show:boolean = true;
  //this.mSharedPreferences.
  heroes: Hero[];
  products: Product[];
  imageToShow: any;
  imageToShow1$ : Observable<any>;
  ProductImage1 : any;
  isImageLoading: boolean;
  imageRetResult: any[];
  firstName: string;

  @ViewChild('containerProduct', { static: true, read: ViewContainerRef }) 
  entryProduct: ViewContainerRef;

  constructor(private router: Router, 
    private resolver: ComponentFactoryResolver,
    private mSharedPreferences: SharedPreferences,
    private configWebService: ConfigWebService,
    
    //private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.firstName="Govind";
    this.getProducts();
  }

  getProducts(): void{
    let i=0;
    
    console.log("[info] OnInit is starting : featureComponent ");
    

    this.show=this.mSharedPreferences.featuredShow;
    this.configWebService
    .productInformation()
     .subscribe((data: any) => {
      console.log("[info] Products table is retrived as below ");
          console.log(data);
          this.products = data.arr;
     
          console.log(this.products.length);
          /*for (let i = 0; i < this.products.length; i++) {
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
          }*/
    });
  }
  
  getHeroes(): void {
      this.configWebService
    .productInformation().subscribe(data => (this.products = data));
  }


  getImageFromService(imageName: string): Observable<any>{
    //getImageFromService(imageName: string): any{
    console.log("[info] Get image from Node");
    let reader = new FileReader();
    this.isImageLoading = true;
    this.configWebService.getPicture(imageName).
         subscribe((data: Blob) => {
          console.log("[info] Below data is received ");
           console.log(data);
           reader.addEventListener("load", () => {
            this.imageToShow = reader.result;
            }, false);
        if (data) {
            reader.readAsDataURL(data);
        }
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    }).map((data: any) => {
            //return this.imageToShow;
        return this.imageToShow;
      }),
      //catchError(this.handleError('addHero', hero))
      //catchError(this.handleError)
    
    console.log("Finished");
    return this.imageToShow;
    
  }
  getdisplay(imageName: string){
    //this.imageToShow1=this.configWebService.getImageFromService(imageName);
    this.imageToShow1$=this.configWebService.getImageFromService('/uploads/courseImages/test.jpg');
  }
  
  display(): void{
    console.log("[info] display");
    this.show=false;
    
    this.entryProduct.clear();
    const factory = this.resolver.resolveComponentFactory(ProductComponent);
    const componentRef = this.entryProduct.createComponent(factory);
    //componentRef.instance.name = this.name;

    /*this.configWebService
      .insertPicture("picture1","picture",desc).
      subscribe(hero => this.heroes.push(hero));
    */

  }

}
