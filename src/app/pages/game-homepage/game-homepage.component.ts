import { Component, OnInit, Input } from '@angular/core';
import { MergeMapSubscriber } from 'rxjs/internal/operators/mergeMap';

@Component({
  selector: 'app-game-homepage',
  templateUrl: './game-homepage.component.html',
  styleUrls: ['./game-homepage.component.scss']
})
export class GameHomepageComponent implements OnInit {

  planetName: string;
  planets: ['Mercure', 'Mars', 'Venus', 'Terre', 'Jupiter', 'Saturne', 'Uranus', 'Neptune', 'Moon'];

  constructor() { }

  ngOnInit() {

  }

  displayNumber(i) {

  }

  hideNumber() {

  }


}
