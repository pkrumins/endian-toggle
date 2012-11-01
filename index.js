module.exports = function (buf, bits) {
    var output = new Buffer(buf.length);
    
    var bytes = bits / 8;
    if (buf.length % bytes !== 0) {
        throw new Error((buf.length % bytes) + ' non-aligned trailing bytes');
    }
    
    for (var i = 0; i < buf.length; i += bytes) {
        for (var j = 0; j < bytes; j++) {
            output[i + bytes - j - 1] = buf[i + j];
        }
    }
    
    return output;
};
