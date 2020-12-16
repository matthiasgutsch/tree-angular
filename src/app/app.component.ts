import { TreeNode } from './services/tree-node';
import { Component, OnInit } from '@angular/core';
import { NODES } from './services/mock-nodes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'tree-flower';

  nodes = NODES;
  loading: boolean = true;

  selectedNode: TreeNode;

  ngOnInit() {
    this.selectedNode = this.nodes[0];
    this.loading = false;
  }

  onNodeSelect(node: TreeNode) {
    this.selectedNode = node;
    this.loading = false;
  }
}
