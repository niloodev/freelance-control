import {
  Button_default,
  Checkbox_default,
  FormControlLabel_default,
  TextField,
  ValidatedForm,
  createValidator,
  init_index_esm
} from "/build/_shared/chunk-WHDRGZV3.js";
import "/build/_shared/chunk-FMBPE4YN.js";
import {
  Link,
  __toESM,
  init_buffer,
  init_dirname,
  init_esm,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-LDQVXYHF.js";

// browser-route-module:routes/_auth.login.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/_auth.login.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
init_index_esm();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var validator = createValidator(/* @__PURE__ */ new Set(["email", "password"]));
var meta = () => [
  {
    title: "Entrar - Mei Invoices"
  }
];
function Login() {
  const action = useActionData();
  const navigation = useNavigation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    ValidatedForm,
    {
      validator,
      className: "auth__form",
      method: "POST",
      children: [
        (action == null ? void 0 : action.logged) == false ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "auth__error", children: action == null ? void 0 : action.message }, void 0, false, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 80,
          columnNumber: 17
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 82,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          TextField,
          {
            variant: "outlined",
            type: "email",
            label: "E-mail",
            name: "email",
            placeholder: "email@example.com",
            disabled: navigation.state == "submitting"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_auth.login.tsx",
            lineNumber: 84,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          TextField,
          {
            variant: "outlined",
            type: "password",
            label: "Senha",
            name: "password",
            disabled: navigation.state == "submitting"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_auth.login.tsx",
            lineNumber: 92,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          FormControlLabel_default,
          {
            control: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox_default, { defaultChecked: true }, void 0, false, {
              fileName: "app/routes/_auth.login.tsx",
              lineNumber: 100,
              columnNumber: 26
            }, this),
            label: "Manter autenticado",
            disabled: navigation.state == "submitting"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_auth.login.tsx",
            lineNumber: 99,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Button_default,
          {
            variant: "contained",
            disabled: navigation.state == "submitting",
            type: "submit",
            children: "Entrar"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_auth.login.tsx",
            lineNumber: 104,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/register", children: "Cadastre-se" }, void 0, false, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 74,
      columnNumber: 9
    },
    this
  );
}
export {
  Login as default,
  meta
};
//# sourceMappingURL=/build/routes/_auth.login-6HK4KYCW.js.map
