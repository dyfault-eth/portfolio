export const BitcoinBotWeeklyChart = `setInterval(async function() {
        
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let now = \`$\{day}/$\{month}/$\{year} $\{hour}:$\{minute}:$\{second}\`
    let update = \`$\{day}/$\{month}/$\{year} 10:30:0\`

    if (now == update) {
    
        console.log("starting create chart")
        let bitcoin = await coingeckoclient.coins.fetchMarketChart('bitcoin', {
            vs_currency: 'usd',
            days: '7',
            interval: 'daily',
        });
        let bitcoinPrices = bitcoin.data.prices;
        let bitcoinPricesArr = [];
        let bitcoinTimearr = [];
        let dateArr = [];
        let dateArrFormat = [];

        for (let i = 0; i < 7; i++) {
            bitcoinTimearr.push(bitcoinPrices[i][0]);
            bitcoinPricesArr.push(bitcoinPrices[i][1]);
        }

        for (let i = 0; i < 7; i++) {
            dateArr[i] = new Date(bitcoinTimearr[i])
            dateArrFormat[i] = dateArr[i].getDate() + "/" + ( dateArr[i].getMonth() + 1 )+ "/" + (dateArr[i].getFullYear() % 100);
        }

        const mychart = ChartJSImage().chart({
            'type': 'line',
            'data': {
                'labels': [
                    dateArrFormat[0],
                    dateArrFormat[1],
                    dateArrFormat[2],
                    dateArrFormat[3],
                    dateArrFormat[4],
                    dateArrFormat[5],
                    dateArrFormat[6]
                ],
                'datasets': [
                    {
                        "label": "Bitcoin",
                        "backgroundColor": "rgb(255, 100, 23)",
                        'data': [
                            bitcoinPricesArr[0],
                            bitcoinPricesArr[1],
                            bitcoinPricesArr[2],
                            bitcoinPricesArr[3],
                            bitcoinPricesArr[4],
                            bitcoinPricesArr[5],
                            bitcoinPricesArr[6]
                        ],
                        "lineTension": 0.4,
                        "fill": false,
                        "borderColor": "rgb(255, 100, 23)",
                        "pointBackgroundColor": "rgb(255, 100, 23)"
            }]
            },
            "options": {
                "title": {
                  "display": true,
                  "text": "Prix BTC Weekly"
                },
                "scales": {
                  "xAxes": [
                    {
                      "scaleLabel": {
                        "display": true,
                        "labelString": "Date"
                      }
                    }
                  ],
                }
            }
        }).backgroundColor('rgb(61, 61, 61)').width(500).height(300);

        let fulldate = \`$\{day}-$\{month}-$\{year} $\{hour}-$\{minute}-$\{second}\`

        let path = \`./chart/chart_$\{fulldate}.png\`;

        mychart.toFile(path)
        await sleep(10000)

        let file = new AttachmentBuilder(\`./chart/chart_$\{fulldate}.png\`);
        let embed = {
            title: 'chart btc',
            image: {
                url: \`attachment://chart_$\{fulldate}.png\`
            }
        }
        bot.channels.cache.get(chanIDCHART).send({embed: [embed], files: [file]});
        console.log("image sent")

    }

}, 1000);`

