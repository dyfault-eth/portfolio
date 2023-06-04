import { Box, Center, Text, Button, useColorMode, Divider, Image, Code } from "@chakra-ui/react";
import { TabsFunction } from "../../../components/page-content/TabsFunction";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export const JsDiscordBot = () => {

    const { colorMode } = useColorMode();
    
    // bitcoin discord bot content
    const bitcoinBotContent = 
    <Box w='1250px'>
        <Center mt='12px' display="flex" alignItems='center'>
            You can check the project on{" "}
            
            <Button variant="urlbutton" marginLeft="-0.6rem" as="a" href="https://github.com/dyfault-eth/bitcoin-discord-bot" target="_blank" rel="noreferrer">my github</Button>
        </Center>
        <Center>
            <Divider w='450px' />
        </Center>
        

        <Box mt='12px'>
            <Text textAlign="center">Project presentation :</Text>
            <br />
            <Text textAlign="left">
                This Discord bot sends a daily graph of Bitcoin's price over the past 7 days to a preconfigured channel by making an API request to fetch the price data. 
                On the 30th day of every month, it sends a graph illustrating Bitcoin's price evolution throughout the month. Each night at 1:05 AM, it delivers 
                the updated Fear and Greed Index value. Additionally, at the end of each week, it generates a bar chart summarizing the week's information.
            </Text>

            <Text mt='24px'> Example of weekly chart made every day :</Text>
            <Image mt='16px' w='750px' src='./images/chart_30-4-2023_10-30-0.png' />

            <Text mt="16px">Code example of the chart : </Text>
            <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight}>
                {`setInterval(async function() {
        
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

}, 1000);`}
            </SyntaxHighlighter>

            <Text mt='24px'>Example of monthly chart :</Text>
            <Image mt='16px' w='750px' src='./images/chart_30-5-2023_11-0-0.png' />

            <Text mt="16px">Code example of the chart : </Text>
            <SyntaxHighlighter language="javascript" style={colorMode === 'dark' ? atomDark : solarizedlight}>
                {`setInterval(async function() {
        
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

        }}, 1000)`}
            </SyntaxHighlighter>
        </Box>

    </Box>
    
    // web3 discord bot content
    const web3BotContent = <Box>Web3</Box>

    // stables discord bot
    const stablesBotContent = <Box>Stables</Box>

    const tabs = [
        { label: "Bitcoin Bot", content: bitcoinBotContent },
        { label: "Web3 Bot", content: web3BotContent },
        { label: "Stables Bot", content: stablesBotContent}
    ];

    return (
        <Center>
            <TabsFunction tabs={tabs} />
        </Center>
    );
};