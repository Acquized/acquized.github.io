{

  "host": "23.235.43.133",
  "port": 7777,

  "keyLength": 10,

  "maxLength": 400000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "random",
    "keyspace": "abcdefghijklmnopqrstuvwxyz1234567890",
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 500,
        "every": 60000
      }
    }
  },

  "storage": {
    "path": "./data",
    "type": "file",
  },

  "documents": {
    "about": "./about.md"
  }

}
