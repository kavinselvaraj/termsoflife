import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { GlobalVariable } from '../global.service';
import { CommonServiceService } from '../common-service.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { element } from 'protractor';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  blog:any;
  //isLoading:
  isLoading: boolean;
  homedetails:any;
  banner:any;
  whatsnew:any;
  what_should_know:any;
  title : string = "";
   img_path : string ="http://termsoflife.com/api_v1/upload/";
  public get_ban_whats = GlobalVariable.BASE_API_URL+"User/listblogs";
  public home_ban =  GlobalVariable.BASE_API_URL+"Homebanner/homebanner";
  public whatshouldknow =  GlobalVariable.BASE_API_URL+"Homebanner/whatshouldknow";
  constructor(private seo: SeoService, private _service:CommonServiceService,private router: Router) {
    this._service.list(this.get_ban_whats).subscribe(blog =>{
     this.isLoading =false;
      this.blog = blog
      Object.keys(blog).forEach(function(key) {
          
          if(blog[key].page_pos != 0){
            this.banner.push(blog[key]);
          }else{
            this.whatsnew.push(blog[key]);
          }
         
          //page_pos
      })
      
 
      this.title = blog[0].blog_name;
      this.seo.generateTags({
        title: this.title, 
        description: 'Home Home Home this awesome search Home optimized Angular component', 
        image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
        slug: 'Home-page'
      })
    });
   }
  ngOnInit() {
    this.isLoading = true;
    this._service.list(this.home_ban).subscribe(homedetails =>{
      this.isLoading =false;
     

      this.homedetails = homedetails;
      
    })  
    this._service.list(this.whatshouldknow).subscribe(what_should_know =>{
      
      this.what_should_know = what_should_know;
      console.log(this.what_should_know)
      
    })  
    
  }
}
