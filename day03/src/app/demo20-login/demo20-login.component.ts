import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-demo20-login',
  templateUrl: './demo20-login.component.html',
  styleUrls: ['./demo20-login.component.css']
})
export class Demo20LoginComponent implements OnInit {
  uName = ""

  constructor(private myRouter:Router) { }
  ngOnInit() {
  }
  login(){
    // 跳转到main,同时将输入框的值传递过去(this.uName)
    this.myRouter
    .navigateByUrl('/main/'+this.uName)
  }

}
