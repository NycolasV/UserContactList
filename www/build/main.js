webpackJsonp([0],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-user/add-user.module": [
		157
	],
	"../pages/login/login.module": [
		159
	],
	"../pages/register-user/register-user.module": [
		166
	],
	"../pages/see-user/see-user.module": [
		167
	],
	"../pages/user-list/user-list.module": [
		168
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserPageModule", function() { return AddUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_user__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddUserPageModule = /** @class */ (function () {
    function AddUserPageModule() {
    }
    AddUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_user__["a" /* AddUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_user__["a" /* AddUserPage */]),
            ],
        })
    ], AddUserPageModule);
    return AddUserPageModule;
}());

//# sourceMappingURL=add-user.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_list_user_list__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_user_register_user__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.goToLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_list_user_list__["a" /* UserListPage */]);
    };
    LoginPage.prototype.goToRegisterPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_user_register_user__["a" /* RegisterUserPage */]);
                return [2 /*return*/];
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/nycolas/source/repos/UserContactList/src/pages/login/login.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Login</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: white;" padding>\n	<ion-item>\n		<ion-input placeholder="E-mail"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-input placeholder="Senha" type="password"></ion-input>\n	</ion-item>\n\n	<div class="buttons">\n		<button (click)="goToLoginPage()" class="homeButton" ion-button full>\n			Entrar\n		</button>\n\n		<button (click)="goToRegisterPage()" class="homeButton" ion-button full>\n			Registrar\n		</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/nycolas/source/repos/UserContactList/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cep_model__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserModel = /** @class */ (function () {
    function UserModel(name, email, phone, cep) {
        var lastId = 0;
        var idStr = localStorage.getItem("lastId");
        if (idStr) {
            lastId = +idStr;
        }
        this.id = lastId++;
        localStorage.setItem("lastId", this.id.toString());
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.cep = cep;
    }
    UserModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [String, String, String, __WEBPACK_IMPORTED_MODULE_1__cep_model__["a" /* CepModel */]])
    ], UserModel);
    return UserModel;
}());

//# sourceMappingURL=user-model.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CepModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CepModel = /** @class */ (function () {
    function CepModel() {
    }
    CepModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CepModel);
    return CepModel;
}());

//# sourceMappingURL=cep-model.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeeUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_provider__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_toasts__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_user_add_user__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SeeUserPage = /** @class */ (function () {
    function SeeUserPage(navCtrl, navParams, loadingController, provider, toastCtrl, toasts) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.provider = provider;
        this.toastCtrl = toastCtrl;
        this.toasts = toasts;
        this.toasts = new __WEBPACK_IMPORTED_MODULE_3__utils_toasts__["a" /* Toasts */](this.toastCtrl);
        this.instanceScreen();
    }
    SeeUserPage.prototype.instanceScreen = function () {
        this.loading = this.loadingController.create({
            content: 'Carregando...'
        });
        this.loading.dismiss();
    };
    SeeUserPage.prototype.editUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_user_add_user__["a" /* AddUserPage */]);
    };
    SeeUserPage.prototype.deleteUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toasts.presentToast('In Development')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SeeUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-see-user',template:/*ion-inline-start:"/home/nycolas/source/repos/UserContactList/src/pages/see-user/see-user.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Nome do Contato</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: white;" padding>\n	<div style="margin: 5px 15px; font-size: 18px;">\n		<ion-label text-wrap>Nome do contato</ion-label>\n\n		<ion-label text-wrap>E-mail</ion-label>\n\n		<ion-label text-wrap>Telefone</ion-label>\n\n		<ion-label text-wrap>CEP</ion-label>\n\n		<div style="display: flex; justify-content: space-between;">\n			<ion-label text-wrap>Número</ion-label>\n\n			<ion-label text-wrap>Complemento</ion-label>\n		</div>\n\n		<ion-label text-wrap>Rua</ion-label>\n\n		<ion-label text-wrap>Bairro</ion-label>\n\n		<ion-label text-wrap>Cidade - UF</ion-label>\n	</div>\n\n	<!-- <ion-fab right bottom>\n		<button ion-fab style="font-size: 30px;" (click)="editUser()">\n			<ion-icon name="open"></ion-icon>\n		</button>\n	</ion-fab> -->\n\n	<ion-fab right bottom>\n		<button ion-fab>\n			<ion-icon name="arrow-dropleft"></ion-icon>\n		</button>\n\n		<ion-fab-list side="left">\n			<button ion-fab color="danger" (click)="deleteUser()">\n			  <ion-icon name="trash"></ion-icon>\n			</button>\n\n		  	<button ion-fab color="secondary" (click)="editUser()">\n			  <ion-icon name="open"></ion-icon>\n			</button>\n		</ion-fab-list>\n	</ion-fab>	\n</ion-content>\n'/*ion-inline-end:"/home/nycolas/source/repos/UserContactList/src/pages/see-user/see-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_provider__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__utils_toasts__["a" /* Toasts */]])
    ], SeeUserPage);
    return SeeUserPage;
}());

