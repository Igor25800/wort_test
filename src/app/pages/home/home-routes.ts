import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./home.component";

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

export const HomeRouting = RouterModule.forChild(homeRoutes);
