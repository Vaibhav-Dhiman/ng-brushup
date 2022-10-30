import { Inject, Injectable } from '@angular/core';
import { RouteConfig } from './routeConfig';
import { RouteConfigToken } from './routeConfig.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) {
//  console.log('------------->', 'Config Services');
 // console.log('------------->', this.configToken);
 }

}
