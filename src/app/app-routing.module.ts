import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { FlowComponent } from './components/flow/flow.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'flows',
    pathMatch: 'full'
  },
  {
    path: 'flows',
    component: ContentComponent,
  },
  { path: 'flows/:id', component: FlowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
