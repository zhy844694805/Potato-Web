// 博客文章数据
// Blog posts data

export const blogPosts = [
  {
    id: 1,
    slug: 'react-performance-optimization',
    title: {
      zh: 'React性能优化：从理论到实践',
      en: 'React Performance Optimization: From Theory to Practice'
    },
    excerpt: {
      zh: '深入探讨React应用性能优化的最佳实践，包括memo、useMemo、useCallback等Hook的正确使用方法，以及代码分割和懒加载策略。',
      en: 'In-depth exploration of best practices for React application performance optimization, including proper use of memo, useMemo, useCallback hooks, and code splitting and lazy loading strategies.'
    },
    content: {
      zh: `在现代Web开发中，React已经成为最受欢迎的前端框架之一。然而，随着应用规模的增长，性能问题往往会悄然显现。本文将从实际项目经验出发，分享一些切实有效的React性能优化策略。

## 理解React的渲染机制

在优化之前，我们需要理解React的工作原理。React使用虚拟DOM来提高性能，但这并不意味着我们可以忽视优化。每当组件的state或props发生变化时，React都会触发重新渲染。

关键点在于：**不必要的重新渲染是性能问题的主要来源**。

## 使用React.memo优化函数组件

React.memo是一个高阶组件，它会对组件的props进行浅比较。如果props没有变化，组件就不会重新渲染。

\`\`\`javascript
const ExpensiveComponent = React.memo(({ data }) => {
  // 复杂的渲染逻辑
  return <div>{/* ... */}</div>
})
\`\`\`

**使用场景**：
- 组件渲染开销较大
- 组件经常接收相同的props
- 父组件频繁更新但子组件不需要更新

**注意事项**：不要过度使用memo，对于简单组件，memo的比较开销可能超过重新渲染的开销。

## useMemo与useCallback的正确使用

这两个Hook经常被误用。让我澄清它们的真正用途：

**useMemo**：缓存计算结果
\`\`\`javascript
const expensiveValue = useMemo(() => {
  return heavyComputation(data)
}, [data])
\`\`\`

**useCallback**：缓存函数引用
\`\`\`javascript
const handleClick = useCallback(() => {
  doSomething(id)
}, [id])
\`\`\`

**何时使用**：
1. 计算量大的操作使用useMemo
2. 传递给使用memo的子组件的回调函数使用useCallback
3. 作为其他Hook依赖项的函数使用useCallback

## 代码分割与懒加载

对于大型应用，代码分割是必不可少的优化手段：

\`\`\`javascript
const Dashboard = React.lazy(() => import('./Dashboard'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  )
}
\`\`\`

**最佳实践**：
- 按路由分割代码
- 延迟加载不常用的功能
- 使用预加载提升用户体验

## 列表渲染优化

长列表是性能杀手。以下是优化策略：

1. **使用稳定的key**：避免使用index作为key
2. **虚拟化长列表**：使用react-window或react-virtualized
3. **分页加载**：不要一次性加载所有数据

## 状态管理优化

状态的位置直接影响渲染范围：

- 将状态下移到需要它的组件
- 使用Context时注意分割，避免不必要的更新
- 考虑使用状态管理库的选择性订阅功能

## 实际案例

在我最近的一个项目中，通过以上优化手段，首屏加载时间从3.2秒降低到0.8秒，交互响应时间提升了60%。

## 总结

性能优化是一个持续的过程。关键是：
1. 先测量，后优化
2. 专注于真正的性能瓶颈
3. 不要过度优化

记住，**过早优化是万恶之源**，但在合适的时机进行优化，能够显著提升用户体验。`,
      en: `In modern web development, React has become one of the most popular frontend frameworks. However, as applications grow in scale, performance issues often emerge silently. This article shares practical React performance optimization strategies based on real project experience.

## Understanding React's Rendering Mechanism

Before optimizing, we need to understand how React works. React uses a virtual DOM to improve performance, but this doesn't mean we can ignore optimization. Whenever a component's state or props change, React triggers a re-render.

The key point is: **unnecessary re-renders are the main source of performance issues**.

## Using React.memo to Optimize Function Components

React.memo is a higher-order component that performs a shallow comparison of the component's props. If the props haven't changed, the component won't re-render.

\`\`\`javascript
const ExpensiveComponent = React.memo(({ data }) => {
  // Complex rendering logic
  return <div>{/* ... */}</div>
})
\`\`\`

**Use cases**:
- Component has expensive rendering
- Component frequently receives the same props
- Parent component updates frequently but child doesn't need to update

**Note**: Don't overuse memo. For simple components, the comparison overhead may exceed the re-render cost.

## Proper Use of useMemo and useCallback

These two Hooks are often misused. Let me clarify their true purposes:

**useMemo**: Cache computed values
\`\`\`javascript
const expensiveValue = useMemo(() => {
  return heavyComputation(data)
}, [data])
\`\`\`

**useCallback**: Cache function references
\`\`\`javascript
const handleClick = useCallback(() => {
  doSomething(id)
}, [id])
\`\`\`

**When to use**:
1. Use useMemo for expensive computations
2. Use useCallback for callbacks passed to memoized child components
3. Use useCallback for functions used as dependencies in other Hooks

## Code Splitting and Lazy Loading

For large applications, code splitting is essential:

\`\`\`javascript
const Dashboard = React.lazy(() => import('./Dashboard'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  )
}
\`\`\`

**Best practices**:
- Split code by routes
- Lazy load infrequently used features
- Use preloading to enhance user experience

## List Rendering Optimization

Long lists are performance killers. Here are optimization strategies:

1. **Use stable keys**: Avoid using index as key
2. **Virtualize long lists**: Use react-window or react-virtualized
3. **Paginate loading**: Don't load all data at once

## State Management Optimization

State location directly affects render scope:

- Move state down to components that need it
- Split Context to avoid unnecessary updates
- Consider selective subscription features in state management libraries

## Real Case Study

In my recent project, through the above optimizations, initial load time dropped from 3.2 seconds to 0.8 seconds, and interaction response improved by 60%.

## Summary

Performance optimization is an ongoing process. The key is:
1. Measure first, then optimize
2. Focus on real performance bottlenecks
3. Don't over-optimize

Remember, **premature optimization is the root of all evil**, but optimizing at the right time can significantly improve user experience.`
    },
    category: {
      zh: '技术分享',
      en: 'Technical Sharing'
    },
    tags: [
      { zh: 'React', en: 'React' },
      { zh: '性能优化', en: 'Performance' },
      { zh: '前端开发', en: 'Frontend' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-12-15',
    readTime: { zh: '8分钟', en: '8 min' },
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    featured: true
  },
  {
    id: 2,
    slug: 'fullstack-development-guide',
    title: {
      zh: '全栈开发入门指南：从零到一',
      en: 'Full-Stack Development Guide: From Zero to One'
    },
    excerpt: {
      zh: '全栈开发者的学习路径和技能树规划，涵盖前端、后端、数据库、部署等各个环节。附带实战项目案例和学习资源推荐。',
      en: 'Learning path and skill tree planning for full-stack developers, covering frontend, backend, database, deployment and more. Includes practical project examples and learning resource recommendations.'
    },
    content: {
      zh: `全栈开发者需要掌握从前端到后端的完整技术栈。这听起来可能令人生畏，但通过正确的学习路径，任何人都可以成为全栈开发者。本文将分享我的学习经验和建议。

## 什么是全栈开发

全栈开发意味着你能够独立完成一个Web应用的所有开发工作，包括：
- 用户界面（前端）
- 服务器逻辑（后端）
- 数据存储（数据库）
- 部署和运维

## 学习路径规划

### 第一阶段：前端基础（2-3个月）

**HTML & CSS**
- 语义化HTML
- CSS布局（Flexbox、Grid）
- 响应式设计

**JavaScript**
- ES6+语法
- DOM操作
- 异步编程（Promise、async/await）

### 第二阶段：前端框架（2-3个月）

选择一个主流框架深入学习：
- **React**：生态丰富，就业机会多
- **Vue**：上手简单，中文社区活跃

重点掌握：
- 组件化思维
- 状态管理
- 路由管理
- 构建工具（Vite、Webpack）

### 第三阶段：后端开发（3-4个月）

**Node.js**
\`\`\`javascript
const express = require('express')
const app = express()

app.get('/api/users', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

app.listen(3000)
\`\`\`

**核心概念**：
- RESTful API设计
- 中间件机制
- 错误处理
- 身份认证（JWT）

### 第四阶段：数据库（1-2个月）

**SQL数据库（MySQL/PostgreSQL）**
- 表设计和关系
- CRUD操作
- 索引优化

**NoSQL数据库（MongoDB）**
- 文档模型
- 聚合管道
- 适用场景

### 第五阶段：部署和运维（1个月）

- Git版本控制
- Linux基础命令
- Docker容器化
- CI/CD流程
- 云服务（AWS、阿里云）

## 实战项目建议

边学边做是最有效的学习方式。以下是推荐的练手项目：

1. **个人博客系统**
   - 前端：React/Vue
   - 后端：Node.js + Express
   - 数据库：MongoDB
   - 功能：文章CRUD、评论、用户系统

2. **任务管理应用**
   - 实时更新
   - 拖拽排序
   - 多用户协作

3. **电商网站**
   - 商品管理
   - 购物车
   - 支付集成

## 学习资源推荐

**免费资源**：
- MDN Web Docs（前端文档）
- freeCodeCamp（实践项目）
- Node.js官方文档

**付费课程**：
- 极客时间的专栏
- Udemy的实战课程

## 给初学者的建议

1. **不要贪多**：一次专注一项技术
2. **多写代码**：理论结合实践
3. **参与开源**：学习优秀代码
4. **保持耐心**：成为全栈开发者需要时间

## 总结

全栈开发是一段旅程，而不是目的地。技术在不断发展，保持学习的心态比掌握某项具体技术更重要。从今天开始，选择一个方向，开始你的全栈之路吧！`,
      en: `Full-stack developers need to master the complete technology stack from frontend to backend. This may sound daunting, but with the right learning path, anyone can become a full-stack developer. This article shares my learning experience and suggestions.

## What is Full-Stack Development

Full-stack development means you can independently complete all development work for a web application, including:
- User Interface (Frontend)
- Server Logic (Backend)
- Data Storage (Database)
- Deployment and Operations

## Learning Path Planning

### Phase 1: Frontend Basics (2-3 months)

**HTML & CSS**
- Semantic HTML
- CSS Layout (Flexbox, Grid)
- Responsive Design

**JavaScript**
- ES6+ Syntax
- DOM Manipulation
- Async Programming (Promise, async/await)

### Phase 2: Frontend Frameworks (2-3 months)

Choose one mainstream framework to learn deeply:
- **React**: Rich ecosystem, many job opportunities
- **Vue**: Easy to start, active Chinese community

Key focus areas:
- Component-based thinking
- State management
- Route management
- Build tools (Vite, Webpack)

### Phase 3: Backend Development (3-4 months)

**Node.js**
\`\`\`javascript
const express = require('express')
const app = express()

app.get('/api/users', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

app.listen(3000)
\`\`\`

**Core Concepts**:
- RESTful API Design
- Middleware Mechanism
- Error Handling
- Authentication (JWT)

### Phase 4: Database (1-2 months)

**SQL Databases (MySQL/PostgreSQL)**
- Table design and relationships
- CRUD operations
- Index optimization

**NoSQL Databases (MongoDB)**
- Document model
- Aggregation pipeline
- Use cases

### Phase 5: Deployment and Operations (1 month)

- Git version control
- Linux basic commands
- Docker containerization
- CI/CD process
- Cloud services (AWS, etc.)

## Practical Project Suggestions

Learning by doing is the most effective approach. Here are recommended practice projects:

1. **Personal Blog System**
   - Frontend: React/Vue
   - Backend: Node.js + Express
   - Database: MongoDB
   - Features: Article CRUD, comments, user system

2. **Task Management App**
   - Real-time updates
   - Drag-and-drop sorting
   - Multi-user collaboration

3. **E-commerce Website**
   - Product management
   - Shopping cart
   - Payment integration

## Learning Resource Recommendations

**Free Resources**:
- MDN Web Docs (Frontend documentation)
- freeCodeCamp (Practice projects)
- Node.js Official Documentation

**Paid Courses**:
- Udemy practical courses
- Frontend Masters

## Advice for Beginners

1. **Don't be greedy**: Focus on one technology at a time
2. **Write more code**: Combine theory with practice
3. **Participate in open source**: Learn from excellent code
4. **Stay patient**: Becoming a full-stack developer takes time

## Summary

Full-stack development is a journey, not a destination. Technology is constantly evolving, and maintaining a learning mindset is more important than mastering any specific technology. Start today, choose a direction, and begin your full-stack journey!`
    },
    category: {
      zh: '技术分享',
      en: 'Technical Sharing'
    },
    tags: [
      { zh: '全栈开发', en: 'Full-Stack' },
      { zh: '学习路线', en: 'Learning Path' },
      { zh: '职业发展', en: 'Career' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-12-10',
    readTime: { zh: '12分钟', en: '12 min' },
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    featured: true
  },
  {
    id: 3,
    slug: 'web-accessibility-best-practices',
    title: {
      zh: 'Web无障碍设计最佳实践',
      en: 'Web Accessibility Best Practices'
    },
    excerpt: {
      zh: '如何让你的网站对所有用户友好？探讨WCAG标准、语义化HTML、键盘导航、屏幕阅读器适配等无障碍设计要点。',
      en: 'How to make your website friendly to all users? Explore WCAG standards, semantic HTML, keyboard navigation, screen reader compatibility and other accessibility design essentials.'
    },
    content: {
      zh: `无障碍设计（Accessibility，简称a11y）是Web开发中经常被忽视但至关重要的领域。一个真正优秀的网站应该对所有人友好，包括视觉、听觉、运动或认知障碍的用户。

## 为什么无障碍设计很重要

1. **用户覆盖**：全球约15%的人口有某种形式的残疾
2. **法律要求**：许多国家和地区有无障碍法规
3. **SEO优势**：无障碍实践通常也有利于搜索引擎优化
4. **用户体验**：无障碍设计让所有人都受益

## WCAG标准简介

Web内容无障碍指南（WCAG）是国际公认的标准，基于四个核心原则：

- **可感知**：信息必须以用户可感知的方式呈现
- **可操作**：用户界面和导航必须可操作
- **可理解**：信息和操作必须可理解
- **健壮性**：内容必须足够健壮，可被各种技术解释

## 语义化HTML

语义化HTML是无障碍设计的基础：

\`\`\`html
<!-- 不推荐 -->
<div class="header">
  <div class="nav">...</div>
</div>

<!-- 推荐 -->
<header>
  <nav aria-label="主导航">...</nav>
</header>
\`\`\`

**常用语义化标签**：
- \`<header>\`、\`<footer>\`、\`<main>\`
- \`<nav>\`、\`<article>\`、\`<section>\`
- \`<button>\` 而不是 \`<div onclick>\`
- \`<a>\` 用于链接，\`<button>\` 用于操作

## 键盘导航

确保所有功能都可以通过键盘访问：

\`\`\`css
/* 不要移除焦点样式，而是美化它 */
:focus {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

/* 仅在使用鼠标时隐藏焦点环 */
:focus:not(:focus-visible) {
  outline: none;
}
\`\`\`

**键盘导航要点**：
- Tab键可以访问所有交互元素
- 焦点顺序符合视觉逻辑
- 模态框要正确管理焦点
- 提供跳过导航的链接

## ARIA属性

当HTML语义不足时，使用ARIA属性：

\`\`\`html
<!-- 图标按钮 -->
<button aria-label="关闭菜单">
  <svg>...</svg>
</button>

<!-- 加载状态 -->
<div role="status" aria-live="polite">
  正在加载...
</div>

<!-- 扩展面板 -->
<button aria-expanded="false" aria-controls="panel1">
  更多信息
</button>
<div id="panel1" hidden>...</div>
\`\`\`

## 颜色和对比度

- 文本与背景的对比度至少4.5:1
- 不仅依靠颜色传达信息
- 提供足够大的点击目标（至少44x44像素）

## 图片和替代文本

\`\`\`html
<!-- 信息性图片 -->
<img src="chart.png" alt="2024年销售额增长30%的柱状图">

<!-- 装饰性图片 -->
<img src="decoration.png" alt="" role="presentation">

<!-- 复杂图片 -->
<figure>
  <img src="infographic.png" alt="公司组织架构图">
  <figcaption>
    详细说明：CEO下辖三个部门...
  </figcaption>
</figure>
\`\`\`

## 表单无障碍

\`\`\`html
<form>
  <div>
    <label for="email">邮箱地址</label>
    <input
      type="email"
      id="email"
      aria-describedby="email-hint"
      required
    >
    <span id="email-hint">我们不会分享你的邮箱</span>
  </div>

  <div role="group" aria-labelledby="payment-label">
    <span id="payment-label">支付方式</span>
    <label><input type="radio" name="payment"> 支付宝</label>
    <label><input type="radio" name="payment"> 微信</label>
  </div>
</form>
\`\`\`

## 测试工具

- **自动化工具**：axe、Lighthouse
- **屏幕阅读器**：NVDA（Windows）、VoiceOver（Mac）
- **键盘测试**：拔掉鼠标，只用键盘操作
- **对比度检查器**：WebAIM Contrast Checker

## 总结

无障碍设计不是额外的工作，而是高质量Web开发的一部分。从项目开始就考虑无障碍，比后期修复更容易、成本更低。让我们一起构建一个对所有人友好的互联网！`,
      en: `Accessibility (a11y) is an often overlooked but crucial area in web development. A truly excellent website should be friendly to everyone, including users with visual, auditory, motor, or cognitive disabilities.

## Why Accessibility Matters

1. **User Coverage**: About 15% of the world's population has some form of disability
2. **Legal Requirements**: Many countries and regions have accessibility regulations
3. **SEO Benefits**: Accessibility practices often benefit search engine optimization
4. **User Experience**: Accessible design benefits everyone

## WCAG Standards Introduction

The Web Content Accessibility Guidelines (WCAG) is an internationally recognized standard based on four core principles:

- **Perceivable**: Information must be presented in ways users can perceive
- **Operable**: UI and navigation must be operable
- **Understandable**: Information and operation must be understandable
- **Robust**: Content must be robust enough to be interpreted by various technologies

## Semantic HTML

Semantic HTML is the foundation of accessible design:

\`\`\`html
<!-- Not recommended -->
<div class="header">
  <div class="nav">...</div>
</div>

<!-- Recommended -->
<header>
  <nav aria-label="Main navigation">...</nav>
</header>
\`\`\`

**Common semantic tags**:
- \`<header>\`, \`<footer>\`, \`<main>\`
- \`<nav>\`, \`<article>\`, \`<section>\`
- \`<button>\` instead of \`<div onclick>\`
- \`<a>\` for links, \`<button>\` for actions

## Keyboard Navigation

Ensure all functionality is accessible via keyboard:

\`\`\`css
/* Don't remove focus styles, beautify them */
:focus {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

/* Hide focus ring only when using mouse */
:focus:not(:focus-visible) {
  outline: none;
}
\`\`\`

**Keyboard navigation key points**:
- Tab key can access all interactive elements
- Focus order follows visual logic
- Modal dialogs manage focus correctly
- Provide skip navigation links

## ARIA Attributes

Use ARIA attributes when HTML semantics are insufficient:

\`\`\`html
<!-- Icon button -->
<button aria-label="Close menu">
  <svg>...</svg>
</button>

<!-- Loading state -->
<div role="status" aria-live="polite">
  Loading...
</div>

<!-- Expandable panel -->
<button aria-expanded="false" aria-controls="panel1">
  More info
</button>
<div id="panel1" hidden>...</div>
\`\`\`

## Color and Contrast

- Text-to-background contrast ratio at least 4.5:1
- Don't rely solely on color to convey information
- Provide sufficient click targets (at least 44x44 pixels)

## Images and Alt Text

\`\`\`html
<!-- Informative image -->
<img src="chart.png" alt="Bar chart showing 30% sales growth in 2024">

<!-- Decorative image -->
<img src="decoration.png" alt="" role="presentation">

<!-- Complex image -->
<figure>
  <img src="infographic.png" alt="Company organization chart">
  <figcaption>
    Detailed description: CEO oversees three departments...
  </figcaption>
</figure>
\`\`\`

## Form Accessibility

\`\`\`html
<form>
  <div>
    <label for="email">Email Address</label>
    <input
      type="email"
      id="email"
      aria-describedby="email-hint"
      required
    >
    <span id="email-hint">We won't share your email</span>
  </div>

  <div role="group" aria-labelledby="payment-label">
    <span id="payment-label">Payment Method</span>
    <label><input type="radio" name="payment"> PayPal</label>
    <label><input type="radio" name="payment"> Credit Card</label>
  </div>
</form>
\`\`\`

## Testing Tools

- **Automated tools**: axe, Lighthouse
- **Screen readers**: NVDA (Windows), VoiceOver (Mac)
- **Keyboard testing**: Unplug mouse, use only keyboard
- **Contrast checkers**: WebAIM Contrast Checker

## Summary

Accessible design is not extra work, but part of high-quality web development. Considering accessibility from the start is easier and less costly than fixing it later. Let's build an internet that's friendly to everyone!`
    },
    category: {
      zh: '设计思考',
      en: 'Design Thinking'
    },
    tags: [
      { zh: '无障碍设计', en: 'Accessibility' },
      { zh: 'UX设计', en: 'UX Design' },
      { zh: 'Web标准', en: 'Web Standards' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-12-05',
    readTime: { zh: '10分钟', en: '10 min' },
    thumbnail: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80',
    featured: true
  },
  {
    id: 4,
    slug: 'modern-css-layout-techniques',
    title: {
      zh: '现代CSS布局技术：Grid与Flexbox深度对比',
      en: 'Modern CSS Layout Techniques: Grid vs Flexbox In-Depth'
    },
    excerpt: {
      zh: 'CSS Grid和Flexbox各有千秋，什么场景用哪个？本文通过实际案例深入对比两者的特性和最佳使用场景。',
      en: 'CSS Grid and Flexbox each have their strengths. Which one to use in what scenario? This article provides in-depth comparison of their features and best use cases through practical examples.'
    },
    content: {
      zh: `CSS布局经历了从表格布局、浮动布局到现代弹性布局的演变。如今，Flexbox和Grid是两种最强大的布局工具。理解它们的区别和适用场景，是现代前端开发的必备技能。

## 核心区别

**Flexbox**：一维布局系统
- 处理一行或一列的布局
- 内容优先：布局由内容决定

**Grid**：二维布局系统
- 同时处理行和列
- 布局优先：先定义布局，再放置内容

## Flexbox详解

Flexbox适合组件级别的布局：

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}
\`\`\`

**常用属性**：

容器属性：
- \`flex-direction\`：主轴方向
- \`justify-content\`：主轴对齐
- \`align-items\`：交叉轴对齐
- \`flex-wrap\`：换行处理
- \`gap\`：元素间距

项目属性：
- \`flex-grow\`：放大比例
- \`flex-shrink\`：缩小比例
- \`flex-basis\`：基础尺寸

**实用技巧**：

\`\`\`css
/* 完美居中 */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 底部固定 */
.card {
  display: flex;
  flex-direction: column;
}
.card-footer {
  margin-top: auto;
}

/* 等分布局 */
.equal-columns {
  display: flex;
}
.equal-columns > * {
  flex: 1;
}
\`\`\`

## Grid详解

Grid适合页面级别的布局：

\`\`\`css
.page-layout {
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`

**核心概念**：

\`\`\`css
/* 定义轨道 */
grid-template-columns: 200px 1fr 2fr;
grid-template-columns: repeat(3, 1fr);
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

/* 隐式网格 */
grid-auto-rows: minmax(100px, auto);

/* 间距 */
gap: 20px;
row-gap: 10px;
column-gap: 20px;
\`\`\`

**响应式网格**：

\`\`\`css
/* 自动适应的卡片网格 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

## 实际对比

### 导航栏布局

**Flexbox方案**（推荐）：
\`\`\`css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

### 卡片网格

**Grid方案**（推荐）：
\`\`\`css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`

### 圣杯布局

**Grid方案**（推荐）：
\`\`\`css
.holy-grail {
  display: grid;
  grid-template:
    "header header header" auto
    "nav main aside" 1fr
    "footer footer footer" auto
    / 200px 1fr 200px;
}
\`\`\`

## 选择指南

**使用Flexbox**：
- 导航菜单
- 按钮组
- 表单元素对齐
- 卡片内部布局
- 任何一维排列

**使用Grid**：
- 页面整体布局
- 卡片网格
- 图片画廊
- 复杂的表单布局
- 任何需要二维控制的场景

**组合使用**：
\`\`\`css
/* Grid用于页面布局 */
.page {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

/* Flexbox用于组件布局 */
.sidebar-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
\`\`\`

## 浏览器兼容性

两者都已获得现代浏览器的广泛支持（IE11除外）。对于需要支持旧浏览器的项目，可以使用@supports进行特性检测：

\`\`\`css
.container {
  display: flex;
  flex-wrap: wrap;
}

@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
\`\`\`

## 总结

Flexbox和Grid不是竞争关系，而是互补关系。掌握两者并根据场景选择合适的工具，才是现代CSS布局的正确姿势。记住：Flexbox处理一维，Grid处理二维，两者结合使用效果最佳。`,
      en: `CSS layout has evolved from table layouts, float layouts, to modern flexible layouts. Today, Flexbox and Grid are the two most powerful layout tools. Understanding their differences and use cases is an essential skill for modern frontend development.

## Core Differences

**Flexbox**: One-dimensional layout system
- Handles layout in a row or column
- Content-first: Layout determined by content

**Grid**: Two-dimensional layout system
- Handles rows and columns simultaneously
- Layout-first: Define layout first, then place content

## Flexbox In-Depth

Flexbox is suitable for component-level layouts:

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}
\`\`\`

**Common Properties**:

Container properties:
- \`flex-direction\`: Main axis direction
- \`justify-content\`: Main axis alignment
- \`align-items\`: Cross axis alignment
- \`flex-wrap\`: Wrapping behavior
- \`gap\`: Element spacing

Item properties:
- \`flex-grow\`: Growth ratio
- \`flex-shrink\`: Shrink ratio
- \`flex-basis\`: Base size

**Practical Tips**:

\`\`\`css
/* Perfect centering */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Sticky footer */
.card {
  display: flex;
  flex-direction: column;
}
.card-footer {
  margin-top: auto;
}

/* Equal columns */
.equal-columns {
  display: flex;
}
.equal-columns > * {
  flex: 1;
}
\`\`\`

## Grid In-Depth

Grid is suitable for page-level layouts:

\`\`\`css
.page-layout {
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`

**Core Concepts**:

\`\`\`css
/* Define tracks */
grid-template-columns: 200px 1fr 2fr;
grid-template-columns: repeat(3, 1fr);
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

/* Implicit grid */
grid-auto-rows: minmax(100px, auto);

/* Gaps */
gap: 20px;
row-gap: 10px;
column-gap: 20px;
\`\`\`

**Responsive Grid**:

\`\`\`css
/* Auto-adapting card grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

## Practical Comparisons

### Navigation Bar Layout

**Flexbox approach** (recommended):
\`\`\`css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

### Card Grid

**Grid approach** (recommended):
\`\`\`css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`

### Holy Grail Layout

**Grid approach** (recommended):
\`\`\`css
.holy-grail {
  display: grid;
  grid-template:
    "header header header" auto
    "nav main aside" 1fr
    "footer footer footer" auto
    / 200px 1fr 200px;
}
\`\`\`

## Selection Guide

**Use Flexbox for**:
- Navigation menus
- Button groups
- Form element alignment
- Card internal layout
- Any one-dimensional arrangement

**Use Grid for**:
- Overall page layout
- Card grids
- Image galleries
- Complex form layouts
- Any scenario requiring two-dimensional control

**Combined Use**:
\`\`\`css
/* Grid for page layout */
.page {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

/* Flexbox for component layout */
.sidebar-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
\`\`\`

## Browser Compatibility

Both have widespread support in modern browsers (except IE11). For projects requiring older browser support, use @supports for feature detection:

\`\`\`css
.container {
  display: flex;
  flex-wrap: wrap;
}

@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
\`\`\`

## Summary

Flexbox and Grid are not competitors but complementary tools. Mastering both and choosing the right tool for each scenario is the correct approach to modern CSS layout. Remember: Flexbox handles one dimension, Grid handles two dimensions, and using them together yields the best results.`
    },
    category: {
      zh: '技术分享',
      en: 'Technical Sharing'
    },
    tags: [
      { zh: 'CSS', en: 'CSS' },
      { zh: '布局设计', en: 'Layout Design' },
      { zh: '前端开发', en: 'Frontend' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-11-28',
    readTime: { zh: '15分钟', en: '15 min' },
    thumbnail: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80',
    featured: false
  },
  {
    id: 5,
    slug: 'restful-api-design-principles',
    title: {
      zh: 'RESTful API设计原则与实践',
      en: 'RESTful API Design Principles and Practice'
    },
    excerpt: {
      zh: '设计优雅的RESTful API需要遵循哪些原则？从资源命名、HTTP方法选择到错误处理，全面解析API设计的核心要点。',
      en: 'What principles should be followed when designing elegant RESTful APIs? Comprehensive analysis of core API design points from resource naming and HTTP method selection to error handling.'
    },
    content: {
      zh: `API是现代Web应用的骨架。一个设计良好的API能够提升开发效率、减少沟通成本、增强系统可维护性。本文将分享RESTful API设计的核心原则和实践经验。

## REST核心概念

REST（Representational State Transfer）是一种架构风格，核心思想是：

1. **资源（Resources）**：一切皆资源，用URI标识
2. **表现（Representations）**：资源的具体形式（JSON、XML等）
3. **状态转换（State Transfer）**：通过HTTP方法操作资源

## 资源命名规范

**使用名词，避免动词**：
\`\`\`
# 好的设计
GET /users
GET /users/123
POST /users
PUT /users/123
DELETE /users/123

# 不好的设计
GET /getUsers
POST /createUser
POST /deleteUser/123
\`\`\`

**使用复数形式**：
\`\`\`
# 推荐
GET /users
GET /articles

# 不推荐
GET /user
GET /article
\`\`\`

**嵌套资源**：
\`\`\`
# 用户的订单
GET /users/123/orders
GET /users/123/orders/456

# 避免过深嵌套（最多2-3层）
# 不推荐
GET /users/123/orders/456/items/789/details
\`\`\`

## HTTP方法语义

| 方法 | 用途 | 幂等性 | 安全性 |
|------|------|--------|--------|
| GET | 获取资源 | 是 | 是 |
| POST | 创建资源 | 否 | 否 |
| PUT | 完整更新 | 是 | 否 |
| PATCH | 部分更新 | 否 | 否 |
| DELETE | 删除资源 | 是 | 否 |

\`\`\`javascript
// Express示例
app.get('/api/users', getUsers)
app.get('/api/users/:id', getUserById)
app.post('/api/users', createUser)
app.put('/api/users/:id', updateUser)
app.patch('/api/users/:id', partialUpdateUser)
app.delete('/api/users/:id', deleteUser)
\`\`\`

## 状态码使用

**2xx 成功**：
- 200 OK：请求成功
- 201 Created：创建成功
- 204 No Content：删除成功

**4xx 客户端错误**：
- 400 Bad Request：请求参数错误
- 401 Unauthorized：未认证
- 403 Forbidden：无权限
- 404 Not Found：资源不存在
- 422 Unprocessable Entity：验证失败

**5xx 服务器错误**：
- 500 Internal Server Error：服务器内部错误
- 503 Service Unavailable：服务暂不可用

## 错误处理

统一的错误响应格式：

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "请求参数验证失败",
    "details": [
      {
        "field": "email",
        "message": "邮箱格式不正确"
      }
    ]
  }
}
\`\`\`

## 分页设计

\`\`\`
GET /api/users?page=2&limit=20
GET /api/users?offset=20&limit=20
\`\`\`

响应格式：
\`\`\`json
{
  "data": [...],
  "pagination": {
    "total": 100,
    "page": 2,
    "limit": 20,
    "totalPages": 5
  }
}
\`\`\`

## 过滤、排序和搜索

\`\`\`
# 过滤
GET /api/users?status=active&role=admin

# 排序
GET /api/users?sort=created_at&order=desc

# 搜索
GET /api/users?search=john
GET /api/users?q=john

# 字段选择
GET /api/users?fields=id,name,email
\`\`\`

## 版本控制

**URL版本**（推荐）：
\`\`\`
GET /api/v1/users
GET /api/v2/users
\`\`\`

**Header版本**：
\`\`\`
GET /api/users
Accept: application/vnd.myapp.v1+json
\`\`\`

## 认证与授权

**使用Bearer Token**：
\`\`\`
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
\`\`\`

**实现示例**：
\`\`\`javascript
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({
      error: { code: 'UNAUTHORIZED', message: '未提供认证令牌' }
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({
      error: { code: 'INVALID_TOKEN', message: '令牌无效或已过期' }
    })
  }
}
\`\`\`

## API文档

使用OpenAPI（Swagger）规范记录API：

\`\`\`yaml
openapi: 3.0.0
info:
  title: 用户API
  version: 1.0.0
paths:
  /users:
    get:
      summary: 获取用户列表
      parameters:
        - name: page
          in: query
          schema:
            type: integer
      responses:
        '200':
          description: 成功
\`\`\`

## 最佳实践总结

1. 使用HTTPS
2. 保持一致性
3. 提供有意义的错误信息
4. 实现速率限制
5. 支持CORS
6. 记录API文档
7. 版本控制从一开始就要考虑

设计API就像设计用户界面，需要站在使用者的角度思考。一个好的API应该是自解释的、一致的、易于使用的。`,
      en: `APIs are the backbone of modern web applications. A well-designed API can improve development efficiency, reduce communication costs, and enhance system maintainability. This article shares core principles and practical experience in RESTful API design.

## REST Core Concepts

REST (Representational State Transfer) is an architectural style with core ideas:

1. **Resources**: Everything is a resource, identified by URIs
2. **Representations**: Concrete forms of resources (JSON, XML, etc.)
3. **State Transfer**: Operating resources through HTTP methods

## Resource Naming Conventions

**Use nouns, avoid verbs**:
\`\`\`
# Good design
GET /users
GET /users/123
POST /users
PUT /users/123
DELETE /users/123

# Bad design
GET /getUsers
POST /createUser
POST /deleteUser/123
\`\`\`

**Use plural forms**:
\`\`\`
# Recommended
GET /users
GET /articles

# Not recommended
GET /user
GET /article
\`\`\`

**Nested resources**:
\`\`\`
# User's orders
GET /users/123/orders
GET /users/123/orders/456

# Avoid deep nesting (max 2-3 levels)
# Not recommended
GET /users/123/orders/456/items/789/details
\`\`\`

## HTTP Method Semantics

| Method | Purpose | Idempotent | Safe |
|--------|---------|------------|------|
| GET | Retrieve resource | Yes | Yes |
| POST | Create resource | No | No |
| PUT | Full update | Yes | No |
| PATCH | Partial update | No | No |
| DELETE | Delete resource | Yes | No |

\`\`\`javascript
// Express example
app.get('/api/users', getUsers)
app.get('/api/users/:id', getUserById)
app.post('/api/users', createUser)
app.put('/api/users/:id', updateUser)
app.patch('/api/users/:id', partialUpdateUser)
app.delete('/api/users/:id', deleteUser)
\`\`\`

## Status Code Usage

**2xx Success**:
- 200 OK: Request successful
- 201 Created: Creation successful
- 204 No Content: Deletion successful

**4xx Client Errors**:
- 400 Bad Request: Invalid parameters
- 401 Unauthorized: Not authenticated
- 403 Forbidden: No permission
- 404 Not Found: Resource doesn't exist
- 422 Unprocessable Entity: Validation failed

**5xx Server Errors**:
- 500 Internal Server Error
- 503 Service Unavailable

## Error Handling

Unified error response format:

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
\`\`\`

## Pagination Design

\`\`\`
GET /api/users?page=2&limit=20
GET /api/users?offset=20&limit=20
\`\`\`

Response format:
\`\`\`json
{
  "data": [...],
  "pagination": {
    "total": 100,
    "page": 2,
    "limit": 20,
    "totalPages": 5
  }
}
\`\`\`

## Filtering, Sorting, and Searching

\`\`\`
# Filtering
GET /api/users?status=active&role=admin

# Sorting
GET /api/users?sort=created_at&order=desc

# Searching
GET /api/users?search=john
GET /api/users?q=john

# Field selection
GET /api/users?fields=id,name,email
\`\`\`

## Version Control

**URL versioning** (recommended):
\`\`\`
GET /api/v1/users
GET /api/v2/users
\`\`\`

**Header versioning**:
\`\`\`
GET /api/users
Accept: application/vnd.myapp.v1+json
\`\`\`

## Authentication and Authorization

**Using Bearer Token**:
\`\`\`
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
\`\`\`

**Implementation example**:
\`\`\`javascript
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({
      error: { code: 'UNAUTHORIZED', message: 'No auth token provided' }
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({
      error: { code: 'INVALID_TOKEN', message: 'Invalid or expired token' }
    })
  }
}
\`\`\`

## API Documentation

Use OpenAPI (Swagger) specification:

\`\`\`yaml
openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users:
    get:
      summary: Get user list
      parameters:
        - name: page
          in: query
          schema:
            type: integer
      responses:
        '200':
          description: Success
\`\`\`

## Best Practices Summary

1. Use HTTPS
2. Maintain consistency
3. Provide meaningful error messages
4. Implement rate limiting
5. Support CORS
6. Document your API
7. Consider versioning from the start

Designing an API is like designing a user interface—you need to think from the user's perspective. A good API should be self-explanatory, consistent, and easy to use.`
    },
    category: {
      zh: '技术分享',
      en: 'Technical Sharing'
    },
    tags: [
      { zh: 'API设计', en: 'API Design' },
      { zh: '后端开发', en: 'Backend' },
      { zh: '最佳实践', en: 'Best Practices' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-11-20',
    readTime: { zh: '11分钟', en: '11 min' },
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    featured: false
  },
  {
    id: 6,
    slug: 'freelance-developer-client-communication',
    title: {
      zh: '独立开发者的客户沟通技巧',
      en: 'Client Communication Skills for Freelance Developers'
    },
    excerpt: {
      zh: '技术过硬只是基础，良好的沟通能力同样重要。分享我在客户沟通中的经验和教训，帮助你建立更好的客户关系。',
      en: 'Strong technical skills are just the foundation; good communication skills are equally important. Sharing my experiences and lessons in client communication to help you build better client relationships.'
    },
    content: {
      zh: `作为独立开发者，我们不仅要写好代码，还要做好客户沟通。事实上，很多项目的成败往往取决于沟通质量而非技术实现。本文分享一些我在客户沟通中积累的经验。

## 初次接触：建立信任

**主动倾听**

客户找到你时，通常带着一个模糊的想法或具体的问题。这时最重要的是倾听：

- 让客户充分表达需求
- 记录关键点和疑问
- 不要急于给出解决方案
- 通过提问深入理解背景

**合理预期管理**

从一开始就设定清晰的预期：

\`\`\`
✓ 这个项目大概需要4-6周
✓ 我每周会提供一次进度报告
✓ 修改需求可能会影响工期和成本
✓ 我的工作时间是周一到周五
\`\`\`

## 需求确认：避免误解

**书面确认**

口头沟通后，一定要书面确认：

\`\`\`markdown
## 项目需求确认

### 功能列表
1. 用户注册/登录系统
2. 商品展示页面（支持分类筛选）
3. 购物车功能
4. 订单管理

### 不包含功能
- 支付接口集成（第二期）
- 移动端APP

### 时间线
- 第1-2周：设计确认和前端框架
- 第3-4周：核心功能开发
- 第5周：测试和修复
- 第6周：部署上线

请确认以上内容。如有疑问，请及时沟通。
\`\`\`

**需求变更处理**

需求变更是常态，关键是如何处理：

1. 评估影响（时间、成本、技术）
2. 书面告知客户
3. 获得确认后再执行
4. 记录所有变更

## 项目执行：保持透明

**定期汇报**

建立固定的沟通节奏：

- 每周发送进度邮件
- 遇到问题及时沟通
- 阶段性成果演示

**进度报告模板**：

\`\`\`markdown
## 周报 - 第2周

### 本周完成
- ✅ 用户注册页面
- ✅ 登录功能
- ✅ 密码找回流程

### 下周计划
- 商品列表页
- 商品详情页
- 分类筛选功能

### 问题与风险
- 第三方API响应较慢，可能影响性能
- 建议：增加缓存机制

### 需要确认
- 商品图片最多支持几张？
- 是否需要商品视频功能？
\`\`\`

## 处理困难对话

**当你需要说"不"时**

有时候，客户的要求不合理或不可行。如何优雅地拒绝：

\`\`\`
❌ "这做不了"
✓ "这个功能技术上可以实现，但会增加2周工期和30%成本。
   我建议先用方案B，它能满足80%的需求，成本更低。
   后续如果确实需要，可以在第二期添加。"
\`\`\`

**当项目出问题时**

问题不可避免，关键是如何应对：

1. 第一时间告知客户
2. 分析原因
3. 提出解决方案
4. 给出新的时间表

\`\`\`
坏消息：我发现了一个技术问题，可能导致延期。

原因：第三方支付接口的文档与实际接口不符。

解决方案：
1. 联系支付平台技术支持（预计1-2天）
2. 如果无法解决，切换到备选支付方案（需3天）

影响：项目可能延期3-5天。

我会每天更新进展。非常抱歉给您带来不便。
\`\`\`

## 项目收尾：好的结束

**交付清单**

项目结束时，提供完整的交付物：

- 源代码（含文档）
- 部署文档
- 账号密码清单
- 操作手册
- 维护建议

**收集反馈**

项目结束后，主动收集反馈：

\`\`\`
感谢您选择与我合作。项目已经顺利上线，希望能对您的业务有所帮助。

如果方便的话，希望您能花2分钟回答几个问题：
1. 您对项目成果满意吗？
2. 沟通过程中有什么可以改进的地方？
3. 您是否愿意推荐我给其他人？

您的反馈对我非常重要，会帮助我提供更好的服务。
\`\`\`

## 长期关系维护

好的客户关系是最宝贵的资产：

- 项目结束后保持联系
- 偶尔分享有价值的信息
- 节日问候
- 主动询问使用情况

## 总结

沟通不是天赋，而是可以学习的技能。记住这些原则：

1. **倾听优先**：理解需求比急于解决更重要
2. **书面确认**：口说无凭，文字为证
3. **保持透明**：好消息坏消息都要及时说
4. **管理预期**：承诺少一点，交付多一点
5. **持续跟进**：项目结束不是关系的结束

好的沟通能力，是独立开发者最重要的软技能之一。`,
      en: `As freelance developers, we need to not only write good code but also communicate well with clients. In fact, many projects succeed or fail based on communication quality rather than technical implementation. This article shares some experiences I've accumulated in client communication.

## Initial Contact: Building Trust

**Active Listening**

When clients approach you, they usually come with a vague idea or specific problem. The most important thing at this stage is to listen:

- Let clients fully express their needs
- Record key points and questions
- Don't rush to provide solutions
- Understand the background through questions

**Reasonable Expectation Management**

Set clear expectations from the beginning:

\`\`\`
✓ This project will take approximately 4-6 weeks
✓ I'll provide weekly progress reports
✓ Requirement changes may affect timeline and cost
✓ My working hours are Monday to Friday
\`\`\`

## Requirement Confirmation: Avoiding Misunderstandings

**Written Confirmation**

After verbal communication, always confirm in writing:

\`\`\`markdown
## Project Requirements Confirmation

### Feature List
1. User registration/login system
2. Product display page (with category filtering)
3. Shopping cart functionality
4. Order management

### Not Included
- Payment integration (Phase 2)
- Mobile APP

### Timeline
- Week 1-2: Design confirmation and frontend framework
- Week 3-4: Core feature development
- Week 5: Testing and fixes
- Week 6: Deployment

Please confirm the above. Contact me with any questions.
\`\`\`

**Handling Requirement Changes**

Requirement changes are normal; the key is how to handle them:

1. Assess impact (time, cost, technical)
2. Notify client in writing
3. Execute only after confirmation
4. Document all changes

## Project Execution: Maintaining Transparency

**Regular Reporting**

Establish a fixed communication rhythm:

- Send weekly progress emails
- Communicate problems promptly
- Demonstrate milestone achievements

**Progress Report Template**:

\`\`\`markdown
## Weekly Report - Week 2

### Completed This Week
- ✅ User registration page
- ✅ Login functionality
- ✅ Password recovery flow

### Next Week's Plan
- Product list page
- Product detail page
- Category filtering

### Issues and Risks
- Third-party API response is slow, may affect performance
- Suggestion: Add caching mechanism

### Needs Confirmation
- Maximum number of product images?
- Need product video feature?
\`\`\`

## Handling Difficult Conversations

**When You Need to Say "No"**

Sometimes client requests are unreasonable or unfeasible. How to decline gracefully:

\`\`\`
❌ "This can't be done"
✓ "This feature is technically possible, but would add 2 weeks
   and 30% to the cost. I suggest Option B first—it meets 80%
   of needs at lower cost. We can add this in Phase 2 if needed."
\`\`\`

**When Projects Have Problems**

Problems are inevitable; the key is how to respond:

1. Notify the client immediately
2. Analyze the cause
3. Propose solutions
4. Provide a new timeline

\`\`\`
Bad news: I discovered a technical issue that may cause delays.

Cause: Third-party payment API documentation doesn't match
the actual interface.

Solutions:
1. Contact payment platform support (estimated 1-2 days)
2. If unresolved, switch to backup payment solution (3 days)

Impact: Project may be delayed 3-5 days.

I'll update you daily. Sorry for the inconvenience.
\`\`\`

## Project Closure: Good Endings

**Delivery Checklist**

When the project ends, provide complete deliverables:

- Source code (with documentation)
- Deployment documentation
- Account/password list
- User manual
- Maintenance recommendations

**Collecting Feedback**

Proactively collect feedback after project completion:

\`\`\`
Thank you for choosing to work with me. The project is live,
and I hope it helps your business.

If convenient, please take 2 minutes to answer:
1. Are you satisfied with the project results?
2. What could be improved in our communication?
3. Would you recommend me to others?

Your feedback is valuable and helps me provide better service.
\`\`\`

## Long-term Relationship Maintenance

Good client relationships are your most valuable asset:

- Stay in touch after projects end
- Occasionally share valuable information
- Holiday greetings
- Proactively ask about usage

## Summary

Communication isn't a talent but a learnable skill. Remember these principles:

1. **Listen First**: Understanding needs is more important than rushing to solve
2. **Written Confirmation**: Verbal agreements need documentation
3. **Stay Transparent**: Share good and bad news promptly
4. **Manage Expectations**: Promise less, deliver more
5. **Follow Up**: Project end isn't relationship end

Good communication skills are one of the most important soft skills for freelance developers.`
    },
    category: {
      zh: '经验分享',
      en: 'Experience Sharing'
    },
    tags: [
      { zh: '独立开发', en: 'Freelancing' },
      { zh: '客户沟通', en: 'Communication' },
      { zh: '职业发展', en: 'Career' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-11-12',
    readTime: { zh: '9分钟', en: '9 min' },
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    featured: false
  },
  {
    id: 7,
    slug: 'web-security-checklist',
    title: {
      zh: 'Web安全检查清单：保护你的应用',
      en: 'Web Security Checklist: Protecting Your Application'
    },
    excerpt: {
      zh: '从XSS、CSRF到SQL注入，Web应用面临各种安全威胁。这份检查清单帮助你系统性地审查和提升应用的安全性。',
      en: 'From XSS and CSRF to SQL injection, web applications face various security threats. This checklist helps you systematically review and improve your application security.'
    },
    content: {
      zh: `Web安全是每个开发者都应该重视的领域。一个安全漏洞可能导致数据泄露、经济损失甚至法律问题。本文提供一份实用的安全检查清单，帮助你构建更安全的Web应用。

## 输入验证

所有用户输入都是不可信的，必须进行验证和清理。

**前端验证**（用户体验）：
\`\`\`javascript
// 基础验证
const validateEmail = (email) => {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)
}

// 使用验证库
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  age: yup.number().positive().integer()
})
\`\`\`

**后端验证**（安全保障）：
\`\`\`javascript
// Express + express-validator
const { body, validationResult } = require('express-validator')

app.post('/api/users',
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    // 处理请求
  }
)
\`\`\`

## XSS防护

跨站脚本攻击（XSS）是最常见的Web攻击之一。

**防护措施**：

1. **输出编码**：
\`\`\`javascript
// React自动处理
<div>{userInput}</div>  // 安全

// 危险操作，避免使用
<div dangerouslySetInnerHTML={{__html: userInput}} />
\`\`\`

2. **Content Security Policy**：
\`\`\`html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'">
\`\`\`

3. **HttpOnly Cookie**：
\`\`\`javascript
res.cookie('token', token, {
  httpOnly: true,
  secure: true,
  sameSite: 'strict'
})
\`\`\`

## CSRF防护

跨站请求伪造（CSRF）利用用户已认证的会话执行未授权操作。

**防护措施**：

\`\`\`javascript
// 使用CSRF Token
const csrf = require('csurf')
app.use(csrf({ cookie: true }))

// 在表单中包含token
<form>
  <input type="hidden" name="_csrf" value={csrfToken}>
</form>

// 验证Origin/Referer头
const validOrigins = ['https://yoursite.com']
app.use((req, res, next) => {
  const origin = req.get('origin')
  if (req.method !== 'GET' && !validOrigins.includes(origin)) {
    return res.status(403).json({ error: 'Invalid origin' })
  }
  next()
})
\`\`\`

## SQL注入防护

永远不要直接拼接SQL语句。

\`\`\`javascript
// 危险！
const query = \`SELECT * FROM users WHERE id = \${userId}\`

// 安全：使用参数化查询
const query = 'SELECT * FROM users WHERE id = ?'
db.query(query, [userId])

// 使用ORM（如Prisma）
const user = await prisma.user.findUnique({
  where: { id: userId }
})
\`\`\`

## 认证安全

**密码存储**：
\`\`\`javascript
const bcrypt = require('bcrypt')

// 存储密码
const hash = await bcrypt.hash(password, 12)

// 验证密码
const match = await bcrypt.compare(password, hash)
\`\`\`

**JWT最佳实践**：
\`\`\`javascript
// 设置合理的过期时间
const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
)

// 使用刷新令牌机制
// 验证时检查令牌是否在黑名单中
\`\`\`

## 安全头配置

\`\`\`javascript
const helmet = require('helmet')
app.use(helmet())

// 或手动配置
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  res.setHeader('Strict-Transport-Security',
    'max-age=31536000; includeSubDomains')
  next()
})
\`\`\`

## 敏感数据保护

**环境变量**：
\`\`\`bash
# .env文件（不要提交到Git）
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
API_KEY=xxx
\`\`\`

**加密敏感数据**：
\`\`\`javascript
const crypto = require('crypto')

function encrypt(text) {
  const cipher = crypto.createCipheriv(
    'aes-256-gcm',
    key,
    iv
  )
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}
\`\`\`

## 安全检查清单

### 基础安全
- [ ] 使用HTTPS
- [ ] 配置安全头（Helmet）
- [ ] 启用CORS白名单
- [ ] 实现速率限制

### 输入处理
- [ ] 验证所有用户输入
- [ ] 清理HTML内容
- [ ] 使用参数化查询
- [ ] 限制文件上传类型和大小

### 认证授权
- [ ] 密码使用bcrypt加密
- [ ] JWT设置合理过期时间
- [ ] 实现账户锁定机制
- [ ] 使用HttpOnly Cookie

### 数据保护
- [ ] 敏感配置使用环境变量
- [ ] 加密存储敏感数据
- [ ] 实现数据备份
- [ ] 记录安全日志

### 依赖安全
- [ ] 定期更新依赖
- [ ] 使用npm audit检查漏洞
- [ ] 锁定依赖版本

## 总结

安全不是一次性的工作，而是持续的过程。养成安全编码的习惯，定期进行安全审计，及时更新依赖，才能真正保护你的应用和用户数据。`,
      en: `Web security is an area every developer should take seriously. A security vulnerability can lead to data breaches, financial losses, or even legal problems. This article provides a practical security checklist to help you build more secure web applications.

## Input Validation

All user input is untrusted and must be validated and sanitized.

**Frontend Validation** (user experience):
\`\`\`javascript
// Basic validation
const validateEmail = (email) => {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)
}

// Using validation library
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  age: yup.number().positive().integer()
})
\`\`\`

**Backend Validation** (security guarantee):
\`\`\`javascript
// Express + express-validator
const { body, validationResult } = require('express-validator')

app.post('/api/users',
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    // Process request
  }
)
\`\`\`

## XSS Protection

Cross-Site Scripting (XSS) is one of the most common web attacks.

**Protection Measures**:

1. **Output Encoding**:
\`\`\`javascript
// React handles automatically
<div>{userInput}</div>  // Safe

// Dangerous, avoid using
<div dangerouslySetInnerHTML={{__html: userInput}} />
\`\`\`

2. **Content Security Policy**:
\`\`\`html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'">
\`\`\`

3. **HttpOnly Cookie**:
\`\`\`javascript
res.cookie('token', token, {
  httpOnly: true,
  secure: true,
  sameSite: 'strict'
})
\`\`\`

## CSRF Protection

Cross-Site Request Forgery exploits authenticated sessions to perform unauthorized actions.

**Protection Measures**:

\`\`\`javascript
// Using CSRF Token
const csrf = require('csurf')
app.use(csrf({ cookie: true }))

// Include token in forms
<form>
  <input type="hidden" name="_csrf" value={csrfToken}>
</form>

// Validate Origin/Referer headers
const validOrigins = ['https://yoursite.com']
app.use((req, res, next) => {
  const origin = req.get('origin')
  if (req.method !== 'GET' && !validOrigins.includes(origin)) {
    return res.status(403).json({ error: 'Invalid origin' })
  }
  next()
})
\`\`\`

## SQL Injection Protection

Never concatenate SQL statements directly.

\`\`\`javascript
// Dangerous!
const query = \`SELECT * FROM users WHERE id = \${userId}\`

// Safe: Use parameterized queries
const query = 'SELECT * FROM users WHERE id = ?'
db.query(query, [userId])

// Using ORM (like Prisma)
const user = await prisma.user.findUnique({
  where: { id: userId }
})
\`\`\`

## Authentication Security

**Password Storage**:
\`\`\`javascript
const bcrypt = require('bcrypt')

// Store password
const hash = await bcrypt.hash(password, 12)

// Verify password
const match = await bcrypt.compare(password, hash)
\`\`\`

**JWT Best Practices**:
\`\`\`javascript
// Set reasonable expiration
const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
)

// Use refresh token mechanism
// Check if token is blacklisted during verification
\`\`\`

## Security Headers Configuration

\`\`\`javascript
const helmet = require('helmet')
app.use(helmet())

// Or configure manually
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  res.setHeader('Strict-Transport-Security',
    'max-age=31536000; includeSubDomains')
  next()
})
\`\`\`

## Sensitive Data Protection

**Environment Variables**:
\`\`\`bash
# .env file (don't commit to Git)
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
API_KEY=xxx
\`\`\`

**Encrypt Sensitive Data**:
\`\`\`javascript
const crypto = require('crypto')

function encrypt(text) {
  const cipher = crypto.createCipheriv(
    'aes-256-gcm',
    key,
    iv
  )
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}
\`\`\`

## Security Checklist

### Basic Security
- [ ] Use HTTPS
- [ ] Configure security headers (Helmet)
- [ ] Enable CORS whitelist
- [ ] Implement rate limiting

### Input Handling
- [ ] Validate all user input
- [ ] Sanitize HTML content
- [ ] Use parameterized queries
- [ ] Limit file upload types and sizes

### Authentication & Authorization
- [ ] Hash passwords with bcrypt
- [ ] Set reasonable JWT expiration
- [ ] Implement account lockout
- [ ] Use HttpOnly Cookies

### Data Protection
- [ ] Use environment variables for sensitive config
- [ ] Encrypt sensitive stored data
- [ ] Implement data backup
- [ ] Log security events

### Dependency Security
- [ ] Regularly update dependencies
- [ ] Use npm audit to check vulnerabilities
- [ ] Lock dependency versions

## Summary

Security is not a one-time task but an ongoing process. Develop secure coding habits, conduct regular security audits, and keep dependencies updated to truly protect your application and user data.`
    },
    category: {
      zh: '技术分享',
      en: 'Technical Sharing'
    },
    tags: [
      { zh: 'Web安全', en: 'Security' },
      { zh: '最佳实践', en: 'Best Practices' },
      { zh: '后端开发', en: 'Backend' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-11-05',
    readTime: { zh: '13分钟', en: '13 min' },
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    featured: false
  },
  {
    id: 8,
    slug: 'responsive-design-patterns',
    title: {
      zh: '响应式设计模式：移动优先的实践',
      en: 'Responsive Design Patterns: Mobile-First in Practice'
    },
    excerpt: {
      zh: '移动设备流量已经超过桌面端，移动优先不再是选项而是必须。分享响应式设计的实用模式和技巧。',
      en: 'Mobile traffic has surpassed desktop; mobile-first is no longer optional but essential. Sharing practical patterns and techniques for responsive design.'
    },
    content: {
      zh: `移动设备已经成为用户访问网站的主要方式。响应式设计不再是加分项，而是必须项。本文分享移动优先的响应式设计模式和实践经验。

## 移动优先的理念

移动优先意味着先为移动设备设计，然后逐步增强到更大屏幕。

**为什么移动优先？**

1. 移动流量占比超过60%
2. 强迫你专注于核心功能
3. 渐进增强优于优雅降级
4. 性能更好（移动端加载更少资源）

## 断点策略

**常用断点**：
\`\`\`css
/* 移动优先的断点 */
/* 默认样式针对移动设备 */

/* 平板 */
@media (min-width: 768px) { }

/* 桌面 */
@media (min-width: 1024px) { }

/* 大屏幕 */
@media (min-width: 1440px) { }
\`\`\`

**CSS变量管理断点**：
\`\`\`css
:root {
  --container-width: 100%;
  --grid-columns: 1;
  --spacing: 1rem;
}

@media (min-width: 768px) {
  :root {
    --container-width: 750px;
    --grid-columns: 2;
    --spacing: 1.5rem;
  }
}

@media (min-width: 1024px) {
  :root {
    --container-width: 1000px;
    --grid-columns: 3;
    --spacing: 2rem;
  }
}
\`\`\`

## 常用响应式模式

### 1. 流式布局

\`\`\`css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.fluid-text {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}

.fluid-spacing {
  padding: clamp(1rem, 5vw, 3rem);
}
\`\`\`

### 2. 列布局转换

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 更简洁的方式 */
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
\`\`\`

### 3. 导航模式

**汉堡菜单**：
\`\`\`css
.nav-links {
  display: none;
}

.nav-toggle {
  display: block;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }

  .nav-toggle {
    display: none;
  }
}
\`\`\`

### 4. 图片响应式

\`\`\`html
<!-- 使用srcset -->
<img
  src="image-800.jpg"
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="响应式图片"
>

<!-- 使用picture元素 -->
<picture>
  <source media="(min-width: 1024px)" srcset="hero-desktop.jpg">
  <source media="(min-width: 768px)" srcset="hero-tablet.jpg">
  <img src="hero-mobile.jpg" alt="Hero image">
</picture>
\`\`\`

\`\`\`css
/* CSS中的响应式图片 */
.hero {
  background-image: url('hero-mobile.jpg');
}

@media (min-width: 768px) {
  .hero {
    background-image: url('hero-desktop.jpg');
  }
}
\`\`\`

### 5. 表格响应式

\`\`\`css
/* 移动端卡片化表格 */
@media (max-width: 768px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }

  thead {
    display: none;
  }

  tr {
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
  }

  td {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
  }

  td::before {
    content: attr(data-label);
    font-weight: bold;
  }
}
\`\`\`

## 触摸友好设计

**点击目标大小**：
\`\`\`css
.touch-target {
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
}

/* 链接和按钮间距 */
.nav-links a {
  padding: 12px 16px;
}
\`\`\`

**避免hover依赖**：
\`\`\`css
/* 不要只依赖hover */
.card {
  transition: transform 0.3s;
}

/* 触摸设备使用active状态 */
.card:hover,
.card:active {
  transform: translateY(-5px);
}

/* 检测触摸设备 */
@media (hover: none) {
  .tooltip {
    display: none;
  }
}
\`\`\`

## 性能优化

**条件加载**：
\`\`\`html
<!-- 仅在大屏幕加载 -->
<link
  rel="stylesheet"
  href="desktop.css"
  media="(min-width: 1024px)"
>
\`\`\`

**延迟加载非关键资源**：
\`\`\`html
<img loading="lazy" src="image.jpg" alt="...">

<iframe loading="lazy" src="video.html"></iframe>
\`\`\`

## 测试策略

1. **真实设备测试**：模拟器不能替代真实设备
2. **Chrome DevTools**：设备模式和网络限速
3. **跨浏览器测试**：Safari、Chrome、Firefox
4. **可访问性测试**：屏幕阅读器、键盘导航

## 常见错误

1. **固定宽度元素**：避免使用固定像素宽度
2. **文字过小**：移动端最小16px
3. **触摸目标过小**：最小44x44像素
4. **忽略横屏**：测试横竖屏切换
5. **过度依赖JavaScript**：CSS优先

## 实用工具

- **浏览器开发者工具**：响应式设计模式
- **BrowserStack**：跨设备测试
- **Responsively App**：同时预览多个尺寸
- **Lighthouse**：性能和可访问性审计

## 总结

响应式设计的核心是**内容优先，适应变化**。记住这些原则：

1. 移动优先，渐进增强
2. 使用相对单位和弹性布局
3. 测试真实设备
4. 关注性能
5. 保持简洁

好的响应式设计让用户在任何设备上都能获得优秀的体验。`,
      en: `Mobile devices have become the primary way users access websites. Responsive design is no longer a nice-to-have but a must-have. This article shares mobile-first responsive design patterns and practical experience.

## The Mobile-First Philosophy

Mobile-first means designing for mobile devices first, then progressively enhancing for larger screens.

**Why Mobile-First?**

1. Mobile traffic exceeds 60%
2. Forces focus on core functionality
3. Progressive enhancement over graceful degradation
4. Better performance (mobile loads fewer resources)

## Breakpoint Strategy

**Common Breakpoints**:
\`\`\`css
/* Mobile-first breakpoints */
/* Default styles for mobile */

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large screens */
@media (min-width: 1440px) { }
\`\`\`

**Managing Breakpoints with CSS Variables**:
\`\`\`css
:root {
  --container-width: 100%;
  --grid-columns: 1;
  --spacing: 1rem;
}

@media (min-width: 768px) {
  :root {
    --container-width: 750px;
    --grid-columns: 2;
    --spacing: 1.5rem;
  }
}

@media (min-width: 1024px) {
  :root {
    --container-width: 1000px;
    --grid-columns: 3;
    --spacing: 2rem;
  }
}
\`\`\`

## Common Responsive Patterns

### 1. Fluid Layout

\`\`\`css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.fluid-text {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}

.fluid-spacing {
  padding: clamp(1rem, 5vw, 3rem);
}
\`\`\`

### 2. Column Layout Transformation

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Cleaner approach */
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
\`\`\`

### 3. Navigation Patterns

**Hamburger Menu**:
\`\`\`css
.nav-links {
  display: none;
}

.nav-toggle {
  display: block;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }

  .nav-toggle {
    display: none;
  }
}
\`\`\`

### 4. Responsive Images

\`\`\`html
<!-- Using srcset -->
<img
  src="image-800.jpg"
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Responsive image"
>

<!-- Using picture element -->
<picture>
  <source media="(min-width: 1024px)" srcset="hero-desktop.jpg">
  <source media="(min-width: 768px)" srcset="hero-tablet.jpg">
  <img src="hero-mobile.jpg" alt="Hero image">
</picture>
\`\`\`

### 5. Responsive Tables

\`\`\`css
/* Mobile card-style tables */
@media (max-width: 768px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }

  thead {
    display: none;
  }

  tr {
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
  }

  td {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
  }

  td::before {
    content: attr(data-label);
    font-weight: bold;
  }
}
\`\`\`

## Touch-Friendly Design

**Touch Target Size**:
\`\`\`css
.touch-target {
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
}

/* Link and button spacing */
.nav-links a {
  padding: 12px 16px;
}
\`\`\`

**Avoid Hover Dependency**:
\`\`\`css
/* Don't rely only on hover */
.card {
  transition: transform 0.3s;
}

/* Use active state for touch devices */
.card:hover,
.card:active {
  transform: translateY(-5px);
}

/* Detect touch devices */
@media (hover: none) {
  .tooltip {
    display: none;
  }
}
\`\`\`

## Performance Optimization

**Conditional Loading**:
\`\`\`html
<!-- Only load on large screens -->
<link
  rel="stylesheet"
  href="desktop.css"
  media="(min-width: 1024px)"
>
\`\`\`

**Lazy Loading Non-Critical Resources**:
\`\`\`html
<img loading="lazy" src="image.jpg" alt="...">

<iframe loading="lazy" src="video.html"></iframe>
\`\`\`

## Testing Strategy

1. **Real Device Testing**: Simulators can't replace real devices
2. **Chrome DevTools**: Device mode and network throttling
3. **Cross-Browser Testing**: Safari, Chrome, Firefox
4. **Accessibility Testing**: Screen readers, keyboard navigation

## Common Mistakes

1. **Fixed Width Elements**: Avoid fixed pixel widths
2. **Text Too Small**: Minimum 16px on mobile
3. **Touch Targets Too Small**: Minimum 44x44 pixels
4. **Ignoring Landscape**: Test orientation changes
5. **Over-Reliance on JavaScript**: CSS first

## Useful Tools

- **Browser DevTools**: Responsive design mode
- **BrowserStack**: Cross-device testing
- **Responsively App**: Preview multiple sizes simultaneously
- **Lighthouse**: Performance and accessibility audits

## Summary

The core of responsive design is **content first, adapt to change**. Remember these principles:

1. Mobile-first, progressive enhancement
2. Use relative units and flexible layouts
3. Test on real devices
4. Focus on performance
5. Keep it simple

Good responsive design ensures users have an excellent experience on any device.`
    },
    category: {
      zh: '设计思考',
      en: 'Design Thinking'
    },
    tags: [
      { zh: '响应式设计', en: 'Responsive Design' },
      { zh: '移动优先', en: 'Mobile-First' },
      { zh: '前端开发', en: 'Frontend' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-10-28',
    readTime: { zh: '10分钟', en: '10 min' },
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    featured: false
  }
]

// 获取所有分类
export const categories = [
  { value: 'all', label: { zh: '全部', en: 'All' } },
  { value: 'technical', label: { zh: '技术分享', en: 'Technical Sharing' } },
  { value: 'design', label: { zh: '设计思考', en: 'Design Thinking' } },
  { value: 'experience', label: { zh: '经验分享', en: 'Experience Sharing' } }
]

// 根据slug获取文章
export const getBlogBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug)
}

// 获取精选文章
export const getFeaturedPosts = (limit = 3) => {
  return blogPosts.filter(post => post.featured).slice(0, limit)
}

// 获取最新文章
export const getLatestPosts = (limit = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}

// 按分类筛选文章
export const getPostsByCategory = (category) => {
  if (category === 'all') return blogPosts

  return blogPosts.filter(post => {
    const postCategory = post.category.en.toLowerCase().replace(' ', '-')
    return postCategory === category.replace('technical', 'technical-sharing')
      .replace('design', 'design-thinking')
      .replace('experience', 'experience-sharing')
  })
}

// 获取相关文章（基于分类和标签）
export const getRelatedPosts = (currentPost, limit = 3) => {
  return blogPosts
    .filter(post =>
      post.id !== currentPost.id &&
      (post.category.en === currentPost.category.en ||
       post.tags.some(tag =>
         currentPost.tags.some(t => t.en === tag.en)
       ))
    )
    .slice(0, limit)
}
