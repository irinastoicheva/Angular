var Request11 = /** @class */ (function () {
    function Request11(method, url, version, message) {
        this.method = method;
        this.url = url;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    return Request11;
}());
var request = new Request11('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(request);
