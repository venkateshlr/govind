import { Component, OnInit, AfterContentInit, ViewChild,SimpleChanges } from '@angular/core';
import { Config, ConfigWebService } from './service/WebService';
import { Hero } from './hero';
import {Router} from "@angular/router"
import { ViewContainerRef, ComponentFactoryResolver } from'@angular/core';
import { HomeComponent } from './components/home/home.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { TrendingComponent } from './components/trending/trending.component';
import { OfferComponent } from './components/offer/offer.component';
import { NewcollectionsComponent } from './components/newcollections/newcollections.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import {FooterComponent} from './components/footer/footer.component';

import { HeaderComponent } from './components/header/header.component';
import {SharedPreferences} from './utils/SharedPreferences';


declare function myMethod(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ ConfigWebService ],
  styleUrls: ['./app.component.css'],
  
})


export class AppComponent implements OnInit, AfterContentInit{
  //public show:boolean = false;

  //public Loginref: LoginComponent;

  @ViewChild('containerHeader', { static: true, read: ViewContainerRef }) 
  entryHeader: ViewContainerRef;

  @ViewChild('container', { static: true, read: ViewContainerRef }) 
  entry: ViewContainerRef;

  @ViewChild('containerHome', { static: true, read: ViewContainerRef }) 
  entryHome: ViewContainerRef;

  @ViewChild('containerFeatured', { static: true, read: ViewContainerRef }) 
  entryFeatured: ViewContainerRef;
  
  @ViewChild('containerCollections', { static: true, read: ViewContainerRef }) 
  entryCollections: ViewContainerRef;
  
  @ViewChild('containerTrending', { static: true, read: ViewContainerRef }) 
  entryTrending: ViewContainerRef;
  
  @ViewChild('containerOffer', { static: true, read: ViewContainerRef }) 
  entryOffer: ViewContainerRef;
  
  @ViewChild('containerNewcollections', { static: true, read: ViewContainerRef }) 
  entryNewcollections: ViewContainerRef;

  @ViewChild('containerProduct', { static: true, read: ViewContainerRef }) 
  entryProduct: ViewContainerRef;

  @ViewChild('containerNewsletter', { static: true, read: ViewContainerRef }) 
  entryNewsletter: ViewContainerRef;
    
  @ViewChild('containerFooter', { static: true, read: ViewContainerRef }) 
  entryFooter: ViewContainerRef;
  
  showHeroes = true;
 
  heroes: Hero[];
  
  //@ViewChild('myDOMElement', { static: true }) MyDOMElement: ElementRef;

  constructor(private configWebService: ConfigWebService,
    private router: Router,
    private resolver: ComponentFactoryResolver,
    public mSharedPreferences: SharedPreferences,
        
    ) {
    
  }

  toggleHeroes() { this.showHeroes = !this.showHeroes; }

  home(): void{

    this.mSharedPreferences.featuredShow_STATUS(true);
    console.log(this.mSharedPreferences.homePageShow);

    /*if(this.mSharedPreferences.homePageShow){
      
      this.entryHeader.clear();
      const factoryHeader = this.resolver.resolveComponentFactory(HeaderComponent);
      const componentRefHeader = this.entryHeader.createComponent(factoryHeader);
    
      this.entry.clear();
      const factory = this.resolver.resolveComponentFactory(HomeComponent);
      const componentRef = this.entry.createComponent(factory);
    
      this.entryFeatured.clear();
      const factoryFeatured = this.resolver.resolveComponentFactory(FeaturedComponent);
      const componentRefFeatured = this.entryFeatured.createComponent(factoryFeatured);

    }*/
    
    console.log("[info] home");

    this.entryHeader.clear();
    const factoryHeader = this.resolver.resolveComponentFactory(HeaderComponent);
    const componentRefHeader = this.entryHeader.createComponent(factoryHeader);
    
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(HomeComponent);
    const componentRef = this.entry.createComponent(factory);
    
    this.entryFeatured.clear();
    const factoryFeatured = this.resolver.resolveComponentFactory(FeaturedComponent);
    const componentRefFeatured = this.entryFeatured.createComponent(factoryFeatured);
    
    this.entryCollections.clear();
    const factoryCollections = this.resolver.resolveComponentFactory(CollectionsComponent);
    const componentRefCollections = this.entryFeatured.createComponent(factoryCollections);
    
    this.entryTrending.clear();
    const factoryTrending = this.resolver.resolveComponentFactory(TrendingComponent);
    const componentRefTrending = this.entryTrending.createComponent(factoryTrending);
        
    this.entryOffer.clear();
    const factoryOffer = this.resolver.resolveComponentFactory(OfferComponent);
    const componentRefOffer = this.entryOffer.createComponent(factoryOffer);
    
    this.entryNewcollections.clear();
    const factoryNewcollection = this.resolver.resolveComponentFactory(NewcollectionsComponent);
    const componentRefNewcollection = this.entryNewcollections.createComponent(factoryNewcollection);
    
    this.entryNewsletter.clear();
    const factoryNewsletter = this.resolver.resolveComponentFactory(NewsletterComponent);
    const componentRefNewsletter = this.entryNewsletter.createComponent(factoryNewsletter);

    this.entryFooter.clear();
    const factoryFooter = this.resolver.resolveComponentFactory(FooterComponent);
    const componentRefFooter = this.entryFooter.createComponent(factoryFooter);


  }
   ngOnInit(){
    console.log("on init");
    //console.log(this.mSharedPreferences.loginUsername);
    this.home();
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log("on changes");
    console.log(changes)
  }

  ngAfterContentInit(){
    console.log("we are in after content init");
  }

  

  
    
  
 
  
  
  

  
}

