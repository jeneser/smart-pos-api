exports.seed = (knex, Promise) => {
  return knex('gifts')
    .del()
    .then(() => {
      return knex('gifts').insert({
        itemId: '123454423975656544',
        itemPic:
          'https://jeneser-images.oss-cn-shanghai.aliyuncs.com/public/giftcard.png',
        shortTitle: '优惠折扣九五折',
        title:
          '优惠折扣九五折扣店铺优惠折扣通用店铺优惠折扣店铺优惠折扣店铺优惠折扣',
        itemPrice: '',
        discountRate: '0.95',
        salePoints: ['优惠折扣', '九五折'],
        itemType: 'gift'
      });
    })
    .then(() => {
      return knex('gifts').insert({
        itemId: '123454429999006544',
        itemPic:
          'https://jeneser-images.oss-cn-shanghai.aliyuncs.com/public/giftcard.png',
        shortTitle: '优惠折扣九五折',
        title:
          '优惠折扣九五折扣店铺优惠折扣通用店铺优惠折扣店铺优惠折扣店铺优惠折扣',
        itemPrice: '',
        discountRate: '0.95',
        salePoints: ['优惠折扣', '九五折'],
        itemType: 'gift'
      });
    })
    .then(() => {
      return knex('gifts').insert({
        itemId: '123454421119006544',
        itemPic:
          'https://jeneser-images.oss-cn-shanghai.aliyuncs.com/public/giftcard.png',
        shortTitle: '优惠折扣五折',
        title:
          '优惠折扣五折扣店铺优惠折扣通用店铺优惠折扣店铺优惠折扣店铺优惠折扣',
        itemPrice: '10',
        discountRate: '',
        salePoints: ['优惠折扣', '五折'],
        itemType: 'gift'
      });
    });
};
