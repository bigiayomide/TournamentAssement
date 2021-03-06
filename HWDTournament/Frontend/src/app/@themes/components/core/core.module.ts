import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidemenuComponent } from "./sidemenu/sidemenu.component";
import { SidemenuItemComponent } from "./sidemenu-item/sidemenu-item.component";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule, MatRadioModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { FullscreenComponent } from "./fullscreen/fullscreen.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { UserMenuComponent } from "./user-menu/user-menu.component";
import {
  MatSidenavModule,
  MatSliderModule,
  MatProgressBarModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    SidemenuComponent,
    SidemenuItemComponent,
    ToolbarComponent,
    FullscreenComponent,
    SidebarComponent,
    UserMenuComponent
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatRadioModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    RouterModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTabsModule,
    MatSliderModule,
    MatProgressBarModule
  ],

  exports: [
    SidemenuComponent,
    SidemenuItemComponent,
    ToolbarComponent,
    FullscreenComponent,
    SidebarComponent,
    UserMenuComponent
  ],

  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class CoreModule {}
