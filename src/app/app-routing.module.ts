import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultLayoutComponent } from "./layout/default-layout/default-layout.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./modules/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "plans",
        loadChildren: () =>
          import("./modules/plans/plans.module").then((m) => m.PlansModule),
      },
      {
        path: "agent",
        loadChildren: () =>
          import("./modules/agent/agent.module").then((m) => m.AgentModule),
      },
      {
        path: "tools",
        loadChildren: () =>
          import("./modules/tools/tools.module").then((m) => m.ToolsModule),
      },
    ],
  },
  {
    path: "orchestration",
    loadChildren: () =>
      import("./modules/orchestartion-layout/orchestartion-layout.module").then(
        (m) => m.OrchestartionLayoutModule
      ),
  },
  {
    path: "evaluation",
    loadChildren: () =>
      import("./modules/evaluation/evaluation.module").then((m) => m.EvaluationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
