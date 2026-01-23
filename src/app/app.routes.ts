import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { QuiSommesNousComponent } from './pages/qui-sommes-nous/qui-sommes-nous';
import { ContactPageComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'qui-sommes-nous', component: QuiSommesNousComponent },
  { path: 'contact', component: ContactPageComponent }
];