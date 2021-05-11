const express = require('express')
const app = express()
const port = 2002

const midtransClient = require('midtrans-client');
// Create Core API / Snap instance (both have shared `transactions` methods)


const apiClient = new midtransClient.Snap({
        isProduction : true,
        serverKey : 'Mid-server-5SjUm4DPCDKqf_PAMUT2Ht4E',
        clientKey : 'Mid-client-MGKpnVja6krOzV0L'
    });



// get status of transaction that already recorded on midtrans (already `charge`-ed) 
app.post('/api/midtrans/status/:ordercode', (req, res) => {
    const id = req.params
    apiClient.transaction.status(id.ordercode)
        .then((response)=>{
            console.log(response);
            this.info = response;
        })
    // res.send(this.info)
    res.send(this.info)
})

app.post('/api/midtrans/expire/:ordercode', (req, res) => {
    const id = req.params
    apiClient.transaction.expire(id.ordercode)
        .then((response)=>{
            console.log(response);
            this.info = response;
        })
    // res.send(this.info)
    res.send(this.info)
})

app.get('/test', (req, res) => {
    res.send('TEST BERHASIL!')  
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})