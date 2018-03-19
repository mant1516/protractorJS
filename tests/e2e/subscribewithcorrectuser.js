describe('I want to subscribe to the news letter with valid user', function() {

    beforeAll(() => {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.yld.io'); 
    })

    it('Should be able to subscribe with valid user', function() {

      browser.ignoreSynchronisation = true; 
    
      browser.executeScript('scroll(0, 450)'); 
      element(by.css('input#email-e990f703-beee-40e8-972d-cd2671628f1d')).sendKeys('b30qa1@gmail.com');
      element(by.xpath("//input[@value='+']")).click();

      var successmessgae= element(by.css('div.submitted-message'));
       expect(successmessgae.isPresent()).toBeFalsy();
     });
    });

