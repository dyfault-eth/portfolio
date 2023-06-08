export const cryptoPriceBash = `# /bin/sh
while true
do
echo Starting dapp script
node crypto-price.js
echo Restarting dapp script in 5 Seconds...
sleep 5
done`

export const cryptoPriceJS = `const fs = require('fs');

async function getPrice() {

    const crypto = ["bitcoin", "ethereum", "matic-network", "chainlink"]

    for (let i = 0; i < crypto.length; i++) {
        let response = await fetch(
            \`https://api.coingecko.com/api/v3/simple/price?ids=$\{crypto[i]}&vs_currencies=usd\`
        );
        let data = await response.json();
        let price = data[crypto[i]].usd;

        console.log(price);

        fs.writeFile(\`../build/json-file/$\{crypto[i]}.json\`, JSON.stringify(data), function(err) {
            if (err) {
                return console.log(err);
            }
            console.log(\`crypto $\{crypto[i]} successfully saved\`);
        })
    }

}

setInterval(async function() {
    getPrice()
}, 420000)`

export const btcHistBash = `# /bin/sh
while true
do
echo Starting dapp script
node btc-call-api.js
echo Restarting dapp script in 5 Seconds...
sleep 5
done
`

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