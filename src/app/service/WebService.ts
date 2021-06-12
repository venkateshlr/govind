 import { Injectable } from '@angular/core';
 import { LOGIN } from '../utils/Constants';
 import { SIGNUP } from '../utils/Constants';
 import { SET_PROFILE_PICTURE } from '../utils/Constants';
 import { GET_PROFILE_PICTURE } from '../utils/Constants';
 import { PRODUCTINFO } from '../utils/Constants';
 import { Product } from '../product';

 import { JWT }  from '../utils/Constants';
 import { CUSTOM_TOKEN } from '../utils/Constants';

 import {SharedPreferences} from '../utils/SharedPreferences';

 import { STATIC_HEADERS } from '../utils/Constants';
 import { BASE_URL } from '../utils/Constants';
 
 //LOGIN_STATUS = "loginStatus";
 import { LOGIN_USERNAME } from '../utils/Constants';

  //static const String LOGIN_PASSWORD = "loginPassword";
  //static const String LOGIN_USER_ID = "loginUserId";

 import { Hero } from '../hero';
 import { Hero1 } from '../hero1';

 import { HttpClient } from '@angular/common/http';
 import { HttpHeaders } from '@angular/common/http';
 import { Observable, throwError } from 'rxjs';
 import { catchError, retry , map} from 'rxjs/operators';
 import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
 import {Router} from "@angular/router"
 import { ViewContainerRef,ComponentFactoryResolver} from '@angular/core';
 import { from } from 'rxjs';

 const httpOptions = {
  headers: new HttpHeaders(
    STATIC_HEADERS,
  )
};

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}

export interface ComponentLoader {
  loadChildren: () => Promise<any>;
}


@Injectable()
export class ConfigWebService {
  
  image: Blob;
   
  imageToShow: any;
  isImageLoading: boolean;
  items: Product[] = [];


  constructor(
    private router: Router,
    private http: HttpClient,
    //private client1: SharedPreferences
    private mSharedPreferences: SharedPreferences,
    private cfr: ComponentFactoryResolver
    
    ) { }

  ngOnInit() {
    //this.router.init();  // valid
}
  addToCart(product: Product) {
    console.log(product);
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  

forChild(vcr: ViewContainerRef, cl: ComponentLoader) {
    return from(cl.loadChildren()).pipe(
      map((component: any) => this.cfr.resolveComponentFactory(component)),
      map(componentFactory => vcr.createComponent(componentFactory))
    );
}

loadComponent(vcr: ViewContainerRef) {
  console.log(" we are in loadcomponent");
  vcr.clear();

  return this.forChild(vcr, {
    loadChildren: this.guestProfile()
  });
}

private guestProfile() {
  console.log("we are in guest profile");
  return () =>
    //import('./guest-profile/guest-profile.component').then(
      import('../components/signup/signup.component').then(
      m => m.SignupComponent
    );
}
 

 login(name: string, passwd: string): Observable<Hero> {
  console.log("[info] Login in webservice is started "); 
 
  console.log("[info] Login action : " + LOGIN);

  return this.http.post<Hero>(LOGIN, {
    email: name,
    password: passwd,
  }, 
  httpOptions)
      .pipe(
        map((data: any) => {
          console.log("[info] Return Data is");
          console.log(data);
          return data;
          }),
          catchError(this.handleError)
        );
        
      console.log("Finished");
  }
  



  signup(name: string, password: string, mobile: string,picture: string): Observable<Hero> {
    
    console.log("[info] signup in webservice is started "); 
    console.log("[info] Name " + name);
    console.log("[info] Password" + password);
    console.log("[info] Role" + mobile);
    console.log("[info] signup11 "+ SIGNUP);

    return this.http.post(SIGNUP, {
      email: name,
      password: password,
      mobile: mobile,
      picture: picture
      
    }, 
    httpOptions)
      .pipe(
        map((data: any) => {
          console.log("[info] Return Data is");
          console.log(data);
          return data;
          }),
          catchError(this.handleError)
        );
        
      console.log("Finished");
  }
  
  
  productInformation(): Observable<any> {
    
    console.log("[info] Product information webservice is started "); 
    
    return this.http.get(PRODUCTINFO, 
    httpOptions)
      .pipe(
        map((data: any) => {
          //console.log(data);
          return data;
        }),
        //catchError(this.handleError('addHero', hero))
        catchError(this.handleError)
      );
      console.log("Finished");
  }


  insertPicture(): Observable<Hero> {
    //insertPicture(name: string, desc: string): Observable<Hero> {
    
    console.log("[info] signup in webservice is started "); 

    //console.log("[info] Name " + name);
    //console.log("[info] Password" + desc);
    //console.log("[info] signup11 "+ ImageData);
    console.log("[info] signup11 "+ SET_PROFILE_PICTURE);
    console.log("[info] Token is " + this.mSharedPreferences.jwtValue);
    
    const httpOptions = {
      headers: new HttpHeaders({
          "Authorization": "Bearer " + this.mSharedPreferences.jwtValue,
          "Access-Control-Allow-Origin" : "*",   
      },
      
      )
    };

    return this.http.patch(SET_PROFILE_PICTURE, {
      email: name,
     // desc: desc,
      //image: image1
    }, 
    httpOptions)
      .pipe(
        map((data: any) => {
          console.log('we are here');
          console.log(data);
          console.log(data.status);
          console.log(data.statusCode);
          if(data.status == true){
              console.log("response status is true" );
             

          } else {
            console.log("response status is flase" );
          }
         
          return data.results.map((entry: any) => ({
             
            })
            
          );
        }),
        //catchError(this.handleError('addHero', hero))
        catchError(this.handleError)
      );
      console.log("Finished");
  }
  
  
  getPicture(imageName: string ): any{
    return this.http.get(imageName,
    {responseType : 'blob'})

  }

  
  getImageFromService(imageName: string): Observable<any>{
  //getImageFromService(imageName: string): any{
  console.log("[info] Get image from Node");
  let reader = new FileReader();
  this.isImageLoading = true;
  this.getPicture(imageName).
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
      
     
      /*return data.results.map((entry: any) => ({
        })
      );*/

      //return this.imageToShow;
    }),
    //catchError(this.handleError('addHero', hero))
    catchError(this.handleError)
  
  console.log("Finished");
  return this.imageToShow;
  
}




  

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error} `+
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
