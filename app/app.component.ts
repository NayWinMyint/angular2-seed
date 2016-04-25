// angular2-helloworld/app/app.component.ts

import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html'
})
export class AppComponent {
  target: string;
     constructor() {
       this.target = 'world';
     }
}
