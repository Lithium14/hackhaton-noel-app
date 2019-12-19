import { Component, OnInit, Input } from '@angular/core';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() title;
  @Input() score;

  constructor() { }

  ngOnInit() {
  }

}
