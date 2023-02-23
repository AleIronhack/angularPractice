import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/class';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  classList : Class[] = [];

  classTitle! : string;
  classDescription! : string;

  constructor(private classService : ClassService) { }

  ngOnInit(): void {
    this.classTitle =""
    this.classDescription = ""
    this.fetchAllClasses();
  }

  fetchAllClasses(){
    this.classService.getAllClasses().subscribe(result => {
      this.classList = result;
    })
  }

  createClass(){
    
    this.classService.createClass(new Class(0, this.classTitle, this.classDescription)).subscribe(r => this.ngOnInit());
  }

  deleteClass(id : number){
    this.classService.deleteClass(id).subscribe(r=>{this.ngOnInit()})
  }

}
