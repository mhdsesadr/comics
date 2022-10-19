"use strict";
(self["webpackChunkcomics"] = self["webpackChunkcomics"] || []).push([[82],{

/***/ 3365:
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationRoutingModule": () => (/* binding */ AuthenticationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 7510);
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.component */ 6462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);





const routes = [{
  path: '',
  component: _authentication_component__WEBPACK_IMPORTED_MODULE_1__.AuthenticationComponent,
  children: [{
    path: 'login',
    component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
  }]
}];
let AuthenticationRoutingModule = /*#__PURE__*/(() => {
  class AuthenticationRoutingModule {}

  AuthenticationRoutingModule.ɵfac = function AuthenticationRoutingModule_Factory(t) {
    return new (t || AuthenticationRoutingModule)();
  };

  AuthenticationRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AuthenticationRoutingModule
  });
  AuthenticationRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
  return AuthenticationRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6462:
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationComponent": () => (/* binding */ AuthenticationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);


let AuthenticationComponent = /*#__PURE__*/(() => {
  class AuthenticationComponent {
    constructor() {}

    ngOnInit() {}

  }

  AuthenticationComponent.ɵfac = function AuthenticationComponent_Factory(t) {
    return new (t || AuthenticationComponent)();
  };

  AuthenticationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AuthenticationComponent,
    selectors: [["app-authentication"]],
    decls: 1,
    vars: 0,
    template: function AuthenticationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet]
  });
  return AuthenticationComponent;
})();

/***/ }),

/***/ 1082:
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationModule": () => (/* binding */ AuthenticationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication-routing.module */ 3365);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ 7510);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4859);
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.component */ 6462);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);









let AuthenticationModule = /*#__PURE__*/(() => {
  class AuthenticationModule {}

  AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) {
    return new (t || AuthenticationModule)();
  };

  AuthenticationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AuthenticationModule
  });
  AuthenticationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
  return AuthenticationModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthenticationModule, {
    declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _authentication_component__WEBPACK_IMPORTED_MODULE_2__.AuthenticationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 7510:
/*!***************************************************************!*\
  !*** ./src/app/authentication/pages/login/login.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _store_user_user_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/user/user.action */ 5228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 8555);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 9549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4859);
/* harmony import */ var _shared_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/theme-switcher/theme-switcher.component */ 7291);











function LoginComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function LoginComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nStart"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function LoginComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nStart"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

