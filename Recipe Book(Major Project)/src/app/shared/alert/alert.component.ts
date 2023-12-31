import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() message: string;
  @Output() closed=new EventEmitter<void>();
  constructor() { }


  onClose(){
    this.closed.emit();
  }

  private showErrorAlert(){
    
  }
}
