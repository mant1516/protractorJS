describe('I want to acess what we do header ', function() {

    beforeAll(() => {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.yld.io'); 
    })

    it('Should be able click on the What we do option', function() {
        browser.ignoreSynchronisation = true;
        element(by.xpath("//a[contains(text(),'What we do')]")).click();  
  
        expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/what-we-do.html');
  
     });

    });
