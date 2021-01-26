import { Component, OnInit } from '@angular/core';
import { VisitorService } from 'src/app/shared/visitor.service';
import saveAs from 'file-saver';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private visitorService: VisitorService) { }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.visitorService.getAllVisitorsData().subscribe (
      data => {
        var file = new Blob([JSON.stringify(data)], { type: 'text/plain' });
        saveAs(file, 'report.json');
      }
    )
  }
}
