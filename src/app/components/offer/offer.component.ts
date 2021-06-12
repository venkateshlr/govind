import { Component, OnInit } from '@angular/core';
import {SharedPreferences} from '../../utils/SharedPreferences';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  //public Offershow:boolean = true;

  constructor(public mSharedPreferences: SharedPreferences) { }

  ngOnInit(): void {
    this.mSharedPreferences.offerShow=true;
  }

}
