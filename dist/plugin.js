var capacitorFacebookAnalytics = (function (exports, core) {
    'use strict';

    const FacebookAnalytics = core.registerPlugin('FacebookAnalytics', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.FacebookAnalyticsWeb()),
    });

    class FacebookAnalyticsWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'FacebookAnalytics',
                platforms: ['web'],
            });
        }
        logEvent(_) {
            throw super.unimplemented();
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        FacebookAnalyticsWeb: FacebookAnalyticsWeb
    });

    exports.FacebookAnalytics = FacebookAnalytics;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
