import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public albums: any = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getPosts().subscribe((data) => {
      this.albums = data;
      console.log(data);
    });
  }
}
