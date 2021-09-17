import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {

  public message!:string;
  public isShow = false; 
  public login = 'user';
  public arrNames = ['Ivan', 'Petro', 'Pavlo'];
  public newName = ''
  public isEdit = false; 
  public editIndex !:number;

  constructor() { }

  ngOnInit(): void {
  }
  addMessage(event?:MouseEvent):void{
    // console.log('Hello Angular');
    console.log(event);
    
    this.message = 'Hello Angular';
    
  }
  show():void{
this.isShow = !this.isShow

  }
  showUser():void{
    console.log(this.login);
  }

  addName():void{
    if(this.newName){
      this.arrNames.push(this.newName);
    }
    this.newName = '';
   
  }
  deleteName(index:number):void{
    this.arrNames.splice(index,1)
  }
  editName(index:number):void{
    this.newName = this.arrNames[index];
    this.isEdit = true;
    this.editIndex = index;

  }
  updateName():void{

    if(this.newName){
      this.arrNames.splice(this.editIndex,1,this.newName);
      this.newName = '';
      this.isEdit = false;
    }
  }

}
