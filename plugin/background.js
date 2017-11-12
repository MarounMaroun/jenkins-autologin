window.onload = function() {
    var element = document.getElementById("version");

    $.get('manifest.json', function(data) {
        var fileContents = jQuery.parseJSON(data);
        element.textContent = 'Version ' + fileContents.version;
    });
}
