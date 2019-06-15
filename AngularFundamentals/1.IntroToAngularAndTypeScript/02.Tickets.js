var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function solve(arr, sortArgument) {
    var tickets = [];
    for (var i = 0; i < arr.length; i++) {
        var token = arr[i];
        var parameters = token.split('|');
        var obj = createTicket(parameters);
        tickets.push(obj);
    }
    switch (sortArgument) {
        case 'destination':
            tickets = tickets.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            break;
        case 'price':
            tickets = tickets.sort(function (a, b) { return parseFloat(a.price) - parseFloat(b.price); });
            break;
        case 'status':
            tickets = tickets.sort(function (a, b) { return a.status.localeCompare(b.status); });
            break;
    }
    console.log(tickets);
}
function createTicket(parameters) {
    var ticket = new Ticket(parameters[0], Number(parameters[1]), parameters[2]);
    return ticket;
}
solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'price');
