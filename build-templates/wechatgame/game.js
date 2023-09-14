
const libs = {};
function __requireLibs() {
    if(libs.fundebug != null){
      return libs;
    }
    libs.fundebug = require('./libs/fundebug.0.5.0.min.js')  
    return libs;
}
function __initLibs(){
  if(!libs){
    return;
  }
  libs.fundebug.init({
    apikey: "a85807fa01dfab04b7b119514c035a9dc4b2011fa036580e572dced816ecbd9b",
});
  wx["abyLibs"] = libs;
  console.log("wx第三方Libs:",wx["abyLibs"]);
}
function __initApp() {  // init app
    globalThis.__wxRequire = require;  // FIX: require cannot work in separate engine 

    require('./web-adapter');
    const firstScreen = require('./first-screen');


    // Polyfills bundle.
    require("src/polyfills.bundle.js");

    // SystemJS support.
    require("src/system.bundle.js");


    // Adapt for IOS, swap if opposite
    if (canvas) {
        var _w = canvas.width;
        var _h = canvas.height;
        if (screen.width < screen.height) {
            if (canvas.width > canvas.height) {
                _w = canvas.height;
                _h = canvas.width;
            }
        } else {
            if (canvas.width < canvas.height) {
                _w = canvas.height;
                _h = canvas.width;
            }
        }
        canvas.width = _w;
        canvas.height = _h;
    }
    // Adjust initial canvas size
    if (canvas && window.devicePixelRatio >= 2) { canvas.width *= 2; canvas.height *= 2; }

    const importMap = require("src/import-map.js").default;
    System.warmup({
        importMap,
        importMapUrl: 'src/import-map.js',
        defaultHandler: (urlNoSchema) => {
            require('.' + urlNoSchema);
        },
        handlers: {
            'plugin:': (urlNoSchema) => {
                requirePlugin(urlNoSchema);
            },
            'project:': (urlNoSchema) => {
                require(urlNoSchema);
            },
        },
    });

    firstScreen.start('default', 'default', 'false').then(() => {
        return System.import('./application.js');
    }).then((module) => {
        return firstScreen.setProgress(0.2).then(() => Promise.resolve(module));
    }).then(({ Application }) => {
        return new Application();
    }).then((application) => {
        return firstScreen.setProgress(0.4).then(() => Promise.resolve(application));
    }).then((application) => {
        return onApplicationCreated(application);
    }).catch((err) => {
        console.error(err);
    });

    function onApplicationCreated(application) {
        return System.import('cc').then((module) => {
            return firstScreen.setProgress(0.6).then(() => Promise.resolve(module));
        }).then((cc) => {
            require('./engine-adapter');
            __initLibs();
            return application.init(cc);
        }).then(() => {
            return firstScreen.end().then(() => application.start());
        });
    }

}  // init app

// NOTE: on WeChat Android end, we can only get the correct screen size at the second tick of game.
var sysInfo = wx.getSystemInfoSync();
if (sysInfo.platform.toLocaleLowerCase() === 'android') {
	__requireLibs();
    GameGlobal.requestAnimationFrame(__initApp);
} else {
    __requireLibs();
    __initApp();
}
