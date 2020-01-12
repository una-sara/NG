import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Demo17LoginComponent} from '../demo17-login/demo17-login.component'
import {Demo17RegisterComponent} from '../demo17-register/demo17-register.component'
import {Demo17NotFoundComponent} from '../demo17-not-found/demo17-not-found.component'
import {Demo18ListComponent} from '../demo18-list/demo18-list.component'
import {Demo18DetailComponent} from '../demo18-detail/demo18-detail.component'
import {Demo19ListComponent} from '../demo19-list/demo19-list.component'
import {Demo19DetailComponent} from '../demo19-detail/demo19-detail.component'
import {Demo20LoginComponent} from '../demo20-login/demo20-login.component'
import {Demo20MainComponent} from '../demo20-main/demo20-main.component'
// demo21-mail demo21-inbox demo21-outbox
import {Demo21MailComponent} from '../demo21-mail/demo21-mail.component'
import {Demo21InboxComponent} from '../demo21-inbox/demo21-inbox.component'
import {Demo21OutboxComponent} from '../demo21-outbox/demo21-outbox.component'
import {Demo22AdminComponent} from '../demo22-admin/demo22-admin.component'
import {MyGuardService} from '../my-guard.service'
import {Demo23IndexComponent} from '../demo23-index/demo23-index.component'
import {Demo23DetailComponent} from '../demo23-detail/demo23-detail.component'

// 在此设置路由词典
const routes: Routes = [
  {path:"",component:Demo19ListComponent},
  {path:"index",component:Demo23IndexComponent},
  {
    path:'admin',
    component:Demo22AdminComponent,
    canActivate:[MyGuardService]
  },
  {
    path:'mail',
    component:Demo21MailComponent,
    children:[
      {path:'inbox',component:Demo21InboxComponent},
      {path:'outbox',component:Demo21OutboxComponent}
    ]
  },
  {path:'detail',component:Demo23DetailComponent},
  {path:'login',component:Demo20LoginComponent},
  {path:'main/:myName',component:Demo20MainComponent},
  {path:'register',component:Demo17RegisterComponent},
  {path:'**',component:Demo17NotFoundComponent},
];
//测试:http://localhost:4200/register

@NgModule({
  // 将forChild改为forRoot
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
