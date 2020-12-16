import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { TreeNode } from '../services/tree-node';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  @Input() treeData: TreeNode[];
  @Input() documentsData: TreeNode[];

  @Output() outpurtreeData: EventEmitter<TreeNode[]> = new EventEmitter();

  ngOnInit() {}

  toggleChild(node) {
    node.showChildren = !node.showChildren;
  }

  onoutpurtreeData(node) {
    this.outpurtreeData.emit(node);
  }
}
