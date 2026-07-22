import {getStockData as stock} from './stockApi.js'
let previousPrice=null
renderStockTicker(stock())
setInterval(()=>{
    console.log(stock())
renderStockTicker(stock())
},1000)




function renderStockTicker(stockData) {
const {name,sym,price,time}=stockData
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    stockDisplayName.textContent=name
    stockDisplaySymbol.textContent=sym
    stockDisplayPrice.textContent=price
    stockDisplayTime.textContent=time

   
     if (previousPrice !== null) {
        if (price > previousPrice) {
            stockDisplayPriceIcon.textContent = "▲";
        } else if (price < previousPrice) {
            stockDisplayPriceIcon.textContent = "▼";
        } else {
            stockDisplayPriceIcon.textContent = "▶";
        }
    }

    previousPrice = price;
}
