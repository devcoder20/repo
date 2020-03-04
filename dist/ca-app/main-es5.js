(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/finalize/finalize.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/finalize/finalize.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>finalize comp TODO!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/formA/form/form.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/formA/form/form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"row\">\n      <div class=\"col-75\">\n        <label [for]=\"fname\">First Name</label><br />\n        <input type=\"text\" formControlName=\"firstName\" [id]=\"firstName\" class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" pattern=\"[a-zA-Z0-9\\s]+\" required\n          placeholder=\"First Name\" #firstName\n          attr.aria-describedby=\"{{firstName + required}} {{firstName + pattern}}\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.firstName.errors.required\" [id]=\"firstName + 'required'\">First Name is required</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-75\">\n        <label for=\"lname\">Last Name</label><br />\n        <input type=\"text\" id=\"lastName\" name=\"lastName\" placeholder=\"Last Name\" class=\"form-control\" required\n          formControlName=\"lastName\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\">\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-75\">\n        <label for=\"Phone\">Email</label><br />\n        <input type=\"email\" id=\"email\" placeholder=\"YourId@email.com\" formControlName=\"email\" class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n          <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-75\">\n        <label for=\"Phone\">Phone</label><br />\n        <input type=\"password\" id=\"phone\" placeholder=\"(123) 456-7890\" formControlName=\"phone\" class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\n        <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.phone.errors.required\">Phone is required</div>\n          <div *ngIf=\"f.phone.errors.minlength\">Phone must be at least 10 digits</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <br />\n      <button type=\"submit\">Submit Info</button>\n\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <a href=\"#default\" class=\"logo\">\n      <img src=\"/assets/img/anylogo.jpg\" alt=\"logo\">\n  </a>\n  <!-- <div class=\"header-right\">\n    <a class=\"active\" href=\"#home\">Info</a>\n    <a href=\"#contact\">Find</a>\n    <a href=\"#about\">Details</a>\n  </div> -->\n\n  <div class=\"header-right\">\n    <a routerLinkActive=\"active\" \n       routerLink=\"/info\">Info</a> \n\n    <a routerLinkActive=\"active\" \n       routerLink=\"/find\">Find</a> \n\n    <a routerLinkActive=\"active\" \n      routerLink=\"/final\">Final</a> \n      \n  </div>\n\n</div>\n\n<div style=\"padding-left:20px\">\n  <h4>Dev</h4>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\n  <div class=\"search-form\">\n        <!-- <input type=\"text\" placeholder=\"Search...\" /> -->\n     \n        <form #newUserForm=\"ngForm\" (ngSubmit)=\"onSubmit(newUserForm)\">\n\n          <input type=\"text\" placeholder=\"Search\"\n                 required \n                 [(ngModel)]=\"vimNumber\" name=\"vimNumber\"\n                 #pickedName=\"ngModel\">\n          <div *ngIf=\"!pickedName.valid && pickedName.touched\">\n            Enter the Vim Number\n          </div>\n          <button type=\"submit\" >Search</button>\n        </form>\n    </div>\n</div>\n\n\n<div class=\"card\">\n  Search result:\n\n  <img src=\"/assets/img/merc.png\" alt=\"Car Image\"> <span class=\"vehicleName\">{{ vehicle }}</span>\n  <!-- <ul>\n    <li *ngFor= \"let item of vehicleObj.data\">\n        <img src=\"/assets/img/merc.png\" alt=\"Car Image\"> <span class=\"vehicleName\">{{ vehicle }}</span>\n        <img src= vehicleObj.data.image alt=\"Car Image\"> <span class=\"vehicleName\">{{ vehicle }}</span>\n       </li>\n  </ul> -->\n\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ca-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _formA_form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formA/form/form.component */ "./src/app/formA/form/form.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _finalize_finalize_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./finalize/finalize.component */ "./src/app/finalize/finalize.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");














