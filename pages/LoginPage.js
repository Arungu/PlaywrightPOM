class LoginPage{

    constructor(page){

        this.page=page;
        this.userName=page.locator('id=input-email');
        this.password=page.locator('id=input-password');
        this.loginBtn=page.locator("//*[@value='Login']");
    }

    async launchUrl(){

        await this.page.goto("https://ecommerce-playground.lambdatest.io/?route=account/login");

    }

    async login(uname,pass){

        await this.userName.fill(uname);
        await this.password.fill(pass);
        await this.loginBtn.click();
        await this.page.waitForTimeout(3000);


    }
}
module.exports={LoginPage}