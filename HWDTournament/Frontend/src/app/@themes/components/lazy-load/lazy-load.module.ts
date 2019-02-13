import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AuthModule } from "../auth/auth.module";

const routes: Routes = [
  { path: "auth", loadChildren: "../auth/auth.module#AuthModule" },
  {
    path: "registers",
    loadChildren:
      "../../../@pages/pages/registernew/register.module#RegisterSModule"
  },
  {
    path: "logins",
    loadChildren: "../../../@pages/pages/loginnew/login.module#LoginSModule"
  },

  { path: "**", redirectTo: "auth/home" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, enableTracing: true })
  ],
  exports: [RouterModule]
})
export class LazyLoadModule {}
