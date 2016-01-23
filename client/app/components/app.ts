/**
 * Created by John on 10.01.2016.
 */
import {Component} from 'angular2/core'
import {RouteConfig, RouterLink, RouterOutlet, LocationStrategy, PathLocationStrategy, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router'

import {HomeComponent} from './home/home'

@Component({
    selector: 'my-app',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES, RouterOutlet]
})
@RouteConfig([
    {path: '/', component: HomeComponent, as: 'Home'}
])

export class App {
    constructor(){
        console.log("We are up and running!");
    }
}