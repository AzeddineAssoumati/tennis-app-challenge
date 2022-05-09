import { Component } from '@angular/core';

@Component({
  selector: "home",
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public front_repo: string = 'https://github.com/AzeddineAssoumati/tennis-app-challenge';
  public back_repo: string = 'https://github.com/AzeddineAssoumati/tennis-app-challenge-server';

  constructor() { }
}
