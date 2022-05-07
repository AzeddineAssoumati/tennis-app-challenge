import { Component } from '@angular/core';

@Component({
  template: `
    <div class="notFound">
        <div class="text">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <a routerLink="/home">BACK TO HOME</a>
        </div>
    </div>
  `,
  styles: [`
    .notFound {
      text-align: center;
      padding-top: 40vh;
    }
    .notFound h1 {
      color: red;
      font-size: 100px;
    }
    .notFound h2 {
      font-size: 50px;
      line-height: 50px;
    }
    .notFound h1, h2, h3 {
      margin-bottom: 40px;
    }
    div.text {
      height: 50vh;
    }
    div.text a {
      text-decoration: none;
      margin-right: 20px;
    }
  `]
})
export class NotFoundComponent {
  constructor() {}
}
