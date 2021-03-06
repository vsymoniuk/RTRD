import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';


const routes: Routes = [
  { path: '', children: [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'gallery', component: GalleryComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }