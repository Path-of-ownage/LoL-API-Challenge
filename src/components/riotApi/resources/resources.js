/*globals angular */
angular.module('lolApi').factory('urfResource', function ($resource, apiService) {
    'use strict';
    return $resource('https://euw.api.pvp.net/api/lol/euw/v4.1/game/ids?beginDate=:beginDate&api_key=' + apiService.getApiKey());
});

angular.module('lolApi').factory('matchResource', function ($resource, apiService) {
    'use strict';
    return $resource('https://:region.api.pvp.net/api/lol/:region/v2.2/match/:matchId?includeTimeline=true&api_key=' + apiService.getApiKey());
});

angular.module('lolApi').factory('summonerResource', function ($resource, apiService) {
    'use strict';
    return $resource('https://:region.api.pvp.net/api/lol/:region/v1.4/summoner/by-name/:username?api_key=' + apiService.getApiKey());
});


angular.module('lolApi').factory('matchHistoryResource', function ($resource, apiService) {
    'use strict';
    return $resource('https://:region.api.pvp.net/api/lol/:region/v2.2/matchhistory/:id?api_key=' + apiService.getApiKey());
});

