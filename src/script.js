var pcontent = '<div id="tls"><div class="tl config config_e" title="Show Your Playlist"></div><div class="tl arrowright arrowright_m" title="Increase Number Of Loaded Videos"></div><div class="tl arrowleft arrowleft_m" title="Decrease Number Of Loaded Videos"></div><div class="tl pindown pindown_m" title="Repeat Current Video"></div><div class="tl pinleft pinleft_m" title="Exact Search"></div><div class="tl dblarrowright dblarrowright_m" title="Repeat Current Playlist"></div><div class="tl dblarrowleft dblarrowleft_m" title="Shuffle"></div><div class="tl refresh refresh_m" title="Random From Playlist"></div><div class="tl plus plus_b" title="Add Term To Playlist"></div><div class="tl search" title="Show Song Playlists"></div><div class="alerts"></div></div><div id="oW"><div id="w"><div id="hd" class="cf"><div id="l"><div><span>HnS YouTube Instant</span></div></div><input type="text" id="sB" value="" spellcheck="false"></input><div id="sTW"><div id="sTK"><strong>Search YouTube Instantly</strong></div></div><div id="sug"></div></div><div id="m" class="cf"><div id="vD"><div id="iVD">Loading...</div></div><div id="pD"><div id="pW"><div id="pl" class="cf">&nbsp;</div></div><div id="uP"><div id="pI"><input type="text" id="pB" value="Add to Playlist" spellcheck="false"></input></div><ul id="pl" class="cf"></ul></div><div id="sP"><div id="pH"><div id="sPI"><input type="text" id="sPB" value="Search Playlists" spellcheck="false"></input></div><div id="sH"><div id="pN">&nbsp;</div><img id="btp" src="i/back.png"></div></div><ul id="pls" class="cf">&nbsp;</ul><div id="plsr" class="cf">&nbsp;</div></div></div><div id="ft" class="cf"><div id="api"><iframe id="fblike" scrolling="no" frameborder="0" src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fyoutube.com&layout=standard&show_faces=true&action=like&font=arial&colorscheme=light&height=70&width=720&send=true" allowTransparency="true"></iframe><div id="sub"><iframe id="twitter" scrolling="no" frameborder="0" src="http://platform.twitter.com/widgets/tweet_button.html?count=horizontal&text=Watch%20Videos%20On%20YouTube&url=http%3A%2F%2Fwww.youtube.com&via=HnSYouTube" allowtransparency="true"></iframe><iframe id="fbshare" scrolling="no" frameborder="0" src="http://s.youtube-3rd-party.com/facebook_share.html?appid=87741124305&href=http%3A%2F%2Fwww.youtube.com&base_url=http%3A%2F%2Fwww.youtube.com&locale=US" allowtransparency="true"></iframe></div></div></div></div></div></div><div id="hnsft"><div id="fbauth"><fb:login-button autologoutlink="true" perms="user_likes,friends_likes,publish_stream"></fb:login-button><div id="fb-root"></div></div><div id="buzz-container"><a title="Post to Google Buzz" class="google-buzz-button" href="http://www.google.com/buzz/post" data-button-style="normal-button" data-url="http://hnsyoutube.webs.com"></a></div><div id="plusone-container"><div class="g-plusone" data-size="standard" data-count="true" data-href="http://hnsyoutube.webs.com"></div></div><iframe id="hnslike" src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fhnsyoutube.webs.com&layout=standard&show_faces=false&action=like&font=arial&colorscheme=light&height=40&width=550&send=true" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div><img id="hc" src="http://www.website-hit-counters.com/cgi-bin/image.pl?URL=572179-3134">';
var dC = {
	"title": "HnS YouTube Instant",
	"vThumbs": 10,
	"playerWidth": 720,
	"playerHeight": 405,
	"thumbHeight": 99,
	"playlist": [],
	"playlists": [],
	"history": [],
	"sresults": [],
	"cplaylist": "",
	"csplaylist": "",
	"exactSearch": false,
	"pSResults": false,
	"sBFocus": false,
	"sPBFocus": false,
	"pBFocus": false,
	"sPL": false,
	"sLS": false,
	"MSIE": false,
	"tls": false,
	"tl": {
		"playlists": false,
		"add": false,
		"random": false,
		"shuffle": false,
		"repeatp": false,
		"repeatv": false,
		"exact": false,
		"playlist": false
	}
};

function gIEV() {
	var a = -1;
	if (navigator.appName == 'Microsoft Internet Explorer') {
		var b = navigator.userAgent;
		var c = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (c.exec(b) != null) a = parseFloat(RegExp.$1)
	}
	return a
}

if ($.browser.msie) {
	if (gIEV() < 9) dC.MSIE = true
}

function supports_local_storage() {
	return ('localStorage' in window) && window['localStorage'] !== null
}

if (supports_local_storage()) dC.sLS = true;

