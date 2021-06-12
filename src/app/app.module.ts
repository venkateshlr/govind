import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { AppComponent } from '../app/order/config.component';
//import { ConfigAppComponent } from './login/config.component';
//import { OrderAppComponent } from './order/config.component';
//import { SignupAppComponent } from './signup/config.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ObserversModule } from '@angular/cdk/observers';
import {SharedPreferences} from './utils/SharedPreferences';
//import { MessageService } from './service/message.service';
//import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { MatToolbarModule} from  '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { TrendingComponent } from './components/trending/trending.component';
import { OfferComponent } from './components/offer/offer.component';
import { NewcollectionsComponent } from './components/newcollections/newcollections.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
//import { LoginComponent } from './components/login/login.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ConfigWebService } from './service/WebService';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
      path: 'home',
      component: DashboardComponent
  },
  /*{
    path: 'order',
    //component: OrderAppComponent
    } ,*/
    {
      path: 'signup',
      component: SignupComponent
      } ,

      /*{SignupComponent
        path: 'signup',
        //component: SignupAppComponent
        redirectTo: '/login'
        }   */
      {
        path:'**',
        redirectTo:'home'
      }
]

@NgModule({
  declarations: [
    AppComponent,
   // ConfigAppComponent,
    //OrderAppComponent,
    //SignupAppComponent,
    HomeComponent,
    FeaturedComponent,
    CollectionsComponent,
    TrendingComponent,
    OfferComponent,
    NewcollectionsComponent,
    NewsletterComponent,
    //LoginComponent,
    ProductdetailsComponent,
    SignupComponent,
    LoginComponent,
    ProductdetailsComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    
    //RouterModule,
    //RouterModule.forRoot([{ path: "config", component: ConfigAppComponent}])
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    //AppComponent, 
    //ConfigAppComponent,
    //OrderAppComponent,
    //SignupAppComponent,
    RouterModule],

  providers: [SharedPreferences,ConfigWebService],
  bootstrap: [
    AppComponent,
    //ConfigAppComponent,
    //RouterModule,
    
  ],
  entryComponents:[NewsletterComponent]
})
export class AppModule { }
