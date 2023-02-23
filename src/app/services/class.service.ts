import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from '../models/class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private readonly baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getAllClasses() : Observable<Class[]>{
    return this.http.get<Class[]>(this.baseUrl + "/all-classes")
  }

  createClass(newClass : Class){
    return this.http.post(this.baseUrl + "/new-class",{title : newClass.title, description : newClass.description} );
  }

  deleteClass(id : number){
    return this.http.delete(this.baseUrl + "/class/" + id);
  }
}
