import { Injectable } from '@angular/core';

@Injectable()

export class SharedPreferences {
  //messages: string = "";
  profilePicture="";
  loginUsername="";
  loginMobile="";
  loginPicture="";
  loginStatus:boolean=false;
  loginUserId="";
  passwordUpdateStatus="";
  loginPassword="";
  homeShow:boolean=false;
  featuredShow:boolean=false;
  collectionsShow:boolean=false;
  trendingShow:boolean=false;
  offerShow:boolean=false;
  newCollectionsShow:boolean=false;
  newsletterShow:boolean=false;
  productdetailsShow:boolean=false;
  footerShow:boolean=false;
  loginShow:boolean=false;
  homePageShow:boolean=true;
  cartShow:boolean=false;

  jwtValue:String="";
  customeToken="";

  //public show:boolean = false;

  LOGIN_USERNAME(name: string) {
    this.loginUsername=name;
  }
  LOGIN_MOBILE(loginMobile: string) {
    this.loginMobile=  loginMobile;
  }
  
  LOGIN_PICTURE(loginPicture: string) {
    this.loginPicture=loginPicture;
  }
  
  LOGIN_PASSWORD(password: string) {
    this.loginPassword=password;
  }
  LOGIN_STATUS(status: boolean) {
    this.loginStatus=status;
  }
  PASSWORD_UPDATE_STATUS(updatestatus: string) {
    this.passwordUpdateStatus=updatestatus;
  }
  JWT(jwtvalue: String) {
    this.jwtValue=jwtvalue;
  }
  CUSTOM_TOKEN(customeToken: string) {
    this.customeToken=customeToken;
  }
  homeShow_STATUS(homeShow: boolean) {
    this.homeShow=homeShow;
  }
  featuredShow_STATUS(featuredShow: boolean) {
    this.featuredShow=featuredShow;
  }
  collectionsShow_STATUS(collectionsShow: boolean) {
    this.collectionsShow=collectionsShow;
  }
  
  trendingShow_STATUS(trendingShow: boolean) {
    this.trendingShow=trendingShow;
  }
  offerShow_STATUS(offerShow: boolean) {
    this.offerShow=offerShow;
  }
  newCollectionsShow_STATUS(newCollectionsShow: boolean) {
    this.newCollectionsShow=newCollectionsShow;
  }
  newsletterShow_STATUS(newsletterShow: boolean) {
    this.newsletterShow=newsletterShow;
  }
  productdetailsShow_STATUS(productdetailsShow: boolean) {
    this.productdetailsShow=productdetailsShow;
  }
  footerShow_STATUS(footerShow: boolean) {
    this.footerShow=footerShow;
  }
  loginShow_STATUS(loginShow: boolean) {
    this.loginShow=loginShow;
  }
  cartShow_STATUS(cartShow: boolean) {
    this.cartShow=cartShow;
  }
  homePageShow_STATUS(homePageShow: boolean) {
    this.homePageShow=homePageShow;
  }
  
    
}
