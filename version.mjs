import fs from 'node:fs/promises'

let data = await fs.readFile(`./package.json`, 'utf8')
const pkg = JSON.parse(data)
const version = pkg.devDependencies.bootstrap
console.log('version', version)
data = data.replace(/"version": ".*"/, `"version": "${version}"`)
await fs.writeFile(`./package.json`, data, 'utf8')
