# 页面合并实施计划

## 概述
合并三组功能重复的页面，简化网站结构，提升用户体验。

---

## 一、Pricing + Quote 合并

### 目标
创建带标签切换的单一报价页面，包含"套餐选择"和"自定义报价"两种模式。

### 修改文件

#### 1. `src/pages/Pricing/Pricing.jsx` (重构)
- 添加标签切换状态 `activeTab: 'packages' | 'custom'`
- 支持 URL 参数 `?tab=custom` 切换到自定义报价
- 将原 Quote 页面逻辑整合为 `renderCustomQuote()` 函数
- 保留 PDF 导出功能（从 Quote 页面）

#### 2. `src/pages/Pricing/Pricing.css`
- 合并 Quote.css 样式
- 添加标签切换器样式 `.pricing-tabs`

#### 3. `src/App.jsx`
- 删除 Quote lazy import
- 添加重定向: `/quote` → `/pricing?tab=custom`

#### 4. `src/components/layout/Header.jsx`
- 从 navItems 中删除 quote 路由

#### 5. `src/locales/*/common.json` (zh/en/it)
- 删除 nav.quote 和 footer.quote

#### 6. 删除文件
- `src/pages/Quote/Quote.jsx`
- `src/pages/Quote/Quote.css`

---

## 二、About + Team 合并

### 目标
将 Team 页面的详细团队信息整合到 About 页面。

### 修改文件

#### 1. `src/pages/About/About.jsx`
- 扩展团队区域，显示完整信息（bio、skills、social）
- 添加 "加入我们" CTA

#### 2. `src/pages/About/About.css`
- 合并 Team.css 中的样式（头像、技能条、社交链接）

#### 3. `src/App.jsx`
- 删除 Team lazy import
- 添加重定向: `/team` → `/about`

#### 4. 删除文件
- `src/pages/Team/Team.jsx`
- `src/pages/Team/Team.css`

---

## 三、Portfolio + Demos 合并

### 目标
将 Demos 作为 Portfolio 的一个"模板"分类展示。

### 修改文件

#### 1. `src/data/portfolio.js`
- 在 categories 添加 `template` 分类

#### 2. `src/pages/Portfolio/Portfolio.jsx`
- 导入 demos 数据
- 当选择 template 分类时显示 demos
- Demo 卡片链接到 `/demo/{slug}`

#### 3. `src/pages/Portfolio/Portfolio.css`
- 添加 demo 卡片样式（如需）

#### 4. `src/App.jsx`
- 删除 Demos lazy import
- 添加重定向: `/demos` → `/portfolio?category=template`

#### 5. 删除文件
- `src/pages/Demos/Demos.jsx`
- `src/pages/Demos/Demos.css`

---

## 执行顺序

1. **Pricing + Quote** - 最独立，可先完成
2. **About + Team** - 简单内容合并
3. **Portfolio + Demos** - 需处理不同数据结构

---

## 验证清单

- [ ] 旧 URL 正确重定向
- [ ] 导航菜单更新
- [ ] 三语言正常
- [ ] PDF 导出功能正常
- [ ] Demo 链接可用
- [ ] `npm run build` 成功
