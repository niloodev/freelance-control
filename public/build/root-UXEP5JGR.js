import {
  ThemeProvider,
  createTheme_default
} from "/build/_shared/chunk-CDIH427S.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-2U5C6ECS.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VR7LW3IS.js";

// browser-route-module:root.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/root.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/@remix-run/css-bundle/dist/esm/browser.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var assetsManifest = window.__remixManifest;
var updatedHref = typeof __INJECT_CSS_BUNDLE_HREF__ === "string" ? __INJECT_CSS_BUNDLE_HREF__ : void 0;
var cssBundleHref = updatedHref || assetsManifest.cssBundleHref;

// app/assets/css/main.css
var main_default = "/build/_assets/main-GFCCM42O.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var theme = createTheme_default({
  palette: {
    mode: "light",
    primary: {
      main: "#666666"
    },
    secondary: {
      main: "#f50057"
    },
    error: {
      main: "#770a0a"
    }
  }
});
var rootLinks = [
  { rel: "stylesheet", href: main_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  }
];
var links = () => [
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }, ...rootLinks] : [...rootLinks]
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, { theme, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        },
        void 0,
        false,
        {
          fileName: "app/root.tsx",
          lineNumber: 54,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 61,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 51,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
/*! Bundled license information:

@remix-run/css-bundle/dist/esm/browser.js:
  (**
   * @remix-run/css-bundle v1.16.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=/build/root-UXEP5JGR.js.map
