import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor(private seo: SeoService) { }
  
  ngOnInit() {
    this.seo.generateTags({
      title: 'Contact1 Page', 
      description: 'Contact me through this awesome search engine optimized Angular component', 
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'contact-page'
    })

  }

}
