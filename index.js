const ProxyChain = require('proxy-chain');

const server = new ProxyChain.Server({ port: process.env.PORT || 8080 });

server.listen(() => {
    console.log(`Proxy server is listening on port ${process.env.PORT}`);
});