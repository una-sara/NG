import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {RouteRoutingModule}  from './route/route-routing.module'

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03LianxiComponent } from './demo03-lianxi/demo03-lianxi.component';
import { Demo04DirComponent } from './demo04-dir/demo04-dir.component';
import { Demo05BindComponent } from './demo05-bind/demo05-bind.component';
import { Demo06LianxiComponent } from './demo06-lianxi/demo06-lianxi.component';
import { Demo07DataComponent } from './demo07-data/demo07-data.component';
import { Demo08PipesComponent } from './demo08-pipes/demo08-pipes.component';
import { Demo09LianxiComponent } from './demo09-lianxi/demo09-lianxi.component';
import { Demo10PipeComponent } from './demo10-pipe/demo10-pipe.component';
import { SexPipe } from './sex.pipe';
import { EvenPipe } from './even.pipe';
import { Demo11CartComponent } from './demo11-cart/demo11-cart.component';
import { Demo11HeaderComponent } from './demo11-header/demo11-header.component';
import { Demo12ListComponent } from './demo12-list/demo12-list.component';
import { Demo12ItemComponent } from './demo12-item/demo12-item.component';
import { Demo13TestComponent } from './demo13-test/demo13-test.component';
import { Demo14OrderComponent } from './demo14-order/demo14-order.component';
import { Demo15HttpComponent } from './demo15-http/demo15-http.component';
import { Demo16LianxiComponent } from './demo16-lianxi/demo16-lianxi.component';
import { Demo17LoginComponent } from './demo17-login/demo17-login.component';
import { Demo17RegisterComponent } from './demo17-register/demo17-register.component';
import { Demo17NotFoundComponent } from './demo17-not-found/demo17-not-found.component';
import { Demo18ListComponent } from './demo18-list/demo18-list.component';
import { Demo18DetailComponent } from './demo18-detail/demo18-detail.component';
import { Demo19ListComponent } from './demo19-list/demo19-list.component';
import { Demo19DetailComponent } from './demo19-detail/demo19-detail.component';
import { Demo20LoginComponent } from './demo20-login/demo20-login.component';
import { Demo20MainComponent } from './demo20-main/demo20-main.component';
import { Demo21MailComponent } from './demo21-mail/demo21-mail.component';
import { Demo21InboxComponent } from './demo21-inbox/demo21-inbox.component';
import { Demo21OutboxComponent } from './demo21-outbox/demo21-outbox.component';
import { Demo22AdminComponent } from './demo22-admin/demo22-admin.component';
import { Demo23IndexComponent } from './demo23-index/demo23-index.component';
import { Demo23DetailComponent } from './demo23-detail/demo23-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    Demo01Component,
    Demo02Component,
    Demo03LianxiComponent,
    Demo04DirComponent,
    Demo05BindComponent,
    Demo06LianxiComponent,
    Demo07DataComponent,
    Demo08PipesComponent,
    Demo09LianxiComponent,
    Demo10PipeComponent,
    SexPipe,
    EvenPipe,
    Demo11CartComponent,
    Demo11HeaderComponent,
    Demo12ListComponent,
    Demo12ItemComponent,
    Demo13TestComponent,
    Demo14OrderComponent,
    Demo15HttpComponent,
    Demo16LianxiComponent,
    Demo17LoginComponent,
    Demo17RegisterComponent,
    Demo17NotFoundComponent,
    Demo18ListComponent,
    Demo18DetailComponent,
    Demo19ListComponent,
    Demo19DetailComponent,
    Demo20LoginComponent,
    Demo20MainComponent,
    Demo21MailComponent,
    Demo21InboxComponent,
    Demo21OutboxComponent,
    Demo22AdminComponent,
    Demo23IndexComponent,
    Demo23DetailComponent,
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
