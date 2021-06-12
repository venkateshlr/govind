import { Component, OnInit } from '@angular/core';
import {SharedPreferences} from '../../utils/SharedPreferences';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  //public Collectionsshow:boolean = true;
  
  constructor(public mSharedPreferences: SharedPreferences ) { }

  ngOnInit(): void {
    this.mSharedPreferences.collectionsShow=true;
  }

}