export const BitcoinBotMonthlyChart = `setInterval(async function() {
        
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    var now = \`$\{day}/$\{month}/$\{year} $\{hour}:$\{minute}:$\{second}\`

    if (month == 2) {
        let update = \`28/$\{month}/$\{year} 11:15:0\`

        if (now == update) {

            console.log("starting create chart")
            var bitcoin = await coingeckoclient.coins.fetchMarketChart('bitcoin', {
            vs_currency: 'usd',
            days: '28',
            interval: 'daily',
            });
            
            let bitcoinPrices = bitcoin.data.prices;
            let bitcoinPricesArr = [];
            let bitcoinTimearr = [];
            let dateArr = [];
            let dateArrFormat = [];

            for (let i = 0; i < bitcoinPrices.length; i++) {
                bitcoinTimearr.push(bitcoinPrices[i][0]);
                bitcoinPricesArr.push(bitcoinPrices[i][1]);
            }

            for (let i = 0; i < bitcoinPrices.length; i++) {
                dateArr[i] = new Date(bitcoinTimearr[i])
                dateArrFormat[i] = dateArr[i].getDate() + "/" + ( dateArr[i].getMonth() + 1 )+ "/" + (dateArr[i].getFullYear() % 100);
            }

            const mychart = ChartJSImage().chart({
                'type': 'line',
                'data': {
                    'labels': [
                        dateArrFormat[0],
                        dateArrFormat[1],
                        dateArrFormat[2],
                        dateArrFormat[3],
                        dateArrFormat[4],
                        dateArrFormat[5],
                        dateArrFormat[6],
                        dateArrFormat[7],
                        dateArrFormat[8],
                        dateArrFormat[9],
                        dateArrFormat[10],
                        dateArrFormat[11],
                        dateArrFormat[12],
                        dateArrFormat[13],
                        dateArrFormat[14],
                        dateArrFormat[15],
                        dateArrFormat[16],
                        dateArrFormat[17],
                        dateArrFormat[18],
                        dateArrFormat[19],
                        dateArrFormat[20],
                        dateArrFormat[21],
                        dateArrFormat[22],
                        dateArrFormat[23],
                        dateArrFormat[24],
                        dateArrFormat[25],
                        dateArrFormat[26],
                        dateArrFormat[27],
                    ],
                    'datasets': [
                        {
                            "label": "Bitcoin",
                            "backgroundColor": "rgb(0, 198, 15)",
                            'data': [
                                bitcoinPricesArr[0],
                                bitcoinPricesArr[1],
                                bitcoinPricesArr[2],
                                bitcoinPricesArr[3],
                                bitcoinPricesArr[4],
                                bitcoinPricesArr[5],
                                bitcoinPricesArr[6],
                                bitcoinPricesArr[7],
                                bitcoinPricesArr[8],
                                bitcoinPricesArr[9],
                                bitcoinPricesArr[10],
                                bitcoinPricesArr[11],
                                bitcoinPricesArr[12],
                                bitcoinPricesArr[13],
                                bitcoinPricesArr[14],
                                bitcoinPricesArr[15],
                                bitcoinPricesArr[16],
                                bitcoinPricesArr[17],
                                bitcoinPricesArr[18],
                                bitcoinPricesArr[19],
                                bitcoinPricesArr[20],
                                bitcoinPricesArr[21],
                                bitcoinPricesArr[22],
                                bitcoinPricesArr[23],
                                bitcoinPricesArr[24],
                                bitcoinPricesArr[25],
                                bitcoinPricesArr[26],
                                bitcoinPricesArr[27],
                            ],
                            "lineTension": 0.4,
                            "fill": false,
                            "borderColor": "rgb(0, 198, 15)",
                            "borderWidth": "3",
                            "pointRadius": 0
                }]
                },
                "options": {
                    "title": {
                    "display": true,
                    "text": "Prix BTC Monthly"
                    },
                    "scales": {
                    "xAxes": [
                        {
                        "scaleLabel": {
                            "display": true,
                            "labelString": "Date"
                        }
                        }
                    ],
                    }
                }
            }).backgroundColor('rgb(61, 61, 61)').width(700).height(300);

            let fulldate = \`$\{day}-$\{month}-$\{year} $\{hour}-$\{minute}-$\{second}\`

            let path = \`./chart_month/chart_$\{fulldate}.png\`;

            mychart.toFile(path)
            await sleep(10000)

            let file = new AttachmentBuilder(\`./chart_month/chart_$\{fulldate}.png\`);
            let embed = {
                title: 'chart btc',
                image: {
                    url: \`attachment://chart_$\{fulldate}.png\`
                }
            }
            bot.channels.cache.get(chanIDCHART).send({embed: [embed], files: [file]});
            console.log("image sent")

        }
    }
    else {
        let update = \`30/$\{month}/$\{year} 11:0:0\`
    
        if (now == update) {

            console.log("starting create chart")
            var bitcoin = await coingeckoclient.coins.fetchMarketChart('bitcoin', {
            vs_currency: 'usd',
            days: '30',
            interval: 'daily',
            });
            
            let bitcoinPrices = bitcoin.data.prices;
            let bitcoinPricesArr = [];
            let bitcoinTimearr = [];
            let dateArr = [];
            let dateArrFormat = [];

            for (let i = 0; i < bitcoinPrices.length; i++) {
                bitcoinTimearr.push(bitcoinPrices[i][0]);
                bitcoinPricesArr.push(bitcoinPrices[i][1]);
            }

            for (let i = 0; i < bitcoinPrices.length; i++) {
                dateArr[i] = new Date(bitcoinTimearr[i])
                dateArrFormat[i] = dateArr[i].getDate() + "/" + ( dateArr[i].getMonth() + 1 )+ "/" + (dateArr[i].getFullYear() % 100);
            }

            const mychart = ChartJSImage().chart({
                'type': 'line',
                'data': {
                    'labels': [
                        dateArrFormat[0],
                        dateArrFormat[1],
                        dateArrFormat[2],
                        dateArrFormat[3],
                        dateArrFormat[4],
                        dateArrFormat[5],
                        dateArrFormat[6],
                        dateArrFormat[7],
                        dateArrFormat[8],
                        dateArrFormat[9],
                        dateArrFormat[10],
                        dateArrFormat[11],
                        dateArrFormat[12],
                        dateArrFormat[13],
                        dateArrFormat[14],
                        dateArrFormat[15],
                        dateArrFormat[16],
                        dateArrFormat[17],
                        dateArrFormat[18],
                        dateArrFormat[19],
                        dateArrFormat[20],
                        dateArrFormat[21],
                        dateArrFormat[22],
                        dateArrFormat[23],
                        dateArrFormat[24],
                        dateArrFormat[25],
                        dateArrFormat[26],
                        dateArrFormat[27],
                        dateArrFormat[28],
                        dateArrFormat[29]
                    ],
                    'datasets': [
                        {
                            "label": "Bitcoin",
                            "backgroundColor": "rgb(0, 198, 15)",
                            'data': [
                                bitcoinPricesArr[0],
                                bitcoinPricesArr[1],
                                bitcoinPricesArr[2],
                                bitcoinPricesArr[3],
                                bitcoinPricesArr[4],
                                bitcoinPricesArr[5],
                                bitcoinPricesArr[6],
                                bitcoinPricesArr[7],
                                bitcoinPricesArr[8],
                                bitcoinPricesArr[9],
                                bitcoinPricesArr[10],
                                bitcoinPricesArr[11],
                                bitcoinPricesArr[12],
                                bitcoinPricesArr[13],
                                bitcoinPricesArr[14],
                                bitcoinPricesArr[15],
                                bitcoinPricesArr[16],
                                bitcoinPricesArr[17],
                                bitcoinPricesArr[18],
                                bitcoinPricesArr[19],
                                bitcoinPricesArr[20],
                                bitcoinPricesArr[21],
                                bitcoinPricesArr[22],
                                bitcoinPricesArr[23],
                                bitcoinPricesArr[24],
                                bitcoinPricesArr[25],
                                bitcoinPricesArr[26],
                                bitcoinPricesArr[27],
                                bitcoinPricesArr[28],
                                bitcoinPricesArr[29]
                            ],
                            "lineTension": 0.4,
                            "fill": false,
                            "borderColor": "rgb(0, 198, 15)",
                            "borderWidth": "3",
                            "pointRadius": 0
                }]
                },
                "options": {
                    "title": {
                    "display": true,
                    "text": "Prix BTC Monthly"
                    },
                    "scales": {
                    "xAxes": [
                        {
                        "scaleLabel": {
                            "display": true,
                            "labelString": "Date"
                        }
                        }
                    ],
                    }
                }
            }).backgroundColor('rgb(61, 61, 61)').width(700).height(300);

            let fulldate = \`$\{day}-$\{month}-$\{year} $\{hour}-$\{minute}-$\{second}\`

            let path = \`./chart_month/chart_$\{fulldate}.png\`;

            mychart.toFile(path)
            await sleep(10000)

            let file = new AttachmentBuilder(\`./chart_month/chart_$\{fulldate}.png\`);
            let embed = {
                title: 'chart btc',
                image: {
                    url: \`attachment://chart_$\{fulldate}.png\`
                }
            }
            bot.channels.cache.get(chanIDCHART).send({embed: [embed], files: [file]});
            console.log("image sent")

        }

    }}, 1000)`

