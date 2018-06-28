import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../services/dashboard.service';
import {Artist} from '../artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: Artist[];
  searchString: string;
  searchRes: Artist[];

  searchMusic(): void {
    this.dashboardService.searchMusic(this.searchString)
      .subscribe(artists => this.searchRes = artists);
    console.log(this.artists);
  }

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

}
