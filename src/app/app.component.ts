import { Component } from '@angular/core';
import { Hero } from './hero';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tasks Manager';
  mylist: string[] = ["one","two","three","four","five"];
  event:string;
  ngOnInit(){}
  addEvent(){
    alert('clicked');
    $("#content").append("<li><input type='checkbox'></li>");
  }
}
