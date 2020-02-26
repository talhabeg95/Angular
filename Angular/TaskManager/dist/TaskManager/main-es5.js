(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/about/about.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/about/about.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>about works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav>\n    <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n        <li class=\"breadcrumb-item active\">Dashboard</li>\n    </ol>\n</nav>\n\n<h5>Dashboard</h5>\n<h6>{{ToDay | date:\"M/d/y\"}}</h6>\n<div class=\"row\">\n    <div class=\"col-lg-3 pb-3\" style=\"background-color:#e9e6e6\">\n        <div class=\"row\">\n            <div class=\"col-11 text-white text-center mx-2 rounded pt-2\" \n            style=\"background-color:#a39e9e; font-family:Impact,Haettenschweiler,\n            'Arial Narrow Bold',sans-serif\">{{Designation | uppercase}}</div>\n            <div class=\"col-12 text-center mt-2\">\n                <img src=\"assets/user.png\" width=\"120px\">\n            </div>\n            <div class=\"col-12 text-center pt-2 pb-2 font-weight-bold\" style=\"font-family:Tahoma\">\n                {{Username | lowercase}}\n            </div>\n            <div class=\"col-12 text-center pt-2 pb-2\" style=\"font-family:Arial\">TEAM SUMMARY</div>\n            <div class=\"col-12 mb-3\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                        NO. OF TEAM MEMBERS\n                        <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">{{NoOfTeamMembers}}</span>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                        TOTAL COST OF ALL PROJECTS\n                        <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">$ {{TotalCostOfAllProjects}} k</span>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                        PENDING TASKS\n                        <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">{{PendingTasks}}</span>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                        UPCOMING PROJECTS\n                        <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">{{UpComingProjects | percent}}</span>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-12 text-center pt-2 pb-2\" style=\"font-family:Arial Narrow\">CLIENTS</div>\n            <div class=\"col-12\">\n                <ul class=\"list-group list-group-flush\">\n                    <li class=\"list-group-item\" *ngFor=\"let client of Clients\">{{client | slice: 0: 10}}</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6\">\n        <div class=\"row\">\n            <div class=\"col-12 pt-0 pb-2\" style=\"background-color:#e9e6e6\">\n                <div class=\"row mt-2\">\n                    <div class=\"col-6 text-left\">\n                        <div class=\"dropdown\">\n                            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\">\n                                Project A\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let project of Projects\" onclick=\"return false\" (click)=\"onProjectChange($event)\">{{project}}</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                        <div class=\"dropdown\">\n                            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\">\n                                2019\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let year of Years\">\n                                    <span [ngSwitch]=\"year\">\n                                        <span *ngSwitchCase=\"'2019'\" style=\"color:green\">{{year}}</span>\n                                        <span *ngSwitchCase=\"'2018'\" style=\"color:blue\">{{year}}</span>\n                                        <span *ngSwitchCase=\"'2017'\" style=\"color:red\">{{year}}</span>\n                                        <span *ngSwitchDefault style=\"color:black\">{{year}}</span>\n                                    </span>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-11 mx-auto mt-1 text-white text-center pt-2 pb-2 mx-auto rounded font-weight-bold\" \n            style=\"background-color:#718d97; font-family:Arial Narrow;\">PROJECT BRIEFING</div>\n            <div class=\"col-12\">\n                <table class=\"table table-borderless\">\n                    <tr>\n                        <td>Project Cost</td>\n                        <td>{{ProjectCost | currency: \"USD\" }}</td>\n                    </tr>\n                    <tr>\n                        <td>Current Expenditure</td>\n                        <td>{{CurrentExpenditure | currency: \"USD\" }}</td>\n                    </tr>\n                    <tr>\n                        <td>Available Funds</td>\n                        <td>{{AvailableFunds | currency: \"USD\" }}</td>\n                    </tr>\n                </table>\n            </div>\n            <div class=\"col-11 mx-auto mt-1 text-white text-center pt-2 pb-2 mx-2 rounded font-weight-bold\" \n            style=\"background-color:#718d97; font-family:Arial Narrow;\">TEAM MEMBERS SUMMARY</div>\n            <div class=\"col-12\">\n                <table class=\"table\">\n                    <tr>\n                        <th>Region</th>\n                        <th>Team Members Count</th>\n                        <th>Temporarily Unavailable Members</th>\n                    </tr>\n                    <tr *ngFor=\"let teamMemberSummary of TeamMembersSummary\">\n                        <td>\n                            <b>{{teamMemberSummary.Region}}</b>\n                        </td>\n                        <td>\n                            {{teamMemberSummary.TeamMembersCount}}\n                        </td>\n                        <td>\n                            {{teamMemberSummary.TemporarilyUnavailableMembers}}\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-3\" style=\"background-color:#e9e6e6\">\n        <div class=\"row\">\n            <div class=\"col-11 mx-auto mt-1 text-white text-center pt-1 pb-2 mx-2 rounded font-weight-bold\" \n            style=\"background-color:#718d97; font-family:Arial Narrow\">TEAM MEMBERS</div>\n            <div class=\"col-lg-12 pt-2\">\n                <div class=\"accordion\" id=\"accordion1\">\n                    <div class=\"card\" *ngFor=\"let teamMembersGroup of TeamMembers; let i=index\">\n\n                        <div class=\"card-header bg-secondary\" id=\"card1\">\n                            <h2 class=\"mb-0\">\n                                <button class=\"btn btn-link text-white\" type=\"button\" data-toggle=\"collapse\" \n                                [attr.data-target]=\"'#cardbody' + i\">{{teamMembersGroup.Region}}</button>\n                            </h2>\n                        </div>\n                        <div [id]=\"'cardbody' + i\" class=\"collapse\" data-parent=\"#accordion1\" [ngClass]=\"(i==0)?'show':''\">\n                            <div class=\"card-body\">\n                                <div *ngIf=\"i == 0; then firstTemplate; else secondTemplate\">\n\n                                </div>\n                                <ng-template #firstTemplate>\n                                    <div class=\"card\" *ngFor=\"let member of teamMembersGroup.Members\">\n                                        <div class=\"card-header bg-primary text-white\">#{{member.ID}} {{member.Name}}</div>\n                                        <div class=\"card-body\">{{member.Status}}</div>\n                                    </div>\n                                </ng-template>\n\n                                <ng-template #secondTemplate>\n                                    <table class=\"table\">\n                                        <thead>\n                                            <tr>\n                                                <th>ID</th>\n                                                <th>Name</th>\n                                                <th>Status</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let member of teamMembersGroup.Members\">\n                                                <td>{{member.ID}}</td>\n                                                <td [style.color]=\"(member.Status=='Busy')?'red':'black'\">{{member.Name}}</td>\n                                                <td>{{member.Status}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </ng-template>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/my-profile/my-profile.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/my-profile/my-profile.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>my-profile works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/projects/projects.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/projects/projects.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>\n    Projects\n    <i class=\"fa fa-circle-o-notch fa-spin\" style=\"font-size:34px\" *ngIf=\"showLoading\"></i>\n</h1>\n<div class=\"row\">\n    <div class=\"col-xl-9 mx-auto\">\n        <div class=\"form-group form-row\">\n\n            <div class=\"col-2\">\n                <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#newModal\">Create Project</button>\n            </div>\n\n            <label for=\"drpSearchBy\" class=\"col-form-label col-2 text-right\">Search by:</label>\n\n            <div class=\"col-3\">\n                <select class=\"drpSearchBy\" id=\"drpSearchBy\" name=\"SearchBy\" [(ngModel)]=\"searchBy\">\n                    <option value=\"ProjectID\">Project ID</option>\n                    <option value=\"ProjectName\">Project Name</option>\n                    <option value=\"DateOfStart\">Date of Start</option>\n                    <option value=\"TeamSize\">Team Size</option>\n                </select>\n            </div>\n        \n            <label for=\"txtSearchText\" class=\"col-form-label col-1 text-right\">Search:</label>\n\n            <div class=\"col-4\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"txtSearchText\" name=\"SearchText\" [(ngModel)]=\"searchText\">\n                    <div class=\"input-group-append\" (click)=\"onSearchClick()\">\n                        <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"col-xl-9 mx-auto\">\n        <table class=\"table\">\n            <thead>\n                <th>Project ID</th>\n                <th>Project Name</th>   \n                <th>Date Of Start</th>\n                <th>Team Size</th>\n                <th>Client Location</th>\n                <th>Status</th>\n                <th>Actions</th>\n            </thead> \n            <tbody>\n                <tr *ngFor=\"let project of projects; let i =index\" [ngClass]=\"{ 'text-muted': !project.active }\">\n                    <td>{{project.projectID}}</td>\n                    <td>{{project.projectName}}</td>\n                    <td>{{project.dateOfStart}}</td>\n                    <td>{{project.teamSize}}</td>\n                    <td>{{project.clientLocation.clientLocationName}}</td>\n                    <td>{{project.status}}</td>\n                    <td>\n                        <button class=\"btn btn-info\" (click)=\"onEditClick($event, i)\" data-toggle=\"modal\" \n                        data-target=\"#editModal\">Edit</button>&nbsp;\n                        <button class=\"btn btn-warning\" (click)=\"onDeleteClick($event, i)\" data-toggle=\"modal\" \n                        data-target=\"#deleteModal\">Delete</button>\n                    </td>\n                </tr>\n            </tbody>           \n        </table>\n    </div>\n</div>\n\n<form>\n    <div class=\"modal\" role=\"dialog\" id=\"newModal\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\" style=\"width:700px\">\n                <div class=\"modal-header bg-primary text-white\">\n                    <div class=\"modal-title\">New Project</div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n                </div>\n                <div class=\"modal-body\">\n\n                    <div class=\"form-group row\">\n                        <label for=\"txtNewProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"number\" id=\"txtNewProjectID\" style=\"width:150px\" class=\"form-control\" \n                            placeholder=\"Project ID\" name=\"ProjectID\" [(ngModel)]=\"newProject.projectID\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"txtNewProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" id=\"txtNewProjectName\" class=\"form-control\" \n                            placeholder=\"Project Name\" name=\"ProjectName\" [(ngModel)]=\"newProject.projectName\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"txtNewDateOfStart\" class=\"col-sm-4 col-form-label\">Date of Start</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"date\" id=\"txtNewDateOfStart\" style=\"width:150px\" class=\"form-control\" \n                            placeholder=\"Date of Start\" name=\"DateOfStart\" [(ngModel)]=\"newProject.dateOfStart\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"txtTeamSize\" class=\"col-sm-4 col-form-label\">Team Size</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"number\" id=\"txtTeamSize\" style=\"width:150px\" class=\"form-control\" \n                            placeholder=\"Team Size\" name=\"TeamSize\" [(ngModel)]=\"newProject.teamSize\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"col-sm-4 col-form-label\">&nbsp;</label>\n                        <div class=\"col-sm-8\">\n                            <div class=\"form-check\">\n                                <input type=\"checkbox\" id=\"chkNewActive\" value=\"true\" class=\"form-check-input\"\n                                [(ngModel)]=\"newProject.active\" name=\"active\">\n                                <label class=\"form-check-label\" for=\"chkNewActive\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"rbNewStatusInForce\" class=\"col-sm-4\">Status</label>\n                        <div class=\"col-sm-8\">\n                            <div class=\"form-check form-check-inline\">\n                                <input type=\"radio\" id=\"rbNewStatusInForce\" value=\"In Force\" class=\"form-check-input\" \n                                name=\"Status\" [(ngModel)]=\"newProject.status\">\n                                <label for=\"rbNewStatusInForce\" class=\"form-check-label\">In Force</label>\n                            </div>\n\n                            <div class=\"form-check form-check-inline\">\n                                <input type=\"radio\" id=\"rbNewStatusInSupport\" value=\"Support\" class=\"form-check-input\" \n                                name=\"Status\" [(ngModel)]=\"newProject.status\">\n                                <label for=\"rbNewStatusSupport\" class=\"form-check-label\">Support</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"drpNewClientLocation\" class=\"col-sm-4 col-form-label\">Client Location</label>\n                        <div class=\"col-sm-8\">\n                            <select name=\"clientLocation\" id=\"drpNewClientLocation\" class=\"form-control\" \n                            [(ngModel)]=\"newProject.clientLocationID\">\n                                <option value=\"null\">Please Select</option>\n                                <option *ngFor=\"let clientLocation of clientLocations\" [value]=\"clientLocation.\n                                clientLocationID\">{{clientLocation.clientLocationName}}</option>\n                            </select>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-warning\" data-dismiss=\"modal\">Cancel</button>\n                    <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onSaveClick()\">Save</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n\n<!--Edit Project-->\n<form>\n    <div class=\"modal\" role=\"dialog\" id=\"editModal\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\" style=\"width:700px\">\n                <div class=\"modal-header\">\n                    <div class=\"modal-title\">Edit Project</div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n                </div>\n                <div class=\"modal-body\">\n\n                    <div class=\"form-group row\">\n                        <label for=\"txtEditProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"number\" id=\"txtEditProjectID\" style=\"width:150px\" \n                            class=\"form-control-plain-text\" placeholder=\"Project ID\" name=\"ProjectID\" \n                            [(ngModel)]=\"editProject.projectID\"  disabled=\"disabled\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"txtEditProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" id=\"txtEditProjectName\" class=\"form-control\" \n                            placeholder=\"Project Name\" name=\"ProjectName\" [(ngModel)]=\"editProject.projectName\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"txtEditDateOfStart\" class=\"col-sm-4 col-form-label\">Date of Start</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"date\" id=\"txtEditDateOfStart\" style=\"width:150px\" class=\"form-control\" \n                            placeholder=\"Date of Start\" name=\"DateOfStart\" [(ngModel)]=\"editProject.dateOfStart\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"txtEditTeamSize\" class=\"col-sm-4 col-form-label\">Team Size</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"number\" id=\"txtEditTeamSize\" style=\"width:150px\" class=\"form-control\" \n                            placeholder=\"Team Size\" name=\"TeamSize\" [(ngModel)]=\"editProject.teamSize\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"col-sm-4 col-form-label\">&nbsp;</label>\n                        <div class=\"col-sm-8\">\n                            <div class=\"form-check\">\n                                <input type=\"checkbox\" id=\"chkEditActive\" value=\"true\" class=\"form-check-input\"\n                                [(ngModel)]=\"editProject.active\" name=\"active\">\n                                <label class=\"form-check-label\" for=\"chkEditActive\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"rbEditStatusInForce\" class=\"col-sm-4\">Status</label>\n                        <div class=\"col-sm-8\">\n                            <div class=\"form-check form-check-inline\">\n                                <input type=\"radio\" id=\"rbEditStatusInForce\" value=\"In Force\" class=\"form-check-input\" \n                                name=\"Status\" [(ngModel)]=\"editProject.status\">\n                                <label for=\"rbEditStatusInForce\" class=\"form-check-label\">In Force</label>\n                            </div>\n\n                            <div class=\"form-check form-check-inline\">\n                                <input type=\"radio\" id=\"rbEditStatusSupport\" value=\"Support\" class=\"form-check-input\" \n                                name=\"Status\" [(ngModel)]=\"editProject.status\">\n                                <label for=\"rbEditStatusSupport\" class=\"form-check-label\">Support</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"drpEditClientLocation\" class=\"col-sm-4 col-form-label\">Client Location</label>\n                        <div class=\"col-sm-8\">\n                            <select name=\"clientLocation\" id=\"drpEditClientLocation\" class=\"form-control\" \n                            [(ngModel)]=\"editProject.clientLocationID\">\n                                <option value=\"null\">Please Select</option>\n                                <option *ngFor=\"let clientLocation of clientLocations\" [value]=\"clientLocation.\n                                clientLocationID\">{{clientLocation.clientLocationName}}</option>\n                            </select>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-warning\" data-dismiss=\"modal\">Cancel</button>\n                    <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onUpdateClick()\">Update</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n\n<!--Delete Project-->\n<form>\n    <div class=\"modal\" role=\"dialog\" id=\"deleteModal\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\" style=\"width:700px\">\n                <div class=\"modal-header\">\n                    <div class=\"modal-title\">--Delete Project</div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n                </div>\n                <div class=\"modal-body\">\n\n                    <div class=\"text-warning\">Are you sure to delete this Project?</div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"txtDeleteProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"number\" id=\"txtDeleteProjectID\" style=\"width:150px\" \n                            class=\"form-control-plain-text\" placeholder=\"Project ID\" name=\"ProjectID\" \n                            [(ngModel)]=\"deleteProject.projectID\"  disabled=\"disabled\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"txtDeleteProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" id=\"txtDeleteProjectName\" class=\"form-control-plain-text\" \n                            placeholder=\"Project Name\" name=\"ProjectName\" \n                            [(ngModel)]=\"deleteProject.projectName\" disabled=\"disabled\">\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-warning\" data-dismiss=\"modal\">Cancel</button>\n                    <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onDeleteConfirmClick()\">Delete</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm bg-success navbar-dark\">\n  <a class=\"navbar-brand\" href=\"#\">\n    Angular Task Manager\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mynav\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"mynav\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n        <a class=\"nav-link\" routerLink=\"dashboard\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"about\">About</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n        <a class=\"nav-link\" routerLink=\"projects\">Projects</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n        <a class=\"nav-link\" href=\"#\">{{loginService.currentUserName}}</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"loginService.Logout()\">Logout</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"loginService.currentUserName == null\">\n        <a class=\"nav-link\" routerLink=\"login\">Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"loginService.currentUserName == null\">\n        <a class=\"nav-link\" routerLink=\"signup\">Sign Up</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"search\"><i class=\"fa fa-search\"></i></span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n      </div>\n      <button class=\"btn btn-warning my2- my-sm-0\" type=\"button\" (click)=\"onSearchClick()\">Search</button>\n    </form>\n  </div>\n</nav>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form>\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-xl-5 col-md-9 mx-auto\">\n            <div class=\"card mt-4\">\n                <div class=\"card-header bg-secondary text-white\">\n                    <h3>Login</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"form-group form-row\">\n                        <label for=\"UserName\" class=\"col-md-4 col-form-label\">Username</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\n                            \"loginViewModel.UserName\" name=\"UserName\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group form-row\">\n                        <label for=\"Password\" class=\"col-md-4 col-form-label\">Password</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\n                            \"loginViewModel.Password\" name=\"Password\">\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"card-footer text-right\">\n                    <span class=\"text-danger\">{{loginError}}&nbsp;</span>\n                    <button class=\"btn btn-primary\" (click)=\"onLoginClick($event)\">Login</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-8 col-xl-6 mx-auto\">\n        <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmitClick()\"> \n            <div class=\"card mt-1\">\n                <div class=\"card-header\">\n                    <h4>Sign Up</h4>\n                </div>\n\n                <div class=\"card-body\">\n\n                    <div class=\"form-group form-row\" formGroupName=\"personName\">\n                        <label for=\"firstName\" class=\"col-md-4 col-form-label\">First Name:</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"text\" name=\"firstName\" id=\"firstName\" placeholder=\"First Name\" \n                            class=\"form-control\" formControlName=\"firstName\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group form-row\" formGroupName=\"personName\">\n                        <label for=\"lastName\" class=\"col-md-4 col-form-label\">Last Name:</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"text\" name=\"lastName\" id=\"lastName\" placeholder=\"Last Name\" \n                            class=\"form-control\" formControlName=\"lastName\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group form-row\">\n                        <label for=\"email\" class=\"col-md-4 col-form-label\">Email:</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Email\" \n                            class=\"form-control\" formControlName=\"email\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group form-row\">\n                        <label for=\"password\" class=\"col-md-4 col-form-label\">Password:</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" \n                            class=\"form-control\" formControlName=\"password\">\n                        </div>\n                    </div>\n                    \n                    <div class=\"form-group form-row\">\n                        <label for=\"confirmPassword\" class=\"col-md-4 col-form-label\">Confirm Password:</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"password\" name=\"confirmPassword\" id=\"confirmPassword\" placeholder=\"Confirm Password\" \n                            class=\"form-control\" formControlName=\"confirmPassword\">\n\n                                <span class=\"\">\n\n                                </span>\n                        </div>\n                    </div> \n\n                    <div class=\"form-group form-row\">\n                        <label for=\"phoneNumber\" class=\"col-md-4 col-form-label\">Phone Number:</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"text\" name=\"phoneNumber\" id=\"phoneNumber\" placeholder=\"Phone Number\" \n                            class=\"form-control\" formControlName=\"phoneNumber\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group form-row\">\n                        <label for=\"dateOfBirth\" class=\"col-md-4 col-form-label\">Date of Birth:</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"date\" name=\"dateOfBirth\" id=\"dateOfBirth\" placeholder=\"Date of Birth\" \n                            class=\"form-control\" formControlName=\"dateOfBirth\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group form-row\">\n                        <label class=\"col-md-4 col-form-label\">Sex:</label>\n                        <div class=\"col-md-8\">\n                            \n                            <div class=\"form-check-label form-check-inline\" *ngFor=\"let sex of sexs\">\n                                <input type=\"radio\" name=\"sex\" [id]=\"sex\" [value]=\"sex\" \n                                class=\"form-check-input\" formControlName=\"sex\">\n                                <label [for]=\"sex\" class=\"form-check-label\">{{sex}}</label>\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"form-group form-row\">\n                        <label for=\"countryID\" class=\"col-md-4 col-form-label\">Country:</label>\n                        <div class=\"col-md-8\">\n                            <select name=\"countryID\" id=\"countryID\" class=\"form-control\"\n                            formControlName=\"countryID\">\n                            <option value=\"null\">Please Select</option>\n                            <option *ngFor=\"let country of countries\" [value]=\"country.countryName\">\n                                {{country.countryName}}\n                            </option>\n                        </select>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group form-row\">\n                        <label class=\"col-md-4 col-form-label\"></label>\n                        <div class=\"col-md-8\">\n                            <input type=\"checkbox\" name=\"receiveNewsLetters\" id=\"receiveNewsLetters\"\n                            class=\"form-check-input\" value=\"true\" formControlName=\"receiveNewsLetters\">\n                            <label for=\"receiveNewsLetters\" class=\"form-check-label\">Receive News Letters</label>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group form-row\">\n                        <label class=\"col-md-4 col-form-label\">Skills:</label>\n                        <div class=\"col-md-8\" formArrayName=\"skills\">\n                            <div class=\"row\" *ngFor=\"let skill of signUpForm.get('skills').controls; \n                            let i =index\" [formGroupName]=\"i\">\n                                <div class=\"col-5\">\n                                    <input type=\"text\" name=\"skillName\" id=\"skillName\" placeholder=\"Skill Name\"\n                                    formControlName=\"skillName\" class=\"form-control\">\n                                </div>\n\n                                <div class=\"col-4\">\n                                    <select name=\"level\" id=\"level\" formControlName=\"level\" class=\"form-control\">\n                                        <option value=\"null\">Please Select</option>\n                                        <option value=\"Beginner\">Beginner</option>\n                                        <option value=\"Intermediate\">Intermediate</option>\n                                        <option value=\"Professional\">Professional</option>\n                                        <option value=\"Expert\">Expert</option>\n                                    </select>\n                                </div>\n\n                                <div class=\"col-3\">\n                                    <button class=\"btn btn-danger\" type=\"button\" (click)=\"onRemoveClick(i)\">\n                                    Remove</button>\n                                </div>\n                            </div>\n                        \n                            <button class=\"btn btn-primary\" type=\"button\" (click)=\"onAddSkill()\">\n                            Add Skill</button>\n                        </div>\n                    </div>\n\n                    {{signUpForm.value | json}}\n                </div>\n\n                <div class=\"card-footer\">\n                    <button class=\"btn btn-success float-right\">Create Account</button>\n                    <div class=\"text-danger\">{{registerError}}</div>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>tasks works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/admin/about/about.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/admin/about/about.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/admin/about/about.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/admin/about/about.component.ts ***!
          \************************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/admin/about/about.component.scss")).default]
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/admin/admin.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/admin/admin.module.ts ***!
          \***************************************/
        /*! exports provided: AdminModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function () { return AdminModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
            /* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/admin/my-profile/my-profile.component.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/admin/about/about.component.ts");
            /* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/dashboard.service.ts");
            /* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/admin/projects/projects.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../team-size-validator.directive */ "./src/app/team-size-validator.directive.ts");
            /* harmony import */ var _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../client-location-status-validator.directive */ "./src/app/client-location-status-validator.directive.ts");
            /* harmony import */ var _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../project-idunique-validator.directive */ "./src/app/project-idunique-validator.directive.ts");
            var AdminModule = /** @class */ (function () {
                function AdminModule() {
                }
                return AdminModule;
            }());
            AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                        _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"],
                        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                        _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                        _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__["TeamSizeValidatorDirective"],
                        _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_10__["ClientLocationStatusValidatorDirective"],
                        _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_11__["ProjectIDUniqueValidatorDirective"]
                    ],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
                    exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__["TeamSizeValidatorDirective"],
                        _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_10__["ClientLocationStatusValidatorDirective"], _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_11__["ProjectIDUniqueValidatorDirective"]],
                    providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"]]
                })
            ], AdminModule);
            /***/ 
        }),
        /***/ "./src/app/admin/dashboard/dashboard.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/admin/dashboard/dashboard.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/admin/dashboard/dashboard.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
          \********************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboard.service */ "./src/app/dashboard.service.ts");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(dashboardService) {
                    this.dashboardService = dashboardService;
                    this.Years = [];
                    this.TeamMembersSummary = [];
                    this.TeamMembers = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    this.Designation = "Team Leader";
                    this.Username = "Scott Smith";
                    this.NoOfTeamMembers = 67;
                    this.TotalCostOfAllProjects = 240;
                    this.PendingTasks = 15;
                    this.UpComingProjects = 0.2;
                    this.ProjectCost = 2113507;
                    this.CurrentExpenditure = 96788;
                    this.AvailableFunds = 52236;
                    this.ToDay = new Date();
                    this.Clients = [
                        "ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"
                    ];
                    this.Projects = [
                        "Project A", "Project B", "Project C", "Project D"
                    ];
                    for (var i = 2019; i >= 2010; i--) {
                        this.Years.push(i);
                    }
                    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
                    this.TeamMembers = [
                        {
                            Region: "East", Members: [
                                { ID: 1, Name: "Ford", Status: "Available" },
                                { ID: 2, Name: "Miller", Status: "Available" },
                                { ID: 3, Name: "Jones", Status: "Busy" },
                                { ID: 4, Name: "James", Status: "Busy" }
                            ]
                        },
                        {
                            Region: "West", Members: [
                                { ID: 5, Name: "Anna", Status: "Available" },
                                { ID: 6, Name: "Arun", Status: "Available" },
                                { ID: 7, Name: "Varun", Status: "Busy" },
                                { ID: 8, Name: "Jasmine", Status: "Busy" }
                            ]
                        },
                        {
                            Region: "South", Members: [
                                { ID: 9, Name: "Krishna", Status: "Available" },
                                { ID: 10, Name: "Mohan", Status: "Available" },
                                { ID: 11, Name: "Raju", Status: "Busy" },
                                { ID: 12, Name: "Farooq", Status: "Busy" }
                            ]
                        },
                        {
                            Region: "North", Members: [
                                { ID: 13, Name: "Jacob", Status: "Available" },
                                { ID: 14, Name: "Smith", Status: "Available" },
                                { ID: 15, Name: "Jones", Status: "Busy" },
                                { ID: 16, Name: "James", Status: "Busy" }
                            ]
                        }
                    ];
                };
                DashboardComponent.prototype.onProjectChange = function ($event) {
                    if ($event.target.innerHTML == "Project A") {
                        this.ProjectCost = 2113507;
                        this.CurrentExpenditure = 96788;
                        this.AvailableFunds = 52436;
                    }
                    else if ($event.target.innerHTML == "Project B") {
                        this.ProjectCost = 88923;
                        this.CurrentExpenditure = 22450;
                        this.AvailableFunds = 2640;
                    }
                    else if ($event.target.innerHTML == "Project C") {
                        this.ProjectCost = 662183;
                        this.CurrentExpenditure = 7721;
                        this.AvailableFunds = 9811;
                    }
                    else if ($event.target.innerHTML == "Project D") {
                        this.ProjectCost = 928431;
                        this.CurrentExpenditure = 562;
                        this.AvailableFunds = 883;
                    }
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }
            ]; };
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/admin/dashboard/dashboard.component.scss")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/admin/my-profile/my-profile.component.scss": 
        /*!************************************************************!*\
          !*** ./src/app/admin/my-profile/my-profile.component.scss ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/admin/my-profile/my-profile.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/admin/my-profile/my-profile.component.ts ***!
          \**********************************************************/
        /*! exports provided: MyProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () { return MyProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MyProfileComponent = /** @class */ (function () {
                function MyProfileComponent() {
                }
                MyProfileComponent.prototype.ngOnInit = function () {
                };
                return MyProfileComponent;
            }());
            MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-my-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/my-profile/my-profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-profile.component.scss */ "./src/app/admin/my-profile/my-profile.component.scss")).default]
                })
            ], MyProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/admin/projects/projects.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/admin/projects/projects.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/admin/projects/projects.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/admin/projects/projects.component.ts ***!
          \******************************************************/
        /*! exports provided: ProjectsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () { return ProjectsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects.service */ "./src/app/projects.service.ts");
            /* harmony import */ var src_app_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/project */ "./src/app/project.ts");
            /* harmony import */ var src_app_client_locations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/client-locations.service */ "./src/app/client-locations.service.ts");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
            var ProjectsComponent = /** @class */ (function () {
                function ProjectsComponent(projectsService, clientLocationsService) {
                    this.projectsService = projectsService;
                    this.clientLocationsService = clientLocationsService;
                    this.projects = [];
                    this.clientLocations = [];
                    this.showLoading = true;
                    this.newProject = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
                    this.editProject = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
                    this.editIndex = null;
                    this.deleteProject = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
                    this.deleteIndex = null;
                    this.searchBy = "ProjectName";
                    this.searchText = "";
                }
                ProjectsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.projectsService.getAllProjects().subscribe(function (response) {
                        _this.projects = response;
                        _this.showLoading = false;
                    });
                    this.clientLocationsService.getClientLocation().subscribe(function (response) {
                        _this.clientLocations = response;
                    });
                };
                ProjectsComponent.prototype.onNewClick = function () {
                    this.newForm.resetForm();
                };
                ProjectsComponent.prototype.onSaveClick = function () {
                    var _this = this;
                    if (this.newForm.valid) {
                        this.newProject.clientLocation.clientLocationID = 0;
                        this.projectsService.insertProject(this.newProject).subscribe(function (response) {
                            var p = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
                            p.projectID = response.projectID;
                            p.projectName = response.projectName;
                            p.dateOfStart = response.dateOfStart;
                            p.teamSize = response.teamSize;
                            p.clientLocation = response.clientLocation;
                            p.active = response.active;
                            p.clientLocationID = response.clientLocationID;
                            p.status = response.status;
                            _this.projects.push(p);
                            _this.newProject.projectID = null;
                            _this.newProject.projectName = null;
                            _this.newProject.dateOfStart = null;
                            _this.newProject.teamSize = null;
                            _this.newProject.status = null;
                            _this.newProject.active = false;
                            _this.newProject.clientLocationID = null;
                            jquery__WEBPACK_IMPORTED_MODULE_5__("#newFormCancel").trigger("click");
                        }, function (error) {
                            console.log(error);
                        });
                    }
                };
                ProjectsComponent.prototype.onEditClick = function (event, index) {
                    var _this = this;
                    this.editForm.resetForm();
                    setTimeout(function () {
                        _this.editProject.projectID = _this.projects[index].projectID;
                        _this.editProject.projectName = _this.projects[index].projectName;
                        _this.editProject.dateOfStart = _this.projects[index].dateOfStart.split("").reverse().join("-"); //yyyy-MM-dd
                        _this.editProject.teamSize = _this.projects[index].teamSize;
                        _this.editProject.clientLocationID = _this.projects[index].clientLocationID;
                        _this.editProject.active = _this.projects[index].active;
                        _this.editProject.status = _this.projects[index].status;
                        _this.editProject.clientLocation = _this.projects[index].clientLocation;
                        _this.editIndex = index;
                    }, 100);
                };
                ProjectsComponent.prototype.onUpdateClick = function () {
                    var _this = this;
                    if (this.editForm.valid) {
                        this.projectsService.updateProject(this.editProject).subscribe(function (response) {
                            var p = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
                            p.projectID = response.projectID;
                            p.projectName = response.projectName;
                            p.dateOfStart = response.dateOfStart;
                            p.teamSize = response.teamSize;
                            p.active = response.active;
                            p.clientLocation = response.clientLocation;
                            p.status = response.status;
                            p.clientLocationID = response.clientLocationID;
                            _this.projects[_this.editIndex] = p;
                            _this.editProject.projectID = null;
                            _this.editProject.projectName = null;
                            _this.editProject.dateOfStart = null;
                            _this.editProject.teamSize = null;
                            _this.editProject.active = null;
                            _this.editProject.status = null;
                            _this.editProject.clientLocationID = null;
                            _this.editProject.clientLocation = null;
                            jquery__WEBPACK_IMPORTED_MODULE_5__("#editFormCancel").trigger("click");
                        }, function (error) {
                            console.log(error);
                        });
                    }
                };
                ProjectsComponent.prototype.onDeleteClick = function (event, index) {
                    this.deleteIndex = index;
                    this.deleteProject.projectID = this.projects[index].projectID;
                    this.deleteProject.projectName = this.projects[index].projectName;
                    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
                    this.deleteProject.teamSize = this.projects[index].teamSize;
                };
                ProjectsComponent.prototype.onDeleteConfirmClick = function () {
                    var _this = this;
                    this.projectsService.deleteProject(this.deleteProject.projectID).subscribe(function (response) {
                        _this.projects.splice(_this.deleteIndex, 1);
                        _this.deleteProject.projectID = null;
                        _this.deleteProject.projectName = null;
                        _this.deleteProject.dateOfStart = null;
                        _this.deleteProject.teamSize = null;
                    }, function (error) {
                        console.log(error);
                    });
                };
                ProjectsComponent.prototype.onSearchClick = function () {
                    var _this = this;
                    this.projectsService.SearchProjects(this.searchBy, this.searchText).subscribe(function (response) {
                        _this.projects = response;
                    }, function (error) {
                        console.log(error);
                    });
                };
                return ProjectsComponent;
            }());
            ProjectsComponent.ctorParameters = function () { return [
                { type: _projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] },
                { type: src_app_client_locations_service__WEBPACK_IMPORTED_MODULE_4__["ClientLocationsService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("newForm", { static: false })
            ], ProjectsComponent.prototype, "newForm", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("editForm", { static: false })
            ], ProjectsComponent.prototype, "editForm", void 0);
            ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-projects',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/projects/projects.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/admin/projects/projects.component.scss")).default]
                })
            ], ProjectsComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
            /* harmony import */ var _admin_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/about/about.component */ "./src/app/admin/about/about.component.ts");
            /* harmony import */ var _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/projects/projects.component */ "./src/app/admin/projects/projects.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./can-activate-guard.service */ "./src/app/can-activate-guard.service.ts");
            /* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
            /* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
            var routes = [
                { path: "", redirectTo: "login", pathMatch: "full" },
                { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                { path: "signup", component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"] },
                { path: "dashboard", component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuardService"]], data: {
                        expectedRole: "admin"
                    } },
                { path: "about", component: _admin_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
                { path: "projects", component: _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuardService"]], data: {
                        expectedRole: "admin"
                    } },
                { path: "tasks", component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_9__["TasksComponent"], canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuardService"]], data: {
                        expectedRole: "employee"
                    } }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(loginService, domSanitizer) {
                    this.loginService = loginService;
                    this.domSanitizer = domSanitizer;
                }
                AppComponent.prototype.onSearchClick = function () {
                    console.log(this.loginService.currentUserName);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jwt-interceptor.service */ "./src/app/jwt-interceptor.service.ts");
            /* harmony import */ var _jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jwt-un-authorized-interceptor.service */ "./src/app/jwt-un-authorized-interceptor.service.ts");
            /* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
            /* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"],
                        _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_13__["TasksComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                        _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__["AdminModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtModule"].forRoot({
                            config: {
                                tokenGetter: function () {
                                    return (sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token :
                                        null);
                                }
                            }
                        })
                    ],
                    providers: [
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                            useClass: _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["JwtInterceptorService"],
                            multi: true
                        },
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                            useClass: _jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["JwtUnAuthorizedInterceptorService"],
                            multi: true
                        }
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/can-activate-guard.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/can-activate-guard.service.ts ***!
          \***********************************************/
        /*! exports provided: CanActivateGuardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateGuardService", function () { return CanActivateGuardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
            var CanActivateGuardService = /** @class */ (function () {
                function CanActivateGuardService(loginService, router, jwtHelperservice) {
                    this.loginService = loginService;
                    this.router = router;
                    this.jwtHelperservice = jwtHelperservice;
                }
                CanActivateGuardService.prototype.canActivate = function (route) {
                    //console.log(this.router.url);
                    var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token :
                        null;
                    if (this.loginService.isAuthenticated() && this.jwtHelperservice.decodeToken(token).role ==
                        route.data.expectedRole) {
                        return true;
                    }
                    else {
                        this.router.navigate(["login"]);
                        return false;
                    }
                };
                return CanActivateGuardService;
            }());
            CanActivateGuardService.ctorParameters = function () { return [
                { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"] }
            ]; };
            CanActivateGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CanActivateGuardService);
            /***/ 
        }),
        /***/ "./src/app/client-location-status-validator.directive.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/client-location-status-validator.directive.ts ***!
          \***************************************************************/
        /*! exports provided: ClientLocationStatusValidatorDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLocationStatusValidatorDirective", function () { return ClientLocationStatusValidatorDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var ClientLocationStatusValidatorDirective_1;
            var ClientLocationStatusValidatorDirective = ClientLocationStatusValidatorDirective_1 = /** @class */ (function () {
                function ClientLocationStatusValidatorDirective() {
                }
                ClientLocationStatusValidatorDirective.prototype.validate = function (control) {
                    var isValid = true;
                    if (control.value.ClientLocation == 6 && control.value.Status == "Support") {
                        isValid = false;
                    }
                    if (isValid == true) {
                        return null;
                    }
                    else {
                        return { clientLocatioStatus: { valid: false } };
                    }
                };
                return ClientLocationStatusValidatorDirective;
            }());
            ClientLocationStatusValidatorDirective = ClientLocationStatusValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[appClientLocationStatusValidator]',
                    providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: ClientLocationStatusValidatorDirective_1, multi: true }]
                })
            ], ClientLocationStatusValidatorDirective);
            /***/ 
        }),
        /***/ "./src/app/client-location.ts": 
        /*!************************************!*\
          !*** ./src/app/client-location.ts ***!
          \************************************/
        /*! exports provided: ClientLocation */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLocation", function () { return ClientLocation; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ClientLocation = /** @class */ (function () {
                function ClientLocation() {
                    this.clientLocationID = null;
                    this.clientLocationName = null;
                }
                return ClientLocation;
            }());
            /***/ 
        }),
        /***/ "./src/app/client-locations.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/client-locations.service.ts ***!
          \*********************************************/
        /*! exports provided: ClientLocationsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLocationsService", function () { return ClientLocationsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ClientLocationsService = /** @class */ (function () {
                function ClientLocationsService(httpClient) {
                    this.httpClient = httpClient;
                }
                ClientLocationsService.prototype.getClientLocation = function () {
                    return this.httpClient.get("/api/clientlocations", { responseType: "json" });
                };
                return ClientLocationsService;
            }());
            ClientLocationsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ClientLocationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ClientLocationsService);
            /***/ 
        }),
        /***/ "./src/app/countries.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/countries.service.ts ***!
          \**************************************/
        /*! exports provided: CountriesService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesService", function () { return CountriesService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var CountriesService = /** @class */ (function () {
                function CountriesService(httpClient) {
                    this.httpClient = httpClient;
                }
                CountriesService.prototype.getCountries = function () {
                    return this.httpClient.get("/api/countries", { responseType: "json" });
                };
                return CountriesService;
            }());
            CountriesService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            CountriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CountriesService);
            /***/ 
        }),
        /***/ "./src/app/custom-validators.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/custom-validators.service.ts ***!
          \**********************************************/
        /*! exports provided: CustomValidatorsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidatorsService", function () { return CustomValidatorsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CustomValidatorsService = /** @class */ (function () {
                function CustomValidatorsService() {
                }
                CustomValidatorsService.prototype.compareValidator = function (controlToValidate, controlToCompare) {
                    return function (formGroup) {
                        if (!formGroup.get(controlToCompare).value)
                            return null;
                        if (formGroup.get(controlToValidate).value == formGroup.get(controlToCompare).value)
                            return null;
                        else {
                            formGroup.get(controlToValidate).setErrors({
                                compareValidator: { valid: false }
                            });
                            return { compareValidator: { valid: false } };
                        }
                    };
                };
                return CustomValidatorsService;
            }());
            CustomValidatorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CustomValidatorsService);
            /***/ 
        }),
        /***/ "./src/app/dashboard.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/dashboard.service.ts ***!
          \**************************************/
        /*! exports provided: DashboardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function () { return DashboardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DashboardService = /** @class */ (function () {
                function DashboardService() {
                }
                DashboardService.prototype.getTeamMembersSummary = function () {
                    var TeamMembersSummary = [
                        { Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4 },
                        { Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8 },
                        { Region: "South", TeamMembersCount: 17, TemporarilyUnavailableMembers: 1 },
                        { Region: "North", TeamMembersCount: 15, TemporarilyUnavailableMembers: 6 }
                    ];
                    return TeamMembersSummary;
                };
                return DashboardService;
            }());
            DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], DashboardService);
            /***/ 
        }),
        /***/ "./src/app/jwt-interceptor.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/jwt-interceptor.service.ts ***!
          \********************************************/
        /*! exports provided: JwtInterceptorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function () { return JwtInterceptorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var JwtInterceptorService = /** @class */ (function () {
                function JwtInterceptorService() {
                }
                JwtInterceptorService.prototype.intercept = function (request, next) {
                    var currentUser = { token: "" };
                    if (sessionStorage.currentUser != null) {
                        currentUser = JSON.parse(sessionStorage.currentUser);
                    }
                    request = request.clone({
                        setHeaders: {
                            Authorization: "Bearer" + currentUser.token
                        }
                    });
                    return next.handle(request);
                };
                return JwtInterceptorService;
            }());
            JwtInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], JwtInterceptorService);
            /***/ 
        }),
        /***/ "./src/app/jwt-un-authorized-interceptor.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/jwt-un-authorized-interceptor.service.ts ***!
          \**********************************************************/
        /*! exports provided: JwtUnAuthorizedInterceptorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtUnAuthorizedInterceptorService", function () { return JwtUnAuthorizedInterceptorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var JwtUnAuthorizedInterceptorService = /** @class */ (function () {
                function JwtUnAuthorizedInterceptorService() {
                }
                JwtUnAuthorizedInterceptorService.prototype.intercept = function (request, next) {
                    return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
                        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                        }
                    }, function (error) {
                        if (error.status == 401) {
                            console.log(error);
                            alert("401 UnAuthorized");
                        }
                    }));
                };
                return JwtUnAuthorizedInterceptorService;
            }());
            JwtUnAuthorizedInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], JwtUnAuthorizedInterceptorService);
            /***/ 
        }),
        /***/ "./src/app/login-view-model.ts": 
        /*!*************************************!*\
          !*** ./src/app/login-view-model.ts ***!
          \*************************************/
        /*! exports provided: LoginViewModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginViewModel", function () { return LoginViewModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var LoginViewModel = /** @class */ (function () {
                function LoginViewModel() {
                }
                return LoginViewModel;
            }());
            /***/ 
        }),
        /***/ "./src/app/login.service.ts": 
        /*!**********************************!*\
          !*** ./src/app/login.service.ts ***!
          \**********************************/
        /*! exports provided: LoginService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function () { return LoginService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
            var LoginService = /** @class */ (function () {
                function LoginService(httpBackend, jwtHelperservice) {
                    this.httpBackend = httpBackend;
                    this.jwtHelperservice = jwtHelperservice;
                    this.currentUserName = null;
                }
                LoginService.prototype.Login = function (loginViewModel) {
                    var _this = this;
                    this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](this.httpBackend);
                    return this.httpClient.post("/authenticate", loginViewModel, { responseType: "json", observe: "response" })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                        if (response) {
                            _this.currentUserName = response.body.userName;
                            sessionStorage.currentUser = JSON.stringify(response.body);
                            sessionStorage.XSRFRequestToken = response.headers.get("XSRF-REQUEST-TOKEN");
                        }
                        return response.body;
                    }));
                };
                LoginService.prototype.Register = function (signUpViewModel) {
                    var _this = this;
                    this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](this.httpBackend);
                    return this.httpClient.post("/register", signUpViewModel, { responseType: "json", observe: "response" })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                        if (response) {
                            _this.currentUserName = response.body.userName;
                            sessionStorage.currentUser = JSON.stringify(response.body);
                            sessionStorage.XSRFRequestToken = response.headers.get("XSRF-REQUEST-TOKEN");
                        }
                        return response.body;
                    }));
                };
                LoginService.prototype.Logout = function () {
                    sessionStorage.removeItem("currentUser");
                    this.currentUserName = null;
                };
                LoginService.prototype.isAuthenticated = function () {
                    var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token :
                        null;
                    if (this.jwtHelperservice.isTokenExpired()) {
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                return LoginService;
            }());
            LoginService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"] },
                { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"] }
            ]; };
            LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LoginService);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/login/login.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _login_view_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-view-model */ "./src/app/login-view-model.ts");
            /* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(loginService, router) {
                    this.loginService = loginService;
                    this.router = router;
                    this.loginViewModel = new _login_view_model__WEBPACK_IMPORTED_MODULE_2__["LoginViewModel"]();
                    this.loginError = "";
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.onLoginClick = function (event) {
                    var _this = this;
                    this.loginService.Login(this.loginViewModel).subscribe(function (response) {
                        _this.router.navigateByUrl("dashboard");
                    }, function (error) {
                        console.log(error);
                        _this.loginError = "Invalid Username or Password";
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/project-idunique-validator.directive.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/project-idunique-validator.directive.ts ***!
          \*********************************************************/
        /*! exports provided: ProjectIDUniqueValidatorDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectIDUniqueValidatorDirective", function () { return ProjectIDUniqueValidatorDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.service */ "./src/app/projects.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var ProjectIDUniqueValidatorDirective_1;
            var ProjectIDUniqueValidatorDirective = ProjectIDUniqueValidatorDirective_1 = /** @class */ (function () {
                function ProjectIDUniqueValidatorDirective(projectsService) {
                    this.projectsService = projectsService;
                }
                ProjectIDUniqueValidatorDirective.prototype.validate = function (control) {
                    return this.projectsService.getProjectByProjectID(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (existingProject) {
                        if (existingProject != null) {
                            return { uniqueProjectID: { valid: false } };
                        }
                        else {
                            return null;
                        }
                    }));
                };
                return ProjectIDUniqueValidatorDirective;
            }());
            ProjectIDUniqueValidatorDirective.ctorParameters = function () { return [
                { type: _projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }
            ]; };
            ProjectIDUniqueValidatorDirective = ProjectIDUniqueValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[appProjectIDUniqueValidator]',
                    providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_ASYNC_VALIDATORS"], useExisting: ProjectIDUniqueValidatorDirective_1, multi: true }]
                })
            ], ProjectIDUniqueValidatorDirective);
            /***/ 
        }),
        /***/ "./src/app/project.ts": 
        /*!****************************!*\
          !*** ./src/app/project.ts ***!
          \****************************/
        /*! exports provided: Project */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function () { return Project; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _client_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-location */ "./src/app/client-location.ts");
            var Project = /** @class */ (function () {
                function Project() {
                    this.projectID = null;
                    this.projectName = null;
                    this.dateOfStart = null;
                    this.teamSize = null;
                    this.active = true;
                    this.status = null;
                    this.clientLocationID = null;
                    this.clientLocation = new _client_location__WEBPACK_IMPORTED_MODULE_1__["ClientLocation"]();
                }
                return Project;
            }());
            /***/ 
        }),
        /***/ "./src/app/projects.service.ts": 
        /*!*************************************!*\
          !*** ./src/app/projects.service.ts ***!
          \*************************************/
        /*! exports provided: ProjectsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function () { return ProjectsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var ProjectsService = /** @class */ (function () {
                function ProjectsService(httpClient) {
                    this.httpClient = httpClient;
                }
                ProjectsService.prototype.getAllProjects = function () {
                    return this.httpClient.get("/api/projects", { responseType: "json" })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                        for (var i = 0; i < data.length; i++) {
                            //data[i].teamSize = data[i].teamSize*100;
                        }
                        return data;
                    }));
                };
                ProjectsService.prototype.getProjectByProjectID = function (ProjectID) {
                    return this.httpClient.put("/api/projects/searchbyprojectid", ProjectID, { responseType: "json" });
                };
                ProjectsService.prototype.insertProject = function (newProject) {
                    var requestHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    requestHeaders.set("X-XSRF-TOKEN", sessionStorage.XSRFRequestToken);
                    return this.httpClient.post("/api/projects", newProject, { headers: requestHeaders, responseType: "json" });
                };
                ProjectsService.prototype.updateProject = function (existingProject) {
                    return this.httpClient.put("/api/projects", existingProject, { responseType: "json" });
                };
                ProjectsService.prototype.deleteProject = function (ProjectID) {
                    return this.httpClient.delete("/api/projects?ProjectID=" + ProjectID);
                };
                ProjectsService.prototype.SearchProjects = function (searchBy, searchText) {
                    return this.httpClient.get("/api/projects/search/" + searchBy + "/" + searchText, { responseType: "json" });
                };
                return ProjectsService;
            }());
            ProjectsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ProjectsService);
            /***/ 
        }),
        /***/ "./src/app/sign-up/sign-up.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/sign-up/sign-up.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/sign-up/sign-up.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/sign-up/sign-up.component.ts ***!
          \**********************************************/
        /*! exports provided: SignUpComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () { return SignUpComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../countries.service */ "./src/app/countries.service.ts");
            /* harmony import */ var _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-validators.service */ "./src/app/custom-validators.service.ts");
            /* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SignUpComponent = /** @class */ (function () {
                function SignUpComponent(countriesService, formBuilder, customValidatorsService, loginService, router) {
                    this.countriesService = countriesService;
                    this.formBuilder = formBuilder;
                    this.customValidatorsService = customValidatorsService;
                    this.loginService = loginService;
                    this.router = router;
                    this.sexs = ["male", "female"];
                    this.countries = [];
                    this.registerError = null;
                }
                SignUpComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.countriesService.getCountries().subscribe(function (response) {
                        _this.countries = response;
                    });
                    this.signUpForm = this.formBuilder.group({
                        personName: this.formBuilder.group({
                            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
                            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
                        }),
                        email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        phoneNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        dateOfBirth: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        sex: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        countryID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        receiveNewsLetters: [null],
                        skills: this.formBuilder.array([])
                    }, {
                        validators: [
                            this.customValidatorsService.compareValidator("confirmPassword", "password")
                        ]
                    });
                    this.signUpForm.valueChanges.subscribe(function (value) {
                        //console.log(value);
                    });
                };
                SignUpComponent.prototype.onSubmitClick = function () {
                    var _this = this;
                    //console.log(this.signUpForm.value);
                    //this.signUpForm["submitted"]=true;
                    //console.log(this.signUpForm);
                    if (this.signUpForm.valid) {
                        var signUpViewModel = this.signUpForm.value;
                        this.loginService.Register(signUpViewModel).subscribe(function (response) {
                            _this.router.navigate(["tasks"]);
                        }, function (error) {
                            console.log(error);
                            _this.registerError = "Unable to submit";
                        });
                    }
                };
                SignUpComponent.prototype.onAddSkill = function () {
                    var formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        skillName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
                        level: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
                    });
                    this.signUpForm.get("skills").push(formGroup);
                };
                SignUpComponent.prototype.onRemoveClick = function (index) {
                    this.signUpForm.get("skills").removeAt(index);
                };
                return SignUpComponent;
            }());
            SignUpComponent.ctorParameters = function () { return [
                { type: _countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"] },
                { type: _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
            ]; };
            SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sign-up',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/sign-up/sign-up.component.scss")).default]
                })
            ], SignUpComponent);
            /***/ 
        }),
        /***/ "./src/app/tasks/tasks.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/tasks/tasks.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/tasks/tasks.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/tasks/tasks.component.ts ***!
          \******************************************/
        /*! exports provided: TasksComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function () { return TasksComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TasksComponent = /** @class */ (function () {
                function TasksComponent() {
                }
                TasksComponent.prototype.ngOnInit = function () {
                };
                return TasksComponent;
            }());
            TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tasks',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tasks.component.scss */ "./src/app/tasks/tasks.component.scss")).default]
                })
            ], TasksComponent);
            /***/ 
        }),
        /***/ "./src/app/team-size-validator.directive.ts": 
        /*!**************************************************!*\
          !*** ./src/app/team-size-validator.directive.ts ***!
          \**************************************************/
        /*! exports provided: TeamSizeValidatorDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSizeValidatorDirective", function () { return TeamSizeValidatorDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var TeamSizeValidatorDirective_1;
            var TeamSizeValidatorDirective = TeamSizeValidatorDirective_1 = /** @class */ (function () {
                function TeamSizeValidatorDirective() {
                }
                TeamSizeValidatorDirective.prototype.validate = function (control) {
                    var currentValue = control.value;
                    var isValid = currentValue % this.n == 0;
                    if (isValid) {
                        return null;
                    }
                    else {
                        return { divisible: { valid: false } };
                    }
                };
                return TeamSizeValidatorDirective;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("appTeamSizeValidator")
            ], TeamSizeValidatorDirective.prototype, "n", void 0);
            TeamSizeValidatorDirective = TeamSizeValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[appTeamSizeValidator]',
                    providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: TeamSizeValidatorDirective_1, multi: true }]
                })
            ], TeamSizeValidatorDirective);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Talha\source\repos\Comp586\Angular\TaskManager\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map