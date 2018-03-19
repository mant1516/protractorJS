describe('I want to acess resources header ', function() {

    beforeAll(() => {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.yld.io'); 
    })

    it('Should be able click on the resources option', function() {
        browser.ignoreSynchronisation = true;
        element(by.xpath("//a[contains(text(),'Resources')]")).click();  
  
        expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/resources.html');
  
     });

    });
