describe('why to use protractor',()=>{

    it('super calculator', async ()=>{
       browser.get("https://juliemr.github.io/protractor-demo/");
        browser.manage().window().maximize()
        element(By.model('first')).sendKeys("15")
        element(by.model('second')).sendKeys("35")
        element(by.buttonText('Go!')).click()
        //browser.sleep(2000)
        let result= await element(by.css("h2.ng-binding")).getText()
        console.log("The result is: "+ result)
        expect(result).toBe('3')
        
    })
})