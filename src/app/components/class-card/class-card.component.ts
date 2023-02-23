import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Class } from 'src/app/models/class';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css']
})
export class ClassCardComponent implements OnInit {

  @Input()
  class : Class;
  @Input()
  classIndex: number;

  @Output()
  deletedClass = new EventEmitter<number>()

  constructor() {
    this.class = new Class(0, "", "")
    this.classIndex = 0;
   }

  ngOnInit(): void {
  }

  deleteClass(){
    this.deletedClass.emit(this.class.id);
  }

}
