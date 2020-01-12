import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-demo16-lianxi',
  templateUrl: './demo16-lianxi.component.html',
  styleUrls: ['./demo16-lianxi.component.css']
})
export class Demo16LianxiComponent implements OnInit {
  myList=[]
  nowPage = 0

  constructor(private myHttp:HttpClient) { }

  ngOnInit() {
  }

  loadData(){
    
    this.nowPage++;

    //发送网络请求 HttpClientModule HttpClient subscribe
    var url = "http://localhost:8080/product/list?pno="+this.nowPage

    this.myHttp.get(url).subscribe((result:any)=>{
      console.log(result)
      //将请求到的数据result.data保存，到视图中显示
      //this.myList = result.data
      this.myList = this.myList.concat(result.data)
    })

    
  }


}
