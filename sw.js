const version = "v0.1"
const root = ''
if (!self.define) {
    let e, s = {};
    const i = (i, n) => (i = new URL(i + ".js",n).href,
    s[i] || new Promise(s => {
        if ("document"in self) {
            const e = document.createElement("script");
            e.src = i,
            e.onload = s,
            document.head.appendChild(e)
        } else
            e = i,
            importScripts(i),
            s()
    }
    ).then( () => {
        let e = s[i];
        if (!e)
            throw new Error(`Module ${i} didn’t register its module`);
        return e
    }
    ));
    self.define = (n, t) => {
        const r = e || ("document"in self ? document.currentScript.src : "") || location.href;
        if (s[r])
            return;
        let o = {};
        const l = e => i(e, r)
          , c = {
            module: {
                uri: r
            },
            exports: o,
            require: l
        };
        s[r] = Promise.all(n.map(e => c[e] || l(e))).then(e => (t(...e),
        o))
    }
}
define(["./workbox"], function(e) {
    "use strict";
    self.addEventListener("message", e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    }
    ),
    e.precacheAndRoute([{
        url: root + "/index.html",
        revision: version
    }, {
        url: root + "/Loader.js",
        revision: version
    }, {
        url: root + "/781a.png",
        revision: version
    }, {
        url: root + "/781H-images-0.jpg",
        revision: version
    }, {
        url: root + "/781H-images-1.jpg",
        revision: version
    }, {
        url: root + "/f16.glb",
        revision: version
    }, {
        url: root + "/script.js",
        revision: version
    }, {
        url: root + "/style.css",
        revision: version
    }, {
        url: root + "/three.js",
        revision: version
    },{
        url: root + "/icon.jpg",
        revision: version
    }, {
        url: root + "/Orbit.js",
        revision: version
    }, {
        url: root + "/manifest.json",
        revision: version
    }], {}),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL(root + "/index.html")))
});
