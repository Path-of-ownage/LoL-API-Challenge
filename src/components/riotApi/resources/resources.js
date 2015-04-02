/*globals angular */
angular.module('lolApi').factory('urfResource', function ($resource, apiService) {
    'use strict';
    return $resource('https://euw.api.pvp.net/api/lol/euw/v4.1/game/ids?beginDate=:beginDate&api_key=' + apiService.getApiKey());
});

angular.module('lolApi').factory('matchResource', function ($resource, apiService) {
    'use strict';
    return $resource('https://euw.api.pvp.net/api/lol/euw/v2.2/match/:matchId?includeTimeline=true&api_key=' + apiService.getApiKey());
});
