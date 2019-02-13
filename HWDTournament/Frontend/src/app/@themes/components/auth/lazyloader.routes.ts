import { Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";

export const appRoutes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "event",
        loadChildren: "../../../@pages/events/event.module#EventModule"
      },
      {
        path: "event-status",
        loadChildren:
          "../../../@pages/event-status/event-status.module#EventStatusModule"
      },
      {
        path: "tournament",
        loadChildren:
          "../../../@pages/Tournaments/tournament.module#TournamentModule"
      },
      {
        path: "event-detail",
        loadChildren:
          "../../../@pages/event-details/event-detail.module#EventDetailModule"
      },
      {
        path: "home",
        loadChildren: "../../../@pages/Home/home.module#HomeModule"
      }
    ]
  }
];
