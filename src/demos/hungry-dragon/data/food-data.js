// 外卖点餐APP数据 - 龙腾外卖 Hungry Dragon
export const translations = {
  it: {
    appName: 'Drago Affamato',
    nav: { home: 'Home', menu: 'Menu', cart: 'Carrello', orders: 'Ordini' },
    hero: { title: 'Cucina cinese autentica', subtitle: 'Consegna veloce a domicilio', cta: 'Ordina ora' },
    categories: { all: 'Tutto', appetizers: 'Antipasti', noodles: 'Noodles', rice: 'Riso', dimsum: 'Dim Sum', drinks: 'Bevande' },
    cart: { title: 'Il tuo carrello', empty: 'Carrello vuoto', total: 'Totale', checkout: 'Procedi', delivery: 'Consegna', deliveryFee: 'Spese di consegna' },
    checkout: { title: 'Checkout', address: 'Indirizzo', phone: 'Telefono', notes: 'Note', confirm: 'Conferma ordine', success: 'Ordine confermato!' },
    item: { add: 'Aggiungi', spicy: 'Piccante', vegetarian: 'Vegetariano' }
  },
  en: {
    appName: 'Hungry Dragon',
    nav: { home: 'Home', menu: 'Menu', cart: 'Cart', orders: 'Orders' },
    hero: { title: 'Authentic Chinese Cuisine', subtitle: 'Fast delivery to your door', cta: 'Order Now' },
    categories: { all: 'All', appetizers: 'Appetizers', noodles: 'Noodles', rice: 'Rice', dimsum: 'Dim Sum', drinks: 'Drinks' },
    cart: { title: 'Your Cart', empty: 'Cart is empty', total: 'Total', checkout: 'Checkout', delivery: 'Delivery', deliveryFee: 'Delivery fee' },
    checkout: { title: 'Checkout', address: 'Address', phone: 'Phone', notes: 'Notes', confirm: 'Confirm Order', success: 'Order confirmed!' },
    item: { add: 'Add', spicy: 'Spicy', vegetarian: 'Vegetarian' }
  },
  zh: {
    appName: '龙腾外卖',
    nav: { home: '首页', menu: '菜单', cart: '购物车', orders: '订单' },
    hero: { title: '正宗中华美食', subtitle: '快速送餐到家', cta: '立即点餐' },
    categories: { all: '全部', appetizers: '凉菜', noodles: '面食', rice: '米饭', dimsum: '点心', drinks: '饮品' },
    cart: { title: '购物车', empty: '购物车是空的', total: '合计', checkout: '去结算', delivery: '配送', deliveryFee: '配送费' },
    checkout: { title: '结算', address: '地址', phone: '电话', notes: '备注', confirm: '确认订单', success: '订单已确认！' },
    item: { add: '加入', spicy: '辣', vegetarian: '素食' }
  }
}

export const restaurantInfo = {
  name: { it: 'Drago Affamato', en: 'Hungry Dragon', zh: '龙腾外卖' },
  address: 'Via Paolo Sarpi 42, 20154 Milano',
  phone: '+39 02 8765 4321',
  deliveryFee: 2.50,
  minOrder: 15,
  deliveryTime: '30-45 min',
  rating: 4.8,
  reviews: 2340
}

