self.__uv$config = {
    prefix: '/Uranium-/service/',
    bare: 'https://uv.holyublock.com/', 
    encodeUrl: Ultraviolet.codec.base64.encode,
    decodeUrl: Ultraviolet.codec.base64.decode,
    handler: '/Uranium-/uv/uv.handler.js',
    client: '/Uranium-/uv/uv.client.js',
    bundle: '/Uranium-/uv/uv.bundle.js',
    config: '/Uranium-/uv/uv.config.js',
    sw: '/Uranium-/uv/uv.sw.js',
};
