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

  @Output() nodeSelect = new EventEmitter<TreeNode>();

  ngOnInit() {}

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
}
