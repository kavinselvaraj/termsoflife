import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component'; 
import { FirebaseDemoComponent } from './firebase-demo/firebase-demo.component'; 
import { DetailsPageComponent } from './details-page/details-page.component'; 
import { SearchDetailsComponent } from './search-details/search-details.component';
const routes: Routes = [
  { path: '', component: HomePageComponent, },
  { path: 'blog', component: AboutPageComponent, },
  { path: 'contact-page', component: ContactPageComponent, },
  { path: 'firebase-page', component: FirebaseDemoComponent, },
  { path: ':category/:id', component: DetailsPageComponent, },
  { path: 'search', component: SearchDetailsComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
