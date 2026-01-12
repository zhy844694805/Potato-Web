# PM2 进程管理使用指南

本项目已配置使用 PM2 进行进程管理，并设置了开机自启。

## 当前配置

- **应用名称**: tech-agency-portfolio
- **运行模式**: 生产模式 (npm run preview)
- **端口**: 5173
- **自动重启**: 已启用
- **开机自启**: 已启用 (通过 systemd)

## 常用命令

### 查看应用状态
```bash
pm2 status
pm2 list
```

### 查看详细信息
```bash
pm2 info tech-agency-portfolio
```

### 查看日志
```bash
# 实时查看日志
pm2 logs tech-agency-portfolio

# 查看最近 100 行日志
pm2 logs tech-agency-portfolio --lines 100

# 清空日志
pm2 flush
```

### 控制应用
```bash
# 重启应用
pm2 restart tech-agency-portfolio

# 停止应用
pm2 stop tech-agency-portfolio

# 启动应用
pm2 start tech-agency-portfolio

# 删除应用（不推荐，除非要完全移除）
pm2 delete tech-agency-portfolio
```

### 性能监控
```bash
# 实时监控 CPU 和内存使用
pm2 monit

# 显示进程信息
pm2 show tech-agency-portfolio
```

### 保存配置
每次修改 PM2 进程后，记得保存配置以确保开机自启：
```bash
pm2 save
```

## 更新应用

当代码更新后，执行以下步骤：

```bash
# 1. 进入项目目录
cd /home/claude/tech-agency-portfolio

# 2. 拉取最新代码（如果使用 git）
git pull

# 3. 安装依赖（如有新依赖）
npm install

# 4. 构建生产版本
npm run build

# 5. 重启应用
pm2 restart tech-agency-portfolio

# 6. 保存配置
pm2 save
```

## Systemd 服务管理

PM2 通过 systemd 服务实现开机自启：

```bash
# 查看服务状态
sudo systemctl status pm2-claude

# 启动服务
sudo systemctl start pm2-claude

# 停止服务
sudo systemctl stop pm2-claude

# 重启服务
sudo systemctl restart pm2-claude

# 禁用开机自启
sudo systemctl disable pm2-claude

# 启用开机自启
sudo systemctl enable pm2-claude
```

## 配置文件

- **PM2 配置**: `/home/claude/tech-agency-portfolio/ecosystem.config.cjs`
- **Systemd 服务**: `/etc/systemd/system/pm2-claude.service`
- **日志文件**: `/home/claude/.pm2/logs/`

## 故障排查

### 应用无法启动
```bash
# 查看错误日志
pm2 logs tech-agency-portfolio --err

# 手动测试构建
cd /home/claude/tech-agency-portfolio
npm run preview
```

### 端口被占用
```bash
# 查看端口占用
sudo lsof -i :5173
# 或
sudo ss -tulpn | grep 5173
```

### 重置 PM2
```bash
# 停止所有进程
pm2 kill

# 重新启动
pm2 start ecosystem.config.cjs
pm2 save
```

## 访问应用

应用运行后可通过以下地址访问：

- **本地**: http://localhost:5173
- **局域网**: http://<服务器IP>:5173

## 卸载开机自启

如果需要移除开机自启：

```bash
# 1. 停止 PM2 服务
pm2 kill

# 2. 移除 systemd 服务
pm2 unstartup systemd
sudo systemctl stop pm2-claude
sudo systemctl disable pm2-claude
sudo rm /etc/systemd/system/pm2-claude.service
sudo systemctl daemon-reload
```
