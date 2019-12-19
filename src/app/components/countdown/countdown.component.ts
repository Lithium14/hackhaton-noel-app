import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountdownGlobalConfig, CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  format: string;

  config: CountdownConfig = {format: 's', leftTime: 30};

  constructor() { }

  ngOnInit() {}


}
