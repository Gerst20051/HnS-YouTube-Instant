var pcontent = '<div id="tls"><div class="tl config config_e" title="Show Your Playlist"></div><div class="tl arrowright arrowright_m" title="Skip"></div><div class="tl dblarrowright dblarrowright_m" title="Enable Fast Play Mode"></div><div class="tl save save_m" title="Share This Queue"></div><div class="tl pinleft pinleft_m" title="Exact Search"></div><div class="tl refresh refresh_b" title="Random From Playlist"></div><div class="tl search" title="Show Song Playlists"></div><div class="alerts"></div></div><div id="oW"><div id="w"><div id="hd" class="cf"><div id="l"><div><span>HnS YouTube Instant</span></div></div><input type="text" id="sB" value="" spellcheck="false"></input><div id="sTW"><div id="sTK"><strong>Search YouTube Instantly</strong></div></div><div id="sug"></div></div><div id="m" class="cf"><div id="vD"><div id="iVD">Loading...</div></div><div id="pD"><div id="pW"><div id="pl" class="cf">&nbsp;</div></div><div id="uP"><div id="pI"><input type="text" id="pB" value="Search The Queue" spellcheck="false"></input></div><ul id="pl" class="cf"></ul></div><div id="sP"><div id="pH"><div id="sPI"><input type="text" id="sPB" value="Search Playlists" spellcheck="false"></input></div><div id="sH"><div id="pN">&nbsp;</div><img id="btp" src="i/back.png"></div></div><ul id="pls" class="cf">&nbsp;</ul><div id="plsr" class="cf">&nbsp;</div></div></div><div id="ft" class="cf"><div id="api"><iframe id="fblike" scrolling="no" frameborder="0" src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fyoutube.com&layout=standard&show_faces=true&action=like&font=arial&colorscheme=light&height=70&width=720&send=true" allowTransparency="true"></iframe><div id="sub"><iframe id="twitter" scrolling="no" frameborder="0" src="http://platform.twitter.com/widgets/tweet_button.html?count=horizontal&text=Watch%20Videos%20On%20YouTube&url=http%3A%2F%2Fwww.youtube.com&via=HnSYouTube" allowtransparency="true"></iframe><iframe id="fbshare" scrolling="no" frameborder="0" src="http://s.youtube-3rd-party.com/facebook_share.html?appid=87741124305&href=http%3A%2F%2Fwww.youtube.com&base_url=http%3A%2F%2Fwww.youtube.com&locale=US" allowtransparency="true"></iframe></div></div></div></div></div></div><div id="hnsft"><div id="fbauth"><fb:login-button autologoutlink="true" perms="user_likes,friends_likes,publish_stream"></fb:login-button><div id="fb-root"></div></div><div id="buzz-container"><a title="Post to Google Buzz" class="google-buzz-button" href="http://www.google.com/buzz/post" data-button-style="normal-button" data-url="http://hnsyoutube.webs.com"></a></div><div id="plusone-container"><div class="g-plusone" data-size="standard" data-count="true" data-href="http://hnsyoutube.webs.com"></div></div><iframe id="hnslike" src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fhnsyoutube.webs.com&layout=standard&show_faces=false&action=like&font=arial&colorscheme=light&height=40&width=550&send=true" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div><img id="hc" src="http://www.website-hit-counters.com/cgi-bin/image.pl?URL=572179-3134">';
var dC = {
	"devkey": "AI39si6-KJa9GUrvoNKGEh0rZWfJ2yFrPOxIN79Svnz9zAhosYHrbZfpADwJhd3v6TNl9DbvTtUS_deOcoNCodgvTqq3kxcflw",
	"title": "HnS YouTube Queue",
	"remove": "quetube",
	"vThumbs": 10,
	"playerWidth": 720,
	"playerHeight": 405,
	"thumbHeight": 99,
	"alerts": [],
	"queue": [],
	"playlists": [],
	"history": [],
	"sresults": [],
	"cplaylist": "",
	"csplaylist": "",
	"requirekey": false,
	"hashqueue": false,
	"exactSearch": false,
	"fastplayTO": false,
	"pSResults": false,
	"sBFocus": false,
	"sPBFocus": false,
	"sPL": false,
	"sLS": false,
	"MSIE": false,
	"tl": {
		"playlists": false,
		"exact": false,
		"playlist": false,
		"fastplay": false
	}
};

function gIEV(){
	var a = -1;
	if (navigator.appName == 'Microsoft Internet Explorer'){
		var b = navigator.userAgent;
		var c = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (c.exec(b) != null) a = parseFloat(RegExp.$1);
	}
	return a;
}

if ($.browser.msie){
	if (gIEV() < 9) dC.MSIE = true;
}

function supports_local_storage(){
	return ('localStorage' in window) && window['localStorage'] !== null;
}

