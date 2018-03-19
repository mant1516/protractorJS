describe('I want to acess all he header options at once expect blog', function() {

    beforeAll(() => {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.yld.io'); 
    })

    it('Should be able click on all the headers expect blog', function() {

      browser.ignoreSynchronisation = true; 

       element(by.css('a.mdl-navigation__link.selected')).click();  

      expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/');

      element(by.xpath("//a[contains(text(),'What we do')]")).click(); 

      expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/what-we-do.html');

    element(by.xpath("//a[contains(text(),'Our Work')]")).click();  

    expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/our-work.html');

    element(by.xpath("//a[contains(text(),'Resources')]")).click();    

    expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/resources.html');

    element(by.xpath("//a[contains(text(),'About')]")).click();  
    
    expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/about.html');

    element(by.xpath("//a[contains(text(),'Newsroom')]")).click();  
    
    expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/newsroom.html');

    element(by.xpath("//a[contains(text(),'Contact')]")).click();  
    
    expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/contact.html');
    
 });




});