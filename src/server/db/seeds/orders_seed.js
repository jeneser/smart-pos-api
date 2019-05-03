exports.seed = (knex, Promise) => {
  return knex('orders')
    .del()
    .then(() => {
      return knex('orders').insert({
        orderId: '10100454001',
        payAmount: '322.00',
        payTime: new Date('2019/05/02 12:00:00'),
        payStatus: '支付成功',
        discountAmount: '14.5',
        taxAmount: '0',
        cashier: 'jeneser',
        payUser: 'Jene**wang',
        productsIds: [
          '123454426565556544',
          '123454426564356884',
          '123454426569856544'
        ]
      });
    })
    .then(() => {
      return knex('orders').insert({
        orderId: '10100454002',
        payAmount: '122.00',
        payTime: new Date('2019/05/02 12:00:00'),
        payStatus: '支付成功',
        discountAmount: '0',
        taxAmount: '0',
        cashier: 'jeneser',
        payUser: 'Jene**wang',
        productsIds: [
          '123454426565556544',
          '123454426564356884',
          '123454426569856544',
          '123454426569856544'
        ]
      });
    })
    .then(() => {
      return knex('orders').insert({
        orderId: '10100454003',
        payAmount: '22.00',
        payTime: new Date('2019/05/02 12:00:00'),
        payStatus: '支付成功',
        discountAmount: '1.5',
        taxAmount: '0',
        cashier: 'jeneser',
        payUser: 'Jene**wang',
        productsIds: [
          '123454426565556544',
          '123454426094356544',
          '123454426094356344',
          '123454426434356344'
        ]
      });
    })
    .then(() => {
      return knex('orders').insert({
        orderId: '10100454004',
        payAmount: '322.00',
        payTime: new Date('2019/05/02 12:00:00'),
        payStatus: '支付成功',
        discountAmount: '14.5',
        taxAmount: '0',
        cashier: 'jeneser',
        payUser: 'Jene**wang',
        productsIds: [
          '123454426565556544',
          '123454426094356544',
          '123454426094356344',
          '123454426434356344'
        ]
      });
    })
    .then(() => {
      return knex('orders').insert({
        orderId: '10100454005',
        payAmount: '72.00',
        payTime: new Date('2019/05/02 12:00:00'),
        payStatus: '支付成功',
        discountAmount: '0',
        taxAmount: '0',
        cashier: 'jeneser',
        payUser: 'Jene**wang',
        productsIds: ['123454426565556544', '123454426564356884']
      });
    })
    .then(() => {
      return knex('orders').insert({
        orderId: '10100454006',
        payAmount: '322.00',
        payTime: new Date('2019/05/03 13:00:00'),
        payStatus: '支付成功',
        discountAmount: '14.5',
        taxAmount: '0',
        cashier: 'jeneser',
        payUser: 'Jene**wang',
        productsIds: [
          '123454426565556544',
          '123454426094356544',
          '123454426094356344',
          '123454426434356344',
          '123454400834356344'
        ]
      });
    })
    .then(() => {
      return knex('orders').insert({
        orderId: '10100454007',
        payAmount: '322.00',
        payTime: new Date('2019/05/03 13:00:00'),
        payStatus: '支付成功',
        discountAmount: '14.5',
        taxAmount: '0',
        cashier: 'jeneser',
        payUser: 'Jene**wang',
        productsIds: [
          '123454426565556544',
          '123454426094356544',
          '123454426094356344',
          '123454426434356344',
          '123454400834356344'
        ]
      });
    })

    .then(() => {
      return knex('orders').insert({
        orderId: '10100454008',
        payAmount: '322.00',
        payTime: new Date('2019/05/03 13:00:00'),
        payStatus: '支付成功',
        discountAmount: '14.5',
        taxAmount: '0',
        cashier: 'jeneser',
        payUser: 'Jene**wang',
        productsIds: [
          '123454426565556544',
          '123454426094356544',
          '123454426094356344',
          '123454426434356344',
          '123454400834356344'
        ]
      });
    })
    .then(() => {
      return knex('orders').insert({
        orderId: '10100454009',
        payAmount: '322.00',
        payTime: new Date('2019/05/03 13:00:00'),
        payStatus: '支付成功',
        discountAmount: '14.5',
        taxAmount: '0',
        cashier: 'jeneser',
        payUser: 'Jene**wang',
        productsIds: [
          '123454426565556544',
          '123454426094356544',
          '123454426094356344',
          '123454426434356344',
          '123454400834356344'
        ]
      });
    });
};
