// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Copyright (c) 2018 Alexandre Storelli

"use strict";
const axios = require("axios");

module.exports = async function(exturl) {
	try {
		const req = await axios.get(exturl);
		const parsedResult = req.data;

		// get program
		var meta1 = parsedResult["on_air_program"].title;
		var presenter = parsedResult["on_air_program"]["presenters"][0]["name"];
		var cover = parsedResult["on_air_program"]["cover_uri"];

		// get music title, if any
		var records = parsedResult.schedule;
		var now = Math.round(+new Date()/1000); // epoch
		for (var i=0; i<records.length; i++) {
			if (records[i].info["start_ts"] < now && records[i].info["end_ts"] > now) {
				return { artist:records[i].artists[0].name, title:records[i].info["title"], cover: records[i].info["cover_uri"] };
			}
		}
		return { artist: presenter, title:meta1, cover: cover };
	} catch (err) {
		return { error: err };
	}
}