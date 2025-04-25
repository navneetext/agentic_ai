import { Component } from '@angular/core';
import { Agent } from '../../models/my-plans-model';

@Component({
  selector: 'app-my-plans',
  templateUrl: './my-plans.component.html',
  styleUrls: ['./my-plans.component.scss']
})
export class MyPlansComponent {
isExpanded = false;
  agents: Agent []=[];
  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {
    this.agents = Agent;
  }

}
