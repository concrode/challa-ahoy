import { Component, OnInit } from '@angular/core';
import { Visitor} from '../../shared/visitor.model';

@Component({
  selector: 'app-visitor-confirm',
  templateUrl: './visitor-confirm.component.html',
  styleUrls: ['./visitor-confirm.component.css']
})
export class VisitorConfirmComponent implements OnInit {

  visitor: Visitor;

  constructor() { }

  ngOnInit(): void {
  }

}
