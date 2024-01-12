class SelectProductPage{

    constructor(page){
        this.page=page;
        this.selproduct=page.locator("(//*[text()='iPod Touch'])[1]");
    }

    async selectProduct(){

        await this.selproduct.click();
    }


}
module.exports={SelectProductPage}