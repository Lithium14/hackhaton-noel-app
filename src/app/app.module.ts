import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LetterComponent } from './pages/scenario/letter/letter.component';
import { SantaComponent } from './pages/scenario/santa/santa.component';
import { GameHomepageComponent } from './pages/game-homepage/game-homepage.component';
import { MoonComponent } from './pages/moon/moon.component';
import { MarsComponent } from './components/mars/mars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LetterComponent,
    SantaComponent,
    GameHomepageComponent,
    MoonComponent,
    MarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
