exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs:
   [
   'tests/e2e/homepagesection.js',
   'tests/e2e/headers.js',
   'tests/e2e/whatwedo.js',
   'tests/e2e/ourwork.js',
   'tests/e2e/resources.js',
   'tests/e2e/about.js',
   'tests/e2e/newsroom.js',
   'tests/e2e/contact.js',
   'tests/e2e/navigation.js',
   'tests/e2e/subscribewithcorrectuser.js',
   'tests/e2e/subscribewithwronguser.js'
   ],
   baseUrl: 'http://www.ydl.io/',
  capabilities : {
    browserName: 'chrome',
    platform: 'any',
    version : 'any',
    'chromeOptions': {
     prefs: {
       download: {
         'prompt_for_download': false,
         'directory_upgrade': true,
         'default_directory': '../../documents/downloads'
                  }
             }
     }
  },
  
};