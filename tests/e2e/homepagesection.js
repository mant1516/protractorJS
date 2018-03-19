describe('I want to see the home page', function() {

  beforeAll(() => {
   
    browser.waitForAngularEnabled(false);
 
  })

  it('Should be able to see "What we do" section', function() {
    browser.ignoreSynchronisation = true;
  browser.get('https://www.yld.io'); 
  browser.executeScript('window.scrollTo(0,100)');
 var whatwedo= element(by.css('section.hide-links head yld-section yld-section-features mdl-color-text--white'));
 expect(whatwedo.isPresent()).toBeFalsy();
  });

  it('Should be able to see "What we do" section', function() {
    browser.ignoreSynchronisation = true;
  browser.get('https://www.yld.io'); 
  browser.executeScript('window.scrollTo(0,300)');
 
 var customersection = element(by.css('section.mdl-color--white yld-section yld-section-logos'));
expect(customersection.isPresent()).toBeFalsy();
 11
  });


 });