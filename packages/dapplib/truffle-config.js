require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remember artwork heavy knife bubble target'; 
let testAccounts = [
"0xb3bf0c02c96492a3d1d48f64d9d5cbec544a394c31c106f945d65f3d4c10fff0",
"0x67ddcf8d4c6010a41eda82708c8ed221dc86a4bf6f794ef9965d3e428c7def3c",
"0x5988cf4b46dad29e4bff7fc51324b1f3d5254c74914587b1a566bd753cddbf2a",
"0xc939285fe2edd5657bdfda2e27af273473f3cee05981c19f8cdf72533fd85a31",
"0xeea61524be2eded63b03051bcd428e85e3e9ddf38730fea41fc1d89ead569913",
"0x03e0c2eea420a752cf8c733da279c68e40da5dab9cba26fa161f704529992c75",
"0xabc565a67ea1878811deb95e19959b33b3484948c797c018a812fdddee25f9b6",
"0x4802c3ca4fa917ed010eaacff157f5db0740db44b5e49b12106df16ea0b9c3a1",
"0x52d218f8c7511ccc3f4398a2b5a163e3594dae605e68b313dcc8e4617cb24949",
"0x68a0c9c4b296bd786deb6576efcf2f6c12f944b8ff823a069c4cb8c07ac3130b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

