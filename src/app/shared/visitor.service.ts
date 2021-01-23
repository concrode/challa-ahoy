import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Visitor } from './visitor.model';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class VisitorService {

  private visitor = new BehaviorSubject(Visitor);
  currentVisitor= this.visitor.asObservable();

  constructor() { }

  changeVisitor(visitor: Visitor) {
    this.visitor.next(visitor);
  }
}
