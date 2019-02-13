import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const pagesRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRouterModule {}
