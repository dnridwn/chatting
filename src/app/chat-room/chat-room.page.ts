import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AttachmentModalComponent } from '../components/attachment-modal/attachment-modal.component';

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
    private route: ActivatedRoute,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.displayName = params.displayName;
    });

    this.messages = [
      {
        type: 'text',
        time: '12:03',
        text: 'Halo ariel!',
        position: 'right'
      },
      {
        type: 'text',
        time: '12:07',
        text: 'Halo jugaaa!',
        position: 'left'
      },
      {
        type: 'text',
        time: '13:10',
        text: 'Kamu lagi apa riel?',
        position: 'right'
      },
      {
        type: 'text',
        time: '13:11',
        text: 'Lagi mikirin kamu :*',
        position: 'left'
      },
      {
        type: 'text',
        time: '13:48',
        text: 'Anjay hahaha',
        position: 'left'
      },
      {
        type: 'image',
        time: '14:59',
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

  /**
   * Open attachment modal
   */
  openAttachmentModal() {
    this.modalCtrl.create({
      component: AttachmentModalComponent,
      breakpoints: [0, 0.25],
      initialBreakpoint: 0.25,
      showBackdrop: true
    })
    .then(modal => {
      modal.present();
    });
  }

}