$.fn.digits = function () {
	return this.each(function () {
		$(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
	})
};

(function (d) {
	var k = d.scrollTo = function (a, i, e) {
			d(window).scrollTo(a, i, e)
		};
	k.defaults = {
		axis: 'xy',
		duration: parseFloat(d.fn.jquery) >= 1.3 ? 0 : 1
	};
	k.window = function (a) {
		return d(window)._scrollable()
	};
	d.fn._scrollable = function () {
		return this.map(function () {
			var a = this,
				i = !a.nodeName || d.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
			if (!i) return a;
			var e = (a.contentWindow || a).document || a.ownerDocument || a;
			return d.browser.safari || e.compatMode == 'BackCompat' ? e.body : e.documentElement
		})
	};
	d.fn.scrollTo = function (n, j, b) {
		if (typeof j == 'object') {
			b = j;
			j = 0
		}
		if (typeof b == 'function') b = {
			onAfter: b
		};
		if (n == 'max') n = 9e9;
		b = d.extend({}, k.defaults, b);
		j = j || b.speed || b.duration;
		b.queue = b.queue && b.axis.length > 1;
		if (b.queue) j /= 2;
		b.offset = p(b.offset);
		b.over = p(b.over);
		return this._scrollable().each(function () {
			var q = this,
				r = d(q),
				f = n,
				s, g = {},
				u = r.is('html,body');
			switch (typeof f) {
			case 'number':
			case 'string':
				if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)) {
					f = p(f);
					break
				}
				f = d(f, this);
			case 'object':
				if (f.is || f.style) s = (f = d(f)).offset()
			}
			d.each(b.axis.split(''), function (a, i) {
				var e = i == 'x' ? 'Left' : 'Top',
					h = e.toLowerCase(),
					c = 'scroll' + e,
					l = q[c],
					m = k.max(q, i);
				if (s) {
					g[c] = s[h] + (u ? 0 : l - r.offset()[h]);
					if (b.margin) {
						g[c] -= parseInt(f.css('margin' + e)) || 0;
						g[c] -= parseInt(f.css('border' + e + 'Width')) || 0
					}
					g[c] += b.offset[h] || 0;
					if (b.over[h]) g[c] += f[i == 'x' ? 'width' : 'height']() * b.over[h]
				} else {
					var o = f[h];
					g[c] = o.slice && o.slice(-1) == '%' ? parseFloat(o) / 100 * m : o
				}
				if (/^\d+$/.test(g[c])) g[c] = g[c] <= 0 ? 0 : Math.min(g[c], m);
				if (!a && b.queue) {
					if (l != g[c]) t(b.onAfterFirst);
					delete g[c]
				}
			});
			t(b.onAfter);

			function t(a) {
				r.animate(g, j, b.easing, a &&
				function () {
					a.call(this, n, b)
				})
			}
		}).end()
	};
	k.max = function (a, i) {
		var e = i == 'x' ? 'Width' : 'Height',
			h = 'scroll' + e;
		if (!d(a).is('html,body')) return a[h] - d(a)[e.toLowerCase()]();
		var c = 'client' + e,
			l = a.ownerDocument.documentElement,
			m = a.ownerDocument.body;
		return Math.max(l[h], m[h]) - Math.min(l[c], m[c])
	};

	function p(a) {
		return typeof a == 'object' ? a : {
			top: a,
			left: a
		}
	}
})(jQuery);

function getHash() {
	return decodeURIComponent(window.location.hash.substring(1))
}

function clearHash() {
	window.location.replace("#")
}

function setHash(a) {
	window.location.replace("#" + encodeURI(a))
}

function setPHash(a) {
	a = (dC.cplaylist == "") ? a : "/" + dC.cplaylist + "/" + a;
	window.location.replace("#" + encodeURI(a))
}

function getTitle() {
	return document.title
}

function resetTitle() {
	document.title = dC.title
}

function setTitle(a) {
	document.title = a
}

function removeChars(c, d) {
	if (typeof c == "string") return d.split(c).join('');
	else {
		$.each(c, function (a, b) {
			d = d.split(b).join('')
		});
		return d
	}
}

Array.prototype.remove = function (a, b) {
	var c = this.slice(((b || a) + 1) || this.length);
	this.length = (a < 0) ? (this.length + a) : a;
	return this.push.apply(this, c)
};

Array.prototype.vIndex = function (a) {
	for (i = 0; i < this.length; i++) {
		if (this[i] == a) return i
	}
	return -1
};

Array.prototype.contains = function (a) {
	for (var i = (this.length - 1); i >= 0; i--) {
		if (this[i] === a) return true
	}
	return false
};

Number.prototype.toLength = function (n) {
	var a = this.toString();
	while (a.length < n) a = '0' + a;
	return a
};

String.prototype.startsWith = function (a) {
	return (this.match("^" + a) == a)
};

String.prototype.capitalize = function () {
	return this.replace(/(^|\s)([a-z])/g, function (m, a, b) {
		return a + b.toUpperCase()
	})
};

