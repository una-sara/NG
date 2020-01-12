import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-demo20-main',
  templateUrl: './demo20-main.component.html',
  styleUrls: ['./demo20-main.component.css']
})
export class Demo20MainComponent implements OnInit {

  constructor(private myRoute:ActivatedRoute) { }

  ngOnInit() {
    // 准备在组件初始化完毕之后，接收通过路由跳转所传来的参数
   // console.log(this.myRoute.params.value.myName)
  
   this.myRoute.params.subscribe((result)=>{
     console.log(result.myName)
   })


  }

}
