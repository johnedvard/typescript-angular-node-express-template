/**
 * Created by John on 23.01.2016.
 */
import {bootstrap} from 'angular2/platform/browser'
import {provide} from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common'
import {ROUTER_BINDINGS, ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from 'angular2/router'


import {App} from './components/app'
bootstrap(App,[
    ROUTER_PROVIDERS,
    CORE_DIRECTIVES,
    provide(LocationStrategy, {useClass: PathLocationStrategy})
]);