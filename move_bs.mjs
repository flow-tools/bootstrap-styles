import fs from 'node:fs/promises'

await fs.rm('./dist', {recursive: true, force: true})
await fs.rm('./css', {recursive: true, force: true})
await fs.rm('./scss', {recursive: true, force: true})

fs.cp(`./node_modules/bootstrap/dist/css`, './css', {recursive: true})
fs.cp(`./node_modules/bootstrap/scss`, './scss', {recursive: true})

