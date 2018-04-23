webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.login = function (user) {
        return this.http.post('http://13.95.214.253:3000/auth/login', user);
    };
    ApiService.prototype.addUser = function (userr) {
        // console.log(userr);
        return (this.http.post('http://localhost:3000/auth/register', userr));
    };
    ApiService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    ApiService.prototype.saveToken = function (t) {
        localStorage.setItem('token', t);
    };
    ApiService.prototype.checkToken = function () {
        if (localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            var jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
            //  console.log(jwtHelper.decodeToken(token));
            // return true;
            return !jwtHelper.isTokenExpired(token);
        }
        else {
            return false;
        }
    };
    ApiService.prototype.getTodosById = function () {
        return (this.http.get('http://localhost:3000/api/todos/' + this.getUserId()));
    };
    ApiService.prototype.getTodoByIndex = function (index) {
        return (this.http.get('http://localhost:3000/api/todos/' + this.getUserId() + '/' + index));
    };
    ApiService.prototype.updateTodo = function (todo, index) {
        return (this.http.put('http://localhost:3000/api/todos/' + this.getUserId() + '/' + index, todo));
    };
    ApiService.prototype.addTodo = function (todo) {
        // console.log(userr);
        return (this.http.post('http://localhost:3000/api/todos/' + this.getUserId(), todo));
    };
    ApiService.prototype.getUserId = function () {
        if (localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            var jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
            return jwtHelper.decodeToken(token)._id;
        }
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_todo_component__ = __webpack_require__("./src/app/todo/todo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'todo/:index',
        component: __WEBPACK_IMPORTED_MODULE_6__todo_todo_component__["a" /* TodoComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["b" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard__["a" /* AuthGuard */]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_todo_component__ = __webpack_require__("./src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["b" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__todo_todo_component__["a" /* TodoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* DialogOverviewExampleDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["e" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* DialogOverviewExampleDialogComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        // if (!localStorage.getItem('token')) {
        if (!this.apiService.checkToken()) {
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/dialog-overview-example-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Todo</h1>\r\n<div mat-dialog-content>\r\n  <form class=\"example-form\" [formGroup]=\"homeForm\" (ngSubmit)=\"getFormValue(homeForm)\">\r\n    <mat-card-content>\r\n        <div class=\"example-container\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Title\" formControlName=\"title\" type=\"text\" [(ngModel)]=\"todo.title\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Description\" formControlName=\"description\" type=\"text\" [(ngModel)]=\"todo.description\">\r\n            </mat-form-field>\r\n\r\n            <!--\r\n              <mat-form-field>\r\n              <input matInput placeholder=\"Date\" formControlName=\"date\" type=\"text\" [(ngModel)]=\"todo.date\">\r\n            </mat-form-field>\r\n          -->\r\n            <!--\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Done\" formControlName=\"done\" type=\"text\" [(ngModel)]=\"todo.done\">\r\n            </mat-form-field>\r\n            -->\r\n\r\n\r\n              <mat-radio-group formControlName=\"done\" [(ngModel)]=\"todo.done\">\r\n                  <mat-radio-button [value]=\"true\">true</mat-radio-button>\r\n                  <mat-radio-button [value]=\"false\">false</mat-radio-button>\r\n              </mat-radio-group>\r\n              <!--\r\n                <div>\r\n                <mat-checkbox formControlName=\"done\"  [(ngModel)]=\"todo.done\" [value]=\"true\" >true</mat-checkbox>\r\n              </div>\r\n              <div>\r\n                <mat-checkbox formControlName=\"done\"  [(ngModel)]=\"todo.done\" [value]=\"false\" >false</mat-checkbox>\r\n              </div>\r\n            -->\r\n            <div mat-dialog-actions>\r\n                <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n                <button mat-button (click)=\"getFormValue(homeForm)\" [mat-dialog-close]=\"todo\" cdkFocusInitial>Add</button>\r\n            </div>\r\n        </div>\r\n    </mat-card-content>\r\n  </form>\r\n</div>\r\n\r\n\r\n\r\n <!-- <mat-form-field>\r\n\r\n\r\n    <input matInput [(ngModel)]=\"data.animal\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\r\n</div>\r\n\r\n\r\n-->\r\n"

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.container-card{\r\n  display: table-cell;\r\n  vertical-align: middle;\r\npadding-left: 170px;\r\n  margin: auto;\r\n  width: 1000px;\r\n}\r\n.example-card {\r\n  width: 700px;\r\n padding: 50px;\r\n  margin: auto;\r\n}\r\n.title{\r\n  color:deeppink;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.btn_log{\r\n  text-align:end;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div align=\"left\">  <button mat-button type=\"submit\" (click)=\"Logout()\">Logout</button></div>\n<div class=\"title\">\n  <button  (click)=\"openDialog()\"><i class=\"material-icons\">add_circle</i></button>\n</div>\n<div *ngFor= \"let todo of todos; index as i;\">\n  <a routerLink='/todo/{{i}}'> Title : {{ todo.title}}</a>\n  <p> Description : {{ todo.description}}</p>\n  <p> Done : {{ todo.done}}</p>\n  </div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogOverviewExampleDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiService, router, dialog) {
        this.apiService = apiService;
        this.router = router;
        this.dialog = dialog;
        // todos = [];
        this.todos = { title: '', description: '', date: new Date(), done: '' };
    }
    HomeComponent.prototype.getTodos = function () {
        var _this = this;
        this.apiService.getTodosById().subscribe(function (res) {
            _this.todos = res.json().data;
            console.log(_this.todos);
        });
    };
    HomeComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
            width: '300px',
            data: { name: 'this.name', animal: 'this.animal' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.router.navigateByUrl('/');
            _this.ngOnInit();
            // this.animal = result;
        });
    };
    HomeComponent.prototype.Logout = function () {
        this.apiService.logout();
        this.router.navigateByUrl('/login');
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */]])
    ], HomeComponent);
    return HomeComponent;
}());

