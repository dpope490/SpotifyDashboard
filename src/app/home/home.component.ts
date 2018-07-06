import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  client_id = 'CLIENT_ID';
  client_secret = 'CLIENT_SECRET';
  redirect_uri = 'REDIRECT_URI';

  constructor() { }

  ngOnInit() {
  }

}
