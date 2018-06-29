import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[];
  searchString: string;

  searchMusic(): void {
    this.dashboardService.searchMusic(this.searchString)
      .subscribe(dataResponse => {
        this.artists = dataResponse;
      });
    console.log(this.artists);
  }

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

}
