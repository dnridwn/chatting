import { IonicModule } from '@ionic/angular';
import { StatusItemComponent } from './status-item/status-item.component';
import { StatusListComponent } from './status-list/status-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { BubbleChatComponent } from './bubble-chat/bubble-chat.component';

@NgModule({
  declarations: [
    ChatListComponent,
    ChatItemComponent,
    StatusListComponent,
    StatusItemComponent,
    BubbleChatComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ChatListComponent,
    ChatItemComponent,
    StatusListComponent,
    StatusItemComponent,
    BubbleChatComponent
  ]
})
export class ComponentsModule { }
