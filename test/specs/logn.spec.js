const assert = require('assert');

describe('Saucedemo Login Test', () =>{
    it('Should login successfully with valid credentials', async () =>{
        //Buka browser dan url 
        await browser.url('/')

        //input username css locator
        await $('#user-name').setValue('standard_user');
        //input password css locator
        await $('#password').setValue('secret_sauce');

        //submit login
        await $('#login-button').click();

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it('Should login failed with invalid username', async () =>{
        await browser.url('/')

        //input username css locator
        await $('#user-name').setValue('invalid_user');
        //input password css locator
        await $('#password').setValue('secret_sauce');

        //submit login
        await $('#login-button').click();

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        const errorMessage = await $('//*[@data-test="error"]')

        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
    })

    it('Should login failed with invalid password', async () =>{
        await browser.url('/')

        //input username css locator
        await $('#user-name').setValue('standard_user');
        //input password css locator
        await $('#password').setValue('secret_sauces');

        //submit login
        await $('#login-button').click();

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        const errorMessage = await $('//*[@data-test="error"]')

        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
    })
})