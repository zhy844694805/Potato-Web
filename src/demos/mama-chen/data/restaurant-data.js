export const restaurantInfo = {
  name: "MAMA CHEN",
  subtitle: {
    it: "Cucina Cinese Autentica",
    en: "Authentic Chinese Cuisine",
    zh: "正宗中国菜"
  },
  description: {
    it: "Ricette tradizionali tramandate da tre generazioni, preparate con ingredienti freschi e autentici sapori della Cina",
    en: "Traditional recipes passed down through three generations, prepared with fresh ingredients and authentic Chinese flavors",
    zh: "三代传承的传统食谱，新鲜食材，正宗中国味道"
  },
  address: "Via Paolo Sarpi 42, 20154 Milano",
  phone: "+39 02 3456 7890",
  hours: {
    lunch: { it: "Pranzo: 12:00 - 15:00", en: "Lunch: 12:00 - 15:00", zh: "午餐: 12:00 - 15:00" },
    dinner: { it: "Cena: 18:30 - 23:00", en: "Dinner: 18:30 - 23:00", zh: "晚餐: 18:30 - 23:00" }
  },
  closedDay: { it: "Chiuso il Martedì", en: "Closed on Tuesday", zh: "周二休息" }
}

export const categories = [
  { id: 'appetizer', label: { it: 'Antipasti', en: 'Appetizers', zh: '前菜' }, icon: '🥟' },
  { id: 'soup', label: { it: 'Zuppe', en: 'Soups', zh: '汤类' }, icon: '🍜' },
  { id: 'main', label: { it: 'Secondi', en: 'Main Dishes', zh: '主菜' }, icon: '🍛' },
  { id: 'noodle', label: { it: 'Noodles', en: 'Noodles', zh: '面食' }, icon: '🍝' },
  { id: 'rice', label: { it: 'Riso', en: 'Rice', zh: '饭类' }, icon: '🍚' },
  { id: 'dessert', label: { it: 'Dolci', en: 'Desserts', zh: '甜点' }, icon: '🧁' }
]

