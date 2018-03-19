describe('I want to acess about header ', function() {

    beforeAll(() => {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.yld.io'); 
    })

    it('Should be able click on the about option', function() {
        browser.ignoreSynchronisation = true;
        element(by.xpath("//a[contains(text(),'About')]")).click();  
  
        expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/about.html');
  
     });

    });
