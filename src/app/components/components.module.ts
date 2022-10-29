import { IonicModule } from '@ionic/angular';
import { StatusItemComponent } from './status-item/status-item.component';
import { StatusListComponent } from './status-list/status-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { BubbleChatComponent } from './bubble-chat/bubble-chat.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactItemComponent } from './contact-item/contact-item.component';

@NgModule({
  declarations: [
    ChatListComponent,
    ChatItemComponent,
    StatusListComponent,
    StatusItemComponent,
    BubbleChatComponent,
    ContactListComponent,
    ContactItemComponent
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
    BubbleChatComponent,
    ContactListComponent,
    ContactItemComponent
  ]
})
export class ComponentsModule { }
