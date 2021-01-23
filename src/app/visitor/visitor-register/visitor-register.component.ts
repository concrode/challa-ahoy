import { Component, OnInit, NgZone} from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(private router: Router,private ngZone: NgZone) { 

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

    console.log(visitor.firstName + visitor.lastName + visitor.phoneNumber + visitor.email + 
      visitor.checkInTime);


   //this.visitorService.setVisitor(visitor);
   console.log("======register:" + visitor.firstName);

  //  this.ngZone.run(() => {
  //   this.router.navigateByUrl('/facebook-analysis');
  // })

   this.router.navigateByUrl('confirm');
  }

}
