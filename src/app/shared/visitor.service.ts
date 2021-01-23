import { Injectable } from '@angular/core';
import { Visitor } from './visitor.model';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class VisitorService {
  constructor() { }

  visitor: Visitor;

  setVisitor(visitor) {
    this.visitor = visitor;
  }

  getVisitor() {
    return this.visitor;
  }
}
