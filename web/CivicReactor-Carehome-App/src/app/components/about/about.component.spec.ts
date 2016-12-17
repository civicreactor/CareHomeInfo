import { AboutCmp } from './about';

describe('About Component:', () => {
	beforeEach(() => {
      this.app = new AboutCmp;
    });
	it('shoud be truthy', () => {
		expect(this.app).toBeTruthy();
	});
});
