import { AboutCmp } from './about';

describe('About Component:', () => {
	beforeEach(() => {
      this.cmp = new AboutCmp;
    });
	it('shoud be truthy', () => {
		expect(this.cmp).toBeTruthy();
	});
});
