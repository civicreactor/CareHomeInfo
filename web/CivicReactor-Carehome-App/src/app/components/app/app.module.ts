import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutCmp } from '../about/about';
import { HomeCmp } from '../home/home';
import { MapCmp } from '../map/map';
import { MapInputCmp } from '../map-input/map-input';
import { NewsCmp } from '../news/news';
import { SuggestionsCmp } from '../suggestions/suggestions';

import { PostcodeService } from '../../services/postcode';
import { NewsService } from '../../services/news';
import { PopupService } from '../../services/popup';
import { CarehomesService } from '../../services/carehomes';
import { EmailService } from '../../services/email';


const appRoutes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  { 
    path: '', component: HomeCmp},
  {
    path: 'about',
    component: AboutCmp
  },
  { path: 'news', component: NewsCmp},
  { path: 'suggestions', component: SuggestionsCmp}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutCmp,
    HomeCmp,
    MapCmp,
    NewsCmp,
    MapInputCmp,
    SuggestionsCmp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostcodeService,
    CarehomesService,
    NewsService,
    PopupService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
