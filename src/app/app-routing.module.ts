import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationsComponent } from './publications/publications.component';
import { AddPublicationComponent } from './add-publication/add-publication.component';

const routes: Routes = [
  { path: 'publications', component: PublicationsComponent },
  { path: 'add', component: AddPublicationComponent },
  { path: '', redirectTo: 'publications', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
