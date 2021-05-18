const express = require('express')
const cors = require('cors')
const midtransClient = require('midtrans-client');
// Create Core API / Snap instance (both have shared `transactions` methods)

const app = express()
const port = 3002

const apiClienRH = new midtransClient.Snap({
    isProduction : true,
    serverKey : 'Mid-server-5SjUm4DPCDKqf_PAMUT2Ht4E',
    clientKey : 'Mid-client-MGKpnVja6krOzV0L'
});

const apiClienMSU = new midtransClient.Snap({
    isProduction : true,
    serverKey : 'Mid-server-7n-CFy-b2kqymJoaq752DTAZ',
    clientKey : 'Mid-client-5H7G2yPr2b_U1RIg'
});

const apiClienGMTD = new midtransClient.Snap({
    isProduction : true,
    serverKey : 'Mid-server-yzUcm8xJ6zZRijV1qBWdPLdP',
    clientKey : 'Mid-client-qtC0QCIdUDCTqx0L'
});

const apiClienLC = new midtransClient.Snap({
    isProduction : true,
    serverKey : 'Mid-server-FEJ6ZPf7djDqLeBR-5QHgj9V',
    clientKey : 'Mid-client-dmg74m9b1dkcF5va'
});


app.use(cors())	
	

// get status of transaction that already recorded on midtrans (already `charge`-ed) 
app.post('/api/midtrans/status', (req, res) => {
    var order = req.query.ordercode
    var subOrder = order.substring(0, 8)
    var subOrder2 = order.substring(0, 7)
    var subOrder3 = order.substring(0, 9)
    
    if(subOrder == 'E3-OB-RH') {
        apiClienRH.transaction.status(order)
            .then((response)=>{
                console.log(response);
                res.json(response);
            })
            .catch((error)=>{
                console.log(error.ApiResponse);
                res.json(error.ApiResponse);
            })
    } else if(subOrder2 == 'E3-OB-M' || subOrder3 == 'E3-OB-FAV' || subOrder3 == 'E3-OB-DST') {
        apiClienMSU.transaction.status(order)
            .then((response)=>{
                console.log(response);
                res.json(response);
            })
            .catch((error)=>{
                console.log(error.ApiResponse);
                res.json(error.ApiResponse);
            })
    } else if(subOrder3 == 'E3-OB-TBN' || subOrder3 == 'E3-OB-ODM') {
        apiClienGMTD.transaction.status(order)
            .then((response)=>{
                console.log(response);
                res.json(response);
            })
            .catch((error)=>{
                console.log(error.ApiResponse);
                res.json(error.ApiResponse);
            })
    } else {
        apiClienLC.transaction.status(order)
            .then((response)=>{
                console.log(response);
                res.json(response);
            })
            .catch((error)=>{
                console.log(error.ApiResponse);
                res.json(error.ApiResponse);
            })
    }
    
})

app.post('/api/midtrans/expire', (req, res) => {
    var order = req.query.ordercode
    var subOrder = order.substring(0, 8)
    var subOrder2 = order.substring(0, 7)
    var subOrder3 = order.substring(0, 9)

    if(subOrder == 'E3-OB-RH') {
        apiClienRH.transaction.expire(order)
            .then((response)=>{
                console.log(response);
                res.json(response);
            })
            .catch((error)=>{
                console.log(error.ApiResponse);
                res.json(error.ApiResponse);
            })
    } else if(subOrder2 == 'E3-OB-M' || subOrder3 == 'E3-OB-FAV' || subOrder3 == 'E3-OB-DST') {
        apiClienMSU.transaction.expire(order)
            .then((response)=>{
                console.log(response);
                res.json(response);
            })
            .catch((error)=>{
                console.log(error.ApiResponse);
                res.json(error.ApiResponse);
            })
    } else if(subOrder3 == 'E3-OB-TBN' || subOrder3 == 'E3-OB-ODM') {
        apiClienGMTD.transaction.expire(order)
            .then((response)=>{
                console.log(response);
                res.json(response);
            })
            .catch((error)=>{
                console.log(error.ApiResponse);
                res.json(error.ApiResponse);
            })
    } else {
        apiClienLC.transaction.expire(order)
            .then((response)=>{
                console.log(response);
                res.json(response);
            })
            .catch((error)=>{
                console.log(error.ApiResponse);
                res.json(error.ApiResponse);
            })
    }
})

app.get('/test', (req, res) => {
    res.send('TEST BERHASIL!')  
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})