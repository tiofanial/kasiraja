// const Page = require('./page')

class LoginPage{
    get usernameInput(){
        return $('#user-name');
        // return $('//*[@id="login"]')
    }

    get passwordInput(){
        return $('#password');
    }

    get loginButton(){
        return $('#login-button');
    }

    get errorMsg(){
        return $('//*[@data-test="error"]');
    }

    async login(username, password){
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    }

    async getErrorMessage(){
        return this.errorMsg.getText();
    }

}
module.exports = new LoginPage();