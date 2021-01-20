import { Component, OnInit } from '@angular/core';
import { Branch } from '../brach.model';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {
  branches: Branch[] = [
    new Branch(1, "Nasr City", ""),
    new Branch(2, "Faisal", ""),
    new Branch(3, "Down Town","")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
