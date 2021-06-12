import { Component, OnInit, ViewChild, ElementRef,Input } from '@angular/core';
import { ViewContainerRef, ComponentFactoryResolver } from'@angular/core';
import {SharedPreferences} from '../../utils/SharedPreferences';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AppComponent } from '../../app.component'
import { Config, ConfigWebService } from '../../service/WebService';
import { ProfileHostDirective } from '../../utils/profile-host.directive';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  @ViewChild('container', { static: true, read: ViewContainerRef })
  entry: ViewContainerRef;
  @ViewChild('containerFooter', { static: true, read: ViewContainerRef })
  entryFooter: ViewContainerRef;
  
  profileHost: ProfileHostDirective;
    
  constructor(public mSharedPreferences: SharedPreferences,
    private resolver: ComponentFactoryResolver,
    private configWebService: ConfigWebService, 
    private router: Router,
    
    ) { }

  ngOnInit(): void {
    console.log("[info] Received user name is");
    //console.log(this.userName);
    //console.log(this.mSharedPreferences.LOGIN_USERNAME);

  }
  

  dummy(): void{
   
    console.log("we are here");
    this.mSharedPreferences.homePageShow_STATUS(false);

    this.router.navigate(['/home']);
    //this.router.navigate(['#']);

    //console.log(this.mSharedPreferences.homePageShow);

    /*this.entry.clear();
    this.entryFooter.clear();
    this.mSharedPreferences.homeShow_STATUS(false);
    const factory = this.resolver.resolveComponentFactory(AppComponent);
    const componentRef = this.entry.createComponent(factory);
    */

    //this.mSharedPreferences.homeShow_STATUS(false);
    //componentRef.onDestroy; 
    //const componentRef = this.entry.createEmbeddedView;
    
    //this.entryFooter.clear();
    
  }
  login(): void{
   
    if(! this.mSharedPreferences.loginStatus){
      this.mSharedPreferences.featuredShow=false;
      this.entry.clear();
      const factory = this.resolver.resolveComponentFactory(LoginComponent);
      const componentRef = this.entry.createComponent(factory);
    } else {
      window.alert("You already logged in");
    }
  }

  signup(): void{
    console.log("we are in signup");
    const viewContainerRef = this.profileHost.viewContainerRef;
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(SignupComponent);
    const componentRef = this.entry.createComponent(factory);    
    this.configWebService.loadComponent(viewContainerRef)
  }


}
