// const Page = require('./page');

class InventoryPage{

    get inventoryPageUrl(){
        return 'https://www.saucedemo.com/inventory.html';
    }

    async assertInventoryUrl(){
        await expect(browser).toHaveUrl(this.inventoryPageUrl)
    }
}

module.exports = new InventoryPage();