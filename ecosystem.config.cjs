module.exports = {
  apps: [{
    name: 'tech-agency-portfolio',
    script: 'npm',
    args: 'run preview',
    cwd: '/home/claude/tech-agency-portfolio',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 5173
    },
    error_file: '/home/claude/.pm2/logs/tech-agency-error.log',
    out_file: '/home/claude/.pm2/logs/tech-agency-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    min_uptime: '10s',
    max_restarts: 10
  }]
};
