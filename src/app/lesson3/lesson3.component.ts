import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from './user.interface';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})
export class Lesson3Component implements OnInit {
  @Input() childMessage!: string 
  @Output() outputData = new EventEmitter<number>();

  @Output()status = new EventEmitter<boolean>();


  public arrUsers: Array<IUser> = [{
    name: "Ivan",
    age: 22,
    status: false
  },
  {
    name: "Petro",
    age: 33,
    status: true
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  changeStatus(user: IUser): void {
    user.status = !user.status;
  }
  sendOutputData():void{
    this.outputData.emit(22);
  }

  changeNumber(data:boolean):void{
    this.status.emit(data);
  }
}
