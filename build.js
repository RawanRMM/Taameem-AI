// Build: injects the logo images into src/proto.template.html and writes index.html (a single standalone file).
// Run: node build.js   (Node 18+; no dependencies)
const fs = require('fs');
const path = require('path');
const D = __dirname;
const A = path.join(D, 'assets');
const dataUri = f => 'data:image/png;base64,' + fs.readFileSync(path.join(A, f)).toString('base64');
let html = fs.readFileSync(path.join(D, 'src', 'proto.template.html'), 'utf8').replace(/^﻿/, '');
html = html.replace('/*__LOGO_LIGHT__*/', () => dataUri('logo-light.png')).replace('/*__LOGO_DARK__*/', () => dataUri('logo-dark.png')).replace('/*__MARK__*/', () => dataUri('mark.png'));
fs.writeFileSync(path.join(D, 'index.html'), `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<meta name="robots" content="noindex">\n</head>\n<body>\n${html}\n</body>\n</html>\n`);
fs.writeFileSync(path.join(D, 'mobile.html'), `<!doctype html>\n<html lang="en" class="mobile">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<meta name="robots" content="noindex">\n</head>\n<body>\n${html.replace('/*__MOBILE__*/false', 'true')}\n</body>\n</html>\n`);
console.log('built index.html + mobile.html:', (html.length / 1024).toFixed(0), 'KB');