export const FearAndGreedDaily = `setInterval(async function() {

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let allDate = day + "/" + month + "/" + year;
    let allTime = hour + ":" + minute + ":" + second;

    let now = \`$\{allDate} $\{allTime}\`
    let update = \`$\{allDate} 1:5:0\`

    if (now == update) {

        const response = await fetch('https://api.alternative.me/fng/');
            const data = await response.json();
            const fearValue = data['data'][0]['value'];
            const fearClass = data['data'][0]['value_classification'];

    bot.channels.cache.get(chanIDFEAR).send(\`$\{allDate} Fear and greed index : $\{fearValue}, $\{fearClass} \`)
    console.log("fear value sent")
    }

}, 1000)`

export const FearAndGreedWeekly = `setInterval(async function() {

    let date = new Date();
    let daynbr = date.getDay();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let allTime = hour + ":" + minute + ":" + second;

    let now = \`$\{allTime}\`
    let update = \`1:10:0\`

    if (now == update && daynbr == 0) {

        let response = await fetch('https://api.alternative.me/fng/?limit=7&format=json&date_format=world');
        let data = await response.json();

        let fearValue = []
        let fearDate = []
        let colorArr = []
        let borderColorArr = []
        let fearClass = []

        for (var i = 0; i < 7; i++) {
            let fearValueGet = data.data[i].value
            let fearDateGet = data.data[i].timestamp
            let fearClassGet = data.data[i].value_classification

            fearValue.push(fearValueGet)
            fearDate.push(fearDateGet)
            fearClass.push(fearClassGet)
        }

        for (let i = 0; i < fearValue.length; i++) {
            if (fearClass[i] == 'Fear' || fearClass[i] == 'Extreme Fear') {
                colorArr.push('rgba(189, 0, 0, 0.2)')
                borderColorArr.push('rgb(189, 0, 0)')
            }
            else if (fearClass[i] == 'Neutral') {
                colorArr.push('rgba(232, 232, 232, 0.2)')
                borderColorArr.push('rgb(232, 232, 232)')
            }
            else {
                colorArr.push('rgba(126, 189, 0, 0.2)')
                borderColorArr.push('rgb(126, 189, 0)')
            }
        }

        console.log(fearValue)
        console.log(fearDate)
        console.log(colorArr)

        const fearchart = ChartJSImage().chart({
            type: 'bar',
            data: {
                labels: [
                    fearDate[6],
                    fearDate[5],
                    fearDate[4],
                    fearDate[3],
                    fearDate[2],
                    fearDate[1],
                    fearDate[0]
                ],
                datasets: [
                    {
                    data: [
                        fearValue[6],
                        fearValue[5],
                        fearValue[4],
                        fearValue[3],
                        fearValue[2],
                        fearValue[1],
                        fearValue[0]
                    ],
                    backgroundColor: [
                        colorArr[6],
                        colorArr[5],
                        colorArr[4],
                        colorArr[3],
                        colorArr[2],
                        colorArr[1],
                        colorArr[0]
                    ],
                    borderColor: [
                        borderColorArr[6],
                        borderColorArr[5],
                        borderColorArr[4],
                        borderColorArr[3],
                        borderColorArr[2],
                        borderColorArr[1],
                        borderColorArr[0]
                    ],
                    borderWidth: 1
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                title: {
                  display: true,
                  text: "Fear Index Weekly"
                },
                scales: {
                  xAxes: [
                    {
                      scaleLabel: {
                        display: true,
                        labelString: "Day"
                      }
                    }
                  ],
                  yAxes: [
                    {
                      stacked: true,
                      scaleLabel: {
                        display: true,
                        labelString: "Value",
                      },
                      ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 100
                      }
                    }
                  ]
                }
              }
            }).backgroundColor('rgb(61, 61, 61)').width(500).height(300);

        let fulldate = \`$\{day}-$\{month}-$\{year} $\{hour}-$\{minute}-$\{second}\`

        let path = \`./fearchart/chart_$\{fulldate}.png\`;

        fearchart.toFile(path)
        await sleep(10000)

        let file = new AttachmentBuilder(\`./fearchart/chart_$\{fulldate}.png\`);
        let embed = {
            title: 'Fear chart',
            image: {
                url: \`attachment://chart_$\{fulldate}.png\`
            }
        }
        bot.channels.cache.get(chanIDFEAR).send({embed: [embed], files: [file]});
        console.log("image sent")
    }
}, 1000)`

