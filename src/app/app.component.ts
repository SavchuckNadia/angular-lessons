import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lessons';
  public parentMessage!: string;
  public myNumber!: number;
  public count = 1;
  send():void{
    this.parentMessage = 'Message from parent'
  }
  getOutputData(data:number):void{
this.myNumber = data;
  }
  checkStatus(status:boolean):void{
    if(status){
++this.count;
    }
    else{
      --this.count;
    }
  }
}

