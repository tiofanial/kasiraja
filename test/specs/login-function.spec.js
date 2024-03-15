const assert = require('assert');

async function login(username,password){
    //Buka browser dan url 
    await browser.url('/')

    //input username css locator
    await $('#user-name').setValue(username);
    //input password css locator
    await $('#password').setValue(password);

    //submit login
    await $('#login-button').click();
}

describe('Saucedemo Login Test', () =>{

    it('Should login failed with invalid username', async () =>{
        //Panggil fungsi login
        await login('invalid_username','secret_sauce')
        
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
    })

    it('Should login failed with invalid password', async () =>{
        //Panggil fungsi login
        await login('standard_user','invalid_password')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
    })

    it('Should login successfully with valid credentials', async () =>{
        //Panggil fungsi login
         await login('standard_user','secret_sauce')
         await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
     })
})