export const stablesBot = `const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

// get id in .env file you've created before
const token = process.env.TOKEN
const chanID = process.env.CHANID

// initialize first date 
var lastModifiedSell = "2023-04-06T11:42:04Z"
var lastModifiedList = "2023-04-06T11:42:04Z"
var lastModifiedCancelList = "2023-04-06T11:42:04Z"

async function fetchSell() {
    try {
        // get all sales on rarible's api
        const response = await fetch("https://api.rarible.org/v0.1/activities/byCollection?collection=TEZOS:KT1MQL8VjVQckk5A6uBfN9Qv2YUVJstG1CyH&type=SELL")
        const data = await response.json()
        const lastSell = data.activities[0] // save last sale

        console.log(lastSell.date, "last sell date")

        if (lastSell.date > lastModifiedSell) {
            lastModifiedSell = lastSell.date // save new last sale date
            console.log("last sell date :", lastModifiedSell)

            // get sale date on the right format
            let mdate = new Date(lastSell.date).toLocaleString('fr-FR', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });

            // get token id and image of the nft
            let tokenId = lastSell.nft.type.tokenId
            let imgUrl = \`https://nft-picture.playstables.io/nft/collection/001/horse/$\{tokenId}.jpg\`

            // create message 
            let embed = new EmbedBuilder()
                .setColor('#24B600')
                .setTitle('New Sales')
                .setDescription('Sales details')
                .addFields(
                    { name: '** **', value: \`[Go to marketplace](https://rarible.com/collection/tezos/KT1MQL8VjVQckk5A6uBfN9Qv2YUVJstG1CyH/items)\` }, 
                )
                .addFields(
                    { name: 'tx : ', value: \`[$\{lastSell.transactionHash}](https://tzstats.com/$\{lastSell.transactionHash})\` },

                    { name: \`from : $\{lastSell.seller.substring(6, 11)}...$\{lastSell.seller.substring(37, 42)}\`, value: '** **', inline: true }, 
                    { name: \`to : $\{lastSell.buyer.substring(6, 11)}...$\{lastSell.buyer.substring(37, 42)}\`, value: '** **', inline: true },

                    { name: \`token id : $\{tokenId}\`, value: '** **' },

                    { name: \`Tezos price : $\{lastSell.price}xtz\`, value: '** **', inline: true }, 
                    { name: \`USD price : $\{Number(lastSell.priceUsd).toFixed(2)}$\`, value: '** **', inline: true },
                )
                .setThumbnail(imgUrl)
                .setFooter({ text: mdate })

            // send message to the channel setup before
            bot.channels.cache.get(chanID).send({
                embeds: [embed]
            })

            console.log("successfully send last sale ---------------------------------------------")

        }
    } catch (error) {
        console.log(error)
    }
}

async function fetchList() {
    try {
        // get all list on rarible's api
        const response = await fetch("https://api.rarible.org/v0.1/activities/byCollection?collection=TEZOS:KT1MQL8VjVQckk5A6uBfN9Qv2YUVJstG1CyH&type=LIST")
        const data = await response.json()
        const lastList = data.activities[0] // save last sale

        console.log(lastList.date, "last list date")

        if (lastList.date > lastModifiedList) {
            lastModifiedList = lastList.date // save new last sale date
            console.log("last list date :", lastModifiedList)

            // get sale date on the right format
            let mdate = new Date(lastList.date).toLocaleString('fr-FR', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });

            // get token id and image of the nft
            let tokenId = lastList.make.type.tokenId
            let imgUrl = \`https://nft-picture.playstables.io/nft/collection/001/horse/$\{tokenId}.jpg\`

            // create message
            let embed = new EmbedBuilder()
                .setColor('#CCF000')
                .setTitle('Listing')
                .setDescription('List details')
                .addFields(
                    { name: '** **', value: \`[Go to listing](https://rarible.com/collection/tezos/KT1MQL8VjVQckk5A6uBfN9Qv2YUVJstG1CyH/activity?types[]=listing)\` }, 
                )
                .addFields(
                    { name: 'tx : ', value: \`[$\{lastList.hash}](https://tzstats.com/$\{lastList.transactionHash})\` }, 
                    { name: \`token id : $\{tokenId}\`, value: '\u200B', inline: true },

                    { name: \`maker : $\{lastList.maker.substring(6, 11)}...$\{lastList.maker.substring(37, 42)}\`, value: '\u200B', inline: true }, 
                    { name: '\u200B', value: '\u200B', inline: true },

                    { name: \`Tezos price : $\{lastList.price}xtz\`, value: '\u200B', inline: true },
                )
                .setThumbnail(imgUrl)
                .setFooter({ text: mdate })

            // send message to the channel setup before
            bot.channels.cache.get(chanID).send({
                embeds: [embed]
            })

            console.log("successfully send last list ---------------------------------------------")

        }
    } catch (error) {
        console.log(error)
    }
}

/** async function fetchCancelList() {
    try {
        const response = await fetch("https://api.rarible.org/v0.1/activities/byCollection?collection=TEZOS:KT1MQL8VjVQckk5A6uBfN9Qv2YUVJstG1CyH&type=LIST")
        const data = await response.json()
        const lastCancelList = data.activities[0]

        console.log(lastCancelList.date, "last cancel list date")

        if (lastCancelList.date > lastModifiedCancelList) {
            lastModifiedCancelList = lastCancelList.date
            console.log("last cancel list date :", lastModifiedCancelList)

            let mdate = new Date(lastCancelList.date).toLocaleString('fr-FR', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });

            let tokenId = lastCancelList.make.type.tokenId
            let imgUrl = \`https://nft-picture.playstables.io/nft/collection/001/horse/$\{tokenId}.jpg\`

            let embed = new EmbedBuilder()
                .setColor('#DD0000')
                .setTitle('Cancel Listing')
                .setDescription('Cancel List details')
                .addFields(
                    { name: 'tx : ', value: \`[$\{lastCancelList.hash}](https://tzstats.com/$\{lastCancelList.transactionHash})\` }, 
                    { name: \`token id : $\{tokenId}\`, value: '** **', inline: true },

                    { name: \`maker : $\{lastCancelList.maker.substring(6, 11)}...$\{lastCancelList.maker.substring(37, 42)}\`, value: '** **', inline: true },
                )
                .setThumbnail(imgUrl)
                .setFooter({ text: mdate })

            bot.channels.cache.get(chanID).send({
                embeds: [embed]
            })

            console.log("successfully send last cancel list ---------------------------------------------")

        }
    } catch (error) {
        console.log(error)
    }
} **/

// when the bot are ready run setinterval function
bot.on('ready', async() => {


    // every 60sec run all function below    
    setInterval(async function() {
        try {

            console.log("verify last sell stables")
            fetchSell()
            fetchList()
                // fetchCancelList()

        } catch (err) {
            console.log(err);
        }
    }, 60000);

    console.log("discord bot ready");
});

// run the bot
bot.login(token);`