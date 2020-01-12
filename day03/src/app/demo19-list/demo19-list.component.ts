import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-demo19-list',
  templateUrl: './demo19-list.component.html',
  styleUrls: ['./demo19-list.component.css']
})
export class Demo19ListComponent implements OnInit {
  myList = [100,200,300]

  constructor(private myRouter:Router) { }

  ngOnInit() {
  }
  // 跳转到detail
  jump(){
    // this.$router.push()

    this.myRouter.navigateByUrl('/detail')
  }

}
