import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  { path: 'publications', component: PublicationsComponent },
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
