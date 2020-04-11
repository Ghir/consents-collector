import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectedConsentsComponent } from './components/collected-consents/collected-consents.component';
import { NewConsentComponent } from './components/new-consent/new-consent.component';

const routes: Routes = [
  {
    path: '',
    component: NewConsentComponent
  },
  {
    path: 'collected',
    component: CollectedConsentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
