require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remain honey half clock orange giant'; 
let testAccounts = [
"0x09c1a15ad427908dd3b1ec5c7ccccfecccd04a9af237eaeff7ee594e029b824e",
"0x4b7f92fffacb726f3d5298640931027f82340847d4487a86c3681077f3c4bda6",
"0x89aaba6787c95e750b605fa631afcaec5ead85c5159ca0a29780937a36616cd9",
"0x510d7c39fa6b18b6436dc8914d3ea9cefd2c969b4dd36a263bd23bd3d18056e5",
"0x26ea50b4d391227d67f200cd5498faa147156115cc77cd4b5f3a5e220f957313",
"0xfd8c0d41c9a1aaaa1fe4d82b377aa415990dfbbc0ea888ea53eedcbacfbe6238",
"0x1a97cda4c512b56ee7985ebe55d9a126617e91bb11db64c9f2f4bf356455bcac",
"0xe1162e50230b1535eefc5e0be4925bc1fd7c3284d91b221f315d1be6262084dc",
"0x3d0f6a90684670449fb6de19ae38d7f60fa390806b852acf54f751bdc1e4b986",
"0xa53cf3efb6a2e6c9fcdc80e408fa7e1da54300818653ba3cf4491f7d1b9ae6fb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

