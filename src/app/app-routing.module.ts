import { MoonComponent } from './pages/moon/moon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameHomepageComponent } from './pages/game-homepage/game-homepage.component';


const routes: Routes = [
  {
    path: 'game',
    component: GameHomepageComponent
  },
  {
    path: 'moon',
    component: MoonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
