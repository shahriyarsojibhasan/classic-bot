function _0x5b76(_0x733bx2, _0x733bx3) {
    const _0x733bx4 = _0x236e();
    return _0x5b76 = function (_0x733bx5, _0x733bx6) {
        _0x733bx5 = _0x733bx5 - 0x166;
        let _0x733bx7 = _0x733bx4[_0x733bx5];
        return _0x733bx7
    }, _0x5b76(_0x733bx2, _0x733bx3)
}
const _0xabc234 = _0x5b76;

function _0x236e() {
    const _0x733bxa = ['yt2mp4', 'videoDetails', 'sendMessage', '758468AnGFkX', 'close', 'fs-extra', '6468qydeao', 'title', '/cache/yt2mp4.mp4', '5499UIPmex', 'exports', 'Youtube', '5098pmXmhj', 'JustGon', 'join', 'yt2mp4jg', '301218MyclSZ', '484LiqWQD', '543HHRPbf', 'nodemodule', '3910uckbId', '5048IFDFvy', '301776zOzmUp', 'run', 'ytdl-core', 'messageID', '1304Ctxjki', `Downloading...\
`, '1.0.0', 'threadID', 'pipe', '5735XErqtV'];
    _0x236e = function () {
        return _0x733bxa
    };
    return _0x236e()
}(function (_0x733bxb, _0x733bxc) {
    const _0x733bxd = _0x5b76,
        _0x733bxe = _0x733bxb();
    while (true) {
        try {
            const _0x733bxf = parseInt(_0x733bxd(0x172)) / 0x1 + -parseInt(_0x733bxd(0x17b)) / 0x2 * (parseInt(_0x733bxd(0x181)) / 0x3) + -parseInt(_0x733bxd(0x169)) / 0x4 * (parseInt(_0x733bxd(0x16e)) / 0x5) + -parseInt(_0x733bxd(0x17f)) / 0x6 + -parseInt(_0x733bxd(0x175)) / 0x7 * (parseInt(_0x733bxd(0x184)) / 0x8) + parseInt(_0x733bxd(0x178)) / 0x9 * (parseInt(_0x733bxd(0x183)) / 0xa) + -parseInt(_0x733bxd(0x180)) / 0xb * (-parseInt(_0x733bxd(0x185)) / 0xc);
            if (_0x733bxf === _0x733bxc) {
                break
            } else {
                _0x733bxe.push(_0x733bxe.shift())
            }
        } catch (_0x2954c7) {
            _0x733bxe.push(_0x733bxe.shift())
        }
    }
}(_0x236e, 0x9b1cf), module[_0xabc234(0x179)].config = {
    'name': _0xabc234(0x16f),
    'version': _0xabc234(0x16b),
    'hasPermssion': 0x0,
    'credits': _0xabc234(0x17c),
    'description': _0xabc234(0x17e),
    'commandCategory': _0xabc234(0x17a),
    'usages': '[link]',
    'cooldowns': 0x5,
    'dependencies': {
        'ytdl-core': '',
        'fs-extra': ''
    }
}, module[_0xabc234(0x179)][_0xabc234(0x166)] = async function ({
    event: _0x5503ef,
    api: _0x2d275b,
    args: _0x54c258
}) {
    const _0x733bx10 = _0xabc234,
        {
            createReadStream: _0x245b05,
            unlinkSync: _0x44ed93,
            createWriteStream: _0x1ec8d9
        } = global[_0x733bx10(0x182)][_0x733bx10(0x174)],
        _0x733bx11 = global[_0x733bx10(0x182)][_0x733bx10(0x167)];
    if (!_0x54c258.join(' ')) {
        _0x2d275b[_0x733bx10(0x171)]('Vui Lòng Nhập Link!', _0x5503ef[_0x733bx10(0x16c)], _0x5503ef.messageID)
    } else {
        try {
            var _0x733bx12 = await _0x733bx11.getInfo(_0x54c258[_0x733bx10(0x17d)](' '));
            _0x2d275b[_0x733bx10(0x171)](_0x733bx10(0x16a) + _0x733bx12.videoDetails[_0x733bx10(0x176)], _0x5503ef[_0x733bx10(0x16c)], _0x5503ef[_0x733bx10(0x168)]), _0x733bx11(_0x54c258.join(' '))[_0x733bx10(0x16d)](_0x1ec8d9(__dirname + _0x733bx10(0x177))).on(_0x733bx10(0x173), () => {
                const _0x733bx13 = _0x733bx10;
                return _0x2d275b[_0x733bx13(0x171)]({
                    'body': _0x733bx12[_0x733bx13(0x170)][_0x733bx13(0x176)],
                    'attachment': _0x245b05(__dirname + _0x733bx13(0x177))
                }, _0x5503ef[_0x733bx13(0x16c)], () => {
                    return _0x44ed93(__dirname + _0x733bx13(0x177))
                }, _0x5503ef[_0x733bx13(0x168)])
            })
        } catch (_0x450e8e) {
            _0x2d275b[_0x733bx10(0x171)]('Đã xảy ra lỗi!', _0x5503ef[_0x733bx10(0x16c)], _0x5503ef[_0x733bx10(0x168)])
        }
    }
}).toString()