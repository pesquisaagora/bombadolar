function _0x107d(_0x2ae7f4, _0x4edfce) { const _0x2b3f22 = _0x2b3f(); return _0x107d = function (_0x107d9d, _0x7339ad) { _0x107d9d = _0x107d9d - 0x167; let _0x43e737 = _0x2b3f22[_0x107d9d]; return _0x43e737; }, _0x107d(_0x2ae7f4, _0x4edfce); } (function (_0x3496c, _0x684598) { const _0x571b1f = _0x107d, _0x353550 = _0x3496c(); while (!![]) { try { const _0x3725e9 = parseInt(_0x571b1f(0x188)) / 0x1 * (-parseInt(_0x571b1f(0x196)) / 0x2) + -parseInt(_0x571b1f(0x167)) / 0x3 + -parseInt(_0x571b1f(0x179)) / 0x4 * (parseInt(_0x571b1f(0x190)) / 0x5) + -parseInt(_0x571b1f(0x17e)) / 0x6 * (parseInt(_0x571b1f(0x185)) / 0x7) + parseInt(_0x571b1f(0x180)) / 0x8 + -parseInt(_0x571b1f(0x172)) / 0x9 + parseInt(_0x571b1f(0x16d)) / 0xa * (parseInt(_0x571b1f(0x18b)) / 0xb); if (_0x3725e9 === _0x684598) break; else _0x353550['push'](_0x353550['shift']()); } catch (_0x386c54) { _0x353550['push'](_0x353550['shift']()); } } }(_0x2b3f, 0x2d3fe), (function () { const _0x2b31ae = _0x107d, _0x3a1711 = { 'token': '', 'clickIdParam': 'click_id', 'pixelIdParam': 'pixel_id', 'stepId': 'initial', 'currentUrl': new URL(window[_0x2b31ae(0x16a)][_0x2b31ae(0x176)]) }; console['log']({ 'config': _0x3a1711 }); function _0x1e371d() { const _0x25037c = _0x2b31ae, _0x31f984 = document[_0x25037c(0x17a)]; _0x31f984 && (_0x3a1711[_0x25037c(0x189)] = _0x31f984[_0x25037c(0x194)](_0x25037c(0x182)) || '', _0x3a1711[_0x25037c(0x170)] = _0x31f984['getAttribute']('data-click-id-param') || _0x25037c(0x187), _0x3a1711[_0x25037c(0x191)] = _0x31f984[_0x25037c(0x194)](_0x25037c(0x175)) || _0x25037c(0x178), _0x3a1711[_0x25037c(0x17d)] = _0x31f984['getAttribute'](_0x25037c(0x18a)) || _0x25037c(0x171), _0x3a1711[_0x25037c(0x17f)] = new URL(window['location'][_0x25037c(0x176)])); } function _0x140365() { const _0x428fb4 = _0x2b31ae; return Object[_0x428fb4(0x197)](new URLSearchParams(window[_0x428fb4(0x16a)][_0x428fb4(0x173)])); } function _0x362e3a(_0x2ff1f6) { const _0x58a47b = _0x2b31ae, _0x582ba2 = document[_0x58a47b(0x183)]('a'); _0x582ba2[_0x58a47b(0x18e)](_0x48ac20 => { const _0x12ef1a = _0x58a47b; if (!_0x48ac20[_0x12ef1a(0x176)] || _0x48ac20['href'][_0x12ef1a(0x16b)]('#')) return; const _0x731376 = _0x3a1711[_0x12ef1a(0x17f)]['searchParams']; _0x731376['set']('utm_source', _0x2ff1f6), console[_0x12ef1a(0x18f)]('link.search', _0x48ac20[_0x12ef1a(0x173)]); const _0x4bb2e6 = new URLSearchParams(_0x48ac20[_0x12ef1a(0x173)]); for (const _0x4ef248 of _0x731376) { _0x4bb2e6[_0x12ef1a(0x195)](..._0x4ef248); } const _0x4b28e6 = new URL(_0x48ac20['href']); _0x4b28e6[_0x12ef1a(0x173)] = _0x4bb2e6[_0x12ef1a(0x16c)](), _0x48ac20['href'] = _0x4b28e6[_0x12ef1a(0x176)]; }); } async function _0x3da004(_0x4b9ead) { const _0x5ecc63 = _0x2b31ae, _0x3f4d8b = _0x5ecc63(0x198); try { console[_0x5ecc63(0x18f)]('VIEW', { 'data': _0x4b9ead }), await fetch(_0x3f4d8b, { 'method': _0x5ecc63(0x16f), 'headers': { 'Content-Type': _0x5ecc63(0x193), 'Accept': _0x5ecc63(0x193) }, 'body': JSON[_0x5ecc63(0x192)](_0x4b9ead), 'signal': AbortSignal[_0x5ecc63(0x174)](0xbb8), 'keepalive': !![] }); } catch (_0x7abff4) { console[_0x5ecc63(0x168)](_0x5ecc63(0x177), _0x7abff4); } } async function _0x43878e() { const _0x19afa5 = _0x2b31ae, _0x366d83 = _0x140365(), _0x4ac194 = _0x366d83[_0x3a1711[_0x19afa5(0x170)]] || null, _0x5bd3c7 = _0x366d83[_0x3a1711['pixelIdParam']] || '', _0x358f16 = _0x3a1711['token'] + '::' + _0x4ac194 + '::' + _0x5bd3c7; console[_0x19afa5(0x18f)]({ 'urlParams': _0x366d83, 'clickId': _0x4ac194, 'utmValue': _0x358f16 }); if (_0x4ac194) _0x3a1711['currentUrl'][_0x19afa5(0x17c)]['set'](_0x19afa5(0x186), _0x358f16), localStorage[_0x19afa5(0x16e)](_0x19afa5(0x18d) + _0x3a1711[_0x19afa5(0x189)], _0x358f16), window[_0x19afa5(0x184)][_0x19afa5(0x169)]({}, '', _0x3a1711['currentUrl'][_0x19afa5(0x16c)]()), await _0x3da004({ 'r': btoa(_0x3a1711['currentUrl']['href']), 'utmSource': _0x358f16, 'stepId': _0x3a1711[_0x19afa5(0x17d)] }), _0x362e3a(_0x358f16); else { const _0x31d2d4 = localStorage[_0x19afa5(0x18c)]('KWAI_UTM_TRACK_' + _0x3a1711[_0x19afa5(0x189)]); _0x31d2d4 && (_0x3a1711['currentUrl'][_0x19afa5(0x17c)][_0x19afa5(0x195)](_0x19afa5(0x186), _0x31d2d4), window[_0x19afa5(0x184)][_0x19afa5(0x169)]({}, '', _0x3a1711[_0x19afa5(0x17f)][_0x19afa5(0x16c)]()), await _0x3da004({ 'r': btoa(_0x3a1711[_0x19afa5(0x17f)]['href']), 'utmSource': _0x31d2d4, 'stepId': _0x3a1711[_0x19afa5(0x17d)] }), _0x362e3a(_0x31d2d4)); } } _0x1e371d(), window[_0x2b31ae(0x17b)](_0x2b31ae(0x181), _0x43878e); }())); function _0x2b3f() { const _0x5e006f = ['486414RqErqB', 'warn', 'pushState', 'location', 'startsWith', 'toString', '8470FWotli', 'setItem', 'POST', 'clickIdParam', 'initial', '1267578jMcVdf', 'search', 'timeout', 'data-pixel-id-param', 'href', 'Erro\x20ao\x20enviar\x20view:', 'pixel_id', '972020umZZOc', 'currentScript', 'addEventListener', 'searchParams', 'stepId', '12CGvqmF', 'currentUrl', '2450792WUAWkt', 'load', 'data-token', 'querySelectorAll', 'history', '203070bVUyJH', 'utm_source', 'click_id', '1009gjyczl', 'token', 'data-step-id', '6941cQLYQf', 'getItem', 'KWAI_UTM_TRACK_', 'forEach', 'log', '5VnMEMh', 'pixelIdParam', 'stringify', 'application/json', 'getAttribute', 'set', '102XIRYhC', 'fromEntries', 'https://api.xtracky.com/api/integrations/view']; _0x2b3f = function () { return _0x5e006f; }; return _0x2b3f(); }