if (supports_local_storage()) dC.sLS = true;

$.fn.digits = function(){
	return this.each(function(){
		$(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	});
};

function getHash(){return decodeURIComponent(window.location.hash.substring(1))}
function clearHash(){window.location.replace("#")}
function setHash(a){window.location.replace("#" + encodeURI(a))}
function getTitle(){return document.title}
function resetTitle(){document.title = dC.title}
function setTitle(a){document.title = a}

function removeChars(c, d){
	if (typeof c == "string") return d.split(c).join('');
	else {
		$.each(c, function(a, b){
			d = d.split(b).join('');
		});
		return d;
	}
}

Array.prototype.remove = function(a, b){
	var c = this.slice(((b || a) + 1) || this.length);
	this.length = (a < 0) ? (this.length + a) : a;
	return this.push.apply(this, c);
};
Array.prototype.vIndex = function(a){
	for (i = 0; i < this.length; i++){
		if (this[i] == a) return i;
	}
	return -1;
};
Array.prototype.contains = function(a){
	for (var i = (this.length - 1); i >= 0; i--){
		if (this[i] === a) return true;
	}
	return false;
};
Number.prototype.toLength = function(n){
	var a = this.toString();
	while (a.length < n) a = '0' + a;
	return a;
};
String.prototype.startsWith = function(a){
	return (this.match("^" + a) == a);
};
String.prototype.capitalize = function(){
	return this.replace(/(^|\s)([a-z])/g, function(m, a, b){
		return a + b.toUpperCase();
	})
};
String.prototype.toTitleCase = function(){
	return this.replace(/([\w&`'��"�.@:\/\{\(\[<>_]+-? *)/g, function(a, b, c, d){
		if (c > 0 && d.charAt(c - 2) !== ":" && a.search(/^(a(nd?|s|t)?|b(ut|y)|en|for|i[fn]|o[fnr]|t(he|o)|vs?\.?|via)[ \-]/i) > -1) return a.toLowerCase();
		if (d.substring(c - 1, c + 1).search(/['"_{(\[]/) > -1) return a.charAt(0) + a.charAt(1).toUpperCase() + a.substr(2);
		if (a.substr(1).search(/[A-Z]+|&|[\w]+[._][\w]+/) > -1 || d.substring(c - 1, c + 1).search(/[\])}]/) > -1) return a;
		return a.charAt(0).toUpperCase() + a.substr(1);
	})
};

function IsRightButtonClicked(e){
	var a = false;
	e = e || window.event;
	if (e.which) a = (e.which == 3);
	else if (e.button) a = (e.button == 2);
	return a;
}

function two(x){
	return ((x > 9) ? "" : "0") + Math.floor(x);
}

function gettime(s){
	var m = Math.floor(s / 60), h = Math.floor(m / 60), d = Math.floor(h / 60);
	if (d > 0) t = d + ":" + two(h % 60) + ":" + two(m % 60) + ":" + two(s % 60);
	else if ((h % 60) > 0) t = (h % 60) + ":" + two(m % 60) + ":" + two(s % 60);
	else t = (m % 60) + ":" + two(s % 60);
	return t;
}

function div_selection(e){
	this.e = e;
	if (arguments.length === 2) this.eq = arguments[1];
	if (this.e.target) this.event = this.e.target;
	else this.event = this.e.srcElement;
	if (this.event.nodeType == 3) this.event = this.event.parentNode;
	if (typeof this.eq === "undefined"){
		this.target_class = function(){ return $(this.event).attr('class'); };
		this.target_id = function(){ return $(this.event).attr('id'); };
		this.target_html = function(){ return $(this.event).html(); };
		this.target_content = function(){ return $(this.event).attr('content'); }
	} else {
		this.selection = $(this.event).parents().eq(this.eq).attr('id');
		this.target_class = function(){ return $(this.event).parents().eq(this.eq).attr('class'); };
		this.target_id = function(){ return $(this.event).parents().eq(this.eq).attr('id'); };
		this.target_html = function(){ return $(this.event).parents().eq(this.eq).html(); };
		this.target_content = function(){ return $(this.event).parents().eq(this.eq).attr('content'); };
		this.main = function(){ return this.selection; }
	}
}

function loadQueue(){
	if (getHash().length > 0){
		dC.queue = $.parseJSON(Base64.decode(getHash()));
		if (!$.isArray(dC.queue) || dC.queue.length < 1){
			clearHash();
			addAlert('<b class="error">Error!</b> Not Valid Queue', 5000, 2000);
		} else dC.hashqueue = true;
	}
	if (dC.sLS && !dC.hashqueue){
		if (localStorage.getItem('queue')){
			dC.queue = $.parseJSON(Base64.decode(localStorage.getItem('queue')));
		}
	}
	if (dC.queue.length > 0){
		$.each(dC.queue, function(n, item){
			$("div#uP ul#pl").append('<li id="' + item[0] + '" style="background-image:url(' + item[2] + ')">' + item[1] + '</li>');
		});
	} else $("div#uP ul#pl").html('<li class="empty">No Videos Are In The Queue</li>');
}

function getSongPlaylists(){
	if (dC.sLS && !dC.sPL){
		$.getJSON("quetube.json", function(a){
			if (a.data) localStorage['songPlaylists'] = JSON.stringify(a);
			loadSongPlaylists();
		});
	}
}

function loadSongPlaylists(){
	if (dC.sPL) return;
	dC.playlists = $.parseJSON(localStorage['songPlaylists'])["data"];
	var c = [];
	var d = [];
	$.each(dC.playlists, function(a){
		var b = dC.playlists[a].length;
		c.push('<li id="' + a + '">' + a + '</li>');
		d.push('<ul class="pl ' + removeChars(' ', a) + '">');
		for (s = 0; s < b; s++) d.push('<li>' + dC.playlists[a][s] + '</li>');
		d.push('</ul>');
	});
	$("div#sP ul#pls").html(c.join(""));
	$("div#sP").append(d.join(""));
	dC.sPL = true;
}

$(window).load(function(){
	$("input[type='text']#sB").bind({
		keydown: function(e){
			var a = e.keyCode || e.which;
			if (a == 9){
				e.preventDefault();
				if (currentSuggestion){
					var b = $("input[type='text']#sB").val().replace(/[^A-Za-z0-9]/g, " "),
						intIndex = b.indexOf("  ");
					while (intIndex != -1){
						b = b.replace("  ", " ");
						intIndex = b.indexOf("  ");
					}
					var c = new RegExp("^" + b + "(.*?)( |$)", "ig");
					var d = currentSuggestion.match(c);
					if (d.length > 0) $("input[type='text']#sB").val(d);
				}
			}
		},
		paste: function(e){
			var a = e.keyCode || e.which;
			if (!a) setTimeout(doInstantSearch, 350);
		}
	});
	$("div.tl.config").click(function(){
		dC.tl.playlist = !dC.tl.playlist;
		if (dC.tl.playlists) dC.tl.playlists = false;
		if ($("div.tl.config").hasClass("on")) $("div.tl.config").attr('title', 'Show The Queue');
		else $("div.tl.config").attr('title', 'Hide The Queue');
		$("div.tl.config").toggleClass("on");
		if ($("div.tl.search").hasClass("on")) $("div.tl.search").removeClass("on");
		if ($("div#pW").is(":visible")){
			$("div#pW").hide();
			$("div#uP").show();
		} else if ($("div#uP").is(":visible")){
			$("div#pW").show();
			$("div#uP").hide();
		} else if ($("div#sP").is(":visible")){
			$("div#uP").show();
			$("div#sP").hide();
		}
	});
	$("div.tl.arrowright").click(function(){
		if (dC.requirekey){
			var reply = prompt("Admin Access Required To Skip Video", "");
			if (reply != dC.remove) return;
		}
		goNextVideo();
		addAlert('Video Skipped',5000,2000);
	});
	$("div.tl.dblarrowright").click(function(){
		dC.tl.fastplay = !dC.tl.fastplay;
		if ($("div.tl.dblarrowright").hasClass("on")) $("div.tl.dblarrowright").attr('title', 'Enable Fast Play Mode');
		else $("div.tl.dblarrowright").attr('title', 'Disable Fast Play Mode');
		$("div.tl.dblarrowright").toggleClass("on");
		if (dC.fastplayTO) clearTimeout(dC.fastplayTO);
	});
	$("div.tl.save").click(function(){
		if (dC.queue.length > 0) prompt("Here is the link to share your current queue!","http://hnsyoutube.webs.com/quetube.html#"+Base64.encode(json_encode(dC.queue)));
		else addAlert('<b class="error">Error!</b> Current Queue is empty!',5000,2000);
	});
	$("div.tl.pinleft").click(function(){
		dC.exactSearch = !dC.exactSearch;
		dC.tl.exact = !dC.tl.exact;
		if (dC.tl.playlist) dC.tl.playlist = false;
		if ($("div.tl.pinleft").hasClass("on")) $("div.tl.pinleft").attr('title', 'Exact Search');
		else $("div.tl.pinleft").attr('title', 'Suggestions Search');
		$("div.tl.pinleft").toggleClass("on");
		if (currentSearch != currentSuggestion){
			currentSearch = '';
			doInstantSearch();
		}
	});
	$("div.tl.refresh").click(function(){
		loadRandomVideo();
		if ($("div.tl.search").hasClass("on")) $("div.tl.search").click();
	});
	$("div.tl.search").click(function(){
		dC.tl.playlists = !dC.tl.playlists;
		if (dC.tl.playlist) dC.tl.playlist = false;
		if ($("div.tl.search").hasClass("on")) $("div.tl.search").attr('title', 'View Song Playlists');
		else $("div.tl.search").attr('title', 'See Search Results');
		if (!dC.sPL) getSongPlaylists();
		$("div.tl.search").toggleClass("on");
		if ($("div#pW").is(":visible")) $("div#pW").hide();
		else if ($("div.tl.config").hasClass("on") || $("div#uP").is(":visible")){
			$("div.tl.config").removeClass("on");
			$("div#uP").hide();
		}
		if ($("div#sP").is(":visible")){
			$("div#pW").show();
			$("div#sP").hide();
		} else $("div#sP").show();
	});
	$("div#hd input[type='text']#sB").focus(function(){
		dC.sBFocus = true;
	}).blur(function(){
		dC.sBFocus = false;
	});
	$("div#sP input[type='text']#sPB").focus(function(){
		if ($(this).val() == "Search Playlists") $(this).val('');
		dC.sPBFocus = true;
	}).blur(function(){
		if ($(this).val() == "") $(this).val('Search Playlists');
		dC.sPBFocus = false;
	});
	$("div#uP input[type='text']#pB").focus(function(){
		if ($(this).val() == "Search The Queue") $(this).val('');
		dC.pBFocus = true;
	}).blur(function(){
		if ($(this).val() == "") $(this).val('Search The Queue');
		dC.pBFocus = false;
	});
	$("div#sug ul#suggest li").live('mousedown', function(e){
		try {
			var b = new div_selection(e);
			var c = b.target_content().capitalize();
		} catch (a){
			var b = new div_selection(e, 0);
			var c = b.target_content().capitalize();
		}
		$("input[type='text']#sB").val(c);
		doInstantSearch();
	});
	$("div#uP ul#pl li").live('mousedown', function(e){
		if (dC.queue.length < 1 || dC.hashqueue) return;
		var a = new div_selection(e);
		a = a.target_html();
		var b = -1;
		if (IsRightButtonClicked(e)){
			e.preventDefault();
			if (dC.requirekey){
				var reply = prompt("Admin Access Required To Remove Video From Queue", "");
				if (reply != dC.remove) return;
			}
			$.each(dC.queue, function(i,item){
				if (item[1] == a){
					b = i;
					return false;
				}
			});
			if (b > -1){
				if (dC.queue.length == 1){
					$("div#uP ul#pl").html('<li class="empty">No Videos Are In The Queue</li>');
					stopVideo();
					dC.queue.remove(b);
					localStorage.setItem("queue", Base64.encode(json_encode(dC.queue)));
				} else {
					if (b == 0){
						goNextVideo();
					} else {
						dC.queue.remove(b);
						localStorage.setItem("queue", Base64.encode(json_encode(dC.queue)));
						$("div#uP ul#pl li:eq(" + b + ")").remove();
					}
				}
			}
			addAlert('Video Removed From Queue', 5000, 2000);
		}
	});
	$("div#sP ul#pls li").live('click', function(e){
		var a = new div_selection(e);
		a = a.target_id();
		$("div#sP ul#pls").hide();
		$("div#sP div#pH div#sH div#pN").html(a);
		$("div#sP div#pH div#sH").show();
		$("div#sP div#sPI").hide();
		$("div#sP ul.pl." + removeChars(' ', a)).show();
		dC.cplaylist = a;
	});
	$("div#sP ul.pl li").live('mousedown', function(e){
		var a = new div_selection(e);
		a = a.target_html();
		$("input[type='text']#sB").val(a);
		doInstantSearch();
		$("div.tl.search").click();
	});
	$("div#sP div#pH img#btp").click(function(e){
		if ($("div#sP div#plsr").is(":hidden")){
			$("div#sP div#sPI").show();
			$("div#sP ul#pls").show();
			$("div#sP div#pH div#sH").hide();
			$("div#sP ul.pl").hide();
			$("div#sP div#pH div#sH div#pN").html('');
			dC.cplaylist = "";
		} else {
			$("div#sP div#sPI").show();
			$("div#sP div#plsr ul#pl").show();
			$("div#sP div#pH div#sH").hide();
			$("div#sP div#plsr ul.pl").hide();
			$("div#sP div#pH div#sH div#pN").html('');
			dC.csplaylist = "";
		}
	});
	$("div#sP div#plsr ul#pl li").live('click', function(e){
		var a = new div_selection(e);
		a = a.target_id();
		$("div#sP div#plsr ul#pl").hide();
		$("div#sP div#pH div#sH div#pN").html(a);
		$("div#sP div#pH div#sH").show();
		$("div#sP div#sPI").hide();
		$("div#sP div#plsr ul.pl." + removeChars(' ', a)).show();
		dC.csplaylist = a;
	});
	$("div#sP div#plsr ul.pl li").live('mousedown', function(e){
		var a = new div_selection(e);
		a = a.target_html();
		$("input[type='text']#sB").val(a);
		doInstantSearch();
	});
	$("div#pW div#pl img.addvideo").live('click', function(e){
		var a = new div_selection(e);
		var b = new div_selection(e,1);
		targetid = b.target_id();
		var item = [targetid, $.trim(a.target_content()).capitalize(), $("#pl #"+targetid+" img.thumb").attr('src')];
		addItemYTQueue(item);
	});
	$("div#pW div#pl img.viewvideo").live('click', function(e){
		var a = new div_selection(e);
		$("input[type='text']#sB").val(a.target_content());
		doInstantSearch();
	});
});

function loadPlayer(){
	var a = {allowScriptAccess: "always"};
	var b = {id: "ytplayer"};
	swfobject.embedSWF("http://www.youtube.com/apiplayer?version=3&enablejsapi=1&playerapiid=ytplayer&key="+dC.devkey, "iVD", dC.playerWidth, dC.playerHeight, "8", null, null, a, b);
}

function onYouTubePlayerReady(a){
	ytplayer = document.getElementById("ytplayer");
	ytplayer.addEventListener("onStateChange", "onPlayerStateChange");
	ytplayer.addEventListener("onError", "onPlayerError");
	$("input[type='text']#sB").keyup(doInstantSearch);
	$("input[type='text']#sPB").keyup(doPlaylistSearch);
	$(document.documentElement).keydown(onKeyDown);
	onBodyLoad();
	doInstantSearch();
	$("div.tl.search").click();
}

function onBodyLoad(){
	currentSearch = '';
	currentPSearch = '';
	currentSuggestion = '';
	currentVideoId = '';
	playlistShowing = false;
	playlistArr = [];
	xhrWorking = false;
	pendingSearch = false;
	pendingDoneWorking = false;
	playerState = -1;
	hashTimeout = false;
}

function onPlayerStateChange(a){
	playerState = a;
	if (pendingDoneWorking && playerState == 1){
		doneWorking();
		pendingDoneWorking = false;
	} else if (playerState == 0){
		goNextVideo();
	}
}

function onPlayerError(a){
	goNextVideo();
	addAlert('<b class="error">Error!</b> oPE Type: ' + a, 5000, 2000);
}

function addItemYTQueue(a){
	if (dC.hashqueue){
		addAlert('<b class="error">Error!</b> <b>Can\'t view or create your own queue while viewing a shared queue.</b> <a href="http://hnsyoutube.webs.com/quetube.html">Click here</a> to create or view your queue!', 5000, 2000);
		return;
	}
	var exists = -1;
	$.each(dC.queue, function(n,item){
		exists = $.inArray(a[0], item);
		if (exists > -1){
			addAlert('<b class="error">Error!</b> This video is already in the queue.', 5000, 2000);
			return false;
		}
	});
	if (exists == -1 || isNaN(exists)){
		if (dC.queue.length == 0){
			$("div#uP ul#pl li.empty").remove();
			loadAndPlayVideo(a);
		}
		dC.queue.push(a);
		localStorage.setItem("queue", Base64.encode(json_encode(dC.queue)));
		$("div#uP ul#pl").append('<li id="' + a[0] + '" style="background-image:url(' + a[2] + ')">' + a[1] + '</li>');
		addAlert('<b>Added To Queue #' + dC.queue.length + ':</b> ' + a[1], 5000, 2000);
	}
}

function doPlaylistSearch(){
	var a = $("input[type='text']#sPB");
	if (a.val() == currentPSearch) return;
	currentPSearch = a.val();
	if (currentPSearch == '' || currentPSearch.length < 3){
		if ($("div#sP ul#pls").is(":hidden")){
			$("div#sP ul#pls").show();
			$("div#sP div#plsr").hide();
		}
		return;
	} else {
		if ($("div#sP ul#pls").is(":visible")){
			$("div#sP div#plsr").show();
			$("div#sP ul#pls").hide();
		}
		updatePSearchResults(searchArr("/" + currentPSearch + "/i", dC.playlists));
	}
}

function updatePSearchResults(c){
	var d = $("<ul />").attr('id', 'pl'), allplaylists = [];
	$.each(c, function(a){
		var b = c[a].length;
		if (b == 0) return;
		d.append('<li id="' + a + '">' + a + '</li>');
		allplaylists.push('<ul class="pl ' + removeChars(' ', a) + '">');
		for (s = 0; s < b; s++) allplaylists.push('<li>' + c[a][s] + '</li>');
		allplaylists.push('</ul>');
	});
	if (allplaylists.length == 0){
		$("div#sP div#plsr").html('<li class="empty">No Search Results for <b>' + currentPSearch + '</b></li>');
		dC.pSResults = false;
	} else {
		$("div#sP div#plsr").html(d).append(allplaylists.join(""));
		dC.pSResults = true;
	}
}

function searchArr(a, b){
	var c = {}, retObj = {};
	if (typeof a === 'string') a = eval(a);
	$.each(b, function(v){
		c = b[v];
		retObj[v] = new Array();
		$.each(c, function(i, t){
			if (t.match(a)) retObj[v].push(t);
		});
	});
	return retObj;
}

function loadRandomVideo(){
	if (dC.cplaylist == ""){
		var a = ['YouTube', 'AutoTune', 'Rihanna', 'Far East Movement', 'Glee Cast', 'Nelly', 'Usher', 'Katy Perry', 'Taio Cruz', 'Eminem', 'Shakira', 'Kesha', 'B.o.B', 'Taylor Swift', 'Akon', 'Bon Jovi', 'Michael Jackson', 'Lady Gaga', 'Paramore', 'Jay Z', 'My Chemical Romance', 'The Beatles', 'Led Zepplin', 'Guns N Roses', 'AC DC', 'System of a Down', 'Aerosmith', 'Borat', 'Basshunter', 'Fall Out Boy', 'Blink 182', 'Pink Floyd', 'Still Alive', 'Men at Work', 'MGMT', 'Justin Bieber', 'The Killers', 'Bed Intruder Song', 'Baba O Riley', 'Billy Joel', 'Drake', 'Jay Sean', 'The Ready Set'];
		var b = Math.floor(Math.random() * a.length);
		$("input[type='text']#sB").val(a[b]);
	} else {
		var b = Math.floor(Math.random() * dC.playlists[dC.cplaylist].length);
		$("input[type='text']#sB").val(dC.playlists[dC.cplaylist][b]);
	}
	doInstantSearch();
}

function onKeyDown(e){
	var a = e.keyCode || e.which, keys = [], bFocus = dC.sBFocus || dC.sPBFocus;
	if (a == 9){
		dC.sBFocus || loadRandomVideo();
		return false;
	} else if (a == 39 || a == 40){
		bFocus || $("div.tl.arrowright").click();
	} else if (a == 13){
		if (dC.sPBFocus){
			if (currentPSearch.length > 2 && !dC.pSResults){
				$("input[type='text']#sB").val($("input[type='text']#sPB").val());
				doInstantSearch();
			}
		}
	} else if (a == 27) cleanInterface();
	if (keys.contains(e.keyCode)) e.preventDefault();
}

function goNextVideo(){
	if (dC.queue.length > 1){
		dC.queue.shift()
		loadAndPlayVideo(dC.queue[0]);
		$("#pl li:first-child").remove();
	} else if (dC.queue.length > 0){
		dC.queue.shift();
		stopVideo();
		$("div#uP ul#pl").html('<li class="empty">No Videos Are In The Queue</li>');
	}
	if (!dC.hashqueue) localStorage.setItem("queue", Base64.encode(json_encode(dC.queue)));
}

function doInstantSearch(){
	if (xhrWorking){
		pendingSearch = true;
		return;
	}
	var c = $("input[type='text']#sB");
	if ($.trim(c.val()) == currentSearch) return;
	currentSearch = $.trim(c.val());
	if (currentSearch == ''){
		cleanInterface();
		return;
	}
	c.attr('class', 'sL');
	var d = 'http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&jsonp=window.yt.www.suggest.handleResponse&q=' + encodeURIComponent(currentSearch) + '&cp=1';
	xhrWorking = true;
	$.ajax({
		type: "GET",
		url: d,
		dataType: "script",
		timeout: 2000,
		error: function(a, b){
			addAlert('<b class="error">Error!</b> dIS Type: ' + b, 5000, 2000);
			doneWorking();
		}
	});
}

function cleanInterface(){
	$("div#pW").empty();
	$("div#sug").empty();
	playlistArr = [];
	currentSuggestion = '';
	$("input[type='text']#sB").val('');
	$("div#sTK").html('<strong>Search YouTube Instantly</strong>').attr('title', '');
}

yt = {}, yt.www = {}, yt.www.suggest = {};
yt.www.suggest.handleResponse = function(a){
	if (!dC.exactSearch){
		if (a[1][0]) var suggest = a[1][0][0];
		else var suggest = null;
		var l = 1;
	} else var suggest = null, l = 0;
	instantHash(currentSearch);
	if (dC.exactSearch || !suggest){
		suggest = currentSearch;
		updateSuggestedKeyword(suggest + ' (Exact search)');
	} else updateSuggestedKeyword(suggest);
	var c = ['<ul id="suggest">'], cs = currentSearch.toLowerCase().replace(/[^a-z0-9]/g, " ");
	var d = cs.indexOf("  ");
	while (d != -1){
		cs = cs.replace("  ", " ");
		d = cs.indexOf("  ");
	}
	for (var i = l; i < a[1].length; i++){
		if (a[1][i][0] != cs){
			c.push("<li content=\"" + a[1][i][0] + "\">" + a[1][i][0].replace(cs, "<b>" + cs + "</b>") + "</li>");
		}
	}
	c.push('</ul>');
	$("div#sug").html(c.join(''));
	if (!dC.exactSearch){
		if (suggest == currentSuggestion){
			doneWorking();
			return;
		} else currentSuggestion = suggest;
	}
	getTopSearchResult(suggest);
};

function getTopSearchResult(e){
	var f = 'http://gdata.youtube.com/feeds/api/videos?q=' + encodeURIComponent(e) + '&format=5&max-results=' + dC.vThumbs + '&v=2&alt=jsonc';
	$.ajax({
		type: "GET",
		url: f,
		dataType: "jsonp",
		timeout: 2000,
		success: function(a, b, c){
			if (a.data.items){
				var d = a.data.items;
				playlistArr = [];
				playlistArr.push(d);
				updateVideoDisplay(d);
				pendingDoneWorking = true;
			} else {
				updateSuggestedKeyword('No results for "' + e + '"');
				doneWorking();
			}
		},
		error: function(a, b){
			addAlert('<b class="error">Error!</b> gTSR Type: ' + b, 5000, 2000);
			doneWorking();
		}
	});
}

function updateVideoDisplay(b){
	var c = (b.length >= dC.vThumbs) ? dC.vThumbs : b.length;
	var d = $("<div />").attr('id', 'pl');
	for (var i = 0; i < c; i++){
		var e = b[i].id, vTitle = b[i].title;
		var f = $("<div />").attr('class', 'vW').attr('id', e);
		var a = $("<div />");
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
		var t = $("<img />").attr('class', 'addvideo').attr('src', 'i/add.png').attr('title', 'Add To Queue').attr('content', vTitle);
		var u = $("<img />").attr('class', 'viewvideo').attr('src', 'i/view.png').attr('title', 'Load Related Videos').attr('content', vTitle);
		var y = $("<span />").attr('class', 'vT');
		var z = $("<span />").attr('class', 'viewCount').html(b[i].viewCount).digits();
		if (dC.thumbHeight != 99){
			f.height(dC.thumbHeight);
			g.height(dC.thumbHeight);
			h.height(dC.thumbHeight);
			j.height(dC.thumbHeight - 5);
		}
		d.append(f.html(a.append(m.append(r).append(s)).append(g).append(h).append(j)).append(k.html(l)).append(y.append(z).append(t).append(u)));
	}
	var A = $("div#pW");
	$("div#pW div#pl").remove();
	A.append(d);
	if (!playlistShowing){
		if ($("div#uP").is(":hidden") && $("div#sP").is(":hidden")){
			A.slideDown('slow');
			playlistShowing = true;
		}
	}
	currentPlaylistPos = -1;
	doneWorking();
}

function doneWorking(){
	xhrWorking = false;
	if (pendingSearch){
		pendingSearch = false;
	}
	$("input[type='text']#sB").attr('class', 'sP');
}

function updateSuggestedKeyword(a){
	$("div#sTK").html(a).attr('title', a);
}

function instantHash(a){
	if (hashTimeout) clearTimeout(hashTimeout);
	hashTimeout = setTimeout(function(){
		if (currentSuggestion != '') setTitle('"' + currentSuggestion.toTitleCase() + '" on HnS YouTube Queue!');
		else setTitle('HnS YouTube Queue - Real-time YouTube video surfing.');
	}, 1000);
}

function loadAndPlayVideo(a){
	if (ytplayer){
		xhrWorking = true;
		ytplayer.loadVideoById(a[0]);
		currentVideoId = a[0];
		pendingDoneWorking = true;
		if (dC.tl.fastplay) {
			setTimeout("seekTo(20)",2000);
			dC.fastplayTO = setTimeout("goNextVideo()",40000);
		}
	}
	var d = $("div#pW");
	var e = "http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D" + a[0] + "&amp;src=sp";
	var f = "http://www.facebook.com/plugins/like.php?href=" + e + "&layout=standard&show_faces=false&action=like&font=arial&colorscheme=light&height=70&width=720&send=true";
	var g = "http://platform.twitter.com/widgets/tweet_button.html?count=horizontal&text=Check%20this%20video%20out%20--%20" + encodeURIComponent(a[1]) + "&url=" + e + "&via=HnSYouTube";
	var h = "http://s.youtube-3rd-party.com/facebook_share.html?appid=87741124305&href=" + e + "&base_url=" + e + "&locale=US";
	$("div#ft iframe#fblike").attr('src', f);
	$("div#ft iframe#twitter").attr('src', g);
	$("div#ft iframe#fbshare").attr('src', h);
	window.setTimeout(function(){
		addAlert("Next Video Starts in " + gettime(getDuration()), 5000, 2000);
	}, 2000);
}

function addAlert(){
	if (arguments.length > 0) dC.alerts.push(arguments);
	if (dC.alerts.length == 1) showAlerts();
}

function showAlerts(){
	$("div.alerts").promise().done(function(){
		var mainargs = dC.alerts.shift();
		if (mainargs.length > 2){
			$(this).html(mainargs[0]).show().delay(mainargs[1]).fadeOut(mainargs[2]);
			if (typeof (mainargs[3]) == 'function') mainargs[3]();
		} else {
			$(this).html(mainargs[0]).fadeIn(function(){
				$(this).fadeOut('fast');
				if (typeof (mainargs[1]) == 'function') mainargs[1]();
			});
		}
		if (dC.alerts.length > 0) showAlerts();
	});
}

function randomTip(){
	var a = ['Use the <strong>arrow keys</strong> on your keyboard to skip to the next video!', 'Use tab to finish the rest of your query while typing!', 'Press escape to clean the interface!', 'Click on the config tool to view the queue!', 'Click on the binoculars to search or browse through playlists!', 'Click the plus to add a video to the queue!', 'Upgrade to a Modern Web Broswer! (Chrome, Opera, Firefox, Safari, or IE9)', 'Hover over the play image while viewing the video info to see the video description!'];
	addAlert(a[Math.floor(Math.random() * a.length)], 2000, 5000);
}

function handleSmallScreens(){
	if ($(document).width() < 1060){
		var a = $(document).width();
		var b = 1060 - a;
		var c = $("div#pD").width();
		$("div#w").width(a);
		$("div#sTW").width($("div#sTW").width() - b + 10);
		if (b < 31){
			$("div#pW").addClass("small2");
			$("div#pD").width(c - b + 5);
			$("div#pW div#pl div.vW").width(c - b + 5);
			$("div#sP div#plsr").width(c - b + 5);
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
			$("div#pW div#pl div.vW div.title").height(dC.thumbHeight);
		}
	}
	if ($(document).height() < 600){
		var e = $(document).height();
		var b = 600 - e;
		$("div#ft iframe#fblike").height(24);
		$("div#hnsft").css('bottom', 8 + 'px');
	}
}

function manageQueue(){
	if (dC.queue.length > 0){
		loadAndPlayVideo(dC.queue[0]);
		$("div.tl.config").click();
	}
}

function loadVideo(a){if (ytplayer){ytplayer.cueVideoById(a);currentVideoId=a}}
function playVideo(){if (ytplayer) ytplayer.playVideo()}
function pauseVideo(){if (ytplayer) ytplayer.pauseVideo()}
function stopVideo(){if (ytplayer) ytplayer.stopVideo()}
function setVolume(v){if (ytplayer) ytplayer.setVolume(v)}
function getDuration(){if (ytplayer) return ytplayer.getDuration()}
function getCurrentTime(){if (ytplayer) return ytplayer.getCurrentTime()}
function setSize(w,h){if (ytplayer) return ytplayer.setSize(w,h)}
function seekTo(s){if (ytplayer) return ytplayer.seekTo(s,false)}

function clean(){
	var a, i, l;
	a = document.getElementsByTagName('img');
	for (i in a){
		if (/btn_mirrorblue.png/.test(a[i].src)){
			a[i].id = "removethis";
			$("img#removethis").parent().remove();
		}
	}
	a = document.getElementsByTagName('script');
	l = a.length;
	for (i in a){
		if (/btn_mirrorblue.js/.test(a[i].src)){
			a[i].id = "removethis";
			$("script#removethis").remove();
		}
	}
}

$(document).ready(function(){
	$('body').html(pcontent);
	handleSmallScreens();
	loadPlayer();
	loadQueue();
	setTimeout("manageQueue();", 3000);
	setTimeout("getSongPlaylists();randomTip();", 3200);
	setTimeout("clean();", 100);
});

window.fbAsyncInit = function(){
	FB.init({appId:'131794546903024',status:true,cookie:true,xfbml:true})
};

(function(){window._gaq=[['_setAccount','UA-32560649-2'],['_setDomainName','hns.netai.net'],['_trackPageview']];var a=document.createElement('script');a.type='text/javascript';a.async=true;a.src=('https:'==document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(a,s)})();