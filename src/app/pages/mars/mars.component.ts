import { Elf } from './../../shared/models/elf';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss']
})
export class MarsComponent implements OnInit {


  @ViewChild('navbar', {static: true}) navbar: NavbarComponent;

  title = "Mars";

stopCount = false;

  nbElfsDetected: number;
  allElfsDetected: boolean;
  score = 0;
  elfs: Elf[] = [{
    id: 1,
    name: 'et1',
    image: 'https://i.postimg.cc/WpysWSTF/et1.png'
  },
  {
    id: 2,
    name: 'elf1',
    image: 'https://i.postimg.cc/PqqSLW9h/elf1.png'
  },
  {
    id: 3,
    name: 'elf2',
    image: 'https://i.postimg.cc/d3808Tpt/elf2.png'
  },
  {
    id: 4,
    name: 'elf3',
    image: 'https://i.postimg.cc/RV8NjKxh/elf3.png'
  },
  {
    id: 5,
    name: 'elf4',
    image: 'https://i.postimg.cc/XYj41vpq/elf4.png'
  }];

  constructor() { }

  ngOnInit() {
    this.score = 0;
    this.nbElfsDetected = 0;
    this.allElfsDetected = false;

  }



  elfDetected(index: number, id: number) {
    if (id > 1) {
      this.score += 50;
    } else {
      this.score -= 100;
    }
    if (id > 1) {
      this.nbElfsDetected += 1;
    }
    if (this.nbElfsDetected === 4) {
      this.allElfsDetected = true;
      this.navbar.stop();
    }

    console.log(this.score);
    console.log(id);

    return this.elfs.splice(index, 1);
  }
}

