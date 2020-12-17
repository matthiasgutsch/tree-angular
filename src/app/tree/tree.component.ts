import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { TreeNode } from '../services/tree-node';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  @Input() treeData: TreeNode[];
  @Input() documentsData: TreeNode[];
  selectedFolder: TreeNode;
  element: TreeNode;
  absolutePathWithoutName: string;

  @Output() nodeSelect = new EventEmitter<TreeNode>();

  ngOnInit() {
    this.openTreeAtPath;
  }

  toggleNode(node: TreeNode) {
    // apro o chiudo il nodo
    node.showChildren = !node.showChildren;
    // se il nodo e' stato aperto, lo "seleziono" per mostrarne i documenti
    if (node.showChildren === true) {
      this.onNodeSelect(node);
    }
  }

  onNodeSelect(node: TreeNode) {
    this.nodeSelect.emit(node);
    node.showChildren = !node.showChildren;
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
            this.loadNode(this.selectedFolder);
          }
        }
      }
    }
  }

  loadNode(event: any) {
    console.log('loadNode node:', event.node);
    if (event.node) {
      this.selectedFolder = event.node;
      this.selectedFolder.showChildren = false;
      this.absolutePathWithoutName = this.selectedFolder.firstName.replace(
        this.selectedFolder.name,
        ''
      );
      this.element.name = this.selectedFolder.name;
      this.element.children = this.selectedFolder.children;
      this.element.firstName = this.selectedFolder.firstName;
    }
  }
}
