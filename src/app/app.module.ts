import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountdownModule, CountdownGlobalConfig, CountdownComponent } from 'ngx-countdown';

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
import { HttpClientModule } from '@angular/common/http';
import { MarsComponent } from './pages/mars/mars.component';
import { MoonComponent } from './pages/moon/moon.component';

import { SocketComponent } from './socket/socket.component';


import { NavbarComponent } from './components/navbar/navbar.component';
import { TableauScoreComponent } from './pages/tableau-score/tableau-score.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LetterComponent,
    SantaComponent,
    GameHomepageComponent,
    SigninComponent,
    MoonComponent,
    MarsComponent,
    SocketComponent,




    NavbarComponent,
    CountdownComponent,
    TableauScoreComponent,
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
    CountdownModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    { provide: CountdownGlobalConfig }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
