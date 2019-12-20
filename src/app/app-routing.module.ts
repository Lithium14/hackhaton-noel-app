import { SocketComponent } from './socket/socket.component';
import { MarsComponent } from './pages/mars/mars.component';

import { SigninComponent } from './pages/signin/signin.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MoonComponent } from './pages/moon/moon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LetterComponent } from './pages/scenario/letter/letter.component';
import { SantaComponent } from './pages/scenario/santa/santa.component';
import { GameHomepageComponent } from './pages/game-homepage/game-homepage.component';
import { TableauScoreComponent } from './pages/tableau-score/tableau-score.component';


const routes: Routes = [
  {  path: '',
    component: HomepageComponent},
  {
     path: 'santa',
     component: SantaComponent
  },
  {
    path: 'letter',
    component: LetterComponent
  },

  {
    path: 'game',
    component: GameHomepageComponent
  },
  {
    path: 'moon',
    component: MoonComponent
  },
  {
    path: 'mars',
    component: MarsComponent
  },
  { path: 'socket',
  component: SocketComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
