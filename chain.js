//data access:
const data = [{ id: 1, name: 'Khan', address: 'bd' }];
console.log(data[0].address);

const products = {
    type: 50,
    model: [
        { id: 1, name: 'acer', price: 70000 },
        { id: 2, name: 'lenovo', price: 65000 },
    ]
}
//console.log(products.model[1].name);

const user = {
    id: 501,
    name: 'Arodda',
    address: {
        street: {
            lane: '53/90',
            road: 'miya bari road',
            holdingNo: 508,
        },
        city: 'Dhaka',

    }
}
const user2 = {
    id: 502,
    name: 'miyar cheler bari',
    address: {
        city: 'ctg',
        country: 'bd'
    }
}

console.log(user.address.street?.lane);
console.log(user2.address.street?.lane);