String.prototype.toTitleCase = function () {
	return this.replace(/([\w&`'‘’"“.@:\/\{\(\[<>_]+-? *)/g, function (a, b, c, d) {
		if (c > 0 && d.charAt(c - 2) !== ":" && a.search(/^(a(nd?|s|t)?|b(ut|y)|en|for|i[fn]|o[fnr]|t(he|o)|vs?\.?|via)[ \-]/i) > -1) return a.toLowerCase();
		if (d.substring(c - 1, c + 1).search(/['"_{(\[]/) > -1) return a.charAt(0) + a.charAt(1).toUpperCase() + a.substr(2);
		if (a.substr(1).search(/[A-Z]+|&|[\w]+[._][\w]+/) > -1 || d.substring(c - 1, c + 1).search(/[\])}]/) > -1) return a;
		return a.charAt(0).toUpperCase() + a.substr(1)
	})
};

function IsRightButtonClicked(e) {
	var a = false;
	e = e || window.event;
	if (e.which) a = (e.which == 3);
	else if (e.button) a = (e.button == 2);
	return a
}

function two(x) {
	return ((x > 9) ? "" : "0") + x
}

function gettime(s) {
	var m = Math.floor(s / 60),
		h = Math.floor(m / 60),
		d = Math.floor(h / 60);
	if (d > 0) t = d + ":" + two(h % 60) + ":" + two(m % 60) + ":" + two(s % 60);
	else if (h % 60 > 0) t = (h % 60) + ":" + two(m % 60) + ":" + two(s % 60);
	else t = (m % 60) + ":" + two(s % 60);
	return t
}

function div_selection(e) {
	this.e = e;
	if (arguments.length === 2) this.eq = arguments[1];
	if (this.e.target) this.event = this.e.target;
	else this.event = this.e.srcElement;
	if (this.event.nodeType == 3) this.event = this.event.parentNode;
	if (typeof this.eq === "undefined") {
		this.target_class = function () {
			return $(this.event).attr('class')
		};
		this.target_id = function () {
			return $(this.event).attr('id')
		};
		this.target_html = function () {
			return $(this.event).html()
		};
		this.target_content = function () {
			return $(this.event).attr('content')
		}
	} else {
		this.selection = $(this.event).parents().eq(this.eq).attr('id');
		this.target_class = function () {
			return $(this.event).parents().eq(this.eq).attr('class')
		};
		this.target_id = function () {
			return $(this.event).parents().eq(this.eq).attr('id')
		};
		this.target_html = function () {
			return $(this.event).parents().eq(this.eq).html()
		};
		this.target_content = function () {
			return $(this.event).parents().eq(this.eq).attr('content')
		};
		this.main = function () {
			return this.selection
		}
	}
}

function loadPlaylist() {
	if (dC.sLS) {
		if (localStorage.getItem('playlist')) {
			dC.playlist = localStorage.getItem('playlist').split('|||');
			localStorage.clear();
			localStorage.setItem("playlist", dC.playlist.join('|||'))
		} else localStorage.clear();
		if (dC.playlist.length > 0) {
			$.each(dC.playlist, function (a, b) {
				$("div#uP ul#pl").append('<li>' + b + '</li>')
			})
		} else $("div#uP ul#pl").html('<li class="empty">No Videos Are In Your Playlist</li>')
	}
}

function getSongPlaylists() {
	if (dC.sLS) {
		$.getJSON("playlists.json", function (a) {
			if (a.data) localStorage['songPlaylists'] = JSON.stringify(a);
			if (!dC.sPL) loadSongPlaylists()
		})
	}
}

function loadSongPlaylists() {
	if (dC.sPL) return;
	dC.playlists = $.parseJSON(localStorage['songPlaylists'])["data"];
	var c = [];
	var d = [];
	$.each(dC.playlists, function (a) {
		var b = dC.playlists[a].length;
		if (a.substring(0, 5) == "Year ") c.push('<li id="' + a + '">' + a.substring(5) + '</li>');
		else c.push('<li id="' + a + '">' + a + '</li>');
		d.push('<ul class="pl ' + removeChars(' ', a) + '">');
		for (s = 0; s < b; s++) d.push('<li>' + dC.playlists[a][s] + '</li>');
		d.push('</ul>')
	});
	$("div#sP ul#pls").html(c.join(""));
	$("div#sP").append(d.join(""));
	dC.sPL = true;
	if (dC.cplaylist != "") hashPlaylist()
}

function hashPlaylist() {
	var a;
	$.each(dC.playlists["Playlists"], function (i, v) {
		if (!a) {
			if (v.toLowerCase().indexOf(dC.cplaylist.toLowerCase()) != -1) {
				a = v
			}
		}
	});
	if (a) {
		$("div#sP ul#pls").hide();
		$("div#sP div#pH div#sH div#pN").html(a);
		$("div#sP div#pH div#sH").show();
		$("div#sP div#sPI").hide();
		$("div#sP ul." + removeChars(' ', a)).show();
		$("div.tl.search").click()
	} else setHash(currentSearch)
}

$(window).load(function () {
	$("input[type='text']#sB").bind({
		keydown: function (e) {
			var a = e.keyCode || e.which;
			if (a == 9) {
				e.preventDefault();
				if (currentSuggestion) {
					var b = $("input[type='text']#sB").val().replace(/[^A-Za-z0-9]/g, " "),
						intIndex = b.indexOf("  ");
					while (intIndex != -1) {
						b = b.replace("  ", " ");
						intIndex = b.indexOf("  ")
					}
					var c = new RegExp("^" + b + "(.*?)( |$)", "ig");
					var d = currentSuggestion.match(c);
					if (d.length > 0) $("input[type='text']#sB").val(d)
				}
			}
		},
		paste: function (e) {
			var a = e.keyCode || e.which;
			if (!a) setTimeout(doInstantSearch, 350)
		}
	});
	$("div.tl.config").click(function () {
		dC.tl.playlist = !dC.tl.playlist;
		if (dC.tl.playlists) dC.tl.playlists = false;
		if ($("div.tl.config").hasClass("on")) $("div.tl.config").attr('title', 'Show Your Playlist');
		else $("div.tl.config").attr('title', 'Hide Your Playlist');
		$("div.tl.config").toggleClass("on");
		if ($("div.tl.search").hasClass("on")) $("div.tl.search").removeClass("on");
		if ($("div#pW").is(":visible")) {
			$("div#pW").hide();
			$("div#uP").show()
		} else if ($("div#uP").is(":visible")) {
			$("div#pW").show();
			$("div#uP").hide()
		} else if ($("div#sP").is(":visible")) {
			$("div#uP").show();
			$("div#sP").hide()
		}
	});
	$("div.tl.refresh").click(function () {
		loadRandomVideo(true)
	});
	$("div.tl.plus").click(function () {
		addItemYTPlaylist($.trim($("div#hd input[type='text']#sB").val()).capitalize())
	});
	$("div.tl.pinleft").click(function () {
		dC.tl.exact = !dC.tl.exact;
		if (dC.tl.playlist) dC.tl.playlist = false;
		if ($("div.tl.pinleft").hasClass("on")) $("div.tl.pinleft").attr('title', 'Exact Search');
		else $("div.tl.pinleft").attr('title', 'Suggestions Search');
		$("div.tl.pinleft").toggleClass("on");
		if (currentSearch != currentSuggestion) {
			currentSearch = '';
			doInstantSearch()
		}
	});
	$("div.tl.pindown").click(function () {
		dC.tl.repeatv = !dC.tl.repeatv;
		if (dC.tl.repeatp) dC.tl.repeatp = false;
		if ($("div.tl.pindown").hasClass("on")) $("div.tl.pindown").attr('title', 'Repeat Current Video');
		else $("div.tl.pindown").attr('title', 'Remove Repeat');
		$("div.tl.pindown").toggleClass("on");
		if ($("div.tl.dblarrowright").hasClass("on")) $("div.tl.dblarrowright").removeClass("on")
	});
	$("div.tl.dblarrowright").click(function () {
		dC.tl.repeatp = !dC.tl.repeatp;
		if (dC.tl.repeatv) dC.tl.repeatv = false;
		$("div.tl.dblarrowright").toggleClass("on");
		if ($("div.tl.pindown").hasClass("on")) $("div.tl.pindown").removeClass("on")
	});
	$("div.tl.dblarrowleft").click(function () {
		dC.tl.shuffle = !dC.tl.shuffle
	});
	$("div.tl.arrowleft").click(function () {
		if (dC.vThumbs > 1) dC.vThumbs--;
		$("div.alerts").promise().done(function () {
			$(this).html(dC.vThumbs).fadeIn(function () {
				$(this).fadeOut('fast')
			})
		})
	});
	$("div.tl.arrowright").click(function () {
		if (dC.vThumbs < 50) dC.vThumbs++;
		$("div.alerts").promise().done(function () {
			$(this).html(dC.vThumbs).fadeIn(function () {
				$(this).fadeOut('fast')
			})
		})
	});
	$("div.tl.search").click(function () {
		dC.tl.playlists = !dC.tl.playlists;
		if (dC.tl.playlist) dC.tl.playlist = false;
		if ($("div.tl.search").hasClass("on")) $("div.tl.search").attr('title', 'View Song Playlists');
		else $("div.tl.search").attr('title', 'See Search Results');
		if (!dC.sPL) getSongPlaylists();
		$("div.tl.search").toggleClass("on");
		if ($("div#pW").is(":visible")) $("div#pW").hide();
		else if ($("div.tl.config").hasClass("on") || $("div#uP").is(":visible")) {
			$("div.tl.config").removeClass("on");
			$("div#uP").hide()
		}
		if ($("div#sP").is(":visible")) {
			$("div#pW").show();
			$("div#sP").hide()
		} else $("div#sP").show()
	});
	$("div#hd input[type='text']#sB").focus(function () {
		dC.sBFocus = true
	}).blur(function () {
		dC.sBFocus = false
	});
	$("div#sP input[type='text']#sPB").focus(function () {
		if ($(this).val() == "Search Playlists") $(this).val('');
		dC.sPBFocus = true
	}).blur(function () {
		if ($(this).val() == "") $(this).val('Search Playlists');
		dC.sPBFocus = false
	});
	$("div#uP input[type='text']#pB").focus(function () {
		if ($(this).val() == "Add to Playlist") $(this).val('');
		dC.pBFocus = true
	}).blur(function () {
		if ($(this).val() == "") $(this).val('Add to Playlist');
		dC.pBFocus = false
	});
	$("div#sug ul#suggest li").live('mousedown', function (e) {
		try {
			var b = new div_selection(e);
			var c = b.target_content().capitalize()
		} catch (a) {
			var b = new div_selection(e, 0);
			var c = b.target_content().capitalize()
		}
		if (IsRightButtonClicked(e)) {
			e.preventDefault();
			addItemYTPlaylist(c)
		} else {
			$("input[type='text']#sB").val(c);
			var d = new RegExp("^" + c, "i");
			if (currentSuggestion.match(d)) dC.exactSearch = true;
			doInstantSearch()
		}
	});
	$("div#uP ul#pl li").live('mousedown', function (e) {
		var a = new div_selection(e);
		a = a.target_html();
		if (IsRightButtonClicked(e)) {
			e.preventDefault();
			var b = dC.playlist.vIndex(a);
			dC.playlist.remove(b);
			localStorage.setItem("playlist", dC.playlist.join('|||'));
			if (dC.playlist.length == 0) {
				$("div#uP ul#pl").html('<li class="empty">No Videos Are In Your Playlist</li>');
				localStorage.removeItem('playlist')
			}
			$("div#uP ul#pl li").remove(":contains('" + a + "')")
		} else {
			$("input[type='text']#sB").val(a);
			doInstantSearch();
			$("div.tl.config").click()
		}
	});
	$("div#sP ul#pls li").live('click', function (e) {
		var a = new div_selection(e);
		a = a.target_id();
		$("div#sP ul#pls").hide();
		$("div#sP div#pH div#sH div#pN").html(a);
		$("div#sP div#pH div#sH").show();
		$("div#sP div#sPI").hide();
		$("div#sP ul.pl." + removeChars(' ', a)).show();
		dC.cplaylist = a;
		if (currentSearch == "") setHash("/" + a);
		else setHash("/" + a + "/" + currentSearch)
	});
	$("div#sP ul.pl li").live('mousedown', function (e) {
		var a = new div_selection(e);
		a = a.target_html();
		if (IsRightButtonClicked(e)) {
			e.preventDefault();
			addItemYTPlaylist(a)
		} else {
			$("input[type='text']#sB").val(a);
			doInstantSearch();
			$("div.tl.search").click()
		}
	});
	$("div#sP div#pH img#btp").click(function (e) {
		if ($("div#sP div#plsr").is(":hidden")) {
			$("div#sP div#sPI").show();
			$("div#sP ul#pls").show();
			$("div#sP div#pH div#sH").hide();
			$("div#sP ul.pl").hide();
			$("div#sP div#pH div#sH div#pN").html('');
			dC.cplaylist = "";
			if (currentSearch == "") clearHash();
			else setHash(currentSearch)
		} else {
			$("div#sP div#sPI").show();
			$("div#sP div#plsr ul#pl").show();
			$("div#sP div#pH div#sH").hide();
			$("div#sP div#plsr ul.pl").hide();
			$("div#sP div#pH div#sH div#pN").html('');
			dC.csplaylist = "";
			if (currentPSearch == "") clearHash();
			else setHash(currentPSearch)
		}
	});
	$("div#sP div#plsr ul#pl li").live('click', function (e) {
		var a = new div_selection(e);
		a = a.target_id();
		$("div#sP div#plsr ul#pl").hide();
		$("div#sP div#pH div#sH div#pN").html(a);
		$("div#sP div#pH div#sH").show();
		$("div#sP div#sPI").hide();
		$("div#sP div#plsr ul.pl." + removeChars(' ', a)).show();
		dC.csplaylist = a;
		if (currentPSearch == "") setHash("/" + a);
		else setHash("/" + a + "/" + currentPSearch)
	});
	$("div#sP div#plsr ul.pl li").live('mousedown', function (e) {
		var a = new div_selection(e);
		a = a.target_html();
		if (IsRightButtonClicked(e)) {
			e.preventDefault();
			addItemYTPlaylist(a)
		} else {
			$("input[type='text']#sB").val(a);
			doInstantSearch();
			$("div.tl.search").mousedown()
		}
	});
	$("div#pW div#pl img.addvideo").live('click', function (e) {
		var a = new div_selection(e);
		addItemYTPlaylist($.trim(a.target_content()).capitalize())
	});
	$("div#pW div#pl img.viewvideo").live('click', function (e) {
		var a = new div_selection(e);
		$("input[type='text']#sB").val(a.target_content());
		doInstantSearch()
	});
	$("div#pW div#pl img.videolink").live('click', function (e) {
		var a = new div_selection(e);
		var b = a.target_content();
		window.open('http://www.youtube.com/watch?v=' + b)
	});
	$("div#pW div#pl img.dvideolink").live('click', function (e) {
		var a = new div_selection(e);
		var b = a.target_content();
		window.open('http://keepvid.com/?url=http://www.youtube.com/watch?v=' + b)
	});
	$("div#pW div#pl img.daudiolink").live('click', function (e) {
		var a = new div_selection(e);
		var b = a.target_content();
		window.open('http://www.listentoyoutube.com/index.php?url=http://www.youtube.com/watch?v=' + b)
	})
});

function loadPlayer() {
	currentVideoId = "_2c5Fh3kfrI";
	var a = {allowScriptAccess: "always"};
	var b = {id: "ytplayer",allowFullScreen: "true"};
	swfobject.embedSWF("http://www.youtube.com/v/" + currentVideoId + "?version=3&enablejsapi=1&playerapiid=ytplayer&autoplay=0&loop=1&fs=1&hd=0&showsearch=0&showinfo=1&iv_load_policy=3", "iVD", dC.playerWidth, dC.playerHeight, "8", null, null, a, b)
}

function onYouTubePlayerReady(a) {
	ytplayer = document.getElementById("ytplayer");
	ytplayer.addEventListener("onStateChange", "onPlayerStateChange");
	ytplayer.addEventListener("onError", "onPlayerError");
	$("input[type='text']#sB").keyup(doInstantSearch);
	$("input[type='text']#sPB").keyup(doPlaylistSearch);
	$(document.documentElement).keydown(onKeyDown);
	if (window.location.hash) doHash();
	else $("div.tl.search").click();
	onBodyLoad();
	doInstantSearch()
}

function doHash() {
	var a = $("input[type='text']#sB");
	var b = getHash();
	if (b.charAt(0) == "/") {
		b = b.substring(1);
		if (b.length > 0) {
			var c = b.indexOf("/");
			if (c != -1) {
				if (b.length > 1) {
					if (b.length == c + 1) {
						dC.cplaylist = b.substring(0, c)
					} else {
						dC.cplaylist = b.substring(0, c);
						a.val(b.substring(c + 1, b.length)).focus()
					}
				}
			} else dC.cplaylist = b
		} else $("div.tl.search").click()
	} else a.val(b).focus()
}

function doTHash() {
	var a = $("input[type='text']#sB");
	var b = getHash();
	if (b.charAt(0) == "/" || b.charAt(0) == "(") {
		b = b.substring(1);
		if (b.length > 0) {
			var c = b.indexOf(")");
			if (c != -1) {
				if (b.length > 1) {
					if (b.length == c + 1) {
						dC.cplaylist = b.substring(0, c)
					} else {
						dC.cplaylist = b.substring(0, c);
						a.val(b.substring(c + 1, b.length)).focus()
					}
				}
			} else {
				dC.cplaylist = b
			}
		} else $("div.tl.search").click()
	} else a.val(b).focus()
}

function onBodyLoad() {
	currentSearch = '';
	currentPSearch = '';
	currentSuggestion = '';
	currentVideoId = '';
	currentVideoTitle = '';
	currentVideoTitles = [];
	playlistShowing = false;
	playlistArr = [];
	currentPlaylistPos = 0;
	currentPlaylistPage = 0;
	xhrWorking = false;
	pendingSearch = false;
	pendingDoneWorking = false;
	playerState = -1;
	hashTimeout = false
}

function onPlayerStateChange(a) {
	playerState = a;
	if (pendingDoneWorking && playerState == 1) {
		doneWorking();
		pendingDoneWorking = false
	} else if (playerState == 0) {
		if (!$("div.tl.pindown").hasClass("on")) goNextVideo()
		else seekTo(0);
	}
}

function onPlayerError(a) {
	goNextVideo();
	$("div.alerts").html("Error! oPE Type: " + a).show().delay(5000).fadeOut(2000)
}

function addItemYTPlaylist(a) {
	var b = $.inArray(a, dC.playlist);
	if ((b == -1) || isNaN(b)) {
		if (dC.playlist.length == 0) $("div#uP ul#pl li.empty").remove();
		dC.playlist.push(a);
		localStorage.setItem("playlist", dC.playlist.join('|||'));
		$("div#uP ul#pl").append('<li>' + a + '</li>');
		if (arguments[1] === 1) $("div#uP input[type='text']#pB").val('')
	}
}

function doPlaylistSearch() {
	var a = $("input[type='text']#sPB");
	if (a.val() == currentPSearch) return;
	currentPSearch = a.val();
	if (currentPSearch == '' || currentPSearch.length < 3) {
		if ($("div#sP ul#pls").is(":hidden")) {
			$("div#sP ul#pls").show();
			$("div#sP div#plsr").hide()
		}
		return
	} else {
		if ($("div#sP ul#pls").is(":visible")) {
			$("div#sP div#plsr").show();
			$("div#sP ul#pls").hide()
		}
		updatePSearchResults(searchArr("/" + currentPSearch + "/i", dC.playlists))
	}
}

function updatePSearchResults(c) {
	var d = $("<ul />").attr('id', 'pl'),
		allplaylists = [];
	$.each(c, function (a) {
		var b = c[a].length;
		if (b == 0) return;
		if (a.substring(0, 5) == "Year ") d.append('<li id="' + a + '">' + a.substring(5) + '</li>');
		else d.append('<li id="' + a + '">' + a + '</li>');
		allplaylists.push('<ul class="pl ' + removeChars(' ', a) + '">');
		for (s = 0; s < b; s++) allplaylists.push('<li>' + c[a][s] + '</li>');
		allplaylists.push('</ul>')
	});
	if (allplaylists.length == 0) {
		$("div#sP div#plsr").html('<li class="empty">No Search Results for <b>' + currentPSearch + '</b></li>');
		dC.pSResults = false
	} else {
		$("div#sP div#plsr").html(d).append(allplaylists.join(""));
		dC.pSResults = true
	}
}

function searchArr(a, b) {
	var c = {},
		retObj = {};
	if (typeof a === 'string') a = eval(a);
	$.each(b, function (v) {
		c = b[v];
		retObj[v] = new Array();
		$.each(c, function (i, t) {
			if (t.match(a)) retObj[v].push(t)
		})
	});
	return retObj
}

function loadRandomVideo() {
	if (dC.cplaylist == "" || (dC.tl.playlist && dC.playlist.length > 0)) {
		if (dC.playlist.length == 0) {
			var a = ['YouTube', 'AutoTune', 'Rihanna', 'Far East Movement', 'Glee Cast', 'Nelly', 'Usher', 'Katy Perry', 'Taio Cruz', 'Eminem', 'Shakira', 'Kesha', 'B.o.B', 'Taylor Swift', 'Akon', 'Bon Jovi', 'Michael Jackson', 'Lady Gaga', 'Paramore', 'Jay Z', 'My Chemical Romance', 'The Beatles', 'Led Zepplin', 'Guns N Roses', 'AC DC', 'System of a Down', 'Aerosmith', 'Borat', 'Basshunter', 'Fall Out Boy', 'Blink 182', 'Pink Floyd', 'Still Alive', 'Men at Work', 'MGMT', 'Justin Bieber', 'The Killers', 'Bed Intruder Song', 'Baba O Riley', 'Billy Joel', 'Drake', 'Jay Sean', 'The Ready Set'];
			var b = Math.floor(Math.random() * a.length);
			$("input[type='text']#sB").val(a[b])
		} else {
			var b = Math.floor(Math.random() * dC.playlist.length);
			$("input[type='text']#sB").val(dC.playlist[b])
		}
	} else {
		var b = Math.floor(Math.random() * dC.playlists[dC.cplaylist].length);
		$("input[type='text']#sB").val(dC.playlists[dC.cplaylist][b])
	}
	if (arguments[0] === true) doInstantSearch()
}

function onKeyDown(e) {
	var a = e.keyCode || e.which,
		keys = [],
		bFocus = dC.sBFocus || dC.sPBFocus || dC.pBFocus;
	if (a == 9) dC.sBFocus || loadRandomVideo(true);
	else if (a == 39 || a == 40) bFocus || goNextVideo();
	else if (a == 37 || a == 38) bFocus || goPrevVideo();
	else if (a == 13) {
		if (!dC.sPBFocus && !dC.pBFocus) playPause();
		else if (dC.pBFocus) {
			if (($.trim($("div#uP input[type='text']#pB").val()) != '' && $.trim($("div#uP input[type='text']#pB").val()) != 'Add to Playlist')) {
				addItemYTPlaylist($.trim($("div#uP input[type='text']#pB").val()).capitalize(), 1)
			}
		} else if (dC.sPBFocus) {
			if (currentPSearch.length > 2 && !dC.pSResults) {
				$("input[type='text']#sB").val($("input[type='text']#sPB").val());
				doInstantSearch()
			}
		}
	} else if (a == 35) bFocus || seekTo(getDuration());
	else if (a == 36) bFocus || seekTo(0);
	else if (a == 33) seekTo(getCurrentTime() + 30);
	else if (a == 34) seekTo(getCurrentTime() - 30);
	else if (a == 27) cleanInterface();
	if (keys.contains(e.keyCode)) e.preventDefault()
}

function goNextVideo() {
	if (currentPlaylistPos == (dC.vThumbs - 1)) {
		if ($("div.tl.dblarrowright").hasClass("on")) goVid(0, currentPlaylistPage);
		else {
			loadRandomVideo();
			doInstantSearch()
		}
		return
	}
	goVid((currentPlaylistPos + 1), currentPlaylistPage)
}

function goPrevVideo() {
	if (currentPlaylistPos == 0) return;
	goVid((currentPlaylistPos - 1), currentPlaylistPage)
}

function goVid(a, b) {
	if (!playlistShowing) return;
	if (b != currentPlaylistPage) {
		currentPlaylistPage = b;
		return
	}
	loadAndPlayVideo(playlistArr[b][a].id, a)
}

function doInstantSearch() {
	if (xhrWorking) {
		pendingSearch = true;
		return
	}
	var c = $("input[type='text']#sB");
	if ($.trim(c.val()) == currentSearch) return;
	currentSearch = $.trim(c.val());
	if (currentSearch == '') {
		cleanInterface();
		return
	}
	c.attr('class', 'sL');
	var d = 'http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&jsonp=window.yt.www.suggest.handleResponse&q=' + encodeURIComponent(currentSearch) + '&cp=1';
	$.ajax({
		type: "GET",
		url: d,
		dataType: "script",
		timeout: 2000,
		error: function (a, b) {
			$("div.alerts").html("Error! dIS Type: " + b).show().delay(5000).fadeOut(2000)
		}
	});
	xhrWorking = true
}

function cleanInterface() {
	$("div#pW").slideUp('slow', function () {
		$(this).empty()
	});
	$("div#sug").empty();
	playlistShowing = false;
	pauseVideo();
	clearVideo();
	if (dC.cplaylist == "") clearHash();
	else setHash("/" + dC.cplaylist);
	resetTitle();
	playlistArr = [];
	currentSuggestion = '';
	currentVideoTitle = 'YouTube Instant';
	currentVideoTitles = [];
	$("input[type='text']#sB").val('');
	$("div#sTK").html('<strong>Search YouTube Instantly</strong>').attr('title', '');
	var a = "_2c5Fh3kfrI";
	loadVideo(a);
	var b = "http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.youtube.com&layout=standard&show_faces=false&action=like&font=arial&colorscheme=light&height=70&width=720&send=true";
	var c = "http://platform.twitter.com/widgets/tweet_button.html?count=horizontal&text=Watch%20Videos20On%20YouTube&url=http%3A%2F%2Fwww.youtube.com&via=HnSYouTube";
	var d = "http://s.youtube-3rd-party.com/facebook_share.html?appid=87741124305&href=http%3A%2F%2Fwww.youtube.com&base_url=http%3A%2F%2Fwww.youtube.com&locale=US";
	$("div#ft iframe#fblike").attr('src', b);
	$("div#ft iframe#twitter").attr('src', c);
	$("div#ft iframe#fbshare").attr('src', d)
}

yt = {}, yt.www = {}, yt.www.suggest = {};
yt.www.suggest.handleResponse = function (a) {
	if (!$("div.tl.pinleft").hasClass("on")) {
		if (a[1][0]) var b = a[1][0][0];
		else var b = null;
		var l = 1
	} else var b = null,
		l = 0;
	instantHash(currentSearch);
	if (!b || dC.exactSearch) {
		b = currentSearch;
		currentSuggestion = null;
		updateSuggestedKeyword(b + ' (Exact search)');
		dC.exactSearch = false
	} else updateSuggestedKeyword(b);
	var c = ['<ul id="suggest">'],
		cs = currentSearch.toLowerCase().replace(/[^a-z0-9]/g, " ");
	var d = cs.indexOf("  ");
	while (d != -1) {
		cs = cs.replace("  ", " ");
		d = cs.indexOf("  ")
	}
	for (var i = l; i < a[1].length; i++) {
		if (a[1][i][0] != cs) {
			c.push("<li content=\"" + a[1][i][0] + "\">" + a[1][i][0].replace(cs, "<b>" + cs + "</b>") + "</li>")
		}
	}
	c.push('</ul>');
	$("div#sug").html(c.join(''));
	if (b == currentSuggestion) {
		doneWorking();
		return
	} else currentSuggestion = b;
	getTopSearchResult(b)
};

function getTopSearchResult(e) {
	var f = 'http://gdata.youtube.com/feeds/api/videos?q=' + encodeURIComponent(e) + '&format=5&max-results=' + dC.vThumbs + '&v=2&alt=jsonc';
	$.ajax({
		type: "GET",
		url: f,
		dataType: "jsonp",
		timeout: 2000,
		success: function (a, b, c) {
			if (a.data.items) {
				var d = a.data.items;
				playlistArr = [];
				playlistArr.push(d);
				updateVideoDisplay(d);
				pendingDoneWorking = true
			} else {
				updateSuggestedKeyword('No results for "' + e + '"');
				doneWorking()
			}
		},
		error: function (a, b) {
			$("div.alerts").html("Error! gTSR Type: " + b).show().delay(5000).fadeOut(2000);
			doneWorking()
		}
	})
}

function updateVideoDisplay(b) {
	var c = (b.length >= dC.vThumbs) ? dC.vThumbs : b.length;
	var d = $("<div />").attr('id', 'pl');
	currentVideoTitles = [];
	for (var i = 0; i < c; i++) {
		var e = b[i].id,
			vTitle = b[i].title;
		currentVideoTitles.push(vTitle);
		var f = $("<div />").attr('class', 'vW');
		var a = $("<a />").attr('href', "javascript:loadAndPlayVideo('" + e + "'," + i + ");");
		var g = $("<div />").attr('class', 'overlay');
		var h = $("<img />").attr('class', 'thumb').attr('src', b[i].thumbnail.sqDefault);
		var j = $("<div />").attr('class', 'title').html(vTitle);
		var k = $("<div />").attr('class', 'play-symbol');
		var l = $("<img />").attr('src', 'i/overlay-play.png').attr('title', b[i].description);
		var m = $("<div />").attr('class', 'thumb-info');
		var n = new Date(b[i].uploaded);
		var o = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
		var p = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
		var q = o[n.getDay()] + ", " + p[n.getMonth()] + " " + n.getDate() + ", " + n.getFullYear();
		var r = $("<time />").attr('class', 'date').html(q);
		var s = $("<p />").attr('class', 'time').html(gettime(b[i].duration));
		var t = $("<img />").attr('class', 'addvideo').attr('src', 'i/add.png').attr('title', 'Add To Playlist').attr('content', vTitle);
		var u = $("<img />").attr('class', 'viewvideo').attr('src', 'i/view.png').attr('title', 'Watch Related Videos').attr('content', vTitle);
		var v = $("<img />").attr('class', 'videolink').attr('src', 'i/film_link.png').attr('title', 'Watch on YouTube').attr('content', e);
		var w = $("<img />").attr('class', 'dvideolink').attr('src', 'i/film_save.png').attr('title', 'Download Video').attr('content', e);
		var x = $("<img />").attr('class', 'daudiolink').attr('src', 'i/music.png').attr('title', 'Download MP3').attr('content', e);
		var y = $("<span />").attr('class', 'vT');
		var z = $("<span />").attr('class', 'viewCount').html(b[i].viewCount).digits();
		if (dC.thumbHeight != 99) {
			f.height(dC.thumbHeight);
			g.height(dC.thumbHeight);
			h.height(dC.thumbHeight);
			j.height(dC.thumbHeight - 5)
		}
		d.append(f.html(a.append(m.append(r).append(s)).append(g).append(h).append(j)).append(k.html(l)).append(y.append(z).append(t).append(u).append(v).append(w).append(x)))
	}
	var A = $("div#pW");
	$("div#pW div#pl").remove();
	A.append(d);
	if (!playlistShowing) {
		if ($("div#uP").is(":hidden") && $("div#sP").is(":hidden")) {
			A.slideDown('slow');
			playlistShowing = true
		}
	}
	currentPlaylistPos = -1;
	if (currentVideoId != b[0].id) loadAndPlayVideo(b[0].id, 0, true)
}

function doneWorking() {
	xhrWorking = false;
	if (pendingSearch) {
		pendingSearch = false;
		doInstantSearch()
	}
	$("input[type='text']#sB").attr('class', 'sP')
}

function updateSuggestedKeyword(a) {
	$("div#sTK").html(a).attr('title', a)
}

function instantHash(a) {
	if (hashTimeout) clearTimeout(hashTimeout);
	hashTimeout = setTimeout(function () {
		setPHash(a);
		if (currentSuggestion != '') setTitle('"' + currentSuggestion.toTitleCase() + '" on HnS YouTube Instant!');
		else setTitle('HnS YouTube Instant - Real-time YouTube video surfing.')
	}, 1000)
}

function loadAndPlayVideo(a, b, c) {
	if (currentPlaylistPos == b) {
		playPause();
		return
	}
	if (!c && xhrWorking) return;
	if (ytplayer) {
		xhrWorking = true;
		ytplayer.loadVideoById(a);
		currentVideoId = a;
		currentVideoTitle = currentVideoTitles[b];
		pendingDoneWorking = true
	}
	var d = $("div#pW");
	var e = "http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D" + a + "&amp;src=sp";
	var f = "http://www.facebook.com/plugins/like.php?href=" + e + "&layout=standard&show_faces=false&action=like&font=arial&colorscheme=light&height=70&width=720&send=true";
	var g = "http://platform.twitter.com/widgets/tweet_button.html?count=horizontal&text=Check%20this%20video%20out%20--%20" + encodeURIComponent(currentVideoTitle) + "&url=" + e + "&via=HnSYouTube";
	var h = "http://s.youtube-3rd-party.com/facebook_share.html?appid=87741124305&href=" + e + "&base_url=" + e + "&locale=US";
	$("div#ft iframe#fblike").attr('src', f);
	$("div#ft iframe#twitter").attr('src', g);
	$("div#ft iframe#fbshare").attr('src', h);
	var i = $('div#pW div#pl');
	i.children().removeClass('sThumb paused');
	i.children(':nth-child(' + (b + 1) + ')').addClass('sThumb');
	var j = 800;
	if (b > 2) {
		var k = Math.floor(b / 3);
		d.scrollTo((3 * (dC.thumbHeight + 3)) * k, j)
	} else d.scrollTo(0, j);
	currentPlaylistPos = b
}

function randomTip() {
	var a = ['Use the <strong>arrow keys</strong> on your keyboard to skip to the next video!', 'Press <strong>Enter</strong> to pause the video.', 'Every time you type a letter, a <strong>new video</strong> loads!', 'Use tab to load new videos and to finish the rest of your query while typing!', 'Press escape to clean the interface!', 'Press Home and End to seek to Beginning and End of video!', 'Press PgUp and PgDn to seek forward or backward 30 seconds!', 'Click on the config tool to view your custom playlist!', 'Click on the binoculars to search or browse through playlists!', 'You can enable different features by toggling tools such as random and repeat!', 'Use the image links along the videos to <strong>download</strong> the video or mp3!!', 'Click the plus to add the search term or video title to your playlist!', 'Go to a playlist you like and decrease videos loaded to 1!', 'Upgrade to a Modern Web Broswer! (Chrome, Opera, Firefox, Safari, or IE9)', 'Right click on playlist items to add and delete them from your playlist!', 'Hover over the play image while viewing the video info to see the video description!'];
	$('div.alerts').html(a[Math.floor(Math.random() * a.length)]).fadeIn('slow', function () {
		setTimeout("$('div.alerts').fadeOut(function(){$(this).empty()});", 5000)
	})
}

function handleSmallScreens() {
	if ($(document).width() < 1060) {
		var a = $(document).width();
		var b = 1060 - a;
		var c = $("div#pD").width();
		$("div#w").width(a);
		$("div#sTW").width($("div#sTW").width() - b + 10);
		if (b < 31) {
			$("div#pW").addClass("small2");
			$("div#pD").width(c - b + 5);
			$("div#pW div#pl div.vW").width(c - b + 5);
			$("div#sP div#plsr").width(c - b + 5)
		} else {
			$("div#pW, div#pD > div").addClass("small");
			b -= 30;
			var d = dC.playerHeight / dC.playerWidth;
			dC.playerWidth = dC.playerWidth - b - 5;
			dC.playerHeight = Math.floor(dC.playerWidth * d);
			dC.thumbHeight = (dC.playerHeight / 4) - 2;
			$("div#l").css('margin', '0 10px 0 0');
			$("div#ft iframe#fblike").width(dC.playerWidth);
			$("div#pD").width(c - 25).height(dC.playerHeight);
			$("div#sP ul#pls").height(dC.playerHeight - 40);
			$("div#sP div#plsr ul#pl").height(dC.playerHeight - 40);
			$("div#sP div#plsr").height(dC.playerHeight - 40);
			$("div#sP ul.pl").height(dC.playerHeight - 40);
			$("div#uP ul#pl").height(dC.playerHeight - 40);
			$("div#pW div#pl div.vW").css('height', dC.thumbHeight);
			$("div#pW div#pl div.vW img.thumb").height(dC.thumbHeight);
			$("div#pW div#pl div.vW div.title").height(dC.thumbHeight)
		}
	}
	if ($(document).height() < 600) {
		var e = $(document).height();
		var b = 600 - e;
		$("div#ft iframe#fblike").height(24);
		$("div#hnsft").css('bottom', 8 + 'px')
	}
}

function loadVideo(a) {
	if (ytplayer) {
		ytplayer.cueVideoById(a);
		currentVideoId = a
	}
}

function playPause() {
	if (ytplayer) {
		$('div.sThumb').toggleClass('paused');
		if (playerState == 1) pauseVideo();
		else if (playerState == 2) playVideo()
	}
}

function playVideo() {
	if (ytplayer) ytplayer.playVideo()
}

function pauseVideo() {
	if (ytplayer) ytplayer.pauseVideo()
}

function clearVideo() {
	if (ytplayer) ytplayer.clearVideo()
}

function setVolume(v) {
	if (ytplayer) ytplayer.setVolume(v)
}

function getDuration() {
	if (ytplayer) return ytplayer.getDuration()
}

function getCurrentTime() {
	if (ytplayer) return ytplayer.getCurrentTime()
}

function setSize(w, h) {
	if (ytplayer) return ytplayer.setSize(w, h)
}

function seekTo(s) {
	if (ytplayer) return ytplayer.seekTo(s, true)
}

function clean() {
	var a, i, l;
	a = document.getElementsByTagName('img');
	for (i in a) {
		if (/btn_mirrorblue.png/.test(a[i].src)) {
			a[i].id = "removethis";
			$("img#removethis").parent().remove()
		}
	}
	a = document.getElementsByTagName('script');
	l = a.length;
	for (i in a) {
		if (/btn_mirrorblue.js/.test(a[i].src)) {
			a[i].id = "removethis";
			$("script#removethis").remove()
		}
	}
}

$(document).ready(function () {
	$('body').html(pcontent);
	handleSmallScreens();
	loadPlayer();
	loadPlaylist();
	setTimeout("getSongPlaylists();randomTip();", 3200);
	setTimeout("clean();", 100)
});

window.fbAsyncInit = function () {
	FB.init({
		appId: '131794546903024',
		status: true,
		cookie: true,
		xfbml: true
	})
};