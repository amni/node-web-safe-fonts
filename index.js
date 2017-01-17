const list = require('./list.json');

const types = [
    'sans-serif',
    'serif',
    'monospaced',
    'fantasy',
    'script'
];

const webSafeFonts = (type) => {
    if (typeof type == 'undefined') {
        return list;
    }
    let _type = type.trim().toLowerCase();
    if (types.indexOf(type) != -1) {
        return list.filter((item) => item.type == _type);
    }
    return [];
};

module.exports = webSafeFonts;
module.exports.list = list;
