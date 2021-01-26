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



  //   this._http.get(url, {  responseType: 'blob' as 'json' }).subscribe((res) => {
  //     var file = new Blob([res], { type: 'application/pdf' });            
  //     var fileURL = URL.createObjectURL(file);
  //     window.open(fileURL);
  // }


      //const pdfUrl = './assets/sample.pdf';
      //const pdfName = 'your_pdf_file';
      // console.log('download');
      // //const blob = new Blob(['Hello, world!'], { type: 'text/plain'});
      // const blob = new Blob([d], { type: 'application/pdf');

      // saveAs(blob, 'd.txt');
    }
}
