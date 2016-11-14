import {
  describe,
  expect,
  injectAsync,
  it,
  setBaseTestProviders,
  TestComponentBuilder
} from 'angular2/testing';
import {Component, View} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {HomeCmp} from './home';
import {
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS,
                     TEST_BROWSER_APPLICATION_PROVIDERS);


export function main() {
  describe('Home component', () => {
    it('should work', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.overrideTemplate(TestComponent, '<div><home></home></div>')
        .createAsync(TestComponent)
        .then((rootTC) => {
          let homeDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;

          expect(DOM.querySelectorAll(homeDOMEl, 'h1')[0].textContent).toEqual('Howdy!');
        });
    }));
  });
}

@Component({selector: 'test-cmp'})
@View({directives: [HomeCmp]})
class TestComponent {}
