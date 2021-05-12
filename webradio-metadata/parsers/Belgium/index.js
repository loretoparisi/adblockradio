// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Copyright (c) 2018 Alexandre Storelli

module.exports = [
	{ name: "Bel-RTL", url: "https://www.rtl.be/belrtl/js/json/bel-epg-today.json", parser: require("./Bel-RTL") },
	{ name: "MNM", url: "https://services.vrt.be/playlist/onair?channel_code=55", parser: require("./MNM") },
	{ name: "Radio 1", url: "wss://services-nowonair.vrt.be/nowonair/194/srcl1vc2/websocket", parser: require("./Radio 1") },
	{ name: "RTBF La Première", url: "http://np.maradio.be/qp/v3/events?rpId=1103", parser: require("./RTBF La Première") },
	{ name: "Studio Brussel", url: "https://services.vrt.be/playlist/onair?channel_code=41&accept=application%2Fvnd.playlist.vrt.be.noa_1.0%2Bjson", parser: require("./Studio Brussel") },
	{ name: "Zen FM", url: "https://zenfm.be/wp-admin/admin-ajax.php", parser: require("./Zen FM") },
]