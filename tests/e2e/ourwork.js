describe('I want to acess our work header', function() {

    beforeAll(() => {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.yld.io'); 
    })

    it('Should be able click on the our work option', function() {
        browser.ignoreSynchronisation = true;
        element(by.xpath("//a[contains(text(),'Our Work')]")).click();  
  
        expect(browser.getCurrentUrl()).toEqual('https://www.yld.io/our-work.html');
  
     });

    });
