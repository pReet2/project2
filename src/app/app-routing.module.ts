import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { DetailComponent } from './posts/create/detail/detail.component';
import { SubjectComponent } from './posts/create/detail/subject/subject.component';
import { InfoComponent } from './posts/create/detail/subject/info/info.component';
import { CreateComponent } from './posts/create/create.component';




  const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'posts',
        children: [
          {
            path: '',
            component: PostsComponent
          },
          {
              path: 'create',
              component: CreateComponent,
              children:[
                {
                  path: 'detail',
                  component: DetailComponent, 
                  children:[
                    {
                      path: 'subject',
                      component: SubjectComponent, 
                      children:[
                        {
                          path: 'info',
                          component: InfoComponent, 
                      }
               
                      ]
        
                  }
           
                  ]
    
              }
       
              ]
          },
            ]
    }
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
