/**
 Parse Web Safe Fonts Data from http://www.cssfontstack.com/
*/

const cheerio = require('cheerio');
const fetch = require('node-fetch');
const fs = require('fs');

const url = 'http://www.cssfontstack.com/';
const file =  __dirname + '/../list.json';

fetch(url).then((res) => res.text()).then((body) => {
    const $ = cheerio.load(body);
    const types = [
        'sans-serif',
        'serif',
        'monospaced',
        'fantasy',
        'script'
    ];

    let list = [];

    types.forEach((type) => {
        let $block = $('#dashboard-' + type);
        $block.children('.ow-server').each((i, elem) => {
            let $elem = $(elem);
            let $h4 = $elem.find('h4').first();
            let generic = $h4.find('i.copy').first().attr('title').replace('font-family:', '').split(',').map((item) => {
                return item.trim().replace(/(^\")|(\"$)/g, '');
            }).slice(1);

            list.push({
                family: $h4.find('a').first().text(),
                generic: generic,
                type: type,
                share: {
                    mac: parseFloat($elem.find('.fa-apple').first().parent().text().trim().replace(/[^(\d+(\.\d+)?)]/g, '')),
                    win: parseFloat($elem.find('.fa-windows').first().parent().text().trim().replace(/[^(\d+(\.\d+)?)]/g, ''))
                }
            });
        });
    });

    fs.writeFile(file, JSON.stringify(list), function (err) {
        if (err) throw err;
        console.error("List was successfully updated!")
    });

});