export const dishes = [
  // Appetizers
  {
    id: 1,
    category: 'appetizer',
    name: { it: 'Ravioli al Vapore', en: 'Steamed Dumplings', zh: '蒸饺' },
    description: { it: '8 pezzi ripieni di maiale e verdure', en: '8 pcs with pork and vegetables', zh: '8个猪肉蔬菜馅' },
    price: '8.50',
    spicy: false,
    popular: true
  },
  {
    id: 2,
    category: 'appetizer',
    name: { it: 'Involtini Primavera', en: 'Spring Rolls', zh: '春卷' },
    description: { it: '4 pezzi croccanti con verdure', en: '4 crispy rolls with vegetables', zh: '4个蔬菜脆皮' },
    price: '6.50',
    spicy: false
  },
  {
    id: 3,
    category: 'appetizer',
    name: { it: 'Edamame Piccanti', en: 'Spicy Edamame', zh: '香辣毛豆' },
    description: { it: 'Fagioli di soia con aglio e peperoncino', en: 'Soybeans with garlic and chili', zh: '蒜香辣味' },
    price: '5.50',
    spicy: true
  },
  {
    id: 4,
    category: 'appetizer',
    name: { it: 'Wonton Fritti', en: 'Fried Wontons', zh: '炸云吞' },
    description: { it: '6 pezzi con salsa agrodolce', en: '6 pcs with sweet & sour sauce', zh: '6个配糖醋酱' },
    price: '7.00',
    spicy: false
  },
  // Soups
  {
    id: 5,
    category: 'soup',
    name: { it: 'Zuppa di Wonton', en: 'Wonton Soup', zh: '云吞汤' },
    description: { it: 'Brodo chiaro con ravioli di gamberi', en: 'Clear broth with shrimp dumplings', zh: '清汤虾云吞' },
    price: '7.50',
    spicy: false,
    popular: true
  },
  {
    id: 6,
    category: 'soup',
    name: { it: 'Zuppa Agro-Piccante', en: 'Hot & Sour Soup', zh: '酸辣汤' },
    description: { it: 'Classica zuppa piccante con tofu', en: 'Classic spicy soup with tofu', zh: '经典豆腐酸辣汤' },
    price: '6.50',
    spicy: true
  },
  // Main Dishes
  {
    id: 7,
    category: 'main',
    name: { it: 'Pollo Kung Pao', en: 'Kung Pao Chicken', zh: '宫保鸡丁' },
    description: { it: 'Pollo con arachidi e peperoncino secco', en: 'Chicken with peanuts and dried chili', zh: '花生干辣椒' },
    price: '14.50',
    spicy: true,
    popular: true
  },
  {
    id: 8,
    category: 'main',
    name: { it: 'Maiale in Agrodolce', en: 'Sweet & Sour Pork', zh: '糖醋里脊' },
    description: { it: 'Bocconcini di maiale croccanti', en: 'Crispy pork bites', zh: '酥脆猪肉' },
    price: '13.50',
    spicy: false
  },
  {
    id: 9,
    category: 'main',
    name: { it: 'Manzo con Broccoli', en: 'Beef with Broccoli', zh: '西兰花牛肉' },
    description: { it: 'Manzo tenero saltato', en: 'Tender stir-fried beef', zh: '嫩滑牛肉' },
    price: '15.50',
    spicy: false
  },
  {
    id: 10,
    category: 'main',
    name: { it: 'Gamberi al Peperoncino', en: 'Chili Prawns', zh: '干烧大虾' },
    description: { it: 'Gamberi giganti in salsa piccante', en: 'Giant prawns in spicy sauce', zh: '大虾辣酱' },
    price: '18.50',
    spicy: true,
    popular: true
  },
  {
    id: 11,
    category: 'main',
    name: { it: 'Anatra alla Pechinese', en: 'Peking Duck', zh: '北京烤鸭' },
    description: { it: 'Mezza anatra con pancake e salsa', en: 'Half duck with pancakes and sauce', zh: '半只配薄饼酱料' },
    price: '32.00',
    spicy: false,
    popular: true
  },
  {
    id: 12,
    category: 'main',
    name: { it: 'Mapo Tofu', en: 'Mapo Tofu', zh: '麻婆豆腐' },
    description: { it: 'Tofu in salsa piccante di Sichuan', en: 'Tofu in Sichuan spicy sauce', zh: '四川风味' },
    price: '11.50',
    spicy: true
  },
  // Noodles
  {
    id: 13,
    category: 'noodle',
    name: { it: 'Noodles Saltati', en: 'Stir-Fried Noodles', zh: '炒面' },
    description: { it: 'Con verdure e pollo o manzo', en: 'With vegetables and chicken or beef', zh: '蔬菜鸡肉或牛肉' },
    price: '11.50',
    spicy: false
  },
  {
    id: 14,
    category: 'noodle',
    name: { it: 'Zhajiangmian', en: 'Zhajiang Noodles', zh: '炸酱面' },
    description: { it: 'Noodles con salsa di soia fermentata', en: 'Noodles with fermented soy sauce', zh: '传统酱香' },
    price: '12.50',
    spicy: false,
    popular: true
  },
  {
    id: 15,
    category: 'noodle',
    name: { it: 'Dan Dan Mian', en: 'Dan Dan Noodles', zh: '担担面' },
    description: { it: 'Noodles piccanti del Sichuan', en: 'Spicy Sichuan noodles', zh: '四川名面' },
    price: '12.00',
    spicy: true
  },
  // Rice
  {
    id: 16,
    category: 'rice',
    name: { it: 'Riso Cantonese', en: 'Cantonese Fried Rice', zh: '扬州炒饭' },
    description: { it: 'Riso saltato con gamberi, uova e verdure', en: 'Fried rice with shrimp, egg and vegetables', zh: '虾仁蛋蔬菜' },
    price: '10.50',
    spicy: false,
    popular: true
  },
  {
    id: 17,
    category: 'rice',
    name: { it: 'Riso al Curry', en: 'Curry Rice', zh: '咖喱饭' },
    description: { it: 'Con pollo e verdure', en: 'With chicken and vegetables', zh: '鸡肉蔬菜' },
    price: '11.50',
    spicy: true
  },
  // Desserts
  {
    id: 18,
    category: 'dessert',
    name: { it: 'Palline di Sesamo', en: 'Sesame Balls', zh: '芝麻球' },
    description: { it: '3 palline fritte con pasta di fagioli', en: '3 fried balls with red bean paste', zh: '3个红豆馅' },
    price: '5.50',
    spicy: false
  },
  {
    id: 19,
    category: 'dessert',
    name: { it: 'Mochi al Mango', en: 'Mango Mochi', zh: '芒果麻薯' },
    description: { it: '3 pezzi ripieni di mango fresco', en: '3 pcs filled with fresh mango', zh: '3个新鲜芒果馅' },
    price: '6.00',
    spicy: false
  }
]

export const lunchMenu = {
  title: { it: 'Menu Pranzo', en: 'Lunch Menu', zh: '午市套餐' },
  price: '12.50',
  includes: {
    it: 'Antipasto + Secondo + Riso + Bevanda',
    en: 'Appetizer + Main + Rice + Drink',
    zh: '前菜 + 主菜 + 米饭 + 饮料'
  }
}

export const navigation = {
  menu: { it: 'Menu', en: 'Menu', zh: '菜单' },
  lunch: { it: 'Pranzo', en: 'Lunch', zh: '午餐' },
  reservation: { it: 'Prenota', en: 'Reserve', zh: '预约' },
  contact: { it: 'Contatti', en: 'Contact', zh: '联系' }
}
