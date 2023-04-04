const NodeCache = require('node-cache')

const config = {
    prefix: '/',
    openaikey: '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',
    cache: new NodeCache({
        checkperiod: 10000,
        deleteOnExpire: true
    }),
    ratelimit: new Map(),
    commands: new Map(),
    aliases: new Map()
}

module.exports = config