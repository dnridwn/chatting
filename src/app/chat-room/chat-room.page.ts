import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
})
export class ChatRoomPage implements OnInit {

  public displayName: string;
  public inputText: string = '';
  public messages: any[] = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.displayName = params.displayName;
    });

    this.messages = [
      {
        type: 'text',
        text: 'Halo ariel!',
        position: 'right'
      },
      {
        type: 'text',
        text: 'Halo jugaaa!',
        position: 'left'
      },
      {
        type: 'text',
        text: 'Kamu lagi apa riel?',
        position: 'right'
      },
      {
        type: 'text',
        text: 'Lagi mikirin kamu :*',
        position: 'left'
      },
      {
        type: 'text',
        text: 'Anjay hahaha',
        position: 'left'
      },
      {
        type: 'image',
        imageUrl: 'https://cdn.dnridwn.site/dummy.png',
        position: 'right'
      }
    ];
  }

  send() {
    this.messages.push({
      text: this.inputText,
      position: 'right'
    });

    this.inputText = '';
  }

}
