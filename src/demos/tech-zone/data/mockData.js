// TechZone Mock Data for Admin Panel

export const mockUsers = [
  {
    id: 'user-001',
    username: 'mario.rossi',
    email: 'mario.rossi@email.it',
    name: { zh: '马里奥·罗西', en: 'Mario Rossi', it: 'Mario Rossi' },
    phone: '+39 333 123 4567',
    address: 'Via Roma 1, Milano',
    joinDate: '2024-01-15',
    totalOrders: 12,
    totalSpent: 2456.80,
    isActive: true
  },
  {
    id: 'user-002',
    username: 'giulia.bianchi',
    email: 'giulia.bianchi@email.it',
    name: { zh: '朱利亚·比安奇', en: 'Giulia Bianchi', it: 'Giulia Bianchi' },
    phone: '+39 333 234 5678',
    address: 'Via Milano 25, Roma',
    joinDate: '2024-02-20',
    totalOrders: 8,
    totalSpent: 1899.50,
    isActive: true
  },
  {
    id: 'user-003',
    username: 'luca.ferrari',
    email: 'luca.ferrari@email.it',
    name: { zh: '卢卡·法拉利', en: 'Luca Ferrari', it: 'Luca Ferrari' },
    phone: '+39 333 345 6789',
    address: 'Corso Italia 10, Torino',
    joinDate: '2024-03-10',
    totalOrders: 5,
    totalSpent: 879.90,
    isActive: true
  },
  {
    id: 'user-004',
    username: 'anna.ricci',
    email: 'anna.ricci@email.it',
    name: { zh: '安娜·里奇', en: 'Anna Ricci', it: 'Anna Ricci' },
    phone: '+39 333 456 7890',
    address: 'Piazza Duomo 5, Firenze',
    joinDate: '2024-04-05',
    totalOrders: 15,
    totalSpent: 3245.00,
    isActive: true
  },
  {
    id: 'user-005',
    username: 'marco.conti',
    email: 'marco.conti@email.it',
    name: { zh: '马可·孔蒂', en: 'Marco Conti', it: 'Marco Conti' },
    phone: '+39 333 567 8901',
    address: 'Via Napoli 8, Bologna',
    joinDate: '2024-05-12',
    totalOrders: 3,
    totalSpent: 549.00,
    isActive: false
  },
  {
    id: 'user-006',
    username: 'lisa.moretti',
    email: 'lisa.moretti@email.it',
    name: { zh: '丽莎·莫雷蒂', en: 'Lisa Moretti', it: 'Lisa Moretti' },
    phone: '+39 333 678 9012',
    address: 'Via Venezia 15, Napoli',
    joinDate: '2024-06-01',
    totalOrders: 7,
    totalSpent: 1567.30,
    isActive: true
  },
  {
    id: 'user-007',
    username: 'paolo.bruno',
    email: 'paolo.bruno@email.it',
    name: { zh: '保罗·布鲁诺', en: 'Paolo Bruno', it: 'Paolo Bruno' },
    phone: '+39 333 789 0123',
    address: 'Via Genova 20, Palermo',
    joinDate: '2024-07-18',
    totalOrders: 2,
    totalSpent: 299.00,
    isActive: true
  },
  {
    id: 'user-008',
    username: 'sara.greco',
    email: 'sara.greco@email.it',
    name: { zh: '萨拉·格雷科', en: 'Sara Greco', it: 'Sara Greco' },
    phone: '+39 333 890 1234',
    address: 'Via Bari 30, Verona',
    joinDate: '2024-08-22',
    totalOrders: 10,
    totalSpent: 2156.70,
    isActive: true
  }
];

