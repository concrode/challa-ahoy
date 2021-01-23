import { Component, OnInit } from '@angular/core';
import { Visitor} from '../../shared/visitor.model';
import { VisitorService } from '../../shared/visitor.service';

@Component({
  selector: 'app-visitor-confirm',
  templateUrl: './visitor-confirm.component.html',
  styleUrls: ['./visitor-confirm.component.css']
})
export class VisitorConfirmComponent implements OnInit {

  visitor: Visitor;
  firstName:string;

  constructor(private visitorService: VisitorService) { }

  ngOnInit(): void {

    this.visitor = this.visitorService.getVisitor();
    //console.log("======= confirm:" + this.visitor.firstName);
  }

}
