import { SocketService } from './../shared/services/socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.scss']
})
export class SocketComponent implements OnInit {

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.listen('test event')
    .subscribe((data) => {
      console.log(data);
    });
  }

}
