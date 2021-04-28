webpackJsonp([0],{

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chats/chat-list/chat-list.module": [
		162
	],
	"../pages/chats/chat/chat.module": [
		166
	],
	"../pages/login/login.module": [
		169
	],
	"../pages/notifications/notification-details/notification-details.module": [
		167
	],
	"../pages/notifications/notifications-list/notifications-list.module": [
		178
	],
	"../pages/profile/profile.module": [
		184
	],
	"../pages/register-profile/confirm-register/confirm-register.module": [
		179
	],
	"../pages/register-profile/register-1/register-1.module": [
		180
	],
	"../pages/register-profile/register-2/register-2.module": [
		181
	],
	"../pages/register-profile/review-register/review-register.module": [
		182
	],
	"../pages/routing/routing.module": [
		183
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListPageModule", function() { return ChatListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_list__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatListPageModule = /** @class */ (function () {
    function ChatListPageModule() {
    }
    ChatListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_list__["a" /* ChatListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_list__["a" /* ChatListPage */]),
            ],
        })
    ], ChatListPageModule);
    return ChatListPageModule;
}());

//# sourceMappingURL=chat-list.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(164);
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



var ChatListPage = /** @class */ (function () {
    function ChatListPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.hasLoaded = false;
        this.instancePage();
    }
    ChatListPage.prototype.instancePage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = this.loadingCtrl.create({
                            content: 'Carregando chats...'
                        });
                        this.loading.present();
                        this.threads = this.navParams.get('threads');
                        if (!(!this.threads || this.threads.length == 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loading.dismiss()];
                    case 1:
                        _a.sent();
                        this.hasLoaded = true;
                        return [2 /*return*/];
                    case 2:
                        this.threads.forEach(function (t) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                t.providerName = t.providerName.toUpperCase();
                                t.providerPhoto = (!t.providerPhoto || t.providerPhoto.trim() == '') ? '../../assets/imgs/default-profile-img.jpg' : t.providerPhoto;
                                this.hasLoaded = true;
                                return [2 /*return*/];
                            });
                        }); });
                        return [4 /*yield*/, this.loading.dismiss()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatListPage.prototype.openDetails = function (thread) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */], { thread: thread });
                return [2 /*return*/];
            });
        });
    };
    ChatListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-list',template:/*ion-inline-start:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/chats/chat-list/chat-list.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Chats</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #172035;">\n	<div *ngIf="hasLoaded && threads != null && threads.length > 0">\n		<ion-list>\n			<div *ngFor="let thread of threads">\n				<ion-card style="display: flex" (click)="openDetails(thread)">\n					<img slot="start" src="{{thread.providerPhoto}}"\n						style="height: 50px; width: 50px; margin: 5px 10px; border-radius: 50%;" />\n\n					<ion-item>\n						<ion-label style="font-size:15px; font-weight:bold;" class="wrap-text">\n							{{thread.providerName}}\n							<br />\n							<!-- <span style="font-size: 12px;font-weight:normal;" *ngIf="thread.lastMessage != null">{{thread.lastMessage.body}}</span> -->\n						</ion-label>\n					</ion-item>\n				</ion-card>\n			</div>\n		</ion-list>\n	</div>\n\n	<div *ngIf="hasLoaded && (threads == null || threads.length == 0)" style="background-color:white; height:100%;">\n		<ion-item>\n			<ion-label class="wrap-text" style="padding: 5px;">\n				Não há chats iniciados, vá nos detalhes de um fornecedor para iniciar uma conversa\n			</ion-label>\n		</ion-item>\n	</div>\n</ion-content>'/*ion-inline-end:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/chats/chat-list/chat-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ChatListPage);
    return ChatListPage;
}());

//# sourceMappingURL=chat-list.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_thread_thread__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_popover_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_dictionary__ = __webpack_require__(286);
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






var ChatPage = /** @class */ (function () {
    function ChatPage(popoverCtrl, alertCtrl, loading, navParams, provider) {
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.navParams = navParams;
        this.provider = provider;
        this.userId = localStorage.getItem('userId');
        this.thread = navParams.get('thread');
        this.userMessage = "";
        this.instanceScreen();
    }
    ChatPage.prototype.ngOnInit = function () {
        localStorage.setItem('isModal', 'true');
        this.messages = new __WEBPACK_IMPORTED_MODULE_5__utils_dictionary__["a" /* Dictionary */]();
    };
    ChatPage.prototype.instanceScreen = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.create({
                            content: "Carregando conversa...",
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__["interval"])(3000).subscribe(function () {
                            _this.provider.getMessages(_this.thread.id, "").subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    console.log(data);
                                    this.normalMessages = data.data.reverse();
                                    this.currentToken = data.token;
                                    this.messages = new __WEBPACK_IMPORTED_MODULE_5__utils_dictionary__["a" /* Dictionary */]();
                                    this.normalMessages.forEach(function (m) {
                                        var dt = new Date(m.createdAt);
                                        var day = dt.getDate(), month = dt.getMonth(), year = dt.getFullYear(), hours = dt.getHours(), minutes = dt.getMinutes();
                                        m.convertDate = day + '/' + (month + 1) + '/' + year;
                                        m.convertTime = hours + ':' + minutes;
                                        if (_this.messages.containsKey(m.convertDate)) {
                                            var list = _this.messages.get(m.convertDate);
                                            list.push(m);
                                            _this.messages[m.convertDate] = list;
                                        }
                                        else {
                                            _this.messages.add(m.convertDate, [m]);
                                        }
                                    });
                                    return [2 /*return*/];
                                });
                            }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log(error);
                                            return [4 /*yield*/, loading.dismiss()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        this.provider.getMessages(this.thread.id, "").subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                console.log(data);
                                this.normalMessages = data.data.reverse();
                                this.currentToken = data.token;
                                this.normalMessages.forEach(function (m) {
                                    var dt = new Date(m.createdAt);
                                    var day = dt.getDate(), month = dt.getMonth(), year = dt.getFullYear(), hours = dt.getHours(), minutes = dt.getMinutes();
                                    m.convertDate = day + '/' + (month + 1) + '/' + year;
                                    m.convertTime = hours + ':' + minutes;
                                    if (_this.messages.containsKey(m.convertDate)) {
                                        var list = _this.messages.get(m.convertDate);
                                        list.push(m);
                                        _this.messages[m.convertDate] = list;
                                    }
                                    else {
                                        _this.messages.add(m.convertDate, [m]);
                                    }
                                });
                                setTimeout(function () { return _this.content.scrollToBottom(0); }, 500);
                                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, loading.dismiss()];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                }); }); }, 500);
                                console.log(this.messages);
                                return [2 /*return*/];
                            });
                        }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(error);
                                        return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatPage.prototype.sendMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.userMessage = this.userMessage.trim();
                if (!this.userMessage || this.userMessage == "") {
                    return [2 /*return*/];
                }
                this.provider.createMessage(this.thread.userId1, this.thread.userId2, this.userMessage).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var dt, day, month, year, hours, minutes, list;
                    return __generator(this, function (_a) {
                        console.log(data);
                        this.normalMessages.push(data);
                        dt = new Date(data.createdAt);
                        day = dt.getDate(), month = dt.getMonth(), year = dt.getFullYear(), hours = dt.getHours(), minutes = dt.getMinutes();
                        data.convertDate = day + '/' + (month + 1) + '/' + year;
                        data.convertTime = hours + ':' + minutes;
                        if (this.messages.containsKey(data.convertDate)) {
                            list = this.messages.get(data.convertDate);
                            list.push(data);
                            this.messages[data.convertDate] = list;
                        }
                        else {
                            this.messages.add(data.convertDate, [data]);
                        }
                        this.userMessage = "";
                        return [2 /*return*/];
                    });
                }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                    var alert;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(error);
                                return [4 /*yield*/, this.alertCtrl.create({ message: 'Ocorreu um erro ao enviar a mensagem', buttons: [] })];
                            case 1:
                                alert = _a.sent();
                                return [4 /*yield*/, alert.present()];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ChatPage.prototype.settingsPopover = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var siteInfo, popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siteInfo = { id: 1, name: 'edupala' };
                        return [4 /*yield*/, this.popoverCtrl.create({
                                component: __WEBPACK_IMPORTED_MODULE_3__chat_popover_component__["a" /* ChatPopoverComponent */],
                                event: ev,
                                cssClass: 'popover_setting',
                                componentProps: {
                                    site: siteInfo
                                },
                                translucent: true
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChatPage.prototype.loadData = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.currentToken) {
                    return [2 /*return*/];
                }
                this.messages = null;
                this.provider.getMessages(this.thread.id, this.currentToken).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        console.log(data);
                        this.normalMessages = this.normalMessages.reverse();
                        this.normalMessages = this.normalMessages.concat(data.data);
                        this.currentToken = data.token;
                        this.normalMessages = this.normalMessages.reverse();
                        this.normalMessages.forEach(function (m) {
                            var dt = new Date(m.createdAt);
                            var day = dt.getDate(), month = dt.getMonth(), year = dt.getFullYear(), hours = dt.getHours(), minutes = dt.getMinutes();
                            m.convertDate = day + '/' + (month + 1) + '/' + year;
                            m.convertTime = hours + ':' + minutes;
                            if (_this.messages.containsKey(m.convertDate)) {
                                var list = _this.messages.get(m.convertDate);
                                list.push(m);
                                _this.messages[m.convertDate] = list;
                            }
                            else {
                                _this.messages.add(m.convertDate, [m]);
                            }
                        });
                        return [2 /*return*/];
                    });
                }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log(error);
                        event.target.complete();
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('infiniteScroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* InfiniteScroll */])
    ], ChatPage.prototype, "infiniteScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", Object)
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/chats/chat/chat.html"*/'<ion-header class="chat-header">\n	<ion-navbar>\n		<div class="container-title">\n			<h2 class="notification-title">{{thread.providerName}}</h2>\n		</div>\n	</ion-navbar>\n\n	<button class="moremenu-icon" (click)="settingsPopover()">\n		<img src="../../../assets/imgs/moremenu-icon.svg">\n	</button>\n</ion-header>\n\n<ion-content #content class="main" overflow-scroll="false" style="background-color: #172035;">\n	<ion-infinite-scroll #infiniteScroll style="background-color: #172035; margin-bottom: 20%;"\n		(ionInfinite)="loadData($event)" [position]="top">\n		<ion-grid style="margin: 0px; padding: 0px;" *ngFor="let dates of messages._keys">\n			<div style="text-align: center; background-color: white; border-radius: 20px; margin: 20px 30% 5px;">\n				<ion-label class="wrap-text" style="text-align: center !important;">\n					<span style="font-size: 16px;font-weight:normal; color: black; font-weight: bold;">{{dates}}</span>\n				</ion-label>\n			</div>\n\n			<ion-row style="margin: 0px; padding: 5px 0px;" *ngFor="let message of messages[dates]">\n				<ion-col style="margin: 0px; padding: 0px 10% 0px 0px;">\n\n					<div style="background-color: transparent; border-style: solid; border-width: 1px; border-color: white; \n						padding: 10px 8px 1px 10px; border-radius: 25px; margin-left: 10px; text-align: center"\n						*ngIf="message.to == userId" class="wrap-text">\n\n						<ion-label class="wrap-text" style="margin: 0px; text-align: center !important;">\n							<span style="font-size: 14px;font-weight:normal; color: white;">{{message.body}}</span>\n						</ion-label>\n\n\n						<div style="text-align: end; margin-right: 10px;">\n							<ion-label class="wrap-text" style="margin: 0px; text-align: end !important;">\n								<span style="font-size: 9px;font-weight:normal; color: white;">{{message.convertTime}}</span>\n							</ion-label>\n						</div>\n					</div>\n\n				</ion-col>\n\n				<ion-col style="margin: 0px; padding: 0px 0px 0px 10%;">\n\n					<div style="background-color: white; padding: 10px 8px 0px 10px; border-radius: 25px; margin-right: 10px; text-align: center"\n						*ngIf="message.from == userId" class="wrap-text">\n\n						<ion-label class="wrap-text" style="margin: 0px; text-align: center !important">\n							<span style="font-size: 14px;font-weight:normal; color:black;">{{message.body}}</span>\n						</ion-label>\n\n						<div style="text-align: start; margin-left: 10px;">\n							<ion-label class="wrap-text" style="margin: 0px; text-align: start !important;">\n								<span style="font-size: 9px;font-weight:normal; color: black;">{{message.convertTime}}</span>\n							</ion-label>\n						</div>\n					</div>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-grid>\n	</ion-infinite-scroll>\n</ion-content>\n\n<ion-footer no-border style="background-color: gray;">\n	<form name="messageForm"\n		style="align-items: center; display: flex; margin: 5px; border-radius: 10px; background-color: white;">\n		<ion-item lines="none" style="width: 85%;">\n			<ion-textarea auto-grow #inputMessage id="inputMessage" name="inputMessage" [(ngModel)]="userMessage"\n				placeholder="Digite uma mensagem">\n			</ion-textarea>\n		</ion-item>\n\n		<button (click)="sendMessage()" style="background-color: transparent;">\n			<ion-icon name="send" style="width: 25px; height: 25px; margin-bottom: 20%;"></ion-icon>\n		</button>\n	</form>\n</ion-footer>'/*ion-inline-end:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/chats/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_thread_thread__["a" /* ThreadProvider */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatPopoverComponent = /** @class */ (function () {
    function ChatPopoverComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ChatPopoverComponent.prototype.block = function () {
        console.log('block');
    };
    ChatPopoverComponent.prototype.inform = function () {
        console.log('inform');
    };
    ChatPopoverComponent.prototype.delete = function () {
        console.log('delete');
    };
    ChatPopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n\t<ion-list no-padding no-margin>\n\t\t<ion-item color=\"light\" class=\"text-10\" (click)=\"block()\">\n\t\t\t<ion-label>Bloquear</ion-label>\n\t\t</ion-item>\n\n\t\t<ion-item color=\"light\" class=\"text-10\" (click)=\"inform()\">\n\t\t\t<ion-label>Denunciar</ion-label>\n\t\t</ion-item>\n\n\t\t<ion-item color=\"light\" class=\"text-10\" (click)=\"delete()\">\n\t\t\t<ion-label>Excluir</ion-label>\n\t\t</ion-item>\n\t</ion-list>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ChatPopoverComponent);
    return ChatPopoverComponent;
}());

