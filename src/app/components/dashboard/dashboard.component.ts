import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ElementRef, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { SharedPreferences } from '../../utils/SharedPreferences';
import { FeaturedComponent } from 'src/app/components/featured/featured.component';
import { CollectionsComponent } from 'src/app/components/collections/collections.component';
import { TrendingComponent } from 'src/app/components/trending/trending.component';
import { OfferComponent } from 'src/app/components/offer/offer.component';
import { NewcollectionsComponent } from 'src/app/components/newcollections/newcollections.component';
import { NewsletterComponent } from 'src/app/components/newsletter/newsletter.component';
import { ProductdetailsComponent } from 'src/app/components/productdetails/productdetails.component';
import { HomeComponent } from 'src/app/components/home/home.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

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


  showHeroes = true;

  // heroes: Hero[];
  toggleHeroes() { this.showHeroes = !this.showHeroes; }

  constructor(
    private router: Router,
    private resolver: ComponentFactoryResolver,
    public mSharedPreferences: SharedPreferences,
  ) {

  }

  ngOnInit(): void {

    this.mSharedPreferences.featuredShow_STATUS(true);
    console.log(this.mSharedPreferences.homePageShow);

    console.log("[info] Dashboard");

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

  }


}
