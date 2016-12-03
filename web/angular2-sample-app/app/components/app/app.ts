import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {HomeCmp} from '../home/home';
import {NewList} from '../../services/new_list';
import {NewsCmp} from '../news/news';
import {PostcodeService} from '../../services/postcode';
import {CarehomesService} from '../../services/carehomes';
import {PopupService} from '../../services/popup';

import {componentProxyFactory} from '../../services/component_proxy';

@Component({
  selector: 'app',
  viewProviders: [NewList, PostcodeService, CarehomesService, PopupService],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/home', component: HomeCmp, as: 'Home', useAsDefault: true },
  {
    path: '/about',
    component: componentProxyFactory({
      path: './components/about/about',
      provide: m => m.AboutCmp
    }),
    as: 'About'
  },
  { path: '/news', component: NewsCmp, as: 'News'}
])
export class AppCmp {}
