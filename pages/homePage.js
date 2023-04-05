var home_page= function(){

  var firsttext=  element(By.model('first'))
   var secondtext= element(by.model('second'))
   var goButton=  element(by.buttonText('Go!'))
   var result=element(by.css("h2.ng-binding"))

   this.browseUrl=function(url){
    browser.get(url)
   }
   this.enterFirstText=function(firstnumber){
    firsttext.sendKeys(firstnumber)
   }
   this.enterSecondText=function(secondnumber){
    secondtext.sendKeys(secondnumber)
   }
   this.ClickOnGoButton=function(){
    goButton.click();
   }
   this.verifyResult=function(expectedval)
   {
     expect(result.getText()).toBe(expectedval)
   }


}
module.exports= new home_page