import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-demo15-http',
  templateUrl: './demo15-http.component.html',
  styleUrls: ['./demo15-http.component.css']
})
export class Demo15HttpComponent implements OnInit {

  constructor(private myHttp:HttpClient) { }

  ngOnInit() {
    //发起一次网络请求
    // 准备工作：让当前的组件所属的模块依赖于HttpClientModule
    // var url = "http://jsonplaceholder.typicode.com/users"
    var url = "http://localhost:8080/product/list"

    this.myHttp.get(url).subscribe((result)=>{
      console.log(result)
    })
  }

}
