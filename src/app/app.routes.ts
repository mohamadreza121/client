import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { ItemsComponent } from './pages/items/items.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'heroes', component: HeroesComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];
