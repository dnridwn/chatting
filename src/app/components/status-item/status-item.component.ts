import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-item',
  templateUrl: './status-item.component.html',
  styleUrls: ['./status-item.component.scss'],
})
export class StatusItemComponent implements OnInit {

  @Input() pictureUrl: string;
  @Input() displayName: string;
  @Input() description: string;
  @Input() isReadAll: any;
  @Input() showAddButton: boolean;

  constructor() { }

  ngOnInit() {}

}
