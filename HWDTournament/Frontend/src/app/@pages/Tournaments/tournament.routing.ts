import { Routes, RouterModule } from "@angular/router";
import { TournamentComponent } from "./TournamentView/tournament.component";

const childRoutes: Routes = [
  {
    path: "tournament-view",
    component: TournamentComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
