import { Component, Input, OnInit } from '@angular/core';
import { Branch } from '../brach.model';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})

export class BranchListComponent implements OnInit {
  @Input('inputBranch') branch: Branch = new Branch(0, "", "");

  constructor() {}
  ngOnInit(): void {}
}
