const fs = require('fs');
const path = require('path');

const root = __dirname;
const distDir = path.join(root, 'dist');
const publicDir = path.join(root, 'public');

[distDir, publicDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.copyFileSync(path.join(root, 'index.html'), path.join(dir, 'index.html'));
});

console.log('✅ Build successful! index.html copied to dist/ and public/');
