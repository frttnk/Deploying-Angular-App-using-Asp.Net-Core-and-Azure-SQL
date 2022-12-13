import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test';

  users:any=[];
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this._userService.getAllUsers().subscribe({
      next: response => {
        this.users=response;
      },
      error: error => alert('Error occured when retrieving the data')
    })
  }
}
