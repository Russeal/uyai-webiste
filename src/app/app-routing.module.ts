import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './layout/contact/contact.component';
import { FaqComponent } from './layout/faq/faq.component';

import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './layout/main/main.component';
import { TeamComponent } from './layout/team/team.component';
import { BolognaComponent } from './layout/universities/bologna/bologna.component';
import { CaFoscariComponent } from './layout/universities/ca-foscari/ca-foscari.component';
import { SapienzaComponent } from './layout/universities/sapienza/sapienza.component';
import { UniversitiesComponent } from './layout/universities/universities.component';


const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', component: LayoutComponent, children: [
          { path: '', component: MainComponent },
          { path: 'faq', component: FaqComponent },
          { path: 'contact', component: ContactComponent },
          { path: 'universities', children: [
              { path: '', component: UniversitiesComponent },
              { path: 'sapienza', component: SapienzaComponent },
              { path: 'bologna', component: BolognaComponent },
              { path: 'ca-foscari', component: CaFoscariComponent }
            ]
          },
          { path: 'our-team', component: TeamComponent }
        ]
      },
      { 
        path: 'it', component: LayoutComponent, children: [
          { path: '', component: MainComponent },
          { path: 'faq', component: FaqComponent },
          { path: 'contact', component: ContactComponent },
          { path: 'universities', children: [
              { path: '', component: UniversitiesComponent },
              { path: 'sapienza', component: SapienzaComponent },
              { path: 'bologna', component: BolognaComponent },
              { path: 'ca-foscari', component: CaFoscariComponent }
            ]
          },
          { path: 'our-team', component: TeamComponent }
        ]
      },
      { 
        path: 'en', component: LayoutComponent, children: [
          { path: '', component: MainComponent },
          { path: 'faq', component: FaqComponent },
          { path: 'contact', component: ContactComponent },
          { path: 'universities', children: [
              { path: '', component: UniversitiesComponent },
              { path: 'sapienza', component: SapienzaComponent },
              { path: 'bologna', component: BolognaComponent },
              { path: 'ca-foscari', component: CaFoscariComponent }
            ]
          },
          { path: 'our-team', component: TeamComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
