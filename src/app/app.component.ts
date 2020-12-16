import { Component } from '@angular/core';
import { NODES } from './services/mock-nodes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'tree-flower';

  nodes = NODES;

  onNodeSelect(node) {
    console.log();
  }
}
