import { Component, OnInit, Input } from '@angular/core';
import { ToolbarHelpers } from './toolbar.helpers';

@Component({
  selector: 'hwb-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() sidenav;
  @Input() sidebar;
  @Input() drawer;
  @Input() matDrawerShow;

  searchOpen = false;
  toolbarHelpers = ToolbarHelpers;
  constructor() {}

  ngOnInit() {
    const auth = JSON.parse(localStorage.getItem('auth'));
    this.toolbarHelpers.currentUser.currentUserName = auth.username;
  }
}
