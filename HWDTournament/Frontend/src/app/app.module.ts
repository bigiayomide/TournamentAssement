import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LazyLoadModule } from "./@themes/components/lazy-load/lazy-load.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "./@themes/components/core/core.module";
import { ConfigService } from "./shared/utils/config.service";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { DateFormatPipe } from "./shared/pipes/date-format.pipe";
import { MatInputModule } from "@angular/material";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./@pages/helpers/jwt.interceptors";

@NgModule({
  declarations: [AppComponent, DateFormatPipe],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    ConfigService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
