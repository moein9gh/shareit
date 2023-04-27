const os = require('os');

module.exports.getInterfaceIp = ()=>{

    const networkIFaces = os.networkInterfaces();
    const defaultInterfaceIp = '127.0.0.1';
    let interfaceIp;
    Object.keys(networkIFaces).forEach((interFace) => {
        for (const networkIFace of networkIFaces[interFace]) {
            if (networkIFace.family !== 'IPv4' || networkIFace.internal !== false) {
                continue;
            }
            interfaceIp = networkIFace.address || defaultInterfaceIp;
            return;
        }
    })
    return process.env.PUBLICIP || interfaceIp;
}