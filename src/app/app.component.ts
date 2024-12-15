import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'best-shopping-app';

  data:any ;

  constructor(private dataService:DataService){}

  ngOnInit() {
    this.dataService.fetchUsersData().subscribe(
      (response) => {
        this.data = response;
        console.log("data :- ",response);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
