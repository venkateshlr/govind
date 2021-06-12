import { Component, OnInit, ViewContainerRef,ViewChild,ComponentFactoryResolver } from '@angular/core';
import { Config, ConfigWebService } from '../../service/WebService';
import { Hero } from '../../hero';
import {SharedPreferences} from '../../utils/SharedPreferences';
import { FeaturedComponent } from '../featured/featured.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('containerHeader', { static: true, read: ViewContainerRef }) 
  entryHeader: ViewContainerRef;

  heroes: Hero[];
  constructor(private configWebService: ConfigWebService,
    public mSharedPreferences: SharedPreferences,
    private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,) { }

  ngOnInit(): void {
    this.mSharedPreferences.loginShow=true;



  }

  onClickLogin(loginData) : void {
    console.log("[info] Login components: onClickLogin ");
          this.configWebService
        .login(loginData.emailid,loginData.passwd)
         .subscribe((data: any) => {
          console.log("[info] Login table is retrived as below");
          console.log(data);

              if(data.status == true){
              
                this.mSharedPreferences.LOGIN_USERNAME(loginData.emailid);
                this.mSharedPreferences.LOGIN_STATUS(true);
                this.mSharedPreferences.LOGIN_PASSWORD(loginData.passwd);
                this.mSharedPreferences.PASSWORD_UPDATE_STATUS("true");
          
                this.mSharedPreferences.JWT(data.user.token);
                this.mSharedPreferences.LOGIN_MOBILE(data.user.mobile);
                this.mSharedPreferences.LOGIN_PICTURE(data.user.profilePic);
                this.mSharedPreferences.CUSTOM_TOKEN(data.user.CUSTOM_TOKEN);
                
                this.mSharedPreferences.loginShow=false;
                this.mSharedPreferences.featuredShow=true;

                this.entryHeader.clear();
                const factory = this.resolver.resolveComponentFactory(HeaderComponent);
                const componentRef = this.entryHeader.createComponent(factory).instance;
                //console.log(this.mSharedPreferences.LOGIN_USERNAME);
                //componentRef.userName=loginData.emailid;

              } else {
              console.log("[info] Response status is flase" );
            }
              
         });
    }

}
