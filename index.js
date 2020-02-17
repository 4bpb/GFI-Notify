const puppeteer = require('puppeteer');

let username = ''
let password = ''
let code = ''


function main(username,password,code){
    (async () => {
        const browser = await puppeteer.launch({headless: false}); // default is true
        const page = await browser.newPage();
        await page.goto('https://account.smartthings.com/login');
        //click login
        await page.click('#login-selector > form > button')
        //enter credentials
        await page.waitForNavigation();
        await page.type('body > div.iam-wrapper > main > div > div > div.iam-forms > form > fieldset > div:nth-child(2)',username)

        await page.click('body > div.iam-wrapper > main > div > div > div.iam-forms > form > fieldset > div:nth-child(3)')
        await page.type('body > div.iam-wrapper > main > div > div > div.iam-forms > form > fieldset > div:nth-child(3)',password)



        await page.click('#signInButton')

        //Navigating to creationpage
        await page.waitForNavigation();
        await page.click('body > div.content.home > div > div > div > p:nth-child(3) > a')
        await page.waitForNavigation();
        await page.click('body > main > div > div.ide-toolbar.clearfix > a.btn.btn-sm.btn-success.pull-right')
        await page.waitForNavigation();
        await page.click('body > main > div > ul > li:nth-child(2)')
        //writing the code
        await page.type('#content',code)
    
        //create button
        await page.click('#create')
        await browser.close();
    })();
}


main(username,password,code)