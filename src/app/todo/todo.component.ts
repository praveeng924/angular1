import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todoForm;
todos=[{name:"todo1",description:"todo is one"},{name:"todo2",description:"todo is two"}];


  constructor(private fb:FormBuilder) {
this.todoForm=fb.group({name:'',
description:''
});
   }
add()
{
  alert("add");
  console.log(this.todoForm);
}
  ngOnInit() {
  }

}
