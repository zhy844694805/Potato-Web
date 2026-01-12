#!/bin/bash

# Setup Nginx and SSL for aimodel.it
# This script requires sudo privileges

set -e

echo "🔧 Setting up Nginx configuration..."

# Copy Nginx configuration
sudo cp /home/claude/tech-agency-portfolio/aimodel.it.conf /etc/nginx/sites-available/aimodel.it

# Create symbolic link to enable site
sudo ln -sf /etc/nginx/sites-available/aimodel.it /etc/nginx/sites-enabled/aimodel.it

# Remove default site if exists
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
echo "🧪 Testing Nginx configuration..."
sudo nginx -t

# Restart Nginx
echo "🔄 Restarting Nginx..."
sudo systemctl restart nginx
sudo systemctl enable nginx

# Check if Nginx is running
echo "✅ Nginx status:"
sudo systemctl status nginx --no-pager -l

echo ""
echo "✅ Nginx configured successfully!"
echo ""
echo "🔐 Now obtaining SSL certificate..."
echo ""

# Obtain SSL certificate
sudo certbot --nginx -d aimodel.it -d www.aimodel.it --non-interactive --agree-tos --register-unsafely-without-email --redirect

echo ""
echo "✅ SSL certificate obtained and configured!"
echo ""
echo "🔄 Final Nginx restart..."
sudo systemctl restart nginx

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Your website is now available at:"
echo "  - https://aimodel.it"
echo "  - https://www.aimodel.it"
echo ""
echo "SSL certificate will auto-renew via certbot timer."
