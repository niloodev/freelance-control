import {
  require_react_dom
} from "/build/_shared/chunk-TZUJ7GY4.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-2U5C6ECS.js";
import {
  __commonJS,
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VR7LW3IS.js";

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// app/entry.client.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react2 = __toESM(require_react());
var import_client = __toESM(require_client());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
(0, import_react2.startTransition)(() => {
  (0, import_client.hydrateRoot)(
    document,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this)
  );
});
//# sourceMappingURL=/build/entry.client-VA4ICQXV.js.map