//# sourceMappingURL=see-user.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toasts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Toasts = /** @class */ (function () {
    function Toasts(toastController) {
        this.toastController = toastController;
    }
    Toasts.prototype.presentToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toast = this.toastController.create({
                            message: message,
                            duration: 2000
                        });
                        return [4 /*yield*/, toast.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Toasts = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], Toasts);
    return Toasts;
}());

//# sourceMappingURL=toasts.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_list_user_list__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterUserPage = /** @class */ (function () {
    function RegisterUserPage(navCtrl, navParams, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.instanceScreen();
    }
    RegisterUserPage.prototype.instanceScreen = function () {
        this.loading = this.loadingController.create({
            content: 'Carregando...'
        });
        this.loading.dismiss();
    };
    RegisterUserPage.prototype.createUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_list_user_list__["a" /* UserListPage */]);
    };
    RegisterUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-user',template:/*ion-inline-start:"/home/nycolas/source/repos/UserContactList/src/pages/register-user/register-user.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Criar Usuário</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: white;" padding>\n	<ion-item>\n		<ion-input placeholder="Seu nome"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-input placeholder="E-mail"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-input placeholder="Telefone"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-input placeholder="Senha" type="password"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-input placeholder="Confirmar senha" type="password"></ion-input>\n	</ion-item>\n\n	<button (click)="createUser()" class="createUserButton" ion-button full>\n		Criar conta\n	</button>\n</ion-content>\n'/*ion-inline-end:"/home/nycolas/source/repos/UserContactList/src/pages/register-user/register-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], RegisterUserPage);
    return RegisterUserPage;
}());

//# sourceMappingURL=register-user.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserPageModule", function() { return RegisterUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_user__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterUserPageModule = /** @class */ (function () {
    function RegisterUserPageModule() {
    }
    RegisterUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_user__["a" /* RegisterUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_user__["a" /* RegisterUserPage */]),
            ],
        })
    ], RegisterUserPageModule);
    return RegisterUserPageModule;
}());

//# sourceMappingURL=register-user.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeUserPageModule", function() { return SeeUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__see_user__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SeeUserPageModule = /** @class */ (function () {
    function SeeUserPageModule() {
    }
    SeeUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__see_user__["a" /* SeeUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__see_user__["a" /* SeeUserPage */]),
            ],
        })
    ], SeeUserPageModule);
    return SeeUserPageModule;
}());

//# sourceMappingURL=see-user.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListPageModule", function() { return UserListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_list__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserListPageModule = /** @class */ (function () {
    function UserListPageModule() {
    }
    UserListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_list__["a" /* UserListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_list__["a" /* UserListPage */]),
            ],
        })
    ], UserListPageModule);
    return UserListPageModule;
}());

//# sourceMappingURL=user-list.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/nycolas/source/repos/UserContactList/src/pages/home/home.html"*/'<ion-content class="homeContent" padding padding-left>\n    <section>\n        <img src="../../assets/icon/ic-home-logo.png" />\n\n        <h1 class="homeTitle">Lista de Contatos</h1>\n\n        <div class="buttons">\n            <button (click)="goToLoginPage()" class="homeButton" ion-button full>\n                Entrar\n            </button>\n\n            <button (click)="goToRegisterPage()" class="homeButton" ion-button full>\n                Registrar\n            </button>\n        </div>\n    </section>\n</ion-content>'/*ion-inline-end:"/home/nycolas/source/repos/UserContactList/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_crop_ngx__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_provider__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_user_list_user_list_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_user_model__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_cep_model__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_toasts__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_dictionary__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_add_user_add_user_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_see_user_see_user_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_user_register_user_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login_module__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-user/add-user.module#AddUserPageModule', name: 'AddUserPage', segment: 'add-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-user/register-user.module#RegisterUserPageModule', name: 'RegisterUserPage', segment: 'register-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/see-user/see-user.module#SeeUserPageModule', name: 'SeeUserPage', segment: 'see-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-list/user-list.module#UserListPageModule', name: 'UserListPage', segment: 'user-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__pages_user_list_user_list_module__["UserListPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_add_user_add_user_module__["AddUserPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_see_user_see_user_module__["SeeUserPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_user_register_user_module__["RegisterUserPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login_module__["LoginPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_crop_ngx__["a" /* Crop */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_user_provider__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_11__models_user_model__["a" /* UserModel */],
                __WEBPACK_IMPORTED_MODULE_12__models_cep_model__["a" /* CepModel */],
                __WEBPACK_IMPORTED_MODULE_13__utils_toasts__["a" /* Toasts */],
                __WEBPACK_IMPORTED_MODULE_14__utils_dictionary__["a" /* Dictionary */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Urls; });
