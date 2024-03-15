const assert = require('assert');

describe('Open Sauce Demo', () =>{
    it('should open browser and redirect to saucedemo', async () => {
        //Buka browser url
        await browser.url('/')

        //lakukan assertion utk tau url benar atau tidak
        const currentURL = await browser.getUrl();
        const expectedURL = 'https://www.saucedemo.com/'

        assert.strictEqual(currentURL, expectedURL, `URL tidak sesuai. Actual: ${currentURL}, Expected: ${expectedURL}`)
    })
}

)