//# sourceMappingURL=chat-popover.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDetailsPageModule", function() { return NotificationDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_details__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationDetailsPageModule = /** @class */ (function () {
    function NotificationDetailsPageModule() {
    }
    NotificationDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification_details__["a" /* NotificationDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification_details__["a" /* NotificationDetailsPage */]),
            ],
        })
    ], NotificationDetailsPageModule);
    return NotificationDetailsPageModule;
}());

//# sourceMappingURL=notification-details.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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


var NotificationDetailsPage = /** @class */ (function () {
    function NotificationDetailsPage(navCtrl, navParams, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.loading = this.loadingController.create({
            content: 'Carregando página...'
        });
        var notification = navParams.get('notification');
        this.instanceScreen(notification);
    }
    NotificationDetailsPage.prototype.instanceScreen = function (notification) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.present()];
                    case 1:
                        _a.sent();
                        this.title = notification.title;
                        this.description = notification.description;
                        this.details = notification.details.replace('\"', "'").replace('"', "'");
                        return [4 /*yield*/, this.loading.dismiss()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/notifications/notification-details/notification-details.html"*/'<ion-header>\n	<ion-navbar>\n		<div class="container-title">\n			<h2 class="notification-title">{{title}}</h2>\n		</div>\n	</ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: #172035;" padding>\n	<h1 style="color: white; font-weight: bold; font-size: 18px; text-align: center; padding: 10px;">\n		{{description}}\n	</h1>\n\n	<div [innerHTML]="details" style="color: white; text-align: justify; display: block; margin: 10px;"></div>\n</ion-content>'/*ion-inline-end:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/notifications/notification-details/notification-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], NotificationDetailsPage);
    return NotificationDetailsPage;
}());

