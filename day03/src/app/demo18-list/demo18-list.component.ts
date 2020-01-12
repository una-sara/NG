import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-demo18-list',
  templateUrl: './demo18-list.component.html',
  styleUrls: ['./demo18-list.component.css']
})
export class Demo18ListComponent implements OnInit {

  constructor(private myRouter:Router) { }

  ngOnInit() {
  }
  
  jump(){
    //跳转到详情页面 detail
    // vue: this.$router.push('/detail')
    this.myRouter.navigateByUrl('/detail')
  }
}
