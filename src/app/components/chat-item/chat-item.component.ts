import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss'],
})
export class ChatItemComponent implements OnInit {

  @Input() pictureUrl: string;
  @Input() displayName: string;
  @Input() lastMessage: string;
  @Input() displayTime: string;
  @Input() unreadMessageCount: number;

  constructor() { }

  ngOnInit() {}

}
