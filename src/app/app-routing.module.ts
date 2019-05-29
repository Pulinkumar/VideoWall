import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { WallscreenComponent } from "./wallscreen/wallscreen.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "wall", component: WallscreenComponent },
  { path: "", redirectTo: "wall", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
