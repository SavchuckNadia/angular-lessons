import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {


  public name = 'Ivan';
  public age = 22;
  public isOnline = true;
  public users: Array<string> = ['Iryna', 'Olga', 'Alina'];
  public car = {
    mark: 'Hyundai',
    model: 'Tucson'
  }

public urlName = 'google';
public urlPath = 'http://www.google.com' 

  constructor() { }

  ngOnInit(): void {
  }
  sayHello():string{
    return `Hello Angular`
  }

}
