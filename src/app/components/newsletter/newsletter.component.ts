import { Component, OnInit } from '@angular/core';
import {SharedPreferences} from '../../utils/SharedPreferences';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  constructor(public mSharedPreferences: SharedPreferences) { }

  ngOnInit(): void {
    this.mSharedPreferences.newsletterShow=true;
  }

}
