import { Component, OnInit } from '@angular/core';
import {BeatService} from '../beat.service'

@Component({
  selector: 'app-demo14-order',
  templateUrl: './demo14-order.component.html',
  styleUrls: ['./demo14-order.component.css']
})
export class Demo14OrderComponent implements OnInit {

  constructor(private myService:BeatService) { }

  ngOnInit() {
  }
  
  //分别调用服务中startBeat/stopBeat
  start(){
    console.log(this.myService)
    this.myService.startBeat()
  }

  stop(){
    this.myService.stopBeat()
  }

}