var routes = [
    { path: 'info', component: _formA_form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"] },
    { path: 'find', component: _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"] },
    { path: 'final', component: _finalize_finalize_component__WEBPACK_IMPORTED_MODULE_11__["FinalizeComponent"] },
    { path: '**', redirectTo: 'info' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _formA_form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
                _finalize_finalize_component__WEBPACK_IMPORTED_MODULE_11__["FinalizeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/finalize/finalize.component.scss":
/*!**************************************************!*\
  !*** ./src/app/finalize/finalize.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsaXplL2ZpbmFsaXplLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/finalize/finalize.component.ts":
/*!************************************************!*\
  !*** ./src/app/finalize/finalize.component.ts ***!
  \************************************************/
/*! exports provided: FinalizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizeComponent", function() { return FinalizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FinalizeComponent = /** @class */ (function () {
    function FinalizeComponent() {
    }
    FinalizeComponent.prototype.ngOnInit = function () {
    };
    FinalizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finalize',
            template: __webpack_require__(/*! raw-loader!./finalize.component.html */ "./node_modules/raw-loader/index.js!./src/app/finalize/finalize.component.html"),
            styles: [__webpack_require__(/*! ./finalize.component.scss */ "./src/app/finalize/finalize.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FinalizeComponent);
    return FinalizeComponent;
}());



/***/ }),

/***/ "./src/app/formA/form/form.component.scss":
/*!************************************************!*\
  !*** ./src/app/formA/form/form.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style inputs, select elements and textareas */\ninput,\nselect,\ntextarea {\n  width: 60%;\n  padding: 15px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  resize: vertical;\n  float: left;\n  margin-left: 22em;\n}\n/* Style the label to display next to the inputs */\nlabel {\n  font-family: fantasy;\n  padding: 11px 53px 13px 0;\n  display: inline-block;\n}\n/* Style the submit button */\nbutton {\n  background-color: #4caf50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  float: left;\n  margin: 3em 32em 2em 34em;\n}\n/* Style the container */\n.form-container {\n  width: 100%;\n  text-align: center;\n  background-color: #ffffff;\n  margin-top: 4rem;\n}\nform {\n  display: inline-block;\n  border-radius: 5px;\n  margin: 0 auto;\n  padding: 20px;\n  border: 2px solid #a6a6a6;\n  background-color: #f2f2f2;\n}\n.invalid-feedback {\n  color: #ff0000;\n  font-family: monospace;\n}\n/* Floating column for labels: 25% width */\n.col-25 {\n  float: left;\n  width: 25%;\n  margin-top: 6px;\n}\n/* Floating column for inputs: 75% width */\n.col-75 {\n  float: left;\n  width: 75%;\n  margin-top: 6px;\n  margin-bottom: 8px;\n}\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .col-25,\n.col-75,\ninput[type=submit] {\n    width: 100%;\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxseS9Eb2N1bWVudHMvR2l0SHViL3JlcG8vc3JjL2FwcC9mb3JtQS9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvcm1BL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBQTtBQUNBOzs7RUFHRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0Y7QURFQSxrREFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURFQSw0QkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQ0Y7QURFQSx3QkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NGO0FERUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7QURFQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQ0EsMENBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0VGO0FEQ0EsMENBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUY7QURDQSxtQ0FBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDRUY7QURDQSwrSUFBQTtBQUNBO0VBQ0U7OztJQUdFLFdBQUE7SUFDQSxhQUFBO0VDRUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1BL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIGlucHV0cywgc2VsZWN0IGVsZW1lbnRzIGFuZCB0ZXh0YXJlYXMgKi9cbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjJlbTtcbn1cblxuLyogU3R5bGUgdGhlIGxhYmVsIHRvIGRpc3BsYXkgbmV4dCB0byB0aGUgaW5wdXRzICovXG5sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xuICBwYWRkaW5nOiAxMXB4IDUzcHggMTNweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIFN0eWxlIHRoZSBzdWJtaXQgYnV0dG9uICovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogM2VtIDMyZW0gMmVtIDM0ZW07XG59XG5cbi8qIFN0eWxlIHRoZSBjb250YWluZXIgKi9cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDRyZW07XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhNmE2YTY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG4vLyBmb3JtIEVycm9yXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuLyogRmxvYXRpbmcgY29sdW1uIGZvciBsYWJlbHM6IDI1JSB3aWR0aCAqL1xuLmNvbC0yNSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi8qIEZsb2F0aW5nIGNvbHVtbiBmb3IgaW5wdXRzOiA3NSUgd2lkdGggKi9cbi5jb2wtNzUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29sLTI1LFxuICAuY29sLTc1LFxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG4iLCIvKiBTdHlsZSBpbnB1dHMsIHNlbGVjdCBlbGVtZW50cyBhbmQgdGV4dGFyZWFzICovXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDIyZW07XG59XG5cbi8qIFN0eWxlIHRoZSBsYWJlbCB0byBkaXNwbGF5IG5leHQgdG8gdGhlIGlucHV0cyAqL1xubGFiZWwge1xuICBmb250LWZhbWlseTogZmFudGFzeTtcbiAgcGFkZGluZzogMTFweCA1M3B4IDEzcHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKiBTdHlsZSB0aGUgc3VibWl0IGJ1dHRvbiAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDNlbSAzMmVtIDJlbSAzNGVtO1xufVxuXG4vKiBTdHlsZSB0aGUgY29udGFpbmVyICovXG4uZm9ybS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjYTZhNmE2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG4vKiBGbG9hdGluZyBjb2x1bW4gZm9yIGxhYmVsczogMjUlIHdpZHRoICovXG4uY29sLTI1IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLyogRmxvYXRpbmcgY29sdW1uIGZvciBpbnB1dHM6IDc1JSB3aWR0aCAqL1xuLmNvbC03NSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2wtMjUsXG4uY29sLTc1LFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/formA/form/form.component.ts":
/*!**********************************************!*\
  !*** ./src/app/formA/form/form.component.ts ***!
  \**********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.getId();
        this.formValidations();
    };
    FormComponent.prototype.formValidations = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]]
        });
    };
    Object.defineProperty(FormComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    };
    FormComponent.prototype.getId = function () {
        this.fname = this.prefix + 'firstName';
    };
    FormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FormComponent.prototype, "prefix", void 0);
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/formA/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/formA/form/form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  overflow: hidden;\n  background-color: burlywood;\n  padding: 20px 10px;\n  border-bottom: 2px solid black;\n}\n\nimg {\n  height: 70px;\n  width: auto;\n}\n\nh4 {\n  font-family: fantasy;\n  background: #e6e6e6;\n  padding: 2em;\n  margin: 0em -1em 0em -2em;\n}\n\n.header a {\n  float: left;\n  color: black;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px;\n}\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.header a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n.header a.active {\n  background-color: dodgerblue;\n  color: white;\n}\n\n.header-right {\n  float: right;\n}\n\n@media screen and (max-width: 500px) {\n  .header a {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n\n  .header-right {\n    float: none;\n    position: absolute;\n    margin: 1em 0em 0em 45em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxseS9Eb2N1bWVudHMvR2l0SHViL3JlcG8vc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQ0NGOztFREVBO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0Esd0JBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59XG5cbmltZyB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIHBhZGRpbmc6IDJlbTtcbiAgbWFyZ2luOiAwZW0gLTFlbSAwZW0gLTJlbTtcbn1cblxuLmhlYWRlciBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmhlYWRlciBhLmxvZ28ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5oZWFkZXIgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXItcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5oZWFkZXIgYSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5oZWFkZXItcmlnaHQge1xuICAgIGZsb2F0OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IDFlbSAwZW0gMGVtIDQ1ZW07XG4gIH1cbn1cbiIsImhlYWRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59XG5cbmltZyB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIHBhZGRpbmc6IDJlbTtcbiAgbWFyZ2luOiAwZW0gLTFlbSAwZW0gLTJlbTtcbn1cblxuLmhlYWRlciBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmhlYWRlciBhLmxvZ28ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5oZWFkZXIgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXItcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5oZWFkZXIgYSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5oZWFkZXItcmlnaHQge1xuICAgIGZsb2F0OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IDFlbSAwZW0gMGVtIDQ1ZW07XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  border: 2px solid #007bff;\n  margin: 5rem 0rem 0rem 26rem;\n  overflow: auto;\n  width: 50%;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n}\n\n.search input[type=text] {\n  border: 0px;\n  width: 67%;\n  padding: 10px 10px;\n  font-variant: normal;\n  font-size: x-large;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.search input[type=text]:focus {\n  outline-color: #719ece;\n  box-shadow: 0 0 48em #719ece;\n  padding: 15px 81px;\n}\n\nbutton {\n  border: 0px;\n  background: none;\n  background-color: #007bff;\n  color: #fff;\n  float: right;\n  padding: 20px;\n  border-top-right-radius: 5px;\n  -moz-border-radius-top-right: 5px;\n  -webkit-border-radius-top-right: 5px;\n  border-bottom-right-radius: 5px;\n  -moz-border-radius-bottom-right: 5px;\n  -webkit-border-radius-bottom-right: 5px;\n  cursor: pointer;\n  font-variant: normal;\n  font-size: large;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n@media only screen and (min-width: 150px) and (max-width: 780px) {\n  .search {\n    width: 95%;\n    margin: 0 auto;\n  }\n}\n\n.card {\n  background: #e6e6e6;\n  margin: top;\n  width: 29%;\n  text-align: center;\n  min-height: 12em;\n  border-radius: 5px;\n  margin: 5rem 0rem 0rem 35rem;\n  display: flex;\n  flex-direction: column;\n}\n\nimg {\n  height: 7em;\n  width: 10em;\n  border-radius: 50%;\n  position: absolute;\n  margin: 3em 0em 0em 15em;\n}\n\n.vehicleName {\n  margin: 3em 0em 0em -16em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxseS9Eb2N1bWVudHMvR2l0SHViL3JlcG8vc3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDQUo7O0FERUE7RUFDSSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA3YmZmO1xuICBtYXJnaW46IDVyZW0gMHJlbSAwcmVtIDI2cmVtO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zZWFyY2ggaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBib3JkZXI6IDBweDtcbiAgd2lkdGg6IDY3JTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLnNlYXJjaCBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XG4gIG91dGxpbmUtY29sb3I6ICM3MTllY2U7XG4gIGJveC1zaGFkb3c6IDAgMCA0OGVtICM3MTllY2U7XG4gIHBhZGRpbmc6IDE1cHggODFweDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy10b3AtcmlnaHQ6IDVweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzLXRvcC1yaWdodDogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tLXJpZ2h0OiA1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1cy1ib3R0b20tcmlnaHQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwcHgpIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xuICAuc2VhcmNoIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5cbi5jYXJke1xuICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gICAgbWFyZ2luOiB0b3A7XG4gICAgd2lkdGg6IDI5JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiA1cmVtIDByZW0gMHJlbSAzNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmltZ3tcbiAgICBoZWlnaHQ6IDdlbTtcbiAgICB3aWR0aDogMTBlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogM2VtIDBlbSAwZW0gMTVlbTtcbn1cbi52ZWhpY2xlTmFtZXtcbiAgICBtYXJnaW46IDNlbSAwZW0gMGVtIC0xNmVtO1xufSIsIi5zZWFyY2gge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA3YmZmO1xuICBtYXJnaW46IDVyZW0gMHJlbSAwcmVtIDI2cmVtO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zZWFyY2ggaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJvcmRlcjogMHB4O1xuICB3aWR0aDogNjclO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uc2VhcmNoIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xuICBvdXRsaW5lLWNvbG9yOiAjNzE5ZWNlO1xuICBib3gtc2hhZG93OiAwIDAgNDhlbSAjNzE5ZWNlO1xuICBwYWRkaW5nOiAxNXB4IDgxcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXMtdG9wLXJpZ2h0OiA1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1cy10b3AtcmlnaHQ6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbS1yaWdodDogNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXMtYm90dG9tLXJpZ2h0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MHB4KSBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgLnNlYXJjaCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICBtYXJnaW46IHRvcDtcbiAgd2lkdGg6IDI5JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNXJlbSAwcmVtIDByZW0gMzVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmltZyB7XG4gIGhlaWdodDogN2VtO1xuICB3aWR0aDogMTBlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogM2VtIDBlbSAwZW0gMTVlbTtcbn1cblxuLnZlaGljbGVOYW1lIHtcbiAgbWFyZ2luOiAzZW0gMGVtIDBlbSAtMTZlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchComponent = /** @class */ (function () {
    function SearchComponent(http) {
        this.http = http;
        this.userName = '';
        this.vehicle = 'Merce AMG';
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onSubmit = function (form) {
        if (form.valid) {
            console.log(form.value.vimNumber);
            this.ApiCall(form.value.vimNumber);
        }
    };
    SearchComponent.prototype.ApiCall = function (params) {
        var _this = this;
        var url = "https://5e5c7f8497d2ea001479695a.mockapi.io/vin/vin=" + params;
        this.http.get(this.url.subscribe(function (data) {
            console.log(data);
            _this.vehicleObj = data;
        }));
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchComponent);
    return SearchComponent;
}());

// ApiCall( params : any) {
//   const headers = {
//    "content-type":"application/json",
//    "authorization":"YjNlYjg1MTgtMWJiNS00N2ExLWExZmEtMjljNDljOTBhNjcy",
//    "partner-token":"e2c0534287684c4dbdc3070ee7bedfc6",
//  }  ;
//   this.http.get<any>(`http://api.carmd.com/v3.0/image?vin=${params}`,{headers}).subscribe(data =>{
//     console.log(data);
//     this.vehicleObj = data;
//   });


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/willy/Documents/GitHub/repo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map