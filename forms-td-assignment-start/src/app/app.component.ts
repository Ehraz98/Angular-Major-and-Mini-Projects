import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedSubscription='Advanced';
  subscriptions=['Basic','Advanced','Pro']
  onSubmit(f: NgForm)
  {
    console.log(f);
  }

}
