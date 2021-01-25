import { Component, OnInit } from '@angular/core';
import { Visitor} from '../../shared/visitor.model';
import { VisitorService } from '../../shared/visitor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-confirm',
  templateUrl: './visitor-confirm.component.html',
  styleUrls: ['./visitor-confirm.component.css']
})
export class VisitorConfirmComponent implements OnInit {

  visitor: Visitor;
  firstName:string;

  constructor(private router: Router, private visitorService: VisitorService) { }

  ngOnInit(): void {
    this.visitor = this.visitorService.getVisitor();
    //console.log("======= confirm:" + this.visitor.firstName);
  }

  onSubmit() {
    this.visitorService.register(this.visitor).subscribe(
      data => {
        console.log("Register:" + data);
      }
    )
    
    this.router.navigateByUrl('submit');
  }
    
}
