import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from 'src/appconfig/appconfig.service';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { RouteConfigToken } from './services/routeConfig.service';
//import { RoomsModule } from './rooms.module';
import { LoginComponent } from './login/login.component';

function initFactory(initService: InitService) {
return () => initService.init();
}

@NgModule({
  declarations: [					
    AppComponent,
      ContainerComponent,
      EmployeeComponent,
      AppNavComponent,
      NotFoundComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
   // RoomsModule, // all thr feature module must come before app routing modules
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [{
    provide: APP_SERVICE_CONFIG,
    useValue: APP_CONFIG,
  },
  // for making http hit logs we can use interceptor,
  // they run in sequence only one after another
  {provide:HTTP_INTERCEPTORS , useClass: RequestInterceptor, multi: true},
{
 provide: APP_INITIALIZER,
 useFactory: initFactory,
 deps: [InitService],
 multi: true,
},
{provide: RouteConfigToken, useValue: 'Home' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
