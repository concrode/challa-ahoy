import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-data',
  templateUrl: './visitor-data.component.html',
  styleUrls: ['./visitor-data.component.css']
})
export class VisitorDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnDefs = [
    { field: 'id'},
    { field: 'FirstName' },
    { field: 'LastName' },
    { field: 'PhoneNumber' },
    { field: 'Email' },
    { field: 'CheckInTime' }
];

rowData = [
    { id: '1', FirstName: 'Chris', LastName: 'Chen', PhoneNumber: '05532323', Email: 'ch@gmail.com', CheckInTime: '02/Jan/2020 15:43:14' },
    { id: '2', FirstName: 'Jack', LastName: 'Chen', PhoneNumber: '05532323', Email: 'ch@gmail.com', CheckInTime: '03/Jan/2020 11:43:14' },
    { id: '3', FirstName: 'May', LastName: 'Chen', PhoneNumber: '055334323', Email: 'ch@gmail.com', CheckInTime: '03/Jan/2020 12:43:14' },
    { id: '4', FirstName: 'Tony', LastName: 'Chen', PhoneNumber: '05534323', Email: 'ch@gmail.com', CheckInTime: '04/Jan/2020 5:43:14' },
    { id: '5', FirstName: 'Tom', LastName: 'Chen', PhoneNumber: '02232323', Email: 'ch@gmail.com', CheckInTime: '09/Jan/2020 10:43:14' },
];

}
