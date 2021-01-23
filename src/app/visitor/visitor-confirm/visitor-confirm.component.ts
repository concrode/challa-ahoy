import { Component, OnInit } from '@angular/core';
import { Visitor} from '../../shared/visitor.model';

@Component({
  selector: 'app-visitor-confirm',
  templateUrl: './visitor-confirm.component.html',
  styleUrls: ['./visitor-confirm.component.css']
})
export class VisitorConfirmComponent implements OnInit {

  visitor: Visitor;
  firstName:string;

  constructor() { }

  ngOnInit(): void {
    //console.log("======= confirm:" + this.visitor.firstName);
    // this.firstName = this.visitor.firstName;

    // console.log("confirm:" + this.firstName);
  }

}
