function jenkinsLogin() {
    var login = getElementByXpath("//*[@id=\"header\"]/div[2]/a/b");
    if (login) {
        login.click();
    }
}
