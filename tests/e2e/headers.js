describe('I want to acess all he header options', function() {

    beforeAll(() => {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.yld.io'); 
    })

    it('Should be able click on the home page', function() {
      browser.ignoreSynchronisation = true; 
       element(by.css('a.mdl-navigation__link.selected')).click();  

     expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/');

    });
  
    it('Should be able click on the What we do option', function() {
      browser.ignoreSynchronisation = true;
      element(by.xpath("//a[contains(text(),'What we do')]")).click();  

      expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/what-we-do.html');

   });

   it('Should be able click on the "Our Work" option', function() {
    browser.ignoreSynchronisation = true;
    element(by.xpath("//a[contains(text(),'Our Work')]")).click();  
    
    expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/our-work.html');

 });

 
 it('Should be able click on the "Resources" option', function() {
    browser.ignoreSynchronisation = true;
    element(by.xpath("//a[contains(text(),'Resources')]")).click();  

    expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/resources.html');

 });

 it('Should be able click on the "About" option', function() {
    browser.ignoreSynchronisation = true;
    element(by.xpath("//a[contains(text(),'About')]")).click();  
    
    expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/about.html');


 });

 it('Should be able click on the "Newsroom" option', function() {
    browser.ignoreSynchronisation = true;
    element(by.xpath("//a[contains(text(),'Newsroom')]")).click();  
    
    expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/newsroom.html');

 });

 it('Should be able click on the "Contact" option', function() {
    browser.ignoreSynchronisation = true;
    element(by.xpath("//a[contains(text(),'Contact')]")).click();  
    
    expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/contact.html');
    
 });




});