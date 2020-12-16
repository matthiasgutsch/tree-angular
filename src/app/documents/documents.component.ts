import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TreeNode } from '../services/tree-node';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
})
export class DocumentsComponent implements OnInit {
  @Input() documentsData: TreeNode[];

  ngOnInit() {}

  toggleChild(node) {
    node.showChildren = !node.showChildren;
  }
}
