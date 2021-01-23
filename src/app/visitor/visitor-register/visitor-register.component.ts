import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-register',
  templateUrl: './visitor-register.component.html',
  styleUrls: ['./visitor-register.component.css']
})
export class VisitorRegisterComponent implements OnInit {

  checkInTime: Date = new Date();

  constructor() { 
    setInterval(() => {
      this.checkInTime = new Date();
    }, 1);
  }

  ngOnInit(): void {
  }

}
