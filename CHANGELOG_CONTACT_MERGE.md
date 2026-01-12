# 联系功能合并更新日志

## 更新时间
2026-01-06

## 更改概述
将原本独立的"联系我们"浮动按钮功能合并到AI助手弹窗中，统一用户体验并减少页面右下角的重复按钮。

## 主要更改

### 1. ChatWidget 组件增强 (`src/components/ui/ChatWidget.jsx`)

#### 新增功能：
- **标签页系统**：添加了两个标签页
  - FAQ标签：显示常见问题和AI助手对话
  - 联系方式标签：显示完整的联系信息

#### 集成的联系功能：
- 微信联系区域
  - 微信二维码显示
  - 微信号显示和复制功能
- 电话联系区域
  - 可点击的电话号码链接
- 邮箱联系区域
  - 可点击的邮箱链接
- 预约咨询区域
  - 集成 BookingWidget 组件
- 响应时间提示

#### 更新的翻译：
- 添加了新的中英意三语翻译键
  - 联系方式标签相关文本
  - 各联系区块的标题
  - 按钮文本等

### 2. ChatWidget 样式更新 (`src/components/ui/ChatWidget.css`)

#### 新增样式类：
- `.chat-panel__tabs` - 标签导航容器
- `.chat-panel__tab` - 单个标签按钮
- `.chat-panel__tab--active` - 激活状态的标签
- `.chat-panel__content` - 标签内容容器
- `.chat-panel__contact-info` - 联系信息区域
- `.contact-section` - 单个联系区块
- `.contact-section__header` - 联系区块标题
- `.contact-section__content` - 联系区块内容
- `.wechat-qr` - 微信二维码容器
- `.wechat-qr-fallback` - 二维码加载失败时的占位符
- `.wechat-id` - 微信号显示
- `.contact-btn` - 联系按钮基础样式
- `.contact-btn--wechat/phone/email` - 不同类型的联系按钮
- `.contact-footer` - 联系区域底部
- `.response-badge` - 响应时间徽章

#### 样式特性：
- 完整的深色模式支持
- 流畅的过渡动画
- 响应式设计
- 悬停状态效果
- 无障碍设计（减少动画）

### 3. App.jsx 清理

#### 移除内容：
- 删除了 `ContactDrawer` 组件的导入
- 删除了 `ContactDrawer` 组件的渲染

#### 结果：
- 页面右下角只保留一个AI助手/联系我们按钮
- 用户界面更加简洁统一

## 用户体验改进

### 优点：
1. **减少视觉混乱**：从两个浮动按钮减少到一个
2. **功能集中**：所有客户支持功能（FAQ + 联系方式）集中在一处
3. **易于发现**：标签页设计让两类功能都容易访问
4. **保留功能**：所有原有的联系功能都被完整保留
5. **改进的按钮文案**：浮动按钮文本从"打开聊天"改为"联系我们"，更直观

### 使用流程：
1. 用户点击右下角的"联系我们"按钮
2. 弹窗打开，默认显示FAQ标签
3. 用户可以：
   - 在FAQ标签中查看常见问题并获得答案
   - 切换到"联系方式"标签查看完整联系信息
   - 直接拨打电话、发送邮件或复制微信号
   - 使用预约按钮安排咨询

## 技术细节

### 依赖关系：
- 新增依赖：`BookingWidget` 组件
- 保留依赖：`Toast` 组件（用于复制反馈）
- 配置依赖：`siteConfig`（联系信息来源）

### 状态管理：
- `activeTab` - 当前激活的标签（'faq' 或 'contact'）
- 保留原有的消息状态和欢迎消息逻辑

### 多语言支持：
- 完整的中文、英文、意大利语支持
- 所有新增UI元素都有三语翻译

## 文件修改清单

### 修改的文件：
1. `src/components/ui/ChatWidget.jsx` - 功能扩展
2. `src/components/ui/ChatWidget.css` - 样式增强
3. `src/App.jsx` - 移除 ContactDrawer

### 未修改但相关的文件：
- `src/components/ui/ContactDrawer.jsx` - 保留但不再使用
- `src/components/ui/ContactDrawer.css` - 保留但不再使用
- `src/config/site.js` - 联系信息配置（继续使用）

### 构建和部署：
- 项目已重新构建
- PM2 服务已重启并保存配置
- 应用正常运行在 http://localhost:5173

## 后续建议

### 可选的清理：
如果确认新功能完全满足需求，可以考虑：
1. 删除 `src/components/ui/ContactDrawer.jsx`
2. 删除 `src/components/ui/ContactDrawer.css`

### 可能的改进：
1. 添加更多FAQ问题
2. 在联系方式标签中添加更多联系选项（如WhatsApp、Telegram等）
3. 添加联系表单直接在弹窗中提交
4. 添加在线客服聊天功能（如对接第三方客服系统）

## 测试建议

### 测试项目：
- [ ] 点击浮动按钮能正常打开/关闭弹窗
- [ ] FAQ标签正常显示并能点击问题获得答案
- [ ] 联系方式标签能正常切换
- [ ] 所有联系按钮（电话、邮箱、微信）功能正常
- [ ] 预约按钮能正常打开Calendly
- [ ] 微信号复制功能正常并显示提示
- [ ] 三种语言切换正常显示
- [ ] 深色模式下样式正常
- [ ] 移动端响应式布局正常
- [ ] 无障碍功能正常（键盘导航等）

## 回滚方案

如需回滚到之前的版本：

```bash
# 1. 恢复 App.jsx 中的 ContactDrawer
git checkout HEAD~1 src/App.jsx

# 2. 恢复原始的 ChatWidget
git checkout HEAD~1 src/components/ui/ChatWidget.jsx
git checkout HEAD~1 src/components/ui/ChatWidget.css

# 3. 重新构建和重启
npm run build
pm2 restart tech-agency-portfolio
pm2 save
```
