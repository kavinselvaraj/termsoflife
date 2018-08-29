import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../global.service';
import { CommonServiceService } from '../common-service.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { Search } from '../search';
@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {
  p: number = 1;
  isLoading: boolean;
  searchdetails:any;
  descri=[];
  img_path : string ="http://termsoflife.com/api_v1/upload/";
  public search_details = "http://termsoflife.com/api_v1/index.php/user/search/search";

  constructor(
    private _service:CommonServiceService,
    private router: Router
  ) { 
   
  }

  ngOnInit() {
    this.isLoading = true;
    this._service.searchdetails(this.search_details,this._service.SearchResult).subscribe(
      searchdetails => {  
        this.isLoading =false;
        this.searchdetails=searchdetails;
        for(var key2 in this.searchdetails)
        {
          this.descri.push(this.searchdetails[key2]['blog_description'].slice(0,4));   
        }
   });  
  }
  model =new Search();
  /*searcharr(){
    this._service.search(this.search_details,this.model.username).subscribe(
      searchdetails => {  
        console.log(searchdetails)
   });
  }*/
}
