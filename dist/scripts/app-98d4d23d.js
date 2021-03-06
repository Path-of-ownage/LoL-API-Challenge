/*globals angular */
angular.module("lolApi",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap","ngAudio","pascalprecht.translate"]),angular.module("lolApi").config(["$stateProvider","$urlRouterProvider",function(s,e){"use strict";s.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}),s.state("sandbox",{url:"/sandbox",templateUrl:"app/sandbox/sandbox.html",controller:"sandboxController"}),e.otherwise("/")}]),angular.module("lolApi").service("trafficInstrumentService",["$timeout","ngAudio","instrumentService",function(s,e,t){"use strict";var a=this;this.sample=[],this.sample.push(e.load("assets/sounds/traffic/1.mp3")),this.sample.push(e.load("assets/sounds/traffic/2.mp3")),this.sample.push(e.load("assets/sounds/traffic/3.mp3")),this.sample.push(e.load("assets/sounds/traffic/4.mp3")),this.sample.push(e.load("assets/sounds/traffic/5.mp3")),this.sample.push(e.load("assets/sounds/traffic/6.mp3")),this.sample.push(e.load("assets/sounds/traffic/7.mp3")),this.sample.push(e.load("assets/sounds/traffic/8.mp3")),this.sample.push(e.load("assets/sounds/traffic/9.mp3")),this.sample.push(e.load("assets/sounds/traffic/10.mp3")),this.sample.push(e.load("assets/sounds/traffic/11.mp3")),this.sample.push(e.load("assets/sounds/traffic/12.mp3")),this.sample.push(e.load("assets/sounds/traffic/13.mp3")),this.sample.push(e.load("assets/sounds/traffic/14.mp3")),this.sample.push(e.load("assets/sounds/traffic/15.mp3")),this.sample.push(e.load("assets/sounds/traffic/16.mp3")),this.sample.push(e.load("assets/sounds/traffic/17.mp3")),this.sample.push(e.load("assets/sounds/traffic/18.mp3")),this.sample.push(e.load("assets/sounds/traffic/19.mp3")),this.sample.push(e.load("assets/sounds/traffic/20.mp3")),this.sample.push(e.load("assets/sounds/traffic/21.mp3")),this.getRandomSample=function(){return t.getRandomSample(a.sample)},this.playRandomSample=function(){var e;a.locked!==!0&&(e=a.getRandomSample(),e.play(),a.locked=!0,s(function(){a.locked=!1},e.remaining))},this.changeVolume=function(s){t.changeVolume(a.sample,s)}}]),angular.module("lolApi").service("thunderInstrumentService",["$timeout","instrumentService","ngAudio",function(s,e,t){"use strict";var a=this;this.sample=[],this.sample.push(t.load("assets/sounds/thunder/1.mp3")),this.sample.push(t.load("assets/sounds/thunder/2.mp3")),this.getRandomSample=function(){return e.getRandomSample(a.sample)},this.playRandomSample=function(){var e;a.locked!==!0&&(e=a.getRandomSample(),e.play(),a.locked=!0,s(function(){a.locked=!1},e.remaining))},this.changeVolume=function(s){e.changeVolume(a.sample,s)}}]),angular.module("lolApi").service("soundFxInstrumentService",["ngAudio","instrumentService",function(s){"use strict";this.wind=s.load("assets/sounds/fx/wind.mp3"),this.cityWinds=s.load("assets/sounds/fx/citywinds.mp3"),this.river=s.load("assets/sounds/fx/river.mp3"),this.hubbub=s.load("assets/sounds/fx/hubbub.mp3"),this.changeVolume=function(){}}]),angular.module("lolApi").service("leavesInstrumentService",["$timeout","ngAudio","instrumentService",function(s,e,t){"use strict";var a=this;this.sample=[],this.sample.push(e.load("assets/sounds/leaves/1.mp3")),this.sample.push(e.load("assets/sounds/leaves/2.mp3")),this.sample.push(e.load("assets/sounds/leaves/3.mp3")),this.sample.push(e.load("assets/sounds/leaves/4.mp3")),this.sample.push(e.load("assets/sounds/leaves/5.mp3")),this.sample.push(e.load("assets/sounds/leaves/6.mp3")),this.sample.push(e.load("assets/sounds/leaves/7.mp3")),this.sample.push(e.load("assets/sounds/leaves/8.mp3")),this.sample.push(e.load("assets/sounds/leaves/9.mp3")),this.sample.push(e.load("assets/sounds/leaves/10.mp3")),this.sample.push(e.load("assets/sounds/leaves/11.mp3")),this.sample.push(e.load("assets/sounds/leaves/12.mp3")),this.sample.push(e.load("assets/sounds/leaves/13.mp3")),this.sample.push(e.load("assets/sounds/leaves/14.mp3")),this.sample.push(e.load("assets/sounds/leaves/15.mp3")),this.sample.push(e.load("assets/sounds/leaves/16.mp3")),this.getRandomSample=function(){return t.getRandomSample(a.sample)},this.playRandomSample=function(){var s;s=a.getRandomSample(),s.play()},this.changeVolume=function(s){t.changeVolume(a.sample,s)}}]),angular.module("lolApi").service("instrumentService",function(){"use strict";this.changeVolume=function(s,e){if(e>1)throw"Invalid volume. Must be between 0 and 1";var t;for(t=0;t<s.length;t+=1)s[t].volume=e},this.getRandomSample=function(s){var e=Math.floor(Math.random()*s.length);return s[e]},this.createVolumeCurveFunction=function(s,e,t){var a,o,n;return angular.isDefined(t)||(t=1),a=s-e,o=t/a,n=-o*e,function(s){var e=o*s+n;return 0>e&&(e=0),e>t&&(e=t),e}}}),angular.module("lolApi").service("harpInstrumentService",["ngAudio","instrumentService",function(s,e){"use strict";var t=this;this.sample=[],this.sample.push(s.load("assets/sounds/harp/1.mp3")),this.sample.push(s.load("assets/sounds/harp/2.mp3")),this.sample.push(s.load("assets/sounds/harp/3.mp3")),this.sample.push(s.load("assets/sounds/harp/4.mp3")),this.sample.push(s.load("assets/sounds/harp/5.mp3")),this.sample.push(s.load("assets/sounds/harp/6.mp3")),this.getRandomSample=function(){return e.getRandomSample(t.sample)},this.playRandomSample=function(){var s;s=t.getRandomSample(),s.play()},this.changeVolume=function(s){e.changeVolume(t.sample,s)}}]),angular.module("lolApi").service("frogsInstrumentService",["$timeout","instrumentService","ngAudio",function(s,e,t){"use strict";var a=this;this.sample=[],this.sample.push(t.load("assets/sounds/frogs/1.mp3")),this.sample.push(t.load("assets/sounds/frogs/2.mp3")),this.sample.push(t.load("assets/sounds/frogs/3.mp3")),this.sample.push(t.load("assets/sounds/frogs/4.mp3")),this.sample.push(t.load("assets/sounds/frogs/5.mp3")),this.sample.push(t.load("assets/sounds/frogs/6.mp3")),this.sample.push(t.load("assets/sounds/frogs/7.mp3")),this.sample.push(t.load("assets/sounds/frogs/8.mp3")),this.getRandomSample=function(){return e.getRandomSample(a.sample)},this.playRandomSample=function(){var e;a.locked!==!0&&(e=a.getRandomSample(),e.play(),a.locked=!0,s(function(){a.locked=!1},e.remaining))},this.changeVolume=function(s){e.changeVolume(a.sample,s)}}]),angular.module("lolApi").service("footstepsInstrumentService",["$timeout","ngAudio","instrumentService",function(s,e,t){"use strict";var a=this;this.sample=[],this.sample.push(e.load("assets/sounds/footsteps/1.mp3")),this.sample.push(e.load("assets/sounds/footsteps/2.mp3")),this.sample.push(e.load("assets/sounds/footsteps/3.mp3")),this.sample.push(e.load("assets/sounds/footsteps/4.mp3")),this.sample.push(e.load("assets/sounds/footsteps/5.mp3")),this.sample.push(e.load("assets/sounds/footsteps/6.mp3")),this.sample.push(e.load("assets/sounds/footsteps/7.mp3")),this.getRandomSample=function(){return t.getRandomSample(a.sample)},this.playRandomSample=function(){var s;s=a.getRandomSample(),s.play()},this.changeVolume=function(s){t.changeVolume(a.sample,s)}}]),angular.module("lolApi").service("cricketBgInstrumentService",["$timeout","ngAudio","instrumentService",function(s,e,t){"use strict";var a=this;this.sample=[],this.sample.push(e.load("assets/sounds/crickets/soft/1.mp3")),this.sample.push(e.load("assets/sounds/crickets/soft/2.mp3")),this.sample.push(e.load("assets/sounds/crickets/soft/3.mp3")),this.sample.push(e.load("assets/sounds/crickets/soft/4.mp3")),this.sample.push(e.load("assets/sounds/crickets/soft/5.mp3")),this.sample.push(e.load("assets/sounds/crickets/soft/6.mp3")),this.sample.push(e.load("assets/sounds/crickets/soft/7.mp3")),this.sample.push(e.load("assets/sounds/crickets/soft/8.mp3")),this.getRandomSample=function(){return t.getRandomSample(a.sample)},this.playRandomSample=function(){var e;a.locked!==!0&&(e=a.getRandomSample(),e.play(),a.locked=!0,s(function(){a.locked=!1},e.remaining))},this.changeVolume=function(s){t.changeVolume(a.sample,s)}}]),angular.module("lolApi").service("cricketInstrumentService",["$timeout","instrumentService","ngAudio",function(s,e,t){"use strict";var a=this;this.sample=[],this.sample.push(t.load("assets/sounds/crickets/loud/1.mp3")),this.getRandomSample=function(){return e.getRandomSample(a.sample)},this.playRandomSample=function(){var e;a.locked!==!0&&(e=a.getRandomSample(),e.play(),a.locked=!0,s(function(){a.locked=!1},e.remaining))},this.changeVolume=function(s){e.changeVolume(a.sample,s)}}]),angular.module("lolApi").service("constructionInstrumentService",["$timeout","instrumentService","ngAudio",function(s,e,t){"use strict";var a=this;this.sample=[],this.sample.push(t.load("assets/sounds/construction/1.mp3")),this.sample.push(t.load("assets/sounds/construction/2.mp3")),this.sample.push(t.load("assets/sounds/construction/3.mp3")),this.sample.push(t.load("assets/sounds/construction/4.mp3")),this.sample.push(t.load("assets/sounds/construction/5.mp3")),this.sample.push(t.load("assets/sounds/construction/6.mp3")),this.sample.push(t.load("assets/sounds/construction/7.mp3")),this.sample.push(t.load("assets/sounds/construction/8.mp3")),this.sample.push(t.load("assets/sounds/construction/9.mp3")),this.sample.push(t.load("assets/sounds/construction/10.mp3")),this.sample.push(t.load("assets/sounds/construction/11.mp3")),this.sample.push(t.load("assets/sounds/construction/12.mp3")),this.sample.push(t.load("assets/sounds/construction/13.mp3")),this.sample.push(t.load("assets/sounds/construction/14.mp3")),this.sample.push(t.load("assets/sounds/construction/15.mp3")),this.sample.push(t.load("assets/sounds/construction/16.mp3")),this.sample.push(t.load("assets/sounds/construction/17.mp3")),this.sample.push(t.load("assets/sounds/construction/18.mp3")),this.sample.push(t.load("assets/sounds/construction/19.mp3")),this.sample.push(t.load("assets/sounds/construction/20.mp3")),this.getRandomSample=function(){return e.getRandomSample(a.sample)},this.playRandomSample=function(){var e;a.locked!==!0&&(e=a.getRandomSample(),e.play(),a.locked=!0,s(function(){a.locked=!1},e.remaining))},this.changeVolume=function(s){e.changeVolume(a.sample,s)}}]),angular.module("lolApi").service("chimesInstrumentService",["ngAudio","instrumentService",function(s,e){"use strict";var t=this;this.sample=[],this.sample.push(s.load("assets/sounds/chimes/1.mp3")),this.sample.push(s.load("assets/sounds/chimes/2.mp3")),this.sample.push(s.load("assets/sounds/chimes/3.mp3")),this.sample.push(s.load("assets/sounds/chimes/4.mp3")),this.sample.push(s.load("assets/sounds/chimes/5.mp3")),this.sample.push(s.load("assets/sounds/chimes/6.mp3")),this.sample.push(s.load("assets/sounds/chimes/7.mp3")),this.sample.push(s.load("assets/sounds/chimes/8.mp3")),this.sample.push(s.load("assets/sounds/chimes/9.mp3")),this.sample.push(s.load("assets/sounds/chimes/10.mp3")),this.sample.push(s.load("assets/sounds/chimes/11.mp3")),this.sample.push(s.load("assets/sounds/chimes/12.mp3")),this.getRandomSample=function(){return e.getRandomSample(t.sample)},this.playRandomSample=function(){var s;s=t.getRandomSample(),s.play()},this.changeVolume=function(s){e.changeVolume(t.sample,s)}}]),angular.module("lolApi").service("birdBgInstrumentService",["$timeout","ngAudio","instrumentService",function(s,e,t){"use strict";var a=this;this.sample=[],this.sample.push(e.load("assets/sounds/birds/soft/1.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/2.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/3.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/4.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/5.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/6.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/7.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/8.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/9.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/10.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/11.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/12.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/13.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/14.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/15.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/16.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/17.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/18.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/19.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/20.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/21.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/22.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/23.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/24.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/25.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/26.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/27.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/28.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/29.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/30.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/31.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/32.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/33.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/34.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/35.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/36.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/37.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/38.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/39.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/40.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/41.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/42.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/43.mp3")),this.sample.push(e.load("assets/sounds/birds/soft/44.mp3")),this.getRandomSample=function(){return t.getRandomSample(a.sample)},this.playRandomSample=function(){var e;a.locked!==!0&&(e=a.getRandomSample(),e.play(),a.locked=!0,s(function(){a.locked=!1},e.remaining))},this.changeVolume=function(s){t.changeVolume(a.sample,s)}}]),angular.module("lolApi").service("birdInstrumentService",["$timeout","instrumentService","ngAudio",function(s,e,t){"use strict";var a=this;this.sample=[],this.sample.push(t.load("assets/sounds/birds/loud/1.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/2.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/3.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/4.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/5.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/6.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/7.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/8.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/9.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/10.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/11.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/12.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/13.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/14.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/15.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/16.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/17.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/18.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/19.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/20.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/21.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/22.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/23.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/24.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/25.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/26.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/27.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/28.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/29.mp3")),this.sample.push(t.load("assets/sounds/birds/loud/30.mp3")),this.getRandomSample=function(){return e.getRandomSample(a.sample)},this.playRandomSample=function(){var e;a.locked!==!0&&(e=a.getRandomSample(),e.play(),a.locked=!0,s(function(){a.locked=!1},e.remaining))},this.changeVolume=function(s){e.changeVolume(a.sample,s)}}]),angular.module("lolApi").service("bikeInstrumentService",["ngAudio","instrumentService",function(s,e){"use strict";var t=this;this.sample=[],this.sample.push(s.load("assets/sounds/bike/1.mp3")),this.sample.push(s.load("assets/sounds/bike/2.mp3")),this.sample.push(s.load("assets/sounds/bike/3.mp3")),this.sample.push(s.load("assets/sounds/bike/4.mp3")),this.getRandomSample=function(){return e.getRandomSample(t.sample)},this.playRandomSample=function(){var s;s=t.getRandomSample(),s.play()},this.changeVolume=function(s){e.changeVolume(t.sample,s)}}]),angular.module("lolApi").service("bellsInstrumentService",["$timeout","instrumentService","ngAudio",function(s,e,t){"use strict";var a=this;this.sample=[],this.sample.push(t.load("assets/sounds/bells/1.mp3")),this.sample.push(t.load("assets/sounds/bells/2.mp3")),this.sample.push(t.load("assets/sounds/bells/3.mp3")),this.getRandomSample=function(){return e.getRandomSample(a.sample)},this.playRandomSample=function(){var e;a.locked!==!0&&(e=a.getRandomSample(),e.play(),a.locked=!0,s(function(){a.locked=!1},e.remaining))},this.changeVolume=function(s){e.changeVolume(a.sample,s)}}]),angular.module("lolApi").service("mathUtilService",function(){"use strict";this.getRandomObjectFromArray=function(s){var e=Math.floor(Math.random()*(s.length-1));return s[e]}}),angular.module("lolApi").service("jsonUtilService",function(){"use strict";this.convertToArray=function(s){return Object.keys(s).map(function(e){return s[e]})}}),angular.module("lolApi").service("arrayUtilService",function(){"use strict";this.caseInsensitiveStringInnerJoin=function(s,e){var t,a,o,n,i=[];if(!angular.isDefined(s)||!angular.isDefined(e))return i;for(t=0;t<s.length;t+=1)for(o=0,n=s[t].toLowerCase(),a=0;a<e.length;a+=1)n===e[a].toLowerCase()&&i.push(e[a]);return i}}),angular.module("lolApi").factory("urfResource",["$resource","apiService",function(s,e){"use strict";return s("https://euw.api.pvp.net/api/lol/euw/v4.1/game/ids?beginDate=:beginDate&api_key="+e.getApiKey())}]),angular.module("lolApi").factory("matchResource",["$resource","apiService",function(s,e){"use strict";return s("https://:region.api.pvp.net/api/lol/:region/v2.2/match/:matchId?includeTimeline=true&api_key="+e.getApiKey())}]),angular.module("lolApi").factory("summonerResource",["$resource","apiService",function(s,e){"use strict";return s("https://:region.api.pvp.net/api/lol/:region/v1.4/summoner/by-name/:username?api_key="+e.getApiKey())}]),angular.module("lolApi").factory("matchHistoryResource",["$resource","apiService",function(s,e){"use strict";return s("https://:region.api.pvp.net/api/lol/:region/v2.2/matchhistory/:id?api_key="+e.getApiKey())}]),angular.module("lolApi").service("summonerService",["$q","summonerResource","matchHistoryResource",function(s,e,t){"use strict";function a(s){var e,t=[];if(angular.isUndefined(s.matches))return void 0;for(e=0;e<s.matches.length;e+=1)t.push(s.matches[e].matchId);return t}this.getMatches=function(o,n){var i=s.defer();return e.get({username:o,region:n},function(s){t.get({id:s[o].id,region:n},function(s){i.resolve(a(s))})}),i.promise}}]),angular.module("lolApi").service("riotUrfService",["$q","urfResource",function(s,e){"use strict";var t=new Date;this.getUrfMatchesWithEpoch=function(t){var a=s.defer();return e.query({beginDate:t},function(s){a.resolve(s)}),a.promise},this.getUrfMatches=function(a,o){var n,i,l,u=s.defer();return i=5*Math.round(o/5),n=new Date(t.getFullYear(),t.getMonth(),t.getDay(),a,i,0,0),l=n.getTime()/1e3,e.query({beginDate:l},function(s){u.resolve(s)}),u.promise}}]),angular.module("lolApi").service("riotMatchService",["$q","matchResource",function(s,e){"use strict";this.getMatchData=function(t,a){var o=s.defer();return e.get({matchId:t,region:a},function(s){o.resolve(s)}),o.promise}}]),angular.module("lolApi").service("matchService",["$q","$timeout","riotMatchService","riotUrfService","summonerService","mathUtilService",function(s,e,t,a,o,n){"use strict";function i(e,a){var o=s.defer(),i=n.getRandomObjectFromArray(e);return t.getMatchData(i,a).then(function(s){o.resolve(s)}),o.promise}var l;this.getTimelineData=function(e){var t=s.defer();return angular.isDefined(l)?i(l).then(function(s){t.resolve(s)}):a.getUrfMatchesWithEpoch(e).then(function(s){l=s,i(l).then(function(s){t.resolve(s)})}),t.promise},this.getTimelineDataFromUser=function(e,t){var a=s.defer();return o.getMatches(e,t).then(function(s){l=s,i(l,t).then(function(s){a.resolve(s)})}),a.promise}}]),angular.module("lolApi").service("apiService",function(){"use strict";this.getApiKey=function(){return"e511e298-0729-48e1-9f2c-20639de4741a"}}),angular.module("lolApi").service("playerService",["$timeout","birdBgInstrumentService","soundFxInstrumentService","harpInstrumentService","chimesInstrumentService","birdInstrumentService","eventCounterService","trafficInstrumentService","leavesInstrumentService","constructionInstrumentService","bellsInstrumentService","bikeInstrumentService","cricketBgInstrumentService","cricketInstrumentService","frogsInstrumentService","thunderInstrumentService","instrumentService","footstepsInstrumentService",function(s,e,t,a,o,n,i,l,u,r,p,m,d,c,h,g,f,v){"use strict";function b(s){var t=[];switch(s){case"ITEM_PURCHASED":t.push(d),t.push(l);break;case"ITEM_UNDO":case"BUILDING_KILL":t.push(o),t.push(m);break;case"WARD_PLACED":t.push(v),t.push(h);break;case"WARD_KILL":t.push(g);break;case"ITEM_DESTROYED":t.push(u);break;case"SKILL_LEVEL_UP":t.push(e),t.push(r);break;case"ITEM_SOLD":t.push(c);break;case"ELITE_MONSTER_KILL":t.push(p);break;case"CHAMPION_KILL":t.push(n),t.push(l);break;default:t.push(e)}return t}function S(s){var e;for(e=0;e<s.length;e+=1)s[e].playRandomSample()}function y(e){s(function(){var s=b(e.eventType);S(s),angular.isDefined(A)&&A(e)},e.timestamp/5)}function k(e){s(function(){console.log("Current match ended, finding new match"),R()},e/5)}var A,R,V=this,x=f.createVolumeCurveFunction(20,65),I=f.createVolumeCurveFunction(80,35,.3),C=f.createVolumeCurveFunction(0,20,.5),w=f.createVolumeCurveFunction(100,80,.4),M=f.createVolumeCurveFunction(20,60,.7),D=f.createVolumeCurveFunction(70,35),F=f.createVolumeCurveFunction(90,60,.8),U=f.createVolumeCurveFunction(10,40,.6),$=f.createVolumeCurveFunction(0,40,.5),T=f.createVolumeCurveFunction(10,50,.1),E=f.createVolumeCurveFunction(90,50,.4),L=f.createVolumeCurveFunction(80,50),P=f.createVolumeCurveFunction(70,40,.8),_=f.createVolumeCurveFunction(20,50,.4),N=f.createVolumeCurveFunction(100,60,.3);t.wind.loop=!0,t.cityWinds.loop=!0,t.hubbub.loop=!0,t.river.loop=!0,g.changeVolume(.4),this.play=function(s,e){var t;for(t=0;t<s.length;t+=1)y(s[t]);k(s[t-1].timestamp),V.replayBackground(),V.changeVolume(e)},this.changeVolume=function(s){e.changeVolume(D(s)),n.changeVolume(F(s)),o.changeVolume(N(s)),r.changeVolume(U(s)),l.changeVolume(M(s)),p.changeVolume($(s)),m.changeVolume(T(s)),h.changeVolume(E(s)),c.changeVolume(L(s)),d.changeVolume(P(s)),v.changeVolume(_(s)),t.wind.volume=I(s),t.cityWinds.volume=x(s),t.hubbub.volume=C(s),t.river.volume=w(s),V.replayBackground()},this.setPlayCallback=function(s){A=s},this.setEndPlayCallback=function(s){R=s},this.mute=function(){e.changeVolume(0),n.changeVolume(0),o.changeVolume(0),r.changeVolume(0),l.changeVolume(0),p.changeVolume(0),u.changeVolume(0),m.changeVolume(0),h.changeVolume(0),c.changeVolume(0),d.changeVolume(0),v.changeVolume(0),g.changeVolume(0),t.wind.volume=0,t.cityWinds.volume=0,t.hubbub.volume=0,t.river.volume=0},this.replayBackground=function(){t.wind.play(),t.cityWinds.play(),t.hubbub.play(),t.river.play()}}]),angular.module("lolApi").service("soundPlayerService",["soundFxIntrumentService",function(s){"use strict";this.playSound=function(){s.kick.play()}}]),angular.module("lolApi").service("noteService",function(){"use strict";this.notes=[{pattern:[{value:.5,type:"rest"},{value:.5,type:"note"}]},{pattern:[{value:.25,type:"note"}]}],this.getNoteFromXY=function(s,e){var t=s+e;return t%8}}),angular.module("lolApi").service("noteProcessorService",function(){"use strict";function s(s){var e=60/s;return 4/e}this.extractNotes=function(s,e){var t;t=s.splice(0,e.length),console.log(e.length),console.log(t.length)},this.formatNotes=function(e,t,a){var o,n,i,l=[];for(i=s(a),o=0;o<e.length;o+=1)n={note:e[o],length:t[o].value*i},l.push(n);return l}}),angular.module("lolApi").service("eventSerializerService",["jsonUtilService","noteService",function(s,e){"use strict";this.getEvents=function(s){var e,t=[],a=s.timeline.frames;for(e=1;e<a.length;e+=1)t=t.concat(a[e].events);return t},this.getPlayerData=function(s){var e,t=[],a=s.timeline.frames;for(e=0;e<a.length;e+=1)t.push(a[e].participantFrames);return t},this.getPlayerDataArray=function(e){var t,a,o,n=[],i=e.timeline.frames;for(t=0;t<i.length;t+=1)for(o=s.convertToArray(i[t].participantFrames),a=0;a<o.length;a+=1)n.push(o[a]);return n},this.getNotesFromPlayerDataArray=function(s){var t,a,o,n=[];for(t=0;t<s.length;t+=1)a=s[t].position,angular.isDefined(a)&&(o=e.getNoteFromXY(a.x,a.y),n.push(o));return n}}]),angular.module("lolApi").service("eventCounterService",function(){"use strict";this.getCounts=function(s){var e,t={};for(e=0;e<s.length;e+=1)angular.isDefined(t[s[e].eventType])?t[s[e].eventType]+=1:t[s[e].eventType]=1;return t}}),angular.module("lolApi").service("colourService",function(){"use strict";function s(s){var e=s.toString(16);return 1===e.length?"0"+e:e}function e(e,t,a){return"#"+s(e)+s(t)+s(a)}function t(s,e,t){var a=e-s,o=a*t;return Math.floor(s+o)}this.getColour=function(s){var a=38,o=39,n=60,i=70,l=63,u=9;return e(t(a,i,s),t(o,l,s),t(n,u,s))}}),angular.module("lolApi").controller("AboutController",["$scope","$modalInstance","events",function(s,e,t){s.events=t,s.cancel=function(){e.dismiss("cancel")}}]),angular.module("lolApi").controller("NavbarCtrl",["$scope",function(s){s.date=new Date}]),angular.module("lolApi").controller("sandboxController",["$scope","matchService","eventSerializerService","playerService",function(s,e,t,a){"use strict";s.changeVolume=function(){a.changeVolume(s.enviromentMix)},e.getTimelineData(1427995800).then(function(e){s.matchesId=t.getEvents(e[0]),a.play(s.matchesId)})}]),angular.module("lolApi").controller("MainCtrl",["$scope","$modal","colourService","matchService","eventSerializerService","playerService",function(s,e,t,a,o,n){"use strict";s.enviromentMix=50,s.muted=!1,s.events=[],s.region="na",s.getColour=function(s){if(!angular.isDefined(s))return t.getColour(.5);var e=t.getColour(s/100);return e},s.changeVolume=function(){n.changeVolume(s.enviromentMix),s.muted=!1},n.setPlayCallback(function(){}),n.setEndPlayCallback(function(){a.getTimelineData(1427995800).then(function(e){s.events=o.getEvents(e),n.play(s.events,s.enviromentMix)})}),s.setMuted=function(e){s.muted=e,e?n.mute():n.changeVolume(s.enviromentMix)},s.open=function(t){e.open({templateUrl:"components/about/templates/about.html",controller:"AboutController",size:t,resolve:{events:function(){return s.events}}});n.replayBackground()},s.getTimeline=function(){a.getTimelineDataFromUser(s.usernameQuery,s.region).then(function(e){s.events=o.getEvents(e),n.play(s.events,s.enviromentMix),s.usernameQuery=void 0})}}]),angular.module("lolApi").run(["$templateCache",function(s){s.put("app/main/main.html",'<div style="backdrop-image"><img src="assets/images/backdrops/city.jpg" class="layer1" style="opacity: {{ 1 - enviromentMix / 100 }}"> <img src="assets/images/backdrops/nature.jpg" style="position: absolute; top: 0px; left: 0px; opacity: {{enviromentMix / 100 }}"></div><div class="volume-buttons"><span ng-show="muted" class="glyphicon glyphicon glyphicon-volume-off" aria-hidden="true" ng-click="setMuted(false)"></span> <span ng-hide="muted" class="glyphicon glyphicon glyphicon-volume-up" aria-hidden="true" ng-click="setMuted(true)"></span></div><div class="full-center"><div class="container"><div class="row text-center"><h1 class="main-title" style="text-shadow: 0px -2px 0px #fde37a, 0px 5px 0px {{ getColour(enviromentMix) }}, 0px 0px 15px #454545;">U.R.F Soundscape</h1></div><div class="row"><input type="range" ng-model="enviromentMix" ng-mouseup="changeVolume()"></div><div class="row text-center form-group"><div class="col-sm-4 col-sm-offset-4 col-xs-12"><form ng-submit="getTimeline()"><div class="input-group"><input type="text" class="form-control" ng-model="usernameQuery" placeholder="League Username" required=""> <span class="input-group-btn"><button type="submit" class="btn btn-primary btn-height-fix">Fetch from {{ region.toUpperCase() }}</button></span></div></form></div></div><div class="row text-center form-group"><div class="col-xs-12"><div class="btn-group"><label class="btn btn-primary" ng-model="region" btn-radio="\'na\'">NA</label> <label class="btn btn-primary" ng-model="region" btn-radio="\'euw\'">EUW</label> <label class="btn btn-primary" ng-model="region" btn-radio="\'eune\'">EUNE</label> <label class="btn btn-primary" ng-model="region" btn-radio="\'br\'">BR</label> <label class="btn btn-primary" ng-model="region" btn-radio="\'tr\'">TR</label> <label class="btn btn-primary" ng-model="region" btn-radio="\'ru\'">RU</label> <label class="btn btn-primary" ng-model="region" btn-radio="\'lan\'">LAN</label> <label class="btn btn-primary" ng-model="region" btn-radio="\'oce\'">OCE</label></div></div></div><div class="row text-center form-group"><button href="" class="btn btn-lg btn-main" ng-click="open()">What is this?</button></div></div></div><div class="footer footer-boltdown"><div class="container"><div class="row"><div class="col-lg-3 col-md-3 col-sm-4 text-center"><img src="assets/images/league-logo.png" alt="League of Legends" height="120px"> <img src="assets/images/utensil-logo.png" alt="Powered by URF" height="50px"></div><div class="col-lg-9 col-md-9 col-sm-8 footer-text"><strong>About:</strong><p>The URF soundscape uses data from the Ultra-Rapid-Fire API to continuously generate an endlessly unique soundscape that will go on forever & ever... This has been created as an entry for the Riot API challenge!</p><strong>Made by:</strong> <a href="https://uk.linkedin.com/in/dolan1" target="_blank">Dolan Miu</a> & <a href="https://uk.linkedin.com/pub/kelvin-chan/ab/60b/946" target="_blank">Kelvin Chan</a>. All sounds from <a href="https://www.freesound.org" target="_blank">freesound.org</a> and privately recorded.</div></div></div></div>'),s.put("app/sandbox/sandbox.html",'<input type="range" ng-model="enviromentMix" ng-change="changeVolume()"> {{enviromentMix}}'),s.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>'),s.put("components/about/templates/about.html",'<div class="modal-header"><h3 class="modal-title">U.R.F Soundscape</h3></div><div class="modal-body"><p>This is an App that converts events which happen during U.R.F matches into a beautiful soundscape spectrum ranging from the inner city to tranquil nature. Use this for studying, or work, or for relaxing. This project is a fusion between sound design and programming.</p><h3>How to use</h3><p>Use the slider on the middle of the screen to change the type of soundscape. Swipe it to the far left for a very inner city feel, far right to immerse yourself in the middle of a forest, to keep it inbetween to have a mixture - Suburbs, city edge!</p><h3>How it works</h3><p>The LoL Match end-point provides a timeline data which has a sequence of events. We mapped those events into various pre-mixed sounds to create a natural (and suprisingly very realistic) soundscape.</p><h3>Notes</h3><p>App made in AngularJS and Express, and deployed to Heroku. Sound mixed with Apple Logic Pro. All sound is from freesound.org or recorded by Dolan Miu.</p></div><div class="modal-footer"><button class="btn btn-warning" ng-click="cancel()">Close</button></div>')
}]);