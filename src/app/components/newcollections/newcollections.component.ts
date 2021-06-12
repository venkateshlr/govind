import { Component, OnInit } from '@angular/core';
import {SharedPreferences} from '../../utils/SharedPreferences';

@Component({
  selector: 'app-newcollections',
  templateUrl: './newcollections.component.html',
  styleUrls: ['./newcollections.component.css']
})
export class NewcollectionsComponent implements OnInit {
  
  constructor(public mSharedPreferences: SharedPreferences) { }

  ngOnInit(): void {
    this.mSharedPreferences.newCollectionsShow=true;
  }

}
