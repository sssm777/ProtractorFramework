
describe('first protractor suite',()=>{

    it('Verify Page URL', async ()=>{
       
        browser.get('https://angularjs.org/');

        expect( browser.getCurrentUrl()).toBe('https://angularjs.org/')
    })
    it('Veriy Page Title', async ()=>{
       browser.manage().window().maximize()
        browser.get('https://angularjs.org/');
        browser.sleep(5000)
        expect( browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework')
    })
})