export const mockOrders = [
  {
    id: 'ORD-2024-001',
    userId: 'user-001',
    customerName: 'Mario Rossi',
    customerEmail: 'mario.rossi@email.it',
    items: [
      { productId: 'phone-001', name: 'iPhone 15 Pro Max', quantity: 1, price: 1299 },
      { productId: 'acc-001', name: 'Apple MagSafe Charger', quantity: 2, price: 49 }
    ],
    subtotal: 1397,
    shipping: 0,
    total: 1397,
    status: 'delivered',
    shippingAddress: 'Via Roma 1, 20121 Milano, Italia',
    shippingMethod: 'express',
    paymentMethod: 'credit_card',
    orderDate: '2024-11-15T10:30:00Z',
    deliveredDate: '2024-11-17T14:20:00Z'
  },
  {
    id: 'ORD-2024-002',
    userId: 'user-002',
    customerName: 'Giulia Bianchi',
    customerEmail: 'giulia.bianchi@email.it',
    items: [
      { productId: 'audio-002', name: 'Sony WH-1000XM5', quantity: 1, price: 349 },
      { productId: 'wearable-003', name: 'Xiaomi Smart Band 8 Pro', quantity: 1, price: 69 }
    ],
    subtotal: 418,
    shipping: 9.99,
    total: 427.99,
    status: 'shipped',
    shippingAddress: 'Via Milano 25, 00185 Roma, Italia',
    shippingMethod: 'standard',
    paymentMethod: 'paypal',
    orderDate: '2024-12-01T15:45:00Z',
    deliveredDate: null
  },
  {
    id: 'ORD-2024-003',
    userId: 'user-004',
    customerName: 'Anna Ricci',
    customerEmail: 'anna.ricci@email.it',
    items: [
      { productId: 'laptop-001', name: 'MacBook Pro 16" M3 Max', quantity: 1, price: 2999 }
    ],
    subtotal: 2999,
    shipping: 0,
    total: 2999,
    status: 'processing',
    shippingAddress: 'Piazza Duomo 5, 50122 Firenze, Italia',
    shippingMethod: 'express',
    paymentMethod: 'credit_card',
    orderDate: '2024-12-10T09:15:00Z',
    deliveredDate: null
  },
  {
    id: 'ORD-2024-004',
    userId: 'user-006',
    customerName: 'Lisa Moretti',
    customerEmail: 'lisa.moretti@email.it',
    items: [
      { productId: 'tablet-002', name: 'Samsung Galaxy Tab S9 Ultra', quantity: 1, price: 999 },
      { productId: 'acc-003', name: 'Logitech MX Master 3S', quantity: 1, price: 99 }
    ],
    subtotal: 1098,
    shipping: 0,
    total: 1098,
    status: 'pending',
    shippingAddress: 'Via Venezia 15, 80100 Napoli, Italia',
    shippingMethod: 'standard',
    paymentMethod: 'bank_transfer',
    orderDate: '2024-12-12T11:30:00Z',
    deliveredDate: null
  },
  {
    id: 'ORD-2024-005',
    userId: 'user-008',
    customerName: 'Sara Greco',
    customerEmail: 'sara.greco@email.it',
    items: [
      { productId: 'gaming-001', name: 'PlayStation 5', quantity: 1, price: 499 },
      { productId: 'gaming-003', name: 'Sony DualSense Edge', quantity: 2, price: 199 }
    ],
    subtotal: 897,
    shipping: 9.99,
    total: 906.99,
    status: 'delivered',
    shippingAddress: 'Via Bari 30, 37121 Verona, Italia',
    shippingMethod: 'standard',
    paymentMethod: 'credit_card',
    orderDate: '2024-11-28T16:00:00Z',
    deliveredDate: '2024-12-02T10:45:00Z'
  },
  {
    id: 'ORD-2024-006',
    userId: 'user-003',
    customerName: 'Luca Ferrari',
    customerEmail: 'luca.ferrari@email.it',
    items: [
      { productId: 'smarthome-003', name: 'DJI Mini 3 Pro', quantity: 1, price: 759 }
    ],
    subtotal: 759,
    shipping: 0,
    total: 759,
    status: 'cancelled',
    shippingAddress: 'Corso Italia 10, 10123 Torino, Italia',
    shippingMethod: 'express',
    paymentMethod: 'credit_card',
    orderDate: '2024-12-05T14:20:00Z',
    deliveredDate: null
  },
  {
    id: 'ORD-2024-007',
    userId: 'user-001',
    customerName: 'Mario Rossi',
    customerEmail: 'mario.rossi@email.it',
    items: [
      { productId: 'audio-001', name: 'AirPods Pro 2', quantity: 1, price: 249 }
    ],
    subtotal: 249,
    shipping: 9.99,
    total: 258.99,
    status: 'delivered',
    shippingAddress: 'Via Roma 1, 20121 Milano, Italia',
    shippingMethod: 'standard',
    paymentMethod: 'paypal',
    orderDate: '2024-10-20T12:00:00Z',
    deliveredDate: '2024-10-24T09:30:00Z'
  },
  {
    id: 'ORD-2024-008',
    userId: 'user-004',
    customerName: 'Anna Ricci',
    customerEmail: 'anna.ricci@email.it',
    items: [
      { productId: 'wearable-001', name: 'Apple Watch Ultra 2', quantity: 1, price: 799 },
      { productId: 'acc-002', name: 'Anker 737 Power Bank', quantity: 1, price: 149 }
    ],
    subtotal: 948,
    shipping: 0,
    total: 948,
    status: 'shipped',
    shippingAddress: 'Piazza Duomo 5, 50122 Firenze, Italia',
    shippingMethod: 'express',
    paymentMethod: 'credit_card',
    orderDate: '2024-12-08T08:45:00Z',
    deliveredDate: null
  }
];

