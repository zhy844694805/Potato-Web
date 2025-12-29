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
    thumbnail: '/images/blog/react-perf.jpg',
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
    thumbnail: '/images/blog/fullstack.jpg',
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
    thumbnail: '/images/blog/accessibility.jpg',
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
    thumbnail: '/images/blog/api-design.jpg',
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
    thumbnail: '/images/blog/devops.jpg',
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
    thumbnail: '/images/blog/client-comm.jpg',
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
    thumbnail: '/images/blog/mobile-first.jpg',
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
    thumbnail: '/images/blog/pwa.jpg',
    featured: false
  },
  {
    id: 9,
    slug: 'restaurant-digital-transformation',
    title: {
      zh: '客户案例：餐饮行业数字化转型实战',
      en: 'Case Study: Digital Transformation in the Restaurant Industry'
    },
    excerpt: {
      zh: '分享为意大利华人餐厅打造数字化解决方案的完整过程，从需求分析到上线运营，包括在线订餐、会员系统和数据分析。',
      en: 'Sharing the complete process of building digital solutions for Italian Chinese restaurants, from requirements analysis to deployment, including online ordering, membership systems and analytics.'
    },
    content: {
      zh: `在与多家意大利华人餐厅合作的过程中，我总结了一套完整的餐饮行业数字化转型方案。本文将分享这个实战案例，希望对同行业的朋友有所帮助。

## 客户背景

我们的客户是米兰的一家中高端日料餐厅，经营了5年，有稳定的客源但面临以下挑战：

1. **依赖电话订餐**：高峰期经常漏单
2. **客户管理混乱**：无法追踪回头客
3. **营销手段单一**：只能靠口碑和传单
4. **数据缺失**：不知道哪些菜品受欢迎

## 解决方案设计

### 1. 在线订餐系统

我们开发了一个多端点餐系统：

**功能特点**：
- 实时菜单管理（可临时下架售罄菜品）
- 预约订座 + 外卖点餐
- 多语言支持（意大利语/中文/英语）
- 自动打印小票到厨房

**技术栈**：
- 前端：React + PWA（可添加到手机主屏幕）
- 后端：Node.js + MongoDB
- 支付：Stripe + 微信支付

### 2. 会员管理系统

**核心功能**：
- 积分累计和兑换
- 生日特权和专属优惠
- 消费历史记录
- 微信小程序绑定

**实现效果**：
- 会员复购率提升40%
- 平均客单价提升15%

### 3. 数据分析面板

为老板提供了一个简洁的管理后台：

\`\`\`
每日营收概览
├── 堂食 vs 外卖占比
├── 热门菜品排行
├── 高峰时段分析
└── 会员消费占比
\`\`\`

## 实施过程

### 第一阶段：需求调研（1周）

- 与老板和员工深度访谈
- 观察实际运营流程
- 分析现有痛点
- 制定优先级

### 第二阶段：MVP开发（4周）

先上线核心功能：
1. 在线菜单展示
2. 基础订餐功能
3. 微信通知推送

### 第三阶段：迭代优化（持续）

根据实际使用反馈不断优化：
- 简化下单流程（从5步减少到3步）
- 添加常用订单功能
- 优化移动端体验

## 成果数据

上线6个月后的数据对比：

| 指标 | 上线前 | 上线后 | 提升 |
|------|--------|--------|------|
| 月订单量 | 800 | 1200 | +50% |
| 平均客单价 | €35 | €42 | +20% |
| 回头客比例 | 30% | 55% | +83% |
| 运营人力 | 3人 | 2人 | -33% |

## 经验总结

### 做对的事情

1. **从简单开始**：先满足最核心的需求
2. **持续沟通**：每周与客户同步进度
3. **数据驱动**：用数据说服客户接受改变

### 踩过的坑

1. **功能过度设计**：最初设计了太多用不上的功能
2. **忽视培训**：员工一开始不会用，差点放弃
3. **支付对接复杂**：欧洲支付系统比想象中复杂

## 给同行的建议

如果你也在做餐饮行业的数字化项目，记住：

1. **理解业务比技术更重要**
2. **简单可用比功能齐全更重要**
3. **后续支持比一次性交付更重要**

数字化不是目的，帮助餐厅赚更多钱才是目的。`,
      en: `Through working with multiple Italian Chinese restaurants, I've developed a complete digital transformation framework for the restaurant industry. This article shares a practical case study that may help others in the same industry.

## Client Background

Our client was a mid-to-high-end Japanese restaurant in Milan, operating for 5 years with stable customers but facing these challenges:

1. **Phone-dependent ordering**: Frequent missed orders during peak hours
2. **Chaotic customer management**: Unable to track repeat customers
3. **Limited marketing**: Only word-of-mouth and flyers
4. **Data gaps**: No insight into popular dishes

## Solution Design

### 1. Online Ordering System

We developed a multi-channel ordering system:

**Key Features**:
- Real-time menu management (can temporarily remove sold-out items)
- Reservation + takeaway ordering
- Multi-language support (Italian/Chinese/English)
- Auto-print tickets to kitchen

**Tech Stack**:
- Frontend: React + PWA (installable on phone home screen)
- Backend: Node.js + MongoDB
- Payments: Stripe + WeChat Pay

### 2. Membership Management System

**Core Features**:
- Points accumulation and redemption
- Birthday perks and exclusive offers
- Purchase history
- WeChat mini-program integration

**Results**:
- Member repeat purchase rate increased 40%
- Average order value increased 15%

### 3. Analytics Dashboard

A clean admin panel for the owner:

\`\`\`
Daily Revenue Overview
├── Dine-in vs Takeaway ratio
├── Popular dishes ranking
├── Peak hours analysis
└── Member spending ratio
\`\`\`

## Implementation Process

### Phase 1: Requirements Research (1 week)

- In-depth interviews with owner and staff
- Observe actual operations
- Analyze pain points
- Prioritize requirements

### Phase 2: MVP Development (4 weeks)

Launch core features first:
1. Online menu display
2. Basic ordering function
3. WeChat notification push

### Phase 3: Iteration (Ongoing)

Continuous optimization based on feedback:
- Simplified checkout (from 5 steps to 3)
- Added favorite orders feature
- Optimized mobile experience

## Results

Data comparison after 6 months:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Monthly orders | 800 | 1200 | +50% |
| Avg order value | €35 | €42 | +20% |
| Repeat customers | 30% | 55% | +83% |
| Staff needed | 3 | 2 | -33% |

## Lessons Learned

### What We Did Right

1. **Start simple**: Meet core needs first
2. **Communicate constantly**: Weekly syncs with client
3. **Data-driven**: Use data to convince clients to change

### Mistakes Made

1. **Over-designing**: Initially designed too many unused features
2. **Neglecting training**: Staff almost gave up at first
3. **Payment complexity**: European payment systems are complex

## Advice for Others

If you're working on restaurant digitalization projects:

1. **Understanding the business matters more than tech**
2. **Simple and usable beats feature-complete**
3. **Ongoing support beats one-time delivery**

Digitalization isn't the goal—helping restaurants make more money is.`
    },
    category: {
      zh: '经验分享',
      en: 'Experience Sharing'
    },
    tags: [
      { zh: '案例分析', en: 'Case Study' },
      { zh: '餐饮行业', en: 'Restaurant' },
      { zh: '数字化转型', en: 'Digital Transformation' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-11-15',
    readTime: { zh: '12分钟', en: '12 min' },
    thumbnail: '/images/blog/react.jpg',
    featured: true
  },
  {
    id: 10,
    slug: 'seo-guide-italian-market',
    title: {
      zh: 'SEO实战指南：意大利本地市场优化策略',
      en: 'SEO Practical Guide: Optimization Strategies for the Italian Market'
    },
    excerpt: {
      zh: '针对意大利本地市场的SEO优化完整指南，包括Google.it排名因素、本地商家优化、多语言SEO策略和实用工具推荐。',
      en: 'Complete SEO optimization guide for the Italian market, including Google.it ranking factors, local business optimization, multilingual SEO strategies and tool recommendations.'
    },
    content: {
      zh: `在意大利做生意，尤其是面向本地客户的华人企业，SEO（搜索引擎优化）是获取稳定客源的关键渠道。本文分享我在意大利市场积累的SEO实战经验。

## 意大利SEO市场特点

### 搜索引擎份额

在意大利，Google占据约95%的搜索市场。因此，我们的SEO策略主要针对Google.it。

### 用户搜索习惯

意大利用户的搜索特点：
- 倾向使用意大利语搜索
- 本地搜索（"附近的..."）占比高
- 移动搜索超过60%
- Google Maps整合搜索很常见

## 核心优化策略

### 1. Google Business Profile（原Google My Business）

这是本地SEO的基础，必须完善：

**必填信息**：
- 准确的营业地址（与门店一致）
- 营业时间（包括节假日）
- 联系电话（意大利本地号码）
- 网站链接
- 服务/产品类别

**提升排名的技巧**：
- 每周发布更新（新菜品、活动等）
- 积极回复每一条评价
- 上传高质量照片（每月至少5张）
- 完善Q&A部分

### 2. 网站技术优化

\`\`\`html
<!-- 关键的meta标签 -->
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="意大利语描述，150字符内">
  <link rel="alternate" hreflang="it" href="https://example.it/">
  <link rel="alternate" hreflang="zh" href="https://example.it/zh/">
  <link rel="alternate" hreflang="en" href="https://example.it/en/">
</head>
\`\`\`

**核心技术指标**：
- Core Web Vitals达标
- 移动端友好
- HTTPS加密
- 页面加载速度<3秒

### 3. 内容策略

**关键词研究工具**：
- Google Keyword Planner（免费）
- SEMrush（付费，支持意大利语）
- Ubersuggest（部分免费）

**本地化关键词示例**：
\`\`\`
ristorante cinese milano        → 米兰中餐厅
sushi all you can eat torino   → 都灵自助寿司
massaggio cinese roma          → 罗马中式按摩
\`\`\`

### 4. 结构化数据

为本地商家添加Schema标记：

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "餐厅名称",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Example 123",
    "addressLocality": "Milano",
    "postalCode": "20100",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.4642,
    "longitude": 9.1900
  },
  "openingHours": "Mo-Su 11:30-23:00",
  "servesCuisine": "Chinese",
  "priceRange": "€€"
}
\`\`\`

## 多语言SEO策略

### hreflang标签配置

\`\`\`html
<link rel="alternate" hreflang="it" href="https://example.it/">
<link rel="alternate" hreflang="zh-Hans" href="https://example.it/zh/">
<link rel="alternate" hreflang="en" href="https://example.it/en/">
<link rel="alternate" hreflang="x-default" href="https://example.it/">
\`\`\`

### URL结构建议

推荐使用子目录结构：
- example.it/（意大利语，默认）
- example.it/zh/（中文）
- example.it/en/（英语）

## 实用工具推荐

| 工具 | 用途 | 价格 |
|------|------|------|
| Google Search Console | 监控搜索表现 | 免费 |
| Google Analytics 4 | 流量分析 | 免费 |
| Screaming Frog | 网站技术审计 | 免费/付费 |
| Ahrefs | 外链分析 | 付费 |

## 常见错误

1. **只做中文内容**：意大利客户搜不到
2. **忽视移动端**：超过60%流量来自手机
3. **不回复评价**：影响排名和转化
4. **关键词堆砌**：Google会惩罚
5. **买外链**：短期有效，长期有风险

## 效果评估

合理的SEO预期：
- 1-3个月：技术问题修复，开始收录
- 3-6个月：核心关键词排名提升
- 6-12个月：稳定流量增长

记住：SEO是长期投资，不是一次性工作。`,
      en: `For businesses in Italy, especially Chinese enterprises serving local customers, SEO is a crucial channel for acquiring stable customers. This article shares my practical SEO experience in the Italian market.

## Italian SEO Market Characteristics

### Search Engine Market Share

In Italy, Google holds about 95% of the search market. Therefore, our SEO strategy mainly targets Google.it.

### User Search Behavior

Italian users' search characteristics:
- Prefer searching in Italian
- High proportion of local searches ("near me...")
- Mobile searches exceed 60%
- Google Maps integrated search is common

## Core Optimization Strategies

### 1. Google Business Profile

This is the foundation of local SEO and must be complete:

**Required Information**:
- Accurate business address (matching storefront)
- Business hours (including holidays)
- Contact phone (Italian local number)
- Website link
- Service/product categories

**Ranking Improvement Tips**:
- Post updates weekly (new dishes, events, etc.)
- Actively respond to every review
- Upload high-quality photos (at least 5 per month)
- Complete the Q&A section

### 2. Technical Website Optimization

\`\`\`html
<!-- Key meta tags -->
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Italian description, under 150 chars">
  <link rel="alternate" hreflang="it" href="https://example.it/">
  <link rel="alternate" hreflang="zh" href="https://example.it/zh/">
  <link rel="alternate" hreflang="en" href="https://example.it/en/">
</head>
\`\`\`

**Core Technical Metrics**:
- Core Web Vitals compliant
- Mobile-friendly
- HTTPS encrypted
- Page load speed <3 seconds

### 3. Content Strategy

**Keyword Research Tools**:
- Google Keyword Planner (free)
- SEMrush (paid, supports Italian)
- Ubersuggest (partially free)

**Localized Keyword Examples**:
\`\`\`
ristorante cinese milano        → Chinese restaurant Milan
sushi all you can eat torino   → All-you-can-eat sushi Turin
massaggio cinese roma          → Chinese massage Rome
\`\`\`

### 4. Structured Data

Add Schema markup for local businesses:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Restaurant Name",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Example 123",
    "addressLocality": "Milano",
    "postalCode": "20100",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.4642,
    "longitude": 9.1900
  },
  "openingHours": "Mo-Su 11:30-23:00",
  "servesCuisine": "Chinese",
  "priceRange": "€€"
}
\`\`\`

## Multilingual SEO Strategy

### hreflang Tag Configuration

\`\`\`html
<link rel="alternate" hreflang="it" href="https://example.it/">
<link rel="alternate" hreflang="zh-Hans" href="https://example.it/zh/">
<link rel="alternate" hreflang="en" href="https://example.it/en/">
<link rel="alternate" hreflang="x-default" href="https://example.it/">
\`\`\`

### Recommended URL Structure

Use subdirectory structure:
- example.it/ (Italian, default)
- example.it/zh/ (Chinese)
- example.it/en/ (English)

## Recommended Tools

| Tool | Purpose | Price |
|------|---------|-------|
| Google Search Console | Monitor search performance | Free |
| Google Analytics 4 | Traffic analysis | Free |
| Screaming Frog | Technical site audit | Free/Paid |
| Ahrefs | Backlink analysis | Paid |

## Common Mistakes

1. **Chinese-only content**: Italian customers can't find you
2. **Ignoring mobile**: Over 60% traffic from phones
3. **Not responding to reviews**: Affects ranking and conversion
4. **Keyword stuffing**: Google will penalize
5. **Buying backlinks**: Short-term gain, long-term risk

## Performance Evaluation

Reasonable SEO expectations:
- 1-3 months: Technical fixes, indexing begins
- 3-6 months: Core keyword rankings improve
- 6-12 months: Stable traffic growth

Remember: SEO is a long-term investment, not a one-time job.`
    },
    category: {
      zh: '技术分享',
      en: 'Technical Sharing'
    },
    tags: [
      { zh: 'SEO', en: 'SEO' },
      { zh: '本地化', en: 'Localization' },
      { zh: '意大利市场', en: 'Italian Market' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-11-20',
    readTime: { zh: '15分钟', en: '15 min' },
    thumbnail: '/images/blog/api.jpg',
    featured: false
  },
  {
    id: 11,
    slug: 'wechat-miniprogram-guide',
    title: {
      zh: '微信小程序开发入门：从零到上线',
      en: 'WeChat Mini Program Development: From Zero to Launch'
    },
    excerpt: {
      zh: '面向海外华人商家的微信小程序开发完整指南，涵盖开发环境搭建、核心API使用、支付集成和审核上线全流程。',
      en: 'Complete WeChat Mini Program development guide for overseas Chinese businesses, covering environment setup, core APIs, payment integration, and review process.'
    },
    content: {
      zh: `微信小程序是连接海外华人社区的重要工具。很多意大利的华人商家希望通过小程序服务客户，但不知道从何开始。本文将带你从零开始，一步步开发并上线一个小程序。

## 为什么选择小程序？

对于海外华人商家，小程序有独特优势：

1. **触达华人客户**：微信是海外华人主要社交工具
2. **无需下载**：扫码即用，降低使用门槛
3. **支付便捷**：直接对接微信支付
4. **社交传播**：可分享到朋友圈和群聊

## 开发环境准备

### 1. 注册小程序账号

访问 mp.weixin.qq.com 注册：
- 个人号：功能有限，不能用微信支付
- 企业号：需要营业执照，功能完整

**海外商家注意**：可以使用香港或国内公司主体注册。

### 2. 安装开发工具

下载微信开发者工具：
\`\`\`bash
# 支持 Windows / macOS / Linux
https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
\`\`\`

### 3. 项目结构

\`\`\`
miniprogram/
├── pages/                 # 页面文件
│   ├── index/
│   │   ├── index.js      # 页面逻辑
│   │   ├── index.wxml    # 页面结构（类似HTML）
│   │   ├── index.wxss    # 页面样式（类似CSS）
│   │   └── index.json    # 页面配置
│   └── ...
├── components/           # 自定义组件
├── utils/               # 工具函数
├── app.js               # 全局逻辑
├── app.json             # 全局配置
├── app.wxss             # 全局样式
└── project.config.json  # 项目配置
\`\`\`

## 核心概念

### WXML - 页面结构

类似HTML，但使用微信自定义标签：

\`\`\`xml
<view class="container">
  <text>{{message}}</text>
  <button bindtap="handleClick">点击我</button>
  <view wx:for="{{list}}" wx:key="id">
    {{item.name}}
  </view>
</view>
\`\`\`

### 数据绑定

\`\`\`javascript
Page({
  data: {
    message: 'Hello Mini Program',
    list: [
      { id: 1, name: '商品1' },
      { id: 2, name: '商品2' }
    ]
  },
  handleClick() {
    this.setData({
      message: '你点击了按钮'
    })
  }
})
\`\`\`

### 常用API

\`\`\`javascript
// 网络请求
wx.request({
  url: 'https://api.example.com/data',
  method: 'GET',
  success(res) {
    console.log(res.data)
  }
})

// 本地存储
wx.setStorageSync('key', 'value')
const value = wx.getStorageSync('key')

// 显示提示
wx.showToast({
  title: '操作成功',
  icon: 'success'
})

// 页面跳转
wx.navigateTo({
  url: '/pages/detail/detail?id=123'
})
\`\`\`

## 微信支付集成

### 支付流程

\`\`\`
用户点击支付
    ↓
前端调用后端接口
    ↓
后端调用微信统一下单API
    ↓
返回支付参数给前端
    ↓
前端调用wx.requestPayment
    ↓
微信支付弹窗
    ↓
支付成功/失败回调
\`\`\`

### 前端代码示例

\`\`\`javascript
async pay(orderId) {
  // 1. 调用后端获取支付参数
  const { data } = await wx.request({
    url: 'https://api.example.com/pay',
    method: 'POST',
    data: { orderId }
  })

  // 2. 调起微信支付
  wx.requestPayment({
    timeStamp: data.timeStamp,
    nonceStr: data.nonceStr,
    package: data.package,
    signType: 'RSA',
    paySign: data.paySign,
    success() {
      wx.showToast({ title: '支付成功' })
    },
    fail() {
      wx.showToast({ title: '支付取消', icon: 'none' })
    }
  })
}
\`\`\`

## 实用技巧

### 1. 分包加载

小程序有2MB大小限制，使用分包可扩展到20MB：

\`\`\`json
{
  "pages": ["pages/index/index"],
  "subpackages": [
    {
      "root": "packageA",
      "pages": ["pages/detail/detail"]
    }
  ]
}
\`\`\`

### 2. 自定义组件

\`\`\`javascript
// components/card/card.js
Component({
  properties: {
    title: String,
    price: Number
  },
  methods: {
    onTap() {
      this.triggerEvent('click', { id: this.data.id })
    }
  }
})
\`\`\`

### 3. 云开发

微信云开发可以省去后端服务器：

\`\`\`javascript
// 初始化云开发
wx.cloud.init({
  env: 'your-env-id'
})

// 调用云函数
wx.cloud.callFunction({
  name: 'getOrders',
  data: { userId: '123' }
})

// 操作数据库
const db = wx.cloud.database()
db.collection('orders').add({
  data: { product: '商品A', price: 99 }
})
\`\`\`

## 审核上线

### 审核注意事项

1. **内容合规**：不能涉及敏感内容
2. **类目匹配**：选择正确的服务类目
3. **功能完整**：所有按钮都要有响应
4. **隐私协议**：收集用户信息需要授权

### 常见被拒原因

- 页面存在空白或加载失败
- 涉及需要资质的行业（如食品、医疗）
- 诱导分享或关注
- 小程序名称与功能不符

## 总结

小程序开发并不难，关键是：

1. 熟悉官方文档
2. 从简单功能开始
3. 善用云开发降低成本
4. 注意审核规范

祝你的小程序早日上线！`,
      en: `WeChat Mini Programs are an important tool for connecting with overseas Chinese communities. Many Chinese businesses in Italy want to serve customers through mini programs but don't know where to start. This article will guide you from zero to launching a mini program.

## Why Choose Mini Programs?

For overseas Chinese businesses, mini programs have unique advantages:

1. **Reach Chinese customers**: WeChat is the main social tool for overseas Chinese
2. **No download needed**: Scan to use, lower barrier
3. **Easy payments**: Direct WeChat Pay integration
4. **Social sharing**: Can share to Moments and group chats

## Development Environment Setup

### 1. Register Mini Program Account

Visit mp.weixin.qq.com to register:
- Personal account: Limited features, no WeChat Pay
- Business account: Requires business license, full features

**Note for overseas businesses**: You can register using a Hong Kong or mainland China company entity.

### 2. Install Development Tools

Download WeChat DevTools:
\`\`\`bash
# Supports Windows / macOS / Linux
https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
\`\`\`

### 3. Project Structure

\`\`\`
miniprogram/
├── pages/                 # Page files
│   ├── index/
│   │   ├── index.js      # Page logic
│   │   ├── index.wxml    # Page structure (like HTML)
│   │   ├── index.wxss    # Page styles (like CSS)
│   │   └── index.json    # Page config
│   └── ...
├── components/           # Custom components
├── utils/               # Utility functions
├── app.js               # Global logic
├── app.json             # Global config
├── app.wxss             # Global styles
└── project.config.json  # Project config
\`\`\`

## Core Concepts

### WXML - Page Structure

Similar to HTML but with WeChat custom tags:

\`\`\`xml
<view class="container">
  <text>{{message}}</text>
  <button bindtap="handleClick">Click Me</button>
  <view wx:for="{{list}}" wx:key="id">
    {{item.name}}
  </view>
</view>
\`\`\`

### Data Binding

\`\`\`javascript
Page({
  data: {
    message: 'Hello Mini Program',
    list: [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' }
    ]
  },
  handleClick() {
    this.setData({
      message: 'You clicked the button'
    })
  }
})
\`\`\`

### Common APIs

\`\`\`javascript
// Network request
wx.request({
  url: 'https://api.example.com/data',
  method: 'GET',
  success(res) {
    console.log(res.data)
  }
})

// Local storage
wx.setStorageSync('key', 'value')
const value = wx.getStorageSync('key')

// Show toast
wx.showToast({
  title: 'Success',
  icon: 'success'
})

// Page navigation
wx.navigateTo({
  url: '/pages/detail/detail?id=123'
})
\`\`\`

## WeChat Pay Integration

### Payment Flow

\`\`\`
User clicks pay
    ↓
Frontend calls backend API
    ↓
Backend calls WeChat unified order API
    ↓
Returns payment params to frontend
    ↓
Frontend calls wx.requestPayment
    ↓
WeChat payment popup
    ↓
Success/failure callback
\`\`\`

### Frontend Code Example

\`\`\`javascript
async pay(orderId) {
  // 1. Get payment params from backend
  const { data } = await wx.request({
    url: 'https://api.example.com/pay',
    method: 'POST',
    data: { orderId }
  })

  // 2. Invoke WeChat Pay
  wx.requestPayment({
    timeStamp: data.timeStamp,
    nonceStr: data.nonceStr,
    package: data.package,
    signType: 'RSA',
    paySign: data.paySign,
    success() {
      wx.showToast({ title: 'Payment successful' })
    },
    fail() {
      wx.showToast({ title: 'Payment cancelled', icon: 'none' })
    }
  })
}
\`\`\`

## Practical Tips

### 1. Subpackage Loading

Mini programs have a 2MB limit, subpackages extend to 20MB:

\`\`\`json
{
  "pages": ["pages/index/index"],
  "subpackages": [
    {
      "root": "packageA",
      "pages": ["pages/detail/detail"]
    }
  ]
}
\`\`\`

### 2. Custom Components

\`\`\`javascript
// components/card/card.js
Component({
  properties: {
    title: String,
    price: Number
  },
  methods: {
    onTap() {
      this.triggerEvent('click', { id: this.data.id })
    }
  }
})
\`\`\`

### 3. Cloud Development

WeChat Cloud Development eliminates the need for backend servers:

\`\`\`javascript
// Initialize cloud
wx.cloud.init({
  env: 'your-env-id'
})

// Call cloud function
wx.cloud.callFunction({
  name: 'getOrders',
  data: { userId: '123' }
})

// Database operations
const db = wx.cloud.database()
db.collection('orders').add({
  data: { product: 'Product A', price: 99 }
})
\`\`\`

## Review and Launch

### Review Considerations

1. **Content compliance**: No sensitive content
2. **Category match**: Choose correct service category
3. **Complete functionality**: All buttons must respond
4. **Privacy policy**: User info collection needs authorization

### Common Rejection Reasons

- Blank pages or loading failures
- Industries requiring qualifications (food, medical)
- Incentivized sharing or following
- Name doesn't match functionality

## Summary

Mini program development isn't hard. The keys are:

1. Familiarize with official documentation
2. Start with simple features
3. Use cloud development to reduce costs
4. Follow review guidelines

Good luck with your mini program launch!`
    },
    category: {
      zh: '技术分享',
      en: 'Technical Sharing'
    },
    tags: [
      { zh: '微信小程序', en: 'WeChat Mini Program' },
      { zh: '移动开发', en: 'Mobile Development' },
      { zh: '教程', en: 'Tutorial' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-12-01',
    readTime: { zh: '18分钟', en: '18 min' },
    thumbnail: '/images/blog/fullstack.jpg',
    featured: true
  },
  {
    id: 12,
    slug: 'ecommerce-performance-optimization',
    title: {
      zh: '电商网站性能优化：提升转化率的技术方案',
      en: 'E-commerce Performance Optimization: Technical Solutions for Better Conversion'
    },
    excerpt: {
      zh: '深入分析电商网站性能优化的关键技术，包括图片优化、CDN配置、数据库查询优化和前端性能提升策略。',
      en: 'In-depth analysis of key techniques for e-commerce performance optimization, including image optimization, CDN configuration, database query optimization, and frontend performance strategies.'
    },
    content: {
      zh: `电商网站的性能直接影响转化率。研究表明，页面加载时间每增加1秒，转化率下降7%。本文分享电商网站性能优化的实战经验。

## 性能指标基准

在开始优化之前，先了解关键指标：

| 指标 | 目标值 | 说明 |
|------|--------|------|
| LCP | <2.5s | 最大内容绘制 |
| FID | <100ms | 首次输入延迟 |
| CLS | <0.1 | 累积布局偏移 |
| TTFB | <600ms | 首字节时间 |

## 图片优化

图片通常占网页总大小的50%以上。

### 1. 格式选择

\`\`\`html
<picture>
  <source srcset="product.avif" type="image/avif">
  <source srcset="product.webp" type="image/webp">
  <img src="product.jpg" alt="商品图片">
</picture>
\`\`\`

**格式对比**：
- AVIF：最小，但兼容性一般
- WebP：很小，兼容性好
- JPEG：兼容性最好，但较大

### 2. 响应式图片

\`\`\`html
<img
  srcset="product-400.jpg 400w,
          product-800.jpg 800w,
          product-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px,
         (max-width: 1200px) 800px,
         1200px"
  src="product-800.jpg"
  alt="商品图片"
>
\`\`\`

### 3. 懒加载

\`\`\`html
<img src="product.jpg" loading="lazy" alt="商品图片">
\`\`\`

或使用Intersection Observer：

\`\`\`javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target
      img.src = img.dataset.src
      observer.unobserve(img)
    }
  })
})

document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img)
})
\`\`\`

## CDN配置

### 静态资源CDN

\`\`\`nginx
# Nginx配置示例
location ~* \\.(jpg|jpeg|png|gif|ico|css|js)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
\`\`\`

### 多区域CDN

对于面向多个国家的电商，使用多区域CDN：

\`\`\`
用户请求
    ↓
DNS智能解析
    ↓
最近的CDN节点
    ↓
返回缓存内容
\`\`\`

## 数据库优化

### 1. 索引优化

\`\`\`sql
-- 商品查询常用索引
CREATE INDEX idx_category_status ON products(category_id, status);
CREATE INDEX idx_price ON products(price);
CREATE INDEX idx_created_at ON products(created_at DESC);

-- 复合查询索引
CREATE INDEX idx_category_price ON products(category_id, price);
\`\`\`

### 2. 查询优化

**避免N+1查询**：

\`\`\`javascript
// 不好的做法
const orders = await Order.findAll()
for (const order of orders) {
  order.items = await OrderItem.findByOrderId(order.id) // N次查询
}

// 好的做法
const orders = await Order.findAll({
  include: [OrderItem] // 1次JOIN查询
})
\`\`\`

### 3. 缓存策略

\`\`\`javascript
// Redis缓存示例
async function getProduct(id) {
  const cached = await redis.get(\`product:\${id}\`)
  if (cached) return JSON.parse(cached)

  const product = await db.product.findById(id)
  await redis.setex(\`product:\${id}\`, 3600, JSON.stringify(product))
  return product
}
\`\`\`

## 前端优化

### 1. 代码分割

\`\`\`javascript
// React路由级分割
const ProductPage = lazy(() => import('./pages/Product'))
const CartPage = lazy(() => import('./pages/Cart'))
const CheckoutPage = lazy(() => import('./pages/Checkout'))
\`\`\`

### 2. 预加载关键资源

\`\`\`html
<link rel="preload" href="/fonts/main.woff2" as="font" crossorigin>
<link rel="preload" href="/css/critical.css" as="style">
<link rel="prefetch" href="/js/checkout.js">
\`\`\`

### 3. 骨架屏

\`\`\`css
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
\`\`\`

## 实战案例

我们为一个日均10万UV的电商网站做了以下优化：

### 优化前
- LCP: 4.2s
- FID: 180ms
- 页面大小: 3.2MB
- 转化率: 1.8%

### 优化措施
1. 图片转WebP，节省60%体积
2. 关键CSS内联
3. 非关键JS延迟加载
4. 添加Redis缓存层
5. 数据库索引优化

### 优化后
- LCP: 1.8s (-57%)
- FID: 45ms (-75%)
- 页面大小: 1.1MB (-66%)
- 转化率: 2.9% (+61%)

## 监控与持续优化

### 性能监控工具

1. **Lighthouse CI**：集成到CI/CD流程
2. **Web Vitals**：实时用户体验数据
3. **APM工具**：后端性能监控

### 持续优化流程

\`\`\`
监控 → 发现问题 → 分析原因 → 实施优化 → 验证效果 → 监控
\`\`\`

性能优化是持续的过程，不是一次性的项目。`,
      en: `E-commerce website performance directly impacts conversion rates. Studies show that for every 1-second increase in page load time, conversion rates drop by 7%. This article shares practical experience in e-commerce performance optimization.

## Performance Benchmarks

Before starting optimization, understand the key metrics:

| Metric | Target | Description |
|--------|--------|-------------|
| LCP | <2.5s | Largest Contentful Paint |
| FID | <100ms | First Input Delay |
| CLS | <0.1 | Cumulative Layout Shift |
| TTFB | <600ms | Time to First Byte |

## Image Optimization

Images typically account for over 50% of total page size.

### 1. Format Selection

\`\`\`html
<picture>
  <source srcset="product.avif" type="image/avif">
  <source srcset="product.webp" type="image/webp">
  <img src="product.jpg" alt="Product image">
</picture>
\`\`\`

**Format Comparison**:
- AVIF: Smallest, but limited compatibility
- WebP: Very small, good compatibility
- JPEG: Best compatibility, but larger

### 2. Responsive Images

\`\`\`html
<img
  srcset="product-400.jpg 400w,
          product-800.jpg 800w,
          product-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px,
         (max-width: 1200px) 800px,
         1200px"
  src="product-800.jpg"
  alt="Product image"
>
\`\`\`

### 3. Lazy Loading

\`\`\`html
<img src="product.jpg" loading="lazy" alt="Product image">
\`\`\`

Or use Intersection Observer:

\`\`\`javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target
      img.src = img.dataset.src
      observer.unobserve(img)
    }
  })
})

document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img)
})
\`\`\`

## CDN Configuration

### Static Resource CDN

\`\`\`nginx
# Nginx configuration example
location ~* \\.(jpg|jpeg|png|gif|ico|css|js)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
\`\`\`

### Multi-Region CDN

For e-commerce serving multiple countries, use multi-region CDN:

\`\`\`
User request
    ↓
Smart DNS resolution
    ↓
Nearest CDN node
    ↓
Return cached content
\`\`\`

## Database Optimization

### 1. Index Optimization

\`\`\`sql
-- Common product query indexes
CREATE INDEX idx_category_status ON products(category_id, status);
CREATE INDEX idx_price ON products(price);
CREATE INDEX idx_created_at ON products(created_at DESC);

-- Composite query index
CREATE INDEX idx_category_price ON products(category_id, price);
\`\`\`

### 2. Query Optimization

**Avoid N+1 Queries**:

\`\`\`javascript
// Bad approach
const orders = await Order.findAll()
for (const order of orders) {
  order.items = await OrderItem.findByOrderId(order.id) // N queries
}

// Good approach
const orders = await Order.findAll({
  include: [OrderItem] // 1 JOIN query
})
\`\`\`

### 3. Caching Strategy

\`\`\`javascript
// Redis caching example
async function getProduct(id) {
  const cached = await redis.get(\`product:\${id}\`)
  if (cached) return JSON.parse(cached)

  const product = await db.product.findById(id)
  await redis.setex(\`product:\${id}\`, 3600, JSON.stringify(product))
  return product
}
\`\`\`

## Frontend Optimization

### 1. Code Splitting

\`\`\`javascript
// React route-level splitting
const ProductPage = lazy(() => import('./pages/Product'))
const CartPage = lazy(() => import('./pages/Cart'))
const CheckoutPage = lazy(() => import('./pages/Checkout'))
\`\`\`

### 2. Preload Critical Resources

\`\`\`html
<link rel="preload" href="/fonts/main.woff2" as="font" crossorigin>
<link rel="preload" href="/css/critical.css" as="style">
<link rel="prefetch" href="/js/checkout.js">
\`\`\`

### 3. Skeleton Screens

\`\`\`css
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
\`\`\`

## Case Study

We optimized an e-commerce site with 100k daily UV:

### Before Optimization
- LCP: 4.2s
- FID: 180ms
- Page size: 3.2MB
- Conversion rate: 1.8%

### Optimization Measures
1. Convert images to WebP, save 60% size
2. Inline critical CSS
3. Defer non-critical JS
4. Add Redis cache layer
5. Database index optimization

### After Optimization
- LCP: 1.8s (-57%)
- FID: 45ms (-75%)
- Page size: 1.1MB (-66%)
- Conversion rate: 2.9% (+61%)

## Monitoring and Continuous Optimization

### Performance Monitoring Tools

1. **Lighthouse CI**: Integrate into CI/CD pipeline
2. **Web Vitals**: Real user experience data
3. **APM Tools**: Backend performance monitoring

### Continuous Optimization Process

\`\`\`
Monitor → Identify issues → Analyze causes → Implement fixes → Verify results → Monitor
\`\`\`

Performance optimization is an ongoing process, not a one-time project.`
    },
    category: {
      zh: '技术分享',
      en: 'Technical Sharing'
    },
    tags: [
      { zh: '性能优化', en: 'Performance' },
      { zh: '电商', en: 'E-commerce' },
      { zh: '前端', en: 'Frontend' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-12-10',
    readTime: { zh: '14分钟', en: '14 min' },
    thumbnail: '/images/blog/security.jpg',
    featured: false
  },
  {
    id: 13,
    slug: 'multilingual-website-best-practices',
    title: {
      zh: '多语言网站开发最佳实践：i18n完整指南',
      en: 'Multilingual Website Best Practices: Complete i18n Guide'
    },
    excerpt: {
      zh: '全面介绍多语言网站开发的技术方案，包括i18n框架选择、翻译管理、SEO优化和常见陷阱避免。',
      en: 'Comprehensive introduction to multilingual website development, including i18n framework selection, translation management, SEO optimization, and common pitfalls to avoid.'
    },
    content: {
      zh: `面向意大利华人社区的网站通常需要支持意大利语、中文和英语。本文分享多语言网站开发的最佳实践。

## i18n框架选择

### React项目推荐：react-i18next

\`\`\`bash
npm install i18next react-i18next i18next-browser-languagedetector
\`\`\`

### 基础配置

\`\`\`javascript
// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import zh from './locales/zh.json'
import it from './locales/it.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      it: { translation: it }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
\`\`\`

### 翻译文件结构

\`\`\`json
// locales/zh.json
{
  "nav": {
    "home": "首页",
    "services": "服务",
    "about": "关于我们",
    "contact": "联系我们"
  },
  "hero": {
    "title": "专业网站开发服务",
    "subtitle": "为您的业务打造数字化解决方案"
  },
  "common": {
    "learnMore": "了解更多",
    "getStarted": "开始使用",
    "price": "价格：{{amount}}€"
  }
}
\`\`\`

## 在组件中使用

### 基础用法

\`\`\`jsx
import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()

  return (
    <section>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
      <button>{t('common.getStarted')}</button>
    </section>
  )
}
\`\`\`

### 带变量的翻译

\`\`\`jsx
// 翻译文件
{
  "greeting": "你好，{{name}}！",
  "items": "共 {{count}} 件商品"
}

// 组件中使用
<p>{t('greeting', { name: 'Marco' })}</p>
<p>{t('items', { count: 5 })}</p>
\`\`\`

### 复数处理

\`\`\`json
{
  "item": "{{count}} 件商品",
  "item_plural": "{{count}} 件商品"
}
\`\`\`

## 语言切换器

\`\`\`jsx
function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'en', label: 'English', flag: '🇬🇧' }
  ]

  return (
    <div className="lang-switcher">
      {languages.map(lang => (
        <button
          key={lang.code}
          className={i18n.language === lang.code ? 'active' : ''}
          onClick={() => i18n.changeLanguage(lang.code)}
        >
          <span>{lang.flag}</span>
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  )
}
\`\`\`

## SEO多语言优化

### hreflang标签

\`\`\`jsx
// 使用react-helmet
import { Helmet } from 'react-helmet-async'

function SEO({ path }) {
  const baseUrl = 'https://example.it'

  return (
    <Helmet>
      <link rel="alternate" hreflang="it" href={\`\${baseUrl}\${path}\`} />
      <link rel="alternate" hreflang="zh" href={\`\${baseUrl}/zh\${path}\`} />
      <link rel="alternate" hreflang="en" href={\`\${baseUrl}/en\${path}\`} />
      <link rel="alternate" hreflang="x-default" href={\`\${baseUrl}\${path}\`} />
    </Helmet>
  )
}
\`\`\`

### URL策略

**方案一：子目录（推荐）**
\`\`\`
example.it/          # 意大利语（默认）
example.it/zh/       # 中文
example.it/en/       # 英语
\`\`\`

**方案二：子域名**
\`\`\`
it.example.com
zh.example.com
en.example.com
\`\`\`

### 动态meta标签

\`\`\`jsx
function SEO({ titleKey, descriptionKey }) {
  const { t, i18n } = useTranslation()

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{t(titleKey)}</title>
      <meta name="description" content={t(descriptionKey)} />
    </Helmet>
  )
}
\`\`\`

## 翻译管理

### 翻译文件组织

\`\`\`
src/
└── locales/
    ├── en/
    │   ├── common.json
    │   ├── home.json
    │   └── services.json
    ├── zh/
    │   ├── common.json
    │   ├── home.json
    │   └── services.json
    └── it/
        ├── common.json
        ├── home.json
        └── services.json
\`\`\`

### 命名空间

\`\`\`javascript
i18n.init({
  ns: ['common', 'home', 'services'],
  defaultNS: 'common'
})

// 使用
const { t } = useTranslation('services')
t('pricing.title') // 从services.json读取
\`\`\`

## 常见陷阱

### 1. 硬编码文本

\`\`\`jsx
// ❌ 错误
<button>Submit</button>

// ✅ 正确
<button>{t('form.submit')}</button>
\`\`\`

### 2. 拼接翻译

\`\`\`jsx
// ❌ 错误 - 不同语言语序不同
<p>{t('hello')} {name}!</p>

// ✅ 正确 - 使用插值
<p>{t('greeting', { name })}</p>
\`\`\`

### 3. 忽视文本长度

不同语言文本长度差异很大：
- 中文：简洁
- 意大利语：较长
- 德语：非常长

**解决方案**：
- 使用弹性布局
- 设置min-width而非固定宽度
- 文本过长时使用省略号

### 4. 日期和数字格式

\`\`\`javascript
// 使用Intl API
const formatDate = (date, locale) => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

const formatCurrency = (amount, locale) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR'
  }).format(amount)
}
\`\`\`

## 性能优化

### 懒加载翻译文件

\`\`\`javascript
i18n.init({
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  },
  partialBundledLanguages: true
})
\`\`\`

### 翻译缓存

\`\`\`javascript
// 存储到localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('preferredLanguage', lng)
})

// 初始化时读取
const savedLang = localStorage.getItem('preferredLanguage')
if (savedLang) {
  i18n.changeLanguage(savedLang)
}
\`\`\`

## 总结

多语言开发的核心原则：

1. **从项目开始就考虑i18n**
2. **所有用户可见文本都要提取**
3. **使用变量插值而非字符串拼接**
4. **重视SEO的多语言配置**
5. **考虑不同语言的UI适配**

好的多语言支持能让你的网站触达更广泛的用户群体。`,
      en: `Websites targeting the Italian Chinese community typically need to support Italian, Chinese, and English. This article shares best practices for multilingual website development.

## i18n Framework Selection

### Recommended for React: react-i18next

\`\`\`bash
npm install i18next react-i18next i18next-browser-languagedetector
\`\`\`

### Basic Configuration

\`\`\`javascript
// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import zh from './locales/zh.json'
import it from './locales/it.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      it: { translation: it }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
\`\`\`

### Translation File Structure

\`\`\`json
// locales/en.json
{
  "nav": {
    "home": "Home",
    "services": "Services",
    "about": "About Us",
    "contact": "Contact"
  },
  "hero": {
    "title": "Professional Web Development",
    "subtitle": "Digital solutions for your business"
  },
  "common": {
    "learnMore": "Learn More",
    "getStarted": "Get Started",
    "price": "Price: €{{amount}}"
  }
}
\`\`\`

## Using in Components

### Basic Usage

\`\`\`jsx
import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()

  return (
    <section>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
      <button>{t('common.getStarted')}</button>
    </section>
  )
}
\`\`\`

### Translation with Variables

\`\`\`jsx
// Translation file
{
  "greeting": "Hello, {{name}}!",
  "items": "{{count}} items total"
}

// In component
<p>{t('greeting', { name: 'Marco' })}</p>
<p>{t('items', { count: 5 })}</p>
\`\`\`

### Pluralization

\`\`\`json
{
  "item_one": "{{count}} item",
  "item_other": "{{count}} items"
}
\`\`\`

## Language Switcher

\`\`\`jsx
function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'en', label: 'English', flag: '🇬🇧' }
  ]

  return (
    <div className="lang-switcher">
      {languages.map(lang => (
        <button
          key={lang.code}
          className={i18n.language === lang.code ? 'active' : ''}
          onClick={() => i18n.changeLanguage(lang.code)}
        >
          <span>{lang.flag}</span>
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  )
}
\`\`\`

## Multilingual SEO

### hreflang Tags

\`\`\`jsx
// Using react-helmet
import { Helmet } from 'react-helmet-async'

function SEO({ path }) {
  const baseUrl = 'https://example.it'

  return (
    <Helmet>
      <link rel="alternate" hreflang="it" href={\`\${baseUrl}\${path}\`} />
      <link rel="alternate" hreflang="zh" href={\`\${baseUrl}/zh\${path}\`} />
      <link rel="alternate" hreflang="en" href={\`\${baseUrl}/en\${path}\`} />
      <link rel="alternate" hreflang="x-default" href={\`\${baseUrl}\${path}\`} />
    </Helmet>
  )
}
\`\`\`

### URL Strategy

**Option 1: Subdirectories (Recommended)**
\`\`\`
example.it/          # Italian (default)
example.it/zh/       # Chinese
example.it/en/       # English
\`\`\`

**Option 2: Subdomains**
\`\`\`
it.example.com
zh.example.com
en.example.com
\`\`\`

### Dynamic Meta Tags

\`\`\`jsx
function SEO({ titleKey, descriptionKey }) {
  const { t, i18n } = useTranslation()

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{t(titleKey)}</title>
      <meta name="description" content={t(descriptionKey)} />
    </Helmet>
  )
}
\`\`\`

## Translation Management

### File Organization

\`\`\`
src/
└── locales/
    ├── en/
    │   ├── common.json
    │   ├── home.json
    │   └── services.json
    ├── zh/
    │   ├── common.json
    │   ├── home.json
    │   └── services.json
    └── it/
        ├── common.json
        ├── home.json
        └── services.json
\`\`\`

### Namespaces

\`\`\`javascript
i18n.init({
  ns: ['common', 'home', 'services'],
  defaultNS: 'common'
})

// Usage
const { t } = useTranslation('services')
t('pricing.title') // Reads from services.json
\`\`\`

## Common Pitfalls

### 1. Hardcoded Text

\`\`\`jsx
// ❌ Wrong
<button>Submit</button>

// ✅ Correct
<button>{t('form.submit')}</button>
\`\`\`

### 2. String Concatenation

\`\`\`jsx
// ❌ Wrong - word order differs between languages
<p>{t('hello')} {name}!</p>

// ✅ Correct - use interpolation
<p>{t('greeting', { name })}</p>
\`\`\`

### 3. Ignoring Text Length

Text length varies significantly between languages:
- Chinese: Concise
- Italian: Longer
- German: Very long

**Solutions**:
- Use flexible layouts
- Set min-width instead of fixed width
- Use ellipsis for overflow

### 4. Date and Number Formatting

\`\`\`javascript
// Use Intl API
const formatDate = (date, locale) => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

const formatCurrency = (amount, locale) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR'
  }).format(amount)
}
\`\`\`

## Performance Optimization

### Lazy Loading Translations

\`\`\`javascript
i18n.init({
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  },
  partialBundledLanguages: true
})
\`\`\`

### Translation Caching

\`\`\`javascript
// Store in localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('preferredLanguage', lng)
})

// Read on initialization
const savedLang = localStorage.getItem('preferredLanguage')
if (savedLang) {
  i18n.changeLanguage(savedLang)
}
\`\`\`

## Summary

Core principles of multilingual development:

1. **Consider i18n from project start**
2. **Extract all user-visible text**
3. **Use variable interpolation, not string concatenation**
4. **Pay attention to multilingual SEO configuration**
5. **Consider UI adaptation for different languages**

Good multilingual support helps your website reach a broader audience.`
    },
    category: {
      zh: '技术分享',
      en: 'Technical Sharing'
    },
    tags: [
      { zh: '国际化', en: 'i18n' },
      { zh: '多语言', en: 'Multilingual' },
      { zh: 'React', en: 'React' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-12-15',
    readTime: { zh: '16分钟', en: '16 min' },
    thumbnail: '/images/blog/accessibility.jpg',
    featured: false
  },
  {
    id: 14,
    slug: 'ai-in-web-design',
    title: {
      zh: 'AI在网页设计中的应用：提升效率的实用工具',
      en: 'AI in Web Design: Practical Tools for Better Efficiency'
    },
    excerpt: {
      zh: '探索AI工具如何改变网页设计工作流程，包括设计生成、代码辅助、图片处理和内容创作等实用应用。',
      en: 'Exploring how AI tools are changing web design workflows, including design generation, code assistance, image processing, and content creation.'
    },
    content: {
      zh: `AI正在深刻改变网页设计和开发的工作方式。本文分享我在实际项目中使用AI工具的经验和心得。

## AI设计工具

### 1. 设计灵感与生成

**Midjourney / DALL-E**

用于生成设计灵感和素材：
- 网站Hero区域背景图
- 品牌风格探索
- 图标和插画概念

**提示词示例**：
\`\`\`
Modern minimalist website hero image for a sushi restaurant,
soft lighting, Japanese aesthetic, clean composition,
professional photography style --ar 16:9 --v 6
\`\`\`

**Figma AI插件**：
- Magician：AI生成图标和插画
- Wireframe Designer：自动生成线框图
- Content Reel：生成占位内容

### 2. 配色方案

**Khroma / Colormind**：
- 基于AI的配色推荐
- 学习你的颜色偏好
- 生成和谐的配色方案

**实际应用**：
\`\`\`css
/* AI推荐的配色方案 */
:root {
  --primary: #2563eb;
  --secondary: #7c3aed;
  --accent: #f59e0b;
  --neutral: #64748b;
  --background: #f8fafc;
}
\`\`\`

## AI代码辅助

### 1. GitHub Copilot

我最常用的AI编程助手，特别擅长：

**组件生成**：
\`\`\`javascript
// 输入注释，Copilot自动补全
// React component for a responsive navigation bar with mobile menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  // ... Copilot会自动补全剩余代码
}
\`\`\`

**CSS样式**：
\`\`\`css
/* Card component with hover effect and shadow */
.card {
  /* Copilot自动补全 */
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
\`\`\`

### 2. Claude / ChatGPT

用于：
- 代码审查和优化建议
- 解释复杂代码逻辑
- 调试错误
- 编写文档

**实际对话示例**：
\`\`\`
我：这段React代码有性能问题，帮我优化：
[粘贴代码]

AI：我发现以下问题：
1. useEffect缺少依赖项
2. 这个计算应该用useMemo包裹
3. 这个回调函数应该用useCallback
\`\`\`

### 3. v0.dev (Vercel)

专门用于生成UI组件的AI工具：

\`\`\`
提示：Create a pricing table with 3 tiers,
featuring a highlighted recommended plan,
with monthly/yearly toggle
\`\`\`

直接生成可用的React + Tailwind代码。

## AI图片处理

### 1. 背景移除

**Remove.bg API集成**：
\`\`\`javascript
async function removeBackground(imageUrl) {
  const response = await fetch('https://api.remove.bg/v1.0/removebg', {
    method: 'POST',
    headers: {
      'X-Api-Key': process.env.REMOVE_BG_KEY
    },
    body: JSON.stringify({
      image_url: imageUrl,
      size: 'auto'
    })
  })
  return response.blob()
}
\`\`\`

### 2. 图片放大

**Upscale.media / Topaz**：
- 将低分辨率图片放大
- 保持清晰度
- 适合客户提供的小图

### 3. 图片压缩

**TinyPNG / Squoosh**：
- 智能压缩算法
- 保持视觉质量
- 大幅减小文件体积

## AI内容创作

### 1. 文案生成

\`\`\`
提示：为一家米兰的日料餐厅写网站首页文案，
要体现高端、正宗、新鲜的品牌形象，
需要意大利语和中文双语版本
\`\`\`

### 2. SEO优化

\`\`\`
提示：为这篇博客文章生成SEO优化的：
- Meta description (150字符内)
- 5个相关关键词
- 社交媒体分享文案
\`\`\`

### 3. 翻译辅助

AI翻译 + 人工校对的工作流：
1. AI生成初稿
2. 母语者审核
3. 调整本地化表达

## 实际工作流程

### 设计阶段

\`\`\`
1. 用AI生成设计灵感和参考
2. 在Figma中细化设计
3. 用AI生成配色和字体搭配
4. 导出设计稿
\`\`\`

### 开发阶段

\`\`\`
1. 用AI生成基础组件代码
2. 手动调整和优化
3. 用AI辅助编写测试
4. 用AI生成文档
\`\`\`

### 内容阶段

\`\`\`
1. AI生成初稿
2. 人工编辑和润色
3. SEO优化
4. 多语言翻译
\`\`\`

## AI使用原则

### 1. AI是工具，不是替代

- AI生成的代码需要审查
- AI生成的设计需要调整
- AI生成的内容需要编辑

### 2. 保护客户数据

- 不要将敏感信息输入AI
- 注意数据隐私合规
- 使用企业版AI工具

### 3. 保持学习

- 理解AI生成的代码
- 不要盲目复制粘贴
- 持续提升自己的技能

## 推荐工具清单

| 类别 | 工具 | 用途 |
|------|------|------|
| 代码 | GitHub Copilot | 代码补全 |
| 代码 | Claude | 代码审查 |
| 设计 | Midjourney | 图片生成 |
| 设计 | v0.dev | UI组件生成 |
| 图片 | Remove.bg | 背景移除 |
| 内容 | ChatGPT | 文案生成 |

## 总结

AI工具大大提升了我的工作效率：
- 设计阶段节省30%时间
- 编码阶段节省40%时间
- 内容创作节省50%时间

但记住：AI是助手，不是替代。保持学习，善用工具，才能在AI时代保持竞争力。`,
      en: `AI is profoundly changing how we approach web design and development. This article shares my experience using AI tools in real projects.

## AI Design Tools

### 1. Design Inspiration & Generation

**Midjourney / DALL-E**

For generating design inspiration and assets:
- Website hero section backgrounds
- Brand style exploration
- Icon and illustration concepts

**Prompt Example**:
\`\`\`
Modern minimalist website hero image for a sushi restaurant,
soft lighting, Japanese aesthetic, clean composition,
professional photography style --ar 16:9 --v 6
\`\`\`

**Figma AI Plugins**:
- Magician: AI-generated icons and illustrations
- Wireframe Designer: Auto-generate wireframes
- Content Reel: Generate placeholder content

### 2. Color Schemes

**Khroma / Colormind**:
- AI-based color recommendations
- Learns your color preferences
- Generates harmonious palettes

**Practical Application**:
\`\`\`css
/* AI-recommended color scheme */
:root {
  --primary: #2563eb;
  --secondary: #7c3aed;
  --accent: #f59e0b;
  --neutral: #64748b;
  --background: #f8fafc;
}
\`\`\`

## AI Code Assistance

### 1. GitHub Copilot

My most-used AI programming assistant, especially good at:

**Component Generation**:
\`\`\`javascript
// Enter a comment, Copilot auto-completes
// React component for a responsive navigation bar with mobile menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  // ... Copilot auto-completes the rest
}
\`\`\`

**CSS Styling**:
\`\`\`css
/* Card component with hover effect and shadow */
.card {
  /* Copilot auto-completes */
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
\`\`\`

### 2. Claude / ChatGPT

Used for:
- Code review and optimization suggestions
- Explaining complex code logic
- Debugging errors
- Writing documentation

**Real Conversation Example**:
\`\`\`
Me: This React code has performance issues, help me optimize:
[paste code]

AI: I found these issues:
1. useEffect missing dependencies
2. This calculation should be wrapped with useMemo
3. This callback should use useCallback
\`\`\`

### 3. v0.dev (Vercel)

AI tool specifically for generating UI components:

\`\`\`
Prompt: Create a pricing table with 3 tiers,
featuring a highlighted recommended plan,
with monthly/yearly toggle
\`\`\`

Directly generates usable React + Tailwind code.

## AI Image Processing

### 1. Background Removal

**Remove.bg API Integration**:
\`\`\`javascript
async function removeBackground(imageUrl) {
  const response = await fetch('https://api.remove.bg/v1.0/removebg', {
    method: 'POST',
    headers: {
      'X-Api-Key': process.env.REMOVE_BG_KEY
    },
    body: JSON.stringify({
      image_url: imageUrl,
      size: 'auto'
    })
  })
  return response.blob()
}
\`\`\`

### 2. Image Upscaling

**Upscale.media / Topaz**:
- Upscale low-resolution images
- Maintain sharpness
- Great for small images from clients

### 3. Image Compression

**TinyPNG / Squoosh**:
- Smart compression algorithms
- Maintain visual quality
- Significantly reduce file size

## AI Content Creation

### 1. Copywriting

\`\`\`
Prompt: Write homepage copy for a Japanese restaurant in Milan,
conveying a high-end, authentic, fresh brand image,
need both Italian and Chinese versions
\`\`\`

### 2. SEO Optimization

\`\`\`
Prompt: Generate SEO-optimized content for this blog post:
- Meta description (under 150 characters)
- 5 relevant keywords
- Social media sharing copy
\`\`\`

### 3. Translation Assistance

AI translation + human review workflow:
1. AI generates first draft
2. Native speaker reviews
3. Adjust localized expressions

## Practical Workflow

### Design Phase

\`\`\`
1. Use AI to generate design inspiration
2. Refine designs in Figma
3. Use AI for color and font pairing
4. Export design files
\`\`\`

### Development Phase

\`\`\`
1. Use AI to generate base component code
2. Manually adjust and optimize
3. Use AI to assist writing tests
4. Use AI to generate documentation
\`\`\`

### Content Phase

\`\`\`
1. AI generates first draft
2. Human editing and polishing
3. SEO optimization
4. Multilingual translation
\`\`\`

## AI Usage Principles

### 1. AI is a Tool, Not a Replacement

- AI-generated code needs review
- AI-generated designs need adjustment
- AI-generated content needs editing

### 2. Protect Client Data

- Don't input sensitive information into AI
- Mind data privacy compliance
- Use enterprise AI tools

### 3. Keep Learning

- Understand AI-generated code
- Don't blindly copy-paste
- Continuously improve your skills

## Recommended Tools

| Category | Tool | Purpose |
|----------|------|---------|
| Code | GitHub Copilot | Code completion |
| Code | Claude | Code review |
| Design | Midjourney | Image generation |
| Design | v0.dev | UI component generation |
| Image | Remove.bg | Background removal |
| Content | ChatGPT | Copywriting |

## Summary

AI tools have greatly improved my efficiency:
- 30% time saved in design phase
- 40% time saved in coding phase
- 50% time saved in content creation

But remember: AI is an assistant, not a replacement. Keep learning and use tools wisely to stay competitive in the AI era.`
    },
    category: {
      zh: '技术分享',
      en: 'Technical Sharing'
    },
    tags: [
      { zh: 'AI', en: 'AI' },
      { zh: '设计工具', en: 'Design Tools' },
      { zh: '效率', en: 'Productivity' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-12-20',
    readTime: { zh: '14分钟', en: '14 min' },
    thumbnail: '/images/blog/css.jpg',
    featured: true
  },
  {
    id: 15,
    slug: 'web-development-trends-2025',
    title: {
      zh: '2025年Web开发趋势：值得关注的技术方向',
      en: '2025 Web Development Trends: Technologies Worth Watching'
    },
    excerpt: {
      zh: '展望2025年Web开发领域的主要趋势，包括AI集成、边缘计算、新框架发展和性能优化新标准。',
      en: 'Looking ahead at major trends in web development for 2025, including AI integration, edge computing, new framework developments, and performance optimization standards.'
    },
    content: {
      zh: `2025年即将到来，Web开发领域正在经历快速变革。本文分析值得关注的技术趋势，帮助你把握未来方向。

## 1. AI原生开发

### AI不再是插件，而是基础设施

2025年，AI将从"锦上添花"变成"基础能力"：

**开发工具演进**：
- IDE内置AI助手成为标配
- 自动代码审查和安全检测
- 智能测试生成

**用户体验增强**：
\`\`\`javascript
// AI驱动的个性化内容
const personalizedContent = await ai.generateContent({
  userProfile: currentUser,
  context: pageContext,
  language: preferredLanguage
})
\`\`\`

### 本地AI模型

浏览器端运行的AI模型将更普及：

\`\`\`javascript
// 使用Web AI API (提案中)
const model = await ai.loadModel('text-classification')
const result = await model.classify(userInput)
\`\`\`

## 2. 边缘计算普及

### 从CDN到边缘函数

计算将更靠近用户：

\`\`\`javascript
// Cloudflare Workers / Vercel Edge Functions
export default {
  async fetch(request) {
    const userCountry = request.cf.country

    // 在边缘节点处理逻辑
    const content = await getLocalizedContent(userCountry)

    return new Response(content)
  }
}
\`\`\`

### 边缘数据库

数据也将分布式存储：
- Cloudflare D1
- PlanetScale
- Turso (libSQL)

## 3. React生态演进

### React Server Components成熟

RSC将成为主流模式：

\`\`\`jsx
// 服务端组件 - 无需"use client"
async function ProductList() {
  const products = await db.products.findMany()

  return (
    <div>
      {products.map(p => <ProductCard key={p.id} {...p} />)}
    </div>
  )
}
\`\`\`

### 新一代状态管理

- Zustand / Jotai 持续增长
- Signal-based reactivity受关注
- 服务端状态与客户端状态分离

## 4. 新兴框架动态

### Astro 持续崛起

内容网站的首选：
- Islands架构
- 零JS默认
- 多框架支持

### Svelte 5 与 Runes

\`\`\`svelte
<script>
  let count = $state(0)
  let doubled = $derived(count * 2)
</script>

<button onclick={() => count++}>
  {count} x 2 = {doubled}
</button>
\`\`\`

### htmx 复兴

回归简单的交互模式：
\`\`\`html
<button hx-post="/api/like" hx-swap="outerHTML">
  Like ({{count}})
</button>
\`\`\`

## 5. 性能新标准

### Core Web Vitals 更新

Google持续调整指标：
- INP (Interaction to Next Paint) 正式取代FID
- 更严格的CLS阈值
- 新增响应性指标

### 新的优化技术

\`\`\`html
<!-- 推测性加载 -->
<script type="speculationrules">
{
  "prefetch": [
    {"urls": ["/products", "/about"]}
  ],
  "prerender": [
    {"urls": ["/checkout"]}
  ]
}
</script>
\`\`\`

## 6. 开发体验提升

### 更快的构建工具

- Vite继续主导
- Turbopack (Next.js) 成熟
- Rspack (Webpack兼容) 崛起

**热更新速度对比**：
| 工具 | HMR速度 |
|------|---------|
| Webpack | ~500ms |
| Vite | ~50ms |
| Turbopack | ~20ms |

### TypeScript 深度集成

- 更好的类型推断
- 更快的编译速度
- 更丰富的类型系统

## 7. Web平台新能力

### View Transitions API

原生页面过渡动画：
\`\`\`javascript
document.startViewTransition(() => {
  updateDOM()
})
\`\`\`

### Container Queries 普及

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

### Popover API

\`\`\`html
<button popovertarget="menu">Open Menu</button>
<div popover id="menu">
  <nav>...</nav>
</div>
\`\`\`

## 8. 安全与隐私

### 无Cookie追踪

- Privacy Sandbox APIs
- Topics API
- Attribution Reporting

### 增强的安全头

\`\`\`
Content-Security-Policy: default-src 'self';
Permissions-Policy: camera=(), microphone=()
Cross-Origin-Opener-Policy: same-origin
\`\`\`

## 9. 可持续Web开发

### 绿色编码实践

- 减少不必要的计算
- 优化资源加载
- 选择绿色托管服务

### 性能 = 可持续性

每减少100KB页面大小：
- 用户体验提升
- 服务器负载降低
- 碳排放减少

## 给开发者的建议

### 2025年应该学习什么

1. **AI工具使用** - 提升效率的必备技能
2. **边缘计算概念** - 理解分布式架构
3. **React Server Components** - 主流框架新模式
4. **性能优化** - INP等新指标
5. **Web平台API** - 原生能力越来越强

### 保持技术选型务实

不要追逐每一个新框架，而是：
- 评估项目实际需求
- 考虑团队学习成本
- 关注长期维护性

## 总结

2025年Web开发的关键词：
- **AI驱动** - 开发和用户体验
- **边缘优先** - 计算更靠近用户
- **性能至上** - 新指标更严格
- **简化回归** - htmx等工具的复兴

拥抱变化，但保持务实。技术选型应该服务于业务目标，而非为了追新。`,
      en: `2025 is approaching, and the web development landscape is rapidly evolving. This article analyzes noteworthy technology trends to help you navigate the future.

## 1. AI-Native Development

### AI as Infrastructure, Not Plugin

In 2025, AI will shift from "nice-to-have" to "essential":

**Development Tool Evolution**:
- Built-in IDE AI assistants become standard
- Automatic code review and security detection
- Intelligent test generation

**User Experience Enhancement**:
\`\`\`javascript
// AI-driven personalized content
const personalizedContent = await ai.generateContent({
  userProfile: currentUser,
  context: pageContext,
  language: preferredLanguage
})
\`\`\`

### Local AI Models

Browser-side AI models will become more common:

\`\`\`javascript
// Using Web AI API (proposed)
const model = await ai.loadModel('text-classification')
const result = await model.classify(userInput)
\`\`\`

## 2. Edge Computing Goes Mainstream

### From CDN to Edge Functions

Computation moves closer to users:

\`\`\`javascript
// Cloudflare Workers / Vercel Edge Functions
export default {
  async fetch(request) {
    const userCountry = request.cf.country

    // Process logic at edge node
    const content = await getLocalizedContent(userCountry)

    return new Response(content)
  }
}
\`\`\`

### Edge Databases

Data will also be distributed:
- Cloudflare D1
- PlanetScale
- Turso (libSQL)

## 3. React Ecosystem Evolution

### React Server Components Mature

RSC becomes mainstream:

\`\`\`jsx
// Server component - no "use client" needed
async function ProductList() {
  const products = await db.products.findMany()

  return (
    <div>
      {products.map(p => <ProductCard key={p.id} {...p} />)}
    </div>
  )
}
\`\`\`

### Next-Gen State Management

- Zustand / Jotai continue growing
- Signal-based reactivity gains attention
- Server state vs client state separation

## 4. Emerging Framework Dynamics

### Astro Continues Rising

The choice for content sites:
- Islands architecture
- Zero JS by default
- Multi-framework support

### Svelte 5 and Runes

\`\`\`svelte
<script>
  let count = $state(0)
  let doubled = $derived(count * 2)
</script>

<button onclick={() => count++}>
  {count} x 2 = {doubled}
</button>
\`\`\`

### htmx Renaissance

Return to simple interaction patterns:
\`\`\`html
<button hx-post="/api/like" hx-swap="outerHTML">
  Like ({{count}})
</button>
\`\`\`

## 5. New Performance Standards

### Core Web Vitals Updates

Google continues adjusting metrics:
- INP (Interaction to Next Paint) officially replaces FID
- Stricter CLS thresholds
- New responsiveness metrics

### New Optimization Techniques

\`\`\`html
<!-- Speculative loading -->
<script type="speculationrules">
{
  "prefetch": [
    {"urls": ["/products", "/about"]}
  ],
  "prerender": [
    {"urls": ["/checkout"]}
  ]
}
</script>
\`\`\`

## 6. Developer Experience Improvements

### Faster Build Tools

- Vite continues to dominate
- Turbopack (Next.js) matures
- Rspack (Webpack-compatible) rises

**HMR Speed Comparison**:
| Tool | HMR Speed |
|------|-----------|
| Webpack | ~500ms |
| Vite | ~50ms |
| Turbopack | ~20ms |

### TypeScript Deep Integration

- Better type inference
- Faster compilation
- Richer type system

## 7. New Web Platform Capabilities

### View Transitions API

Native page transition animations:
\`\`\`javascript
document.startViewTransition(() => {
  updateDOM()
})
\`\`\`

### Container Queries Adoption

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

### Popover API

\`\`\`html
<button popovertarget="menu">Open Menu</button>
<div popover id="menu">
  <nav>...</nav>
</div>
\`\`\`

## 8. Security and Privacy

### Cookieless Tracking

- Privacy Sandbox APIs
- Topics API
- Attribution Reporting

### Enhanced Security Headers

\`\`\`
Content-Security-Policy: default-src 'self';
Permissions-Policy: camera=(), microphone=()
Cross-Origin-Opener-Policy: same-origin
\`\`\`

## 9. Sustainable Web Development

### Green Coding Practices

- Reduce unnecessary computation
- Optimize resource loading
- Choose green hosting services

### Performance = Sustainability

For every 100KB reduction in page size:
- Better user experience
- Lower server load
- Reduced carbon emissions

## Advice for Developers

### What to Learn in 2025

1. **AI Tool Usage** - Essential for efficiency
2. **Edge Computing Concepts** - Understanding distributed architecture
3. **React Server Components** - New mainstream framework pattern
4. **Performance Optimization** - New metrics like INP
5. **Web Platform APIs** - Native capabilities growing stronger

### Stay Pragmatic with Tech Choices

Don't chase every new framework. Instead:
- Evaluate actual project needs
- Consider team learning curve
- Focus on long-term maintainability

## Summary

Key themes for web development in 2025:
- **AI-Driven** - Development and user experience
- **Edge-First** - Computation closer to users
- **Performance-Focused** - Stricter new metrics
- **Simplicity Revival** - htmx and similar tools

Embrace change, but stay practical. Technology choices should serve business goals, not novelty.`
    },
    category: {
      zh: '技术分享',
      en: 'Technical Sharing'
    },
    tags: [
      { zh: '趋势', en: 'Trends' },
      { zh: 'Web开发', en: 'Web Development' },
      { zh: '2025', en: '2025' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-12-25',
    readTime: { zh: '15分钟', en: '15 min' },
    thumbnail: '/images/blog/mobile-first.jpg',
    featured: false
  },
  {
    id: 16,
    slug: 'why-choose-bilingual-web-team',
    title: {
      zh: '为什么选择中意双语网站开发团队',
      en: 'Why Choose a Bilingual Italian-Chinese Web Development Team'
    },
    excerpt: {
      zh: '探索选择专业中意双语网站开发团队的独特优势，如何帮助您的企业连接两个市场。',
      en: 'Discover the unique advantages of choosing a professional Italian-Chinese bilingual web development team to connect your business with both markets.'
    },
    content: {
      zh: `在意大利经营业务的华人企业和希望进入中国市场的意大利公司都面临一个共同挑战：如何创建一个真正能服务双语客户的网站？选择一个理解两种文化的开发团队至关重要。

## 双语团队的核心优势

### 文化理解
我们的团队成员既有在意大利生活多年的华人开发者，也有了解中国市场的意大利合作伙伴。这意味着：
- 准确的文化适配，避免翻译中的文化误解
- 了解两地用户的使用习惯和期望
- 能够为不同市场定制用户体验

### 技术与本地化
- 符合意大利GDPR和中国数据法规的合规方案
- 优化的服务器部署策略（欧洲和亚洲节点）
- 支持微信生态和意大利本地支付系统

## 我们服务的客户类型

### 意大利华人企业
- 餐饮业：中餐馆、寿司店、奶茶店
- 零售业：中国超市、服装批发
- 专业服务：会计事务所、律师事务所、中医诊所

### 意大利本土企业
- 希望进入中国市场的时尚品牌
- 面向华人旅游者的旅游服务
- 与中国有贸易往来的进出口公司

## 成功案例

我们已经帮助超过20家意大利华人企业建立了专业的在线形象：
- 提升平均200%的在线询盘
- 改善用户体验，降低跳出率40%
- 实现意大利语、中文、英语三语切换

## 为什么现在是最佳时机

随着数字化转型加速，没有专业网站的企业正在失去市场份额。我们提供：
- 免费咨询和网站诊断
- 灵活的定价方案
- 持续的技术支持和维护

立即联系我们，了解如何让您的企业在两个市场都脱颖而出。`,
      en: `Chinese businesses operating in Italy and Italian companies looking to enter the Chinese market share a common challenge: how to create a website that truly serves bilingual customers? Choosing a development team that understands both cultures is crucial.

## Core Advantages of a Bilingual Team

### Cultural Understanding
Our team includes Chinese developers who have lived in Italy for years and Italian partners who understand the Chinese market. This means:
- Accurate cultural adaptation, avoiding misunderstandings in translation
- Understanding user habits and expectations in both markets
- Ability to customize user experience for different markets

### Technology and Localization
- Compliance solutions meeting both Italian GDPR and Chinese data regulations
- Optimized server deployment strategy (European and Asian nodes)
- Support for WeChat ecosystem and Italian local payment systems

## Types of Clients We Serve

### Chinese Businesses in Italy
- Food & Beverage: Chinese restaurants, sushi bars, bubble tea shops
- Retail: Chinese supermarkets, clothing wholesale
- Professional Services: Accounting firms, law offices, TCM clinics

### Italian Local Businesses
- Fashion brands looking to enter the Chinese market
- Tourism services targeting Chinese tourists
- Import/export companies trading with China

## Success Stories

We have helped over 20 Chinese-Italian businesses establish professional online presence:
- Average 200% increase in online inquiries
- Improved user experience, 40% reduction in bounce rate
- Seamless Italian, Chinese, and English language switching

## Why Now is the Best Time

With digital transformation accelerating, businesses without professional websites are losing market share. We offer:
- Free consultation and website diagnostics
- Flexible pricing options
- Ongoing technical support and maintenance

Contact us today to learn how to make your business stand out in both markets.`
    },
    category: {
      zh: '经验分享',
      en: 'Experience Sharing'
    },
    tags: [
      { zh: '意大利', en: 'Italy' },
      { zh: '双语网站', en: 'Bilingual Website' },
      { zh: '华人企业', en: 'Chinese Business' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-12-26',
    readTime: { zh: '10分钟', en: '10 min' },
    thumbnail: '/images/blog/italy-china.jpg',
    featured: true
  },
  {
    id: 17,
    slug: 'restaurant-website-guide-italy',
    title: {
      zh: '意大利餐饮业网站开发完整指南',
      en: 'Complete Guide to Restaurant Website Development in Italy'
    },
    excerpt: {
      zh: '专为意大利餐厅、酒吧和咖啡馆打造的网站开发指南，包含在线预订、菜单展示和本地SEO优化。',
      en: 'Website development guide specifically for Italian restaurants, bars and cafes, including online booking, menu display and local SEO optimization.'
    },
    content: {
      zh: `餐饮业是意大利最具活力的行业之一，而在数字时代，一个专业的网站是吸引顾客的关键。本指南将帮助您了解如何为餐厅创建一个高效的在线形象。

## 餐厅网站的核心功能

### 1. 在线预订系统
- 实时座位可用性显示
- 自动确认邮件和短信
- 与Google日历同步
- 支持团体预订和特殊要求

### 2. 数字菜单展示
- 高质量菜品照片
- 过敏原信息标注
- 价格实时更新
- 多语言支持（意/中/英）

### 3. Google我的商家优化
- 完整的商家信息
- 客户评价管理
- 营业时间和联系方式
- 实时更新特惠信息

## 为什么餐厅需要专业网站

### 数据说明一切
- 80%的顾客在就餐前会在线搜索餐厅
- 有在线预订的餐厅预订量提高60%
- 移动端友好的网站转化率高出3倍

### 竞争优势
在意大利，许多餐厅仍然只依赖Facebook页面或TripAdvisor。拥有专业网站让您：
- 完全控制品牌形象
- 直接与客户建立联系
- 节省第三方平台佣金

## 我们的餐厅网站解决方案

### 套餐包含
- 响应式设计（手机、平板、电脑）
- 在线预订系统集成
- 数字菜单管理后台
- Google我的商家设置
- SEO基础优化
- 一年免费维护

### 成功案例
我们已为米兰、罗马、佛罗伦萨等地的多家餐厅开发网站，帮助他们：
- 在线预订增长150%
- Google搜索排名进入前3
- 社交媒体粉丝增长300%

立即联系我们获取免费咨询和报价。`,
      en: `The food service industry is one of Italy's most dynamic sectors, and in the digital age, a professional website is key to attracting customers. This guide will help you understand how to create an effective online presence for your restaurant.

## Core Features of Restaurant Websites

### 1. Online Booking System
- Real-time table availability display
- Automatic confirmation emails and SMS
- Google Calendar synchronization
- Support for group bookings and special requests

### 2. Digital Menu Display
- High-quality food photography
- Allergen information labeling
- Real-time price updates
- Multilingual support (Italian/Chinese/English)

### 3. Google My Business Optimization
- Complete business information
- Customer review management
- Hours and contact information
- Real-time promotional updates

## Why Restaurants Need Professional Websites

### The Data Speaks
- 80% of customers search for restaurants online before dining
- Restaurants with online booking see 60% more reservations
- Mobile-friendly websites convert 3x better

### Competitive Advantage
In Italy, many restaurants still rely solely on Facebook pages or TripAdvisor. Having a professional website allows you to:
- Have complete control over brand image
- Build direct customer relationships
- Save on third-party platform commissions

## Our Restaurant Website Solutions

### Package Includes
- Responsive design (mobile, tablet, desktop)
- Online booking system integration
- Digital menu management backend
- Google My Business setup
- Basic SEO optimization
- One year free maintenance

### Success Stories
We have developed websites for restaurants in Milan, Rome, Florence and other cities, helping them:
- Increase online bookings by 150%
- Achieve top 3 Google search rankings
- Grow social media followers by 300%

Contact us today for free consultation and quote.`
    },
    category: {
      zh: '经验分享',
      en: 'Experience Sharing'
    },
    tags: [
      { zh: '餐厅网站', en: 'Restaurant Website' },
      { zh: '在线预订', en: 'Online Booking' },
      { zh: '意大利', en: 'Italy' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-12-26',
    readTime: { zh: '12分钟', en: '12 min' },
    thumbnail: '/images/blog/restaurant-web.jpg',
    featured: true
  },
  {
    id: 18,
    slug: 'local-seo-guide-italy',
    title: {
      zh: '意大利本地SEO完整指南：让客户在Google上找到你',
      en: 'Complete Local SEO Guide for Italy: Help Customers Find You on Google'
    },
    excerpt: {
      zh: '针对意大利市场的本地SEO优化策略，帮助中小企业提升Google搜索排名和本地可见度。',
      en: 'Local SEO optimization strategies for the Italian market, helping SMEs improve Google search rankings and local visibility.'
    },
    content: {
      zh: `在意大利，超过90%的消费者使用Google搜索本地服务。如果您的企业没有出现在搜索结果中，您就正在失去大量潜在客户。本指南将教您如何优化本地SEO。

## 什么是本地SEO？

本地SEO是一种搜索引擎优化策略，帮助您的企业在本地搜索中获得更高排名。当用户搜索"米兰中餐厅"或"罗马会计师"时，优化良好的网站会出现在搜索结果顶部。

## Google我的商家：最重要的第一步

### 创建和优化您的商家档案

1. **完整填写所有信息**
   - 准确的企业名称
   - 详细地址和地图标记
   - 营业时间（包括节假日）
   - 电话号码和网站链接

2. **选择正确的类别**
   - 主要类别要精准
   - 添加相关次要类别
   - 定期检查并更新

3. **上传高质量照片**
   - 店面外观和内部环境
   - 产品或服务展示
   - 团队成员照片

### 管理客户评价

- 鼓励满意的客户留下评价
- 及时回复所有评价（好评和差评）
- 专业、友好地处理负面反馈

## 网站本地化优化

### 关键词策略

针对意大利本地市场的关键词优化：
- "服务类型 + 城市名"（如：网站开发米兰）
- "服务类型 + 地区名"（如：Web设计伦巴第）
- 使用意大利语和当地方言变体

### 本地内容创建

- 撰写与本地相关的博客文章
- 展示本地客户案例
- 参与本地活动并报道

## 本地链接建设

### 获取高质量本地反向链接

- 本地商会网站
- 行业协会目录
- 本地新闻媒体报道
- 与其他本地企业合作

## 移动端优化

在意大利，超过70%的本地搜索来自移动设备：
- 确保网站快速加载（3秒内）
- 点击即可拨打电话
- 清晰的地址和导航链接

## 追踪和分析

定期监控以下指标：
- Google我的商家洞察数据
- 网站本地流量
- 关键词排名变化
- 客户来电和询问数量

## 开始您的本地SEO之旅

我们提供专业的意大利市场SEO服务，包括：
- Google我的商家优化
- 本地关键词研究和优化
- 网站本地化改进
- 月度排名报告

联系我们获取免费的SEO诊断报告。`,
      en: `In Italy, over 90% of consumers use Google to search for local services. If your business doesn't appear in search results, you're losing a significant number of potential customers. This guide will teach you how to optimize local SEO.

## What is Local SEO?

Local SEO is a search engine optimization strategy that helps your business rank higher in local searches. When users search for "Chinese restaurant Milan" or "accountant Rome", well-optimized websites appear at the top of search results.

## Google My Business: The Most Important First Step

### Create and Optimize Your Business Profile

1. **Complete All Information**
   - Accurate business name
   - Detailed address and map marker
   - Business hours (including holidays)
   - Phone number and website link

2. **Choose the Right Categories**
   - Primary category should be precise
   - Add relevant secondary categories
   - Check and update regularly

3. **Upload High-Quality Photos**
   - Storefront exterior and interior
   - Product or service showcase
   - Team member photos

### Manage Customer Reviews

- Encourage satisfied customers to leave reviews
- Respond promptly to all reviews (positive and negative)
- Handle negative feedback professionally and friendly

## Website Local Optimization

### Keyword Strategy

Keyword optimization for Italian local market:
- "Service type + city name" (e.g., web development Milan)
- "Service type + region name" (e.g., web design Lombardy)
- Use Italian language and local dialect variants

### Local Content Creation

- Write blog posts related to local topics
- Showcase local customer case studies
- Participate in local events and report on them

## Local Link Building

### Get High-Quality Local Backlinks

- Local chamber of commerce websites
- Industry association directories
- Local news media coverage
- Collaborate with other local businesses

## Mobile Optimization

In Italy, over 70% of local searches come from mobile devices:
- Ensure website loads quickly (within 3 seconds)
- Click-to-call functionality
- Clear address and navigation links

## Tracking and Analysis

Monitor these metrics regularly:
- Google My Business insights
- Website local traffic
- Keyword ranking changes
- Customer calls and inquiries

## Start Your Local SEO Journey

We offer professional SEO services for the Italian market, including:
- Google My Business optimization
- Local keyword research and optimization
- Website localization improvements
- Monthly ranking reports

Contact us for a free SEO diagnostic report.`
    },
    category: {
      zh: '技术分享',
      en: 'Technical Sharing'
    },
    tags: [
      { zh: 'SEO', en: 'SEO' },
      { zh: '本地搜索', en: 'Local Search' },
      { zh: 'Google', en: 'Google' },
      { zh: '意大利', en: 'Italy' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-12-27',
    readTime: { zh: '15分钟', en: '15 min' },
    thumbnail: '/images/blog/local-seo.jpg',
    featured: true
  },
  {
    id: 19,
    slug: 'ecommerce-guide-italy',
    title: {
      zh: '意大利电商网站开发指南：从零开始网上销售',
      en: 'E-commerce Website Development Guide for Italy: Start Selling Online from Scratch'
    },
    excerpt: {
      zh: '完整的意大利电商网站开发指南，涵盖平台选择、支付集成、物流配送和法律合规。',
      en: 'Complete e-commerce website development guide for Italy, covering platform selection, payment integration, logistics and legal compliance.'
    },
    content: {
      zh: `意大利电子商务市场正在快速增长，2024年在线销售额预计将达到540亿欧元。无论您是想扩展现有业务还是创建全新的在线商店，本指南将帮助您了解在意大利开展电商业务的所有关键要素。

## 为什么现在进入意大利电商市场

### 市场数据
- 意大利有4700万互联网用户
- 电商年增长率超过15%
- 移动购物占总销售额的50%以上
- 疫情后消费者在线购物习惯持续增强

### 热门品类
1. 时尚和服装
2. 电子产品
3. 美容和个人护理
4. 食品和杂货
5. 家居用品

## 电商平台选择

### 自建网站 vs 第三方平台

**自建网站优势：**
- 完全控制品牌和用户体验
- 不用支付平台佣金
- 可以收集客户数据
- 更好的SEO表现

**推荐技术栈：**
- WooCommerce（WordPress）
- Shopify
- 自定义React/Next.js方案

## 意大利支付方式集成

### 必须支持的支付方式

1. **信用卡/借记卡**（Visa, Mastercard）- 占交易的约45%
2. **PayPal** - 意大利第二流行的支付方式
3. **Satispay** - 意大利本土移动支付
4. **货到付款（Contrassegno）** - 仍有约10%的用户偏好
5. **银行转账（Bonifico）** - B2B交易常用

## 物流和配送

### 意大利主要快递服务

- **Poste Italiane** - 覆盖全国，成本较低
- **BRT（Bartolini）** - 商业配送首选
- **GLS** - 快速可靠
- **DHL/UPS** - 国际配送

## 法律合规要求

### GDPR合规
- 隐私政策页面
- Cookie同意横幅
- 数据处理协议

### 意大利电商法规
- 14天无条件退货权
- 清晰的价格显示（含税）
- 公司信息披露
- 电子发票要求

## 开始您的电商之旅

我们提供一站式电商解决方案：
- 网站设计和开发
- 支付系统集成
- 物流对接
- SEO优化
- 持续技术支持

联系我们获取免费咨询和定制报价。`,
      en: `The Italian e-commerce market is growing rapidly, with online sales expected to reach €54 billion in 2024. Whether you want to expand an existing business or create a brand new online store, this guide will help you understand all the key elements of running an e-commerce business in Italy.

## Why Enter the Italian E-commerce Market Now

### Market Data
- Italy has 47 million internet users
- E-commerce annual growth rate exceeds 15%
- Mobile shopping accounts for over 50% of total sales
- Post-pandemic online shopping habits continue to strengthen

### Popular Categories
1. Fashion and apparel
2. Electronics
3. Beauty and personal care
4. Food and groceries
5. Home goods

## E-commerce Platform Selection

### Self-built Website vs Third-party Platforms

**Self-built Website Advantages:**
- Complete control over brand and user experience
- No platform commissions
- Can collect customer data
- Better SEO performance

**Recommended Tech Stack:**
- WooCommerce (WordPress)
- Shopify
- Custom React/Next.js solution

## Italian Payment Method Integration

### Must-Have Payment Methods

1. **Credit/Debit Cards** (Visa, Mastercard) - About 45% of transactions
2. **PayPal** - Second most popular in Italy
3. **Satispay** - Italian local mobile payment
4. **Cash on Delivery (Contrassegno)** - Still preferred by about 10%
5. **Bank Transfer (Bonifico)** - Common for B2B

## Logistics and Delivery

### Major Italian Courier Services

- **Poste Italiane** - Nationwide coverage, lower cost
- **BRT (Bartolini)** - Preferred for commercial deliveries
- **GLS** - Fast and reliable
- **DHL/UPS** - International shipping

## Legal Compliance Requirements

### GDPR Compliance
- Privacy policy page
- Cookie consent banner
- Data processing agreements

### Italian E-commerce Regulations
- 14-day unconditional return right
- Clear price display (including tax)
- Company information disclosure
- Electronic invoicing requirements

## Start Your E-commerce Journey

We provide one-stop e-commerce solutions:
- Website design and development
- Payment system integration
- Logistics integration
- SEO optimization
- Ongoing technical support

Contact us for free consultation and custom quote.`
    },
    category: {
      zh: '技术分享',
      en: 'Technical Sharing'
    },
    tags: [
      { zh: '电商', en: 'E-commerce' },
      { zh: '在线销售', en: 'Online Sales' },
      { zh: '意大利', en: 'Italy' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-12-27',
    readTime: { zh: '18分钟', en: '18 min' },
    thumbnail: '/images/blog/ecommerce-italy.jpg',
    featured: false
  },
  {
    id: 20,
    slug: 'website-pricing-guide-2025',
    title: {
      zh: '2025年意大利网站开发价格指南：多少钱能做一个网站？',
      en: 'Website Development Pricing Guide Italy 2025: How Much Does a Website Cost?'
    },
    excerpt: {
      zh: '详细解析意大利市场网站开发的真实价格，从简单展示站到复杂电商平台的费用明细。',
      en: 'Detailed breakdown of real website development prices in the Italian market, from simple showcase sites to complex e-commerce platforms.'
    },
    content: {
      zh: `"做一个网站要多少钱？"这是我们最常收到的问题。答案取决于很多因素，本文将帮助您了解意大利市场网站开发的真实成本。

## 影响网站价格的主要因素

### 1. 网站类型和规模
- 页面数量
- 功能复杂度
- 自定义设计 vs 模板

### 2. 设计要求
- 品牌定制设计
- 响应式设计
- 动画和交互效果

### 3. 功能需求
- 内容管理系统
- 电子商务功能
- 预约/订座系统
- 多语言支持

## 不同类型网站的价格范围

### 单页展示网站（Landing Page）
**价格范围：€500 - €1,500**

适合：新开业的小型企业、活动宣传页面、产品发布页面

### 企业展示网站（5-10页）
**价格范围：€1,500 - €4,000**

适合：中小型企业、专业服务公司、餐厅、美容院等

### 高级企业网站（10-20页）
**价格范围：€4,000 - €8,000**

适合：大型企业、需要博客/新闻功能、多语言网站

### 电子商务网站
**价格范围：€5,000 - €15,000+**

适合：在线零售商、希望线上销售的实体店

### 定制Web应用
**价格范围：€10,000 - €50,000+**

适合：SaaS产品、复杂业务系统、定制化需求

## 我们的定价

| 类型 | 起步价 | 周期 |
|------|--------|------|
| 单页展示站 | €800 | 1-2周 |
| 企业展示站 | €2,000 | 3-4周 |
| 电商网站 | €5,000 | 6-8周 |
| 定制开发 | 面议 | 视项目而定 |

### 我们的优势
- 意中双语服务
- 了解华人企业需求
- 透明定价，无隐藏费用
- 一年免费技术支持

## 如何获取准确报价

1. 联系我们进行免费咨询
2. 描述您的业务和需求
3. 我们提供详细的定制报价

**特别优惠**：现在咨询可获得免费网站诊断和SEO分析报告。`,
      en: `"How much does it cost to build a website?" This is the most common question we receive. The answer depends on many factors, and this article will help you understand the real costs of website development in the Italian market.

## Main Factors Affecting Website Price

### 1. Website Type and Scale
- Number of pages
- Feature complexity
- Custom design vs template

### 2. Design Requirements
- Brand custom design
- Responsive design
- Animations and interactions

### 3. Feature Requirements
- Content management system
- E-commerce functionality
- Booking/reservation system
- Multilingual support

## Price Ranges for Different Website Types

### Single Page Website (Landing Page)
**Price Range: €500 - €1,500**

Suitable for: Newly opened small businesses, event promotion pages, product launch pages

### Business Showcase Website (5-10 pages)
**Price Range: €1,500 - €4,000**

Suitable for: SMEs, professional service firms, restaurants, beauty salons, etc.

### Advanced Business Website (10-20 pages)
**Price Range: €4,000 - €8,000**

Suitable for: Large enterprises, need blog/news functionality, multilingual websites

### E-commerce Website
**Price Range: €5,000 - €15,000+**

Suitable for: Online retailers, physical stores wanting to sell online

### Custom Web Application
**Price Range: €10,000 - €50,000+**

Suitable for: SaaS products, complex business systems, custom requirements

## Our Pricing

| Type | Starting Price | Timeline |
|------|----------------|----------|
| Landing Page | €800 | 1-2 weeks |
| Business Website | €2,000 | 3-4 weeks |
| E-commerce | €5,000 | 6-8 weeks |
| Custom Development | Contact us | Depends on project |

### Our Advantages
- Bilingual Italian-Chinese service
- Understanding of Chinese business needs
- Transparent pricing, no hidden fees
- One year free technical support

## How to Get an Accurate Quote

1. Contact us for free consultation
2. Describe your business and needs
3. We provide detailed custom quote

**Special Offer**: Contact us now to receive a free website diagnostic and SEO analysis report.`
    },
    category: {
      zh: '经验分享',
      en: 'Experience Sharing'
    },
    tags: [
      { zh: '价格', en: 'Pricing' },
      { zh: '网站开发', en: 'Web Development' },
      { zh: '意大利', en: 'Italy' },
      { zh: '2025', en: '2025' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-12-28',
    readTime: { zh: '12分钟', en: '12 min' },
    thumbnail: '/images/blog/website-cost.jpg',
    featured: true
  },
  {
    id: 21,
    slug: 'small-business-website-guide',
    title: {
      zh: '意大利小企业为什么需要专业网站？',
      en: 'Why Do Small Businesses in Italy Need a Professional Website?'
    },
    excerpt: {
      zh: '探讨意大利中小企业拥有专业网站的重要性，以及如何通过网络存在提升竞争力。',
      en: 'Exploring the importance of professional websites for Italian SMEs and how to improve competitiveness through online presence.'
    },
    content: {
      zh: `在意大利，许多小企业主仍然认为"我们主要靠口碑和回头客，不需要网站"。然而，数字化时代已经彻底改变了消费者寻找和选择服务的方式。

## 消费者行为的变化

### 数据说明问题
- 97%的消费者在购买本地服务前会在线搜索
- 70%的购买决策从Google搜索开始
- 88%的消费者在找到企业信息后会在24小时内致电或访问

### 没有网站意味着什么？
- 您正在将客户推向竞争对手
- 您的企业看起来不够专业
- 您错失了24/7全天候展示机会

## 专业网站的商业价值

### 1. 建立信任和专业形象
一个设计精良的网站传达：您认真对待业务、您是行业中可信赖的选择、您重视客户体验

### 2. 全天候营业
与实体店不同，您的网站从不关门：客户可以随时了解您的服务、在线预约减少人工接听电话

### 3. 扩大服务范围
不再局限于步行距离内的客户：触及整个城市的潜在客户、吸引游客和新居民

### 4. 成本效益高的营销
相比传统广告，网站是最划算的投资：一次投资，长期受益、可追踪的营销效果

## 成功案例

### 案例一：米兰中餐馆
**问题**：主要依靠口碑，新客户增长缓慢
**结果**：6个月内新客户增加200%

### 案例二：普拉托服装批发
**问题**：只能通过电话和微信接单
**结果**：减少80%的产品咨询时间，意大利客户增加50%

### 案例三：罗马会计事务所
**问题**：客户主要是华人圈介绍
**结果**：6个月内网站询盘翻倍，成功吸引意大利本地客户

## 常见顾虑解答

### "我不会管理网站"
现代网站管理非常简单，而且我们提供简单易用的后台系统和持续技术支持。

### "我负担不起"
基础展示网站从€800起，投资回报率通常超过500%。

### "我的客户不上网"
60岁以上意大利人中65%使用互联网，即使客户不直接上网，他们的家人会帮他们搜索。

## 开始您的网站项目

我们专门服务意大利的中小企业：
- 免费咨询和需求分析
- 多种预算方案选择
- 快速上线（最快2周）
- 完善的售后支持

**首次咨询免费**：我们将分析您的业务，提供网站规划建议和竞争对手分析。

立即联系我们，让您的企业在网上被找到！`,
      en: `In Italy, many small business owners still believe "we mainly rely on word of mouth and repeat customers, we don't need a website." However, the digital age has completely changed how consumers find and choose services.

## Changes in Consumer Behavior

### The Data Speaks
- 97% of consumers search online before buying local services
- 70% of purchase decisions start with a Google search
- 88% of consumers will call or visit within 24 hours of finding business information

### What Does Not Having a Website Mean?
- You're pushing customers to competitors
- Your business appears less professional
- You're missing 24/7 showcase opportunities

## Business Value of Professional Websites

### 1. Building Trust and Professional Image
A well-designed website communicates: You take your business seriously, you're a trustworthy choice, you value customer experience

### 2. Open 24/7
Unlike physical stores, your website never closes: Customers can learn about your services anytime, online booking reduces workload

### 3. Expanding Service Range
No longer limited to customers within walking distance: Reach potential customers across the city, attract tourists and new residents

### 4. Cost-Effective Marketing
Compared to traditional advertising, websites are the best investment: One-time investment, long-term benefits, trackable results

## Success Stories

### Case 1: Milan Chinese Restaurant
**Problem**: Mainly relied on word of mouth, slow new customer growth
**Results**: 200% increase in new customers within 6 months

### Case 2: Prato Clothing Wholesale
**Problem**: Could only take orders via phone and WeChat
**Results**: 80% reduction in inquiry time, 50% increase in Italian customers

### Case 3: Rome Accounting Firm
**Problem**: Clients mainly from Chinese community referrals
**Results**: Website inquiries doubled in 6 months, attracted local Italian clients

## Common Concerns Addressed

### "I Can't Manage a Website"
Modern website management is very simple, and we provide easy-to-use backend and ongoing support.

### "I Can't Afford It"
Basic showcase websites from €800, ROI typically exceeds 500%.

### "My Customers Don't Use the Internet"
65% of Italians over 60 use the internet. Even if customers don't go online, their family searches for them.

## Start Your Website Project

We specialize in serving SMEs in Italy:
- Free consultation and needs analysis
- Multiple budget options
- Fast launch (as quick as 2 weeks)
- Comprehensive after-sales support

**First Consultation Free**: We'll analyze your business, provide website planning advice and competitor analysis.

Contact us now to get your business found online!`
    },
    category: {
      zh: '经验分享',
      en: 'Experience Sharing'
    },
    tags: [
      { zh: '小企业', en: 'Small Business' },
      { zh: '数字化', en: 'Digitalization' },
      { zh: '意大利', en: 'Italy' }
    ],
    author: {
      zh: '独立开发者',
      en: 'Independent Developer'
    },
    date: '2024-12-28',
    readTime: { zh: '10分钟', en: '10 min' },
    thumbnail: '/images/blog/small-business.jpg',
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

// 搜索文章（标题、摘要、标签）
export const searchPosts = (query, language = 'zh') => {
  if (!query || query.trim() === '') return blogPosts

  const searchTerm = query.toLowerCase().trim()

  return blogPosts.filter(post => {
    const title = post.title[language]?.toLowerCase() || ''
    const excerpt = post.excerpt[language]?.toLowerCase() || ''
    const tags = post.tags.map(tag => tag[language]?.toLowerCase() || '').join(' ')
    const category = post.category[language]?.toLowerCase() || ''

    return (
      title.includes(searchTerm) ||
      excerpt.includes(searchTerm) ||
      tags.includes(searchTerm) ||
      category.includes(searchTerm)
    )
  })
}