let LoginComponent = /*#__PURE__*/(() => {
  class LoginComponent {
    constructor(store) {
      this.store = store;
      this.themeClass = '';
      this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]);
      this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
      this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
        email: this.emailFormControl,
        password: this.passwordFormControl
      });
    }

    changeTheme(theme) {
      if (theme === 'dark') {
        this.themeClass = 'dark-mode';
      } else {
        this.themeClass = '';
      }
    }

    ngOnInit() {}

    onSubmit() {
      this.store.dispatch(_store_user_user_action__WEBPACK_IMPORTED_MODULE_0__.userActions.login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }));
    }

  }

  LoginComponent.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };

  LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 22,
    vars: 7,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7455210231886347358$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS_1 = goog.getMsg("login to your Account");
        i18n_0 = MSG_EXTERNAL_7455210231886347358$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS_1;
      } else {
        i18n_0 = "login to your Account";
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4768749765465246664$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS_3 = goog.getMsg("Email");
        i18n_2 = MSG_EXTERNAL_4768749765465246664$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS_3;
      } else {
        i18n_2 = "Email";
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2347440436100797354$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS_5 = goog.getMsg("Ex. pat@example.com");
        i18n_4 = MSG_EXTERNAL_2347440436100797354$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS_5;
      } else {
        i18n_4 = "Ex. pat@example.com";
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1431416938026210429$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS_7 = goog.getMsg("Password");
        i18n_6 = MSG_EXTERNAL_1431416938026210429$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS_7;
      } else {
        i18n_6 = "Password";
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1431416938026210429$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS_9 = goog.getMsg("Password");
        i18n_8 = MSG_EXTERNAL_1431416938026210429$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS_9;
      } else {
        i18n_8 = "Password";
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8160585113798604849$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS_11 = goog.getMsg("Login ");
        i18n_10 = MSG_EXTERNAL_8160585113798604849$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS_11;
      } else {
        i18n_10 = "Login ";
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2758137757089815882$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS__13 = goog.getMsg(" Please enter a valid email address ");
        i18n_12 = MSG_EXTERNAL_2758137757089815882$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS__13;
      } else {
        i18n_12 = " Please enter a valid email address ";
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3651520221086968086$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS__15 = goog.getMsg(" Email is {$startTagStrong}required{$closeTagStrong}", {
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        }, {
          original_code: {
            "startTagStrong": "<strong>",
            "closeTagStrong": "</strong>"
          }
        });
        i18n_14 = MSG_EXTERNAL_3651520221086968086$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS__15;
      } else {
        i18n_14 = " Email is " + "\uFFFD#2\uFFFD" + "required" + "\uFFFD/#2\uFFFD" + "";
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_527537244924329340$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS__17 = goog.getMsg(" Password is {$startTagStrong}required{$closeTagStrong}", {
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        }, {
          original_code: {
            "startTagStrong": "<strong>",
            "closeTagStrong": "</strong>"
          }
        });
        i18n_16 = MSG_EXTERNAL_527537244924329340$$SRC_APP_AUTHENTICATION_PAGES_LOGIN_LOGIN_COMPONENT_TS__17;
      } else {
        i18n_16 = " Password is " + "\uFFFD#2\uFFFD" + "required" + "\uFFFD/#2\uFFFD" + "";
      }

      return [[1, "container", "flex", "justify-center", "items-center", "h-full", "!max-w-none", 3, "ngClass"], [1, "docs-app-background", "!w-screen", "h-full", "flex", "justify-center", "items-center"], [1, "px-5", "pb-52"], [1, "text-stone-700"], i18n_0, [1, "example-form", "pt-2", 3, "ngSubmit"], ["appearance", "fill", 1, "example-full-width", "pb-5"], i18n_2, ["type", "email", "matInput", "", "placeholder", i18n_4, 3, "formControl"], [4, "ngIf"], ["appearance", "fill", 1, "example-full-width"], i18n_6, ["type", "password", "matInput", "", "placeholder", i18n_8, 3, "formControl"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], i18n_10, [3, "changed"], i18n_12, i18n_14, i18n_16];
    },
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 6)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Errors appear instantly!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, LoginComponent_mat_error_12_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, LoginComponent_mat_error_13_Template, 3, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 10)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, LoginComponent_mat_error_18_Template, 3, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "app-theme-switcher", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("changed", function LoginComponent_Template_app_theme_switcher_changed_21_listener($event) {
          return ctx.changeTheme($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.themeClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.emailFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.passwordFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _shared_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_1__.ThemeSwitcherComponent],
    styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, textarea[_ngcontent-%COMP%]:-webkit-autofill, textarea[_ngcontent-%COMP%]:-webkit-autofill:hover, textarea[_ngcontent-%COMP%]:-webkit-autofill:focus, select[_ngcontent-%COMP%]:-webkit-autofill, select[_ngcontent-%COMP%]:-webkit-autofill:hover, select[_ngcontent-%COMP%]:-webkit-autofill:focus {\n  -webkit-transition: background-color 9000000s ease-in-out 0s;\n  transition: background-color 9000000s ease-in-out 0s;\n}\n\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}"]
  });
  return LoginComponent;
})();

/***/ }),

/***/ 9349:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2020/text-field.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutofillMonitor": () => (/* binding */ AutofillMonitor),
/* harmony export */   "CdkAutofill": () => (/* binding */ CdkAutofill),
/* harmony export */   "CdkTextareaAutosize": () => (/* binding */ CdkTextareaAutosize),
/* harmony export */   "TextFieldModule": () => (/* binding */ TextFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 3353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 1281);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 515);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4968);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 453);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2722);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6895);








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Options to pass to the animationstart listener. */

const listenerOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */

let AutofillMonitor = /*#__PURE__*/(() => {
  class AutofillMonitor {
    constructor(_platform, _ngZone) {
      this._platform = _platform;
      this._ngZone = _ngZone;
      this._monitoredElements = new Map();
    }

    monitor(elementOrRef) {
      if (!this._platform.isBrowser) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
      }

      const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceElement)(elementOrRef);

      const info = this._monitoredElements.get(element);

      if (info) {
        return info.subject;
      }

      const result = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
      const cssClass = 'cdk-text-field-autofilled';

      const listener = event => {
        // Animation events fire on initial element render, we check for the presence of the autofill
        // CSS class to make sure this is a real change in state, not just the initial render before
        // we fire off events.
        if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
          element.classList.add(cssClass);

          this._ngZone.run(() => result.next({
            target: event.target,
            isAutofilled: true
          }));
        } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
          element.classList.remove(cssClass);

          this._ngZone.run(() => result.next({
            target: event.target,
            isAutofilled: false
          }));
        }
      };

      this._ngZone.runOutsideAngular(() => {
        element.addEventListener('animationstart', listener, listenerOptions);
        element.classList.add('cdk-text-field-autofill-monitored');
      });

      this._monitoredElements.set(element, {
        subject: result,
        unlisten: () => {
          element.removeEventListener('animationstart', listener, listenerOptions);
        }
      });

      return result;
    }

    stopMonitoring(elementOrRef) {
      const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceElement)(elementOrRef);

      const info = this._monitoredElements.get(element);

      if (info) {
        info.unlisten();
        info.subject.complete();
        element.classList.remove('cdk-text-field-autofill-monitored');
        element.classList.remove('cdk-text-field-autofilled');

        this._monitoredElements.delete(element);
      }
    }

    ngOnDestroy() {
      this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
    }

  }

  AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) {
    return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  };

  AutofillMonitor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AutofillMonitor,
    factory: AutofillMonitor.ɵfac,
    providedIn: 'root'
  });
  return AutofillMonitor;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** A directive that can be used to monitor the autofill state of an input. */


let CdkAutofill = /*#__PURE__*/(() => {
  class CdkAutofill {
    constructor(_elementRef, _autofillMonitor) {
      this._elementRef = _elementRef;
      this._autofillMonitor = _autofillMonitor;
      /** Emits when the autofill state of the element changes. */

      this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }

    ngOnInit() {
      this._autofillMonitor.monitor(this._elementRef).subscribe(event => this.cdkAutofill.emit(event));
    }

    ngOnDestroy() {
      this._autofillMonitor.stopMonitoring(this._elementRef);
    }

  }

  CdkAutofill.ɵfac = function CdkAutofill_Factory(t) {
    return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](AutofillMonitor));
  };

  CdkAutofill.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: CdkAutofill,
    selectors: [["", "cdkAutofill", ""]],
    outputs: {
      cdkAutofill: "cdkAutofill"
    }
  });
  return CdkAutofill;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Directive to automatically resize a textarea to fit its content. */


