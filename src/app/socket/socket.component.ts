import { SocketService } from './../shared/services/socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.scss']
})
export class SocketComponent implements OnInit {

  user: string;
    room: string;
    messageText: string;
    messageArray: Array<{user: string, message: string}> = [];
    constructor(private socketService: SocketService) {
        this.socketService.newUserJoined()
        .subscribe(data => this.messageArray.push(data));


        this.socketService.userLeftRoom()
        .subscribe(data => this.messageArray.push(data));

        this.socketService.newMessageReceived()
        .subscribe(data => this.messageArray.push(data));
    }
    ngOnInit() {}

    join() {
        this.socketService.joinRoom({user: this.user, room: this.room});
    }

    leave() {
        this.socketService.leaveRoom({user: this.user, room: this.room});
    }

    sendMessage() {
        this.socketService.sendMessage({user: this.user, room: this.room, message: this.messageText});
    }

}
