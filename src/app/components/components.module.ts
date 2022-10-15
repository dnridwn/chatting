import { IonicModule } from '@ionic/angular';
import { StatusItemComponent } from './status-item/status-item.component';
import { StatusListComponent } from './status-list/status-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatItemComponent } from './chat-item/chat-item.component';


@NgModule({
  declarations: [
    ChatListComponent,
    ChatItemComponent,
    StatusListComponent,
    StatusItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ChatListComponent,
    ChatItemComponent,
    StatusListComponent,
    StatusItemComponent
  ]
})
export class ComponentsModule { }
