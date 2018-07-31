import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './container/jokes/jokes/jokes.component';

const routes: Routes = [
  { path: '', redirectTo: 'jokes', pathMatch: 'full' },
  {
    path: 'jokes',
    component: JokesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
