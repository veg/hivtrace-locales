// Verifies en.json and es.json parse, have the same keys and the same {{placeholders}}.
const fs = require('fs');
function flat(o, p = '', out = {}) {
  for (const [k, v] of Object.entries(o)) {
    if (v && typeof v === 'object') flat(v, p + k + '.', out);
    else out[p + k] = v;
  }
  return out;
}
const en = flat(JSON.parse(fs.readFileSync(__dirname + '/en.json', 'utf8')));
const es = flat(JSON.parse(fs.readFileSync(__dirname + '/es.json', 'utf8')));
const ph = (s) => (String(s).match(/{{\s*[\w.]+\s*}}/g) || []).sort().join(',');
const errors = [];
for (const k of Object.keys(en)) {
  if (!(k in es)) errors.push('missing in es: ' + k);
  else if (ph(en[k]) !== ph(es[k])) errors.push('placeholder mismatch: ' + k);
}
for (const k of Object.keys(es)) if (!(k in en)) errors.push('missing in en: ' + k);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('ok: ' + Object.keys(en).length + ' keys, placeholders match');
