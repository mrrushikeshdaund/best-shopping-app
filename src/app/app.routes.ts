import { Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { CatlogPageComponent } from '../components/catlog-page/catlog-page.component';
import { DetailsPageComponent } from '../components/details-page/details-page.component';

export const routes: Routes = [
    {path:'home',component:HomePageComponent},
    {path:'catlog',component:CatlogPageComponent},
    {path:'details',component:DetailsPageComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];
