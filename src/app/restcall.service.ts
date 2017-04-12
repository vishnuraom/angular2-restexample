import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RestcallService {
  //message = `You've got mail!`;
  constructor(private http:Http) { }

  search(value1:string,value2:string) {
  console.log("In search service"+value2+value1);
  return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
             .map(response => console.log(response));
  }
}
