import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LetterComponent } from './pages/scenario/letter/letter.component';
import { SantaComponent } from './pages/scenario/santa/santa.component';


const routes: Routes = [
{ path: 'santa', component: SantaComponent},
{ path: 'letter', component: LetterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
