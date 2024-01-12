class SearchProduct{

    constructor(page){
        this.page=page;
        this.searchBox=page.locator('name=search');
        this.searchBtn=page.locator('.type-text');


    }

    async searchProduct(productName){

        await this.searchBox.fill(productName);
        await this.searchBtn.click();
    }


}
module.exports={SearchProduct}