import { Component } from "@angular/core";

@Component({
  template: `
    <p>
      Page not found
      <a routerLink="/">Back to home</a>
    </p>
  `,
})
export class NotFoundComponent {
  constructor() {}
}
