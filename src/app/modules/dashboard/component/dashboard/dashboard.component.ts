import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  activeTab: string | null = null;
  hasPlans = false;
  hasAgent = false;
  hasTools = false;
  
  setActiveTab(tab: string, event: Event): void {
    event.preventDefault();
    this.activeTab = tab;
    if (tab === "plan" || "agent" || "tools") {
      this.hasPlans = true;
    } else {
      this.hasPlans = false;
    }
    
  }
}
