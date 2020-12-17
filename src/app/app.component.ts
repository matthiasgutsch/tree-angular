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
          this.selectedNode = n;
          if (absoluteName !== n.firstName) {
            this.openTreeAtPath(absoluteName, n.children);
          } else {
            this.loadNode(this.selectedNode);
          }
        }
      }
    }
  }

  loadNode(event: any) {
    console.log('loadNode node:', event.node);
    if (event.node) {
      this.selectedNode = event.node;
      this.selectedNode.showChildren = false;
      this.absolutePathWithoutName = this.selectedNode.firstName.replace(
        this.selectedNode.name,
        ''
      );
      this.element.name = this.selectedNode.name;
      this.element.children = this.selectedNode.children;
      this.element.firstName = this.selectedNode.firstName;
    }
  }

  onNodeSelect(node: TreeNode) {
    this.selectedNode = node;
    this.loading = false;
  }
}
