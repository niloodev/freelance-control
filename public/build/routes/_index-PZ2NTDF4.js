import {
  __toESM,
  init_buffer,
  init_dirname,
  init_esm,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-LDQVXYHF.js";

// browser-route-module:routes/_index.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/_index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Home() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: data.logged.toString() }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 12
  }, this);
}
export {
  Home as default
};
//# sourceMappingURL=/build/routes/_index-PZ2NTDF4.js.map
