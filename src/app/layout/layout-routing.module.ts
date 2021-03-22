import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../_guard/auth.guard';
import { PublicationsComponent } from '../publications/publications.component';
import { AddPublicationComponent } from '../add-publication/add-publication.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'publications', component: PublicationsComponent },
      { path: 'add', component: AddPublicationComponent },
      { path: '', redirectTo: 'publications', pathMatch: 'full' },
    ],
    canActivate: [ AuthGuard ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
