import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Subject, ReplaySubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'; 
import 'rxjs/add/operator/catch'; 
import {ActivatedRoute, Params, Router} from '@angular/router';


@Injectable()
export class CommonServiceService {

  public SearchResult = {}
  constructor(private _http:Http, private router: Router  ){
  }
  
  list(url){
    return this._http.get(url)
    .map(res=>{
      return res.json()
    });    
 }

 searchdetails(url,name){
    return this._http.get(url,name)
    .map(res=>{
      return res.json()
    });    
 }
 search(username){   
  this.SearchResult = username;
  this.router.navigateByUrl('search')
}

}
