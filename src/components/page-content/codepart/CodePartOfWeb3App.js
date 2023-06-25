export const cryptoPriceCron = `0,30 * * * * node /var/www/dapp/script/crypto-price.js >> /var/www/dapp/script/log/crypto-price.log 2>&1`

export const cryptoPriceJS = `const fs = require('fs');
const path = require('path');

const red = '\\x1b[31m'
const blue = '\\x1b[34m'
const green = '\\x1b[32m'
const reset = '\\x1b[0m'

async function getPrice() {

    const crypto = ["bitcoin", "ethereum", "matic-network", "chainlink", "monero"]

    for (let i = 0; i < crypto.length; i++) {
        try {
            let response = await fetch(
                \`https://api.coingecko.com/api/v3/simple/price?ids=\${crypto[i]}&vs_currencies=usd\`
            );
            let data = await response.json();
            let price = data[crypto[i]].usd;

            console.log(price);

            fs.writeFile(path.join(__dirname, '../build/json-file', \`\${crypto[i]}.json\`), JSON.stringify(data), function(err) {
                if (err) {
                    return console.log(\`\${red}\${err}\${reset}\`);
                }
                console.log(\`\${green}crypto \${crypto[i]} successfully saved\${reset}\`);
            })
        } catch (e) {
            console.log(\`\${red}\${e}\${reset}\`)
        }
    }

}

const date = new Date();
const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0');
const year = date.getFullYear();
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');

console.log(\`\${blue}\${day}/\${month}/\${year} \${hours}:\${minutes}:\${seconds}\${reset}\`)

getPrice()`

export const logFile = `^[[34m25/06/2023 16:30:07^[[0m
^[[31mTypeError: Cannot read properties of undefined (reading 'usd')^[[0m
^[[31mTypeError: Cannot read properties of undefined (reading 'usd')^[[0m
^[[31mTypeError: Cannot read properties of undefined (reading 'usd')^[[0m
^[[31mTypeError: Cannot read properties of undefined (reading 'usd')^[[0m
^[[31mTypeError: Cannot read properties of undefined (reading 'usd')^[[0m
^[[34m25/06/2023 17:00:03^[[0m
30594
^[[32mcrypto bitcoin successfully saved^[[0m
1893.79
^[[32mcrypto ethereum successfully saved^[[0m
0.670255
^[[32mcrypto matic-network successfully saved^[[0m
6.22
^[[32mcrypto chainlink successfully saved^[[0m
160.39
^[[32mcrypto monero successfully saved^[[0m`

export const btcHistBash = `# /bin/sh
while true
do
echo Starting dapp script
node btc-call-api.js
echo Restarting dapp script in 5 Seconds...
sleep 5
done`

export const btcHistJS = `const fs = require('fs');

async function fetchBtc() {

    console.log('running btc call daily')

    const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily"
    );
    const data = await response.json();
    console.log(data);

    fs.writeFile('../build/json-file/btchist.json', JSON.stringify(data), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("file btc history saved")
    });
}

setInterval(async function() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let now = hour + ":" + minute + ":" + second;

    let update = \`1:0:0\`

    if (now === update) {
        fetchBtc();
    }
}, 1000)`

export const fearHistBash = `# /bin/sh
while true
do
echo Starting dapp script
node fear-call-api.js
echo Restarting dapp script in 5 Seconds...
sleep 5
done`

export const fearHistJS = `const fs = require('fs');


async function fetchFear() {

    console.log('running fear call daily')

    const response = await fetch(
        "https://api.alternative.me/fng/?limit=7&format=json&date_format=world"
    );
    const data = await response.json();
    console.log(data);

    fs.writeFile('../build/json-file/fearhist.json', JSON.stringify(data), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("file fear history saved")
    });
}

setInterval(async function() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let now = hour + ":" + minute + ":" + second;

    let update = \`1:0:0\`

    if (now === update) {
        fetchFear();
    }
}, 1000)`

export const cryptoPriceFront = `export const fetchPrice = async(token) => {
    let nPrice = 0
    let date = new Date().getTime

    try {

        const response = await fetch(\`/json-file/$\{token}.json?$\{date}\`);
        const data = await response.json();
        const price = data[token]['usd'];

        if (token === "for-loot-and-glory" || token === "crypto-com-chain") {
            nPrice = Number(price).toFixed(3)
        } else {
            nPrice = price
        }

        return nPrice;

    } catch (error) {
        console.log(error);
        return nPrice = 0;
    }
};`