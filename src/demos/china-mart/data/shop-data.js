// 华人超市小程序数据 - ChinaMart
export const translations = {
  it: {
    appName: 'CinaMart',
    nav: { home: 'Home', cart: 'Carrello', orders: 'Ordini', profile: 'Profilo' },
    search: 'Cerca prodotti...',
    categories: { all: 'Tutto', snacks: 'Snack', drinks: 'Bevande', noodles: 'Noodles', sauce: 'Salse', frozen: 'Surgelati' },
    cart: { title: 'Carrello', empty: 'Carrello vuoto', total: 'Totale', checkout: 'Checkout' },
    checkout: { title: 'Checkout', delivery: 'Consegna', pickup: 'Ritiro', address: 'Indirizzo', confirm: 'Conferma', success: 'Ordine confermato!' },
    product: { add: 'Aggiungi', inStock: 'Disponibile', outOfStock: 'Esaurito' }
  },
  en: {
    appName: 'ChinaMart',
    nav: { home: 'Home', cart: 'Cart', orders: 'Orders', profile: 'Profile' },
    search: 'Search products...',
    categories: { all: 'All', snacks: 'Snacks', drinks: 'Drinks', noodles: 'Noodles', sauce: 'Sauces', frozen: 'Frozen' },
    cart: { title: 'Cart', empty: 'Cart is empty', total: 'Total', checkout: 'Checkout' },
    checkout: { title: 'Checkout', delivery: 'Delivery', pickup: 'Pickup', address: 'Address', confirm: 'Confirm', success: 'Order confirmed!' },
    product: { add: 'Add', inStock: 'In Stock', outOfStock: 'Out of Stock' }
  },
  zh: {
    appName: '华人超市',
    nav: { home: '首页', cart: '购物车', orders: '订单', profile: '我的' },
    search: '搜索商品...',
    categories: { all: '全部', snacks: '零食', drinks: '饮料', noodles: '方便面', sauce: '调味品', frozen: '冷冻食品' },
    cart: { title: '购物车', empty: '购物车是空的', total: '合计', checkout: '结算' },
    checkout: { title: '结算', delivery: '配送', pickup: '自提', address: '地址', confirm: '确认订单', success: '订单已确认！' },
    product: { add: '加入购物车', inStock: '有货', outOfStock: '暂无' }
  }
}

export const shopInfo = {
  name: 'ChinaMart Milano',
  address: 'Via Paolo Sarpi 28, 20154 Milano',
  phone: '+39 02 3456 7890',
  deliveryFee: 3.50,
  freeDeliveryMin: 30,
  minOrder: 15
}

export const products = [
  // Snacks
  { id: 1, category: 'snacks', name: { it: 'Cracker di Riso Want Want', en: 'Want Want Rice Crackers', zh: '旺旺雪饼' }, price: 3.50, image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&h=300&fit=crop', inStock: true },
  { id: 2, category: 'snacks', name: { it: 'Pocky Fragola', en: 'Strawberry Pocky', zh: '草莓百奇' }, price: 2.80, image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300&h=300&fit=crop', inStock: true },
  { id: 3, category: 'snacks', name: { it: 'Prugne Secche', en: 'Dried Plums', zh: '话梅' }, price: 4.20, image: 'https://images.unsplash.com/photo-1596591868264-6d2c6e86c9a0?w=300&h=300&fit=crop', inStock: true },
  { id: 4, category: 'snacks', name: { it: 'Semi di Girasole', en: 'Sunflower Seeds', zh: '瓜子' }, price: 2.50, image: 'https://images.unsplash.com/photo-1508747703725-719f6c7946cb?w=300&h=300&fit=crop', inStock: true },

  // Drinks
  { id: 5, category: 'drinks', name: { it: 'Tè al Latte', en: 'Milk Tea', zh: '统一奶茶' }, price: 2.20, image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=300&h=300&fit=crop', inStock: true },
  { id: 6, category: 'drinks', name: { it: 'Latte di Soia', en: 'Soy Milk', zh: '维他豆奶' }, price: 1.80, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop', inStock: true },
  { id: 7, category: 'drinks', name: { it: 'Tè Verde Oolong', en: 'Oolong Tea', zh: '乌龙茶' }, price: 2.50, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop', inStock: true },
  { id: 8, category: 'drinks', name: { it: 'Succo di Mango', en: 'Mango Juice', zh: '芒果汁' }, price: 2.00, image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300&h=300&fit=crop', inStock: false },

  // Noodles
  { id: 9, category: 'noodles', name: { it: 'Shin Ramyun', en: 'Shin Ramyun', zh: '辛拉面' }, price: 1.80, image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=300&h=300&fit=crop', inStock: true },
  { id: 10, category: 'noodles', name: { it: 'Master Kong Manzo', en: 'Master Kong Beef', zh: '康师傅红烧牛肉面' }, price: 1.50, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop', inStock: true },
  { id: 11, category: 'noodles', name: { it: 'Vermicelli di Riso', en: 'Rice Vermicelli', zh: '米粉' }, price: 2.20, image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=300&fit=crop', inStock: true },
  { id: 12, category: 'noodles', name: { it: 'Udon Freschi', en: 'Fresh Udon', zh: '乌冬面' }, price: 3.00, image: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=300&h=300&fit=crop', inStock: true },

  // Sauces
  { id: 13, category: 'sauce', name: { it: 'Salsa di Soia Lee Kum Kee', en: 'Lee Kum Kee Soy Sauce', zh: '李锦记酱油' }, price: 4.50, image: 'https://images.unsplash.com/photo-1585672840563-f2af2ced55c9?w=300&h=300&fit=crop', inStock: true },
  { id: 14, category: 'sauce', name: { it: 'Olio di Sesamo', en: 'Sesame Oil', zh: '芝麻油' }, price: 5.80, image: 'https://images.unsplash.com/photo-1474979266404-7eaacdc49a41?w=300&h=300&fit=crop', inStock: true },
  { id: 15, category: 'sauce', name: { it: 'Laoganma Chili', en: 'Laoganma Chili Crisp', zh: '老干妈辣酱' }, price: 4.20, image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300&h=300&fit=crop', inStock: true },
  { id: 16, category: 'sauce', name: { it: 'Aceto di Riso', en: 'Rice Vinegar', zh: '米醋' }, price: 3.50, image: 'https://images.unsplash.com/photo-1620574387730-3d88c8e6f3c4?w=300&h=300&fit=crop', inStock: true },

  // Frozen
  { id: 17, category: 'frozen', name: { it: 'Ravioli di Maiale', en: 'Pork Dumplings', zh: '猪肉水饺' }, price: 6.50, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=300&fit=crop', inStock: true },
  { id: 18, category: 'frozen', name: { it: 'Panini al Vapore', en: 'Steam Buns', zh: '馒头' }, price: 3.80, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=300&fit=crop', inStock: true },
  { id: 19, category: 'frozen', name: { it: 'Tofu Congelato', en: 'Frozen Tofu', zh: '冻豆腐' }, price: 2.80, image: 'https://images.unsplash.com/photo-1628557025268-7b99b7ff6e7e?w=300&h=300&fit=crop', inStock: false },
  { id: 20, category: 'frozen', name: { it: 'Edamame', en: 'Edamame', zh: '毛豆' }, price: 4.00, image: 'https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=300&h=300&fit=crop', inStock: true }
]

export const categories = ['all', 'snacks', 'drinks', 'noodles', 'sauce', 'frozen']
