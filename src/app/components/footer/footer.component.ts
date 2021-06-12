import { Component, OnInit } from '@angular/core';
import {SharedPreferences} from '../../utils/SharedPreferences';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public mSharedPreferences: SharedPreferences,) { }

  ngOnInit(): void {
    
    this.mSharedPreferences.footerShow=true;
  }

}
