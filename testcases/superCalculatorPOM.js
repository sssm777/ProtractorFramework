var homepage= require('../pages/homePage')

describe('Validate Super Calculator Page',()=>{

    it('TestCase - verify addition ', async ()=>{
       //browser.get("https://juliemr.github.io/protractor-demo/");
       homepage.browseUrl("https://juliemr.github.io/protractor-demo/")
       // browser.manage().window().maximize()
        //element(By.model('first')).sendKeys("15")
        homepage.enterFirstText('50')
        //element(by.model('second')).sendKeys("35")
        homepage.enterSecondText('100')
        //element(by.buttonText('Go!')).click()
        homepage.ClickOnGoButton()
        browser.sleep(2000)
        // let result= await element(by.css("h2.ng-binding")).getText()
        // console.log("The result is: "+ result)
        // expect(result).toBe('3')
        homepage.verifyResult('1500')
        
    })
})