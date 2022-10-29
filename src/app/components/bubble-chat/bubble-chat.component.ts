import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-chat',
  templateUrl: './bubble-chat.component.html',
  styleUrls: ['./bubble-chat.component.scss'],
})
export class BubbleChatComponent implements OnInit {

  @Input() type: string;
  @Input() time: string;
  @Input() text: string;
  @Input() position: string;
  @Input() imageUrl: string;

  constructor() { }

  ngOnInit() {}

}
