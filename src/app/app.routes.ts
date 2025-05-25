import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/Portfoilio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: "home", pathMatch: "full", title: "Home" },
    { path: 'home', component: HomeComponent, title: "Home" },
    { path: 'about', component: AboutComponent, title: "About" },
    { path: 'portfolio', component: PortfolioComponent, title: "Portfolio" },
    { path: 'contact', component: ContactComponent, title: "Contact" },
    { path: '**', component: NotFoundComponent, title: "ERROR 404" },
];