export const menuItems = [
  // Appetizers
  { id: 1, category: 'appetizers', name: { it: 'Involtini Primavera', en: 'Spring Rolls', zh: '春卷' }, desc: { it: '4 pezzi croccanti', en: '4 crispy pieces', zh: '4个酥脆春卷' }, price: 5.50, image: 'https://images.unsplash.com/photo-1548032885-b5e38734688a?w=400&h=300&fit=crop', tags: ['vegetarian'] },
  { id: 2, category: 'appetizers', name: { it: 'Ravioli al Vapore', en: 'Steamed Dumplings', zh: '蒸饺' }, desc: { it: '6 pezzi ripieni di maiale', en: '6 pork filled pieces', zh: '6个猪肉蒸饺' }, price: 7.00, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop', tags: [] },
  { id: 3, category: 'appetizers', name: { it: 'Edamame', en: 'Edamame', zh: '毛豆' }, desc: { it: 'Con sale marino', en: 'With sea salt', zh: '海盐毛豆' }, price: 4.50, image: 'https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=400&h=300&fit=crop', tags: ['vegetarian'] },

  // Noodles
  { id: 4, category: 'noodles', name: { it: 'Noodles Fritti', en: 'Fried Noodles', zh: '炒面' }, desc: { it: 'Con verdure e pollo', en: 'With vegetables and chicken', zh: '鸡肉蔬菜炒面' }, price: 9.50, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop', tags: [] },
  { id: 5, category: 'noodles', name: { it: 'Zuppa di Noodles', en: 'Noodle Soup', zh: '汤面' }, desc: { it: 'Brodo ricco con manzo', en: 'Rich broth with beef', zh: '牛肉汤面' }, price: 10.50, image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop', tags: [] },
  { id: 6, category: 'noodles', name: { it: 'Dan Dan Mian', en: 'Dan Dan Noodles', zh: '担担面' }, desc: { it: 'Noodles piccanti del Sichuan', en: 'Spicy Sichuan noodles', zh: '四川担担面' }, price: 11.00, image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop', tags: ['spicy'] },

  // Rice
  { id: 7, category: 'rice', name: { it: 'Riso Cantonese', en: 'Cantonese Rice', zh: '扬州炒饭' }, desc: { it: 'Con uovo, piselli e prosciutto', en: 'With egg, peas and ham', zh: '蛋炒饭配火腿豌豆' }, price: 8.50, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop', tags: [] },
  { id: 8, category: 'rice', name: { it: 'Pollo Kung Pao', en: 'Kung Pao Chicken', zh: '宫保鸡丁' }, desc: { it: 'Pollo piccante con arachidi', en: 'Spicy chicken with peanuts', zh: '花生辣子鸡' }, price: 12.50, image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop', tags: ['spicy'] },
  { id: 9, category: 'rice', name: { it: 'Maiale in Agrodolce', en: 'Sweet & Sour Pork', zh: '糖醋里脊' }, desc: { it: 'Classico della cucina cinese', en: 'Chinese cuisine classic', zh: '经典中式糖醋肉' }, price: 11.50, image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop', tags: [] },

  // Dim Sum
  { id: 10, category: 'dimsum', name: { it: 'Har Gow', en: 'Har Gow', zh: '虾饺' }, desc: { it: '4 ravioli di gamberi', en: '4 shrimp dumplings', zh: '4个水晶虾饺' }, price: 8.00, image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop', tags: [] },
  { id: 11, category: 'dimsum', name: { it: 'Siu Mai', en: 'Siu Mai', zh: '烧卖' }, desc: { it: '4 ravioli di maiale e gamberi', en: '4 pork & shrimp dumplings', zh: '4个猪肉虾仁烧卖' }, price: 7.50, image: 'https://images.unsplash.com/photo-1576577445504-6af96477db52?w=400&h=300&fit=crop', tags: [] },
  { id: 12, category: 'dimsum', name: { it: 'Char Siu Bao', en: 'Char Siu Bao', zh: '叉烧包' }, desc: { it: '3 panini al maiale BBQ', en: '3 BBQ pork buns', zh: '3个蜜汁叉烧包' }, price: 6.50, image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=300&fit=crop', tags: [] },

  // Drinks
  { id: 13, category: 'drinks', name: { it: 'Tè al Gelsomino', en: 'Jasmine Tea', zh: '茉莉花茶' }, desc: { it: 'Tè cinese classico', en: 'Classic Chinese tea', zh: '经典中式茉莉茶' }, price: 3.00, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', tags: ['vegetarian'] },
  { id: 14, category: 'drinks', name: { it: 'Bubble Tea Taro', en: 'Taro Bubble Tea', zh: '芋头奶茶' }, desc: { it: 'Con perle di tapioca', en: 'With tapioca pearls', zh: '香芋珍珠奶茶' }, price: 5.50, image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop', tags: ['vegetarian'] },
  { id: 15, category: 'drinks', name: { it: 'Birra Tsingtao', en: 'Tsingtao Beer', zh: '青岛啤酒' }, desc: { it: 'Birra cinese 330ml', en: 'Chinese beer 330ml', zh: '青岛啤酒330ml' }, price: 4.00, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop', tags: [] }
]

export const categories = ['all', 'appetizers', 'noodles', 'rice', 'dimsum', 'drinks']
