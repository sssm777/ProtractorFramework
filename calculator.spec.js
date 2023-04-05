//import {browser, element} from 'protractor'
describe('why to use protractor',()=>{

    it('super calculator', async ()=>{
        //browser.waitForAngularEnabled(false)
        browser.get("https://juliemr.github.io/protractor-demo/");

        element(by.css("input[ng-model='first']")).sendKeys("1")
        element(by.css("input[ng-model='second']")).sendKeys("2")
        element(by.css("button#gobutton")).click()
        //browser.sleep(2000)
        let result= await element(by.css("h2.ng-binding")).getText()
        console.log("The result is: "+ result)
        expect(result).toBe('3')
        expect( browser.getCurrentUrl()).toBe("https://juliemr.github.io/protractor-demo/")
    })
})