//# sourceMappingURL=notification-details.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(170);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routing_routing__ = __webpack_require__(83);
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
    function LoginPage(navCtrl, navParams, loadingController, loginProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.loginProvider = loginProvider;
        this.email = '';
        this.password = '';
        this.hasGenericError = false;
        this.hasInvalidCredentials = false;
    }
    LoginPage.prototype.sendAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var login;
            return __generator(this, function (_a) {
                login = {
                    email: this.email,
                    password: this.password
                };
                this.loginProvider.auth(login).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(data.body.toString());
                                localStorage.setItem('userId', data.body.toString());
                                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__routing_routing__["a" /* RoutingPage */]);
                                return [4 /*yield*/, this.loading.dismiss()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(error.message);
                                if (error["status"] == 401) {
                                    this.hasInvalidCredentials = true;
                                }
                                else {
                                    this.hasGenericError = true;
                                }
                                return [4 /*yield*/, this.loading.dismiss()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.logMeIn = function (keyCode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (keyCode && keyCode != 13) {
                            return [2 /*return*/];
                        }
                        this.loading = this.loadingController.create({
                            content: 'Por favor, aguarde...'
                        });
                        return [4 /*yield*/, this.loading.present()];
                    case 1:
                        _a.sent();
                        if (!(!this.email || !this.password)) return [3 /*break*/, 3];
                        this.hasInvalidCredentials = true;
                        return [4 /*yield*/, this.loading.dismiss()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        this.hasInvalidCredentials = false;
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.sendAuth()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.gotoNextField = function (nextElement, keyCode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (keyCode && keyCode != 13) {
                    return [2 /*return*/];
                }
                nextElement.setFocus();
                return [2 /*return*/];
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/login/login.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            LOGIN\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="register-content" padding>\n    <section>\n        <div id="firstStep">\n            <ion-item>\n                <ion-input #Email (keypress)="gotoNextField(Password, $event.keyCode)" name="login-email" class="register-input"\n                    [(ngModel)]="email" type="email" autocomplete="no" placeholder="E-mail"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-input #Password (keypress)="logMeIn($event.keyCode)" name="login-password"\n                    class="register-input" [(ngModel)]="password" type="password" placeholder="Senha"></ion-input>\n            </ion-item>\n\n            <button ion-button full (click)="logMeIn()" style="border-radius: 7px; padding: 20px 0px;">\n                Entrar\n            </button>\n\n            <ion-label class="error-message" [hidden]="!hasGenericError">\n                Ocorreu um erro ao entrar. Tente novamente.\n            </ion-label>\n\n            <ion-label class="error-message" [hidden]="!hasInvalidCredentials">\n                E-mail ou senha inválidos.\n            </ion-label>\n        </div>\n    </section>\n</ion-content>'/*ion-inline-end:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_register_register__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_2_register_2__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__(85);
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





var Register_1Page = /** @class */ (function () {
    function Register_1Page(navCtrl, navParams, loading, registerProvider, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.registerProvider = registerProvider;
        this.toastController = toastController;
        this.cnpj = '';
        this.tradingName = '';
        this.email = '';
        this.telephone = '';
        this.coupon = '';
        this.conditionsTerms = false;
        this.hasCnpjError = false;
        this.hasCnpjEmpty = false;
        this.hasCnpjExists = false;
        this.hasEmailEmpty = false;
        this.hasTelephoneEmpty = false;
        this.hasConditionsTermsEmpty = false;
    }
    Register_1Page.prototype.presentToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                toast = this.toastController.create({
                    message: message,
                    duration: 2000
                });
                toast.present();
                return [2 /*return*/];
            });
        });
    };
    Register_1Page.prototype.searchCnpj = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loading.create({
                            content: "Por favor, aguarde...",
                        });
                        return [4 /*yield*/, loading.present()];
                    case 1:
                        _a.sent();
                        this.registerProvider.hasCNPJ(this.cnpj).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!data) return [3 /*break*/, 2];
                                        this.hasCnpjExists = true;
                                        return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 8];
                                    case 2:
                                        this.index = 0;
                                        _a.label = 3;
                                    case 3:
                                        this.registerProvider.searchCnpj(this.cnpj)
                                            .subscribe(function (response) {
                                            _this.cnpjObject = response;
                                        });
                                        if (this.cnpjObject)
                                            return [3 /*break*/, 6];
                                        this.index++;
                                        return [4 /*yield*/, this.delay(3000)];
                                    case 4:
                                        _a.sent();
                                        _a.label = 5;
                                    case 5:
                                        if (this.index < 3) return [3 /*break*/, 3];
                                        _a.label = 6;
                                    case 6: return [4 /*yield*/, loading.dismiss()];
                                    case 7:
                                        _a.sent();
                                        if (!this.cnpjObject) {
                                            this.email = '';
                                            this.telephone = '';
                                            this.tradingName = '';
                                            this.hasCnpjError = true;
                                            return [2 /*return*/];
                                        }
                                        this.hasCnpjExists = false;
                                        this.hasCnpjError = false;
                                        this.tradingName = this.cnpjObject.fantasia;
                                        this.email = this.cnpjObject.email;
                                        this.telephone = this.cnpjObject.telefone;
                                        _a.label = 8;
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                console.log(error.message);
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Register_1Page.prototype.goToSecondStep = function () {
        if (!this.cnpj) {
            this.hasCnpjEmpty = true;
            return;
        }
        else {
            this.hasCnpjEmpty = false;
        }
        if (!this.email) {
            this.hasEmailEmpty = true;
            return;
        }
        else {
            this.hasEmailEmpty = false;
        }
        if (!this.telephone) {
            this.hasTelephoneEmpty = true;
            return;
        }
        else {
            this.hasTelephoneEmpty = false;
        }
        this.hasConditionsTermsEmpty = !this.conditionsTerms;
        if (this.hasConditionsTermsEmpty)
            return;
        if (this.cnpjObject == null) {
            this.hasCnpjError = true;
            return;
        }
        var user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]();
        user.cnpj = this.cnpjObject;
        user.tradingName = this.tradingName;
        user.email = this.email.toLowerCase();
        user.telephone = this.telephone;
        user.coupon = this.coupon;
        user.conditionsTerms = this.conditionsTerms;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_2_register_2__["a" /* Register_2Page */], { user: user });
    };
    Register_1Page.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return console.log("fired"); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Register_1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-1',template:/*ion-inline-start:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/register-profile/register-1/register-1.html"*/'<ion-header>\n    <ion-navbar></ion-navbar>\n</ion-header>\n\n<ion-content class="register-content" padding>\n    <h1>CADASTRO</h1>\n\n    <section>\n        <div id="firstStep">\n            <h4>Estamos interessados em conhecer sua empresa!</h4>\n\n            <h4>Digite os dados nos campos abaixo</h4>\n\n            <!-- (keypress)="searchCnpj()" -->\n            <ion-input class="register-input" [(ngModel)]="cnpj" type="number" placeholder="CNPJ" (maxLenght)="14"></ion-input>\n            <ion-label class="error-message" [hidden]="!hasCnpjError">Ocorreu um erro ao pegar os dados, tente novamente</ion-label>\n            <ion-label class="error-message" [hidden]="!hasCnpjEmpty">O campo CNPJ não pode ser vazio</ion-label>\n            <ion-label class="error-message" [hidden]="!hasCnpjExists">CNPJ já cadastrado</ion-label>\n\n            <button ion-button full (click)="searchCnpj()" style="border-radius: 7px; padding: 20px 0px;">\n                Buscar cnpj\n            </button>\n\n            <ion-input class="register-input" [(ngModel)]="tradingName" type="text" placeholder="Nome Fantasia (opcional)"></ion-input>\n\n            <ion-input class="register-input" [(ngModel)]="email" type="email" placeholder="E-mail"></ion-input>\n            <ion-label class="error-message" [hidden]="!hasEmailEmpty">O campo e-mail não pode ser vazio</ion-label>\n\n            <ion-input class="register-input" [(ngModel)]="telephone" type="tel" placeholder="Telefone"></ion-input>\n            <ion-label class="error-message" [hidden]="!hasTelephoneEmpty">O campo telefone não pode ser vazio</ion-label>\n\n            <ion-input class="register-input" [(ngModel)]="coupon" type="text" placeholder="Cupom (opcional)"></ion-input>\n\n            <ion-item text-wrap class="register-checkbox">\n                <ion-row>\n                    <ion-col col-2 no-padding no-margin>\n                        <ion-item no-padding no-margin no-lines>\n                            <ion-checkbox [(ngModel)]="conditionsTerms"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-10 no-padding no-margin>\n                        <ion-item no-padding no-margin no-lines>\n                            Li e concordo com os\n                            <a href="https://5codigital.com/regulamento">Termos do Regulamento de Uso</a> e\n                            <a href="https://5codigital.com/politicadeprivacidade">Política de Privacidade</a>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n\n            <ion-label class="error-message" [hidden]="!hasConditionsTermsEmpty">Você deve aceitar os Termos e Condições</ion-label>\n\n            <button ion-button full (click)="goToSecondStep()" style="border-radius: 7px; padding: 20px 0px;">\n              Próxima página\n          </button>\n        </div>\n    </section>\n</ion-content>'/*ion-inline-end:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/register-profile/register-1/register-1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_register_register__["a" /* RegisterProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], Register_1Page);
    return Register_1Page;
}());

