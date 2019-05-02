exports.seed = (knex, Promise) => {
  return knex('products')
    .del()
    .then(() => {
      return knex('products').insert({
        itemId: '123454426565556544',
        itemPic:
          'https://gd4.alicdn.com/imgextra/i4/1071005252/TB2hmo_hrsrBKNjSZFpXXcXhFXa_!!1071005252.jpg',
        shortTitle: '韩版简约书包',
        title: '古着感少女书包女韩版原宿ulzzang大学生森系百搭高中双肩包ins潮',
        itemPrice: '200',
        originalPrice: '310',
        salePoints: ['女包', '当季新款'],
        itemSize: '96x96cm',
        itemColor: '红色'
      });
    })
    .then(() => {
      return knex('products').insert({
        itemId: '123454426564356884',
        itemPic:
          'https://img.alicdn.com/imgextra/i2/696576874/TB2od5kqiAnBKNjSZFvXXaTKXXa_!!696576874.jpg',
        shortTitle: '春夏女装长袖上衣',
        title: '百褶衬衫风琴褶雪纺春夏女装长袖同款宽松显瘦韩范灯笼袖飘带上衣',
        itemPrice: '90',
        originalPrice: '110',
        salePoints: ['红 165/96A', '当季新款'],
        itemSize: '197/96A',
        itemColor: '红色'
      });
    })
    .then(() => {
      return knex('products').insert({
        itemId: '123454426569856544',
        itemPic:
          'https://img.alicdn.com/imgextra/i3/796153509/O1CN01jyLmaB1bnAIILDyF7_!!796153509.jpg',
        shortTitle: '小众长袖上衣',
        title: '条纹衬衫女春季2019新款韩版宽松衬衣设计感小众长袖上衣',
        itemPrice: '242',
        originalPrice: '340',
        salePoints: ['2019新款', '当季新款'],
        itemSize: '197/96A',
        itemColor: '红色'
      });
    })
    .then(() => {
      return knex('products').insert({
        itemId: '123454426094356544',
        itemPic:
          'https://img.alicdn.com/imgextra/i4/12024280/O1CN01SGuKGk1hUHeosKWdG_!!12024280.jpg',
        shortTitle: '带方扣气质女鞋',
        title: '2019新款包头半拖鞋女绸缎面穆勒鞋低跟名媛凉拖皮带方扣气质女鞋',
        itemPrice: '320',
        originalPrice: '370',
        salePoints: ['名媛凉拖', '2019新款'],
        itemSize: '197/96A',
        itemColor: '红色'
      });
    })
    .then(() => {
      return knex('products').insert({
        itemId: '123454426094356344',
        itemPic:
          'https://img.alicdn.com/imgextra/i1/2217103366/O1CN01U3g56U1ajffWzVYFe_!!2217103366.jpg',
        shortTitle: '新款短毛边牛仔裤',
        title: '大sim 夏装百搭3色毛边牛仔裤做旧高腰宽松韩版新款短裤热裤女潮',
        itemPrice: '48.6',
        originalPrice: '280.6',
        salePoints: ['夏装百搭', '韩版新款'],
        itemSize: '197/96A',
        itemColor: '白色'
      });
    })
    .then(() => {
      return knex('products').insert({
        itemId: '123454426434356344',
        itemPic:
          'https://img.alicdn.com/imgextra/i4/191052046/O1CN01Ow3pzV1Qz6rSHUvGb_!!191052046.jpg',
        shortTitle: '短袖针织衫女2019',
        title: '彩虹短袖针织衫女2019春夏新款ulzzang韩版宽松横条纹打底衫T恤',
        itemPrice: '48.6',
        originalPrice: '280.6',
        salePoints: ['2019春夏', '韩版新款'],
        itemSize: '197/96A',
        itemColor: '红色'
      });
    })
    .then(() => {
      return knex('products').insert({
        itemId: '123454400834356344',
        itemPic:
          'https://img.alicdn.com/imgextra/i1/714169485/O1CN01vraVCb2JwBCY9mDKX_!!714169485.jpg',
        shortTitle: '韩版ins高帮潮鞋',
        title: '田小雨彩 虹鞋帆布鞋女2019春季新款学生复古百搭韩版ins高帮潮鞋',
        itemPrice: '48.6',
        originalPrice: '280.6',
        salePoints: ['2019春夏', '复古百搭'],
        itemSize: '197/96A',
        itemColor: '棕色'
      });
    });
};
