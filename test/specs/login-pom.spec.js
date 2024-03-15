// const assert = require('assert')
const Page = require('../../pages/page')
const LoginPage = require('../../pages/login')
const InventoryPage = require('../../pages/inventory')


describe('SauceDemo Login Test with Function', () =>{
    beforeEach(async () => {
        Page.open('/')
    })

    it('Should login successfully with credentials', async () => {
        await LoginPage.login('standard_user','secret_sauce')

        await InventoryPage.assertInventoryUrl();
    })

    it('Should failed login with invalid username', async () => {
        await LoginPage.login('invalid_user','secret_sauce')

        await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
    })

    it('Should failed login with invalid password', async () => {
        await LoginPage.login('standard_user','invalid_password')

        await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
    })

})