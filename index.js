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


app.use(cors())	
	

// get status of transaction that already recorded on midtrans (already `charge`-ed) 
app.post('/api/midtrans/status', (req, res) => {
    const id = req.params
    apiClienRH.transaction.status(req.query.ordercode)
        .then((response)=>{
            console.log(response);
            this.statusinfo = response;
        })
    res.json(this.statusinfo)
})

app.post('/api/midtrans/expire', (req, res) => {
    const id = req.params
    apiClienRH.transaction.expire(req.query.ordercode)
        .then((response)=>{
            console.log(response);
            this.expireinfo = response;
        })
    res.json(this.expireinfo)
})

app.get('/test', (req, res) => {
    res.send('TEST BERHASIL!')  
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})