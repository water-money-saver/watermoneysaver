'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9d74abb609d34013ea6c4af24eecafeb",
"index.html": "0d8cc8ee3313c6cbdd665c5d280a89c9",
"/": "0d8cc8ee3313c6cbdd665c5d280a89c9",
"CNAME": "c454ae718f9c9a55de07a0693415da83",
"main.dart.js": "4d620fb8d2775252bdde18f1e8d81c9c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "f5fa087c30d3f5a51f4d8569dff537fa",
"icons/Icon-maskable-512.png.png": "16f7ae7deb490459064ba6778e1aa6e2",
"icons/Icon-192.png": "d1a52af1cc4393dd91020ff9955cd6fb",
"icons/Icon-maskable-192.png": "d1a52af1cc4393dd91020ff9955cd6fb",
"icons/Icon-512.png": "16f7ae7deb490459064ba6778e1aa6e2",
"manifest.json": "ef4f1079910ab5e89cd0862c8603b095",
".git/ORIG_HEAD": "9423b60e6cc8a8d3c10b15f4c9494ec9",
".git/config": "6967b4361a0c275f4bbce8b69fac9fe6",
".git/objects/0d/4b1abe8b6e40390157e7e9e6d3f95ac6650c05": "201f849ffbe94d5d7dc2a55406931ffd",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/66/04d25570d379259d1b28fc6cd6f65d624cf47e": "3282ae00d7185687e3570c67a5970844",
".git/objects/03/fecf7f84aa63ef9a81beb07b96556783a8e0b1": "88d3af1118cdaa8fd8394f13a29f3017",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/54925313f8c3bc96be89b56dc58725f9af6e44": "9f0d6b0259c7f272c40c75185ce306d0",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/94/7381233f39a352ed570a232ffbbc0dfbb44566": "f9190fe50d95fdea3845d55c6116a541",
".git/objects/5a/96917d3d636f921c3778e55685dec052c1eff2": "42c95f930019239cd2d6428d94610439",
".git/objects/5a/169d8e081f78743c0087896efb0111d1c873ef": "0033d8aaae937f5cb9e559d3e9310c3b",
".git/objects/9d/13e43cbca8b8c2b7f68219ed9b875b4dc9a2cb": "776fc2ed5bb533c30ce1e02171f00cff",
".git/objects/9c/6caeadd124cd6e05c4e5a117b1c8b9e0db8a3c": "f25b5b2493f805bcb45330a16b85f8a1",
".git/objects/a3/eba70b1eb769dbe1be29a5cacbe003f5c8bf4c": "1148d3e7998fd9cbd6d68aae7afd2127",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/cc24d348485cb34815396c318e3d3cf3ecacea": "247919fff11d5989a6bebdcd1f2c04ec",
".git/objects/b2/e2b6e9b8ace6de4c9ca38c0798f3a4c78ec681": "9e342ff6c840ffd3f87ffb4ea8cf452d",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/e9893cecb9d4e399571aff3634f6c33e491278": "57d817375c036c10d46887e7de2bb746",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/ae/623c476f9c8309aa5cc498de057feb169cab1f": "be741f8542862ef1c6ed57946471b71e",
".git/objects/ae/15061cb5337509cc4dcfd10bb7db085ce15f09": "f57aefd251f54704633b4b6738fd6cd0",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/c0/19c490b0d5dcddccb9c1c93587f6ea8ccdbc2f": "f55717945ce5da0b06d7cfab287a8929",
".git/objects/f2/7b553c5ae1f62292b819201fe9b23e552d0cc8": "07a8f088a928871ce5a1937012d97831",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/fb/a4788fd47ba2216ad1f3bca4a0d9606cde1307": "85472e3e6b389a172bdb433629f66e5a",
".git/objects/c6/e0476f6c846008c5fedc96941dd273198ec852": "352474d3f500b95f064bdf40c9cbd78f",
".git/objects/18/500a8a53cfc0bcd3328b2195b1a19b7154402d": "0fd079831a9fb124c22898421cdbbece",
".git/objects/4b/ebb7581b7d7996fc4b7a8f43881875af78b35e": "ae385fb929f8a3bcee5b8c221bb95b30",
".git/objects/74/13982b4853cb5c7575e6bacb500a3e45da2ddc": "2a5e243ccf2f8d91d9ccb540932f57e0",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/7b/e9a276c9d0565ecac9e211be6eab94eb5a8b63": "f833b978c09f3904b08254a848ac35bd",
".git/objects/8a/b2ad5fbabf5eb5f2117508a40e9cc8a378e1e4": "eddcf039e6572eeb4d0cda3e9eea6ef7",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/5364c4366e71b09aa4b92dac44e226d8b5a83e": "180b0a231cb039d9be8e1f4ec93891d1",
".git/objects/4d/37f83e01d4220668e777c0659547b393b77df8": "4ad74922ff51c295ab2e6ff61626eea5",
".git/objects/72/2bf4915e2883d2bbcebceb89bea251776ed08e": "b446dfdf7ebec8f148ad7d29b8a3e5ce",
".git/objects/44/6ed19912a815c9f099ac48d13a542ac892132b": "d3a951da71c2dc30cbcdebb4e80125dd",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/9a/3cc86cd7f9735ceaa7006ac1bd2360d9251968": "065a57232c4b2d8867d09b546abb84a5",
".git/objects/9a/2800b06b83524a08e69e2640d0cde005276a73": "3b1a81890826aa572149500f7f8b05f7",
".git/objects/9a/9fa89fa9ecabcd40471024e70c2574bd4e99e4": "ec7b1cb77c6fdb94a472288f5b07823f",
".git/objects/36/401b763d28c33f6d82fcc7ff70ae5f0f196d81": "1a66668d91303db2667b6fe95a8a1a34",
".git/objects/5d/c4e7bc297d424ae0242a8288e3e7b4c7773136": "20bb18d4065abfa9e85c3b33c604bfd9",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/65/efe8cfbfe29a8c2e76877cee9185cac28c1aab": "3b1d25f16779760ee6f1c7614eb0de5b",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/30/6d9492b05456fe043745a0f73bed3887a3b3bd": "afea9751eaba1c5b582162e3a70b5792",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/6d/29029b5414debd7b1ee8890c8aecf25dafdbe5": "453ce5a224762f5ee2f80952a6a57cf7",
".git/objects/01/82c75322e0e8564f6f33629824f30a1391394c": "4512fd2fcb66f50d8e2c1323a710f7d6",
".git/objects/52/dcef4e809e6f2de5e2d0000bf1443de01fa852": "a8ba10600bf94873231b37336bf1a4b1",
".git/objects/55/5ce93b3ef5e323f7c609bdc60cd66e72f7659f": "cea96fc482d96d636f6e1673ac744682",
".git/objects/97/8ca2e3380314f3d9622291475a6b897c57755d": "ed3aa239982957bd124b93d4372e0b7e",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/0a/1c72cf2d3dbf23a2f13b46588d35ad74161ba4": "7e516900b7d5f8cdd3810bf525fbaaa6",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/90/669d5462fe4bf8b6e98addd1b9c320ba600470": "45e8131c1b6e88d48c8222e4ce362042",
".git/objects/90/9c708fe987aeb9f78c5153347c4cb232aa5cc4": "5de07ec439c5182068d24e881bda0e02",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/b8/059444d37459fb6a4b0c73293e6af58b005615": "4ba35e2bde24720e6cc6e113cfa9f86a",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/b6/3a55b4be6f4e4ca797a0ad5d21cd2c1aee531c": "ec891186eec80b47d05564ca0467168d",
".git/objects/a8/f06174fbb238b2e77ecf0a4a0e0694405516ea": "aa1559943f2c33621236ed813b0b803c",
".git/objects/a8/80946e039ba9084710b28b03e3e5dc9491f600": "9b4ae0edcdacfa2351946aba2b4b3282",
".git/objects/de/75ae78fddd3b4bd2cbf2c2409d87d7310166cb": "fa75c5f16c2fe7ae0112312dab77757c",
".git/objects/c4/96f06b017fd545c096d513d8d60677511ee8fe": "56f60036aecdeef44e0502d79f2d1dd0",
".git/objects/cc/b8bc841b5e7432e6c0bcd6dc8e68a4f01d1a02": "5c4060348da9e0f1f12a4c0f5c0a6f7e",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/f0/5db13c107eb3acf344df976dcff6c52773e184": "34d6b6f7fbc0c7f3db0a4b015b514070",
".git/objects/f7/12d3c0665f5e6e34c0ddf8529f4749cf5c41b5": "18eb040b8db8e89e715b08054684d638",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/e7/e0700778453fa9a8fe0c043d2e9c7679882ebc": "b0b1a4cef3831de70f320eef550e0add",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/2c/85764ee30cf1a456d28f6c91942055f0684f71": "d99e11a74c22c5d193643dcbfd1fbe2d",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/41/45290a7728f256d9171fae183b084136d0ff44": "96b4f30751f9f3f8ba77c1ffc085c7ba",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/7b9e11a6b0776529edbbbbd1f36414c07c4af3": "37d3271ed65a7a6ceceb269452e2b41a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4a/0c2a46e22d5fe561cc05137feb6a0eb956cc2b": "d6301683786125dca34ac74a0bc3a696",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/15/c17b2084eb406740ed97d26924d00aadfe3b43": "cf720c9aa22fa9b8fd03f164b2b129be",
".git/objects/1d/57f39bcd473d34539cbf70a8f82937019553ec": "5a674d2ac0059436d338b8f498c0e166",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/82/2086d2df052e309d88de3fdeb9d704d5dd13d2": "61f854b26e87c7dbc8b52ebd37e6abfc",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "de6248e22ffa6b800b43f3eade3fd272",
".git/logs/refs/heads/main": "de6248e22ffa6b800b43f3eade3fd272",
".git/logs/refs/remotes/origin/main": "24599e4a39933f2fadef2a6277041b4e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "489d69889f90d9c88cdc81347b6eadfb",
".git/refs/remotes/origin/main": "489d69889f90d9c88cdc81347b6eadfb",
".git/index": "6c24ebb5102f56f44746b5069e4e46fd",
".git/COMMIT_EDITMSG": "abb82c660dc24714822d3e324cf087ca",
".git/FETCH_HEAD": "e629c9f28a9f028104c4b3d6a0a64202",
"assets/images/default_empty_view_image_mobile.png": "e0333daa0bf04df60e7eb3ac947b1bce",
"assets/images/neutral_sentiment.png": "4c021faf7697130824d7d3c457ea5836",
"assets/images/appbar_background.png": "a4cf970d3a177f147b678d69bcde5e6d",
"assets/images/apes_logo.png": "8289123f62dcd033faadfd1e29d1704b",
"assets/images/profile_icon.png": "3f1b482f0b30553cf3934ea8a6fba79f",
"assets/images/positive_sentiment.png": "877819d01179a702439a786a5e17e4ee",
"assets/images/consumption_icon.png": "6fa0a9b5262d7b9f825d0e5b724c58e6",
"assets/images/before_wizard.png": "67821a540e4344a4255731a132f6b743",
"assets/images/after_wizard.png": "a2e12ecc85d839ec605eb0d50776e3fa",
"assets/images/office_icon.png": "97bcca4dcba5c06d9be561d08c1ed741",
"assets/images/home_icon.png": "b3aca66a54ef0cbf1b4a2c95db59714f",
"assets/images/water_icon.png": "f36064544b9d2c599008497a6311e2bd",
"assets/images/finished_wizard.png": "e6bf1e7b0543cc07ad3a2629902685de",
"assets/images/home_mobile_background.png": "bd03b286fc2824237ee9e0cba0e023c6",
"assets/images/reach_us_icon.png": "a6608746c63606fe408756546cc1a70a",
"assets/images/co2_icon.png": "6c87a37a5e336f38bb3e4b8c6746054d",
"assets/images/water.png": "0f7d12652d6f05c3201196b63d3818e3",
"assets/images/negative_sentiment.png": "acd7d9d0c1be91804dc9f432649a4c90",
"assets/images/money.png": "97c5422c4bcde1e92a88c3b48026ce15",
"assets/images/offers_icon.png": "ace6250b99b005177e4e006c604510f2",
"assets/images/money_icon.png": "cc22399a494a29f17818f63df39c5347",
"assets/images/learn_icon.png": "2736ae774bf580b621eb12b322ac04c8",
"assets/images/solutions_icon.png": "0c1940ac69132d5d539c53597ab265a7",
"assets/images/wms_logo.png": "2cf1f7ad832f64d81992bfece7e1498c",
"assets/images/home_desktop_background.png": "4a2cd73c32307f920f962d8ae870cd56",
"assets/AssetManifest.json": "c32b00b5d7b3950493a38d9bf7e0d8b3",
"assets/NOTICES": "8d260f2d510de9f61635ddef0ef78514",
"assets/languages/en.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/languages/ar.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "4876d2f6873eb7c4c7d68af429d466f8",
"assets/fonts/MaterialIcons-Regular.otf": "6bd470777ec475eaf6135836b6412ff2",
"assets/assets/images/default_empty_view_image_mobile.png": "e0333daa0bf04df60e7eb3ac947b1bce",
"assets/assets/images/neutral_sentiment.png": "4c021faf7697130824d7d3c457ea5836",
"assets/assets/images/appbar_background.png": "a4cf970d3a177f147b678d69bcde5e6d",
"assets/assets/images/apes_logo.png": "8289123f62dcd033faadfd1e29d1704b",
"assets/assets/images/profile_icon.png": "3f1b482f0b30553cf3934ea8a6fba79f",
"assets/assets/images/positive_sentiment.png": "877819d01179a702439a786a5e17e4ee",
"assets/assets/images/consumption_icon.png": "6fa0a9b5262d7b9f825d0e5b724c58e6",
"assets/assets/images/before_wizard.png": "67821a540e4344a4255731a132f6b743",
"assets/assets/images/after_wizard.png": "a2e12ecc85d839ec605eb0d50776e3fa",
"assets/assets/images/office_icon.png": "97bcca4dcba5c06d9be561d08c1ed741",
"assets/assets/images/home_icon.png": "b3aca66a54ef0cbf1b4a2c95db59714f",
"assets/assets/images/water_icon.png": "f36064544b9d2c599008497a6311e2bd",
"assets/assets/images/finished_wizard.png": "e6bf1e7b0543cc07ad3a2629902685de",
"assets/assets/images/home_mobile_background.png": "bd03b286fc2824237ee9e0cba0e023c6",
"assets/assets/images/reach_us_icon.png": "a6608746c63606fe408756546cc1a70a",
"assets/assets/images/co2_icon.png": "6c87a37a5e336f38bb3e4b8c6746054d",
"assets/assets/images/water.png": "0f7d12652d6f05c3201196b63d3818e3",
"assets/assets/images/negative_sentiment.png": "acd7d9d0c1be91804dc9f432649a4c90",
"assets/assets/images/money.png": "97c5422c4bcde1e92a88c3b48026ce15",
"assets/assets/images/offers_icon.png": "ace6250b99b005177e4e006c604510f2",
"assets/assets/images/money_icon.png": "cc22399a494a29f17818f63df39c5347",
"assets/assets/images/learn_icon.png": "2736ae774bf580b621eb12b322ac04c8",
"assets/assets/images/solutions_icon.png": "0c1940ac69132d5d539c53597ab265a7",
"assets/assets/images/wms_logo.png": "2cf1f7ad832f64d81992bfece7e1498c",
"assets/assets/images/home_desktop_background.png": "4a2cd73c32307f920f962d8ae870cd56",
"assets/assets/languages/en.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/languages/ar.json": "99914b932bd37a50b983c5e7c90ae93b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
