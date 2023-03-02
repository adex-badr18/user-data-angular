import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: object[] = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
      this.http.getUsers().subscribe(res => {
          this.users = res;
      })
  }

}
