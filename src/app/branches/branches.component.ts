import { Component, OnInit } from '@angular/core';
import { Branch } from './brach.model';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  branches: Branch[] = [
    new Branch(1, "Nasr City", ""),
    new Branch(2, "Faisal", ""),
    new Branch(3, "Down Town","")
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
