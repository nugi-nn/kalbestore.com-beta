module.exports = {
    '@tags': ['production'],
    'Test Kalbestore.com (DESKTOP-PRODUCTION)'(browser){
     
        const search = 'input[name="q"]';
        const inputSearch = 'prenagen';
        const namaDepan = 'Shella';
        const namaBelakang = 'anggraeni';
        const email ='nugie@gmail.com';
        const telepon = '08123123123';
        const labelAlamat = 'Rumah';
        const alamat = 'griya karawaci blok A 6 no 27';
        const codePos = '15810';

    browser
         .url('https://www.kalbestore.com/')
         .assert.urlContains('https://www.kalbestore.com/', 'Home Page')
         .maximizeWindow();
//POP-UP
    browser
        .useXpath()
            .assert.elementPresent("//*[@src = 'https://www.kalbestore.com/media/mbimages/p/o/pop-up-ovo-nov-w4.png']", 'pop-up')
            .assert.elementPresent("//*[@src = 'https://www.kalbestore.com/media/mbimages/p/o/pop-up-ovo-nov-w4.png']", 'close x')
            .click("//a[@href = '#' and (text() = 'close x' or . = 'close x')]");
//Home Page
    browser
        .useXpath()
            .pause(5000)
            .assert.elementPresent("//input[@id = 'search' and @type = 'text' and @name = 'q' and @placeholder = 'Cari Produk, Promo, Brand atau Artikel disini']", 'Input Search')
            .click('//*[@id="search"]')
            .setValue('//*[@id="search"]', ['Prenagen Mommy French Vanila 400gr', browser.Keys.ENTER]);
    browser
            .pause(1000)
            .assert.urlContains('https://www.kalbestore.com/catalogsearch/result/?q=Prenagen+Mommy+French+Vanila+400gr', 'Prenagen Page')
            .pause(3000)
            .waitForElementPresent("//*[@src = 'https://www.kalbestore.com/media/catalog/product/cache/1/small_image/440x/9df78eab33525d08d6e5fb8d27136e95/p/r/prenagen_mommy_van_400gr.jpg']", 'product search')
            .click("//*[@type = 'button' and @title = 'Tambah ke Troli']")
            .assert.elementPresent("//div[@id = 'category-checkstock-modal' and @class = 'zoom-anim-dialog']")
            .click("//button[@type = 'button' and @id = 'pop-add-to-cart-ajax']")
            .assert.elementPresent("//*[@src = 'https://www.kalbestore.com/skin/frontend/default/kalbegento/images/loading-cart.gif']", 'loading')
            .pause(4000)
            .waitForElementPresent("//div[@class = 'notifyjs-bootstrap-base notifyjs-bootstrap-success']", 'pop-up')
            .click("//div[@class = 'notifyjs-bootstrap-base notifyjs-bootstrap-success']")
            .pause(5000)
            .moveToElement("//a[@id = 'ketroli']", 10, 10)
            .waitForElementPresent("//a[@id = 'ketroli']", 'cart')
            .waitForElementVisible("//*[@class = 'to-troli' and @href = 'https://www.kalbestore.com/checkout/cart' and (text() = 'Lanjut ke pembayaran' or . = 'Lanjut ke pembayaran')]", 'lanjut pembayaran')
            .pause(5000)
            .click("//a[@class = 'to-troli' and @href = 'https://www.kalbestore.com/checkout/cart']")
            .pause(2000)
            .assert.urlContains('https://www.kalbestore.com/checkout/cart', 'Cart Page')
            .assert.elementPresent("//span[@class = 'price']", 'Price');
            browser.expect.element("//tr[@id='cart-item-FCPIH070']/td[2]/p/span/span").text.to.endWith('73.000');
            browser.assert.elementPresent("//tr[@id='cart-item-FCPIH070']/td[2]/p[2]", 'Poins');
            browser.expect.element("//tr[@id='cart-item-FCPIH070']/td[2]/p[2]").text.to.startWith('100');
// Total
            browser.expect.element("//span[@id='changemw']/span").text.to.startWith('100');
            browser.expect.element("//td[@id='gracart']/strong/span/span").text.to.endWith('73.000');
    browser
        .useXpath()
            .click("//button[@type = 'button' and @class = 'button btn-proceed-checkout btn-checkout']")
            .pause(3000)
            .assert.urlContains('https://www.kalbestore.com/checkout/guest/index/')
            .assert.elementPresent("//button[@class = 'btn-guest-checkout' and @type = 'button']", 'button CHECKOUT TANPA LOGIN')
            .click("//button[@class = 'btn-guest-checkout' and @type = 'button']")
            .pause(3000)
            .assert.urlContains('https://www.kalbestore.com/checkout/guest/register/')
            .setValue("//*[@type = 'text' and @id = 'firstname']", namaDepan)
            .setValue("//*[@type = 'text' and @id = 'lastname']", namaBelakang)
            .setValue("//*[@type = 'text' and @id = 'email']", email)
            .setValue("//*[@type = 'text' and @id = 'telephone']", telepon)
            .setValue("//*[@type = 'text' and @id = 'company']", labelAlamat)
            .setValue("//*[@type = 'text' and @id = 'street']", alamat)
            .setValue("//*[@type = 'text' and @id = 'zip-placeholder']", codePos)
            .click("//select[@id='subdistrict']")
            .waitForElementPresent("//*[@id='subdistrict']/option[8]")
            .click("//*[@id='subdistrict']/option[8]")
            .pause(1000)
            .click("//*[@type = 'submit' and @class = 'btn-bottom']")
            .pause(3000)
            .assert.urlContains('https://www.kalbestore.com/checkout/guest/onepage/', 'CHECKOUT Page')
            .pause(2000)
            .waitForElementPresent("//a[@class = 'btn-payments popup' and @href = '#payments-modal']")
            .click("//a[@class = 'btn-payments popup' and @href = '#payments-modal']")
            .waitForElementPresent("//*[@id = 'payments-modal' and @class = 'white-popup-full']")
            .moveToElement("//dt[@id = 'dt_method_prismalink_bcava']", 10, 10)
            .click("//input[@id = 'p_method_prismalink_bcava' and @type = 'radio']")
            .pause(5000)
            .waitForElementPresent("//div[@class = 'payment-left']")
            .assert.elementPresent("//div[@class = 'subtotal-left']", 'Total Harga');
            browser.expect.element("(.//*[normalize-space(text()) and normalize-space(.)='Total Harga (1) Barang'])[1]/following::div[1]").text.to.endWith('73.000');
            browser.assert.elementPresent("//div[@class = 'subtotal-left subtotal-information']", 'Biaya ONGKIR');
            browser.expect.element("(.//*[normalize-space(text()) and normalize-space(.)='Biaya Pengiriman'])[1]/following::div[1]").text.to.endWith('10.000');
            browser.assert.elementPresent("//div[@class = 'grandtotal-left']", 'Total Pembayaran');
            browser.expect.element("//form[@id='checkoutV2Form']/div/div/div[2]").text.to.endWith('83.000');
            browser.click("//button[@type = 'submit' and @class = 'btn-bottom']")
            .pause(2000)
            .assert.urlContains("https://www.kalbestore.com/checkout/onepage/success/")
            .waitForElementPresent("//button[@type='button']", 'Lanjut Belanja')
            .click("//button[@type='button']")
            .saveScreenshot('tests_output/screenshoot.png')
            .end();
 }
}