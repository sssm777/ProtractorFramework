var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
 // directConnect: true,
  
  capabilities: {
    'browserName': 'chrome'
  },
    framework: 'jasmine',
   // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['testcases/SCPOM.js','testcases/superCalculatorPOM.js'],
    // jasmineNodeOpts: {
    //   defaultTimeoutInterval: 30000
    // }
    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'Reports/screenshots',takeScreenShotsOnlyForFailedSpecs: true,docTitle: 'Results Reporter'
      }).getJasmine2Reporter())
    }
  }