export const mockReviews = [
  {
    id: 'review-001',
    productId: 'phone-001',
    userId: 'user-001',
    userName: 'Mario R.',
    rating: 5,
    title: { zh: '最好的iPhone', en: 'Best iPhone Ever', it: 'Il Miglior iPhone di Sempre' },
    content: {
      zh: '相机质量令人惊叹，钛金属设计非常优雅。电池续航也比之前的型号好很多。',
      en: 'The camera quality is stunning and the titanium design feels premium. Battery life is much better than previous models.',
      it: 'La qualità della fotocamera è straordinaria e il design in titanio è premium. La batteria dura molto di più dei modelli precedenti.'
    },
    date: '2024-11-20',
    helpful: 24,
    verified: true
  },
  {
    id: 'review-002',
    productId: 'phone-001',
    userId: 'user-002',
    userName: 'Giulia B.',
    rating: 4,
    title: { zh: '很棒但很贵', en: 'Great but Expensive', it: 'Ottimo ma Costoso' },
    content: {
      zh: '手机很棒，但价格有点高。USB-C的转变是受欢迎的。',
      en: 'Amazing phone but the price is a bit steep. The USB-C change is welcome though.',
      it: 'Telefono fantastico ma il prezzo è un po\' alto. Il passaggio a USB-C è comunque benvenuto.'
    },
    date: '2024-11-25',
    helpful: 15,
    verified: true
  },
  {
    id: 'review-003',
    productId: 'audio-002',
    userId: 'user-006',
    userName: 'Lisa M.',
    rating: 5,
    title: { zh: '完美的降噪', en: 'Perfect Noise Cancellation', it: 'Cancellazione del Rumore Perfetta' },
    content: {
      zh: '这些耳机的降噪效果太棒了。非常适合在办公室和旅行时使用。',
      en: 'The noise cancellation on these headphones is incredible. Perfect for office and travel.',
      it: 'La cancellazione del rumore di queste cuffie è incredibile. Perfette per ufficio e viaggi.'
    },
    date: '2024-12-01',
    helpful: 32,
    verified: true
  },
  {
    id: 'review-004',
    productId: 'laptop-001',
    userId: 'user-004',
    userName: 'Anna R.',
    rating: 5,
    title: { zh: '专业创作者的梦想', en: 'A Dream for Creatives', it: 'Un Sogno per i Creativi' },
    content: {
      zh: 'M3 Max芯片太强大了。视频编辑和3D渲染速度飞快，而且风扇几乎无声。',
      en: 'The M3 Max chip is incredibly powerful. Video editing and 3D rendering are blazing fast, and the fans are nearly silent.',
      it: 'Il chip M3 Max è incredibilmente potente. Editing video e rendering 3D velocissimi, e le ventole sono quasi silenziose.'
    },
    date: '2024-12-05',
    helpful: 45,
    verified: true
  },
  {
    id: 'review-005',
    productId: 'gaming-001',
    userId: 'user-008',
    userName: 'Sara G.',
    rating: 5,
    title: { zh: '下一代游戏体验', en: 'Next-Gen Gaming', it: 'Gaming di Nuova Generazione' },
    content: {
      zh: 'PS5的加载时间太快了！DualSense手柄的触觉反馈让游戏更加沉浸。',
      en: 'The loading times are so fast! The DualSense haptic feedback makes games so much more immersive.',
      it: 'I tempi di caricamento sono velocissimi! Il feedback aptico del DualSense rende i giochi molto più immersivi.'
    },
    date: '2024-12-02',
    helpful: 28,
    verified: true
  }
];

// Dashboard statistics (mock data)
export const dashboardStats = {
  totalSales: 48567.80,
  totalOrders: 156,
  totalProducts: 34,
  totalUsers: 89,
  salesGrowth: 12.5,
  ordersGrowth: 8.3,
  averageOrderValue: 311.33,
  conversionRate: 3.2,
  recentSales: [
    { date: '2024-12-01', amount: 2456.50 },
    { date: '2024-12-02', amount: 1899.00 },
    { date: '2024-12-03', amount: 3245.80 },
    { date: '2024-12-04', amount: 1567.30 },
    { date: '2024-12-05', amount: 2890.00 },
    { date: '2024-12-06', amount: 1234.50 },
    { date: '2024-12-07', amount: 2678.90 }
  ],
  topProducts: [
    { id: 'phone-001', name: 'iPhone 15 Pro Max', sales: 45, revenue: 58455 },
    { id: 'laptop-001', name: 'MacBook Pro 16"', sales: 18, revenue: 53982 },
    { id: 'audio-002', name: 'Sony WH-1000XM5', sales: 67, revenue: 23383 },
    { id: 'gaming-001', name: 'PlayStation 5', sales: 32, revenue: 15968 },
    { id: 'wearable-001', name: 'Apple Watch Ultra 2', sales: 28, revenue: 22372 }
  ],
  ordersByStatus: {
    pending: 12,
    processing: 23,
    shipped: 45,
    delivered: 68,
    cancelled: 8
  }
};

// Admin credentials (for demo purposes only)
export const adminCredentials = {
  username: 'admin',
  password: 'admin123'
};

// Helper functions
export const getUserById = (id) => mockUsers.find(u => u.id === id);
export const getOrderById = (id) => mockOrders.find(o => o.id === id);
export const getOrdersByUserId = (userId) => mockOrders.filter(o => o.userId === userId);
export const getReviewsByProductId = (productId) => mockReviews.filter(r => r.productId === productId);
