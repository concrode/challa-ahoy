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
      }
    )
  }

  columnDefs = [
    { headerName: 'FirstName', field: 'firstName', sortable: true, filter: true},
    { headerName: 'LastName', field: 'lastName', sortable: true, filter: true},
    { headerName: 'PhoneName', field: 'phoneNumber', sortable: true, filter: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
    { headerName: 'CheckinTime', field: 'checkinTime',sortable: true, filter: true, width: 300 }
  ];
}
