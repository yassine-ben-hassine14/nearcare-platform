import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { QuiSommesNousComponent } from './pages/qui-sommes-nous/qui-sommes-nous';
import { ContactPageComponent } from './pages/contact/contact';
import { JoindreNearcarePageComponent } from './pages/joindre-nearcare/joindre-nearcare';
import { RecommandationPageComponent } from './pages/recommandation/recommandation';
import { FonctionnalitesPageComponent } from './pages/fonctionnalites/fonctionnalites';
import { AdminDashboardPageComponent } from './pages/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'qui-sommes-nous', component: QuiSommesNousComponent },
  { path: 'fonctionnalites', component: FonctionnalitesPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'joindre-nearcare', component: JoindreNearcarePageComponent },
  { path: 'recommandation', component: RecommandationPageComponent },
  { path: 'admin', component: AdminDashboardPageComponent }
];