//# sourceMappingURL=register-1.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_register_register__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__review_register_review_register__ = __webpack_require__(173);
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




var Register_2Page = /** @class */ (function () {
    function Register_2Page(navCtrl, navParams, loading, registerProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.registerProvider = registerProvider;
        this.site = '';
        this.cellphone = '';
        this.responsiblePerson = '';
        this.hiddenResponsiblePerson = true;
        this.hiddenSelectedCategories = true;
        this.hasEmptyCategory = true;
        this.user = navParams.get('user');
    }
    Register_2Page.prototype.ionViewWillEnter = function () {
        this.getCategories();
    };
    Register_2Page.prototype.getCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loading.create({
                            content: "Por favor, aguarde...",
                        });
                        return [4 /*yield*/, loading.present()];
                    case 1:
                        _a.sent();
                        this.index = 0;
                        do {
                            this.registerProvider.getCategories()
                                .subscribe(function (response) {
                                _this.categories = JSON.parse(response);
                            });
                            this.index++;
                            // await this.delay(3000);
                        } while ((!this.categories || this.categories.length == 0) && this.index < 5);
                        return [4 /*yield*/, loading.dismiss()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Register_2Page.prototype.removeCategory = function (category) {
        this.selectedCategories = this.selectedCategories.filter(function (obj) { return obj !== category; });
        if (this.selectedCategories.length == 0) {
            this.hasEmptyCategory = true;
        }
    };
    Register_2Page.prototype.addSelectedValue = function () {
        var _this = this;
        this.hasEmptyCategory = false;
        if (!this.selectedCategories) {
            this.selectedCategories = [this.categorySelect];
            return;
        }
        if (this.selectedCategories.length == 3) {
            return;
        }
        if (this.selectedCategories.length > 0) {
        }
        this.selectedCategories = this.selectedCategories.filter(function (obj) { return obj !== _this.categorySelect; });
        this.selectedCategories.push(this.categorySelect);
        console.log(this.categorySelect);
    };
    Register_2Page.prototype.goToReviewRegisterPage = function () {
        if (!this.responsiblePerson) {
            this.hiddenResponsiblePerson = false;
            return;
        }
        else {
            this.hiddenResponsiblePerson = true;
        }
        if (this.selectedCategories == null || this.selectedCategories.length == 0) {
            this.hiddenSelectedCategories = false;
            return;
        }
        else {
            this.hiddenSelectedCategories = true;
        }
        if (this.site) {
            this.user.site = "https://" + this.site.toLowerCase();
        }
        this.user.cellphone = this.cellphone;
        this.user.responsiblePerson = this.responsiblePerson;
        this.user.categories = this.selectedCategories.filter(function (obj) { return obj.idcategoriafornecedor; });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__review_register_review_register__["a" /* ReviewRegisterPage */], { user: this.user });
    };
    Register_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-2',template:/*ion-inline-start:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/register-profile/register-2/register-2.html"*/'<ion-header>\n    <ion-navbar></ion-navbar>\n</ion-header>\n\n<ion-content class="register-content" padding>\n    <h1>CADASTRO</h1>\n\n    <section>\n        <div id="secondStep">\n            <h4>Precisamos de mais alguns dados</h4>\n\n            <ion-input class="register-input" [(ngModel)]="site" type="text" placeholder="Site https:// (opcional)">\n            </ion-input>\n\n            <ion-input class="register-input" [(ngModel)]="cellphone" type="tel"\n                placeholder="Telefone celular (opcional)"></ion-input>\n\n            <ion-input class="register-input" [(ngModel)]="responsiblePerson" type="text"\n                placeholder="Pessoa responsável"></ion-input>\n            <ion-label class="error-message" [hidden]="hiddenResponsiblePerson">O campo Pessoa responsável não pode ser\n                vazio</ion-label>\n\n            <ion-item style="width: 224%;">\n                <ion-select [(ngModel)]="categorySelect" placeholder="Selecione entre 1 a 3 categorias"\n                    (ngModelChange)="addSelectedValue()">\n                    <ion-option [value]="category" *ngFor="let category of categories">\n                        {{category.nome}}\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-list class="categoryList" *ngFor="let select of selectedCategories">\n                <ion-label text-wrap style="text-align: center !important;">{{select.nome}}</ion-label>\n\n                <button style="background-color: transparent; size: 5px;" [hidden]="hasEmptyCategory"\n                    (click)="removeCategory(select)">\n                    <ion-icon name="close"></ion-icon>\n                </button>\n            </ion-list>\n\n            <ion-label class="error-message" [hidden]="hiddenSelectedCategories">O campo Categorias deve ter ao menos um\n                item</ion-label>\n\n            <button ion-button full (click)="goToReviewRegisterPage()" style="border-radius: 7px; padding: 20px 0px;">\n                Próxima página\n            </button>\n        </div>\n    </section>\n</ion-content>'/*ion-inline-end:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/register-profile/register-2/register-2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_register_register__["a" /* RegisterProvider */]])
    ], Register_2Page);
    return Register_2Page;
}());

//# sourceMappingURL=register-2.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_register_confirm_register__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_register__ = __webpack_require__(42);
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




var ReviewRegisterPage = /** @class */ (function () {
    function ReviewRegisterPage(navCtrl, navParams, loading, registerProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.registerProvider = registerProvider;
        this.cnpj = '';
        this.tradingName = '';
        this.email = '';
        this.telephone = '';
        this.cellphone = '';
        this.site = '';
        this.responsiblePerson = '';
        this.companyName = '';
        this.address = '';
        this.numberAddress = '';
        this.complementAddress = '';
        this.zipCode = '';
        this.neighborhood = '';
        this.city = '';
        this.state = '';
        this.observations = '';
        this.hiddenSendError = true;
        this.hiddenCnpjError = true;
        this.user = navParams.get('user');
        this.instanceLabels();
    }
    ReviewRegisterPage.prototype.instanceLabels = function () {
        this.cnpj = this.user.cnpj.cnpj;
        this.tradingName = this.user.tradingName;
        this.email = this.user.email;
        this.telephone = this.user.telephone;
        this.cellphone = this.user.cellphone;
        this.site = this.user.site;
        this.responsiblePerson = this.user.responsiblePerson;
        this.categories = this.user.categories;
        this.companyName = this.user.cnpj.nome;
        this.address = this.user.cnpj.logradouro;
        this.numberAddress = this.user.cnpj.numero;
        this.complementAddress = this.user.cnpj.complemento;
        this.zipCode = this.user.cnpj.cep;
        this.neighborhood = this.user.cnpj.bairro;
        this.city = this.user.cnpj.municipio;
        this.state = this.user.cnpj.uf;
    };
    ReviewRegisterPage.prototype.sendData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loading.create({
                            content: "Por favor, aguarde...",
                        });
                        return [4 /*yield*/, loading.present()];
                    case 1:
                        _a.sent();
                        this.registerProvider.sendUser(this.user).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.user.observations = this.observations;
                                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirm_register_confirm_register__["a" /* ConfirmRegisterPage */]);
                                        return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(error);
                                        if (error["status"] == 200) {
                                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirm_register_confirm_register__["a" /* ConfirmRegisterPage */]);
                                        }
                                        else if (error["status"] == 400) {
                                            this.hiddenCnpjError = false;
                                        }
                                        else {
                                            this.hiddenSendError = false;
                                        }
                                        return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ReviewRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-review-register',template:/*ion-inline-start:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/register-profile/review-register/review-register.html"*/'<ion-header>\n    <ion-navbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h1>CADASTRO</h1>\n\n    <h4>Confira as informações da sua empresa antes de finalizar o cadastro</h4>\n\n    <div class="review-box">\n        <ion-label text-wrap>CNPJ: {{cnpj}}</ion-label>\n        <ion-label text-wrap>Nome Fantasia: {{tradingName}}</ion-label>\n        <ion-label text-wrap>E-mail: {{email}}</ion-label>\n        <ion-label text-wrap>Telefone: {{telephone}}</ion-label>\n        <ion-label text-wrap>Celular: {{cellphone}}</ion-label>\n        <ion-label text-wrap>Site: {{site}}</ion-label>\n        <ion-label text-wrap>Pessoa responsável: {{responsiblePerson}}</ion-label>\n\n        <ion-label text-wrap>Categorias:</ion-label>\n        <ion-list *ngFor="let category of categories">\n            <ion-label text-wrap>• {{category.nome}}</ion-label>\n        </ion-list>\n\n        <ion-label text-wrap>Razão Social: {{companyName}}</ion-label>\n        <ion-label text-wrap>Endereço: {{address}}</ion-label>\n        <ion-label text-wrap>Número: {{numberAddress}}</ion-label>\n        <ion-label text-wrap>Complemento: {{complementAddress}}</ion-label>\n        <ion-label text-wrap>CEP: {{zipCode}}</ion-label>\n        <ion-label text-wrap>Bairro: {{neighborhood}}</ion-label>\n        <ion-label text-wrap>Cidade: {{city}}</ion-label>\n        <ion-label text-wrap>UF: {{state}}</ion-label>\n    </div>\n\n    <ion-textarea class="obs-box" [(ngModel)]="observations" type="text-wrap" auto-grow="true" placeholder="Outras observações"></ion-textarea>\n\n    <button ion-button full (click)="sendData()" style="border-radius: 15px; padding: 30px 0px;">\n        Confirmar cadastro\n    </button>\n\n    <ion-label class="error-message" [hidden]="hiddenSendError">Ocorreu um erro, tente novamente</ion-label>\n\n    <ion-label class="error-message" [hidden]="hiddenCnpjError">CNPJ já cadastrado!</ion-label>\n</ion-content>'/*ion-inline-end:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/register-profile/review-register/review-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_register_register__["a" /* RegisterProvider */]])
    ], ReviewRegisterPage);
    return ReviewRegisterPage;
}());