var Urls = {
    cep: "https://viacep.com.br/ws/",
};
//# sourceMappingURL=urls.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nycolas/source/repos/UserContactList/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/nycolas/source/repos/UserContactList/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dictionary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this._keys = new Array();
        this._values = new Array();
    }
    Dictionary.prototype.add = function (key, value) {
        this[key] = value;
        this._keys.push(key);
        this._values.push(value);
    };
    Dictionary.prototype.get = function (key) {
        return this[key];
    };
    Dictionary.prototype.remove = function (key) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
        delete this[key];
    };
    Dictionary.prototype.keys = function () {
        return this._keys;
    };
    Dictionary.prototype.values = function () {
        return this._values;
    };
    Dictionary.prototype.containsKey = function (key) {
        if (typeof this[key] === "undefined") {
            return false;
        }
        return true;
    };
    Dictionary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Dictionary);
    return Dictionary;
}());

//# sourceMappingURL=dictionary.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_urls__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = /** @class */ (function () {
    function UserProvider(http) {
        this.http = http;
    }
    UserProvider.prototype.getCep = function (cep) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].cep + cep + "/json/");
    };
    UserProvider.prototype.saveUser = function (user) {
        localStorage.setItem(user.id.toString(), JSON.stringify(user));
    };
    UserProvider.prototype.getUsers = function () {
        var lastId = 0;
        var lastIdStr = localStorage.getItem("lastId");
        if (lastIdStr) {
            lastId = +lastIdStr;
        }
        var users = new Array();
        for (var i = 1; i <= lastId; i++) {
            users.push(JSON.parse(localStorage.getItem(i.toString())));
        }
        return users;
    };
    UserProvider.prototype.getUser = function (id) {
        return JSON.parse(localStorage.getItem(id.toString()));
    };
    UserProvider.prototype.deleteUser = function (id) {
        localStorage.removeItem(id.toString());
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.provider.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_provider__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUserPage = /** @class */ (function () {
    function AddUserPage(navCtrl, navParams, loadingController, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.provider = provider;
        this.instanceScreen();
    }
    AddUserPage.prototype.instanceScreen = function () {
        this.loading = this.loadingController.create({
            content: 'Carregando...'
        });
        this.loading.dismiss();
    };
    AddUserPage.prototype.createUser = function () {
        this.navCtrl.pop();
    };
    AddUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-user',template:/*ion-inline-start:"/home/nycolas/source/repos/UserContactList/src/pages/add-user/add-user.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Novo Contato</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: white;" padding>\n	<ion-item>\n		<ion-input placeholder="Nome do contato"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-input placeholder="E-mail"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-input placeholder="Telefone"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-input placeholder="CEP"></ion-input>\n	</ion-item>\n\n	<div style="display: flex; justify-content: space-between;">\n		<ion-item>\n			<ion-input placeholder="Número"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-input placeholder="Complemento"></ion-input>\n		</ion-item>\n	</div>\n\n	<div style="margin: 5px 15px; font-size: 18px;">\n		<ion-label text-wrap>Rua</ion-label>\n\n		<ion-label text-wrap>Bairro</ion-label>\n\n		<ion-label text-wrap>Cidade - UF</ion-label>\n	</div>\n\n	<button (click)="createUser()" class="createUserButton" ion-button full>\n		Criar contato\n	</button>\n</ion-content>\n'/*ion-inline-end:"/home/nycolas/source/repos/UserContactList/src/pages/add-user/add-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_provider__["a" /* UserProvider */]])
    ], AddUserPage);
    return AddUserPage;
}());

//# sourceMappingURL=add-user.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_provider__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_user_add_user__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__see_user_see_user__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var UserListPage = /** @class */ (function () {
    function UserListPage(navCtrl, navParams, loadingController, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.provider = provider;
        this.instanceScreen();
    }
    UserListPage.prototype.instanceScreen = function () {
        this.loading = this.loadingController.create({
            content: 'Carregando...'
        });
        // this.users = this.provider.getUsers();
        var user = new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* UserModel */]("Nycolas Vieira", "teste@teste.com", "(11) 989371260", null);
        this.users = [user, user, user, user, user, user, user, user, user, user];
        this.loading.dismiss();
    };
    UserListPage.prototype.openDetails = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__see_user_see_user__["a" /* SeeUserPage */], { user: user });
                return [2 /*return*/];
            });
        });
    };
    UserListPage.prototype.addUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_user_add_user__["a" /* AddUserPage */]);
    };
    UserListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lists',template:/*ion-inline-start:"/home/nycolas/source/repos/UserContactList/src/pages/user-list/user-list.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Lista de contatos</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: white;" padding>\n	<ion-list>\n		<div *ngFor="let user of users">\n			<ion-card class="routing-card" (click)="openDetails(user)">				\n				<ion-item class="routing-item">\n					<ion-label class="wrap-text routing-label">\n						Nome: {{user.name}}\n						<br/>\n						<ion-label class="wrap-text routing-label">\n							Telefone: {{user.phone}}\n						</ion-label>\n					</ion-label> \n				</ion-item>\n			</ion-card>\n		</div>\n	</ion-list>\n\n	<ion-fab right bottom>\n		<button ion-fab style="font-size: 30px;" (click)="addUser()">\n			+\n		</button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/nycolas/source/repos/UserContactList/src/pages/user-list/user-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_provider__["a" /* UserProvider */]])
    ], UserListPage);
    return UserListPage;
}());

//# sourceMappingURL=user-list.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map