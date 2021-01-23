import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-visitor-register',
  templateUrl: './visitor-register.component.html',
  styleUrls: ['./visitor-register.component.css']
})
export class VisitorRegisterComponent implements OnInit {
  @Output() addVisitor: EventEmitter<any> = new EventEmitter();

  checkInTime:Date = new Date();

  firstName:string;
  lastName:string;
  phoneNumber:string;
  email:string

  constructor(private router: Router) { 
    setInterval(() => {
      this.checkInTime = new Date();
    }, 1);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const visitor = {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber:this.phoneNumber,
        email:this.email,
        checkInTime:this.checkInTime
    }

    console.log(visitor.firstName + visitor.lastName + visitor.phoneNumber + visitor.email + 
      visitor.checkInTime);

   this.addVisitor.emit(visitor);
  }

}
