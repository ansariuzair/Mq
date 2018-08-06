import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { RouterModule } from  '@angular/router';
import { Routes } from  '@angular/router';
import { ToolsComponent } from './tools/tools.component';
import { NewsComponent } from './news/news.component';

export const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'tools',component:ToolsComponent},
  {path:'news',component:NewsComponent},
  {path:'**',component:NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    NotfoundComponent,
    ToolsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }