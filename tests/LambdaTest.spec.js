const {test,expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Login Lambdatest', async({page})=>{
const user='guruarun1720@gmail.com';
const pwd ='Playwright!20';

const lp = new LoginPage(page);
await lp.launchUrl();
await lp.login(user,pwd);



})