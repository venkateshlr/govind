import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {SharedPreferences} from '../utils/SharedPreferences';

@Injectable()
export class ImageService {

  constructor(private httpClient: HttpClient, 
    private mSharedPreferences: SharedPreferences) { }

  /*getImage(imageUrl: string): Observable<Blob> {
    console.log("getImage");
    console.log(imageUrl);
    return this.httpClient.get(imageUrl, { responseType: 'blob' });
  }*/

  httpOptions = {
    headers: new HttpHeaders({
        //"Authorization": "Bearer " + this.mSharedPreferences.jwtValue,
        "Access-Control-Allow-Origin" : "*",  
        responseType: "blob" 
    },
    
    )
  };

  getImage(imageUrl: string): Observable<any> {
    console.log("getImage");
    console.log(imageUrl);
    return this.httpClient.get(imageUrl, 
      this.httpOptions )
    }

}