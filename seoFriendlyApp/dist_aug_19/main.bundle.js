webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\t\t<div id=\"main\" class=\"container\">\n\n\t\t\t<div class=\"section row entries bg-primary section-no-margin-bottom\">\n\n\t\t\t\t<article class=\"entry style-grid style-hero hero-sm-largest type-post col-sm-12 col-md-6 colheight-sm-1 colheight-md-2 colheight-lg-2 colheight-xl-2\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"ribbon ribbon-pulled ribbon-small ribbon-highlight\">\n\t\t\t\t\t\t<a href=\"blog.html\">{{blogdetails[0].blog_name}}</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<header class=\"entry-header\">\n\t\t\t\t\t\t<h3 class=\"entry-title\"><a routerLink=\"/{{blogdetails[0].category_name}}/{{blogdetails[0].seo_url}}\">{{blogdetails[0].blog_description}}</a> </h3>\n\t\t\t\t\t\t<div class=\"entry-meta\">\n\t\t\t\t\t\t\t<span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n\t\t\t\t\t\t\t<span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</header>\n\n\t\t\t\t\t<figure class=\"entry-thumbnail\">\n\n\t\t\t\t\t\t<a routerLink=\"/{{blogdetails[0].category_name}}/{{blogdetails[0].seo_url}}\" class=\"overlay overlay-primary\"></a>\n\n\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t<img src={{img_path}}{{blogdetails[0].blog_images}}  width=\"680\" height=\"452\" alt=\"\">\n\n\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t<img src={{img_path}}{{blogdetails[0].blog_images}} alt=\"\">\n\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t</figure>\n\n\t\t\t\t</article>\n\n\t\t\t\t<article class=\"entry style-grid style-hero type-post col-md-6 col-lg-3 colheight-sm-1\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"ribbon ribbon-pulled ribbon-small ribbon-highlight\">\n\t\t\t\t\t\t<a href=\"\">{{blogdetails[1].blog_name}}</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<header class=\"entry-header\">\n\t\t\t\t\t\t<h3 class=\"entry-title\"><a routerLink=\"/{{blogdetails[1].category_name}}/{{blogdetails[1].seo_url}}\">{{blogdetails[1].blog_description}}</a> </h3>\n\t\t\t\t\t\t<div class=\"entry-meta\">\n\t\t\t\t\t\t\t<span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n\t\t\t\t\t\t\t<span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</header>\n\t\t\t\t\t\n\t\t\t\t\t<figure class=\"entry-thumbnail\">\n\n\t\t\t\t\t\t<a routerLink=\"/{{blogdetails[1].category_name}}/{{blogdetails[1].seo_url}}\" class=\"overlay overlay-primary\"></a>\n\n\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t<img src={{img_path}}{{blogdetails[1].blog_images}} width=\"480\" height=\"280\" alt=\"\">\n\n\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t<img src={{img_path}}{{blogdetails[1].blog_images}} alt=\"\">\n\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t</figure>\n\n\t\t\t\t</article>\n\n\t\t\t\t<article class=\"entry style-grid style-hero type-post col-md-6 col-lg-3 colheight-sm-1\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"ribbon ribbon-pulled ribbon-small ribbon-highlight\">\n\t\t\t\t\t\t<a href=\"blog.html\">{{blogdetails[2].blog_name}}</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<header class=\"entry-header\">\n\t\t\t\t\t\t<h3 class=\"entry-title\"><a routerLink=\"/{{blogdetails[2].category_name}}/{{blogdetails[2].seo_url}}\">{{blogdetails[2].blog_description}}</a> </h3>\n\t\t\t\t\t\t<div class=\"entry-meta\">\n\t\t\t\t\t\t\t<span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n\t\t\t\t\t\t\t<span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</header>\n\t\t\t\t\t\n\t\t\t\t\t<figure class=\"entry-thumbnail\">\n\n\t\t\t\t\t\t<a routerLink=\"/{{blogdetails[2].category_name}}/{{blogdetails[2].seo_url}}\" class=\"overlay overlay-primary\"></a>\n\n\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t<img src={{img_path}}{{blogdetails[2].blog_images}} width=\"680\" height=\"452\" alt=\"\">\n\n\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t<img src={{img_path}}{{blogdetails[2].blog_images}} alt=\"\">\n\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t</figure>\n\n\t\t\t\t</article>\n\n\t\t\t\t<article class=\"entry style-grid style-hero type-post col-md-6 col-lg-3 colheight-sm-1\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"ribbon ribbon-pulled ribbon-small ribbon-highlight\">\n\t\t\t\t\t\t<a href=\"blog.html\">{{blogdetails[3].blog_name}}</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<header class=\"entry-header\">\n\t\t\t\t\t\t<h3 class=\"entry-title\"><a routerLink=\"/{{blogdetails[3].category_name}}/{{blogdetails[3].seo_url}}\">{{blogdetails[3].blog_description}}</a></h3>\n\t\t\t\t\t\t<div class=\"entry-meta\">\n\t\t\t\t\t\t\t<span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n\t\t\t\t\t\t\t<span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</header>\n\t\t\t\t\t\n\t\t\t\t\t<figure class=\"entry-thumbnail\">\n\n\t\t\t\t\t\t<a routerLink=\"/{{blogdetails[3].category_name}}/{{blogdetails[3].seo_url}}\" class=\"overlay overlay-primary\"></a>\n\n\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t<img src={{img_path}}{{blogdetails[3].blog_images}} width=\"480\" height=\"280\" alt=\"\">\n\n\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t<img src={{img_path}}{{blogdetails[3].blog_images}} alt=\"\">\n\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t</figure>\n\n\t\t\t\t</article>\n\n\t\t\t\t<article class=\"entry style-grid style-hero type-post col-md-6 col-lg-3 colheight-sm-1\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"ribbon ribbon-pulled ribbon-small ribbon-highlight\">\n\t\t\t\t\t\t<a href=\"blog.html\">{{blogdetails[4].blog_name}}</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<header class=\"entry-header\">\n\t\t\t\t\t\t<h3 class=\"entry-title\"><a routerLink=\"/{{blogdetails[4].category_name}}/{{blogdetails[4].seo_url}}\">{{blogdetails[4].blog_description}}</a></h3>\n\t\t\t\t\t\t<div class=\"entry-meta\">\n\t\t\t\t\t\t\t<span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n\t\t\t\t\t\t\t<span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</header>\n\t\t\t\t\t\n\t\t\t\t\t<figure class=\"entry-thumbnail\">\n\n\t\t\t\t\t\t<a routerLink=\"/{{blogdetails[4].category_name}}/{{blogdetails[4].seo_url}}\" class=\"overlay overlay-primary\"></a>\n\n\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t<img src={{img_path}}{{blogdetails[4].blog_images}} width=\"480\" height=\"280\" alt=\"\">\n\n\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t<img src={{img_path}}{{blogdetails[4].blog_images}} alt=\"\">\n\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t</figure>\n\n\t\t\t\t</article>\n\n\t\t\t</div>\n\n\t\t\t<div id=\"content\" class=\"content section row\">\n\n\t\t\t\t<div class=\"col-md-8 bg-base col-lg-8 col-xl-9\">\n\n\t\t\t\t\t<div class=\"ribbon ribbon-highlight\">\n\t\t\t\t\t\t<ol class=\"breadcrumb ribbon-inner\">\n\t\t\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">Features</a></li>\n\t\t\t\t\t\t\t<li class=\"active\">Blog 2 Columns</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"entries\">\n                  \n\t\t\t\t\t\t<article class=\"entry style-media media type-post\" *ngFor=\"let subone1 of singdetails | paginate: { itemsPerPage: 8, currentPage: p };let i=index\">\n\t\t\t\t\t\t\t<a routerLink=\"/{{category}}/{{subone1.seo_url}}\">\n\t\t\t\t\t\t\t<figure class=\"media-object pull-left entry-thumbnail hidden-xs\">\n\t\t\t\t\t\t\t\t<img src={{img_path}}{{subone1.blog_images}}  width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/230x230\" alt=\"\">\n\t\t\t\t\t\t\t\t</noscript>\n\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t<header class=\"entry-header\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"entry-title\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"single.html\" rel=\"bookmark\">{{subone1.seo_title}}</a>\n\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t<div class=\"entry-meta\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"author\">by <a href=\"blog.html\">John Doe</a></span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"entry-date\"><a href=\"blog.html\">on <time datetime=\"2013-07-04T23:26:34+00:00\">September 20 2013</time></a></span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"category\">In <a href=\"blog.html\">Entertaintment</a></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</header>\n                                <div >\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t{{descri[i]}}\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/{{category}}/{{subone1.seo_url}}\">Continue Reading<i class=\"icon icon-long-arrow-right\"></i></a>\n\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t    \t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div><!--/.entris-->\n\t\t\t\t\t<pagination-controls (pageChange)=\"p = $event\" ></pagination-controls>\n\t\t\t\t\t\n\t\t\t\t</div><!--/.col-md-8.col-lg-8.col-xl-9-->\n\n\n\t\t\t<div class=\"sidebar col-md-4 col-lg-4 col-xl-3\">\n\t\t\t\t\n\t\t\t\t<aside class=\"widget\" *ngFor=\"let post of feature_post1\">\n\n\t\t\t\t\t<h2 class=\"widget-title ribbon\"><span>{{post.subcategory_name}}</span></h2>\n\n\t\t\t\t\t<div class=\"entries row\" *ngFor=\"let blog of collection\">\n\t\t\t\t\t\t<article class=\"type-post style-media-list media col-sm-6 col-md-12\" *ngIf=\"post.subcategory_id == blog.blog_subcategories\">\n\n\t\t\t\t\t\t\t<a routerLink=\"/{{category}}/{{blog.seo_url}}\">\n\t\t\t\t\t\t\t<img src={{img_path}}{{blog.blog_images}} width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t<h3  class=\"entry-title\">\n\t\t\t\t\t\t\t\t\t<a href=\"single.html\" rel=\"bookmark\">{{blog.blog_name}}</a>\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t<div class=\"entry-meta\">\n\t\t\t\t\t\t\t\t\t<span class=\"entry-date\"><a href=\"blog.html\">on <time datetime=\"2013-07-04T23:26:34+00:00\">September 20 2013</time></a></span>\n\t\t\t\t\t\t\t\t\t<span class=\"category\">In <a href=\"blog.html\">Technology</a></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n                         </a>\n\t\t\t\t\t\t</article>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</aside><!--/.widget-->\n\n\t\t\t\t\n\t\t\t</div><!--/.sidebar col-md-4 col-lg-4 col-xl-3-->\n\n\n\t\t\t</div><!--/#content-->\n\n\n\t\t\t\n\t\t</div><!--#main.container-->"

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__seo_service__ = __webpack_require__("../../../../../src/app/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service_service__ = __webpack_require__("../../../../../src/app/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent(seo, _service, router, route) {
        this.seo = seo;
        this._service = _service;
        this.router = router;
        this.route = route;
        this.p = 1;
        this.descri = [];
        this.feature_post = [];
        this.feature_post1 = [];
        this.img_path = "http://termsoflife.com/api_v1/upload/";
        this.collection = [];
        this.blog_ban = __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalVariable */].BASE_API_URL + "Homebanner/blogbanner";
        this.get_details_page = __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalVariable */].BASE_API_URL + "blog/getcategoryblogs";
        this.id = 'first_blog_seo';
        this.category = 'second';
    }
    AboutPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.longtest = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
        this._service.list(this.blog_ban).subscribe(function (blogdetails) {
            _this.blogdetails = blogdetails;
        });
        this.getDetailpage();
    };
    AboutPageComponent.prototype.getDetailpage = function () {
        var _this = this;
        this._service.
            list(this.get_details_page + '?category=May1').subscribe(function (singdetails) {
            _this.singdetails = singdetails.full;
            _this.feature_post = singdetails.sub;
            //this.descri=this.singdetails.full['blog_description'];         
            for (var key in _this.feature_post) {
                if (_this.feature_post[key].blog.length > 0) {
                    _this.feature_post1.push(_this.feature_post[key]);
                }
                for (var key1 in _this.feature_post[key].blog) {
                    _this.collection.push(_this.feature_post[key].blog[key1]);
                }
            }
            for (var key2 in _this.singdetails) {
                _this.descri.push(_this.singdetails[key2]['blog_description'].slice(0, 4));
            }
        });
    };
    AboutPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-page',
            template: __webpack_require__("../../../../../src/app/about-page/about-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__seo_service__["a" /* SeoService */],
            __WEBPACK_IMPORTED_MODULE_3__common_service_service__["a" /* CommonServiceService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_page_about_page_component__ = __webpack_require__("../../../../../src/app/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_page_contact_page_component__ = __webpack_require__("../../../../../src/app/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_demo_firebase_demo_component__ = __webpack_require__("../../../../../src/app/firebase-demo/firebase-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__details_page_details_page_component__ = __webpack_require__("../../../../../src/app/details-page/details-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_details_search_details_component__ = __webpack_require__("../../../../../src/app/search-details/search-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__["a" /* HomePageComponent */], },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_3__about_page_about_page_component__["a" /* AboutPageComponent */], },
    { path: 'contact-page', component: __WEBPACK_IMPORTED_MODULE_4__contact_page_contact_page_component__["a" /* ContactPageComponent */], },
    { path: 'firebase-page', component: __WEBPACK_IMPORTED_MODULE_5__firebase_demo_firebase_demo_component__["a" /* FirebaseDemoComponent */], },
    { path: ':category/:id', component: __WEBPACK_IMPORTED_MODULE_6__details_page_details_page_component__["a" /* DetailsPageComponent */], },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_7__search_details_search_details_component__["a" /* SearchDetailsComponent */], }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_truncate__ = __webpack_require__("../../../../ng2-truncate/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_page_contact_page_component__ = __webpack_require__("../../../../../src/app/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_page_about_page_component__ = __webpack_require__("../../../../../src/app/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__firebase_demo_firebase_demo_component__ = __webpack_require__("../../../../../src/app/firebase-demo/firebase-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__seo_service__ = __webpack_require__("../../../../../src/app/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_service_service__ = __webpack_require__("../../../../../src/app/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__details_page_details_page_component__ = __webpack_require__("../../../../../src/app/details-page/details-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__search_page_search_page_component__ = __webpack_require__("../../../../../src/app/search-page/search-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__search_details_search_details_component__ = __webpack_require__("../../../../../src/app/search-details/search-details.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contact_page_contact_page_component__["a" /* ContactPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_page_about_page_component__["a" /* AboutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__firebase_demo_firebase_demo_component__["a" /* FirebaseDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__details_page_details_page_component__["a" /* DetailsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__search_page_search_page_component__["a" /* SearchPageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__search_details_search_details_component__["a" /* SearchDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_truncate__["a" /* TruncateModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__seo_service__["a" /* SeoService */], __WEBPACK_IMPORTED_MODULE_13__common_service_service__["a" /* CommonServiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommonServiceService = /** @class */ (function () {
    function CommonServiceService(_http, router) {
        this._http = _http;
        this.router = router;
        this.SearchResult = {};
    }
    CommonServiceService.prototype.list = function (url) {
        return this._http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    CommonServiceService.prototype.searchdetails = function (url, name) {
        return this._http.get(url, name)
            .map(function (res) {
            return res.json();
        });
    };
    CommonServiceService.prototype.search = function (username) {
        this.SearchResult = username;
        this.router.navigateByUrl('search');
    };
    CommonServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], CommonServiceService);
    return CommonServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/contact-page/contact-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__seo_service__ = __webpack_require__("../../../../../src/app/seo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent(seo) {
        this.seo = seo;
    }
    ContactPageComponent.prototype.ngOnInit = function () {
        this.seo.generateTags({
            title: 'Contact1 Page',
            description: 'Contact me through this awesome search engine optimized Angular component',
            image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
            slug: 'contact-page'
        });
    };
    ContactPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-page',
            template: __webpack_require__("../../../../../src/app/contact-page/contact-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact-page/contact-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__seo_service__["a" /* SeoService */]])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/details-page/details-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/details-page/details-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\t\t<div id=\"main\" class=\"container\">\n\n\t\t\t<div class=\"section section-no-margin-bottom row entries bg-primary\">\n\n\t\t\t\t<article class=\"entry style-grid style-hero hero-nav type-post col-xs-6 col-sm-6\">\n\t\t\t\t\t\n\t\t\t\t\t<a routerLink=\"/{{category}}/{{singdetails.previous[0].seo_url}}\">\n\n\t\t\t\t\t\t<header class=\"entry-header\">\n\t\t\t\t\t\t\t<p class=\"small\">Previous Story</p>\n\t\t\t\t\t\t\t<h3 class=\"entry-title\">{{previous}}</h3>\n\t\t\t\t\t\t</header>\n\n\t\t\t\t\t\t<figure class=\"entry-thumbnail\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"overlay overlay-primary\"></div>\n\t\t\t\t\t\t\t<!--a routerLink=\"/{{category}}/{{singdetails.previous[0].seo_url}}\" class=\"overlay overlay-primary\">-->\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t<img src={{img_path}}{{singdetails.previous[0].blog_images}} width=\"480\" height=\"280\" alt=\"\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/480x280\" alt=\"\">\n\t\t\t\t\t\t\t</noscript>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t</a>\n\n\t\t\t\t</article>\n\n\t\t\t\t<article class=\"entry style-grid style-hero hero-nav type-post col-xs-6 col-sm-6\">\n\t\t\t\t\t\n\t\t\t\t\t<a (click)=\"detailover()\" routerLink=\"/{{category}}/{{singdetails.next[0].seo_url}}\" >\n\n\t\t\t\t\t\t<header class=\"entry-header\">\n\t\t\t\t\t\t\t<p class=\"small\">Next Story</p>\n\t\t\t\t\t\t\t<h3 class=\"entry-title\">{{singdetails.next[0].seo_title}}</h3>\n\t\t\t\t\t\t</header>\n\n\t\t\t\t\t\t<figure class=\"entry-thumbnail\">\n\n\t\t\t\t\t\t\t<div class=\"overlay overlay-primary\"></div>\n\n\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t<img src={{img_path}}{{singdetails.next[0].blog_images}}   width=\"480\" height=\"280\" alt=\"\">\n\n\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/480x280\"  alt=\"\">\n\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t</figure>\n\n\t\t\t\t\t</a> \n\n\t\t\t\t</article>\n\n\t\t\t</div>\n\n\t\t\t<div id=\"content\" class=\"content section row\">\n\n\t\t\t\t<div class=\"col-md-8 bg-base col-lg-8 col-xl-9\">\n\n\t\t\t\t\t<div class=\"ribbon ribbon-highlight\">\n\t\t\t\t\t\t<ol class=\"breadcrumb ribbon-inner\">\n\t\t\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">Social Media</a></li>\n\t\t\t\t\t\t\t<li class=\"active\" title=\"Postman will send notifications to your flashy smartphone about popular people and their latest shouts\">Postman will send notifications ...</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<header class=\"page-header\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"page-meta pull-right hidden-xs\">\n\t\t\t\t\t\t\t<a href=\"#comments\">\n\t\t\t\t\t\t\t\t<span class=\"comments-count-balloon bg-primary\">123<em>Comments</em></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2 class=\"page-title\">\n\t\t\t\t\t\t\t{{singdetails.current[0].seo_url}}\n\t\t\t\t\t\t</h2>\n\n\t\t\t\t\t</header>\n\n\t\t\t\t\t<article class=\"entry style-single type-post\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<figure class=\"entry-thumbnail\">\n\n\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t<img src={{img_path}}{{singdetails.current[0].blog_images}} width=\"680\" height=\"452\" alt=\"\">\n\n\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t<img src={{img_path}}{{singdetails.current[0].blog_images}} alt=\"\">\n\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t</figure>\n\n\t\t\t\t\t\t<div class=\"entry-meta indented\">\n\t\t\t\t\t\t\t<!--<span class=\"author\">by <a href=\"blog.html\">John Doe</a></span>\n\t\t\t\t\t\t\t<span class=\"entry-date\"><a href=\"blog.html\">on <time datetime=\"2013-07-04T23:26:34+00:00\">September 20 2013</time></a></span>\n\t\t\t\t\t\t\t<span class=\"category\">In <a href=\"blog.html\">Social Media</a></span>-->\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"entry-content indented\">\n\n\t\t\t\t\t\t\t<p class=\"lead\" bind-textContent=\"singdetails.current[0].seo_url\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t<!-- \n\t\t\t\t\t\t\tsample for adding full image\n\t\t\t\t\t\t\t<figure class=\"image image-full\">\n\n\t\t\t\t\t\t\t\t<img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/680x452\" data-src-retina=\"http://placehold.it/1024x680\" width=\"680\" height=\"452\" alt=\"\">\n\n\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/680x452\" alt=\"\">\n\t\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t</figure> -->\n\n\t\t\t\t\t\t\t<div class=\"gallery bg-page flushed-left\">\n\n\t\t\t\t\t\t\t\t<!-- <h4 class=\"gallery-title\">Gallery</h4> -->\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://placehold.it/460x460\" title=\"Image 1\" class=\"thumbnail\" data-rel=\"prettyPhoto[gallery]\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" alt=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div><!--/.col-xs-2.col-sm-2-->\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://placehold.it/460x460\" title=\"Image 2\" class=\"thumbnail\" data-rel=\"prettyPhoto[gallery]\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" alt=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div><!--/.col-xs-2.col-sm-2-->\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://placehold.it/460x460\" title=\"Image 3\" class=\"thumbnail\" data-rel=\"prettyPhoto[gallery]\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" alt=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div><!--/.col-xs-2.col-sm-2-->\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://placehold.it/460x460\" title=\"Image 4\" class=\"thumbnail\" data-rel=\"prettyPhoto[gallery]\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" alt=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div><!--/.col-xs-2.col-sm-2-->\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://placehold.it/460x460\" title=\"Image 5\" class=\"thumbnail\" data-rel=\"prettyPhoto[gallery]\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" alt=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div><!--/.col-xs-2.col-sm-2-->\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://placehold.it/460x460\" title=\"Image 6\" class=\"thumbnail\" data-rel=\"prettyPhoto[gallery]\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" alt=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div><!--/.col-xs-2.col-sm-2-->\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://placehold.it/460x460\" title=\"Image 7\" class=\"thumbnail\" data-rel=\"prettyPhoto[gallery]\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" alt=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div><!--/.col-xs-2.col-sm-2-->\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://placehold.it/460x460\" title=\"Image 8\" class=\"thumbnail\" data-rel=\"prettyPhoto[gallery]\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" alt=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div><!--/.col-xs-2.col-sm-2-->\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://placehold.it/460x460\" title=\"Image 9\" class=\"thumbnail\" data-rel=\"prettyPhoto[gallery]\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" alt=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div><!--/.col-xs-2.col-sm-2-->\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://placehold.it/460x460\" title=\"Image 10\" class=\"thumbnail\" data-rel=\"prettyPhoto[gallery]\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" alt=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div><!--/.col-xs-2.col-sm-2-->\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://placehold.it/460x460\" title=\"Image 10\" class=\"thumbnail\" data-rel=\"prettyPhoto[gallery]\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" alt=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div><!--/.col-xs-2.col-sm-2-->\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3 col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://placehold.it/460x460\" title=\"Image 2\" class=\"thumbnail\" data-rel=\"prettyPhoto[gallery]\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" alt=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div><!--/.col-xs-2.col-sm-2-->\n\n\t\t\t\t\t\t\t\t</div><!--/.row-->\n\n\t\t\t\t\t\t\t</div><!--/.gallery-->\n\n\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</article>\n\n\t\t\t\t\t<div class=\"after-entry indented\">\n\t\t\t\t\t\t<hr>\n\n\t\t\t\t\t\t<!--<aside class=\"widget\" >\n                         \n\t\t\t\t\t\t\t<h4 class=\"widget-title\">{{singdetails.sub[5].subcategory_name}}</h4>\n\n\t\t\t\t\t\t\t<div class=\"entries row\">\n\n\t\t\t\t\t\t\t\t<article class=\"entry type-post style-thumbnail col-xs-3 col-sm-3\" *ngFor=\"let subsix of sub6\">\n\n\t\t\t\t\t\t\t\t\t<figure class=\"entry-thumbnail\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<img src={{img_path}}{{subsix.blog_images}} width=\"230\" height=\"230\" alt=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t\t\t<img src={{img_path}}{{subsix.blog_images}} alt=\"\">\n\t\t\t\t\t\t\t\t\t\t</noscript>\n\t\t\t\t\t\t\t\t\t</figure>\n\n\t\t\t\t\t\t\t\t\t<h3 class=\"entry-title\"><a href=\"single.html\">{{subsix.seo_title}}</a> </h3>\n\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</article>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</aside>-->\n\n\t\t\t\t\t\t<hr>\n\n\t\t\t\t\t\t<aside class=\"widget\">\n\t\t\t\t\t\t\tShare:\n\t\t\t\t\t\t\t<a href=\"#\" class=\"\" onclick=\"window.open(\n\t\t\t\t\t\t\t\t'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), \n\t\t\t\t\t\t\t\t'facebook-share-dialog', \n\t\t\t\t\t\t\t\t'width=626,height=436'); \n\t\t\t\t\t\t\t\treturn false;\"><span class=\"icon-stack\"><i class=\"icon-sign-blank icon-stack-base\"></i><i class=\"icon-facebook icon-light\"></i></span></a>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"\" onclick=\"window.open(\n\t\t\t\t\t\t\t\t'http://twitter.com/home?status='+encodeURIComponent(location.href), \n\t\t\t\t\t\t\t\t'facebook-share-dialog', \n\t\t\t\t\t\t\t\t'width=626,height=436'); \n\t\t\t\t\t\t\t\treturn false;\"><span class=\"icon-stack\"><i class=\"icon-sign-blank icon-stack-base\"></i><i class=\"icon-twitter icon-light\"></i></span></a>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"\" onclick=\"window.open(\n\t\t\t\t\t\t\t\t'https://plus.google.com/share?url='+encodeURIComponent(location.href), \n\t\t\t\t\t\t\t\t'facebook-share-dialog', \n\t\t\t\t\t\t\t\t'width=500,height=436'); \n\t\t\t\t\t\t\t\treturn false;\"><span class=\"icon-stack\"><i class=\"icon-sign-blank icon-stack-base\"></i><i class=\"icon-google-plus icon-light\"></i></span></a>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"\" onclick=\"javascript:void((function(){var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)})());\"><span class=\"icon-stack\"><i class=\"icon-sign-blank icon-stack-base\"></i><i class=\"icon-pinterest icon-light\"></i></span></a>\n\t\t\t\t\t\t</aside> \n\n\t\t\t\t\t</div>\n\t\t\t\t</div><!--/.col-md-8.col-lg-8.col-xl-9-->\n\n\t\t\t\t<div class=\"sidebar col-md-4 col-lg-4 col-xl-3\">\n\n\t\t\t\t\t <aside class=\"widget\" *ngFor=\"let post of feature_post1\">\n\t\t\n\t\t\t\t\t\t\t\t<h2 class=\"widget-title ribbon\"><span>{{post.subcategory_name}}</span></h2>\n\t\t\n\t\t\t\t\t\t\t\t<div class=\"entries row\" *ngFor=\"let blog of collection\">\n\t\t\n\t\t\t\t\t\t\t\t\t<article class=\"type-post style-media-list media col-sm-6 col-md-12\" *ngIf=\"post.subcategory_id == blog.blog_subcategories\">\n\t\t                                <a routerLink=\"/{{category}}/{{blog.seo_url}}\">\n\t\t\t\t\t\t\t\t\t\t<!-- to disable lazy loading, remove data-src and data-src-retina -->\n\t\t\t\t\t\t\t\t\t\t<img src={{img_path}}{{blog.blog_images}} width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\t\t\n\t\t\t\t\t\t\t\t\t\t<!--fallback for no javascript browsers-->\n\t\t\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t</noscript>\n\t\t\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t<h3  class=\"entry-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"single.html\" rel=\"bookmark\">{{blog.blog_name}}</a>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"entry-meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"entry-date\"><a href=\"blog.html\">on <time datetime=\"2013-07-04T23:26:34+00:00\">September 20 2013</time></a></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"category\">In <a href=\"blog.html\">Technology</a></span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t                               </a>\n\t\t\t\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t</aside>\n\n\n\t\t\t\t</div><!--/.sidebar col-md-4 col-lg-4 col-xl-3-->\n\n\t\t\t</div><!--/#content-->\n\t\t\t\n\t\t</div><!--#main.container-->\n"

/***/ }),

/***/ "../../../../../src/app/details-page/details-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__seo_service__ = __webpack_require__("../../../../../src/app/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service_service__ = __webpack_require__("../../../../../src/app/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsPageComponent = /** @class */ (function () {
    function DetailsPageComponent(seo, _service, router, route) {
        this.seo = seo;
        this._service = _service;
        this.router = router;
        this.route = route;
        this.feature_post = [];
        this.feature_post1 = [];
        this.collection = [];
        this.get_details_page = __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalVariable */].BASE_API_URL + "blog/getblogimages";
        this.img_path = "http://termsoflife.com/api_v1/upload/";
        this.id = this.route.snapshot.params['id'];
        this.category = this.route.snapshot.params['category'];
    }
    DetailsPageComponent.prototype.ngOnInit = function () {
        this.getDetailpage();
    };
    DetailsPageComponent.prototype.getDetailpage = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this._service.
                list(_this.get_details_page + '?category=' + params.category + '&id=' + params.id).
                subscribe(function (singdetails) {
                _this.singdetails = singdetails;
                _this.feature_post = singdetails.sub;
                _this.feature_post1 = [];
                _this.collection = [];
                for (var key in _this.feature_post) {
                    if (_this.feature_post[key].blog.length > 0) {
                        _this.feature_post1.push(_this.feature_post[key]);
                    }
                    for (var key1 in _this.feature_post[key].blog) {
                        _this.collection.push(_this.feature_post[key].blog[key1]);
                    }
                }
            });
        });
    };
    DetailsPageComponent.prototype.detailover = function () {
        this.getDetailpage();
    };
    DetailsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details-page',
            template: __webpack_require__("../../../../../src/app/details-page/details-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/details-page/details-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__seo_service__["a" /* SeoService */],
            __WEBPACK_IMPORTED_MODULE_3__common_service_service__["a" /* CommonServiceService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], DetailsPageComponent);
    return DetailsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/firebase-demo/firebase-demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/firebase-demo/firebase-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  firebase-demo works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/firebase-demo/firebase-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirebaseDemoComponent = /** @class */ (function () {
    function FirebaseDemoComponent() {
    }
    FirebaseDemoComponent.prototype.ngOnInit = function () {
    };
    FirebaseDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-firebase-demo',
            template: __webpack_require__("../../../../../src/app/firebase-demo/firebase-demo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/firebase-demo/firebase-demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FirebaseDemoComponent);
    return FirebaseDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\" class=\"footer-area\">\n  \n        <div class=\"footer-top container\">\n    \n          <div class=\"row\">\n  \n            <div class=\"widget col-xs-12 col-sm-4\">\n  \n              <h4 class=\"widget-title\">Categories</h4>\n  \n              <ul class=\"entries links links-2-cols\">\n                <li><a href=\"blog.html\">Entertainment</a></li>\n                <li><a href=\"blog.html\">Event</a></li>\n                <li><a href=\"blog.html\">Technology</a></li>\n                <li><a href=\"blog.html\">Social Media</a></li>\n                <li><a href=\"blog.html\">Tactical</a></li>\n                <li><a href=\"reviews.html\">Notebook</a></li>\n                <li><a href=\"reviews.html\">Smartphone</a></li>\n                <li><a href=\"reviews.html\">Tablet</a></li>\n              </ul>\n  \n            </div><!--/.col-3-->\n  \n            <div class=\"clearfix visible-xs\"></div>\n  \n            <div class=\"widget col-xs-6 col-sm-2\">\n  \n              <h4 class=\"widget-title\">Information</h4>\n  \n              <ul class=\"entries links links\">\n                <li><a href=\"#\">About</a></li>\n                <li><a href=\"#\">Contact</a></li>\n                <li><a href=\"#\">Advertise </a></li>\n                <li><a href=\"#\">Terms &amp; Conditions</a></li>\n                <li><a href=\"#\">Privacy</a></li>\n              </ul>\n  \n            </div><!--/.col-3-->\n  \n            <div class=\"widget col-xs-6 col-sm-2\">\n  \n              <h4 class=\"widget-title\">Follow Us</h4>\n  \n              <ul class=\"entries links\">\n                <li><a href=\"blog.html\"><i class=\"icon-facebook-sign icon-2x\"></i> Facebook</a></li>\n                <li><a href=\"blog.html\"><i class=\"icon-twitter-sign icon-2x\"></i> Twitter</a></li>\n                <li><a href=\"blog.html\"><i class=\"icon-google-plus-sign icon-2x\"></i> Google Plus</a></li>\n                <li><a href=\"blog.html\"><i class=\"icon-linkedin-sign icon-2x\"></i> Linkedin</a></li>\n              </ul>\n  \n            </div><!--/.col-3-->\n  \n            <div class=\"clearfix visible-xs\"></div>\n  \n            <div class=\"widget col-xs-12 col-sm-4\">\n  \n              <h4 class=\"widget-title\">Subscribe</h4>\n  \n              <form class=\"form-horizontal\" role=\"form\">\n                <div class=\"form-group\">\n                  <label for=\"subscribeEmail\" class=\"col-lg-2 control-label\">EMAIL</label>\n                  <div class=\"col-lg-10\">\n                    <input type=\"text\" class=\"form-control\" id=\"subscribeEmail\" placeholder=\"Your Email\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-lg-2 control-label\">RSS</label>\n                  <div class=\"col-lg-10\">\n                    <p class=\"form-control-static\">\n                      <a href=\"\"><i class=\"icon-rss-sign\"></i> Posts</a> &nbsp; &nbsp;\n                      <a href=\"\"><i class=\"icon-rss-sign\"></i> Comments</a>\n                    </p>\n                  </div>\n                </div>\n              </form>\n  \n            </div><!--/.col-3-->\n  \n          </div><!--row.-->\n  \n        </div>\n  \n        <div class=\"footer-bottom\">\n  \n          <div class=\"container aligncenter\">\n  \n            <p>&copy;2013 by <a href=\"http://coolorize.com\">Coolorize Network</a>. All Right Reserved. <p>\n  \n          </div>\n  \n        </div>\n  \n      </footer>\n  "

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVariable; });

var GlobalVariable = Object.freeze({
    BASE_API_URL: 'http://termsoflife.com/api_v1/index.php/api/',
});


/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"sr-only\">Summarize</h1>\n\n<nav id=\"header\" class=\"header-navbar\" role=\"navigation\">\n\n<div class=\"header-navbar-inner container\">\n\n  <div id=\"brand\" class=\"navbar-brand\">\n    <a href=\"index.html\" rel=\"bookmark\">\n\n      <!-- to disable lazy loading, remove data-src and data-src-retina -->\n      <img src=\"../img/logo.png\" data-src=\"../img/logo.png\" data-src-retina=\"../img/logo-retina.png\" width=\"244\" height=\"56\" alt=\"\">\n\n      <!--fallback for no javascript browsers-->\n      <noscript>\n        <img src=\"../img/logo.pbng\" alt=\"\">\n      </noscript>\n    </a>\n  </div>\n\n  <ul class=\"nav nav-pages hidden-xs\">\n    <li><a routerLink=\"/blog\">blog</a></li>\n    <li><a routerLink=\"/contact-page\">Contact</a></li>\n    <li><a routerLink=\"/\">Advertise </a></li>\n    <li><a href=\"#\">Terms &amp; Conditions</a></li>\n    <li><a href=\"#\">Privacy</a></li>\n  </ul>\n\n  <ul class=\"nav nav-icons\">\n    <li>\n      <a href=\"#\" class=\"btn-icon\" data-toggle=\".header-navbar-inner\" data-toggle-class=\"search-toggled-in\">\n        <span class=\"search-toggled-out-icon glyphicon glyphicon-search\"></span>\n        <span class=\"search-toggled-in-icon glyphicon glyphicon-remove\"></span>\n      </a>\n    </li> \n  </ul>\n\n  <div class=\"search-wrapper js-stoppropagation\">\n    <div class=\"search-wrapper-inner\">\n        <form (ngSubmit)=\"searcharr()\">\n        <input  type=\"text\"  name=\"username\"  [(ngModel)]=\"model.username\" placeholder=\"search ... \">\n        <button routerLink=\"/{{category}}/{{subone1.seo_url}}\" class=\"btn-icon\" type=\"submit\" ><span class=\"glyphicon glyphicon-search\"></span></button>\n      </form>\n    </div>\n  </div>\n  \n\n  <ul class=\"nav navbar-nav\">\n    <li class=\"nav-all pull-right full-subnav-wrapper active\">\n\n      <a href=\"#\" data-toggle=\"li\"> \n        <span class=\"text\">All Categories</span>\n        <span class=\"toggle glyphicon glyphicon-align-justify\"></span>\n      </a>\n\n      <div class=\"row subnav-wrapper\">\n        \n        <div class=\"col-md-2 col-sm-2 bg-bar\" *ngFor=\"let post of feature_post;let i=index\">\n           <strong class=\"subnav-header\">{{post}}</strong>\n         <ul class=\"subnav-full\" *ngFor=\"let blog of feature_post1[i];let j=index\">\n            <li><a href=\"index.html\">{{blog}}</a></li>\n          </ul>\n        </div>\n\n        <!--<div class=\"col-md-2 col-sm-2\">\n          <strong class=\"subnav-header\">Colorschemes</strong>\n          <ul class=\"subnav-full\">\n            <li><a href=\"../html/\">Coolorize</a></li>\n            <li><a href=\"../html-dark/\">Dark</a></li>\n            <li><a href=\"../html-light/\">Light</a></li>\n            <li><a href=\"#\">Amet Commodo</a></li>\n            <li><a href=\"#\">Consectetur </a></li>\n            <li><a href=\"#\">Adipisicing</a></li>\n            <li><a href=\"#\">Duis aute </a></li>\n          </ul>\n        </div>\n\n        <div class=\"col-md-2 col-sm-2\">\n          <strong class=\"subnav-header\">Banner Placements</strong>\n          <ul class=\"subnav-full\">\n            <li><a href=\"banner-index.html\">Home</a></li>\n            <li><a href=\"banner-single.html\">Single</a></li>\n            <li><a href=\"#\">Ipsum  Nisi </a></li>\n            <li><a href=\"#\">Dolor Aliquip</a></li>\n          </ul>\n        </div>\n\n        <div class=\"col-md-2 col-sm-2\">\n          <strong class=\"subnav-header\">Category</strong>\n          <ul class=\"subnav-full\">\n            <li><a href=\"#\">Ipsum  Nisi </a></li>\n            <li><a href=\"#\">Dolor Aliquip</a></li>\n            <li><a href=\"#\">Amet Commodo</a></li>\n            <li><a href=\"#\">Consectetur </a></li>\n          </ul>\n        </div>\n\n        <div class=\"col-md-2 col-sm-2\">\n          <strong class=\"subnav-header\">Category</strong>\n          <ul class=\"subnav-full\">\n            <li><a href=\"#\">Consectetur </a></li>\n            <li><a href=\"#\">Adipisicing</a></li>\n            <li><a href=\"#\">Ipsum  Nisi </a></li>\n            <li><a href=\"#\">Dolor Aliquip</a></li>\n          </ul>\n        </div>\n\n        <div class=\"col-md-2 col-sm-2\">\n          <strong class=\"subnav-header\">Category</strong>\n          <ul class=\"subnav-full\">\n            <li><a href=\"#\">Ipsum  Nisi </a></li>\n            <li><a href=\"#\">Dolor Aliquip</a></li>\n            <li><a href=\"#\">Amet Commodo</a></li>\n            <li><a href=\"#\">Consectetur </a></li>\n          </ul>\n        </div>-->\n\n      </div>\n    </li>\n    <li class=\"active\">\n      <a href=\"#\" data-toggle=\"li\">Features</a>\n      <div class=\"subnav-wrapper\">\n        <ul class=\"subnav\">\n          <li><a href=\"index.html\">Blog 3 Columns</a></li>\n          <li class=\"active\"><a href=\"blog.html\">Blog 2 Columns</a></li>\n          <li><a href=\"blog-grids.html\">Blog Grids</a></li>\n          <li><a href=\"reviews.html\">Reviews Archive</a></li>\n          <li><a href=\"single.html\">Single Blog</a></li>\n          <li><a href=\"single-full.html\">Single Blog (Full)</a></li>\n          <li><a href=\"components.html\">Components</a></li>\n          <li>\n            <a href=\"#\" data-toggle=\"li\">Colorshemes</a>\n            <div class=\"subnav-wrapper\">\n              <ul class=\"subnav\">\n                <li><a href=\"../html/\">Coolorize</a></li>\n                <li><a href=\"../html-dark/\">Dark</a></li>\n                <li><a href=\"../html-light/\">Light</a></li>\n              </ul>\n            </div>\n          </li>\n          <li>\n            <a href=\"#\" data-toggle=\"li\">Banner Placements</a>\n            <div class=\"subnav-wrapper\">\n              <ul class=\"subnav\">\n                <li><a href=\"banner-index.html\">Home</a></li>\n                <li><a href=\"banner-single.html\">Single</a></li>\n              </ul>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </li>\n    <li class=\"full-subnav-wrapper\" *ngFor=\"let header_pages of header_page\" [ngClass]=\"{'toggled-in' : showdd}\">\n      <a href=\"#\" data-toggle=\"li\" id={{header_pages.category_id}} (mouseleave)=\"taball1(0)\" \n      (mouseenter)=\"taball(header_pages.category_id)\">{{header_pages.category_name}}</a>\n\n     <!-- <div class=\"row subnav-wrapper subnav-tabbed\"  (mouseleave)=\"taball(0)\" \n      (mouseenter)=\"taball(1)\">-->\n      <div class=\"row subnav-wrapper subnav-tabbed\" (mouseleave)=\"taball(0)\">\n        \n      <ul  class=\"col-md-1 col-sm-1 subnav-tabbed-tabs alignright\"  >\n          \n          <!--<li class=\"active\"><a href=\"#tabAll\">All </a></li>-->\n          <li *ngFor=\"let subcat of subcategory\"><a href=\"#tabNotebook\" (mouseleave)=\"taball1(0)\" (mouseenter)=\"tabsub(subcat.subcategory_id)\">{{subcat.subcategory_name}}</a></li>\n         <!-- <li><a href=\"#tabSmartphone\">Smartphone</a></li>-->\n          \n        </ul>\n\n        <div class=\"col-md-10 col-sm-10 subnav-tabbed-panels\">\n\n          <div id=\"tabAll\" class=\"subnav-tabbed-panel active\">\n            \n            <article class=\"entry type-post style-thumbnail col-sm-3 col-md-3\" *ngFor=\"let blog of blog_data\" >\n\n              <figure class=\"entry-thumbnail\">\n                <a href=\"single.html\">\n              \n                  <img src={{img_path}}{{blog.blog_images}}  width=\"230\" height=\"230\" alt=\"\">\n\n                  \n                  <noscript>\n                    <img src={{img_path}}{{blog.blog_images}} alt=\"\">\n                  </noscript>\n                </a>\n              </figure>\n\n              <h3 class=\"entry-title\"><a href=\"single.html\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</a> </h3>\n            \n            </article>\n\n           <!-- <article class=\"entry type-post style-thumbnail col-sm-3 col-md-3\">\n\n              <figure class=\"entry-thumbnail\">\n                <a href=\"single.html\">\n                  \n                  <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/230x230\" data-src-retina=\"http://placehold.it/460x460\" width=\"230\" height=\"230\" alt=\"\">\n\n                  \n                  <noscript>\n                    <img src=\"http://placehold.it/230x230\" alt=\"\">\n                  </noscript>\n                </a>\n              </figure>\n\n              <h3 class=\"entry-title\"><a href=\"single.html\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</a> </h3>\n\n            </article>\n\n            <article class=\"entry type-post style-thumbnail col-sm-3 col-md-3\">\n\n              <figure class=\"entry-thumbnail\">\n                <a href=\"single.html\">\n                  \n                  <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/230x230\" data-src-retina=\"http://placehold.it/460x460\" width=\"230\" height=\"230\" alt=\"\">\n\n                  \n                  <noscript>\n                    <img src=\"http://placehold.it/230x230\" alt=\"\">\n                  </noscript>\n                </a>\n              </figure>\n\n              <h3 class=\"entry-title\"><a href=\"single.html\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</a> </h3>\n            \n            </article>\n\n            <article class=\"entry type-post style-thumbnail col-sm-3 col-md-3\">\n\n              <figure class=\"entry-thumbnail\">\n                <a href=\"single.html\">\n                  \n                  <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/230x230\" data-src-retina=\"http://placehold.it/460x460\" width=\"230\" height=\"230\" alt=\"\">\n\n                 \n                  <noscript>\n                    <img src=\"http://placehold.it/230x230\" alt=\"\">\n                  </noscript>\n                </a>\n              </figure>\n\n              <h3 class=\"entry-title\"><a href=\"single.html\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</a> </h3>\n            \n            </article>-->\n            \n          </div>\n          <div id=\"tabNotebook\" class=\"subnav-tabbed-panel\">\n\n            <article class=\"entry type-post style-thumbnail col-sm-3 col-md-3\">\n\n              <figure class=\"entry-thumbnail\">\n                <a href=\"single.html\">\n                  <!-- to disable lazy loading, remove data-src and data-src-retina -->\n                  <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/230x230\" data-src-retina=\"http://placehold.it/460x460\" width=\"230\" height=\"230\" alt=\"\">\n\n                  <!--fallback for no javascript browsers-->\n                  <noscript>\n                    <img src=\"http://placehold.it/230x230\" alt=\"\">\n                  </noscript>\n                </a>\n              </figure>\n\n              <h3 class=\"entry-title\"><a href=\"single.html\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</a> </h3>\n\n            </article>\n\n            <!--<article class=\"entry type-post style-thumbnail col-sm-3 col-md-3\">\n\n              <figure class=\"entry-thumbnail\">\n                <a href=\"single.html\">\n                 \n                  <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/230x230\" data-src-retina=\"http://placehold.it/460x460\" width=\"230\" height=\"230\" alt=\"\">\n\n   \n                  <noscript>\n                    <img src=\"http://placehold.it/230x230\" alt=\"\">\n                  </noscript>\n                </a>\n              </figure>\n\n              <h3 class=\"entry-title\"><a href=\"single.html\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</a> </h3>\n\n            \n            </article>\n\n            <article class=\"entry type-post style-thumbnail col-sm-3 col-md-3\">\n\n              <figure class=\"entry-thumbnail\">\n                <a href=\"single.html\">\n                 \n                  <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/230x230\" data-src-retina=\"http://placehold.it/460x460\" width=\"230\" height=\"230\" alt=\"\">\n\n                 \n                  <noscript>\n                    <img src=\"http://placehold.it/230x230\" alt=\"\">\n                  </noscript>\n                </a>\n              </figure>\n\n              <h3 class=\"entry-title\"><a href=\"single.html\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</a> </h3>\n            \n            </article>\n            \n            <article class=\"entry type-post style-thumbnail col-sm-3 col-md-3\">\n\n              <figure class=\"entry-thumbnail\">\n                <a href=\"single.html\">\n                \n                  <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/230x230\" data-src-retina=\"http://placehold.it/460x460\" width=\"230\" height=\"230\" alt=\"\">\n\n                 \n                  <noscript>\n                    <img src=\"http://placehold.it/230x230\" alt=\"\">\n                  </noscript>\n                </a>\n              </figure>\n\n              <h3 class=\"entry-title\"><a href=\"single.html\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</a> </h3>\n\n            \n            </article>-->\n\n          </div>\n          <div id=\"tabSmartphone\" class=\"subnav-tabbed-panel\">\n\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </li>\n    <li>\n      <a href=\"#\" data-toggle=\"li\">Drop Down 3</a>\n\n      <div class=\"subnav-wrapper\">\n        <ul class=\"subnav-entries\">\n          <li><a href=\"#\">Recent Entry fits in this type of dropdown. </a></li>\n          <li><a href=\"#\">Lorem ipsum dolor sit amet, consectetur adipisicing elit </a></li>\n          <li><a href=\"#\">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </a></li>\n          <li><a href=\"#\">Ut enim ad minim veniam, quis nostrud exercitation ullamco </a></li>\n          <li><a href=\"#\">Laboris nisi ut aliquip ex ea commodo consequat. </a></li>\n          <li><a href=\"#\">Duis aute irure dolor in reprehenderit</a></li>\n          <li><a href=\"#\">In voluptate velit esse cillum dolore eu fugiat nulla pariatur</a></li>\n          <li><a href=\"#\">Excepteur sint occaecat cupidatat non proident</a></li>\n          <li><a href=\"#\">Sunt in culpa qui officia deserunt mollit anim id est laborum</a></li>\n        </ul>\n      </div>\n\n    </li>\n    <li><a href=\"#\">Category 1</a></li>\n    <li><a href=\"#\">Category 2</a></li>\n    <li><a href=\"#\">Category 3</a></li>\n    <li><a href=\"#\">Category 4</a></li>\n    <li><a href=\"#\">Category 5</a></li>\n    <li><a href=\"#\">Category 6</a></li>\n    <li><a href=\"#\">Category 7</a></li>\n  </ul>\n\n</div>\n\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_service__ = __webpack_require__("../../../../../src/app/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search__ = __webpack_require__("../../../../../src/app/search.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    //public search_details = "http://termsoflife.com/api_v1/index.php/user/search/search";
    function HeaderComponent(_service, router) {
        this._service = _service;
        this.router = router;
        this.feature_post = [];
        this.feature_post1 = [];
        this.collection = [];
        this.img_path = "http://termsoflife.com/api_v1/upload/";
        this.header_details = __WEBPACK_IMPORTED_MODULE_1__global_service__["a" /* GlobalVariable */].BASE_API_URL + "header/getheaders";
        this.navbarsuces = true;
        this.showdd = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_4__search__["a" /* Search */]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navbarsuces = true;
        this._service.list(this.header_details).subscribe(function (header_page) {
            _this.header_page = header_page;
            for (var key in _this.header_page) {
                if (_this.header_page) {
                    _this.feature_post.push(_this.header_page[key].category_name);
                }
                for (var key1 in _this.header_page[key].sub_category) {
                    _this.collection.push(_this.header_page[key].sub_category[key1].subcategory_name);
                }
                _this.feature_post1.push(_this.collection);
                _this.collection = [];
            }
        });
    };
    HeaderComponent.prototype.taball = function (a) {
        //alert('g')
        for (var i = 0; i < this.header_page.length; i++) {
            var record = this.header_page[i].category_id;
            if (record == a) {
                this.subcategory = this.header_page[i].sub_category;
                this.showdd = true;
            }
            else {
                this.showdd = false;
            }
        }
        this.showdd = true;
    };
    HeaderComponent.prototype.tabsub = function (b) {
        for (var i = 0; i < this.header_page.length; i++) {
            for (var j = 0; j < this.header_page[i].sub_category.length; j++) {
                var record = this.header_page[i].sub_category[j].subcategory_id;
                if (record == b) {
                    this.blog_data = this.header_page[i].sub_category[j].blog_data;
                    //this.showdd = true;
                }
                else {
                    //this.showdd = false;
                }
            }
        }
    };
    HeaderComponent.prototype.taball1 = function () {
        this.showdd = false;
    };
    HeaderComponent.prototype.searcharr = function () {
        this._service.search(this.model.username);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_service_service__["a" /* CommonServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loading-img {\n    background: url(http://preloaders.net/preloaders/360/Velocity.gif) center center no-repeat;\n    height: 100%;\n    z-index: 20;\n}\n\n.overlay {\n    \n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    opacity: 0.5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\" class=\"overlay\">\n    <diV id=\"loading-img\"></diV>\n  </div>\n<div *ngIf=\"!isLoading\" id=\"main\"  class=\"container\">\n  \n<div class=\"section row entries bg-primary section-no-margin-bottom\">\n\n  <div class=\"col-lg-6 col-xl-5\">\n\n    <div class=\"row\">\n\n      \n\n      <article class=\"entry style-grid style-hero hero-md-largest type-post col-md-8 col-lg-12 colheight-sm-1 colheight-md-2 colheight-lg-2 colheight-xl-2\">\n      \n        <div class=\"ribbon ribbon-pulled ribbon-small ribbon-highlight\">\n          <a href=\"blog.html\">{{homedetails[0].blog_name}}</a>\n        </div>\n\n        <header class=\"entry-header\">\n          <h3 class=\"entry-title\"><a routerLink=\"/{{homedetails[0].category_name}}/{{homedetails[0].seo_url}}\">{{homedetails[0].blog_description}}</a> </h3>\n          <div class=\"entry-meta\">\n            <span class=\"entry-date\"><a href=\"blocg.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n            <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n          </div>\n        </header>\n\n\n        <figure class=\"entry-thumbnail\">\n\n          <a routerLink=\"/{{homedetails[0].category_name}}/{{homedetails[0].seo_url}}\" class=\"overlay overlay-primary\"></a>\n\n          <!-- to disable lazy loading, remove data-src and data-src-retina -->\n          <img src={{img_path}}{{homedetails[0].blog_images}}  width=\"680\" height=\"452\" alt=\"\">\n\n          <!--fallback for no javascript browsers-->\n          <noscript>\n            <img src={{img_path}}{{homedetails[0].blog_images}}  alt=\"\">\n          </noscript>\n\n        </figure>\n\n      </article>\n\n      <article class=\"entry style-grid style-hero type-post col-md-4 col-lg-6 colheight-sm-1\">\n      \n        <div class=\"ribbon ribbon-pulled ribbon-small ribbon-highlight\">\n          <a href=\"\">{{homedetails[1].blog_name}}</a>\n        </div>\n\n        <header class=\"entry-header\">\n          <h3 class=\"entry-title\"><a routerLink=\"/{{homedetails[1].category_name}}/{{homedetails[1].seo_url}}\">{{homedetails[1].blog_description}}</a> </h3>\n          <div class=\"entry-meta\">\n            <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n            <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n          </div>\n        </header>\n        \n        <figure class=\"entry-thumbnail\">\n\n          <a routerLink=\"/{{homedetails[1].category_name}}/{{homedetails[1].seo_url}}\" class=\"overlay overlay-primary\"></a>\n\n          <!-- to disable lazy loading, remove data-src and data-src-retina -->\n          <img src={{img_path}}{{homedetails[1].blog_images}} width=\"480\" height=\"280\" alt=\"\">\n\n          <!--fallback for no javascript browsers-->\n          <noscript>\n            <img src={{img_path}}{{homedetails[1].blog_images}}  alt=\"\">\n          </noscript>\n\n        </figure>\n\n      </article>\n\n      <article class=\"entry style-grid style-hero type-post col-md-4 col-lg-6 colheight-sm-1\">\n      \n        <div class=\"ribbon ribbon-pulled ribbon-small ribbon-highlight\">\n          <a href=\"blog.html\">{{homedetails[2].blog_name}}</a>\n        </div>\n\n        <header class=\"entry-header\">\n          <h3 class=\"entry-title\"><a routerLink=\"/{{homedetails[2].category_name}}/{{homedetails[2].seo_url}}\">{{homedetails[2].blog_description}}</a> </h3>\n          <div class=\"entry-meta\">\n            <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n            <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n          </div>\n        </header>\n        \n        <figure class=\"entry-thumbnail\">\n\n          <a routerLink=\"/{{homedetails[2].category_name}}/{{homedetails[2].seo_url}}\" class=\"overlay overlay-primary\"></a>\n\n          <!-- to disable lazy loading, remove data-src and data-src-retina -->\n          <img src={{img_path}}{{homedetails[2].blog_images}}   width=\"480\" height=\"280\" alt=\"\">\n\n          <!--fallback for no javascript browsers-->\n          <noscript>\n            <img src={{img_path}}{{homedetails[2].blog_images}}  alt=\"\">\n          </noscript>\n\n        </figure>\n\n      </article>\n\n    </div><!--/.row-->\n\n  </div>\n\n  <div class=\"col-lg-6 col-xl-7\">\n\n    <div class=\"row\">\n\n      <article class=\"entry style-grid style-hero type-post col-md-4 col-lg-6 colheight-sm-1\">\n      \n        <div class=\"ribbon ribbon-pulled ribbon-small ribbon-highlight\">\n          <a href=\"blog.html\">{{homedetails[3].blog_name}}</a>\n        </div>\n\n        <header class=\"entry-header\">\n          <h3 class=\"entry-title\"><a routerLink=\"/{{homedetails[3].category_name}}/{{homedetails[3].seo_url}}\">{{homedetails[3].blog_description}}</a> </h3>\n          <div class=\"entry-meta\">\n            <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n            <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n          </div>\n        </header>\n        \n        <figure class=\"entry-thumbnail\">\n\n          <a routerLink=\"/{{homedetails[3].category_name}}/{{homedetails[3].seo_url}}\" class=\"overlay overlay-primary\"></a>\n\n          <!-- to disable lazy loading, remove data-src and data-src-retina -->\n          <img src=\"{{img_path}}{{homedetails[3].blog_images}} \" width=\"480\" height=\"280\" alt=\"\">\n\n          <!--fallback for no javascript browsers-->\n          <noscript>\n            <img src={{img_path}}{{homedetails[3].blog_images}}  alt=\"\">\n          </noscript>\n\n        </figure>\n\n      </article>\n\n      <article class=\"entry style-grid style-hero type-post col-md-4 col-lg-6 colheight-sm-1\">\n      \n        <div class=\"ribbon ribbon-pulled ribbon-small ribbon-highlight\">\n          <a href=\"blog.html\">{{homedetails[4].blog_name}}</a>\n        </div>\n\n        <header class=\"entry-header\">\n          <h3 class=\"entry-title\"><a routerLink=\"/{{homedetails[4].category_name}}/{{homedetails[4].seo_url}}\">{{homedetails[4].blog_description}}</a> </h3>\n          <div class=\"entry-meta\">\n            <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n            <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n          </div>\n        </header>\n\n        <figure class=\"entry-thumbnail\">\n\n          <a routerLink=\"/{{homedetails[4].category_name}}/{{homedetails[4].seo_url}}\" class=\"overlay overlay-primary\"></a>\n\n          <!-- to disable lazy loading, remove data-src and data-src-retina -->\n          <img src={{img_path}}{{homedetails[4].blog_images}}   width=\"680\" height=\"452\" alt=\"\">\n\n          <!--fallback for no javascript browsers-->\n          <noscript>\n            <img src={{img_path}}{{homedetails[4].blog_images}}  alt=\"\">\n          </noscript>\n\n        </figure>\n\n      </article>\n\n      <article class=\"entry style-grid style-hero hero-lg-larger type-post col-md-4 col-lg-6 colheight-sm-1 colheight-lg-2\">\n      \n        <div class=\"ribbon ribbon-pulled ribbon-small ribbon-highlight\">\n          <a href=\"blog.html\">{{homedetails[5].blog_name}}</a>\n        </div>\n\n        <header class=\"entry-header\">\n          <h3 class=\"entry-title\"><a routerLink=\"/{{homedetails[5].category_name}}/{{homedetails[5].seo_url}}\">{{homedetails[5].blog_description}}</a> </h3>\n          <div class=\"entry-meta\">\n            <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n            <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n          </div>\n        </header>\n        \n        <figure class=\"entry-thumbnail\">\n\n          <a routerLink=\"/{{homedetails[5].category_name}}/{{homedetails[5].seo_url}}\" class=\"overlay overlay-primary\"></a>\n\n          <!-- to disable lazy loading, remove data-src and data-src-retina -->\n          <img src={{img_path}}{{homedetails[5].blog_images}}  width=\"380\" height=\"435\" alt=\"\">\n\n          <!--fallback for no javascript browsers-->\n          <noscript>\n            <img src={{img_path}}{{homedetails[5].blog_images}}  alt=\"\">\n          </noscript>\n\n        </figure>\n\n      </article>\n\n      <article class=\"entry style-grid style-hero type-post col-md-6 col-lg-6 colheight-sm-1\">\n      \n        <div class=\"ribbon ribbon-pulled ribbon-small ribbon-highlight\">\n          <a href=\"blog.html\">{{homedetails[6].blog_name}}</a>\n        </div>\n\n        <header class=\"entry-header\">\n          <h3 class=\"entry-title\"><a routerLink=\"/{{homedetails[6].category_name}}/{{homedetails[6].seo_url}}\">{{homedetails[6].blog_description}}</a> </h3>\n          <div class=\"entry-meta\">\n            <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n            <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n          </div>\n        </header>\n        \n        <figure class=\"entry-thumbnail\">\n\n          <a routerLink=\"/{{homedetails[6].category_name}}/{{homedetails[6].seo_url}}\" class=\"overlay overlay-primary\"></a>\n\n          <!-- to disable lazy loading, remove data-src and data-src-retina -->\n          <img src={{img_path}}{{homedetails[6].blog_images}}  width=\"680\" height=\"452\" alt=\"\">\n\n          <!--fallback for no javascript browsers-->\n          <noscript>\n            <img src={{img_path}}{{homedetails[6].blog_images}}  alt=\"\">\n          </noscript>\n\n        </figure>\n\n      </article>\n\n      <article class=\"entry style-grid style-hero type-post col-md-6 col-lg-6 colheight-sm-1\">\n      \n        <div class=\"ribbon ribbon-pulled ribbon-small ribbon-highlight\">\n          <a href=\"blog.html\">{{homedetails[7].blog_name}}</a>\n        </div>\n\n        <header class=\"entry-header\">\n          <h3 class=\"entry-title\"><a routerLink=\"/{{homedetails[7].category_name}}/{{homedetails[7].seo_url}}\">{{homedetails[7].blog_description}}</a> </h3>\n          <div class=\"entry-meta\">\n            <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n            <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n          </div>\n        </header>\n        \n        <figure class=\"entry-thumbnail\">\n\n          <a routerLink=\"/{{homedetails[7].category_name}}/{{homedetails[7].seo_url}}\" class=\"overlay overlay-primary\"></a>\n\n          <!-- to disable lazy loading, remove data-src and data-src-retina -->\n          <img src={{img_path}}{{homedetails[7].blog_images}}  width=\"480\" height=\"280\" alt=\"\">\n\n          <!--fallback for no javascript browsers-->\n          <noscript>\n            <img src={{img_path}}{{homedetails[7].blog_images}}  alt=\"\">\n          </noscript>\n\n        </figure>\n\n      </article>\n\n    </div><!--/.row-->\n\n  </div>\n\n</div><!--/section.row.entries-->\n\n<div id=\"content\" class=\"content section row\">\n\n  <div class=\"col-md-9 col-lg-9\">\n\n    <div class=\"row\">\n\n      <div class=\"col-md-4 col-lg-4 md-pull-right\">\n          \n        <aside class=\"widget\">\n\n          <h2 class=\"widget-title ribbon ribbon-focus\"><span>What's New</span></h2>\n\n            <!-- <article class=\"entry style-grid type-post\">\n    \n              <header class=\"entry-header\">\n                <h3  class=\"entry-title\">\n                  <a href=\"single.html\" rel=\"bookmark\">Excepteur sint occaecat cupidatat non proident.</a>\n                </h3>\n                <div class=\"entry-meta\">\n                  <span class=\"entry-date\"><a href=\"\"><time datetime=\"2013-07-04T23:26:34+00:00\">8 hours ago</time></a></span>\n                </div>\n              </header>\n\n              <figure class=\"entry-thumbnail\">\n\n                <a href=\"single.html\" class=\"overlay overlay-primary\"></a>\n\n          \n                <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/480x280\" data-src-retina=\"http://placehold.it/720x420\" width=\"480\" height=\"280\" alt=\"\">\n\n                <noscript>\n                  <img src=\"http://placehold.it/720x420\" alt=\"\">\n                </noscript>\n\n              </figure>\n\n            </article> -->\n\n          <div class=\"entries row\">\n\n            <article class=\"type-post style-media-list media col-sm-6 col-md-12\">\n\n              <!-- to disable lazy loading, remove data-src and data-src-retina -->\n              <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n              <!--fallback for no javascript browsers-->\n              <noscript>\n                <img src=\"http://placehold.it/80x80\" alt=\"\">\n              </noscript>\n\n              <div class=\"media-body\">\n                <h3  class=\"entry-title\">\n                  <a href=\"single.html\" rel=\"bookmark\">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</a>\n                </h3>\n                <div class=\"entry-meta\">\n                  <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">3 hours ago</time></a></span>\n                </div>\n              </div>\n\n            </article>\n\n            <article class=\"type-post style-media-list media col-sm-6 col-md-12\">\n\n              <!-- to disable lazy loading, remove data-src and data-src-retina -->\n              <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n              <!--fallback for no javascript browsers-->\n              <noscript>\n                <img src=\"http://placehold.it/80x80\" alt=\"\">\n              </noscript>\n\n              <div class=\"media-body\">\n                <h3  class=\"entry-title\">\n                  <a href=\"single.html\" rel=\"bookmark\">Duis aute irure dolor in reprehenderit in voluptate velit esse.</a>\n                </h3>\n                <div class=\"entry-meta\">\n                  <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">4 hours ago</time></a></span>\n                </div>\n              </div>\n\n            </article>\n\n            <article class=\"type-post style-media-list media col-sm-6 col-md-12\">\n\n              <!-- to disable lazy loading, remove data-src and data-src-retina -->\n              <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n              <!--fallback for no javascript browsers-->\n              <noscript>\n                <img src=\"http://placehold.it/80x80\" alt=\"\">\n              </noscript>\n\n              <div class=\"media-body\">\n                <h3  class=\"entry-title\">\n                  <a href=\"single.html\" rel=\"bookmark\">Excepteur sint occaecat cupidatat non proident.</a>\n                </h3>\n                <div class=\"entry-meta\">\n                  <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">5 hours ago</time></a></span>\n                </div>\n              </div>\n\n            </article>\n\n            <article class=\"type-post style-media-list media col-sm-6 col-md-12\">\n\n              <!-- to disable lazy loading, remove data-src and data-src-retina -->\n              <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n              <!--fallback for no javascript browsers-->\n              <noscript>\n                <img src=\"http://placehold.it/80x80\" alt=\"\">\n              </noscript>\n\n              <div class=\"media-body\">\n                <h3  class=\"entry-title\">\n                  <a href=\"single.html\" rel=\"bookmark\">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</a>\n                </h3>\n                <div class=\"entry-meta\">\n                  <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">6 hours ago</time></a></span>\n                </div>\n              </div>\n\n            </article>\n\n            <article class=\"type-post style-media-list media col-sm-6 col-md-12\">\n\n              <!-- to disable lazy loading, remove data-src and data-src-retina -->\n              <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n              <!--fallback for no javascript browsers-->\n              <noscript>\n                <img src=\"http://placehold.it/80x80\" alt=\"\">\n              </noscript>\n\n              <div class=\"media-body\">\n                <h3  class=\"entry-title\">\n                  <a href=\"single.html\" rel=\"bookmark\">Duis aute irure dolor in reprehenderit in voluptate velit esse.</a>\n                </h3>\n                <div class=\"entry-meta\">\n                  <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">7 hours ago</time></a></span>\n                </div>\n              </div>\n\n            </article>\n\n            <article class=\"type-post style-media-list media col-sm-6 col-md-12\">\n\n              <!-- to disable lazy loading, remove data-src and data-src-retina -->\n              <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n              <!--fallback for no javascript browsers-->\n              <noscript>\n                <img src=\"http://placehold.it/80x80\" alt=\"\">\n              </noscript>\n\n              <div class=\"media-body\">\n                <h3  class=\"entry-title\">\n                  <a href=\"single.html\" rel=\"bookmark\">Excepteur sint occaecat cupidatat non proident.</a>\n                </h3>\n                <div class=\"entry-meta\">\n                  <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">8 hours ago</time></a></span>\n                </div>\n              </div>\n\n            </article>\n\n            <article class=\"type-post style-media-list media col-sm-6 col-md-12\">\n\n              <!-- to disable lazy loading, remove data-src and data-src-retina -->\n              <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n              <!--fallback for no javascript browsers-->\n              <noscript>\n                <img src=\"http://placehold.it/80x80\" alt=\"\">\n              </noscript>\n\n              <div class=\"media-body\">\n                <h3  class=\"entry-title\">\n                  <a href=\"single.html\" rel=\"bookmark\">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</a>\n                </h3>\n                <div class=\"entry-meta\">\n                  <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">9 hours ago</time></a></span>\n                </div>\n              </div>\n\n            </article>\n\n            <article class=\"type-post style-media-list media col-sm-6 col-md-12\">\n\n              <!-- to disable lazy loading, remove data-src and data-src-retina -->\n              <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n              <!--fallback for no javascript browsers-->\n              <noscript>\n                <img src=\"http://placehold.it/80x80\" alt=\"\">\n              </noscript>\n\n              <div class=\"media-body\">\n                <h3  class=\"entry-title\">\n                  <a href=\"single.html\" rel=\"bookmark\">Duis aute irure dolor in reprehenderit in voluptate velit esse.</a>\n                </h3>\n                <div class=\"entry-meta\">\n                  <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">10 hours ago</time></a></span>\n                </div>\n              </div>\n\n            </article>\n\n            <article class=\"type-post style-media-list media col-sm-6 col-md-12\">\n\n              <!-- to disable lazy loading, remove data-src and data-src-retina -->\n              <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n              <!--fallback for no javascript browsers-->\n              <noscript>\n                <img src=\"http://placehold.it/80x80\" alt=\"\">\n              </noscript>\n\n              <div class=\"media-body\">\n                <h3  class=\"entry-title\">\n                  <a href=\"single.html\" rel=\"bookmark\">Excepteur sint occaecat cupidatat non proident.</a>\n                </h3>\n                <div class=\"entry-meta\">\n                  <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">11 hours ago</time></a></span>\n                </div>\n              </div>\n\n            </article>\n\n            <article class=\"type-post style-media-list media col-sm-6 col-md-12\">\n\n              <!-- to disable lazy loading, remove data-src and data-src-retina -->\n              <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n              <!--fallback for no javascript browsers-->\n              <noscript>\n                <img src=\"http://placehold.it/80x80\" alt=\"\">\n              </noscript>\n              <div class=\"media-body\">\n                <h3  class=\"entry-title\">\n                  <a href=\"single.html\" rel=\"bookmark\">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</a>\n                </h3>\n                <div class=\"entry-meta\">\n                  <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">12 hours ago</time></a></span>\n                </div>\n              </div>\n\n            </article>\n\n          </div>\n\n          <div class=\"more-wrapper\">\n            <a href=\"blog.html\" class=\"btn btn-warning btn-sm\">More</a>\n          </div>\n\n        </aside>\n\n        <aside class=\"widget\">\n\n          <h3 class=\"widget-title ribbon ribbon-focus\"><span>Latest Discussion</span></h3>\n\n          <ul class=\"entries\">\n\n            <li class=\"entry style-recent-list type-post\">\n\n              <span class=\"comments-count-balloon\">900</span>\n              <a href=\"single.html\" rel=\"bookmark\" class=\"entry-title\">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</a>\n\n            </li>\n\n            <li class=\"entry style-recent-list type-post\">\n\n              <span class=\"comments-count-balloon\">860</span>\n              <a href=\"single.html\" rel=\"bookmark\" class=\"entry-title\">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>\n              \n            </li>\n\n            <li class=\"entry style-recent-list type-post\">\n\n              <span class=\"comments-count-balloon\">1234</span>\n              <a href=\"single.html\" rel=\"bookmark\" class=\"entry-title\">In voluptate velit esse cillum dolore eu fugiat nulla pariatur.</a>\n              \n            </li>\n\n            <li class=\"entry style-recent-list type-post\">\n\n              <span class=\"comments-count-balloon\">90</span>\n              <a href=\"single.html\" rel=\"bookmark\" class=\"entry-title\">Duis aute irure dolor in reprehenderit.</a>\n              \n            </li>\n\n            <li class=\"entry style-recent-list type-post\">\n\n              <span class=\"comments-count-balloon\">8</span>\n              <a href=\"single.html\" rel=\"bookmark\" class=\"entry-title\">Utempor incididunt ut labore et dolore magna aliqua.</a>\n              \n            </li>\n\n          </ul>\n\n        </aside><!--/.widget-->\n\n        <aside class=\"widget\">\n\n          <h3 class=\"widget-title ribbon ribbon-focus\"><span>TAGS</span></h3>\n\n          <div class=\"tagcloud\">\n            <a href=\"#\">Some</a>\n            <a href=\"#\">Tag</a>\n            <a href=\"#\">Goes</a>\n            <a href=\"#\">Here</a>\n            <a href=\"#\">Utempor</a>\n            <a href=\"#\">Incididunt</a>\n            <a href=\"#\">Labore</a>\n            <a href=\"#\">Dolore</a>\n            <a href=\"#\">Magna</a>\n            <a href=\"#\">Aliqua</a>\n            <a href=\"#\">Seddo</a> \n            <a href=\"#\">Siusmod</a>\n            <a href=\"#\">Tempor</a>\n            <a href=\"#\">Incididunt</a>\n            <a href=\"#\">Ut labore</a>\n            <a href=\"#\">Et dolore </a>\n            <a href=\"#\">Magna </a>\n            <a href=\"#\">Aliqua</a>\n            <a href=\"#\">Aliqua</a>\n            <a href=\"#\">Seddo</a> \n            <a href=\"#\">Siusmod</a>\n            <a href=\"#\">Tempor</a>\n            <a href=\"#\">Incididunt</a>\n            <a href=\"#\">Ut labore</a>\n            <a href=\"#\">Et dolore </a>\n            <a href=\"#\">Magna </a>\n            <a href=\"#\">Aliqua</a>\n          </div>\n\n        </aside><!--/.widget-->\n\n      </div><!--/.col-md-4.col-lg-4.md-pull-right-->\n\n      <div class=\"bg-base col-md-8 col-lg-8\">\n        \n        <h2 class=\"section-title ribbon ribbon-highlight\"><span>What's Hot</span></h2>\n\n        <div class=\"entries\">\n\n          <article class=\"entry style-large type-post\">\n\n            <figure class=\"entry-thumbnail hidden-xs\">\n\n              <a href=\"single.html\">\n                <!-- to disable lazy loading, remove data-src and data-src-retina -->\n                <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/680x452\" data-src-retina=\"http://placehold.it/1024x680\" width=\"680\" height=\"452\" alt=\"\">\n\n                <!--fallback for no javascript browsers-->\n                <noscript>\n                  <img src=\"http://placehold.it/680x452\" alt=\"\">\n                </noscript>\n              </a>\n\n            </figure>\n\n            <header class=\"entry-header\">\n\n              <h3 class=\"entry-title\">\n                <a href=\"single.html\" rel=\"bookmark\">The mosts views and discussed posts on this time goes here.</a>\n              </h3>\n              <div class=\"entry-meta\">\n                <span class=\"author\">by <a href=\"blog.html\">John Doe</a></span>\n                <span class=\"entry-date\"><a href=\"blog.html\">on <time datetime=\"2013-07-04T23:26:34+00:00\">September 20 2013</time></a></span>\n                <span class=\"category\">In <a href=\"blog.html\">Technology</a></span>\n              </div>\n\n            </header>\n\n            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.</p>\n\n          </article>\n\n          <article class=\"entry style-large type-post\">\n\n            <figure class=\"entry-thumbnail hidden-xs\">\n\n              <a href=\"single.html\">\n\n                <!-- to disable lazy loading, remove data-src and data-src-retina -->\n                <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/680x452\" data-src-retina=\"http://placehold.it/1024x680\" width=\"680\" height=\"452\" alt=\"\">\n\n                <!--fallback for no javascript browsers-->\n                <noscript>\n                  <img src=\"http://placehold.it/680x452\" alt=\"\">\n                </noscript>\n\n              </a>\n\n            </figure>\n\n            <header class=\"entry-header\">\n\n              <h3 class=\"entry-title\">\n                <a href=\"single.html\" rel=\"bookmark\">Excepteur sint occaecat cupidatat non proident.</a>\n              </h3>\n              <div class=\"entry-meta\">\n                <span class=\"author\">by <a href=\"blog.html\">John Doe</a></span>\n                <span class=\"entry-date\"><a href=\"blog.html\">on <time datetime=\"2013-07-04T23:26:34+00:00\">September 20 2013</time></a></span>\n                <span class=\"category\">In <a href=\"blog.html\">Entertaintment</a></span>\n              </div>\n\n            </header>\n\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n          </article>\n          \n          <article class=\"entry style-large type-post\">\n\n            <figure class=\"entry-thumbnail hidden-xs\">\n\n              <a href=\"single.html\">\n\n                <!-- to disable lazy loading, remove data-src and data-src-retina -->\n                <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/680x452\" data-src-retina=\"http://placehold.it/1024x680\" width=\"680\" height=\"452\" alt=\"\">\n\n                <!--fallback for no javascript browsers-->\n                <noscript>\n                  <img src=\"http://placehold.it/680x452\" alt=\"\">\n                </noscript>\n                \n              </a>\n\n            </figure>\n\n            <header class=\"entry-header\">\n\n              <h3 class=\"entry-title\">\n                <a href=\"single.html\" rel=\"bookmark\">Excepteur sint occaecat cupidatat non proident.</a>\n              </h3>\n              <div class=\"entry-meta\">\n                <span class=\"author\">by <a href=\"blog.html\">John Doe</a></span>\n                <span class=\"entry-date\"><a href=\"blog.html\">on <time datetime=\"2013-07-04T23:26:34+00:00\">September 20 2013</time></a></span>\n                <span class=\"category\">In <a href=\"blog.html\">Entertaintment</a></span>\n              </div>\n\n            </header>\n\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n          </article>\n          \n        </div>\n\n      </div><!--/.bg-base.col-md-8.col-lg-8-->\n\n    </div><!--/.colheight-->\n\n  </div><!--/.col-md-8.col-lg-4-->\n\n  <div class=\"sidebar col-md-3 col-lg-3\">\n      \n    <aside class=\"widget\">\n\n      <h2 class=\"widget-title ribbon\"><span>Latest Review</span></h2>\n\n      <div class=\"entries row\">\n\n        <article class=\"type-post style-media-list style-review-list media col-sm-6 col-md-12\">\n\n          <div class=\"style-review-score\">\n            80\n          </div>\n\n          <!-- to disable lazy loading, remove data-src and data-src-retina -->\n          <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n          <!--fallback for no javascript browsers-->\n          <noscript>\n            <img src=\"http://placehold.it/80x80\" alt=\"\">\n          </noscript>\n\n          <div class=\"media-body\">\n            <h3  class=\"entry-title\">\n              <a href=\"single-full.html\" rel=\"bookmark\">xPhone 15s</a>\n            </h3>\n            <p class=\"small\">xPhone Designer: The most secure xPhone Ever?</p>\n          </div>\n\n        </article>\n\n        <article class=\"type-post style-media-list style-review-list media col-sm-6 col-md-12\">\n\n          <div class=\"style-review-score\">\n            79\n          </div>\n\n          <!-- to disable lazy loading, remove data-src and data-src-retina -->\n          <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n          <!--fallback for no javascript browsers-->\n          <noscript>\n            <img src=\"http://placehold.it/80x80\" alt=\"\">\n          </noscript>\n\n          <div class=\"media-body\">\n            <h3  class=\"entry-title\">\n              <a href=\"single-full.html\" rel=\"bookmark\">xPhone 15c.</a>\n            </h3>\n            <p class=\"small\">Sunt in culpa qui officia deserunt mollit anim id est laborum</p>\n          </div>\n\n        </article>\n\n        <article class=\"type-post style-media-list style-review-list media col-sm-6 col-md-12\">\n\n          <div class=\"style-review-score\">\n            76\n          </div>\n\n          <!-- to disable lazy loading, remove data-src and data-src-retina -->\n          <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n          <!--fallback for no javascript browsers-->\n          <noscript>\n            <img src=\"http://placehold.it/80x80\" alt=\"\">\n          </noscript>\n\n          <div class=\"media-body\">\n            <h3  class=\"entry-title\">\n              <a href=\"single-full.html\" rel=\"bookmark\">Droid Maxxi.</a>\n            </h3>\n            <p class=\"small\">Laborum sunt in culpa qui officia deserunt mollit anim id est </p>\n          </div>\n\n        </article>\n\n        <article class=\"type-post style-media-list style-review-list media col-sm-6 col-md-12\">\n\n          <div class=\"style-review-score\">\n            79\n          </div>\n\n          <!-- to disable lazy loading, remove data-src and data-src-retina -->\n          <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n          <!--fallback for no javascript browsers-->\n          <noscript>\n            <img src=\"http://placehold.it/80x80\" alt=\"\">\n          </noscript>\n\n          <div class=\"media-body\">\n            <h3  class=\"entry-title\">\n              <a href=\"single-full.html\" rel=\"bookmark\">NOKIEM Lumpia</a>\n            </h3>\n            <p class=\"small\">Deserunt laborum sunt in culpa qui officia  mollit anim id est </p>\n          </div>\n\n        </article>\n\n        <article class=\"type-post style-media-list style-review-list media col-sm-6 col-md-12\">\n\n          <div class=\"style-review-score\">\n            74\n          </div>\n\n          <!-- to disable lazy loading, remove data-src and data-src-retina -->\n          <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/80x80\" data-src-retina=\"http://placehold.it/160x160\" width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n          <!--fallback for no javascript browsers-->\n          <noscript>\n            <img src=\"http://placehold.it/80x80\" alt=\"\">\n          </noscript>\n          <div class=\"media-body\">\n            <h3  class=\"entry-title\">\n              <a href=\"single-full.html\" rel=\"bookmark\">NFC Dragonfly</a>\n            </h3>\n            <p class=\"small\">Culpa deserunt laborum sunt in qui officia  mollit anim id est </p>\n          </div>\n\n        </article>\n\n      </div><!--/.entries.colheight-->\n\n      <div class=\"more-wrapper\">\n        <a href=\"review.html\" class=\"btn btn-warning btn-sm\">Review Archive</a>\n      </div>\n\n    </aside>\n\n    <div class=\"collapsible-widgets\">\n\n      <aside class=\"widget\">\n\n        <h2 class=\"widget-title ribbon\"><span>Top Smartphone</span></h2>\n\n        <ul class=\"entries\">\n          <li class=\"entry style-score-widget\">\n            <div class=\"score-label entry-title\"><a href=\"single-full.html\">xPhone 15s</a></div>\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 81%;\">\n                <span>Score:&nbsp;81</span>\n              </div>\n            </div>\n          </li>\n          <li class=\"entry style-score-widget\">\n            <div class=\"score-label entry-title\"><a href=\"single-full.html\">Droid Maxxi</a></div>\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\">\n                <span>Score:&nbsp;80</span>\n              </div>\n            </div>\n          </li>\n          <li class=\"entry style-score-widget\">\n            <div class=\"score-label entry-title\"><a href=\"single-full.html\">Performance</a></div>\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%;\">\n                <span>Score:&nbsp;76</span>\n              </div>\n            </div>\n          </li>\n          <li class=\"entry style-score-widget\">\n            <div class=\"score-label entry-title\"><a href=\"single-full.html\">NFC Dragonfly</a></div>\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%;\">\n                <span>Score:&nbsp;75</span>\n              </div>\n            </div>\n          </li>\n          <li class=\"entry style-score-widget\">\n            <div class=\"score-label entry-title\"><a href=\"single-full.html\">Andromeda Titan</a></div>\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 70%;\">\n                <span>Score:&nbsp;70</span>\n              </div>\n            </div>\n          </li>\n        </ul>\n\n      </aside>\n\n      <aside class=\"widget\">\n\n        <h2 class=\"widget-title ribbon\"><span>Top Notebook</span></h2>\n\n        <ul class=\"entries\">\n          <li class=\"entry style-score-widget\">\n            <div class=\"score-label entry-title\"><a href=\"single-full.html\">xPhone 15s</a></div>\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 81%;\">\n                <span>Score:&nbsp;81</span>\n              </div>\n            </div>\n          </li>\n          <li class=\"entry style-score-widget\">\n            <div class=\"score-label entry-title\"><a href=\"single-full.html\">Droid Maxxi</a></div>\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\">\n                <span>Score:&nbsp;80</span>\n              </div>\n            </div>\n          </li>\n          <li class=\"entry style-score-widget\">\n            <div class=\"score-label entry-title\"><a href=\"single-full.html\">Performance</a></div>\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%;\">\n                <span>Score:&nbsp;76</span>\n              </div>\n            </div>\n          </li>\n          <li class=\"entry style-score-widget\">\n            <div class=\"score-label entry-title\"><a href=\"single-full.html\">NFC Dragonfly</a></div>\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%;\">\n                <span>Score:&nbsp;75</span>\n              </div>\n            </div>\n          </li>\n          <li class=\"entry style-score-widget\">\n            <div class=\"score-label entry-title\"><a href=\"single-full.html\">Andromeda Titan</a></div>\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 70%;\">\n                <span>Score:&nbsp;70</span>\n              </div>\n            </div>\n          </li>\n        </ul>\n\n      </aside>\n\n    </div>\n\n    <aside class=\"widget widget_calendar\">\n\n      <h3 class=\"widget-title ribbon\"><span>Calendar</span></h3>\n\n      <div id=\"calendar_wrap\">\n        <table id=\"wp-calendar\">\n          <caption>July 2013</caption>\n          <thead>\n            <tr>\n              <th scope=\"col\" title=\"Monday\">M</th>\n              <th scope=\"col\" title=\"Tuesday\">T</th>\n              <th scope=\"col\" title=\"Wednesday\">W</th>\n              <th scope=\"col\" title=\"Thursday\">T</th>\n              <th scope=\"col\" title=\"Friday\">F</th>\n              <th scope=\"col\" title=\"Saturday\">S</th>\n              <th scope=\"col\" title=\"Sunday\">S</th>\n            </tr>\n          </thead>\n\n          <tfoot>\n            <tr>\n              <td colspan=\"3\" id=\"prev\"><a href=\"#\" title=\"View posts for March 2013\">&laquo; Mar</a></td>\n              <td class=\"pad\">&nbsp;</td>\n              <td colspan=\"3\" id=\"next\"><a href=\"#\" title=\"View posts for March 2013\">Aug &raquo;</a></td>\n            </tr>\n          </tfoot>\n          <tbody>\n            <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>\n            </tr>\n            <tr>\n              <td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td>\n            </tr>\n            <tr>\n              <td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td>\n            </tr>\n            <tr>\n              <td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td>\n            </tr>\n            <tr>\n              <td>29</td><td id=\"today\">30</td><td>31</td>\n              <td class=\"pad\" colspan=\"4\">&nbsp;</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </aside>\n\n   <!-- <aside class=\"widget\">\n\n      <h3 class=\"widget-title ribbon\"><span>Special Coverage</span></h3>\n\n      <ul class=\"entries coverageList aligncenter\">\n        <li><a href=\"blog.html\">#xPhone launch event</a></li>\n        <li><a href=\"blog.html\">#WCDC 2013</a></li>\n        <li><a href=\"blog.html\">#Nokiem bought by Macrosoft</a></li>\n        <li><a href=\"blog.html\">#Blueberry JUMP 2013</a></li>\n        <li><a href=\"blog.html\">#CONFEST 2013</a></li>\n        <li><a href=\"blog.html\">#Ullamco laboris nisi ut. </a></li>\n        <li><a href=\"blog.html\">#Eliquip ex ea commodo consequat.</a></li>\n        <li><a href=\"blog.html\">#Duis aute irure dolor in.</a></li>\n        <li><a href=\"blog.html\">#Reprehenderit in voluptate</a></li>\n        <li><a href=\"blog.html\">#Velit esse Ullamco laboris.</a></li>\n      </ul>\n\n    </aside>/.widget-->\n\n  </div><!--/.sidebar.col-md-3.col-lg-3-->\n\n</div><!--/.row.content-->\n\n<div id=\"coverageCarousel\" class=\"section bg-primary carousel carousel slide\">\n\n  <h2 class=\"section-title ribbon ribbon-highlight\"><span>&nbsp;</span></h2>\n  <div class=\"carousel-inner\">\n    <div class=\"item active\">\n      <h2 class=\"section-title ribbon ribbon-highlight\"><a href=\"blog.html\"> xPhone launch event</a></h2>\n\n      <div class=\"row entries\">\n\n        <article class=\"entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1\">\n          \n          <header class=\"entry-header\">\n            <p class=\"small\"><a href=\"blog.html\">Review</a></p>\n            <h3 class=\"entry-title\"><a href=\"single.html\">xPhone first hand: Check out, this might be the right phone for you</a> </h3>\n            <div class=\"entry-meta\">\n              <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n              <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n            </div>\n          </header>\n          \n          <figure class=\"entry-thumbnail\">\n\n            <a href=\"single.html\" class=\"overlay overlay-primary\"></a>\n\n            <!-- to disable lazy loading, remove data-src and data-src-retina -->\n            <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/480x280\" data-src-retina=\"http://placehold.it/720x420\" width=\"480\" height=\"280\" alt=\"\">\n\n            <!--fallback for no javascript browsers-->\n            <noscript>\n              <img src=\"http://placehold.it/480x280\" alt=\"\">\n            </noscript>\n\n          </figure>\n\n        </article>\n\n        <article class=\"entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1\">\n\n          <header class=\"entry-header\">\n            <p class=\"small\"><a href=\"blog.html\">Event Report</a></p>\n            <h3 class=\"entry-title\"><a href=\"single.html\">The rumor was not a joke, lorem ispsum dolor sit amet constactetiour.</a> </h3>\n            <div class=\"entry-meta\">\n              <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n              <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n            </div>\n          </header>\n          \n          <figure class=\"entry-thumbnail\">\n\n            <a href=\"single.html\" class=\"overlay overlay-primary\"></a>\n\n            <!-- to disable lazy loading, remove data-src and data-src-retina -->\n            <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/680x452\" data-src-retina=\"http://placehold.it/1024x680\" width=\"680\" height=\"452\" alt=\"\">\n\n            <!--fallback for no javascript browsers-->\n            <noscript>\n              <img src=\"http://placehold.it/680x452\" alt=\"\">\n            </noscript>\n\n          </figure>\n\n        </article>\n\n        <article class=\"entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1\">\n          <header class=\"entry-header\">\n            <p class=\"small\"><a href=\"blog.html\">Event Report</a></p>\n            <h3 class=\"entry-title\"><a href=\"single.html\">The Event is starting Now. Grab your popcorn, beer and notes.</a> </h3>\n            <div class=\"entry-meta\">\n              <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n              <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n            </div>\n          </header>\n          \n          <figure class=\"entry-thumbnail\">\n\n            <a href=\"single.html\" class=\"overlay overlay-primary\"></a>\n\n            <!-- to disable lazy loading, remove data-src and data-src-retina -->\n            <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/480x280\" data-src-retina=\"http://placehold.it/720x420\" width=\"480\" height=\"280\" alt=\"\">\n\n            <!--fallback for no javascript browsers-->\n            <noscript>\n              <img src=\"http://placehold.it/480x280\" alt=\"\">\n            </noscript>\n\n          </figure>\n\n        </article>\n\n        <article class=\"entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1\">\n          <header class=\"entry-header\">\n            <p class=\"small\"><a href=\"blog.html\">Speculation</a></p>\n            <h3 class=\"entry-title\"><a href=\"single.html\">Rumor: The long awaited update for Retina Display is ready to be annaunced on the next event held by them</a> </h3>\n            <div class=\"entry-meta\">\n              <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n              <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n            </div>\n          </header>\n          \n          <figure class=\"entry-thumbnail\">\n\n            <a href=\"single.html\" class=\"overlay overlay-primary\"></a>\n\n            <!-- to disable lazy loading, remove data-src and data-src-retina -->\n            <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/480x280\" data-src-retina=\"http://placehold.it/720x420\" width=\"480\" height=\"280\" alt=\"\">\n\n            <!--fallback for no javascript browsers-->\n            <noscript>\n              <img src=\"http://placehold.it/480x280\" alt=\"\">\n            </noscript>\n\n          </figure>\n\n        </article>\n\n      </div><!--/.row.entries-->\n\n    </div><!--/.item-->\n    <div class=\"item\">\n      <h2 class=\"section-title ribbon ribbon-highlight\"><a href=\"blog.html\"> #WCDC 2013</a></h2>\n      \n      <div class=\"row entries\">\n\n        <article class=\"entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1\">\n          <header class=\"entry-header\">\n            <p class=\"small\"><a href=\"blog.html\">Event Report</a></p>\n            <h3 class=\"entry-title\"><a href=\"single.html\">The Event is starting Now. Grab your popcorn, beer and notes.</a> </h3>\n            <div class=\"entry-meta\">\n              <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n              <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n            </div>\n          </header>\n          \n          <figure class=\"entry-thumbnail\">\n\n            <a href=\"single.html\" class=\"overlay overlay-primary\"></a>\n\n            <!-- to disable lazy loading, remove data-src and data-src-retina -->\n            <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/480x280\" data-src-retina=\"http://placehold.it/720x420\" width=\"480\" height=\"280\" alt=\"\">\n\n            <!--fallback for no javascript browsers-->\n            <noscript>\n              <img src=\"http://placehold.it/480x280\" alt=\"\">\n            </noscript>\n\n          </figure>\n\n        </article>\n\n        <article class=\"entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1\">\n          <header class=\"entry-header\">\n            <p class=\"small\"><a href=\"blog.html\">Speculation</a></p>\n            <h3 class=\"entry-title\"><a href=\"single.html\">Rumor: The long awaited update for Retina Display is ready to be annaunced on the next event held by them</a> </h3>\n            <div class=\"entry-meta\">\n              <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n              <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n            </div>\n          </header>\n          \n          <figure class=\"entry-thumbnail\">\n\n            <a href=\"single.html\" class=\"overlay overlay-primary\"></a>\n\n            <!-- to disable lazy loading, remove data-src and data-src-retina -->\n            <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/480x280\" data-src-retina=\"http://placehold.it/720x420\" width=\"480\" height=\"280\" alt=\"\">\n\n            <!--fallback for no javascript browsers-->\n            <noscript>\n              <img src=\"http://placehold.it/480x280\" alt=\"\">\n            </noscript>\n\n          </figure>\n\n        </article>\n\n        <article class=\"entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1\">\n          \n          <header class=\"entry-header\">\n            <p class=\"small\"><a href=\"blog.html\">Review</a></p>\n            <h3 class=\"entry-title\"><a href=\"single.html\">xPhone first hand: Check out, this might be the right phone for you</a> </h3>\n            <div class=\"entry-meta\">\n              <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n              <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n            </div>\n          </header>\n          \n          <figure class=\"entry-thumbnail\">\n\n            <a href=\"single.html\" class=\"overlay overlay-primary\"></a>\n\n            <!-- to disable lazy loading, remove data-src and data-src-retina -->\n            <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/480x280\" data-src-retina=\"http://placehold.it/720x420\" width=\"480\" height=\"280\" alt=\"\">\n\n            <!--fallback for no javascript browsers-->\n            <noscript>\n              <img src=\"http://placehold.it/480x280\" alt=\"\">\n            </noscript>\n\n          </figure>\n\n        </article>\n\n        <article class=\"entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1\">\n\n          <header class=\"entry-header\">\n            <p class=\"small\"><a href=\"blog.html\">Event Report</a></p>\n            <h3 class=\"entry-title\"><a href=\"single.html\">The rumor was not a joke, lorem ispsum dolor sit amet constactetiour.</a> </h3>\n            <div class=\"entry-meta\">\n              <span class=\"entry-date\"><a href=\"blog.html\"><time datetime=\"2013-07-04T23:26:34+00:00\">20 hours ago</time></a></span>\n              <span class=\"entry-author\"> by <a href=\"blog.html\">John Doe</a></span>\n            </div>\n          </header>\n          \n          <figure class=\"entry-thumbnail\">\n\n            <a href=\"single.html\" class=\"overlay overlay-primary\"></a>\n\n            <!-- to disable lazy loading, remove data-src and data-src-retina -->\n            <img src=\"../img/placeholder.gif\" data-src=\"http://placehold.it/680x452\" data-src-retina=\"http://placehold.it/1024x680\" width=\"680\" height=\"452\" alt=\"\">\n\n            <!--fallback for no javascript browsers-->\n            <noscript>\n              <img src=\"http://placehold.it/680x452\" alt=\"\">\n            </noscript>\n\n          </figure>\n\n        </article>\n\n      </div><!--/.row.entries-->\n\n    </div><!--/.item-->\n  </div><!--/.carousel-inner-->\n\n  <a class=\"left carousel-control\" href=\"#coverageCarousel\" data-slide=\"prev\">\n    <span class=\"icon icon-angle-left\"></span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#coverageCarousel\" data-slide=\"next\">\n    <span class=\"icon icon-angle-right\"></span>\n  </a>\n\n</div>\n\n<div class=\"section content bg-base\">\n  \n  <h2 class=\"section-title ribbon\"><span>What's you should know</span></h2>\n  \n  <div class=\"entries\">\n\n    <div class=\"row\" >\n\n      <article class=\"entry type-post style-thumbnail-text col-sm-6 col-md-2 colheight-sm-1\" *ngFor=\"let key of what_should_know;let i=index\">\n       \n        <div class=\"entry-meta\">\n          <span class=\"category\"><a href=\"blog.html\">{{key.subcategory_name}}</a></span>\n        </div>\n\n        <h3 class=\"entry-title\">\n          <a href=\"single.html\" rel=\"bookmark\">Postman will send alerts to your phone about popular people and their shouts.</a>\n        </h3>\n\n      </article>\n\n      \n    </div><!--row.-->\n\n  </div><!--entries.-->\n\n</div><!--.section.content.content-secondary-->\n\n</div><!--#main.container-->\n\n"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__seo_service__ = __webpack_require__("../../../../../src/app/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service_service__ = __webpack_require__("../../../../../src/app/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(seo, _service, router) {
        var _this = this;
        this.seo = seo;
        this._service = _service;
        this.router = router;
        this.title = "";
        this.img_path = "http://termsoflife.com/api_v1/upload/";
        this.get_ban_whats = __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalVariable */].BASE_API_URL + "User/listblogs";
        this.home_ban = __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalVariable */].BASE_API_URL + "Homebanner/homebanner";
        this.whatshouldknow = __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalVariable */].BASE_API_URL + "Homebanner/whatshouldknow";
        this._service.list(this.get_ban_whats).subscribe(function (blog) {
            _this.isLoading = false;
            _this.blog = blog;
            Object.keys(blog).forEach(function (key) {
                if (blog[key].page_pos != 0) {
                    this.banner.push(blog[key]);
                }
                else {
                    this.whatsnew.push(blog[key]);
                }
                //page_pos
            });
            _this.title = blog[0].blog_name;
            _this.seo.generateTags({
                title: _this.title,
                description: 'Home Home Home this awesome search Home optimized Angular component',
                image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
                slug: 'Home-page'
            });
        });
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this._service.list(this.home_ban).subscribe(function (homedetails) {
            _this.isLoading = false;
            _this.homedetails = homedetails;
        });
        this._service.list(this.whatshouldknow).subscribe(function (what_should_know) {
            _this.what_should_know = what_should_know;
            console.log(_this.what_should_know);
        });
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__seo_service__["a" /* SeoService */], __WEBPACK_IMPORTED_MODULE_3__common_service_service__["a" /* CommonServiceService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search-details/search-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loading-img {\n    background: url(http://preloaders.net/preloaders/360/Velocity.gif) center center no-repeat;\n    height: 100%;\n    z-index: 20;\n}\n\n.overlay {\n    \n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    opacity: 0.5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-details/search-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\" class=\"overlay\">\n    <diV id=\"loading-img\"></diV>\n  </div>\n\n\t\t<div *ngIf=\"!isLoading\" id=\"main\" class=\"container\">\n\n\t\t\t<div class=\"section row entries bg-primary section-no-margin-bottom\">\n\n\n\t\t\t</div>\n\n\t\t\t<div id=\"content\" class=\"content section row\">\n\n\t\t\t\t<div class=\"col-md-8 bg-base col-lg-8 col-xl-9\">\n\n\t\t\t\t\t<div class=\"ribbon ribbon-highlight\">\n\t\t\t\t\t\t<ol class=\"breadcrumb ribbon-inner\">\n\t\t\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">Features</a></li>\n\t\t\t\t\t\t\t<li class=\"active\">Blog 2 Columns</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"entries\">\n                  \n\t\t\t\t\t\t<article class=\"entry style-media media type-post\" *ngFor=\"let subone1 of searchdetails | paginate: { itemsPerPage: 8, currentPage: p };let i=index\">\n\t\t\t\t\t\t\t<a routerLink=\"/{{category}}/{{subone1.seo_url}}\">\n\t\t\t\t\t\t\t<figure class=\"media-object pull-left entry-thumbnail hidden-xs\">\n\t\t\t\t\t\t\t\t<img src={{img_path}}{{subone1.blog_images}}  width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\t\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/230x230\" alt=\"\">\n\t\t\t\t\t\t\t\t</noscript>\n\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t<header class=\"entry-header\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"entry-title\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"single.html\" rel=\"bookmark\">{{subone1.seo_title}}</a>\n\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t<div class=\"entry-meta\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"author\">by <a href=\"blog.html\">John Doe</a></span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"entry-date\"><a href=\"blog.html\">on <time datetime=\"2013-07-04T23:26:34+00:00\">September 20 2013</time></a></span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"category\">In <a href=\"blog.html\">Entertaintment</a></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</header>\n                                <div >\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t{{descri[i]}}\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/{{category}}/{{subone1.seo_url}}\">Continue Reading<i class=\"icon icon-long-arrow-right\"></i></a>\n\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t    \t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div><!--/.entris-->\n\t\t\t\t\t<pagination-controls (pageChange)=\"p = $event\" ></pagination-controls>\n\t\t\t\t\t\n\t\t\t\t</div><!--/.col-md-8.col-lg-8.col-xl-9-->\n\n\n\t\t\t<div class=\"sidebar col-md-4 col-lg-4 col-xl-3\">\n\t\t\t\t\n\t\t\t\t<aside class=\"widget\" *ngFor=\"let post of feature_post1\">\n\n\t\t\t\t\t<h2 class=\"widget-title ribbon\"><span>{{post.subcategory_name}}</span></h2>\n\n\t\t\t\t\t<div class=\"entries row\" *ngFor=\"let blog of collection\">\n\t\t\t\t\t\t<article class=\"type-post style-media-list media col-sm-6 col-md-12\" *ngIf=\"post.subcategory_id == blog.blog_subcategories\">\n\n\t\t\t\t\t\t\t<a routerLink=\"/{{category}}/{{blog.seo_url}}\">\n\t\t\t\t\t\t\t<img src={{img_path}}{{blog.blog_images}} width=\"80\" height=\"80\" class=\"media-object pull-left\" alt=\"\">\n\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<noscript>\n\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/80x80\" alt=\"\">\n\t\t\t\t\t\t\t</noscript>\n\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t<h3  class=\"entry-title\">\n\t\t\t\t\t\t\t\t\t<a href=\"single.html\" rel=\"bookmark\">{{blog.blog_name}}</a>\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t<div class=\"entry-meta\">\n\t\t\t\t\t\t\t\t\t<span class=\"entry-date\"><a href=\"blog.html\">on <time datetime=\"2013-07-04T23:26:34+00:00\">September 20 2013</time></a></span>\n\t\t\t\t\t\t\t\t\t<span class=\"category\">In <a href=\"blog.html\">Technology</a></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n                         </a>\n\t\t\t\t\t\t</article>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</aside><!--/.widget-->\n\n\t\t\t\t\n\t\t\t</div><!--/.sidebar col-md-4 col-lg-4 col-xl-3-->\n\n\n\t\t\t</div><!--/#content-->\n\n\n\t\t\t\n\t\t</div><!--#main.container-->"

/***/ }),

/***/ "../../../../../src/app/search-details/search-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_service__ = __webpack_require__("../../../../../src/app/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__("../../../../../src/app/search.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchDetailsComponent = /** @class */ (function () {
    function SearchDetailsComponent(_service, router) {
        this._service = _service;
        this.router = router;
        this.p = 1;
        this.descri = [];
        this.img_path = "http://termsoflife.com/api_v1/upload/";
        this.search_details = "http://termsoflife.com/api_v1/index.php/user/search/search";
        this.model = new __WEBPACK_IMPORTED_MODULE_3__search__["a" /* Search */]();
    }
    SearchDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this._service.searchdetails(this.search_details, this._service.SearchResult).subscribe(function (searchdetails) {
            _this.isLoading = false;
            _this.searchdetails = searchdetails;
            for (var key2 in _this.searchdetails) {
                _this.descri.push(_this.searchdetails[key2]['blog_description'].slice(0, 4));
            }
        });
    };
    SearchDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-details',
            template: __webpack_require__("../../../../../src/app/search-details/search-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-details/search-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service_service__["a" /* CommonServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SearchDetailsComponent);
    return SearchDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search-page/search-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-page/search-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  search-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/search-page/search-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent() {
    }
    SearchPageComponent.prototype.ngOnInit = function () {
    };
    SearchPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-page',
            template: __webpack_require__("../../../../../src/app/search-page/search-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-page/search-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchPageComponent);
    return SearchPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
var Search = /** @class */ (function () {
    function Search() {
    }
    return Search;
}());



/***/ }),

/***/ "../../../../../src/app/seo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeoService = /** @class */ (function () {
    function SeoService(meta) {
        this.meta = meta;
    }
    SeoService.prototype.generateTags = function (config) {
        // default values
        config = __assign({ title: 'Angular <3 Linkbots', description: 'My SEO friendly Angular Component', image: 'https://angularfirebase.com/images/logo.png', slug: '' }, config);
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@angularfirebase' });
        this.meta.updateTag({ name: 'twitter:title', content: config.title });
        this.meta.updateTag({ name: 'twitter:description', content: config.description });
        this.meta.updateTag({ name: 'twitter:image', content: config.image });
        this.meta.updateTag({ property: 'og:type', content: 'article' });
        this.meta.updateTag({ property: 'og:site_name', content: 'AngularFirebase' });
        this.meta.updateTag({ property: 'og:title', content: config.title });
        this.meta.updateTag({ property: 'og:description', content: config.description });
        this.meta.updateTag({ property: 'og:image', content: config.image });
        this.meta.updateTag({ property: 'og:url', content: "https://instafire-app.firebaseapp.com/" + config.slug });
    };
    SeoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Meta */]])
    ], SeoService);
    return SeoService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map