import { Component } from '@angular/core';

@Component({
  selector: "tennis-app",
  template: `
  <div class="tennis-app">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [`
  .tennis-app {
      background: url("../assets/img/background-img.png") no-repeat center center fixed;
      min-height: 100vh;
    }
  `]
})
export class AppComponent { }