//# sourceMappingURL=review-register.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmRegisterPage = /** @class */ (function () {
    function ConfirmRegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmRegisterPage.prototype.backButton = function () {
        this.navCtrl.popToRoot();
    };
    ConfirmRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-register',template:/*ion-inline-start:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/register-profile/confirm-register/confirm-register.html"*/'<ion-content class="homeContent" padding padding-left>\n    <section>\n        <img src="../../assets/imgs/fiveco-digital-logo.png" />\n\n        <h3 class="titleConfirmRegister1">Obrigado por cadastrar</h3>\n        <h3 class="titleConfirmRegister2">a sua empresa!</h3>\n\n        <span class="confirmText1">\n          Enviamos um e-mail de confirmação dos dados cadastrados.\n        </span>\n\n        <br/><br/>\n        \n        <span class="confirmText2">\n          Após a confirmação, nossa equipe validará as informações para que sua empresa\n          esteja a disposição para mais de mil sindicos e gestores em todo o Brasil!\n        </span>\n\n        <button (click)="backButton()" class="registerButton" ion-button full style="border-radius: 15px;">\n          Voltar a tela inicial\n        </button>\n    </section>\n</ion-content>'/*ion-inline-end:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/register-profile/confirm-register/confirm-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ConfirmRegisterPage);
    return ConfirmRegisterPage;
}());

//# sourceMappingURL=confirm-register.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notification_notification__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_details_notification_details__ = __webpack_require__(168);
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




var NotificationsListPage = /** @class */ (function () {
    function NotificationsListPage(navCtrl, navParams, loadingController, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.provider = provider;
        this.userId = localStorage.getItem('userId');
        if (this.userId == null) {
            this.navCtrl.popToRoot();
            return;
        }
        this.instanceScreen();
    }
    NotificationsListPage.prototype.instanceScreen = function () {
        var _this = this;
        this.loading = this.loadingController.create({
            content: 'Carregando notificações...'
        });
        this.provider.getNotifications().subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(data);
                this.notifications = data;
                this.loading.dismiss();
                return [2 /*return*/];
            });
        }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(error.message);
                this.loading.dismiss();
                return [2 /*return*/];
            });
        }); });
    };
    NotificationsListPage.prototype.openDetails = function (notification) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(notification);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notification_details_notification_details__["a" /* NotificationDetailsPage */], { notification: notification });
                return [2 /*return*/];
            });
        });
    };
    NotificationsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/notifications/notifications-list/notifications-list.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Notificações</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: #172035;" padding>\n	<ion-list>\n		<div *ngFor="let notification of notifications">\n			<ion-card class="routing-card" (click)="openDetails(notification)">\n				<img src="../../assets/imgs/icon-notification.png" class="routing-img" />\n\n				<ion-item class="routing-item">\n					<ion-label class="wrap-text routing-label">\n						{{notification.title}}\n						<br>\n						<span class="routing-span">{{notification.description}}</span>\n					</ion-label>\n				</ion-item>\n			</ion-card>\n		</div>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/notifications/notifications-list/notifications-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_notification_notification__["a" /* NotificationProvider */]])
    ], NotificationsListPage);
    return NotificationsListPage;
}());

