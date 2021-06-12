import { Component, OnInit } from '@angular/core';
import {SharedPreferences} from '../../utils/SharedPreferences';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  
  constructor(public mSharedPreferences: SharedPreferences) { }

  ngOnInit(): void {
    this.mSharedPreferences.trendingShow=true;
  }

}
