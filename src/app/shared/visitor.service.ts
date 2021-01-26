import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitor } from './visitor.model';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class VisitorService {
  visitor: Visitor;
  VISITOR_API:string = 'http://localhost:8080/visitor/';

  constructor(private http: HttpClient) { }

  setVisitor(visitor) {
    this.visitor = visitor;
  }

  getVisitor() {
    return this.visitor;
  }

  register(visitor): Observable<any> {
    return this.http.post(this.VISITOR_API + 'register', visitor, httpOptions);
  }

  getAllVisitorsData(): Observable<Visitor[]> {
    return this.http.get<Visitor[]>(this.VISITOR_API + 'all', {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        .set('content-type', 'application/json')
      }
    )
  }

  getAllVisitorsData2(): Observable<any> {
    return this.http.get(this.VISITOR_API + 'all', {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        .set('content-type', 'application/json'),
        responseType: 'blob', observe: 'response'
      }
    )
  }

}
