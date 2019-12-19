import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountdownModule, CountdownGlobalConfig } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LetterComponent } from './pages/scenario/letter/letter.component';
import { SantaComponent } from './pages/scenario/santa/santa.component';
import { GameHomepageComponent } from './pages/game-homepage/game-homepage.component';


import { SigninComponent } from './pages/signin/signin.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { MoonComponent } from './pages/moon/moon.component';
import { MarsComponent } from './components/mars/mars.component';
import { CountdownComponent } from './components/countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LetterComponent,
    SantaComponent,
    GameHomepageComponent,
    SigninComponent,
    MoonComponent,
    MarsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    CountdownComponent,
    CountdownModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [
    { provide: CountdownGlobalConfig }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
