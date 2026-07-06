const fs = require('fs');
let c = fs.readFileSync('data/listening.js', 'utf8');
c = c.replace(/\r\n/g, '\n');

// Find all section markers
const markers = ['DIALOGUE EXERCISES', 'SPEED LISTENING', 'SHADOWING EXERCISES', 'MINIMAL PAIRS'];
markers.forEach(m => {
    const idx = c.indexOf(m);
    console.log(m + ' at:', idx);
    if (idx > 0) console.log('  before:', JSON.stringify(c.substring(Math.max(0,idx-60), idx)));
});
console.log('Lines:', c.split('\n').length);
