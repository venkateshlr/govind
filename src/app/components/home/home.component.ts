import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ElementRef, ViewContainerRef, ViewChild,ComponentFactoryResolver } from'@angular/core';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import {SharedPreferences} from '../../utils/SharedPreferences';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent implements OnInit {
  name = 'Angular';
  @ViewChild('container', { static: true, read: ViewContainerRef }) entry: ViewContainerRef;
  
  constructor(
    private router: Router,
    private resolver: ComponentFactoryResolver,
    public mSharedPreferences: SharedPreferences,
    ) {
    
  }

  ngOnInit(): void {
    this.mSharedPreferences.homeShow=true;
  }

  signup(): void{
    console.log("[info] signup");
    //this.router.navigate(['/login'])
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(NewsletterComponent);
    const componentRef = this.entry.createComponent(factory);
    //componentRef.instance.name = this.name;
    

  }

}
