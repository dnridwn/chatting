import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('slider') slider: IonSlides;

  public activeSegment: string = 'chats';
  public chatList: any[];
  public recentStatusList: any[];
  public viewedStatusList: any[];
  private segments: any[] = [
    'chats',
    'status',
    'calls'
  ];

  constructor(
    private navCtrl: NavController
  ) {
    
  }

  ngOnInit() {
    this.chatList = [
      {
        pictureUrl: 'https://s.kaskus.id/r540x540/images/2016/08/02/7214412_20160802094316.png',
        displayName: 'Ariel Tatum',
        lastMessage: 'Apa kabar sayang?',
        displayTime: '12:05',
        unreadMessageCount: 1,
        onClick: () => {
          const navigationExtras: NavigationExtras = {
            queryParams: {
              displayName: 'Ariel Tatum'
            }
          };
          this.navCtrl.navigateForward('chat-room', navigationExtras);
        }
      },
      {
        pictureUrl: 'https://cdn1-production-images-kly.akamaized.net/CqfMNMo9u4nGoY9wNY_oy6p_N60=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3371911/original/064334600_1612839202-Aura_kasih_3.jpg',
        displayName: 'Aura Kasih',
        lastMessage: 'Pulang sayangg',
        displayTime: '11:41',
        unreadMessageCount: 0,
        onClick: () => {
          const navigationExtras: NavigationExtras = {
            queryParams: {
              displayName: 'Aura Kasih'
            }
          };
          this.navCtrl.navigateForward('chat-room', navigationExtras);
        }
      }
    ];

    this.recentStatusList = [
      {
        pictureUrl: 'https://s.kaskus.id/r540x540/images/2016/08/02/7214412_20160802094316.png',
        displayName: 'Ariel Tatum',
        description: 'Today, 12:43',
        isReadAll: false,
        showAddButton: false
      },
      {
        pictureUrl: 'https://cdn1-production-images-kly.akamaized.net/CqfMNMo9u4nGoY9wNY_oy6p_N60=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3371911/original/064334600_1612839202-Aura_kasih_3.jpg',
        displayName: 'Aura Kasih',
        description: 'Today, 12:33',
        isReadAll: false,
        showAddButton: false
      }
    ];

    this.viewedStatusList = [
      {
        pictureUrl: 'https://s.kaskus.id/r540x540/images/2016/08/02/7214412_20160802094316.png',
        displayName: 'Ariel Tatum',
        description: 'Today, 12:43',
        isReadAll: true,
        showAddButton: false
      },
      {
        pictureUrl: 'https://cdn1-production-images-kly.akamaized.net/CqfMNMo9u4nGoY9wNY_oy6p_N60=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3371911/original/064334600_1612839202-Aura_kasih_3.jpg',
        displayName: 'Aura Kasih',
        description: 'Today, 12:33',
        isReadAll: true,
        showAddButton: false
      }
    ];
  }

  segmentChanged() {
    const segmentIndex = this.segments.findIndex(v => v == this.activeSegment);
    this.slider.slideTo(segmentIndex);
  }

  async slideChanged() {
    const index = await this.slider.getActiveIndex();
    this.activeSegment = this.segments[index];
  }

  /**
   * Open page
   */
  openPage(pagePath) {
    this.navCtrl.navigateForward(pagePath);
  }

}
