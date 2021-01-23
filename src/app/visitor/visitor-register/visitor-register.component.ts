import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { VisitorService } from '../../shared/visitor.service';

@Component({
  selector: 'app-visitor-register',
  templateUrl: './visitor-register.component.html',
  styleUrls: ['./visitor-register.component.css']
})
export class VisitorRegisterComponent implements OnInit {
  checkInTime:Date = new Date();

  firstName:string;
  lastName:string;
  phoneNumber:string;
  email:string


  constructor(private router: Router, private visitorService: VisitorService ) { 
    setInterval(() => {
      this.checkInTime = new Date();
    }, 1);
  }

  ngOnInit(): void {
    console.log("hello");
  }

  onSubmit() {
    console.log("onsubmit");

    const visitor = {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber:this.phoneNumber,
        email:this.email,
        checkInTime:this.checkInTime
    }

    console.log(`${visitor.firstName}, ${visitor.lastName}, ${visitor.phoneNumber}, ${visitor.email},
     ${visitor.checkInTime}`);

    this.visitorService.setVisitor(visitor);

    this.router.navigateByUrl('confirm');
  }

}
