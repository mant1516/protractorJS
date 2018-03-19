describe('I want to acess about contact Header ', function() {

    beforeAll(() => {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.yld.io'); 
    })

    it('Should be able click on the contact option', function() {
        browser.ignoreSynchronisation = true;
        element(by.xpath("//a[contains(text(),'Contact')]")).click();  
  
        expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/contact.html');
  
     });

    });
