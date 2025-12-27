export const restaurantInfo = {
  name: "BOBA DREAM",
  tagline: {
    it: "Il Sogno del Bubble Tea",
    en: "The Bubble Tea Dream",
    zh: "珍珠奶茶梦"
  },
  description: {
    it: "Bubble tea artigianale con ingredienti freschi e perle fatte in casa ogni giorno",
    en: "Artisan bubble tea with fresh ingredients and house-made pearls daily",
    zh: "手工珍珠奶茶，新鲜食材，每日现煮珍珠"
  },
  address: "Via della Spiga 15, 20121 Milano",
  phone: "+39 02 1234 5678",
  hours: {
    it: "Lun-Dom: 10:00 - 22:00",
    en: "Mon-Sun: 10:00 - 22:00",
    zh: "周一至周日: 10:00 - 22:00"
  },
  social: {
    instagram: "@bobadream_milano",
    tiktok: "@bobadream"
  }
}

export const categories = [
  { id: 'signature', label: { it: 'Signature', en: 'Signature', zh: '招牌' } },
  { id: 'milktea', label: { it: 'Milk Tea', en: 'Milk Tea', zh: '奶茶' } },
  { id: 'fruittea', label: { it: 'Tè alla Frutta', en: 'Fruit Tea', zh: '水果茶' } },
  { id: 'smoothie', label: { it: 'Frullati', en: 'Smoothies', zh: '冰沙' } }
]

export const drinks = [
  {
    id: 1,
    category: 'signature',
    name: { it: 'Brown Sugar Boba Latte', en: 'Brown Sugar Boba Latte', zh: '黑糖珍珠鲜奶' },
    description: { it: 'Latte fresco con perle al caramello', en: 'Fresh milk with caramel pearls', zh: '鲜奶配焦糖珍珠' },
    price: '5.50',
    image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400',
    popular: true,
    sweetness: ['0%', '30%', '50%', '70%', '100%'],
    ice: ['No Ice', 'Less Ice', 'Regular', 'Extra Ice']
  },
  {
    id: 2,
    category: 'signature',
    name: { it: 'Taro Dream', en: 'Taro Dream', zh: '香芋梦幻' },
    description: { it: 'Cremoso taro con latte e boba', en: 'Creamy taro with milk and boba', zh: '香浓芋泥配鲜奶珍珠' },
    price: '5.80',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400',
    popular: true
  },
  {
    id: 3,
    category: 'signature',
    name: { it: 'Matcha Latte Boba', en: 'Matcha Latte Boba', zh: '抹茶珍珠拿铁' },
    description: { it: 'Matcha giapponese premium con latte', en: 'Premium Japanese matcha with milk', zh: '日本宇治抹茶配鲜奶' },
    price: '6.00',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400',
    popular: true
  },
  {
    id: 4,
    category: 'milktea',
    name: { it: 'Classic Pearl Milk Tea', en: 'Classic Pearl Milk Tea', zh: '经典珍珠奶茶' },
    description: { it: 'Il classico taiwanese originale', en: 'The original Taiwanese classic', zh: '台湾正宗原味' },
    price: '4.80',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400'
  },
  {
    id: 5,
    category: 'milktea',
    name: { it: 'Oolong Milk Tea', en: 'Oolong Milk Tea', zh: '乌龙奶茶' },
    description: { it: 'Tè oolong affumicato con latte cremoso', en: 'Smoky oolong tea with creamy milk', zh: '炭焙乌龙配奶香' },
    price: '5.20',
    image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400'
  },
  {
    id: 6,
    category: 'milktea',
    name: { it: 'Thai Milk Tea', en: 'Thai Milk Tea', zh: '泰式奶茶' },
    description: { it: 'Tè thailandese dolce e speziato', en: 'Sweet and spiced Thai tea', zh: '泰国风味香浓' },
    price: '5.00',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400'
  },
  {
    id: 7,
    category: 'fruittea',
    name: { it: 'Passion Fruit Green Tea', en: 'Passion Fruit Green Tea', zh: '百香果绿茶' },
    description: { it: 'Rinfrescante tè verde con frutto della passione', en: 'Refreshing green tea with passion fruit', zh: '清新绿茶配百香果' },
    price: '5.50',
    image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400'
  },
  {
    id: 8,
    category: 'fruittea',
    name: { it: 'Mango Pomelo Sago', en: 'Mango Pomelo Sago', zh: '杨枝甘露' },
    description: { it: 'Mango fresco, pompelmo e perle di sago', en: 'Fresh mango, pomelo and sago pearls', zh: '新鲜芒果柚子西米' },
    price: '6.20',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400',
    popular: true
  },
  {
    id: 9,
    category: 'fruittea',
    name: { it: 'Peach Oolong', en: 'Peach Oolong', zh: '蜜桃乌龙' },
    description: { it: 'Tè oolong con pesca fresca', en: 'Oolong tea with fresh peach', zh: '乌龙茶配蜜桃果肉' },
    price: '5.80',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400'
  },
  {
    id: 10,
    category: 'smoothie',
    name: { it: 'Oreo Smoothie', en: 'Oreo Smoothie', zh: '奥利奥冰沙' },
    description: { it: 'Cremoso frullato con biscotti Oreo', en: 'Creamy smoothie with Oreo cookies', zh: '奥利奥饼干奶昔' },
    price: '5.50',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400'
  },
  {
    id: 11,
    category: 'smoothie',
    name: { it: 'Strawberry Yogurt', en: 'Strawberry Yogurt', zh: '草莓酸奶' },
    description: { it: 'Yogurt fresco con fragole', en: 'Fresh yogurt with strawberries', zh: '新鲜草莓酸奶' },
    price: '5.80',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a90a0868?w=400'
  },
  {
    id: 12,
    category: 'smoothie',
    name: { it: 'Avocado Smoothie', en: 'Avocado Smoothie', zh: '牛油果冰沙' },
    description: { it: 'Cremoso avocado con latte', en: 'Creamy avocado with milk', zh: '香浓牛油果奶昔' },
    price: '6.00',
    image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400'
  }
]

