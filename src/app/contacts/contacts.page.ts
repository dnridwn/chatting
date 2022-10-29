import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  public contactList: any[];

  constructor() { }

  ngOnInit() {
    this.contactList = [
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
  }

}
