import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import{Task} from '../model/model.task'
import{TaskList} from '../model/model.taskList'
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProfileService {

  constructor(public http: Http) { }

   

  public getTask(): Observable<Task[]>{
    return of(TaskList);
  }

}
