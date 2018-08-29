import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { GlobalVariable } from '../global.service';
import { CommonServiceService } from '../common-service.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { TruncateModule } from 'ng2-truncate';
import { element } from 'protractor';
import {Pipe,PipeTransform} from "@angular/core";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
  
})
export class AboutPageComponent implements OnInit {
  p: number = 1;
blogdetails:any;
singdetails:any;
longtest:any;
previous:any;
descri=[];
feature_post=[];
feature_post1=[];
img_path : string ="http://termsoflife.com/api_v1/upload/";
blogs:any;
collection = [];
public blog_ban =  GlobalVariable.BASE_API_URL+"Homebanner/blogbanner";
  constructor(private seo: SeoService, 
    private _service:CommonServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  public get_details_page=GlobalVariable.BASE_API_URL+"blog/getcategoryblogs";  
  id = 'first_blog_seo';
  category = 'second';
  ngOnInit() {
    this.longtest="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    this._service.list(this.blog_ban).subscribe(blogdetails =>{
      this.blogdetails = blogdetails;      
    })
    this.getDetailpage();
  }
  getDetailpage()
  {
    this._service.
    list(this.get_details_page+'?category=May1').subscribe(singdetails =>{
      this.singdetails = singdetails.full;
      this.feature_post = singdetails.sub;
     //this.descri=this.singdetails.full['blog_description'];         
      for(var key in this.feature_post){
        if(this.feature_post[key].blog.length > 0){
          this.feature_post1.push(this.feature_post[key]);
        }
        for(var key1 in this.feature_post[key].blog){
          this.collection.push(this.feature_post[key].blog[key1]);
        } 
      }
      for(var key2 in this.singdetails)
      {
        this.descri.push(this.singdetails[key2]['blog_description'].slice(0,4));   
      }
      
    })    
  }
}
