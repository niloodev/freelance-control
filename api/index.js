var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_exports = {};
__export(assets_manifest_exports, {
  default: () => assets_manifest_default
});
var assets_manifest_default, init_assets_manifest = __esm({
  "server-assets-manifest:@remix-run/dev/assets-manifest"() {
    assets_manifest_default = { version: "c05c6f12", entry: { module: "/build/entry.client-SXTVTPJW.js", imports: ["/build/_shared/chunk-GEFCX2A6.js", "/build/_shared/chunk-HMYJKECG.js", "/build/_shared/chunk-TBRGJTBB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XZYWHKKH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth-QNLOBEPB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "routes/_auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login-RON7UO73.js", imports: ["/build/_shared/chunk-5XHTEU6D.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.register": { id: "routes/_auth.register", parentId: "routes/_auth", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.register-VAPJA4M6.js", imports: ["/build/_shared/chunk-5XHTEU6D.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-MPNY62PW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-C05C6F12.js" };
  }
});

// node_modules/@remix-run/css-bundle/dist/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/css-bundle/dist/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var assetsManifest = (init_assets_manifest(), __toCommonJS(assets_manifest_exports));
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var assetsManifest__default = /* @__PURE__ */ _interopDefaultLegacy(assetsManifest), cssBundleHref2 = assetsManifest__default.default.cssBundleHref;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server");

// app/utils/db/db.server.ts
var import_mongoose = __toESM(require("mongoose")), db;
async function connect() {
  if (db)
    return db;
  try {
    global.__db || (global.__db = await import_mongoose.default.connect(
      process.env.MONGODB_URI
    )), db = global.__db, console.log("Connected to database.");
  } catch (e) {
    throw new Error(e);
  }
  return db;
}

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
connect();
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 13
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 90,
          columnNumber: 13
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_server()), import_react2 = require("@remix-run/react");

// app/assets/css/main.css
var main_default = "/build/_assets/main-LXKEG7LN.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), rootLinks = [
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
], links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }, ...rootLinks] : [...rootLinks]
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 37,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.register.tsx
var auth_register_exports = {};
__export(auth_register_exports, {
  action: () => action,
  default: () => Register,
  headers: () => headers,
  meta: () => meta
});
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/utils/validation/validation.boilerplate.ts
var import_with_zod = require("@remix-validated-form/with-zod"), import_zod = require("zod"), validationLabels = {
  email: import_zod.z.string().min(1, { message: "Campo obrigat\xF3rio." }).email("Precisa ser um email v\xE1lido."),
  password: import_zod.z.string().min(1, { message: "Campo obrigat\xF3rio." }),
  tel: import_zod.z.string().regex(/^\(\d{2}\)\s\d{5}-\d{4}$/, {
    message: "N\xE3o \xE9 um n\xFAmero v\xE1lido."
  }),
  cnpj: import_zod.z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
    message: "CNPJ inv\xE1lido."
  }),
  meiName: import_zod.z.string().min(3, { message: "M\xEDnimo de 3 caracteres." }),
  name: import_zod.z.string().min(3, { message: "M\xEDnimo de 5 caracteres." }).regex(/\s/, { message: "Precisa ser o nome completo." })
};
function createValidator(labels) {
  let validationObject = [...labels].reduce(
    (prev, cur) => (prev[cur] = validationLabels[cur], prev),
    {}
  );
  return (0, import_with_zod.withZod)(import_zod.z.object(validationObject));
}

// app/routes/_auth.register.tsx
var import_remix_validated_form2 = require("remix-validated-form"), import_react5 = require("@remix-run/react"), import_material2 = require("@mui/material");

