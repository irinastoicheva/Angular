class Ticket {
    destination;
    price;
    status;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function solve(arr, sortArgument) {
    let tickets = [];
    for (let i = 0; i < arr.length; i++) {
        let token = arr[i];
        let parameters = token.split('|');
        let obj = createTicket(parameters);
        tickets.push(obj);
    }

    switch (sortArgument) {
        case 'destination':
            tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            tickets = tickets.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            break;
        case 'status':
            tickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }
    console.log(tickets);
}


function createTicket(parameters) {
    let ticket = new Ticket(parameters[0], Number(parameters[1]), parameters[2]);
    return ticket;
}


solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price');


