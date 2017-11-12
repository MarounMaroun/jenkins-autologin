var currentURL = window.location.href;
var isJenkins = /^http:\/\/jenkins\./.test(currentURL);

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function run(signinFunc, timeout) {
    setTimeout(function() {
        try {
            signinFunc();
        } catch (error) {
            setTimeout(function() { signinFunc() }, 300);
        }
    }, timeout);
}

if (isJenkins) {
    run(jenkinsLogin, 200);
}