let CdkTextareaAutosize = /*#__PURE__*/(() => {
  class CdkTextareaAutosize {
    constructor(_elementRef, _platform, _ngZone,
    /** @breaking-change 11.0.0 make document required */
    document) {
      this._elementRef = _elementRef;
      this._platform = _platform;
      this._ngZone = _ngZone;
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
      this._enabled = true;
      /**
       * Value of minRows as of last resize. If the minRows has decreased, the
       * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
       * does not have the same problem because it does not affect the textarea's scrollHeight.
       */

      this._previousMinRows = -1;
      this._isViewInited = false;
      /** Handles `focus` and `blur` events. */

      this._handleFocusEvent = event => {
        this._hasFocus = event.type === 'focus';
      };

      this._document = document;
      this._textareaElement = this._elementRef.nativeElement;
    }
    /** Minimum amount of rows in the textarea. */


    get minRows() {
      return this._minRows;
    }

    set minRows(value) {
      this._minRows = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(value);

      this._setMinHeight();
    }
    /** Maximum amount of rows in the textarea. */


    get maxRows() {
      return this._maxRows;
    }

    set maxRows(value) {
      this._maxRows = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(value);

      this._setMaxHeight();
    }
    /** Whether autosizing is enabled or not */


    get enabled() {
      return this._enabled;
    }

    set enabled(value) {
      value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value); // Only act if the actual value changed. This specifically helps to not run
      // resizeToFitContent too early (i.e. before ngAfterViewInit)

      if (this._enabled !== value) {
        (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
      }
    }

    get placeholder() {
      return this._textareaElement.placeholder;
    }

    set placeholder(value) {
      this._cachedPlaceholderHeight = undefined;

      if (value) {
        this._textareaElement.setAttribute('placeholder', value);
      } else {
        this._textareaElement.removeAttribute('placeholder');
      }

      this._cacheTextareaPlaceholderHeight();
    }
    /** Sets the minimum height of the textarea as determined by minRows. */


    _setMinHeight() {
      const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;

      if (minHeight) {
        this._textareaElement.style.minHeight = minHeight;
      }
    }
    /** Sets the maximum height of the textarea as determined by maxRows. */


    _setMaxHeight() {
      const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;

      if (maxHeight) {
        this._textareaElement.style.maxHeight = maxHeight;
      }
    }

    ngAfterViewInit() {
      if (this._platform.isBrowser) {
        // Remember the height which we started with in case autosizing is disabled
        this._initialHeight = this._textareaElement.style.height;
        this.resizeToFitContent();

        this._ngZone.runOutsideAngular(() => {
          const window = this._getWindow();

          (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(window, 'resize').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(16), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => this.resizeToFitContent(true));

          this._textareaElement.addEventListener('focus', this._handleFocusEvent);

          this._textareaElement.addEventListener('blur', this._handleFocusEvent);
        });

        this._isViewInited = true;
        this.resizeToFitContent(true);
      }
    }

    ngOnDestroy() {
      this._textareaElement.removeEventListener('focus', this._handleFocusEvent);

      this._textareaElement.removeEventListener('blur', this._handleFocusEvent);

      this._destroyed.next();

      this._destroyed.complete();
    }
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */


    _cacheTextareaLineHeight() {
      if (this._cachedLineHeight) {
        return;
      } // Use a clone element because we have to override some styles.


      let textareaClone = this._textareaElement.cloneNode(false);

      textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
      // `visibility: hidden` so that nothing is rendered. Clear any other styles that
      // would affect the height.

      textareaClone.style.position = 'absolute';
      textareaClone.style.visibility = 'hidden';
      textareaClone.style.border = 'none';
      textareaClone.style.padding = '0';
      textareaClone.style.height = '';
      textareaClone.style.minHeight = '';
      textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
      // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
      // As a workaround that removes the extra space for the scrollbar, we can just set overflow
      // to hidden. This ensures that there is no invalid calculation of the line height.
      // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

      textareaClone.style.overflow = 'hidden';

      this._textareaElement.parentNode.appendChild(textareaClone);

      this._cachedLineHeight = textareaClone.clientHeight;
      textareaClone.remove(); // Min and max heights have to be re-calculated if the cached line height changes

      this._setMinHeight();

      this._setMaxHeight();
    }

    _measureScrollHeight() {
      const element = this._textareaElement;
      const previousMargin = element.style.marginBottom || '';
      const isFirefox = this._platform.FIREFOX;
      const needsMarginFiller = isFirefox && this._hasFocus;
      const measuringClass = isFirefox ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring'; // In some cases the page might move around while we're measuring the `textarea` on Firefox. We
      // work around it by assigning a temporary margin with the same height as the `textarea` so that
      // it occupies the same amount of space. See #23233.

      if (needsMarginFiller) {
        element.style.marginBottom = `${element.clientHeight}px`;
      } // Reset the textarea height to auto in order to shrink back to its default size.
      // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.


      element.classList.add(measuringClass); // The measuring class includes a 2px padding to workaround an issue with Chrome,
      // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).

      const scrollHeight = element.scrollHeight - 4;
      element.classList.remove(measuringClass);

      if (needsMarginFiller) {
        element.style.marginBottom = previousMargin;
      }

      return scrollHeight;
    }

    _cacheTextareaPlaceholderHeight() {
      if (!this._isViewInited || this._cachedPlaceholderHeight != undefined) {
        return;
      }

      if (!this.placeholder) {
        this._cachedPlaceholderHeight = 0;
        return;
      }

      const value = this._textareaElement.value;
      this._textareaElement.value = this._textareaElement.placeholder;
      this._cachedPlaceholderHeight = this._measureScrollHeight();
      this._textareaElement.value = value;
    }

    ngDoCheck() {
      if (this._platform.isBrowser) {
        this.resizeToFitContent();
      }
    }
    /**
     * Resize the textarea to fit its content.
     * @param force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     */


    resizeToFitContent(force = false) {
      // If autosizing is disabled, just skip everything else
      if (!this._enabled) {
        return;
      }

      this._cacheTextareaLineHeight();

      this._cacheTextareaPlaceholderHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
      // in checking the height of the textarea.


      if (!this._cachedLineHeight) {
        return;
      }

      const textarea = this._elementRef.nativeElement;
      const value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

      if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
        return;
      }

      const scrollHeight = this._measureScrollHeight();

      const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0); // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

      textarea.style.height = `${height}px`;

      this._ngZone.runOutsideAngular(() => {
        if (typeof requestAnimationFrame !== 'undefined') {
          requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
        } else {
          setTimeout(() => this._scrollToCaretPosition(textarea));
        }
      });

      this._previousValue = value;
      this._previousMinRows = this._minRows;
    }
    /**
     * Resets the textarea to its original size
     */


    reset() {
      // Do not try to change the textarea, if the initialHeight has not been determined yet
      // This might potentially remove styles when reset() is called before ngAfterViewInit
      if (this._initialHeight !== undefined) {
        this._textareaElement.style.height = this._initialHeight;
      }
    }

    _noopInputHandler() {// no-op handler that ensures we're running change detection on input events.
    }
    /** Access injected document if available or fallback to global document reference */


    _getDocument() {
      return this._document || document;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */


    _getWindow() {
      const doc = this._getDocument();

      return doc.defaultView || window;
    }
    /**
     * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
     * prevent it from scrolling to the caret position. We need to re-set the selection
     * in order for it to scroll to the proper position.
     */


    _scrollToCaretPosition(textarea) {
      const {
        selectionStart,
        selectionEnd
      } = textarea; // IE will throw an "Unspecified error" if we try to set the selection range after the
      // element has been removed from the DOM. Assert that the directive hasn't been destroyed
      // between the time we requested the animation frame and when it was executed.
      // Also note that we have to assert that the textarea is focused before we set the
      // selection range. Setting the selection range on a non-focused textarea will cause
      // it to receive focus on IE and Edge.

      if (!this._destroyed.isStopped && this._hasFocus) {
        textarea.setSelectionRange(selectionStart, selectionEnd);
      }
    }

  }

  CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) {
    return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT, 8));
  };

  CdkTextareaAutosize.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: CdkTextareaAutosize,
    selectors: [["textarea", "cdkTextareaAutosize", ""]],
    hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
    hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
          return ctx._noopInputHandler();
        });
      }
    },
    inputs: {
      minRows: ["cdkAutosizeMinRows", "minRows"],
      maxRows: ["cdkAutosizeMaxRows", "maxRows"],
      enabled: ["cdkTextareaAutosize", "enabled"],
      placeholder: "placeholder"
    },
    exportAs: ["cdkTextareaAutosize"]
  });
  return CdkTextareaAutosize;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let TextFieldModule = /*#__PURE__*/(() => {
  class TextFieldModule {}

  TextFieldModule.ɵfac = function TextFieldModule_Factory(t) {
    return new (t || TextFieldModule)();
  };

  TextFieldModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: TextFieldModule
  });
  TextFieldModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});
  return TextFieldModule;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=text-field.mjs.map

