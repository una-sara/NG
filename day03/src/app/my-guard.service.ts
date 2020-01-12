import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class MyGuardService implements CanActivate{

  constructor() { }

  canActivate(){
    // 在此方法中 执行一些运算，比如判断你有没有权限，判断有没有登录。。。根据运算的结果来决定是否要继续前进
     return false
  }
}
