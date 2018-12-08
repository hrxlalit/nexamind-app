


import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //component: WelcomeComponent,
  },
  { path: '**', redirectTo: 'index.html', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
