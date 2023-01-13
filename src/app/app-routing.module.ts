import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { FlowWrapperComponent } from './components/flow/flow-wrapper/flow-wrapper.component';

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
  { path: 'flows/:id', component: FlowWrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
