(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n  text-align: center;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  color: white;\r\n  background-color: rgb(23, 72, 151);\r\n}\r\n\r\n.todo {\r\n  /* box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2); */\r\n  width: 100%;\r\n  margin: auto;\r\n  text-align: center;\r\n  font-family: proxima-nova, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  float: left;\r\n}\r\n\r\n.todo-title {\r\n  font-family: proxima-nova, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  color: #080808;\r\n  font-size: 14px;\r\n  line-height: 1.4;\r\n  text-align: center;\r\n  margin: 0px 3px 0px 3px;\r\n  font-weight: 550;\r\n  width: auto;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  background-color: gold;\r\n}\r\n\r\n.todo-title div:hover {\r\n  background: white;\r\n}\r\n\r\n/* .todo-details {\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  color: black;\r\n  font-size: 11px;\r\n  text-align: left;\r\n  margin: 5px;\r\n} */\r\n\r\n.Red {\r\n  font-family: proxima-nova, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  color: black;\r\n  font-size: 12.5px;\r\n  line-height: 1.4;\r\n  text-align: justify;\r\n  margin: 0px 3px 0px 3px;\r\n  background-color: rgb(248, 215, 215);\r\n  padding: 5px 5px 5px 5px;\r\n}\r\n\r\n.Green {\r\n  font-family: proxima-nova, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  color: black;\r\n  font-size: 12.5px;\r\n  line-height: 1.4;\r\n  text-align: justify;\r\n  margin: 0px 3px 0px 3px;\r\n  background-color: hsl(120, 100%, 93%);\r\n  padding: 5px 5px 5px 5px;\r\n}\r\n\r\n.todo button {\r\n  border: none;\r\n  outline: 0;\r\n  padding: 1px;\r\n  color: white;\r\n  background-color: #000;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 47%;\r\n  font-size: 14px;\r\n  margin: 4px;\r\n  font-weight: 400;\r\n}\r\n\r\n.todo button:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.todo-container {\r\n  width: 500px;\r\n  max-width: 100%;\r\n  margin: 0 25px 25px 0;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  height: auto;\r\n}\r\n\r\n.todo-list {\r\n  border: solid 1px #ccc;\r\n  min-height: 60px;\r\n  background: white;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n  display: block;\r\n}\r\n\r\n.todo-box {\r\n  padding: 3px 3px 3px 3px;\r\n  border-bottom: solid 1px #ccc;\r\n  color: rgb(107, 99, 99);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  cursor: move;\r\n  background: white;\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.cdk-drag-preview {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder {\r\n  opacity: 0;\r\n}\r\n\r\n.cdk-drag-animating {\r\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.todo-box:last-child {\r\n  border: none;\r\n}\r\n\r\n.todo-list.cdk-drop-list-dragging .todoStatus-box:not(.cdk-drag-placeholder) {\r\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsNkRBQTZEO0VBQzdELGFBQWE7RUFDYixtQ0FBbUM7Q0FDcEM7O0FBRUQ7RUFDRSxxREFBcUQ7RUFDckQsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMEVBQTBFO0VBQzFFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLDBFQUEwRTtFQUMxRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7Ozs7OztJQU1JOztBQUVKO0VBQ0UsMEVBQTBFO0VBQzFFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIscUNBQXFDO0VBQ3JDLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLDBFQUEwRTtFQUMxRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHNDQUFzQztFQUN0Qyx5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkI7O3VDQUVxQztDQUN0Qzs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLCtEQUF1RDtFQUF2RCx1REFBdUQ7RUFBdkQsMkdBQXVEO0NBQ3hEOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsK0RBQXVEO0VBQXZELHVEQUF1RDtFQUF2RCwyR0FBdUQ7Q0FDeEQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDcyLCAxNTEpO1xyXG59XHJcblxyXG4udG9kbyB7XHJcbiAgLyogYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnRvZG8tdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzA4MDgwODtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHggM3B4IDBweCAzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICB3aWR0aDogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcclxufVxyXG5cclxuLnRvZG8tdGl0bGUgZGl2OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLyogLnRvZG8tZGV0YWlscyB7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDVweDtcclxufSAqL1xyXG5cclxuLlJlZCB7XHJcbiAgZm9udC1mYW1pbHk6IHByb3hpbWEtbm92YSwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDEyLjVweDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgbWFyZ2luOiAwcHggM3B4IDBweCAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjE1LCAyMTUpO1xyXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuLkdyZWVuIHtcclxuICBmb250LWZhbWlseTogcHJveGltYS1ub3ZhLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBtYXJnaW46IDBweCAzcHggMHB4IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTIwLCAxMDAlLCA5MyUpO1xyXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuLnRvZG8gYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogMDtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNDclO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4udG9kbyBidXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLnRvZG8tY29udGFpbmVyIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50b2RvLWxpc3Qge1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRvZG8tYm94IHtcclxuICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbiAgY29sb3I6IHJnYigxMDcsIDk5LCA5OSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLnRvZG8tYm94Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnRvZG8tbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC50b2RvU3RhdHVzLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"right\">\n    <div class=\"todo-container\">\n      <h3>To Do</h3>\n      <div id=\"ToDo\" cdkDropList #todoList=\"cdkDropList\" [cdkDropListData]=\"todoCurrentUserToDo\"\n        [cdkDropListConnectedTo]=\"[doneList]\" class=\"todo-list\" (cdkDropListDropped)=\"drop($event)\">\n        <div attr.id=\"ID{{item.ToDoID}}\" class=\"todo-box\" *ngFor=\"let item of todoCurrentUserToDo\" cdkDrag>\n          <div class=\"todo\">\n            <div class=\"todo-title\">{{item.Title}}</div>\n            <div id={{item.ToDoID}} (dblclick)=\"ondblclick($event)\" class={{item.Color}}>{{item.Details}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"todo-container\">\n      <h3>Done</h3>\n      <div id=\"Done\" cdkDropList #doneList=\"cdkDropList\" [cdkDropListData]=\"todoCurrentUserDone\"\n        [cdkDropListConnectedTo]=\"[todoList]\" class=\"todo-list\" (cdkDropListDropped)=\"drop($event)\">\n        <div attr.id=\"ID{{item.ToDoID}}\" class=\"todo-box\" *ngFor=\"let item of todoCurrentUserDone\" cdkDrag>\n          <div class=\"todo\">\n            <div class=\"todo-title\">{{item.Title}}</div>\n            <div id={{item.ToDoID}} (dblclick)=\"ondblclick($event)\" class={{item.Color}}>{{item.Details}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //DD


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        //#region - Variable
        //App URL
        this.todoURL = 'http://localhost:3007/api/todo/';
        this.todoCurrentUserURL = this.todoURL + 'user/Ayyapan.Anbalagan@ey.com';
    }
    //#endregion
    //#region Page Load
    AppComponent.prototype.ngOnInit = function () {
        this.getTodoCurrentUser();
    };
    //#endregion
    //#region - Events
    //Event:Click - Color change
    AppComponent.prototype.ondblclick = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var id = target.attributes.id.nodeValue;
        var color = target.attributes.class.nodeValue;
        var parcolor;
        if (color === "Red") {
            parcolor = "Green";
        }
        else {
            parcolor = "Red";
        }
        this.putColorURL = this.todoURL + "changecolor/" + id + "/" + parcolor;
        this.putUpdateColor();
        document.getElementById(id).className = parcolor;
    };
    //Event: Drop 
    AppComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            //Start:Drop Status Change Code
            var dropContainerID = event.item.dropContainer.id; // Get Status value from div ID
            var cardID = event.item.element.nativeElement.id;
            cardID = cardID.replace("ID", '');
            this.putStatusURL = this.todoURL + "changestatus/" + cardID + "/" + dropContainerID;
            this.putUpdateStatus();
            //End: Drop Status change code
            //var ele = document.getElementById(event.item.element.nativeElement.lastElementChild.lastElementChild.id);
            //ele.className = event.item.element.nativeElement.lastElementChild.lastElementChild.className;
        }
    };
    //#endregion
    //#region - Methods
    // Get to do in seperate list by status
    AppComponent.prototype.getTodoCurrentUser = function () {
        var _this = this;
        this.serviceGetCurrentUser()
            .subscribe(function (todoCurrentUser) {
            _this.todoCurrentUser = todoCurrentUser;
            _this.todoCurrentUserToDo = _this.todoCurrentUser.filter(function (todoitem) { return todoitem.Status === "ToDo"; });
            _this.todoCurrentUserDone = _this.todoCurrentUser.filter(function (todoitem) { return todoitem.Status === "Done"; });
        });
    };
    AppComponent.prototype.serviceGetCurrentUser = function () {
        return this.http
            .get(this.todoCurrentUserURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    //Put Change Status
    AppComponent.prototype.putUpdateStatus = function () {
        var _this = this;
        this.serverUpdateStaus()
            .subscribe(function (putStausRes) {
            _this.putStatusRes = putStausRes;
            var res = JSON.parse(_this.putStatusRes);
            if (res.status === 200) {
            }
        });
    };
    AppComponent.prototype.serverUpdateStaus = function () {
        return this.http
            .put(this.putStatusURL, this.httpOptions);
    };
    //Put Update Color
    AppComponent.prototype.putUpdateColor = function () {
        var _this = this;
        this.serviceUpdateColor()
            .subscribe(function (putColorRes) {
            _this.putColorRes = putColorRes;
            var res = JSON.parse(_this.putColorRes);
            if (res.status === 200) {
            }
        });
    };
    AppComponent.prototype.serviceUpdateColor = function () {
        return this.http
            .put(this.putColorURL, this.httpOptions);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material-module */ "./src/material-module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["DemoMaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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

/***/ "./src/material-module.ts":
/*!********************************!*\
  !*** ./src/material-module.ts ***!
  \********************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\anbalay\Desktop\Learn\node\Client\FrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map