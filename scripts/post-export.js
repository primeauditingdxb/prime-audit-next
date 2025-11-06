// Copies public/uploads -> out/uploads after `next export`
// Usage: node scripts/post-export.js

const fs = require('fs')
const path = require('path')

function copyFolderSync(src, dest) {
  if (!fs.existsSync(src)) return
  fs.mkdirSync(dest, { recursive: true })
  const entries = fs.readdirSync(src, { withFileTypes: true })
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      copyFolderSync(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

const root = process.cwd()
const uploadsSrc = path.join(root, 'public', 'uploads')
const uploadsDest = path.join(root, 'out', 'uploads')

try {
  copyFolderSync(uploadsSrc, uploadsDest)
  console.log(`Copied uploads: ${uploadsSrc} -> ${uploadsDest}`)
} catch (err) {
  console.error('Error copying uploads', err)
  process.exit(1)
}