// app/components/form/TextField/TextField.tsx
var import_material = require("@mui/material"), import_remix_validated_form = require("remix-validated-form"), import_react_input_mask = __toESM(require("react-input-mask")), import_react3 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), TextField = (0, import_react3.memo)(
  ({ name, mask = "", ...props }) => {
    let { error, getInputProps, validate } = (0, import_remix_validated_form.useField)(name), [value, setValue] = (0, import_remix_validated_form.useControlField)(name);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_react_input_mask.default,
      {
        ...getInputProps({
          id: name,
          value: value ?? "",
          onChange: (e) => {
            setValue(e.target.value), validate();
          }
        }),
        mask,
        maskPlaceholder: null,
        children: (nextProps) => (delete nextProps.mask, delete nextProps.maskPlaceholder, /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_material.TextField,
          {
            InputProps: {
              style: { fontSize: "1.4rem" },
              ...nextProps
            },
            InputLabelProps: {
              style: { fontSize: "1.4rem" }
            },
            error: !!error,
            helperText: error,
            ...props
          },
          void 0,
          !1,
          {
            fileName: "app/components/form/TextField/TextField.tsx",
            lineNumber: 31,
            columnNumber: 29
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/components/form/TextField/TextField.tsx",
        lineNumber: 14,
        columnNumber: 13
      },
      this
    );
  },
  (prevProps, nextProps) => prevProps.name == nextProps.name
);

// app/utils/db/models/db.schemas.ts
var userSchema = new import_mongoose.default.Schema({
  name: String,
  password: String,
  email: String,
  meiName: String,
  cnpj: String,
  tel: String
});

// app/utils/db/models/index.ts
var User = import_mongoose.default.models.User || import_mongoose.default.model("User", userSchema);

// app/actions/auth.actions.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
async function registerUser(user) {
  try {
    let salt = await import_bcryptjs.default.genSalt(), hashedPassword = await import_bcryptjs.default.hash(user.password, salt);
    user.password = hashedPassword;
    let nUser = new User(user);
    if ((await User.find({ email: user == null ? void 0 : user.email })).length != 0)
      throw new Error("User already exists");
    return await nUser.save(), nUser;
  } catch (e) {
    throw new Error(e);
  }
}

// app/routes/_auth.register.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), validator = createValidator(
  /* @__PURE__ */ new Set(["email", "password", "tel", "cnpj", "meiName", "name"])
), headers = () => ({
  "Cache-Control": "public, max-age=604800"
}), meta = () => [
  {
    title: "Cadastro - Mei Invoices"
  }
], action = async ({ request }) => {
  let formData = await request.formData(), validate = await validator.validate(formData);
  if (!validate.data)
    return (0, import_node2.json)(
      { message: "Verifique seus campos.", logged: !1 },
      { status: 400 }
    );
  let data = validate.data;
  try {
    await registerUser(data);
  } catch {
    return (0, import_node2.json)(
      {
        message: "Erro ao criar usu\xE1rio ou usu\xE1rio existente.",
        logged: !1
      },
      { status: 400 }
    );
  }
  throw (0, import_node2.redirect)("/login");
};
function Register() {
  let action3 = (0, import_react4.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_remix_validated_form2.ValidatedForm,
    {
      className: "auth__form auth__form--extended",
      validator,
      method: "POST",
      children: [
        (action3 == null ? void 0 : action3.logged) == !1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "auth__error", children: action3 == null ? void 0 : action3.message }, void 0, !1, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 65,
          columnNumber: 17
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, {}, void 0, !1, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "auth__row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            TextField,
            {
              variant: "outlined",
              type: "text",
              label: "Nome",
              name: "name"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth.register.tsx",
              lineNumber: 70,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            TextField,
            {
              variant: "outlined",
              type: "text",
              label: "Nome da Empresa",
              name: "meiName"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth.register.tsx",
              lineNumber: 76,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "auth__row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            TextField,
            {
              variant: "outlined",
              type: "email",
              label: "E-mail",
              name: "email",
              placeholder: "email@example.com"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth.register.tsx",
              lineNumber: 84,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
            !1,
            {
              fileName: "app/routes/_auth.register.tsx",
              lineNumber: 91,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "auth__row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            TextField,
            {
              variant: "outlined",
              type: "password",
              label: "Senha",
              name: "password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth.register.tsx",
              lineNumber: 101,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
            !1,
            {
              fileName: "app/routes/_auth.register.tsx",
              lineNumber: 107,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_material2.Button, { variant: "contained", type: "submit", children: "Cadastrar-se" }, void 0, !1, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "J\xE1 tem uma conta?" }, void 0, !1, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Link, { to: "/login", children: "Entre agora" }, void 0, !1, {
          fileName: "app/routes/_auth.register.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_auth.register.tsx",
      lineNumber: 59,
      columnNumber: 9
    },
    this
  );
}

// app/routes/_auth.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  action: () => action2,
  default: () => Login,
  headers: () => headers2,
  meta: () => meta2
});
var import_node3 = require("@remix-run/node");
var import_remix_validated_form3 = require("remix-validated-form"), import_react6 = require("@remix-run/react"), import_material3 = require("@mui/material");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), validator2 = createValidator(/* @__PURE__ */ new Set(["email", "password"])), headers2 = () => ({
  "Cache-Control": "public, max-age=604800"
}), meta2 = () => [
  {
    title: "Entrar - Mei Invoices"
  }
], action2 = async ({ request }) => {
  let formData = await request.formData(), validate = await validator2.validate(formData);
  if (!validate.data)
    return (0, import_node3.json)(
      { message: "Verifique seus campos.", logged: !1 },
      { status: 406 }
    );
  let data = validate.data;
  return !0;
};
function Login() {
  let action3 = (0, import_react6.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_remix_validated_form3.ValidatedForm,
    {
      validator: validator2,
      className: "auth__form",
      method: "POST",
      children: [
        (action3 == null ? void 0 : action3.logged) == !1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "auth__error", children: action3 == null ? void 0 : action3.message }, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, {}, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          TextField,
          {
            variant: "outlined",
            type: "email",
            label: "E-mail",
            name: "email",
            placeholder: "email@example.com"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.login.tsx",
            lineNumber: 52,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          TextField,
          {
            variant: "outlined",
            type: "password",
            label: "Senha",
            name: "password"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.login.tsx",
            lineNumber: 59,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_material3.FormControlLabel,
          {
            control: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_material3.Checkbox, { defaultChecked: !0 }, void 0, !1, {
              fileName: "app/routes/_auth.login.tsx",
              lineNumber: 66,
              columnNumber: 26
            }, this),
            label: "Manter autenticado"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.login.tsx",
            lineNumber: 65,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_material3.Button, { variant: "contained", type: "submit", children: "Entrar" }, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "N\xE3o possui uma conta?" }, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { to: "/register", children: "Cadastre-se" }, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 42,
      columnNumber: 9
    },
    this
  );
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  loader: () => loader
});
var import_react_router = require("react-router"), loader = () => {
  throw (0, import_react_router.redirect)("/login");
};

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthLayout,
  links: () => links2
});
var import_react7 = require("@remix-run/react"), import_framer_motion = require("framer-motion");

// app/assets/css/layout/auth.css
var auth_default = "/build/_assets/auth-HA37POCS.css";

// app/routes/_auth.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), links2 = () => [
  {
    href: auth_default,
    rel: "stylesheet"
  }
];
function AuthLayout() {
  let outlet = (0, import_react7.useOutlet)(), location = (0, import_react7.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "auth", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Mei Invoices" }, void 0, !1, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 21,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_framer_motion.AnimatePresence, { mode: "wait", initial: !1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_framer_motion.motion.div,
      {
        className: "auth__wrapper",
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
        transition: {
          duration: 0.15
        },
        children: outlet
      },
      location.pathname,
      !1,
      {
        fileName: "app/routes/_auth.tsx",
        lineNumber: 23,
        columnNumber: 21
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 22,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 20,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
init_assets_manifest();
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_auth.register": {
    id: "routes/_auth.register",
    parentId: "routes/_auth",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: auth_register_exports
  },
  "routes/_auth.login": {
    id: "routes/_auth.login",
    parentId: "routes/_auth",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/_auth": {
    id: "routes/_auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/server.js:
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
//# sourceMappingURL=index.js.map