//# sourceMappingURL=notifications-list.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_urls__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationProvider = /** @class */ (function () {
    function NotificationProvider(http) {
        this.http = http;
    }
    NotificationProvider.prototype.getNotifications = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].urlObjects + 'notifications?where=isService:true');
    };
    NotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NotificationProvider);
    return NotificationProvider;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_register_register__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(85);
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




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, loading, navParams, registerProvider, actionSheetController) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.navParams = navParams;
        this.registerProvider = registerProvider;
        this.actionSheetController = actionSheetController;
        this.croppedImagepath = "";
        this.isLoading = false;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50,
        };
        this.hasEmptyCategory = true;
        this.cnpj = '';
        this.contactName = '';
        this.tradingName = '';
        this.email = '';
        this.telephone = '';
        this.cellphone = '';
        this.site = '';
        this.responsiblePerson = '';
        this.companyName = '';
        this.urlPicture = '';
        this.about = '';
        var user = navParams.get('user');
        this.instance(user);
    }
    ProfilePage.prototype.instance = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(user);
                        this.cep = user.cep ? user.cep.replace(/\D/g, '') : null;
                        this.number = user.numero ? user.numero : null;
                        this.complement = user.complemento ? user.complemento.toUpperCase() : null;
                        this.address = user.endereco ? user.endereco.toUpperCase() : null;
                        this.neighbourhood = user.bairro ? user.bairro.toUpperCase() : null;
                        this.city = user.cidade ? user.cidade.toUpperCase() : null;
                        this.state = user.estado ? user.estado.toUpperCase() : null;
                        this.tradingName = user.nomefantasia && user.nomefantasia != '*' ? user.nomefantasia.toUpperCase() : 'SEM NOME FANTASIA';
                        this.companyName = user.nome ? user.nome.toUpperCase() : null;
                        this.cnpj = user.cnpj ? this.cnpjMask(user.cnpj) : null;
                        this.site = user.site == 'https://' ? null : user.site;
                        this.contactName = user.nomeContato ? user.nomeContato.toUpperCase() : null;
                        this.telephone = user.telefone ? user.telefone.toUpperCase() : null;
                        this.cellphone = user.celular ? user.celular.toUpperCase() : null;
                        this.email = user.email.toUpperCase();
                        this.about = user.sobre.toUpperCase();
                        this.urlPicture = (user.urlFoto || user.urlFoto.trim() == '') ? '../../assets/imgs/default-profile-img.jpg' : user.urlFoto;
                        return [4 /*yield*/, this.getCategories()];
                    case 1:
                        _a.sent();
                        for (i = 0; i < user.categorias.length; i++) {
                            if (user.categorias[i] && user.categorias[i].nome != "") {
                                this.hasEmptyCategory = false;
                                user.categorias[i].nome = user.categorias[i].nome.toUpperCase();
                                if (!this.selectedCategories) {
                                    this.selectedCategories = [user.categorias[i]];
                                }
                                else {
                                    this.selectedCategories.push(user.categorias[i]);
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.cnpjMask = function (c) {
        if (c.length < 13) {
            return c;
        }
        return c[0] + c[1] + '.' + c[2] + c[3] + c[4] + '.' + c[5] + c[6] + c[7] + '/' + c[8] + c[9] + c[10] + c[11] + '-' + c[12] + c[13];
    };
    ProfilePage.prototype.saveChanges = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, u;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loading.create({
                            content: "Por favor, aguarde...",
                        });
                        return [4 /*yield*/, loading.present()];
                    case 1:
                        _a.sent();
                        u = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
                        u.id = localStorage.getItem('userId');
                        u.about = this.about ? this.about : '';
                        u.responsiblePerson = this.contactName ? this.contactName : '';
                        u.site = this.site ? this.site : '';
                        u.telephone = this.telephone ? this.telephone : '';
                        u.cellphone = this.cellphone ? this.cellphone : '';
                        u.cep = this.cep ? this.cep.replace(/\D/g, '') : '';
                        u.number = this.number ? this.number : 0;
                        u.complement = this.complement ? this.complement : '';
                        u.address = this.address ? this.address : '';
                        u.neighbourhood = this.neighbourhood ? this.neighbourhood : '';
                        u.city = this.city ? this.city : '';
                        u.state = this.state ? this.state : '';
                        u.categories = this.selectedCategories;
                        this.registerProvider.editUser(u).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(data);
                                        return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(error);
                                        return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.getCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.registerProvider.getCategories()
                    .subscribe(function (response) {
                    _this.listCategories = JSON.parse(response);
                });
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.removeCategory = function (category) {
        this.selectedCategories = this.selectedCategories.filter(function (obj) { return obj.nome !== category.nome; });
        if (this.selectedCategories.length == 0) {
            this.hasEmptyCategory = true;
        }
    };
    ProfilePage.prototype.addSelectedValue = function () {
        var _this = this;
        this.hasEmptyCategory = false;
        this.categorySelect.nome = this.categorySelect.nome.toUpperCase();
        if (!this.selectedCategories) {
            this.selectedCategories = [this.categorySelect];
            return;
        }
        if (this.selectedCategories.length == 3) {
            return;
        }
        if (this.selectedCategories.length > 0) {
        }
        this.selectedCategories = this.selectedCategories.filter(function (obj) { return obj !== _this.categorySelect; });
        this.selectedCategories.push(this.categorySelect);
        console.log(this.categorySelect);
    };
    ProfilePage.prototype.getCep = function (keyCode) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (keyCode && keyCode != 13) {
                    return [2 /*return*/];
                }
                if (this.cep.length == 8) {
                    console.log(this.cep);
                    this.registerProvider.getCep(this.cep).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            console.log(data);
                            this.address = data['logradouro'];
                            this.neighbourhood = data['bairro'];
                            this.city = data['localidade'];
                            this.state = data['uf'];
                            return [2 /*return*/];
                        });
                    }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            console.log(error);
                            return [2 /*return*/];
                        });
                    }); });
                }
                else if (this.cep.length > 8) {
                    this.cep = this.cep.substring(0, 7);
                }
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.gotoNextField = function (nextElement, keyCode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (keyCode && keyCode != 13) {
                    return [2 /*return*/];
                }
                nextElement.setFocus();
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.selectImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            buttons: [{
                                    text: 'Abrir galeria',
                                    handler: function () {
                                        console.log('teste');
                                        //this.pickImage();
                                    }
                                },
                                {
                                    text: 'Cancelar',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Perfil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: #172035;" padding>\n  <img src="{{urlPicture}}" class="profile-picture" (click)="selectImage()" />\n\n  <ion-label text-wrap class="profile-label">Nome Fantasia:</ion-label>\n  <ion-input text-wrap [(ngModel)]="tradingName" placeholder="nome fantasia" class="profile-editinput" disabled>\n  </ion-input>\n\n  <ion-label text-wrap class="profile-label">E-mail:</ion-label>\n  <ion-input text-wrap [(ngModel)]="email" placeholder="e-mail" class="profile-editinput" disabled></ion-input>\n\n  <ion-label text-wrap class="profile-label">CNPJ:</ion-label>\n  <ion-input text-wrap [(ngModel)]="cnpj" placeholder="CNPJ" class="profile-editinput" disabled></ion-input>\n\n  <ion-label text-wrap class="profile-label">Razão Social:</ion-label>\n  <ion-input text-wrap [(ngModel)]="companyName" placeholder="razao social" class="profile-editinput" disabled>\n  </ion-input>\n\n  <ion-label text-wrap class="profile-label">Site:</ion-label>\n  <ion-input text-wrap #Site (keypress)="gotoNextField(ContactName, $event.keyCode)" [(ngModel)]="site"\n    placeholder="site" class="profile-editinput"></ion-input>\n\n  <ion-label text-wrap class="profile-label">Nome do contato:</ion-label>\n  <ion-input text-wrap #ContactName (keypress)="gotoNextField(Telephone, $event.keyCode)" [(ngModel)]="contactName"\n    placeholder="nome de contato" class="profile-editinput"></ion-input>\n\n  <ion-label text-wrap class="profile-label">Telefone:</ion-label>\n  <ion-input text-wrap #Telephone (keypress)="gotoNextField(Cellphone, $event.keyCode)" [(ngModel)]="telephone"\n    placeholder="telefone" class="profile-editinput"></ion-input>\n\n  <ion-label text-wrap class="profile-label">Celular:</ion-label>\n  <ion-input text-wrap #Cellphone (keypress)="gotoNextField(About, $event.keyCode)" [(ngModel)]="cellphone"\n    placeholder="celular" class="profile-editinput"></ion-input>\n\n  <ion-label text-wrap class="profile-label">Sobre:</ion-label>\n  <ion-input text-wrap #About (keypress)="gotoNextField(CEP, $event.keyCode)" [(ngModel)]="about" placeholder="sobre"\n    class="profile-editinput"></ion-input>\n\n  <ion-label text-wrap class="profile-label">CEP:</ion-label>\n  <ion-input text-wrap #CEP (keypress)="getCep($event.keyCode)" [(ngModel)]="cep" placeholder="CEP"\n    class="profile-editinput" (keyup)="getCep()"></ion-input>\n\n  <ion-label text-wrap class="profile-label">Número:</ion-label>\n  <ion-input text-wrap [(ngModel)]="number" placeholder="número" class="profile-editinput"></ion-input>\n\n  <ion-label text-wrap class="profile-label">Complemento:</ion-label>\n  <ion-input text-wrap [(ngModel)]="complement" placeholder="complemento" class="profile-editinput"></ion-input>\n\n  <ion-label text-wrap class="profile-label">Endereço:</ion-label>\n  <ion-input text-wrap [(ngModel)]="address" placeholder="endereço" class="profile-editinput" disabled></ion-input>\n\n  <ion-label text-wrap class="profile-label">Bairro:</ion-label>\n  <ion-input text-wrap [(ngModel)]="neighbourhood" placeholder="bairro" class="profile-editinput" disabled></ion-input>\n\n  <ion-label text-wrap class="profile-label">Cidade:</ion-label>\n  <ion-input text-wrap [(ngModel)]="city" placeholder="cidade" class="profile-editinput" disabled></ion-input>\n\n  <ion-label text-wrap class="profile-label">UF:</ion-label>\n  <ion-input text-wrap [(ngModel)]="state" placeholder="uf" class="profile-editinput" disabled></ion-input>\n\n  <ion-item style="width: 224%;">\n    <ion-select [(ngModel)]="categorySelect" placeholder="Selecione entre 1 a 3 categorias"\n      (ngModelChange)="addSelectedValue()">\n      <ion-option [value]="category" *ngFor="let category of listCategories">\n        {{category.nome}}\n      </ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-label text-wrap class="profile-label">Categorias:</ion-label>\n  <ion-list class="categoryList" *ngFor="let category of selectedCategories">\n    <ion-label text-wrap class="profile-input">• {{category.nome}}</ion-label>\n\n    <button style="background-color: transparent; color: #FFFFFF; size: 5px;" [hidden]="hasEmptyCategory"\n      (click)="removeCategory(category)">\n      <ion-icon light name="close"></ion-icon>\n    </button>\n  </ion-list>\n\n  <button full (click)="saveChanges()" style="border-radius: 7px; padding: 20px 0px; margin-top: -5px; margin-bottom: 20px; \n    width: 100%; font-size: 15px; background-color: #488bfe; color: white;">\n    Salvar alterações\n  </button>\n</ion-content>'/*ion-inline-end:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsListPageModule", function() { return NotificationsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_list__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsListPageModule = /** @class */ (function () {
    function NotificationsListPageModule() {
    }
    NotificationsListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notifications_list__["a" /* NotificationsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications_list__["a" /* NotificationsListPage */]),
            ],
        })
    ], NotificationsListPageModule);
    return NotificationsListPageModule;
}());

