import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class TaskListsComponent implements OnInit {

  constructor() { }

  @Input()userlist: any;

  ngOnInit() {
    console.log(this.userlist);
  }
  listData: string[] = ["one","two","three","four","five"];
  inpData;
  error:string;
  condition: boolean = true;
  editData: boolean;
  oldData: string;
  position: number;
  errorMsg: boolean = false;
  isUnchanged: boolean = true;
  total: number = this.listData.length;
  addNewData: boolean;
  AddData(data) {
    this.error = "";
    this.condition = true;
    if(data != null && data.trim() != "") {
      for(let i=0; i<this.listData.length; i++){
        if(this.listData[i] == this.inpData){
          this.condition = false;
          break;
        }
      }
      if(this.condition == true){
        this.listData.push(data);
        this.total++;
      }else{
        this.errorMsg = true;
        this.error = ("Task already exists");
      }
      this.inpData = "";
      this.addNewData = false;
    }else{
      this.errorMsg = true;
      this.addNewData = true;
      this.error = "enter data";
    }
  }
  remove(data){
    let x = data;
    this.listData.splice(x,1);
    this.total--;
  }
  imgBinding(event, data){
    console.log("Event is : ",event);
    console.log("data is : ",data);
    this.editData = true;
    this.isUnchanged = false;
    this.oldData = this.listData[data];
    this.position = data;
    this.errorMsg = false;
  }
  addTasks(){
    this.addNewData = true;
  }
  newData(data){
    if(data != null && data.trim() != ""){
      console.log(this);
      this.listData[this.position] = data;
      this.editData = false;
      this.errorMsg = false;
      this.isUnchanged = true;
      this.oldData = data;
    }else{
      this.error = "Please enter Data";
      this.errorMsg = true;
    }
  }
  closing() {
    this.editData = false;
    this.errorMsg = false;
  }
}
