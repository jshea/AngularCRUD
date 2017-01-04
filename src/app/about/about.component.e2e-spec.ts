// https://medium.com/@cnishina/protractor-with-typescript-2eae05016929
import { browser } from 'protractor';

describe('about', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should...', function () {
    expect(true).toEqual(true);
  });
});
