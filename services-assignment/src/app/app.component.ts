import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CounterService]
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService,private counterService: CounterService) {
    this.userService.userSetToActive.subscribe(() => {
      this.setUsers();
      console.log('InActive -> Active',++this.counterService.countInactiveToActive);
    });

    this.userService.userSetToInActive.subscribe(() => {
      this.setUsers();
      console.log('Active -> InActive',++this.counterService.countActiveToInactive);
    });

  }

  activeUsers = [];
  inactiveUsers = [];
  ngOnInit(): void {
    this.setUsers();
  }

  setUsers() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }
}