var DialogOverviewExampleDialogComponent = /** @class */ (function () {
    function DialogOverviewExampleDialogComponent(router, apiService, dialogRef, data) {
        this.router = router;
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.todo = { title: '', description: '', date: '', done: '' };
        this.homeForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required),
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required),
            done: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required)
        });
    }
    DialogOverviewExampleDialogComponent.prototype.getFormValue = function (f) {
        console.log(f.value);
        // console.log(f.valid);
        var todos1 = { title: f.value.title, description: f.value.description, date: new Date(), done: f.value.done };
        this.apiService.addTodo(todos1).subscribe(function (res) {
            // console.log(res.json().data);
            if (res.json().status === 401) {
                // this.router.navigateByUrl('/login');
                console.log(res.json().message);
            }
            else {
                // let token = res.json().data;
                // this.apiService.saveToken(token);
                // this.router.navigateByUrl('/login');
                // this.router.navigateByUrl('/');
                console.log(res);
            }
        });
    };
    DialogOverviewExampleDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-overview-example-dialog',
            template: __webpack_require__("./src/app/home/dialog-overview-example-dialog.html"),
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object])
    ], DialogOverviewExampleDialogComponent);
    return DialogOverviewExampleDialogComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".body{\r\n  background-color: grey;\r\nposition: absolute;\r\ndisplay: table;\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n.example-card {\r\n  max-width: 400px;\r\n padding: 50px;\r\n  margin: auto;\r\n}\r\n.container-card{\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n.btn_pt{\r\n  text-align: center;\r\n}\r\n.btn_rg{\r\n  text-align: center;\r\n  color: darkblue;\r\n}\r\n.title{\r\n  color: darkblue;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.body{\r\n\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container-card\">\n    <mat-card class=\"example-card\">\n      <div class =\"title\">\n\n\n          <h1> Sign In </h1>\n    </div>\n\n    <form class=\"example-form\" [formGroup]= \"loginForm\" (ngSubmit)=\"submit(loginForm)\">\n      <mat-card-content>\n\n\n          <mat-form-field class=\"example-full-width\">\n              <input  type =\"email\" name=\"email\" matInput placeholder=\"Enter your email\"  formControlName = \"email\">\n\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n              <input  type =\"password\" name=\"password\" matInput placeholder=\"Enter your password\"  formControlName = \"password\">\n\n          </mat-form-field>\n          <div class=\"btn_rg\">\n          <button mat-raised-button color=\"primary\"  type =\"submit\"  >Login</button>\n          </div>\n\n      </mat-card-content>\n    </form>\n      <mat-card-actions class =\"btn_pt\">\n        <a  routerLink=\"/register\"> Register ? </a>\n\n      </mat-card-actions>\n    </mat-card>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.email = '';
        this.password = '';
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].minLength(5)])
        });
    }
    LoginComponent.prototype.submit = function (f) {
        var _this = this;
        console.log(f.value);
        if (f.valid) {
            this.apiService.login(f.value).subscribe(function (res) {
                console.log(res.json().data);
                var token = res.json().data.token;
                _this.apiService.saveToken(token);
                _this.router.navigateByUrl('');
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatStepperModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatStepperModule */]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.container-card {\r\n  margin: 100px;\r\n\r\n\r\n}\r\n.example-card {\r\n  max-width: 400px;\r\n  margin: auto;\r\n  padding: 50px;\r\n\r\n\r\n}\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.centerClass {\r\ndisplay:-webkit-box;\r\ndisplay:-ms-flexbox;\r\ndisplay:flex;\r\n-webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n-webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-card\">\n<mat-card class=\"example-card\">\n\n  <mat-card-header  class=\"centerClass\">\n    <div > Register</div>\n  </mat-card-header>\n<form class=\"example-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"getFormValue(registerForm)\">\n  <mat-card-content>\n      <div class=\"example-container\">\n          <mat-form-field>\n            <input matInput placeholder=\"Name\" formControlName=\"name\" type=\"text\">\n            <mat-error *ngIf=\"registerForm.controls['name'].invalid\"> {{getErrorMessage(registerForm.controls['name'])}}</mat-error>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput placeholder=\"Last Name\" formControlName=\"lastname\" type=\"text\">\n            <mat-error *ngIf=\"registerForm.controls['lastname'].invalid\"> {{getErrorMessage(registerForm.controls['lastname'])}}</mat-error>\n          </mat-form-field>\n\n          <mat-form-field>\n              <input matInput placeholder=\"E-mail\" formControlName=\"email\" type=\"email\">\n              <mat-error *ngIf=\"registerForm.controls['email'].invalid\"> {{getErrorMessage(registerForm.controls['email'])}}</mat-error>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\">\n                <mat-error *ngIf=\"registerForm.controls['password'].invalid\"> {{getErrorMessage(registerForm.controls['password'])}}</mat-error>\n              </mat-form-field>\n\n              <button mat-button type=\"submit\" [disabled]=\"registerForm.invalid\">Validate</button>\n              <a align = \"center\" routerLink='/login'>I have an account</a>\n            </div>\n  </mat-card-content>\n</form>\n  <div align=\"center\">\n\n</div>\n</mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(5)])
        });
    }
    RegisterComponent.prototype.getFormValue = function (f) {
        var _this = this;
        if (f.valid) {
            // console.log(f.value);
            // console.log(f.valid);
            this.apiService.addUser(f.value).subscribe(function (res) {
                // console.log(res.json().data);
                if (res.json().status === 401) {
                    _this.router.navigateByUrl('/login');
                    console.log(res.json().message);
                }
                else {
                    var token = res.json().data;
                    _this.apiService.saveToken(token);
                    // this.router.navigateByUrl('/login');
                    _this.router.navigateByUrl('');
                }
                console.log(res.status);
            });
        }
    };
    RegisterComponent.prototype.getErrorMessage = function (f) {
        return f.hasError('required') ? 'You must enter a value' :
            f.hasError('email') ? 'Not a valid email' :
                f.hasError('minlength') ? 'Password must contain at least 5 characters' :
                    '';
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div >\n  <p> Title : {{ todo?.title }}</p>\n  <p> Description : {{ todo?.description }}</p>\n  <p> Date : {{ todo?.date }}</p>\n  <p> Done : {{ todo?.done }}</p>\n  </div>\n-->\n  <ol>\n    <li>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"todo.title\" placeholder=\"Title\">\n      </mat-form-field>\n    </li>\n    <li>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"todo.description\" placeholder=\"Description\">\n      </mat-form-field>\n    </li>\n    <li>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"todo.date\" placeholder=\"Date\">\n      </mat-form-field>\n    </li>\n    <li>\n\n      <mat-radio-group [(ngModel)]=\"todo.done\">\n            <mat-radio-button  value=\"true\">true</mat-radio-button>\n            <mat-radio-button  value=\"false\">false</mat-radio-button>\n          </mat-radio-group>\n\n      <!--\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"todo.done\" placeholder=\"Done\">\n      </mat-form-field>\n      -->\n    </li>\n    <li>\n      <button mat-raised-button (click)=\"editTodo()\">Edit</button>\n    </li>\n  </ol>\n"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = /** @class */ (function () {
    function TodoComponent(apiService, route) {
        var _this = this;
        this.apiService = apiService;
        this.route = route;
        this.todo = { title: '', description: '', date: '', done: '' };
        this.index = String;
        this.route.params.subscribe(function (params) { _this.index = params.index; });
    }
    TodoComponent.prototype.editTodo = function () {
        console.log(this.todo);
        this.apiService.updateTodo(this.todo, this.index).subscribe(function (res) { return console.log(res); });
    };
    TodoComponent.prototype.getTodo = function () {
        var _this = this;
        this.apiService.getTodoByIndex(this.index).subscribe(function (res) {
            _this.todo = res.json();
            console.log(res);
        });
    };
    TodoComponent.prototype.ngOnInit = function () {
        this.getTodo();
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__("./src/app/todo/todo.component.html"),
            styles: [__webpack_require__("./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map