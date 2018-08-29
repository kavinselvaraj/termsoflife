import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { TruncateModule } from 'ng2-truncate';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FirebaseDemoComponent } from './firebase-demo/firebase-demo.component';
import { SeoService } from './seo.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonServiceService } from './common-service.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { DetailsPageComponent } from './details-page/details-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { Angular2SocialLoginModule } from "angular2-social-login";
let providers = {
  "google": {
    "clientId": "GOOGLE_CLIENT_ID"
  },
  "linkedin": {
    "clientId": "LINKEDIN_CLIENT_ID"
  },
  "facebook": {
    "clientId": "1127541460967879",
    "apiVersion": "v2.4"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    FirebaseDemoComponent,
    HeaderComponent,
    FooterComponent,
    DetailsPageComponent,
    SearchPageComponent,
    SearchDetailsComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgxPaginationModule,
    TruncateModule,
    FormsModule,
    ReactiveFormsModule,
    Angular2SocialLoginModule 
  ],

  providers: [SeoService,CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);