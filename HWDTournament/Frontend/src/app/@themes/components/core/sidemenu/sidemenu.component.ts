import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { menus } from './menu-element';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
@Component({
  selector: 'hwb-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  @Input() iconOnly: boolean = false;
  @Output() onLinkClick: EventEmitter<any> = new EventEmitter();
  public menus = menus;
  icondesplay: boolean = false;

  constructor(private media: ObservableMedia) {}

  ngOnInit() {}

  mouseenter(event) {
    if (
      (this.media.isActive('lt-sm') && this.iconOnly) ||
      (this.media.isActive('gt-xs') && this.iconOnly)
    ) {
      this.iconOnly = false;
      this.icondesplay = true;
    }
  }

  mouseleave(event) {
    if (
      (this.media.isActive('lt-sm') && this.icondesplay) ||
      (this.media.isActive('gt-xs') && this.icondesplay)
    ) {
      this.iconOnly = true;
      this.icondesplay = false;
    }
  }

  clicklink() {
    this.onLinkClick.emit();
  }
}
