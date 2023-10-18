import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { ComicslistComponent } from './comicslist/comicslist.component';
import { ComicsComponent } from './comics/comics.component';
import { NiyamComponent } from './niyam/niyam.component';


export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'comics', component: ComicslistComponent},
  { path: 'mycomics', component: ComicsComponent}, 
  { path: 'niyam-chakra', component: NiyamComponent}, 
  { path: 'details/:id', component: EditUserComponent, resolve:{data : EditUserResolver} }

];
