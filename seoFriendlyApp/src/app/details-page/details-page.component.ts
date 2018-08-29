import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { GlobalVariable } from '../global.service';
import { CommonServiceService } from '../common-service.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AuthService } from "angular2-social-login";


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  singdetails:any;
  previous:any;
  sub5:any;
  sub:any;

  public user;
  sub1: any;
   
  feature_post=[];
feature_post1=[];
blogs:any
collection =[];
  sub_caty:any;
  constructor(
    private seo: SeoService, 
    private _service:CommonServiceService,
    private router: Router,
    private route: ActivatedRoute,
    public _auth: AuthService
  )
  { }
  ngOnInit() {
    this.getDetailpage();
  }
  public get_details_page=GlobalVariable.BASE_API_URL+"blog/getblogimages";
  img_path : string ="http://termsoflife.com/api_v1/upload/";
  id = this.route.snapshot.params['id'];
  category = this.route.snapshot.params['category'];
  getDetailpage()
  {
    this.route.params.subscribe(params =>
    {
    this._service.
    list(this.get_details_page+'?category='+params.category+'&id='+params.id).
    subscribe(singdetails =>{
      this.singdetails = singdetails;
      this.feature_post =singdetails.sub;
      this.feature_post1=[];
      this.collection=[];
      for(var key in this.feature_post){
        if(this.feature_post[key].blog.length > 0){
          
          this.feature_post1.push(this.feature_post[key]);
        }
        for(var key1 in this.feature_post[key].blog){
          
          this.collection.push(this.feature_post[key].blog[key1]);
        }
      }

          
    })
  })
  }
  detailover()
  {
    this.getDetailpage();
  }
  signIn(provider){
    this.sub1 = this._auth.login(provider).subscribe(
      (data) => {
        console.log(data);this.user=data;}
    )
  }

  logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data);this.user=null;}
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
}
}
