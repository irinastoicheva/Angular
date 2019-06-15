class Request11{
    method;
    url;
    version;
    message;
    response;
    fulfilled;
    constructor(method: string, url: string, version: string, message: string){
        this.method = method;
        this.url = url;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let request = new Request11('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(request);
