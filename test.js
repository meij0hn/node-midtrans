const midtransClient = require('midtrans-client');

const apiClienRH = new midtransClient.Snap({
    isProduction : true,
    serverKey : 'Mid-server-5SjUm4DPCDKqf_PAMUT2Ht4E',
    clientKey : 'Mid-client-MGKpnVja6krOzV0L'
});

apiClienRH.transaction.status('E3-OB-RHM-0009262')
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error.ApiResponse);
    })