import { Component, OnInit, Input } from '@angular/core';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';

import { Score } from '../../shared/models/score';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( ) { }


  @Input() title;
  @Input() score;

  ngOnInit() {
    const id = window.setTimeout(() => {
      alert('Hello World!');
    }, 30000);


  }

}
