import {
  motion
} from "/build/_shared/chunk-VA2TXTSK.js";
import {
  Link
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

// browser-route-module:routes/_auth.register.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/_auth.register.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => [
  {
    title: "Cadastro - Mei Invoices"
  }
];
function Register() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    motion.form,
    {
      className: "auth__form",
      action: "POST",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", children: "IR PARA LOGIN" }, void 0, false, {
        fileName: "app/routes/_auth.register.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/_auth.register.tsx",
      lineNumber: 14,
      columnNumber: 9
    },
    this
  );
}
export {
  Register as default,
  meta
};
//# sourceMappingURL=/build/routes/_auth.register-SLJJHVNR.js.map
