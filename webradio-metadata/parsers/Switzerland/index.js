// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Copyright (c) 2018 Alexandre Storelli

module.exports = [
	{ name: "RTS La Premiere", url: "https://www.rts.ch/play/radio/songlog/a9e7621504c6959e35c3ecbe7f6bed0446cdf8da", parser: require("./RTS Couleur 3") },
	{ name: "RTS Couleur 3", url: "https://www.rts.ch/play/radio/songlog/8ceb28d9b3f1dd876d1df1780f908578cbefc3d7", parser: require("./RTS Couleur 3") },
	{ name: "Spoon Radio", url: "http://www.spoonradio.com/playingnow.xml", parser: require("./Spoon Radio") },
]