/***/ }),

/***/ 284:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/input.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_INPUT_VALUE_ACCESSOR": () => (/* binding */ MAT_INPUT_VALUE_ACCESSOR),
/* harmony export */   "MatInput": () => (/* binding */ MatInput),
/* harmony export */   "MatInputModule": () => (/* binding */ MatInputModule),
/* harmony export */   "getMatInputUnsupportedTypeError": () => (/* binding */ getMatInputUnsupportedTypeError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 1281);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 3353);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/text-field */ 9349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 7873);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 9549);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6758);














/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */

function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * This token is used to inject the object whose value should be set into `MatInput`. If none is
 * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
 * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
 * value to them.
 */


const MAT_INPUT_VALUE_ACCESSOR = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_INPUT_VALUE_ACCESSOR');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

const MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
let nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

/** @docs-private */

const _MatInputBase = /*#__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinErrorState)(class {
  constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
  /**
   * Form control bound to the component.
   * Implemented as part of `MatFormFieldControl`.
   * @docs-private
   */
  ngControl) {
    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this.ngControl = ngControl;
    /**
     * Emits whenever the component state changes and should cause the parent
     * form field to update. Implemented as part of `MatFormFieldControl`.
     * @docs-private
     */

    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }

});
/** Directive that allows a native input to work inside a `MatFormField`. */


