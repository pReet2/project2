import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CreateComponent } from './posts/create/create.component';
import { DetailComponent } from './posts/create/detail/detail.component';
import { SubjectComponent } from './posts/create/detail/subject/subject.component';
import { InfoComponent } from './posts/create/detail/subject/info/info.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CreateComponent,
    DetailComponent,
    SubjectComponent,
    InfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
