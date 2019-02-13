import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "hwb-sidemenu-item",
  templateUrl: "./sidemenu-item.component.html",
  styleUrls: ["./sidemenu-item.component.scss"]
})
export class SidemenuItemComponent implements OnInit {
  @Input() menu;
  @Input() iconOnly: boolean;
  @Input() secondaryMenu = false;
  @Output() onLinkClick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  openLink() {
    this.menu.open = this.menu.open;
  }

  clicklink() {
    this.onLinkClick.emit();
  }

  chechForChildMenu() {
    return this.menu && this.menu.sub ? true : false;
  }
}
