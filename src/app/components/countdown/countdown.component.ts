import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountdownGlobalConfig } from 'ngx-countdown';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  format: string;


  constructor() { }

  ngOnInit() {}


}
