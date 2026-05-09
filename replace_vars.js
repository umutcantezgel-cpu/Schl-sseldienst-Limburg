const fs = require('fs');
const path = require('path');

const replacements = {
    'var(--color-surface-subtle)': 'var(--color-surface-elevated)',
    'var(--color-text-primary)': 'var(--color-text-main)',
    'var(--color-text-muted)': 'var(--color-text-body)',
    'var(--color-navy-900)': 'var(--color-blue-dark)',
    'var(--color-navy-800)': 'var(--color-blue-dark)',
    'var(--color-navy-700)': 'var(--color-gray-muted)',
    'var(--color-brand)': 'var(--color-blue-primary)',
    'var(--color-border)': 'var(--color-border-subtle)',
};

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        if (file === 'node_modules' || file === '.next' || file === '.git') return;
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('.');
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content;
    
    for (const [oldVar, newVar] of Object.entries(replacements)) {
        newContent = newContent.split(oldVar).join(newVar);
    }
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        changedFiles++;
        console.log('Updated: ' + file);
    }
});

console.log('Total files updated: ' + changedFiles);