export const toppings = [
  { id: 1, name: { it: 'Boba Classiche', en: 'Classic Boba', zh: '经典珍珠' }, price: '0.50' },
  { id: 2, name: { it: 'Boba al Caramello', en: 'Brown Sugar Boba', zh: '黑糖珍珠' }, price: '0.70' },
  { id: 3, name: { it: 'Aloe Vera', en: 'Aloe Vera', zh: '芦荟' }, price: '0.50' },
  { id: 4, name: { it: 'Gelatina di Cocco', en: 'Coconut Jelly', zh: '椰果' }, price: '0.50' },
  { id: 5, name: { it: 'Pudding', en: 'Pudding', zh: '布丁' }, price: '0.70' },
  { id: 6, name: { it: 'Crema di Formaggio', en: 'Cheese Foam', zh: '芝士奶盖' }, price: '1.00' }
]

export const promotions = [
  {
    id: 1,
    title: { it: 'Happy Hour', en: 'Happy Hour', zh: '欢乐时光' },
    description: { it: '20% di sconto 14:00-16:00', en: '20% off 2PM-4PM', zh: '下午2-4点8折' },
    code: 'HAPPY20'
  },
  {
    id: 2,
    title: { it: 'Acquista 5, prendi 1 gratis', en: 'Buy 5 Get 1 Free', zh: '买5送1' },
    description: { it: 'Accumula punti con ogni acquisto', en: 'Collect stamps with every purchase', zh: '每杯集章一枚' },
    code: 'STAMP'
  }
]

export const navigation = {
  menu: { it: 'Menu', en: 'Menu', zh: '菜单' },
  about: { it: 'Chi Siamo', en: 'About', zh: '关于我们' },
  locations: { it: 'Sedi', en: 'Locations', zh: '门店' },
  order: { it: 'Ordina Ora', en: 'Order Now', zh: '立即下单' }
}
