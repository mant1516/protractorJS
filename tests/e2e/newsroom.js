describe('I want to acess about NewsRoom Header ', function() {

    beforeAll(() => {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.yld.io'); 
    })

    it('Should be able click on the NewsRoom option', function() {
        browser.ignoreSynchronisation = true;
        element(by.xpath("//a[contains(text(),'Newsroom')]")).click();  
  
        expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/newsroom.html');
  
     });

    });
