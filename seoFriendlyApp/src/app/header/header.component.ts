import { Component,OnInit} from '@angular/core';
import { GlobalVariable } from '../global.service';
import { CommonServiceService } from '../common-service.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { Search } from '../search';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header_page:any;
  subcategory:any;
  searchdetails:any;
  blog_data:any;
 
  feature_post=[];
feature_post1=[];
collection=[];
  img_path : string ="http://termsoflife.com/api_v1/upload/";
  public header_details = GlobalVariable.BASE_API_URL+"header/getheaders";
 //public search_details = "http://termsoflife.com/api_v1/index.php/user/search/search";
  constructor(
    private _service:CommonServiceService,
    private router: Router,
    //public name: string

  ) { }

  navbarsuces=true;
  showdd = false;

  ngOnInit() {
    this.navbarsuces=true;
    this._service.list(this.header_details).subscribe(header_page =>{
      
      this.header_page = header_page;
      
      for(var key in this.header_page){
       
        if(this.header_page){
          this.feature_post.push(this.header_page[key].category_name);
        }
        for(var key1 in this.header_page[key].sub_category){
          
          this.collection.push(this.header_page[key].sub_category[key1].subcategory_name);
        }
        this.feature_post1.push(this.collection)
        this.collection=[];
      }


    })
  }

  taball(a) {
    //alert('g')
    for (var i = 0; i < this.header_page.length; i++) {
    
        var record = this.header_page[i].category_id;
        if (record == a ) {
         this.subcategory = this.header_page[i].sub_category;

         this.showdd = true;
        }else{
          this.showdd = false;
        }
     
    }
    this.showdd = true;
  }
  tabsub(b)
{

  for (var i = 0; i < this.header_page.length; i++) {
   
    for(var j=0;j<this.header_page[i].sub_category.length;j++)
    {
      var record = this.header_page[i].sub_category[j].subcategory_id;
    if (record == b) {
     this.blog_data = this.header_page[i].sub_category[j].blog_data; 
     //this.showdd = true;
    }else{
      //this.showdd = false;
    }
  }
}
}
  taball1(){
    this.showdd = false;    
  }

  model =new Search();
  searcharr(){
    this._service.search(this.model.username);
   
  }

}

