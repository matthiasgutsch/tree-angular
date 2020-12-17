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
  selectedGroups: string[] = [];

  nodes = NODES;
  loading: boolean = true;
  selectedFolder: TreeNode;
  absolutePathWithoutName: string;
  element: TreeNode;

  selectedNode: TreeNode;

  ngOnInit() {
    this.selectedNode = this.nodes[0];
    this.loading = false;

    this.openTreeAtPath;
  }

  openTreeAtPath(absoluteName: string, node: TreeNode[]) {
    if (absoluteName && node) {
      for (const n of node) {
        if (absoluteName.startsWith(n.firstName)) {
          n.showChildren = true;
          this.selectedFolder = n;
          if (absoluteName !== n.firstName) {
            this.openTreeAtPath(absoluteName, n.children);
          } else {
            this.onNodeSelect(n);
          }
        }
      }
    }
  }

  onNodeSelect(node: TreeNode) {
    this.selectedNode = node;
    this.loading = false;
  }
}