//# sourceMappingURL=notifications-list.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmRegisterPageModule", function() { return ConfirmRegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_register__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmRegisterPageModule = /** @class */ (function () {
    function ConfirmRegisterPageModule() {
    }
    ConfirmRegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_register__["a" /* ConfirmRegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm_register__["a" /* ConfirmRegisterPage */]),
            ],
        })
    ], ConfirmRegisterPageModule);
    return ConfirmRegisterPageModule;
}());

//# sourceMappingURL=confirm-register.module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register_1PageModule", function() { return Register_1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_1__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Register_1PageModule = /** @class */ (function () {
    function Register_1PageModule() {
    }
    Register_1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_1__["a" /* Register_1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_1__["a" /* Register_1Page */]),
            ],
        })
    ], Register_1PageModule);
    return Register_1PageModule;
}());

//# sourceMappingURL=register-1.module.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register_2PageModule", function() { return Register_2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_2__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Register_2PageModule = /** @class */ (function () {
    function Register_2PageModule() {
    }
    Register_2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_2__["a" /* Register_2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_2__["a" /* Register_2Page */]),
            ],
        })
    ], Register_2PageModule);
    return Register_2PageModule;
}());

//# sourceMappingURL=register-2.module.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewRegisterPageModule", function() { return ReviewRegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review_register__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReviewRegisterPageModule = /** @class */ (function () {
    function ReviewRegisterPageModule() {
    }
    ReviewRegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__review_register__["a" /* ReviewRegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__review_register__["a" /* ReviewRegisterPage */]),
            ],
        })
    ], ReviewRegisterPageModule);
    return ReviewRegisterPageModule;
}());

//# sourceMappingURL=review-register.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingPageModule", function() { return RoutingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routing__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RoutingPageModule = /** @class */ (function () {
    function RoutingPageModule() {
    }
    RoutingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__routing__["a" /* RoutingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__routing__["a" /* RoutingPage */]),
            ],
        })
    ], RoutingPageModule);
    return RoutingPageModule;
}());

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_crop_ngx__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_notification_notification__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_register_register__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_notification_model__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_cnpj_object__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_category__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_login__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__models_user__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_profile_confirm_register_confirm_register_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_register_profile_review_register_review_register_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_profile_register_2_register_2_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_register_profile_register_1_register_1_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_notifications_notifications_list_notifications_list_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_notifications_notification_details_notification_details_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_routing_routing_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_login_login_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_chats_chat_list_chat_list_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_chats_chat_chat_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_chats_chat_chat_popover_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_thread_thread__ = __webpack_require__(81);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chats/chat-list/chat-list.module#ChatListPageModule', name: 'ChatListPage', segment: 'chat-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chats/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notification-details/notification-details.module#NotificationDetailsPageModule', name: 'NotificationDetailsPage', segment: 'notification-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications-list/notifications-list.module#NotificationsListPageModule', name: 'NotificationsListPage', segment: 'notifications-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-profile/confirm-register/confirm-register.module#ConfirmRegisterPageModule', name: 'ConfirmRegisterPage', segment: 'confirm-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-profile/register-1/register-1.module#Register_1PageModule', name: 'Register_1Page', segment: 'register-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-profile/register-2/register-2.module#Register_2PageModule', name: 'Register_2Page', segment: 'register-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-profile/review-register/review-register.module#ReviewRegisterPageModule', name: 'ReviewRegisterPage', segment: 'review-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/routing/routing.module#RoutingPageModule', name: 'RoutingPage', segment: 'routing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20__pages_register_profile_register_1_register_1_module__["Register_1PageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_profile_register_2_register_2_module__["Register_2PageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_register_profile_review_register_review_register_module__["ReviewRegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_profile_confirm_register_confirm_register_module__["ConfirmRegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_routing_routing_module__["RoutingPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_notifications_notifications_list_notifications_list_module__["NotificationsListPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_notifications_notification_details_notification_details_module__["NotificationDetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_chats_chat_list_chat_list_module__["ChatListPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_chats_chat_chat_module__["ChatPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_crop_ngx__["a" /* Crop */],
                // ImagePicker,
                // File,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_register_register__["a" /* RegisterProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_notification_notification__["a" /* NotificationProvider */],
                __WEBPACK_IMPORTED_MODULE_12__models_notification_model__["a" /* NotificationModel */],
                __WEBPACK_IMPORTED_MODULE_13__models_cnpj_object__["a" /* CnpjObject */],
                __WEBPACK_IMPORTED_MODULE_14__models_category__["a" /* Category */],
                __WEBPACK_IMPORTED_MODULE_15__models_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_16__models_user__["a" /* User */],
                __WEBPACK_IMPORTED_MODULE_29__providers_thread_thread__["a" /* ThreadProvider */],
                __WEBPACK_IMPORTED_MODULE_28__pages_chats_chat_chat_popover_component__["a" /* ChatPopoverComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dictionary; });
// interface IDictionary<T> {
//     add(key: string, value: T): void;
//     get(key: string): T;
//     remove(key: string): void;
//     containsKey(key: string): boolean;
//     keys(): string[];
//     values(): T[];
// }
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
    return Dictionary;
}());

//# sourceMappingURL=dictionary.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(84);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nycolas/source/repos/5codigital/service-provider-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/nycolas/source/repos/5codigital/service-provider-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationModel; });
var NotificationModel = /** @class */ (function () {
    function NotificationModel() {
    }
    return NotificationModel;
}());

//# sourceMappingURL=notification-model.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnpjObject; });
/* unused harmony export Atividade */
/* unused harmony export QSA */
var CnpjObject = /** @class */ (function () {
    function CnpjObject() {
    }
    return CnpjObject;
}());

var Atividade = /** @class */ (function () {
    function Atividade() {
    }
    return Atividade;
}());

var QSA = /** @class */ (function () {
    function QSA() {
    }
    return QSA;
}());

//# sourceMappingURL=cnpj-object.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_urls__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterProvider = /** @class */ (function () {
    function RegisterProvider(http) {
        this.http = http;
    }
    RegisterProvider.prototype.searchCnpj = function (cnpj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('X-Requested-With', 'XMLHttpRequest');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].urlApiCnpj + 'v1/cnpj/' + cnpj, { headers: headers });
    };
    RegisterProvider.prototype.hasCNPJ = function (cnpj) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].url5CoWebApi + "v1/serviceprovider/hascnpj/" + cnpj);
    };
    RegisterProvider.prototype.getCategories = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].url5CoPhp + "api/categorias/");
    };
    RegisterProvider.prototype.getCep = function (cep) {
        return this.http.get('https://viacep.com.br/ws/' + cep + '/json/');
    };
    RegisterProvider.prototype.sendUser = function (user) {
        var tradingName = '*';
        if (user.tradingName != null && user.tradingName != "" && user.tradingName != " ") {
            tradingName = user.tradingName;
        }
        var body = {
            idusuario: 3,
            nomefantasia: tradingName,
            email: user.email,
            nomecontato: user.responsiblePerson,
            telefone: user.telephone,
            celular: user.cellphone,
            nome: user.cnpj.nome,
            endereco: user.cnpj.logradouro,
            numero: user.cnpj.numero,
            complemento: user.cnpj.complemento,
            bairro: user.cnpj.bairro,
            cidade: user.cnpj.municipio,
            estado: user.cnpj.uf,
            cnpj: user.cnpj.cnpj,
            cep: user.cnpj.cep,
            categoriafornecedor: user.categories.length >= 1 ? user.categories[0].idcategoriafornecedor : "",
            categoriafornecedor2: user.categories.length >= 2 ? user.categories[1].idcategoriafornecedor : null,
            categoriafornecedor3: user.categories.length == 3 ? user.categories[2].idcategoriafornecedor : null,
            site: user.site,
            cupom: user.coupon,
            observacao: user.observations,
        };
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header.append('Accept', '*/*');
        header.append('Content-Type', 'multipart/form-data');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].url5CoPhp + "api/fornecedor/", body, { headers: header, observe: 'response' });
    };
    RegisterProvider.prototype.saveUserPhoto = function (bytes, userId, type) {
        var header = {
            "Content-Type": "image/" + type,
        };
        console.log(header);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].urlFiles + "user/" + userId + '.' + type, bytes, { headers: header });
    };
    RegisterProvider.prototype.editUserPhoto = function (url, userId) {
        var body = {
            urlFoto: url
        };
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].url5CoWebApi + "v1/serviceprovider/mydata/edit/" + userId, body);
    };
    RegisterProvider.prototype.editUser = function (user) {
        var body = {
            nomeContato: user.responsiblePerson,
            site: user.site,
            telefone: user.telephone,
            celular: user.cellphone,
            sobre: user.about,
            cep: user.cep,
            numero: user.number,
            complemento: user.complement,
            endereco: user.address,
            bairro: user.neighbourhood,
            categorias: user.categories,
            ufs: [
                {
                    uf: user.state,
                    cidades: [user.city]
                }
            ]
        };
        console.log(body.categorias);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].url5CoWebApi + "v1/serviceprovider/mydata/edit/" + user.id, body);
    };
    RegisterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RegisterProvider);
    return RegisterProvider;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Urls; });
