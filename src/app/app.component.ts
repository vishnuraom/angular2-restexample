import { Component } from '@angular/core';
import { RestcallService } from './restcall.service';
@Component({
  selector: 'app-root',
  template: `<div>
	<input #username type="text">
	<input #password type="password">
	<button (click)="caller(username.value,password.value)">Login</button>
</div>`
})
export class AppComponent {
  constructor(public service:RestcallService){
  }

  caller(value1:string,value2:string) {
  this.service.search(value1,value2)
              .subscribe(results => console.log(results));
  }
}
