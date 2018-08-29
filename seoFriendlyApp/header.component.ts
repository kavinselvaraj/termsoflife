import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../global.service';
import { CommonServiceService } from '../common-service.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header_page : any;
  subcategory:any;
  public header_details = GlobalVariable.BASE_API_URL+"header/getheaders";
  constructor(
    private _service:CommonServiceService,
    private router: Router
  ) { }

  navbarsuces=true;
  showdd = false;

  ngOnInit() {
    this.navbarsuces=true;
    this._service.list(this.header_details).subscribe(header_page =>{
      console.log(header_page[0])
      this.header_page = header_page;
    })
  }

  taball(a) {
    for (var i = 0; i < this.header_page.length; i++) {
      //var keys = Object.keys(this.header_page[i]); 
        var record = this.header_page[i].category_id;
        if (record == a ) {
         this.subcategory = this.header_page[i].sub_category;
         console.log(this.subcategory)
         this.showdd = true;
        }else{
          this.showdd = false;
        }
      }
  
    this.showdd = true;
  }
tabsub(b)
{
  alert('sg')
}
  taball1(){
    this.showdd = false;    
  }

}
