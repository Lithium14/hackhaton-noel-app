import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';

import { Score } from '../../shared/models/score';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('counter', { static: false }) countdown: CountdownComponent;

  constructor() { }

  format: string;

  config: CountdownConfig = {format: 's', leftTime: 30};

  timeOut = false;
  @Input() title;
  @Input() score;

  ngOnInit(): void {

  }


terminate(event: CountdownEvent) {
  if (event.action === 'done') {
    this.timeOut = true;
  }

}

stop() {
  this.countdown.stop();
}
}

