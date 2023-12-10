import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './sutom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: any;
  forbiddenProjectNames = ['test'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      "projectname": new FormControl(null, [Validators.required,CustomValidators.invaildProjectName],CustomValidators.asyncInvaildProjectName),
      "mail": new FormControl(null,[Validators.required,Validators.email]),
      "projectstatus": new FormControl('Critical')
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  // forbiddenProjectName(): { [key: string]: boolean } {

  //   retrun {'project name is invaild': true}
  // }



}
