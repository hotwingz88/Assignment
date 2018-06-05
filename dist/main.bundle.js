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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'Angular';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_new_website_new_component__ = __webpack_require__("./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_list_website_list_component__ = __webpack_require__("./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_new_page_new_component__ = __webpack_require__("./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_page_page_list_page_list_component__ = __webpack_require__("./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_user_service_cilent__ = __webpack_require__("./src/app/services/user.service.cilent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_website_service_cilent__ = __webpack_require__("./src/app/services/website.service.cilent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__services_user_service_cilent__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_21__services_website_service_cilent__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_22__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_23__services_widget_service_client__["a" /* WidgetService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_new_website_new_component__ = __webpack_require__("./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__ = __webpack_require__("./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__ = __webpack_require__("./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__ = __webpack_require__("./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.ts");













// Import all other components here
var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\n\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t<div class=\"sw-90-width\">\n\t             <a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}\"><b>Edit Page</b></a>\n\t        </div>\n\t\t<button type=\"submit\" [disabled]=\"f.invalid\" form=\"pageForm\" class=\"btn sw-button-to-a sw-color-black float-right\" ><i class=\"fas fa-check\"></i></button>\n\t</nav>\n\t<div class=\"container-fluid\">\n\t\t<form id=\"pageForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t    <div class=\"form-group\">\n\t\t\t    <label><b>Name</b></label>\n\t\t\t    <input class=\"form-control\" required ngModel=\"{{page.name}}\" #name=\"ngModel\" type=\"text\" name=\"name\"\n\t\t\t\t   placeholder=\"Enter your page name...\" value=\"Blog Post\">\n\t\t   </div>\n\n\t\t    <div *ngIf=\"name.invalid && name.touched\" class=\"alert alert-warning\">Name Cannot be Empty</div>\n\n\t\t   <div class=\"form-group\">\n\t\t\t     <label><b>Description</b></label>\n\t\t\t    <input class=\"form-control\" ngModel=\"{{page.description}}\" #description=\"ngModel\" type=\"text\" name=\"description\"\n\t\t\t\t   placeholder=\"Enter your page description...\" value=\"Blog\">\n\t\t\t</div>\n\t\t\t<button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"f.invalid\">Update</button>\n\t\t\t<button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"remove()\">Delete</button>\t\n\t\t</form>\n\t</div>\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a routerLink=\"/user/{{uid}}\" class=\"sw-font-white float-right\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</footer>"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
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




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.page = _this.pageService.findPageById(_this.pid);
            _this.name = _this.page.name;
            _this.description = _this.page.description;
            console.log(_this.page);
        });
    };
    PageEditComponent.prototype.update = function () {
        console.log("update");
        this.name = this.pageForm.value.name;
        this.description = this.pageForm.value.description;
        var updatedPage = {
            _id: this.pid,
            name: this.name,
            description: this.pageForm.value.description,
            websiteId: this.wid
        };
        this.pageService.updatePage(this.pid, updatedPage);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
    };
    PageEditComponent.prototype.remove = function () {
        this.pageService.deletePage(this.pid);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], PageEditComponent.prototype, "pageForm", void 0);
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top  navbar-light sw-bg-grey\">\n\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\n\t<div class=\"sw-90-width\">\n\t     <a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\"><b>Page</b></a>\n\t</div>\n\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\"><i class=\"fas fa-plus\"></i></a>\n</nav>\n<div class=\"container-fluid\">\n\t<ul class=\"list-group list-group-flush\">\n\t\t<li class=\"list-group-item\" *ngFor=\"let page of pages\">\n\t\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}/widget\">{{page.name}}</a>\n\t\t\t<a class=\"float-right sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}\"><i class=\"fas fa-cog\"></i></a>\n\t\t</li>\n\t</ul>\n</div>\n<footer class=\"navbar fixed-bottom  navbar-light sw-bg-grey\">\n\t<div class=\"sw-full-width\">\n\t     <a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t</div>\n</footer>"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pages = _this.pageService.findPageByWebsiteId(_this.wid);
        });
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\n\t\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t<div class=\"sw-90-width\">\n\t        <a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website{{wid}}/page/new\"><b>New Page</b></a>\n\t    </div>\n\t\t<button [disabled]=\"f.invalid\" type=\"submit\" form=\"pageForm\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"btn sw-button-to-a sw-color-black float-right\" >\n\t\t\t<i class=\"fas fa-check\"></i>\n\t\t</button>\n\t</nav>\n\t<div class=\"container-fluid\">\n\t\t<form id=\"pageForm\" (ngSubmit)=\"create()\" #f=\"ngForm\">\n\t\t    <div class=\"form-group\">\n\t\t\t    <label><b></b></label>\n\t\t\t    <input class=\"form-control\" type=\"text\" name=\"name\" ngModel #name=\"ngModel\"\n\t\t\t\t   placeholder=\"Enter your page name...\">\n\t\t   </div>\n\t\t <div *ngIf=\"f.invalid && name.touched\" class=\"alert alert-warning\">Name Cannot be Empty</div>\n\t\t   <div class=\"form-group\">\n\t\t\t     <label><b>Description</b></label>\n\t\t\t    <input class=\"form-control\" type=\"text\" name=\"description\" ngModel #description=\"ngModel\"\n\t\t\t\t   placeholder=\"Enter your page description...\">\n\t\t\t</div>\n\t\t\t<button [disabled]=\"f.invalid\" class=\"btn btn-success btn-block\" type=\"submit\">Submit</button>\n\t\t\t<button class=\"btn btn-danger btn-block\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\">Cancel</button>\t\n\t\t</form>\n\t</div>\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a routerLink=\"/user/{{uid}}\" class=\"sw-color-black float-right\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</footer>\n"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
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




var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
    };
    PageNewComponent.prototype.create = function () {
        this.name = this.pageForm.value.name;
        this.description = this.pageForm.value.description;
        var newPage = {
            _id: "",
            name: this.name,
            websiteId: this.wid,
            description: this.description
        };
        console.log(newPage);
        this.pageService.createPage(this.wid, newPage);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t\t<h1>Login</h1>\n\t\t<div *ngIf=\"errorFlag\" class=\" alert alert-danger\">Invalid username or password</div>\n\t\t<form (ngSubmit)=\"login()\" #f=\"ngForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input class=\"form-control\" type=\"text\" \n\t\t\t\tname=\"username\" placeholder=\"username\" required ngModel #username = \"ngModel\">\n\t\t\t</div>\n\t\t\t<span  class=\"help-block\" *ngIf=\"username.invalid && username.touched\">Please enter username!</span>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input class=\"form-control\" type=\"password\" \n\t\t\t\tname=\"password\" placeholder=\"password\" required ngModel #password=\"ngModel\"\n\t\t\t\t>\n\t\t\t</div>\n\t\t\t<span class=\"alert\" *ngIf=\"password.invalid && password.touched\">Please enter password!</span>\n\t\t\t<button class=\"btn btn-primary btn-block\" [disabled]=\"f.invalid\" type=\"submit\">Login</button>\n\t\t\t<button class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</button>\n\t\t</form>\n</div>\t  "

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_cilent__ = __webpack_require__("./src/app/services/user.service.cilent.ts");
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




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByCredentials(this.username, this.password);
        console.log(user);
        if (user) {
            this.errorFlag = false;
            this.router.navigate(['user', user._id]);
        }
        else {
            this.errorFlag = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_cilent__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary fixed-top\">\n\t <a class=\"navbar-brand\" routerLink=\"user/{{uid}}\"><b>Profile</b></a>\n\t <button class=\"btn sw-color-white sw-button-to-a\" type=\"submit\" form=\"profileForm\" [disabled]=\"f.invalid\" ><i class=\"fas fa-check\"></i></button>\n\t</nav>\n\t<div class=\"container-fluid\">\n\t\t<div *ngIf=\"usernameTaken\" class=\"alert alert-danger\">Username is taken, please try another one.</div>\n\t\t<div *ngIf=\"submitSuccess\" class=\"alert alert-success\">Update successfully</div>\n\t\t<form (ngSubmit)=\"update()\" form=\"profileForm\" #f=\"ngForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"username\"><b>Username</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"username\" required ngModel=\"{{user.username}}\"#username=\"ngModel\" placeholder=\"example\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email\"><strong>Email</strong></label>\n\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\"\n\t\t\t\tngModel={{user.email}} #email=\"ngModel\" placeholder=\"example@email.com\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"firstName\"><strong>First name</strong></label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"firstName\"\n\t\t\t\tngModel={{user.firstName}} #firstName=\"ngModel\" placeholder=\"Alice\"> \n            </div>\n            <div class=\"form-group\"> \n     \t\t\t<label for=\"lastName\"><strong>Last name</strong></label>\n     \t\t\t<input type=\"text\" class=\"form-control\" name=\"lastName\"\n     \t\t\tngModel={{user.lastName}} #lastname=\"ngModel\" placeholder=\"Wang\">\n     \t\t\t<br>\n\t\t   \t<a class=\"btn btn-primary btn-block\" routerLink=\"/user/{{uid}}/website\">Websites</a>\n\t\t\t<a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Logout</a>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\t<!-- footer -->\n\t<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\n\t<div class=\"sw-full-width\">\n\t\t<a class=\"sw-color-white float-right\" ><i class=\"fas fa-user\"></i></a>\n\t</div>\n\t</nav>\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_cilent__ = __webpack_require__("./src/app/services/user.service.cilent.ts");
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




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params.subscribe(function info(params) {
            this.uid = params['uid'];
            this.user = this.userService.findUserById(this.uid);
            this.username = this.user.username;
            this.email = this.user.email;
            this.firstName = this.user.firstName;
            this.lastName = this.user.lastName;
            this.oldUsername = this.user.username;
        }.bind(this));
    };
    ProfileComponent.prototype.update = function () {
        this.username = this.profileForm.value.username;
        this.email = this.profileForm.value.email;
        this.firstName = this.profileForm.value.firstName;
        this.lastName = this.profileForm.value.lastName;
        //check if the new username was taken or the username was not changed
        var aUser = this.userService.findUserByUsername(this.username);
        if (aUser && this.oldUsername !== this.username) {
            this.usernameTaken = true;
            this.submitSuccess = false;
        }
        else {
            var updatedUser = {
                _id: this.user._id,
                username: this.username,
                password: this.user.password,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email
            };
            this.userService.updateUser(this.uid, updatedUser);
            this.usernameTaken = false;
            this.submitSuccess = true;
            console.log(this.userService.users);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_user_service_cilent__["a" /* UserService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\t<div class=\"container-fluid\">\n\t<h1>Register</h1>\n\t<div class=\"alert alert-danger\" *ngIf=\"usernameError\">\n\t\tUsername is taken, please try again\n\t</div>\n\t<div class=\"alert alert-danger\" *ngIf=\"passwordError\">\n\t\tTwo passwords are not matched!\n\t</div>\n\t<form (ngSubmit)=\"register()\" #f=\"ngForm\">\n\t\t<div class=\"form-group\">\n\t\t\t<input class=\"form-control\" type=\"text\" name=\"username\" required ngModel #username=\"ngModel\" placeholder=\"Username\">\n\t\t</div>\n\t\t<span class=\"alert\" *ngIf=\"username.invalid && username.touched\">enter Username!</span>\n\t\t<div class=\"form-group\">\n\t\t\t<input class=\"form-control\" type=\"password\" name=\"password\" required ngModel #password=\"ngModel\"\n\t\t\tplaceholder=\"Password\">\n\t\t</div>\n\t\t<span class=\"alert\" *ngIf=\"password.invalid && password.touched\">Please enter password!</span>\n\t\t<div class=\"form-group\">\n\t\t\t<input class=\"form-control\" type=\"password\" name=\"verifyPassword\" required ngModel #verifyPassword=\"ngModel\"\n\t\t\tplaceholder=\"Verify Password\">\n\t\t</div>\n\t\t<span class=\"alert\" *ngIf=\"verifyPassword.invalid && verifyPassword.touched\">Please verify Password!</span>\n\t\t<button class=\"btn btn-success btn-block\" type=\"submit\" [disabled]=\"f.invalid\">Register</button>\n\t\t<button class=\"btn btn-danger btn-block\" routerLink=\"/login\">Cancel</button>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_cilent__ = __webpack_require__("./src/app/services/user.service.cilent.ts");
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
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        console.log(this.password);
        console.log(this.verifyPassword);
        if (this.password !== this.verifyPassword) {
            this.passwordError = true;
            this.usernameError = false;
        }
        else {
            this.usernameError = false;
            this.passwordError = false;
            var user = this.userService.findUserByUsername(this.username);
            if (user) {
                this.usernameError = true;
            }
            else {
                this.usernameError = false;
                this.usernameError = false;
                var newUser = {
                    _id: "",
                    username: this.username,
                    password: this.password,
                    firstName: "",
                    lastName: "",
                    email: ""
                };
                this.userService.createUser(newUser);
                var id = this.userService.findUserByUsername(this.username)._id;
                this.router.navigate(['/user/' + id]);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_cilent__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar  -->\n\t<nav class=\" row navbar navbar-dark bg-primary fixed-top\">\n\t\t<!-- Left  Navbar -->\n\t\t<div class=\"col-md-4 d-none d-md-block\">\n\t\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website/{{wid}}\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t<a class=\"sw-color-white sw-left-padding\" routerLink=\"/user/{{uid}}/website/{{wid}}\"><b>Websites</b></a>\n\t\t\t<a class=\"sw-color-white float-right\" routerLink=\"/user/{{uid}}/website/new\"><i class=\"fas fa-plus\"></i></a>\n\t\t</div>\n\t\t<!-- Right Navbar -->\n\t\t<div class=\"col-md-8\">\n\t\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website/{{wid}}\"><b>Edit Website</b></a>\n\t\t\t<button class=\"btn sw-color-white float-right sw-button-to-a\" type=\"submit\" form=\"websiteForm\"><i class=\"fas fa-check\"></i></button>\n\t\t</div>\n\t</nav>\n\t<div class=\"row\">\n\t\t<!-- Left Website List -->\n\t\t<div class=\"col-sm-4 d-none d-md-block\">\n\t\t\t<div class=\"container-fluid\">\n\t \t\t\t<ul class=\"list-group\">\n\t\t\t\t\t<li class=\"list-group-item\" *ngFor = \"let website of websites\">\n\t\t\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n\t\t\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cogs\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- Right Form -->\n\t\t<div class=\"col-sm-8\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<form id=\"websiteForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label><b>Name</b></label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Enter your website name\" required ngModel={{website.name}} #name=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"alert alert-warning\" *ngIf=\"name.invalid && name.touched\">Name cannot be empty</span>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label><b>Description</b></label>\n\t\t\t\t\t\t<textarea rows=\"5\" class=\"form-control\" name=\"description\" placeholder=\"Describe your website here\" ngModel=\"{{website.description}}\" #description=\"ngModel\"></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button (click)=\"delete()\" type=\"button\" class=\"btn btn-danger\">Delete</button>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary float-right\">Update</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<footer class=\"navbar fixed-bottom  navbar-dark bg-primary\">\n\t<div class=\"sw-full-width\">\n\t     <a class=\"navbar-brand float-right\" routerLink=\"/user/:uid/123\"><i class=\"fas fa-user\"></i></a>\n\t</div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_cilent__ = __webpack_require__("./src/app/services/website.service.cilent.ts");
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




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.websites = _this.websiteService.findWebsitesByUser(_this.uid);
            _this.website = _this.websiteService.findWebsiteById(_this.wid);
            _this.name = _this.website.name;
            _this.description = _this.website.description;
        });
    };
    WebsiteEditComponent.prototype.update = function () {
        this.name = this.websiteForm.value.name;
        this.description = this.websiteForm.value.description;
        var updatedWeb = {
            _id: this.wid,
            name: this.name,
            developerId: this.uid,
            description: this.description
        };
        this.websiteService.updateWebsite(this.wid, updatedWeb);
        console.log(updatedWeb);
    };
    WebsiteEditComponent.prototype.delete = function () {
        this.websiteService.deleteWebsite(this.wid);
        this.router.navigate(['user', this.uid, 'website']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WebsiteEditComponent.prototype, "websiteForm", void 0);
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_cilent__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top  navbar-dark bg-primary\">\n\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-chevron-left\"></i></a>\n\t<div class=\"sw-90-width\">\n\t     <a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website\"><b>Websites</b></a>\n\t</div>\n\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website/new\"><i class=\"fas fa-plus\"></i></a>\n</nav>\n<!-- websites list -->\n<div class=\"container-fluid\">\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\" *ngFor = \"let website of websites\">\n\t\t\t<a  \n\t\t\trouterLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cogs\"></i></a>\n\t\t</li>\n\t</ul>\n</div>\n<footer class=\"navbar fixed-bottom  navbar-dark bg-primary\">\n\t<div class=\"sw-full-width\">\n\t     <a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_cilent__ = __webpack_require__("./src/app/services/website.service.cilent.ts");
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



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websites = _this.websiteService.findWebsitesByUser(_this.uid);
        });
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_cilent__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar  -->\n\t<nav class=\" row navbar navbar-dark bg-primary fixed-top\">\n\t\t<!-- Left  Navbar -->\n\t\t<div class=\"col-sm-4 d-none d-md-block\">\n\t\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t<a class=\"sw-color-white sw-left-padding\" routerLink=\"/user/{{uid}}/website\"><b>Websites</b></a>\n\t\t\t<a class=\"sw-color-white float-right\" routerLink=\"/user/{{uid}}/website/new\"><i class=\"fas fa-plus\"></i></a>\n\t\t</div>\n\t\t<!-- Right Navbar -->\n\t\t<div class=\"col-md-8\">\n\t\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website/new\"><b>New Website</b></a>\n\t\t\t<button class=\"btn sw-color-white float-right sw-button-to-a\"  type=\"submit\" form=\"websiteForm\" [disabled]=\"f.invalid\"><i class=\"fas fa-check\"></i></button>\n\t\t</div>\n\t</nav>\n\t<div class=\"row\">\n\t\t<!-- Left Website List -->\n\t\t<div class=\"col-md-4 d-none d-md-block\">\n\t\t\t<div class=\"container-fluid\">\n\t\t \t\t<ul class=\"list-group\">\n\t\t\t\t\t<li class=\"list-group-item\" *ngFor = \"let website of websites\">\n\t\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n\t\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cogs\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t    </div>\n\t\t</div>\n\t\t<!-- Right Form -->\n\t\t<div class=\"col-md-8\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<form id=\"websiteForm\" (ngSubmit)=\"create()\" #f=\"ngForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label><b>Name</b></label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Enter your website name\" required ngModel #name=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"alert alert-warning\" *ngIf=\"name.invalid && name.touched\">Name cannot be empty</span>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label><b>Description</b></label>\n\t\t\t\t\t\t<textarea rows=\"5\" class=\"form-control\" name=\"description\" placeholder=\"Describe your website here\" ngModel #description=\"ngModel\"></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a  routerLink=\"/user/{{uid}}/website\" class=\"btn btn-danger\">Cancel</a>\n\t\t\t\t\t<button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-success float-right\">Submit</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\n\t</div>\n\t<footer class=\"navbar fixed-bottom  navbar-dark bg-primary\">\n\t<div class=\"sw-full-width\">\n\t     <a class=\"navbar-brand float-right\" routerLink=\"/user/:uid\"><i class=\"fas fa-user\"></i></a>\n\t</div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_cilent__ = __webpack_require__("./src/app/services/website.service.cilent.ts");
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




var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websites = _this.websiteService.findWebsitesByUser(_this.uid);
        });
    };
    WebsiteNewComponent.prototype.create = function () {
        this.name = this.websiteForm.value.name;
        this.description = this.websiteForm.value.description;
        var newWebsite = {
            _id: "",
            name: this.name,
            developerId: "",
            description: this.description
        };
        this.websiteService.createWebsite(this.uid, newWebsite);
        this.router.navigate(['user', this.uid, 'website']);
        // user/123/website
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WebsiteNewComponent.prototype, "websiteForm", void 0);
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_cilent__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n  <nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\n    <a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><i class=\"fas fa-chevron-left\"></i></a>\n    <div class=\"sw-95-width\">\n      <a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><b>Choose Widget</b></a>\n    </div>\n  </nav>\n  <div class=\"container-fluid\">\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\"><button class=\"btn sw-button-to-a\" (click)=\"create('HEADING')\" >Header</button></li>\n      <li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Label</a></li>\n      <li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">HTML</a></li>\n      <li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Text Input</a></li>\n      <li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Link</a></li>\n      <li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Button</a></li>\n      <li class=\"list-group-item\"><button class=\"btn sw-button-to-a\" (click)=\"create('IMAGE')\">Image</button></li>\n      <li class=\"list-group-item\"><button class=\"btn sw-button-to-a\" (click)=\"create('YOUTUBE')\">YouTube</button></li>\n      <li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Data Table</a></li>\n      <li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Repeater</a></li>\n    </ul>\n  </div>\n  <!-- footer -->\n  <footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\n    <div class=\"sw-full-width\">\n      <a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
    };
    WidgetChooserComponent.prototype.create = function (type) {
        var newWidget = {
            _id: '',
            widgetType: type,
            pageId: this.pid
        };
        this.widgetService.createWidget(this.pid, newWidget);
        var wgid = this.widgetService.widgets[this.widgetService.widgets.length - 1]._id;
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', wgid]);
    };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n\t<!-- Heading -->\n\n\t<div *ngSwitchCase=\"'HEADING'\">\n\t\t<app-widget-header></app-widget-header>\n\t</div>\n\t<!-- Image -->\n\t<div *ngSwitchCase=\"'IMAGE'\">\n\t\t\n\t\t<app-widget-image></app-widget-image>\n\t</div>\n\t<!-- Youtube -->\n\t<div *ngSwitchCase=\"'YOUTUBE'\">\n\t\t<app-widget-youtube></app-widget-youtube>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
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



var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
            // console.log(this.widget);
        });
    };
    WidgetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-edit',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n  <nav class=\"navbar fixed-top  navbar-light sw-bg-grey\">\n    <a class=\"sw-color-black\"  routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><i class=\"fas fa-chevron-left\"></i></a>\n    <div class=\"sw-90-width\">\n     <a class=\"navbar-brand float-left\"routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\"><b>Widget Edit</b></a>\n   </div>\n <button [disabled]=\"f.invalid\" type=\"submit\" form=\"widgetForm\" class=\"btn sw-button-to-a sw-color-black float-right\" ><i class=\"fas fa-check\"></i></button>\n </nav>\n <!-- form -->\n <div class=\"container-fluid\">\n      <form id=\"widgetForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\n           <div class=\"form-group\">\n                <label><b>Name</b></label>\n                <input class=\"form-control\" type=\"text\" name=\"name\" ngModel={{widget.name}} #name=\"ngModel\" placeholder=\"Enter your widget name...\">\n           </div>\n\n\n           <div class=\"form-group\">\n                <label><b>Text</b></label>\n                <input class=\"form-control\" type=\"text\" name=\"text\" ngModel=\"{{widget-text}}\" required #text=\"ngModel\" placeholder=\"Enter your widget text...\">\n           </div>\n\n           <div class=\"alert alert-danger\" *ngIf=\"text.invalid && text.touched\">Text can't be empty!</div>\n           \n\n           <div class=\"form-group\">\n                <label><b>Size</b></label>\n                <input class=\"form-control\" type=\"number\" name=\"size\" ngModel=\"{{widget.size}}\" required #size=\"ngModel\" placeholder=\"Enter your widget text...\">\n           </div>\n\n           <div class=\"alert alert-danger\" *ngIf=\"size.invalid && size.touched\">Size can't be empty!</div>\n\n           <button [disabled]=\"f.invalid\"class=\"btn btn-primary btn-block\" type=\"submit\">Submit</button>\n           <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"remove()\">Delete</button>\n      </form>\n  </div>\n  <!-- footer -->\n  <footer class=\"navbar fixed-bottom  navbar-light sw-bg-grey\">\n    <div class=\"sw-full-width\">\n     <a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n   </div>\n </footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
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




var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
            console.log(_this.wgid);
        });
    };
    WidgetHeaderComponent.prototype.update = function () {
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.size = this.widgetForm.value.size;
        var updatedWidget = {
            _id: this.wgid,
            name: this.name,
            widgetType: this.widget.widgetType,
            pageId: this.pid,
            size: this.size,
            text: this.text,
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget);
        console.log(this.widgetService.widgets);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetHeaderComponent.prototype.remove = function () {
        this.widgetService.deleteWidget(this.wgid);
        console.log(this.widgetService.widgets);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WidgetHeaderComponent.prototype, "widgetForm", void 0);
    WidgetHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-header',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\" class=\"sw-black\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t<div class=\"sw-90-width\">\n\t\t\t<a class=\"navbar-brand float-left\"\n\t\t\t routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><b>Widget Image</b></a>\n\t\t</div>\n\t\t<button [disabled]=\"f.invalid\" type=\"submit\" form=\"widgetForm\" class=\" btn sw-button-to-a sw-black float-right\"><i class=\"fas fa-check\"></i></button>\n</nav>\n\t<div class=\"container-fluid\">\n\t\t<form id=\"widgetForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Name</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" ngModel=\"{{widget.name}}\" #name=\"ngModel\" placeholder=\"Enter your widget name...\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Text</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"text\" ngModel=\"{{widget.text}}\" #text=\"ngModel\" placeholder=\"Enter your widget text...\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>URL</b></label>\n\t\t\t\t<input class=\"form-control\" required ngModel=\"{{widget.url}}\" #url=\"ngModel\" type=\"text\" name=\"url\" class=\"form-control\" placeholder=\"https://www.image.com\">\n\t\t\t</div>\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"url.invalid && url.touched\">Url can't be empty!</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Width</b></label>\n\t\t\t\t<input class=\"form-control\" required ngModel=\"{{widget.width}}\" #width=\"ngModel\" type=\"text\" name=\"width\" class=\"form-control\" placeholder=\"100%\">\n\t\t\t</div>\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"width.invalid && width.touched\">Width can't be empty!</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Upload</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"file\" name=\"upload\" placeholder=\"100%\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<a class=\"btn btn-secondary btn-block\" href=\"#\">Upload Image</a>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<div>\n\t\t\t\t<button class=\"btn btn-primary btn-block\" routerLink=\"/user/:uid/website/:wid/page/:pid/widget\">Submit</button>\n\t\t\t\t<button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"remove()\">Delete</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\t<!-- footer -->\n\t<nav class=\"navbar navbar-dark sw-gray fixed-bottom\">\n\t\t<div class=\"sw-width\">\n\t\t\t<a class=\"sw-font-white float-right\" routerLink=\"/user/:uid\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</nav>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
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




var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
        });
    };
    WidgetImageComponent.prototype.remove = function () {
        this.widgetService.deleteWidget(this.wgid);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetImageComponent.prototype.update = function () {
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.url = this.widgetForm.value.url;
        this.width = this.widgetForm.value.width;
        var updatedWidget = {
            _id: this.wgid,
            name: this.name,
            text: this.text,
            url: this.url,
            width: this.width,
            pageId: this.pid,
            widgetType: this.widget.widgetType
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WidgetImageComponent.prototype, "widgetForm", void 0);
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light sw-bg-gray\">\n    <a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\" class=\"sw-black\"><i class=\"fas fa-chevron-left\"></i></a>\n    <div class=\"sw-90-width\">\n      <a class=\"navbar-brand float-left\"\n      routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><b>Widget Edit</b></a>\n    </div>\n    <button [disabled]=\"f.invalid\" type=\"submit\" form=\"widgetForm\" class=\"btn sw-button-to-a sw-color-black float-right\" ><i class=\"fas fa-check\"></i></button>\n  </nav>\n  <div class=\"container-fluid\">\n     <form id=\"widgetForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n       <label><b>Name</b></label>\n        <input class=\"form-control\" type=\"text\" name=\"name\" ngModel=\"{{widget.name}}\" #name=\"ngModel\" placeholder=\"Enter your widget name...\">\n      <div class=\"form-group\">\n        <label><b>Text</b></label>\n        <input class=\"form-control\" type=\"text\" name=\"text\" ngModel=\"{{widget.text}}\" #text=\"ngModel\" placeholder=\"Enter your widget text...\">\n      </div>\n      <div class=\"form-group\">\n        <label><b>URL</b></label>\n        <input class=\"form-control\" required ngModel=\"{{widget.url}}\" #url=\"ngModel\" type=\"text\" name=\"url\" class=\"form-control\" placeholder=\"https://www.image.com\">\n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"width.invalid && width.touched\">Width can't be empty!</div>\n      <div class=\"form-group\">\n        <label><b>Width</b></label>\n        <input class=\"form-control\" required ngModel=\"{{widget.width}}\" #width=\"ngModel\" type=\"text\" name=\"width\" class=\"form-control\" placeholder=\"100%\">\n      </div>\n       <button [disabled]=\"f.invalid\"class=\"btn btn-primary btn-block\" type=\"submit\">Submit</button>\n       <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"remove()\">Delete</button>\n    </form>\n  </div>\n  <!-- footer -->\n  <nav class=\"navbar navbar-dark sw-gray fixed-bottom\">\n    <div class=\"sw-full-width\">\n      <a routerLink=\"user/{{uid}}\"class=\"sw-font-white float-right\"><i class=\"fas fa-user\"></i></a>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
        });
    };
    WidgetYoutubeComponent.prototype.remove = function () { };
    WidgetYoutubeComponent.prototype.update = function () { };
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar fixed-top  navbar-light sw-bg-grey\">\n    <a class=\"sw-color-black\"  routerLink=\"/user/{{uid}}/website/{{wid}}/page\"><i class=\"fas fa-chevron-left\"></i></a>\n    <div class=\"sw-90-width\">\n        <a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><b>Widgets</b></a>\n    </div>\n    <a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><i class=\"fas fa-plus\"></i></a>\n</nav>\n<!-- Widgets  -->\n<div class=\"container-fluid\">\n    <div *ngFor=\"let widget of widgets\">\n        <!-- icons for each widget -->\n        <div class=\"sw-absolute-right sw-front\">\n            <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\"><i class=\"fas fa-cog\"></i></a>\n            <a href=\"#\"><i class=\"fas fa-bars\"></i></a>\n        </div> \n        <!-- content of each widget -->\n        <div [ngSwitch]=\"widget.widgetType\">\n            <!-- HEADING -->\n            <div *ngSwitchCase=\"'HEADING'\">\n                        <h1>HEADING</h1>\n                <div [ngSwitch]=\"widget.size\">\n                    <div *ngSwitchCase=\"1\">\n                        <h1>{{widget.text}}</h1>\n                    </div>\n                    <div *ngSwitchCase=\"2\">\n                        <h2>{{widget.text}}</h2>\n                    </div>\n                    <div *ngSwitchCase=\"3\">\n                        <h3>{{widget.text}}</h3>\n                    </div>\n                    <div *ngSwitchCase=\"4\">\n                        <h4>{{widget.text}}</h4>\n                    </div>\n                    <div *ngSwitchCase=\"5\">\n                        <h5>{{widget.text}}</h5>\n                    </div>\n                    <div *ngSwitchCase=\"6\">\n                        <h6>{{widget.text}}</h6>\n                    </div>\n                </div>\n            </div>\n            <!-- IMAGE -->\n            <div  *ngSwitchCase=\"'IMAGE'\">\n                <img [src]=\"widget.url\"\n                     [style.width]=\"widget.width\">\n            </div>\n            <!-- YOUTUBE -->\n            <div *ngSwitchCase=\"'YOUTUBE'\">\n                <div class=\"embed-responsive embed-responsive-16by9\">\n\n                    <iframe [src]=\"this.getYoutubeUrl(widget.url)\" [style.width]=\"widget.width\" frameborder=\"0\"\n                    allowfullscreen>\n                   </iframe>\n                </div>\n            </div>\n        </div>\n<!--    <div class=\"sw-absolute-right\">\n<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\"><i class=\"fas fa-cog\"></i></a>\n<a href=\"#\"><i class=\"fas fa-bars\"></i></a>\n</div> -->\n\n    </div>\n</div>\n\n<!-- footer -->\n<footer class=\"navbar fixed-bottom  navbar-light sw-bg-grey\">\n    <div class=\"sw-full-width\">\n        <a href=\"#\" class=\"btn btn-primary\">publish</a>\n        <a href=\"#\" class=\"btn btn-warning\">Preview</a>\n        <a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRoute, sanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgets = _this.widgetService.findWidgetsByPageId(_this.pid);
        });
    };
    WidgetListComponent.prototype.getYoutubeUrl = function (url) {
        var embedUrl = "https://www.youtube.com/embed/";
        var parsedUrl = url.split('/');
        // transfer video url into embed video url
        embedUrl += parsedUrl[parsedUrl.length - 1];
        // telling browser this src is safe
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// injecting service into module
var PageService = /** @class */ (function () {
    function PageService() {
        this.pages = [
            { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
            { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
            { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
        ];
    }
    //  adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
    PageService.prototype.createPage = function (websiteId, page) {
        page._id = Math.floor(Math.random() * Math.floor(1000000)).toString();
        page.websiteId = websiteId;
        this.pages.push(page);
        return page;
    };
    // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var result = [];
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i].websiteId === websiteId) {
                result.push(this.pages[i]);
            }
        }
        return result;
    };
    //  retrieves the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.findPageById = function (pageId) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageId) {
                return this.pages[i];
            }
        }
    };
    //  updates the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.updatePage = function (pageId, page) {
        var oldPage = this.findPageById(pageId);
        var index = this.pages.indexOf(oldPage);
        this.pages[index].name = page.name;
        this.pages[index].description = page.description;
    };
    //  removes the page from local pages array whose _id matches the pageId parameter
    PageService.prototype.deletePage = function (pageId) {
        var oldPage = this.findPageById(pageId);
        var index = this.pages.indexOf(oldPage);
        this.pages.splice(index, 1);
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.cilent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// injecting service into module
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com" },
            { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com" },
            { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com" },
            { _id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org" }
        ];
    }
    UserService.prototype.createUser = function (user) {
        user._id = Math.floor(Math.random() * Math.floor(1000000)).toString();
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        //   for (let x = 0; x < this.users.length; x++) {
        //     if (this.users[x].username === username) {  
        //       return this.users[x]; 
        //     }
        //   }
        // }
        return this.users.find(function (user) {
            return user.username === username;
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username && this.users[x].password === password) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.updateUser = function (userId, user) {
        var oldUser = this.findUserById(userId);
        var index = this.users.indexOf(oldUser);
        this.users[index].username = user.username;
        this.users[index].password = user.password;
        this.users[index].firstName = user.firstName;
        this.users[index].lastName = user.lastName;
        this.users[index].email = user.email;
    };
    UserService.prototype.deleteUser = function (userId) {
        var oldUser = this.findUserById(userId);
        var index = this.users.indexOf(oldUser);
        this.users.splice(index, 1);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.cilent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// injecting service into module
var WebsiteService = /** @class */ (function () {
    function WebsiteService() {
        this.websites = [
            { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
            { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
            { _id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },
            { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
            { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
            { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
            { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
            // new Website("789", "Chess", "234", "Lorem")
        ];
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website._id = Math.floor(Math.random() * Math.floor(1000000)).toString();
        website.developerId = userId;
        this.websites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var result = [];
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i].developerId === userId) {
                result.push(this.websites[i]);
            }
        }
        return result;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                return this.websites[i];
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var oldWeb = this.findWebsiteById(websiteId);
        var index = this.websites.indexOf(oldWeb);
        this.websites[index].name = website.name;
        this.websites[index].description = website.description;
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var web = this.findWebsiteById(websiteId);
        var index = this.websites.indexOf(web);
        this.websites.splice(index, 1);
    };
    WebsiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// injecting service into module
var WidgetService = /** @class */ (function () {
    function WidgetService() {
        this.widgets = [
            { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO" },
            { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
            { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "http://wac.2f9ad.chicdn.net/802F9AD/u/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=46" },
            { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>" },
            { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
            { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/4KcMdH8qiuk" },
            { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>" }
        ];
    }
    // adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = Math.floor(Math.random() * Math.floor(100000)).toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    // retrieves the widgets in local widgets array whose pageId matches the parameter pageId 
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var result = [];
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i].pageId === pageId) {
                result.push(this.widgets[i]);
            }
        }
        return result;
    };
    // retrieves the widget in local widgets array whose _id matches the widgetId parameter 
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetId) {
                return this.widgets[i];
            }
        }
    };
    // updates the widget in local widgets array whose _id matches the widgetId parameter 
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var oldWidget = this.findWidgetById(widgetId);
        var index = this.widgets.indexOf(oldWidget);
        this.widgets[index].size = widget.size;
        this.widgets[index].text = widget.text;
        this.widgets[index].width = widget.width;
        this.widgets[index].url = widget.url;
    };
    // removes the widget from local widgets array whose _id matches the widgetId parameter 
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var oldWidget = this.findWidgetById(widgetId);
        var index = this.widgets.indexOf(oldWidget);
        this.widgets.splice(index, 1);
    };
    WidgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WidgetService);
    return WidgetService;
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




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
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