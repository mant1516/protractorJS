describe('I want to subscribe to the news letter with invalid user', function() {

    beforeAll(() => {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.yld.io'); 
    })

    it('Should get an error when i try subscribe with invalid user', function() {

      browser.ignoreSynchronisation = true; 
      browser.executeScript("scroll(0, 450)"); 
      element(by.css('input#email-e990f703-beee-40e8-972d-cd2671628f1d')).sendKeys('test@@@testing.com');
      element(by.xpath("//input[@value='+']")).click();

      var icon= element(by.xpath("//input[@value='+']"));
      expect(icon.isPresent());

    });

});
