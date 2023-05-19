import {
  Button_default,
  TextField,
  ValidatedForm,
  createValidator,
  init_index_esm
} from "/build/_shared/chunk-5XHTEU6D.js";
import "/build/_shared/chunk-GEFCX2A6.js";
import {
  Link,
  init_esm,
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-HMYJKECG.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-TBRGJTBB.js";

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
init_esm();
init_index_esm();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var validator = createValidator(
  /* @__PURE__ */ new Set(["email", "password", "tel", "cnpj", "meiName", "name"])
);
var meta = () => [
  {
    title: "Cadastro - Mei Invoices"
  }
];
function Register() {
  const action = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    ValidatedForm,
    {
      className: "auth__form auth__form--extended",
      validator,
      method: "POST",
      children: [
        (action == null ? void 0 : action.logged) == false ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "auth__error", children: action == null ? void 0 : action.message }, void 0, false, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 65,
          columnNumber: 17
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "auth__row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TextField,
            {
              variant: "outlined",
              type: "text",
              label: "Nome",
              name: "name"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_auth.register.tsx",
              lineNumber: 70,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TextField,
            {
              variant: "outlined",
              type: "text",
              label: "Nome da Empresa",
              name: "meiName"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_auth.register.tsx",
              lineNumber: 76,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "auth__row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TextField,
            {
              variant: "outlined",
              type: "email",
              label: "E-mail",
              name: "email",
              placeholder: "email@example.com"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_auth.register.tsx",
              lineNumber: 84,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TextField,
            {
              variant: "outlined",
              type: "text",
              label: "CNPJ",
              name: "cnpj",
              placeholder: "99.999.999/9999-99",
              mask: "99.999.999/9999-99"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_auth.register.tsx",
              lineNumber: 91,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "auth__row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TextField,
            {
              variant: "outlined",
              type: "password",
              label: "Senha",
              name: "password"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_auth.register.tsx",
              lineNumber: 101,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TextField,
            {
              variant: "outlined",
              type: "tel",
              label: "Telefone",
              name: "tel",
              placeholder: "(99) 99999-9999",
              mask: "(99) 99999-9999"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_auth.register.tsx",
              lineNumber: 107,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "contained", type: "submit", children: "Cadastrar-se" }, void 0, false, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "J\xE1 tem uma conta?" }, void 0, false, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", children: "Entre agora" }, void 0, false, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_auth.register.tsx",
      lineNumber: 59,
      columnNumber: 9
    },
    this
  );
}
export {
  Register as default,
  meta
};
//# sourceMappingURL=/build/routes/_auth.register-VAPJA4M6.js.map