var Urls = {
    // HMG
    urlApiCnpj: "https://cors-anywhere.herokuapp.com/https://www.receitaws.com.br/",
    url5CoPhp: "https://cors-anywhere.herokuapp.com/https://hmg.otimiza.com/",
    url5CoWebApi: "https://5co-api-dev.azurewebsites.net/",
    urlObjects: "https://5co.dev.objects.universum.blue/",
    urlFiles: "https://5co.dev.files.universum.blue/",
    urlThreads: "https://5co-threads-dev.azurewebsites.net/",
};
//# sourceMappingURL=urls.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_urls__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThreadProvider = /** @class */ (function () {
    function ThreadProvider(http) {
        this.http = http;
    }
    ThreadProvider.prototype.getThreads = function (userId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].url5CoWebApi + 'v1/thread/serviceprovider/' + userId);
    };
    ThreadProvider.prototype.createThread = function (userId, supplierId) {
        var body = {
            id: userId + supplierId,
            threadId: userId + supplierId,
            userId1: userId,
            userId2: supplierId
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].urlThreads + 'threads', body);
    };
    ThreadProvider.prototype.getMessages = function (threadId, token) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].urlThreads + 'threads/' + threadId + '/messages?pageSize=10&token=' + token);
    };
    ThreadProvider.prototype.createMessage = function (clientId, providerId, message) {
        var body = {
            from: providerId,
            to: clientId,
            body: message,
            contentType: "text"
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].urlThreads + 'threads/' + clientId + providerId, body);
    };
    ThreadProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ThreadProvider);
    return ThreadProvider;
}());

//# sourceMappingURL=thread.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_urls__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginProvider = /** @class */ (function () {
    function LoginProvider(http) {
        this.http = http;
    }
    LoginProvider.prototype.auth = function (login) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Accept', '*/*');
        headers.append('Content-Type', 'multipart/form-data');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].url5CoWebApi + "v1/auth/service-provider", login, { headers: headers, observe: 'response' });
    };
    LoginProvider.prototype.userData = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_urls__["a" /* Urls */].url5CoWebApi + "v1/serviceprovider/mydata/" + id);
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_thread_thread__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chats_chat_list_chat_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications_notifications_list_notifications_list__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(177);
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








var RoutingPage = /** @class */ (function () {
    function RoutingPage(navCtrl, navParams, loading, atrCtrl, platform, loginProvider, threadProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.atrCtrl = atrCtrl;
        this.platform = platform;
        this.loginProvider = loginProvider;
        this.threadProvider = threadProvider;
    }
    RoutingPage.prototype.openProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, id;
            return __generator(this, function (_a) {
                loading = this.loading.create({
                    content: "Por favor, aguarde...",
                });
                loading.present();
                id = localStorage.getItem('userId');
                console.log(id);
                if (!id) {
                    this.navCtrl.popToRoot();
                }
                this.loginProvider.userData(id).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */], { user: data });
                                return [4 /*yield*/, loading.dismiss()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(error);
                                return [4 /*yield*/, loading.dismiss()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    RoutingPage.prototype.openNotifications = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__notifications_notifications_list_notifications_list__["a" /* NotificationsListPage */]);
                return [2 /*return*/];
            });
        });
    };
    RoutingPage.prototype.openChats = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, id;
            return __generator(this, function (_a) {
                loading = this.loading.create({
                    content: "Por favor, aguarde...",
                });
                loading.present();
                id = localStorage.getItem('userId');
                console.log(id);
                if (!id) {
                    this.navCtrl.popToRoot();
                }
                this.threadProvider.getThreads(id).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(data);
                                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chats_chat_list_chat_list__["a" /* ChatListPage */], { threads: data });
                                return [4 /*yield*/, loading.dismiss()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(error);
                                return [4 /*yield*/, loading.dismiss()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    RoutingPage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                alert = this.atrCtrl.create({
                    title: 'Aviso',
                    subTitle: 'Deseja fazer logout do aplicativo?',
                    buttons: [
                        {
                            text: 'Não',
                            role: 'cancel',
                            handler: function () {
                                console.log('No clicked');
                            }
                        },
                        {
                            text: 'Sim',
                            handler: function () {
                                console.log('Yes clicked');
                                localStorage.clear();
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                            }
                        }
                    ]
                });
                alert.present();
                return [2 /*return*/];
            });
        });
    };
    RoutingPage.prototype.closeApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.platform.exitApp();
                return [2 /*return*/];
            });
        });
    };
    RoutingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-routing',template:/*ion-inline-start:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/routing/routing.html"*/'<ion-header>\n	<ion-toolbar>\n		<ion-title>\n			<img src=\'../../assets/imgs/logo-header.png\' \n			style="display: unset; width: 20%; margin: 5px 10px 0px;"/>\n		</ion-title>\n	</ion-toolbar>\n</ion-header>\n\n<ion-content style="background-color: #172035;">\n	<ion-list style="padding: 0px 3%;">\n		<ion-card class="routing-card" (click)="openProfile()">\n			<img src="../../assets/imgs/icon-profile.png" class="routing-img"/>\n\n			<ion-item class="routing-item">\n				<ion-label class="wrap-text routing-label">\n					Perfil\n					<br>\n					<span class="routing-span">Confira seus dados</span>\n				</ion-label>\n			</ion-item>\n		</ion-card>\n\n		<ion-card class="routing-card" (click)="openNotifications()">\n			<img src="../../assets/imgs/icon-notification.png" class="routing-img"/>\n\n			<ion-item class="routing-item">\n				<ion-label class="wrap-text routing-label">\n          			Notificações\n					<br>\n					<span class="routing-span">Visualize suas notificações</span>\n				</ion-label>\n			</ion-item>\n		</ion-card>\n\n		<ion-card class="routing-card" (click)="openChats()">\n			<img src="../../assets/imgs/icon-chat.png" class="routing-img"/>\n\n			<ion-item class="routing-item">\n				<ion-label class="wrap-text routing-label">\n          			Chat\n					<br>\n					<span class="routing-span">Fale com seus clientes</span>\n				</ion-label>\n			</ion-item>\n		</ion-card>\n		\n		<ion-card class="routing-card" (click)="logout()">\n			<img src="../../assets/imgs/icon-exit.png" class="routing-img"/>\n\n			<ion-item class="routing-item">\n				<ion-label class="wrap-text routing-label">\n					Sair\n				</ion-label>\n			</ion-item>\n		</ion-card>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/routing/routing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_thread_thread__["a" /* ThreadProvider */]])
    ], RoutingPage);
    return RoutingPage;
}());

//# sourceMappingURL=routing.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_profile_register_1_register_1__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_routing__ = __webpack_require__(83);
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
        var user = localStorage.getItem('userId');
        if (user != null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__routing_routing__["a" /* RoutingPage */]);
        }
    }
    HomePage.prototype.goToRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_profile_register_1_register_1__["a" /* Register_1Page */]);
    };
    HomePage.prototype.goToLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/home/home.html"*/'<ion-content class="homeContent" padding padding-left>\n    <section>\n        <img src="../../assets/imgs/fiveco-digital-logo.png" />\n\n        <h3 class="homeTitle">Para Empresas Prestadoras</h3>\n        <h3 class="homeTitle">de Serviços Especializadas</h3>\n        <h3 class="homeTitle">em Condomínios</h3>\n\n        <div class="buttons">\n            <button (click)="goToLoginPage()" class="enterButton" ion-button full>Entrar</button>\n\n            <button (click)="goToRegisterPage()" class="registerButton" ion-button full>Cadastrar</button>\n        </div>\n    </section>\n</ion-content>'/*ion-inline-end:"/home/nycolas/source/repos/5codigital/service-provider-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.js.map