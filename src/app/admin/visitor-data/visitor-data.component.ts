import { Component, OnInit } from '@angular/core';
import { Visitor } from 'src/app/shared/visitor.model';
import { VisitorService } from 'src/app/shared/visitor.service';

@Component({
  selector: 'app-visitor-data',
  templateUrl: './visitor-data.component.html',
  styleUrls: ['./visitor-data.component.css']
})
export class VisitorDataComponent implements OnInit {
  rowData:Visitor[]

  constructor(private visitorService: VisitorService) {}

  ngOnInit(): void {
    this.visitorService.getAllVisitorsData().subscribe (
      data => {
        //console.log(JSON.stringify(data));
        this.rowData = data;
        //data.map(data =>  console.log("All visitors:" + data.toString()))
      }
    )
  }

  columnDefs = [
    { field: 'firstName' },
    { field: 'lastName' },
    { field: 'phoneNumber' },
    { field: 'email' },
    { field: 'checkinTime' }
];

// rowData = [
//     { id: '1', FirstName: 'Chris', LastName: 'Chen', PhoneNumber: '05532323', Email: 'ch@gmail.com', CheckInTime: '02/Jan/2020 15:43:14' },
//     { id: '2', FirstName: 'Jack', LastName: 'Chen', PhoneNumber: '05532323', Email: 'ch@gmail.com', CheckInTime: '03/Jan/2020 11:43:14' },
//     { id: '3', FirstName: 'May', LastName: 'Chen', PhoneNumber: '055334323', Email: 'ch@gmail.com', CheckInTime: '03/Jan/2020 12:43:14' },
//     { id: '4', FirstName: 'Tony', LastName: 'Chen', PhoneNumber: '05534323', Email: 'ch@gmail.com', CheckInTime: '04/Jan/2020 5:43:14' },
//     { id: '5', FirstName: 'Tom', LastName: 'Chen', PhoneNumber: '02232323', Email: 'ch@gmail.com', CheckInTime: '09/Jan/2020 10:43:14' },
// ];

}
