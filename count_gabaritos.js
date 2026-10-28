const fs = require('fs');
const files = [
  'apostila-ia/assets/data/questions.js',
  'apostila-ia/assets/data/questions_m4.js',
  'apostila-ia/assets/data/questions_m5.js',
  'apostila-ia/assets/data/questions_m6.js',
  'apostila-ia/assets/data/questions_m7.js',
  'apostila-ia/assets/data/questions_m8.js',
];
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  const regex = /gabarito:\s*"([A-E])"/g;
  const letras = {};
  let m, total = 0;
  while ((m = regex.exec(src)) !== null) { letras[m[1]] = (letras[m[1]]||0)+1; total++; }
  console.log(f + ' | total=' + total + ' | letras=' + JSON.stringify(letras));
}
