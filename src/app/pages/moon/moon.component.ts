import { Elf } from './../../shared/class/elf';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.scss']
})
export class MoonComponent implements OnInit {

  title = 'Moon';

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
  }



  elfDetected(index:number, id: number) {
    if (id > 1) {
      this.score += 50;
    } else {
      this.score -= 100;
    }
    console.log(this.score);
    console.log(id);

    return this.elfs.splice(index, 1);

  }
}