let MatInput = /*#__PURE__*/(() => {
  class MatInput extends _MatInputBase {
    constructor(_elementRef, _platform, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone, // TODO: Remove this once the legacy appearance has been removed. We only need
    // to inject the form field for determining whether the placeholder has been promoted.
    _formField) {
      super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
      this._elementRef = _elementRef;
      this._platform = _platform;
      this._autofillMonitor = _autofillMonitor;
      this._formField = _formField;
      this._uid = `mat-input-${nextUniqueId++}`;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

      this.focused = false;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

      this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

      this.controlType = 'mat-input';
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */

      this.autofilled = false;
      this._disabled = false;
      this._type = 'text';
      this._readonly = false;
      this._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(t => (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.getSupportedInputTypes)().has(t));

      this._iOSKeyupListener = event => {
        const el = event.target; // Note: We specifically check for 0, rather than `!el.selectionStart`, because the two
        // indicate different things. If the value is 0, it means that the caret is at the start
        // of the input, whereas a value of `null` means that the input doesn't support
        // manipulating the selection range. Inputs that don't support setting the selection range
        // will throw an error so we want to avoid calling `setSelectionRange` on them. See:
        // https://html.spec.whatwg.org/multipage/input.html#do-not-apply

        if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
          // Note: Just setting `0, 0` doesn't fix the issue. Setting
          // `1, 1` fixes it for the first time that you type text and
          // then hold delete. Toggling to `1, 1` and then back to
          // `0, 0` seems to completely fix it.
          el.setSelectionRange(1, 1);
          el.setSelectionRange(0, 0);
        }
      };

      const element = this._elementRef.nativeElement;
      const nodeName = element.nodeName.toLowerCase(); // If no input value accessor was explicitly specified, use the element as the input value
      // accessor.

      this._inputValueAccessor = inputValueAccessor || element;
      this._previousNativeValue = this.value; // Force setter to be called in case id was not specified.

      this.id = this.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
      // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
      // exists on iOS, we only bother to install the listener on iOS.

      if (_platform.IOS) {
        ngZone.runOutsideAngular(() => {
          _elementRef.nativeElement.addEventListener('keyup', this._iOSKeyupListener);
        });
      }

      this._isServer = !this._platform.isBrowser;
      this._isNativeSelect = nodeName === 'select';
      this._isTextarea = nodeName === 'textarea';
      this._isInFormField = !!_formField;

      if (this._isNativeSelect) {
        this.controlType = element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */


    get disabled() {
      if (this.ngControl && this.ngControl.disabled !== null) {
        return this.ngControl.disabled;
      }

      return this._disabled;
    }

    set disabled(value) {
      this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value); // Browsers may not fire the blur event if the input is disabled too quickly.
      // Reset from here to ensure that the element doesn't become stuck.

      if (this.focused) {
        this.focused = false;
        this.stateChanges.next();
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */


    get id() {
      return this._id;
    }

    set id(value) {
      this._id = value || this._uid;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */


    get required() {
      return this._required ?? this.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required) ?? false;
    }

    set required(value) {
      this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);
    }
    /** Input type of the element. */


    get type() {
      return this._type;
    }

    set type(value) {
      this._type = value || 'text';

      this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
      // input element. To ensure that bindings for `type` work, we need to sync the setter
      // with the native property. Textarea elements don't support the type property or attribute.


      if (!this._isTextarea && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.getSupportedInputTypes)().has(this._type)) {
        this._elementRef.nativeElement.type = this._type;
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */


    get value() {
      return this._inputValueAccessor.value;
    }

    set value(value) {
      if (value !== this.value) {
        this._inputValueAccessor.value = value;
        this.stateChanges.next();
      }
    }
    /** Whether the element is readonly. */


    get readonly() {
      return this._readonly;
    }

    set readonly(value) {
      this._readonly = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);
    }

    ngAfterViewInit() {
      if (this._platform.isBrowser) {
        this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(event => {
          this.autofilled = event.isAutofilled;
          this.stateChanges.next();
        });
      }
    }

    ngOnChanges() {
      this.stateChanges.next();
    }

    ngOnDestroy() {
      this.stateChanges.complete();

      if (this._platform.isBrowser) {
        this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
      }

      if (this._platform.IOS) {
        this._elementRef.nativeElement.removeEventListener('keyup', this._iOSKeyupListener);
      }
    }

    ngDoCheck() {
      if (this.ngControl) {
        // We need to re-evaluate this on every change detection cycle, because there are some
        // error triggers that we can't subscribe to (e.g. parent form submissions). This means
        // that whatever logic is in here has to be super lean or we risk destroying the performance.
        this.updateErrorState();
      } // We need to dirty-check the native element's value, because there are some cases where
      // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
      // updating the value using `emitEvent: false`).


      this._dirtyCheckNativeValue(); // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
      // present or not depends on a query which is prone to "changed after checked" errors.


      this._dirtyCheckPlaceholder();
    }
    /** Focuses the input. */


    focus(options) {
      this._elementRef.nativeElement.focus(options);
    }
    /** Callback for the cases where the focused state of the input changes. */


    _focusChanged(isFocused) {
      if (isFocused !== this.focused) {
        this.focused = isFocused;
        this.stateChanges.next();
      }
    }

    _onInput() {// This is a noop function and is used to let Angular know whenever the value changes.
      // Angular will run a new change detection each time the `input` event has been dispatched.
      // It's necessary that Angular recognizes the value change, because when floatingLabel
      // is set to false and Angular forms aren't used, the placeholder won't recognize the
      // value changes and will not disappear.
      // Listening to the input event wouldn't be necessary when the input is using the
      // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
    }
    /** Does some manual dirty checking on the native input `placeholder` attribute. */


    _dirtyCheckPlaceholder() {
      // If we're hiding the native placeholder, it should also be cleared from the DOM, otherwise
      // screen readers will read it out twice: once from the label and once from the attribute.
      // TODO: can be removed once we get rid of the `legacy` style for the form field, because it's
      // the only one that supports promoting the placeholder to a label.
      const formField = this._formField;
      const placeholder = formField && formField.appearance === 'legacy' && !formField._hasLabel?.() ? null : this.placeholder;

      if (placeholder !== this._previousPlaceholder) {
        const element = this._elementRef.nativeElement;
        this._previousPlaceholder = placeholder;
        placeholder ? element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
      }
    }
    /** Does some manual dirty checking on the native input `value` property. */


    _dirtyCheckNativeValue() {
      const newValue = this._elementRef.nativeElement.value;

      if (this._previousNativeValue !== newValue) {
        this._previousNativeValue = newValue;
        this.stateChanges.next();
      }
    }
    /** Make sure the input is a supported type. */


    _validateType() {
      if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatInputUnsupportedTypeError(this._type);
      }
    }
    /** Checks whether the input type is one of the types that are never empty. */


    _isNeverEmpty() {
      return this._neverEmptyInputTypes.indexOf(this._type) > -1;
    }
    /** Checks whether the input is invalid based on the native validation. */


    _isBadInput() {
      // The `validity` property won't be present on platform-server.
      let validity = this._elementRef.nativeElement.validity;
      return validity && validity.badInput;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */


    get empty() {
      return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */


    get shouldLabelFloat() {
      if (this._isNativeSelect) {
        // For a single-selection `<select>`, the label should float when the selected option has
        // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
        // overlapping the label with the options.
        const selectElement = this._elementRef.nativeElement;
        const firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
        // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

        return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
      } else {
        return this.focused || !this.empty;
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */


    setDescribedByIds(ids) {
      if (ids.length) {
        this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
      } else {
        this._elementRef.nativeElement.removeAttribute('aria-describedby');
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */


    onContainerClick() {
      // Do not re-focus the input element if the element is already focused. Otherwise it can happen
      // that someone clicks on a time input and the cursor resets to the "hours" field while the
      // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
      if (!this.focused) {
        this.focus();
      }
    }
    /** Whether the form control is a native select that is displayed inline. */


    _isInlineSelect() {
      const element = this._elementRef.nativeElement;
      return this._isNativeSelect && (element.multiple || element.size > 1);
    }

  }

  MatInput.ɵfac = function MatInput_Factory(t) {
    return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_6__.AutofillMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MAT_FORM_FIELD, 8));
  };

  MatInput.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatInput,
    selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
    hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
    hostVars: 12,
    hostBindings: function MatInput_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() {
          return ctx._focusChanged(true);
        })("blur", function MatInput_blur_HostBindingHandler() {
          return ctx._focusChanged(false);
        })("input", function MatInput_input_HostBindingHandler() {
          return ctx._onInput();
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("data-placeholder", ctx.placeholder)("name", ctx.name || null)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-input-server", ctx._isServer)("mat-native-select-inline", ctx._isInlineSelect());
      }
    },
    inputs: {
      disabled: "disabled",
      id: "id",
      placeholder: "placeholder",
      name: "name",
      required: "required",
      type: "type",
      errorStateMatcher: "errorStateMatcher",
      userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"],
      value: "value",
      readonly: "readonly"
    },
    exportAs: ["matInput"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldControl,
      useExisting: MatInput
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  return MatInput;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let MatInputModule = /*#__PURE__*/(() => {
  class MatInputModule {}

  MatInputModule.ɵfac = function MatInputModule_Factory(t) {
    return new (t || MatInputModule)();
  };

  MatInputModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatInputModule
  });
  MatInputModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher],
    imports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_6__.TextFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_6__.TextFieldModule, // We re-export the `MatFormFieldModule` since `MatInput` will almost always
    // be used together with `MatFormField`.
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule]
  });
  return MatInputModule;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=input.mjs.map

/***/ })

}]);