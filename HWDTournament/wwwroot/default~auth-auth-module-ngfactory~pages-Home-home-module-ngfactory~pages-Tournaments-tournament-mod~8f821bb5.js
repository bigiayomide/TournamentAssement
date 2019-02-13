(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~auth-auth-module-ngfactory~pages-Home-home-module-ngfactory~pages-Tournaments-tournament-mod~8f821bb5"],{

/***/ "./node_modules/@angular/cdk/esm5/layout.es5.js":
/*!******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/layout.es5.js ***!
  \******************************************************/
/*! exports provided: LayoutModule, BreakpointObserver, Breakpoints, MediaMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function() { return BreakpointObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return Breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMatcher", function() { return MediaMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] },
    ];
    return LayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Global registry for all dynamically-created, injected media queries.
  @type {?} */
var mediaQueriesForWebkitCompatibility = new Set();
/** *
 * Style tag that holds all of the dynamically-created media queries.
  @type {?} */
var mediaQueryStyleNode;
/**
 * A utility for calling matchMedia queries.
 */
var MediaMatcher = /** @class */ (function () {
    function MediaMatcher(platform) {
        this.platform = platform;
        this._matchMedia = this.platform.isBrowser && window.matchMedia ?
            // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
            // call it from a different scope.
            window.matchMedia.bind(window) :
            noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     */
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     * @param {?} query
     * @return {?}
     */
    MediaMatcher.prototype.matchMedia = /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     * @param {?} query
     * @return {?}
     */
    function (query) {
        if (this.platform.WEBKIT) {
            createEmptyStyleRule(query);
        }
        return this._matchMedia(query);
    };
    MediaMatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    MediaMatcher.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
    ]; };
    /** @nocollapse */ MediaMatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MediaMatcher_Factory() { return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"])); }, token: MediaMatcher, providedIn: "root" });
    return MediaMatcher;
}());
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 * @param {?} query
 * @return {?}
 */
function createEmptyStyleRule(query) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css'); /** @type {?} */
            ((document.head)).appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            (/** @type {?} */ (mediaQueryStyleNode.sheet))
                .insertRule("@media " + query + " {.fx-query-test{ }}", 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
/**
 * No-op matchMedia replacement for non-browser platforms.
 * @param {?} query
 * @return {?}
 */
function noopMatchMedia(query) {
    // Use `as any` here to avoid adding additional necessary properties for
    // the noop matcher.
    return /** @type {?} */ ({
        matches: query === 'all' || query === '',
        media: query,
        addListener: function () { },
        removeListener: function () { }
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Utility for checking the matching state of \@media queries.
 */
var BreakpointObserver = /** @class */ (function () {
    function BreakpointObserver(mediaMatcher, zone) {
        this.mediaMatcher = mediaMatcher;
        this.zone = zone;
        /**
         * A map of all media queries currently being listened for.
         */
        this._queries = new Map();
        /**
         * A subject for all other observables to takeUntil based on.
         */
        this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /** Completes the active subject, signalling to all other observables to complete. */
    /**
     * Completes the active subject, signalling to all other observables to complete.
     * @return {?}
     */
    BreakpointObserver.prototype.ngOnDestroy = /**
     * Completes the active subject, signalling to all other observables to complete.
     * @return {?}
     */
    function () {
        this._destroySubject.next();
        this._destroySubject.complete();
    };
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */
    /**
     * Whether one or more media queries match the current viewport size.
     * @param {?} value One or more media queries to check.
     * @return {?} Whether any of the media queries match.
     */
    BreakpointObserver.prototype.isMatched = /**
     * Whether one or more media queries match the current viewport size.
     * @param {?} value One or more media queries to check.
     * @return {?} Whether any of the media queries match.
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
        return queries.some(function (mediaQuery) { return _this._registerQuery(mediaQuery).mql.matches; });
    };
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param {?} value One or more media queries to check.
     * @return {?} A stream of matches for the given queries.
     */
    BreakpointObserver.prototype.observe = /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param {?} value One or more media queries to check.
     * @return {?} A stream of matches for the given queries.
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
        /** @type {?} */
        var observables = queries.map(function (query) { return _this._registerQuery(query).observable; });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (breakpointStates) {
            /** @type {?} */
            var response = {
                matches: false,
                breakpoints: {},
            };
            breakpointStates.forEach(function (state) {
                response.matches = response.matches || state.matches;
                response.breakpoints[state.query] = state.matches;
            });
            return response;
        }));
    };
    /**
     * Registers a specific query to be listened for.
     * @param {?} query
     * @return {?}
     */
    BreakpointObserver.prototype._registerQuery = /**
     * Registers a specific query to be listened for.
     * @param {?} query
     * @return {?}
     */
    function (query) {
        var _this = this;
        // Only set up a new MediaQueryList if it is not already being listened for.
        if (this._queries.has(query)) {
            return /** @type {?} */ ((this._queries.get(query)));
        }
        /** @type {?} */
        var mql = this.mediaMatcher.matchMedia(query);
        /** @type {?} */
        var queryListener;
        /** @type {?} */
        var queryObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(
        // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
        // back into the zone because matchMedia is only included in Zone.js by loading the
        // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
        // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
        // patches it.
        // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
        // back into the zone because matchMedia is only included in Zone.js by loading the
        // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
        // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
        // patches it.
        function (listener) {
            queryListener = function (e) { return _this.zone.run(function () { return listener(e); }); };
            mql.addListener(queryListener);
        }, function () { return mql.removeListener(queryListener); })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (nextMql) { return ({ query: query, matches: nextMql.matches }); }));
        /** @type {?} */
        var output = { observable: queryObservable, mql: mql };
        this._queries.set(query, output);
        return output;
    };
    BreakpointObserver.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    BreakpointObserver.ctorParameters = function () { return [
        { type: MediaMatcher },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    /** @nocollapse */ BreakpointObserver.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: BreakpointObserver, providedIn: "root" });
    return BreakpointObserver;
}());
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 * @param {?} queries
 * @return {?}
 */
function splitQueries(queries) {
    return queries.map(function (query) { return query.split(','); })
        .reduce(function (a1, a2) { return a1.concat(a2); })
        .map(function (query) { return query.trim(); });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
  @type {?} */
var Breakpoints = {
    XSmall: '(max-width: 599.99px)',
    Small: '(min-width: 600px) and (max-width: 959.99px)',
    Medium: '(min-width: 960px) and (max-width: 1279.99px)',
    Large: '(min-width: 1280px) and (max-width: 1919.99px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599.99px) and (orientation: portrait), ' +
        '(max-width: 959.99px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=layout.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/overlay.es5.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/overlay.es5.js ***!
  \*******************************************************/
/*! exports provided: ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkScrollable, ScrollDispatcher, Overlay, OverlayContainer, CdkOverlayOrigin, CdkConnectedOverlay, FullscreenOverlayContainer, OverlayRef, OverlayKeyboardDispatcher, OverlayPositionBuilder, GlobalPositionStrategy, ConnectedPositionStrategy, FlexibleConnectedPositionStrategy, OverlayConfig, validateVerticalPosition, validateHorizontalPosition, ConnectionPositionPair, ScrollingVisibility, ConnectedOverlayPositionChange, ScrollStrategyOptions, RepositionScrollStrategy, CloseScrollStrategy, NoopScrollStrategy, BlockScrollStrategy, OverlayModule, OVERLAY_PROVIDERS, ɵg, ɵf, ɵb, ɵa, ɵc, ɵe, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return OverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function() { return CdkOverlayOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function() { return CdkConnectedOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function() { return FullscreenOverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRef", function() { return OverlayRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function() { return OverlayKeyboardDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function() { return OverlayPositionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function() { return GlobalPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function() { return ConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function() { return FlexibleConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayConfig", function() { return OverlayConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function() { return validateVerticalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function() { return validateHorizontalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function() { return ConnectionPositionPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function() { return ScrollingVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function() { return ConnectedOverlayPositionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function() { return ScrollStrategyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function() { return RepositionScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function() { return CloseScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function() { return NoopScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function() { return BlockScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function() { return OverlayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function() { return OVERLAY_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return OVERLAY_CONTAINER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return OVERLAY_CONTAINER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
var  /**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
BlockScrollStrategy = /** @class */ (function () {
    function BlockScrollStrategy(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
        this._document = document;
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @return {?}
     */
    BlockScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @return {?}
     */
    function () { };
    /** Blocks page-level scroll while the attached overlay is open. */
    /**
     * Blocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    BlockScrollStrategy.prototype.enable = /**
     * Blocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    function () {
        if (this._canBeEnabled()) {
            /** @type {?} */
            var root = /** @type {?} */ ((this._document.documentElement));
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            // Cache the previous inline styles in case the user had set them.
            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || '';
            // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.
            root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
            root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
        }
    };
    /** Unblocks page-level scroll while the attached overlay is open. */
    /**
     * Unblocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    BlockScrollStrategy.prototype.disable = /**
     * Unblocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    function () {
        if (this._isEnabled) {
            /** @type {?} */
            var html = /** @type {?} */ ((this._document.documentElement));
            /** @type {?} */
            var body = /** @type {?} */ ((this._document.body));
            /** @type {?} */
            var htmlStyle = /** @type {?} */ (html.style);
            /** @type {?} */
            var bodyStyle = /** @type {?} */ (body.style);
            /** @type {?} */
            var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
            /** @type {?} */
            var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
            this._isEnabled = false;
            htmlStyle.left = this._previousHTMLStyles.left;
            htmlStyle.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock');
            // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
        }
    };
    /**
     * @return {?}
     */
    BlockScrollStrategy.prototype._canBeEnabled = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var html = /** @type {?} */ ((this._document.documentElement));
        if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        /** @type {?} */
        var body = this._document.body;
        /** @type {?} */
        var viewport = this._viewportRuler.getViewportSize();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
    };
    return BlockScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 * @return {?}
 */
function getMatScrollStrategyAlreadyAttachedError() {
    return Error("Scroll strategy has already been attached.");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
var  /**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
CloseScrollStrategy = /** @class */ (function () {
    function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /**
         * Detaches the overlay ref and disables the scroll strategy.
         */
        this._detach = function () {
            _this.disable();
            if (_this._overlayRef.hasAttached()) {
                _this._ngZone.run(function () { return _this._overlayRef.detach(); });
            }
        };
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    CloseScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables the closing of the attached overlay on scroll. */
    /**
     * Enables the closing of the attached overlay on scroll.
     * @return {?}
     */
    CloseScrollStrategy.prototype.enable = /**
     * Enables the closing of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._scrollSubscription) {
            return;
        }
        /** @type {?} */
        var stream = this._scrollDispatcher.scrolled(0);
        if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(function () {
                /** @type {?} */
                var scrollPosition = _this._viewportRuler.getViewportScrollPosition().top;
                if (Math.abs(scrollPosition - _this._initialScrollPosition) > /** @type {?} */ ((/** @type {?} */ ((_this._config)).threshold))) {
                    _this._detach();
                }
                else {
                    _this._overlayRef.updatePosition();
                }
            });
        }
        else {
            this._scrollSubscription = stream.subscribe(this._detach);
        }
    };
    /** Disables the closing the attached overlay on scroll. */
    /**
     * Disables the closing the attached overlay on scroll.
     * @return {?}
     */
    CloseScrollStrategy.prototype.disable = /**
     * Disables the closing the attached overlay on scroll.
     * @return {?}
     */
    function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return CloseScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * Scroll strategy that doesn't do anything.
 */
var  /**
 * Scroll strategy that doesn't do anything.
 */
NoopScrollStrategy = /** @class */ (function () {
    function NoopScrollStrategy() {
    }
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.enable = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.disable = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.attach = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    return NoopScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

// TODO(jelbourn): move this to live with the rest of the scrolling code
// TODO(jelbourn): someday replace this with IntersectionObservers
/**
 * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is scrolled out of view
 */
function isElementScrolledOutsideView(element, scrollContainers) {
    return scrollContainers.some(function (containerBounds) {
        /** @type {?} */
        var outsideAbove = element.bottom < containerBounds.top;
        /** @type {?} */
        var outsideBelow = element.top > containerBounds.bottom;
        /** @type {?} */
        var outsideLeft = element.right < containerBounds.left;
        /** @type {?} */
        var outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
    });
}
/**
 * Gets whether an element is clipped by any of its scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is clipped
 */
function isElementClippedByScrolling(element, scrollContainers) {
    return scrollContainers.some(function (scrollContainerRect) {
        /** @type {?} */
        var clippedAbove = element.top < scrollContainerRect.top;
        /** @type {?} */
        var clippedBelow = element.bottom > scrollContainerRect.bottom;
        /** @type {?} */
        var clippedLeft = element.left < scrollContainerRect.left;
        /** @type {?} */
        var clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Strategy that will update the element position as the user is scrolling.
 */
var  /**
 * Strategy that will update the element position as the user is scrolling.
 */
RepositionScrollStrategy = /** @class */ (function () {
    function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    RepositionScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables repositioning of the attached overlay on scroll. */
    /**
     * Enables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    RepositionScrollStrategy.prototype.enable = /**
     * Enables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._scrollSubscription) {
            /** @type {?} */
            var throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(function () {
                _this._overlayRef.updatePosition();
                // TODO(crisbeto): make `close` on by default once all components can handle it.
                if (_this._config && _this._config.autoClose) {
                    /** @type {?} */
                    var overlayRect = _this._overlayRef.overlayElement.getBoundingClientRect();
                    var _a = _this._viewportRuler.getViewportSize(), width = _a.width, height = _a.height;
                    /** @type {?} */
                    var parentRects = [{ width: width, height: height, bottom: height, right: width, top: 0, left: 0 }];
                    if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                        _this.disable();
                        _this._ngZone.run(function () { return _this._overlayRef.detach(); });
                    }
                }
            });
        }
    };
    /** Disables repositioning of the attached overlay on scroll. */
    /**
     * Disables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    RepositionScrollStrategy.prototype.disable = /**
     * Disables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return RepositionScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
var ScrollStrategyOptions = /** @class */ (function () {
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /**
         * Do nothing on scroll.
         */
        this.noop = function () { return new NoopScrollStrategy(); };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */
        this.close = function (config) { return new CloseScrollStrategy(_this._scrollDispatcher, _this._ngZone, _this._viewportRuler, config); };
        /**
         * Block scrolling.
         */
        this.block = function () { return new BlockScrollStrategy(_this._viewportRuler, _this._document); };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */
        this.reposition = function (config) { return new RepositionScrollStrategy(_this._scrollDispatcher, _this._viewportRuler, _this._ngZone, config); };
        this._document = document;
    }
    ScrollStrategyOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ScrollStrategyOptions.ctorParameters = function () { return [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ ScrollStrategyOptions.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ScrollStrategyOptions_Factory() { return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: ScrollStrategyOptions, providedIn: "root" });
    return ScrollStrategyOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Initial configuration used when creating an overlay.
 */
var  /**
 * Initial configuration used when creating an overlay.
 */
OverlayConfig = /** @class */ (function () {
    function OverlayConfig(config) {
        var _this = this;
        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = new NoopScrollStrategy();
        /**
         * Custom class to add to the overlay pane.
         */
        this.panelClass = '';
        /**
         * Whether the overlay has a backdrop.
         */
        this.hasBackdrop = false;
        /**
         * Custom class to add to the backdrop
         */
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.disposeOnNavigation = false;
        if (config) {
            Object.keys(config).forEach(function (k) {
                /** @type {?} */
                var key = /** @type {?} */ (k);
                if (typeof config[key] !== 'undefined') {
                    _this[key] = config[key];
                }
            });
        }
    }
    return OverlayConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The points of the origin element and the overlay element to connect.
 */
var  /**
 * The points of the origin element and the overlay element to connect.
 */
ConnectionPositionPair = /** @class */ (function () {
    function ConnectionPositionPair(origin, overlay, offsetX, offsetY, panelClass) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.panelClass = panelClass;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
    return ConnectionPositionPair;
}());
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 * \@docs-private
 */
var  /**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 * \@docs-private
 */
ScrollingVisibility = /** @class */ (function () {
    function ScrollingVisibility() {
    }
    return ScrollingVisibility;
}());
/**
 * The change event emitted by the strategy when a fallback position is used.
 */
var ConnectedOverlayPositionChange = /** @class */ (function () {
    function ConnectedOverlayPositionChange(connectionPair, /** @docs-private */
    scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
    /** @nocollapse */
    ConnectedOverlayPositionChange.ctorParameters = function () { return [
        { type: ConnectionPositionPair },
        { type: ScrollingVisibility, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
    ]; };
    return ConnectedOverlayPositionChange;
}());
/**
 * Validates whether a vertical position property matches the expected values.
 * \@docs-private
 * @param {?} property Name of the property being validated.
 * @param {?} value Value of the property being validated.
 * @return {?}
 */
function validateVerticalPosition(property, value) {
    if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid " + property + " \"" + value + "\". " +
            "Expected \"top\", \"bottom\" or \"center\".");
    }
}
/**
 * Validates whether a horizontal position property matches the expected values.
 * \@docs-private
 * @param {?} property Name of the property being validated.
 * @param {?} value Value of the property being validated.
 * @return {?}
 */
function validateHorizontalPosition(property, value) {
    if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid " + property + " \"" + value + "\". " +
            "Expected \"start\", \"end\" or \"center\".");
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
var OverlayKeyboardDispatcher = /** @class */ (function () {
    function OverlayKeyboardDispatcher(document) {
        var _this = this;
        /**
         * Currently attached overlays in the order they were attached.
         */
        this._attachedOverlays = [];
        /**
         * Keyboard event listener that will be attached to the body.
         */
        this._keydownListener = function (event) {
            /** @type {?} */
            var overlays = _this._attachedOverlays;
            for (var i = overlays.length - 1; i > -1; i--) {
                // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
                // We want to target the most recent overlay, rather than trying to match where the event came
                // from, because some components might open an overlay, but keep focus on a trigger element
                // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
                // because we don't want overlays that don't handle keyboard events to block the ones below
                // them that do.
                if (overlays[i]._keydownEventSubscriptions > 0) {
                    overlays[i]._keydownEvents.next(event);
                    break;
                }
            }
        };
        this._document = document;
    }
    /**
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._detach();
    };
    /** Add a new overlay to the list of attached overlay refs. */
    /**
     * Add a new overlay to the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.add = /**
     * Add a new overlay to the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        // Ensure that we don't get the same overlay multiple times.
        this.remove(overlayRef);
        // Lazily start dispatcher once first overlay is added
        if (!this._isAttached) {
            this._document.body.addEventListener('keydown', this._keydownListener, true);
            this._isAttached = true;
        }
        this._attachedOverlays.push(overlayRef);
    };
    /** Remove an overlay from the list of attached overlay refs. */
    /**
     * Remove an overlay from the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.remove = /**
     * Remove an overlay from the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        /** @type {?} */
        var index = this._attachedOverlays.indexOf(overlayRef);
        if (index > -1) {
            this._attachedOverlays.splice(index, 1);
        }
        // Remove the global listener once there are no more overlays.
        if (this._attachedOverlays.length === 0) {
            this._detach();
        }
    };
    /**
     * Detaches the global keyboard event listener.
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype._detach = /**
     * Detaches the global keyboard event listener.
     * @return {?}
     */
    function () {
        if (this._isAttached) {
            this._document.body.removeEventListener('keydown', this._keydownListener, true);
            this._isAttached = false;
        }
    };
    OverlayKeyboardDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    OverlayKeyboardDispatcher.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ OverlayKeyboardDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function OverlayKeyboardDispatcher_Factory() { return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: OverlayKeyboardDispatcher, providedIn: "root" });
    return OverlayKeyboardDispatcher;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} dispatcher
 * @param {?} _document
 * @return {?}
 */
function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
    return dispatcher || new OverlayKeyboardDispatcher(_document);
}
/** *
 * \@docs-private \@deprecated \@breaking-change 8.0.0
  @type {?} */
var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
    // If there is already an OverlayKeyboardDispatcher available, use that.
    // Otherwise, provide a new one.
    provide: OverlayKeyboardDispatcher,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), OverlayKeyboardDispatcher],
        /** @type {?} */ ((
        // Coerce to `InjectionToken` so that the `deps` match the "shape"
        // of the type expected by Angular
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
    ],
    useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Container inside which all overlays will render.
 */
var OverlayContainer = /** @class */ (function () {
    function OverlayContainer(_document) {
        this._document = _document;
    }
    /**
     * @return {?}
     */
    OverlayContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._containerElement && this._containerElement.parentNode) {
            this._containerElement.parentNode.removeChild(this._containerElement);
        }
    };
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    OverlayContainer.prototype.getContainerElement = /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    OverlayContainer.prototype._createContainer = /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var container = this._document.createElement('div');
        container.classList.add('cdk-overlay-container');
        this._document.body.appendChild(container);
        this._containerElement = container;
    };
    OverlayContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    OverlayContainer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ OverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function OverlayContainer_Factory() { return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: OverlayContainer, providedIn: "root" });
    return OverlayContainer;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentContainer
 * @param {?} _document
 * @return {?}
 */
function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
    return parentContainer || new OverlayContainer(_document);
}
/** *
 * \@docs-private \@deprecated \@breaking-change 8.0.0
  @type {?} */
var OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), OverlayContainer],
        /** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"] // We need to use the InjectionToken somewhere to keep TS happy
        ) // We need to use the InjectionToken somewhere to keep TS happy
    ],
    useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var  /**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
OverlayRef = /** @class */ (function () {
    function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location) {
        var _this = this;
        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._backdropElement = null;
        this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this._keydownEventsObservable = rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (observer) {
            /** @type {?} */
            var subscription = _this._keydownEvents.subscribe(observer);
            _this._keydownEventSubscriptions++;
            return function () {
                subscription.unsubscribe();
                _this._keydownEventSubscriptions--;
            };
        });
        /**
         * Stream of keydown events dispatched to this overlay.
         */
        this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Amount of subscriptions to the keydown events.
         */
        this._keydownEventSubscriptions = 0;
        if (_config.scrollStrategy) {
            _config.scrollStrategy.attach(this);
        }
        this._positionStrategy = _config.positionStrategy;
    }
    Object.defineProperty(OverlayRef.prototype, "overlayElement", {
        /** The overlay's HTML element */
        get: /**
         * The overlay's HTML element
         * @return {?}
         */
        function () {
            return this._pane;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayRef.prototype, "backdropElement", {
        /** The overlay's backdrop HTML element. */
        get: /**
         * The overlay's backdrop HTML element.
         * @return {?}
         */
        function () {
            return this._backdropElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayRef.prototype, "hostElement", {
        /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         */
        get: /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         * @return {?}
         */
        function () {
            return this._host;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param portal Portal instance to which to attach the overlay.
     * @returns The portal attachment result.
     */
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    OverlayRef.prototype.attach = /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    function (portal) {
        var _this = this;
        /** @type {?} */
        var attachResult = this._portalOutlet.attach(portal);
        if (this._positionStrategy) {
            this._positionStrategy.attach(this);
        }
        // Update the pane element with the given configuration.
        if (!this._host.parentElement && this._previousHostParent) {
            this._previousHostParent.appendChild(this._host);
        }
        this._updateStackingOrder();
        this._updateElementSize();
        this._updateElementDirection();
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.enable();
        }
        // Update the position once the zone is stable so that the overlay will be fully rendered
        // before attempting to position it, as the position may depend on the size of the rendered
        // content.
        this._ngZone.onStable
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function () {
            // The overlay could've been detached before the zone has stabilized.
            if (_this.hasAttached()) {
                _this.updatePosition();
            }
        });
        // Enable pointer events for the overlay pane element.
        this._togglePointerEvents(true);
        if (this._config.hasBackdrop) {
            this._attachBackdrop();
        }
        if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
        }
        // Only emit the `attachments` event once all other setup is done.
        this._attachments.next();
        // Track this overlay by the keyboard dispatcher
        this._keyboardDispatcher.add(this);
        // @breaking-change 8.0.0 remove the null check for `_location`
        // once the constructor parameter is made required.
        if (this._config.disposeOnNavigation && this._location) {
            this._locationChanges = this._location.subscribe(function () { return _this.dispose(); });
        }
        return attachResult;
    };
    /**
     * Detaches an overlay from a portal.
     * @returns The portal detachment result.
     */
    /**
     * Detaches an overlay from a portal.
     * @return {?} The portal detachment result.
     */
    OverlayRef.prototype.detach = /**
     * Detaches an overlay from a portal.
     * @return {?} The portal detachment result.
     */
    function () {
        if (!this.hasAttached()) {
            return;
        }
        this.detachBackdrop();
        // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
        this._togglePointerEvents(false);
        if (this._positionStrategy && this._positionStrategy.detach) {
            this._positionStrategy.detach();
        }
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.disable();
        }
        /** @type {?} */
        var detachmentResult = this._portalOutlet.detach();
        // Only emit after everything is detached.
        this._detachments.next();
        // Remove this overlay from keyboard dispatcher tracking.
        this._keyboardDispatcher.remove(this);
        // Keeping the host element in DOM the can cause scroll jank, because it still gets
        // rendered, even though it's transparent and unclickable which is why we remove it.
        this._detachContentWhenStable();
        // Stop listening for location changes.
        this._locationChanges.unsubscribe();
        return detachmentResult;
    };
    /** Cleans up the overlay from the DOM. */
    /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    OverlayRef.prototype.dispose = /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isAttached = this.hasAttached();
        if (this._positionStrategy) {
            this._positionStrategy.dispose();
        }
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.disable();
        }
        this.detachBackdrop();
        this._locationChanges.unsubscribe();
        this._keyboardDispatcher.remove(this);
        this._portalOutlet.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._keydownEvents.complete();
        if (this._host && this._host.parentNode) {
            this._host.parentNode.removeChild(this._host);
            this._host = /** @type {?} */ ((null));
        }
        this._previousHostParent = this._pane = /** @type {?} */ ((null));
        if (isAttached) {
            this._detachments.next();
        }
        this._detachments.complete();
    };
    /** Whether the overlay has attached content. */
    /**
     * Whether the overlay has attached content.
     * @return {?}
     */
    OverlayRef.prototype.hasAttached = /**
     * Whether the overlay has attached content.
     * @return {?}
     */
    function () {
        return this._portalOutlet.hasAttached();
    };
    /** Gets an observable that emits when the backdrop has been clicked. */
    /**
     * Gets an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    OverlayRef.prototype.backdropClick = /**
     * Gets an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    function () {
        return this._backdropClick.asObservable();
    };
    /** Gets an observable that emits when the overlay has been attached. */
    /**
     * Gets an observable that emits when the overlay has been attached.
     * @return {?}
     */
    OverlayRef.prototype.attachments = /**
     * Gets an observable that emits when the overlay has been attached.
     * @return {?}
     */
    function () {
        return this._attachments.asObservable();
    };
    /** Gets an observable that emits when the overlay has been detached. */
    /**
     * Gets an observable that emits when the overlay has been detached.
     * @return {?}
     */
    OverlayRef.prototype.detachments = /**
     * Gets an observable that emits when the overlay has been detached.
     * @return {?}
     */
    function () {
        return this._detachments.asObservable();
    };
    /** Gets an observable of keydown events targeted to this overlay. */
    /**
     * Gets an observable of keydown events targeted to this overlay.
     * @return {?}
     */
    OverlayRef.prototype.keydownEvents = /**
     * Gets an observable of keydown events targeted to this overlay.
     * @return {?}
     */
    function () {
        return this._keydownEventsObservable;
    };
    /** Gets the the current overlay configuration, which is immutable. */
    /**
     * Gets the the current overlay configuration, which is immutable.
     * @return {?}
     */
    OverlayRef.prototype.getConfig = /**
     * Gets the the current overlay configuration, which is immutable.
     * @return {?}
     */
    function () {
        return this._config;
    };
    /** Updates the position of the overlay based on the position strategy. */
    /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    OverlayRef.prototype.updatePosition = /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    function () {
        if (this._positionStrategy) {
            this._positionStrategy.apply();
        }
    };
    /** Switches to a new position strategy and updates the overlay position. */
    /**
     * Switches to a new position strategy and updates the overlay position.
     * @param {?} strategy
     * @return {?}
     */
    OverlayRef.prototype.updatePositionStrategy = /**
     * Switches to a new position strategy and updates the overlay position.
     * @param {?} strategy
     * @return {?}
     */
    function (strategy) {
        if (strategy === this._positionStrategy) {
            return;
        }
        if (this._positionStrategy) {
            this._positionStrategy.dispose();
        }
        this._positionStrategy = strategy;
        if (this.hasAttached()) {
            strategy.attach(this);
            this.updatePosition();
        }
    };
    /** Update the size properties of the overlay. */
    /**
     * Update the size properties of the overlay.
     * @param {?} sizeConfig
     * @return {?}
     */
    OverlayRef.prototype.updateSize = /**
     * Update the size properties of the overlay.
     * @param {?} sizeConfig
     * @return {?}
     */
    function (sizeConfig) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, this._config, sizeConfig);
        this._updateElementSize();
    };
    /** Sets the LTR/RTL direction for the overlay. */
    /**
     * Sets the LTR/RTL direction for the overlay.
     * @param {?} dir
     * @return {?}
     */
    OverlayRef.prototype.setDirection = /**
     * Sets the LTR/RTL direction for the overlay.
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, this._config, { direction: dir });
        this._updateElementDirection();
    };
    /**
     * Returns the layout direction of the overlay panel.
     */
    /**
     * Returns the layout direction of the overlay panel.
     * @return {?}
     */
    OverlayRef.prototype.getDirection = /**
     * Returns the layout direction of the overlay panel.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var direction = this._config.direction;
        if (!direction) {
            return 'ltr';
        }
        return typeof direction === 'string' ? direction : direction.value;
    };
    /**
     * Updates the text direction of the overlay panel.
     * @return {?}
     */
    OverlayRef.prototype._updateElementDirection = /**
     * Updates the text direction of the overlay panel.
     * @return {?}
     */
    function () {
        this._host.setAttribute('dir', this.getDirection());
    };
    /**
     * Updates the size of the overlay element based on the overlay config.
     * @return {?}
     */
    OverlayRef.prototype._updateElementSize = /**
     * Updates the size of the overlay element based on the overlay config.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var style = this._pane.style;
        style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.width);
        style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.height);
        style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.minWidth);
        style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.minHeight);
        style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.maxWidth);
        style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.maxHeight);
    };
    /**
     * Toggles the pointer events for the overlay pane element.
     * @param {?} enablePointer
     * @return {?}
     */
    OverlayRef.prototype._togglePointerEvents = /**
     * Toggles the pointer events for the overlay pane element.
     * @param {?} enablePointer
     * @return {?}
     */
    function (enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
    };
    /**
     * Attaches a backdrop for this overlay.
     * @return {?}
     */
    OverlayRef.prototype._attachBackdrop = /**
     * Attaches a backdrop for this overlay.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var showingClass = 'cdk-overlay-backdrop-showing';
        this._backdropElement = this._document.createElement('div');
        this._backdropElement.classList.add('cdk-overlay-backdrop');
        if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
        } /** @type {?} */
        ((
        // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.
        this._host.parentElement)).insertBefore(this._backdropElement, this._host);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', function (event) { return _this._backdropClick.next(event); });
        // Add class to fade-in the backdrop after one frame.
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                    if (_this._backdropElement) {
                        _this._backdropElement.classList.add(showingClass);
                    }
                });
            });
        }
        else {
            this._backdropElement.classList.add(showingClass);
        }
    };
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @return {?}
     */
    OverlayRef.prototype._updateStackingOrder = /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @return {?}
     */
    function () {
        if (this._host.nextSibling) {
            /** @type {?} */ ((this._host.parentNode)).appendChild(this._host);
        }
    };
    /** Detaches the backdrop (if any) associated with the overlay. */
    /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    OverlayRef.prototype.detachBackdrop = /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var backdropToDetach = this._backdropElement;
        if (!backdropToDetach) {
            return;
        }
        /** @type {?} */
        var timeoutId;
        /** @type {?} */
        var finishDetach = function () {
            // It may not be attached to anything in certain cases (e.g. unit tests).
            if (backdropToDetach && backdropToDetach.parentNode) {
                backdropToDetach.parentNode.removeChild(backdropToDetach);
            }
            // It is possible that a new portal has been attached to this overlay since we started
            // removing the backdrop. If that is the case, only clear the backdrop reference if it
            // is still the same instance that we started to remove.
            if (_this._backdropElement == backdropToDetach) {
                _this._backdropElement = null;
            }
            if (_this._config.backdropClass) {
                _this._toggleClasses(/** @type {?} */ ((backdropToDetach)), _this._config.backdropClass, false);
            }
            clearTimeout(timeoutId);
        };
        backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');
        this._ngZone.runOutsideAngular(function () {
            /** @type {?} */ ((backdropToDetach)).addEventListener('transitionend', finishDetach);
        });
        // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
        // In this case we make it unclickable and we try to remove it after a delay.
        backdropToDetach.style.pointerEvents = 'none';
        // Run this outside the Angular zone because there's nothing that Angular cares about.
        // If it were to run inside the Angular zone, every test that used Overlay would have to be
        // either async or fakeAsync.
        timeoutId = this._ngZone.runOutsideAngular(function () { return setTimeout(finishDetach, 500); });
    };
    /**
     * Toggles a single CSS class or an array of classes on an element.
     * @param {?} element
     * @param {?} cssClasses
     * @param {?} isAdd
     * @return {?}
     */
    OverlayRef.prototype._toggleClasses = /**
     * Toggles a single CSS class or an array of classes on an element.
     * @param {?} element
     * @param {?} cssClasses
     * @param {?} isAdd
     * @return {?}
     */
    function (element, cssClasses, isAdd) {
        /** @type {?} */
        var classList = element.classList;
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(cssClasses).forEach(function (cssClass) {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            isAdd ? classList.add(cssClass) : classList.remove(cssClass);
        });
    };
    /**
     * Detaches the overlay content next time the zone stabilizes.
     * @return {?}
     */
    OverlayRef.prototype._detachContentWhenStable = /**
     * Detaches the overlay content next time the zone stabilizes.
     * @return {?}
     */
    function () {
        var _this = this;
        // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
        // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
        // be patched to run inside the zone, which will throw us into an infinite loop.
        this._ngZone.runOutsideAngular(function () {
            /** @type {?} */
            var subscription = _this._ngZone.onStable
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(_this._attachments, _this._detachments)))
                .subscribe(function () {
                // Needs a couple of checks for the pane and host, because
                // they may have been removed by the time the zone stabilizes.
                if (!_this._pane || !_this._host || _this._pane.children.length === 0) {
                    if (_this._pane && _this._config.panelClass) {
                        _this._toggleClasses(_this._pane, _this._config.panelClass, false);
                    }
                    if (_this._host && _this._host.parentElement) {
                        _this._previousHostParent = _this._host.parentElement;
                        _this._previousHostParent.removeChild(_this._host);
                    }
                    subscription.unsubscribe();
                }
            });
        });
    };
    return OverlayRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Class to be added to the overlay bounding box.
  @type {?} */
var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
var  /**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
FlexibleConnectedPositionStrategy = /** @class */ (function () {
    function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        var _this = this;
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        /**
         * Last size used for the bounding box. Used to avoid resizing the overlay after open.
         */
        this._lastBoundingBoxSize = { width: 0, height: 0 };
        /**
         * Whether the overlay was pushed in a previous positioning.
         */
        this._isPushed = false;
        /**
         * Whether the overlay can be pushed on-screen on the initial open.
         */
        this._canPush = true;
        /**
         * Whether the overlay can grow via flexible width/height after the initial open.
         */
        this._growAfterOpen = false;
        /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         */
        this._hasFlexibleDimensions = true;
        /**
         * Whether the overlay position is locked.
         */
        this._positionLocked = false;
        /**
         * Amount of space that must be maintained between the overlay and the edge of the viewport.
         */
        this._viewportMargin = 0;
        /**
         * The Scrollable containers used to check scrollable view properties on position change.
         */
        this.scrollables = [];
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = [];
        /**
         * Subject that emits whenever the position changes.
         */
        this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Subscription to viewport size changes.
         */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Default offset for the overlay along the x axis.
         */
        this._offsetX = 0;
        /**
         * Default offset for the overlay along the y axis.
         */
        this._offsetY = 0;
        /**
         * Amount of subscribers to the `positionChanges` stream.
         */
        this._positionChangeSubscriptions = 0;
        /**
         * Keeps track of the CSS classes that the position strategy has applied on the overlay panel.
         */
        this._appliedPanelClasses = [];
        /**
         * Observable sequence of position changes.
         */
        this.positionChanges = rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (observer) {
            /** @type {?} */
            var subscription = _this._positionChanges.subscribe(observer);
            _this._positionChangeSubscriptions++;
            return function () {
                subscription.unsubscribe();
                _this._positionChangeSubscriptions--;
            };
        });
        this.setOrigin(connectedTo);
    }
    Object.defineProperty(FlexibleConnectedPositionStrategy.prototype, "positions", {
        /** Ordered list of preferred positions, from most to least desirable. */
        get: /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */
        function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /** Attaches this position strategy to an overlay. */
    /**
     * Attaches this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.attach = /**
     * Attaches this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var _this = this;
        if (this._overlayRef && overlayRef !== this._overlayRef) {
            throw Error('This position strategy is already attached to an overlay');
        }
        this._validatePositions();
        overlayRef.hostElement.classList.add(boundingBoxClass);
        this._overlayRef = overlayRef;
        this._boundingBox = overlayRef.hostElement;
        this._pane = overlayRef.overlayElement;
        this._isDisposed = false;
        this._isInitialRender = true;
        this._lastPosition = null;
        this._resizeSubscription.unsubscribe();
        this._resizeSubscription = this._viewportRuler.change().subscribe(function () {
            // When the window is resized, we want to trigger the next reposition as if it
            // was an initial render, in order for the strategy to pick a new optimal position,
            // otherwise position locking will cause it to stay at the old one.
            _this._isInitialRender = true;
            _this.apply();
        });
    };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * @docs-private
     */
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * \@docs-private
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.apply = /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * \@docs-private
     * @return {?}
     */
    function () {
        // We shouldn't do anything if the strategy was disposed or we're on the server.
        // @breaking-change 8.0.0 Remove `_platform` null check once it's guaranteed to be defined.
        if (this._isDisposed || (this._platform && !this._platform.isBrowser)) {
            return;
        }
        // If the position has been applied already (e.g. when the overlay was opened) and the
        // consumer opted into locking in the position, re-use the old position, in order to
        // prevent the overlay from jumping around.
        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
        }
        this._clearPanelClasses();
        this._resetOverlayElementStyles();
        this._resetBoundingBoxStyles();
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        // We use the viewport rect to determine whether a position would go off-screen.
        this._viewportRect = this._getNarrowedViewportRect();
        this._originRect = this._origin.getBoundingClientRect();
        this._overlayRect = this._pane.getBoundingClientRect();
        /** @type {?} */
        var originRect = this._originRect;
        /** @type {?} */
        var overlayRect = this._overlayRect;
        /** @type {?} */
        var viewportRect = this._viewportRect;
        /** @type {?} */
        var flexibleFits = [];
        /** @type {?} */
        var fallback;
        // Go through each of the preferred positions looking for a good fit.
        // If a good fit is found, it will be applied immediately.
        for (var _i = 0, _a = this._preferredPositions; _i < _a.length; _i++) {
            var pos = _a[_i];
            /** @type {?} */
            var originPoint = this._getOriginPoint(originRect, pos);
            /** @type {?} */
            var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
            /** @type {?} */
            var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
            // If the overlay, without any further work, fits into the viewport, use this position.
            if (overlayFit.isCompletelyWithinViewport) {
                this._isPushed = false;
                this._applyPosition(pos, originPoint);
                return;
            }
            // If the overlay has flexible dimensions, we can use this position
            // so long as there's enough space for the minimum dimensions.
            if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                // Save positions where the overlay will fit with flexible dimensions. We will use these
                // if none of the positions fit *without* flexible dimensions.
                flexibleFits.push({
                    position: pos,
                    origin: originPoint,
                    overlayRect: overlayRect,
                    boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                });
                continue;
            }
            // If the current preferred position does not fit on the screen, remember the position
            // if it has more visible area on-screen than we've seen and move onto the next preferred
            // position.
            if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                fallback = { overlayFit: overlayFit, overlayPoint: overlayPoint, originPoint: originPoint, position: pos, overlayRect: overlayRect };
            }
        }
        // If there are any positions where the overlay would fit with flexible dimensions, choose the
        // one that has the greatest area available modified by the position's weight
        if (flexibleFits.length) {
            /** @type {?} */
            var bestFit = null;
            /** @type {?} */
            var bestScore = -1;
            for (var _b = 0, flexibleFits_1 = flexibleFits; _b < flexibleFits_1.length; _b++) {
                var fit = flexibleFits_1[_b];
                /** @type {?} */
                var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
                if (score > bestScore) {
                    bestScore = score;
                    bestFit = fit;
                }
            }
            this._isPushed = false;
            this._applyPosition(/** @type {?} */ ((bestFit)).position, /** @type {?} */ ((bestFit)).origin);
            return;
        }
        // When none of the preferred positions fit within the viewport, take the position
        // that went off-screen the least and attempt to push it on-screen.
        if (this._canPush) {
            // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
            this._isPushed = true;
            this._applyPosition(/** @type {?} */ ((fallback)).position, /** @type {?} */ ((fallback)).originPoint);
            return;
        }
        // All options for getting the overlay within the viewport have been exhausted, so go with the
        // position that went off-screen the least.
        this._applyPosition(/** @type {?} */ ((fallback)).position, /** @type {?} */ ((fallback)).originPoint);
    };
    /**
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.detach = /**
     * @return {?}
     */
    function () {
        this._clearPanelClasses();
        this._lastPosition = null;
        this._previousPushAmount = null;
        this._resizeSubscription.unsubscribe();
    };
    /** Cleanup after the element gets destroyed. */
    /**
     * Cleanup after the element gets destroyed.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.dispose = /**
     * Cleanup after the element gets destroyed.
     * @return {?}
     */
    function () {
        if (this._isDisposed) {
            return;
        }
        // We can't use `_resetBoundingBoxStyles` here, because it resets
        // some properties to zero, rather than removing them.
        if (this._boundingBox) {
            extendStyles(this._boundingBox.style, /** @type {?} */ ({
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: '',
            }));
        }
        if (this._pane) {
            this._resetOverlayElementStyles();
        }
        if (this._overlayRef) {
            this._overlayRef.hostElement.classList.remove(boundingBoxClass);
        }
        this.detach();
        this._positionChanges.complete();
        this._overlayRef = this._boundingBox = /** @type {?} */ ((null));
        this._isDisposed = true;
    };
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.reapplyLastPosition = /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    function () {
        if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
            this._originRect = this._origin.getBoundingClientRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            /** @type {?} */
            var lastPosition = this._lastPosition || this._preferredPositions[0];
            /** @type {?} */
            var originPoint = this._getOriginPoint(this._originRect, lastPosition);
            this._applyPosition(lastPosition, originPoint);
        }
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withScrollableContainers = /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    function (scrollables) {
        this.scrollables = scrollables;
    };
    /**
     * Adds new preferred positions.
     * @param positions List of positions options for this overlay.
     */
    /**
     * Adds new preferred positions.
     * @param {?} positions List of positions options for this overlay.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withPositions = /**
     * Adds new preferred positions.
     * @param {?} positions List of positions options for this overlay.
     * @return {?}
     */
    function (positions) {
        this._preferredPositions = positions;
        // If the last calculated position object isn't part of the positions anymore, clear
        // it in order to avoid it being picked up if the consumer tries to re-apply.
        if (positions.indexOf(/** @type {?} */ ((this._lastPosition))) === -1) {
            this._lastPosition = null;
        }
        this._validatePositions();
        return this;
    };
    /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param margin Required margin between the overlay and the viewport edge in pixels.
     */
    /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withViewportMargin = /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
     * @return {?}
     */
    function (margin) {
        this._viewportMargin = margin;
        return this;
    };
    /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
    /**
     * Sets whether the overlay's width and height can be constrained to fit within the viewport.
     * @param {?=} flexibleDimensions
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withFlexibleDimensions = /**
     * Sets whether the overlay's width and height can be constrained to fit within the viewport.
     * @param {?=} flexibleDimensions
     * @return {?}
     */
    function (flexibleDimensions) {
        if (flexibleDimensions === void 0) { flexibleDimensions = true; }
        this._hasFlexibleDimensions = flexibleDimensions;
        return this;
    };
    /** Sets whether the overlay can grow after the initial open via flexible width/height. */
    /**
     * Sets whether the overlay can grow after the initial open via flexible width/height.
     * @param {?=} growAfterOpen
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withGrowAfterOpen = /**
     * Sets whether the overlay can grow after the initial open via flexible width/height.
     * @param {?=} growAfterOpen
     * @return {?}
     */
    function (growAfterOpen) {
        if (growAfterOpen === void 0) { growAfterOpen = true; }
        this._growAfterOpen = growAfterOpen;
        return this;
    };
    /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
    /**
     * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
     * @param {?=} canPush
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withPush = /**
     * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
     * @param {?=} canPush
     * @return {?}
     */
    function (canPush) {
        if (canPush === void 0) { canPush = true; }
        this._canPush = canPush;
        return this;
    };
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?=} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withLockedPosition = /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?=} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    function (isLocked) {
        if (isLocked === void 0) { isLocked = true; }
        this._positionLocked = isLocked;
        return this;
    };
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param origin Reference to the new origin element.
     */
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.setOrigin = /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    function (origin) {
        this._origin = origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] ? origin.nativeElement : origin;
        return this;
    };
    /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param offset New offset in the X axis.
     */
    /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withDefaultOffsetX = /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    function (offset) {
        this._offsetX = offset;
        return this;
    };
    /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param offset New offset in the Y axis.
     */
    /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withDefaultOffsetY = /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    function (offset) {
        this._offsetY = offset;
        return this;
    };
    /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     */
    /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param {?} selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withTransformOriginOn = /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param {?} selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     * @return {?}
     */
    function (selector) {
        this._transformOriginSelector = selector;
        return this;
    };
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOriginPoint = /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    function (originRect, pos) {
        /** @type {?} */
        var x;
        if (pos.originX == 'center') {
            // Note: when centering we should always use the `left`
            // offset, otherwise the position will be wrong in RTL.
            x = originRect.left + (originRect.width / 2);
        }
        else {
            /** @type {?} */
            var startX = this._isRtl() ? originRect.right : originRect.left;
            /** @type {?} */
            var endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == 'start' ? startX : endX;
        }
        /** @type {?} */
        var y;
        if (pos.originY == 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }
        return { x: x, y: y };
    };
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     * @param {?} originPoint
     * @param {?} overlayRect
     * @param {?} pos
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOverlayPoint = /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     * @param {?} originPoint
     * @param {?} overlayRect
     * @param {?} pos
     * @return {?}
     */
    function (originPoint, overlayRect, pos) {
        /** @type {?} */
        var overlayStartX;
        if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
        }
        /** @type {?} */
        var overlayStartY;
        if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        }
        // The (x, y) coordinates of the overlay.
        return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY,
        };
    };
    /**
     * Gets how well an overlay at the given point will fit within the viewport.
     * @param {?} point
     * @param {?} overlay
     * @param {?} viewport
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOverlayFit = /**
     * Gets how well an overlay at the given point will fit within the viewport.
     * @param {?} point
     * @param {?} overlay
     * @param {?} viewport
     * @param {?} position
     * @return {?}
     */
    function (point, overlay, viewport, position) {
        var x = point.x, y = point.y;
        /** @type {?} */
        var offsetX = this._getOffset(position, 'x');
        /** @type {?} */
        var offsetY = this._getOffset(position, 'y');
        // Account for the offsets since they could push the overlay out of the viewport.
        if (offsetX) {
            x += offsetX;
        }
        if (offsetY) {
            y += offsetY;
        }
        /** @type {?} */
        var leftOverflow = 0 - x;
        /** @type {?} */
        var rightOverflow = (x + overlay.width) - viewport.width;
        /** @type {?} */
        var topOverflow = 0 - y;
        /** @type {?} */
        var bottomOverflow = (y + overlay.height) - viewport.height;
        /** @type {?} */
        var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
        /** @type {?} */
        var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
        /** @type {?} */
        var visibleArea = visibleWidth * visibleHeight;
        return {
            visibleArea: visibleArea,
            isCompletelyWithinViewport: (overlay.width * overlay.height) === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width,
        };
    };
    /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @param {?} fit How well the overlay fits in the viewport at some position.
     * @param {?} point The (x, y) coordinates of the overlat at some position.
     * @param {?} viewport The geometry of the viewport.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._canFitWithFlexibleDimensions = /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @param {?} fit How well the overlay fits in the viewport at some position.
     * @param {?} point The (x, y) coordinates of the overlat at some position.
     * @param {?} viewport The geometry of the viewport.
     * @return {?}
     */
    function (fit, point, viewport) {
        if (this._hasFlexibleDimensions) {
            /** @type {?} */
            var availableHeight = viewport.bottom - point.y;
            /** @type {?} */
            var availableWidth = viewport.right - point.x;
            /** @type {?} */
            var minHeight = this._overlayRef.getConfig().minHeight;
            /** @type {?} */
            var minWidth = this._overlayRef.getConfig().minWidth;
            /** @type {?} */
            var verticalFit = fit.fitsInViewportVertically ||
                (minHeight != null && minHeight <= availableHeight);
            /** @type {?} */
            var horizontalFit = fit.fitsInViewportHorizontally ||
                (minWidth != null && minWidth <= availableWidth);
            return verticalFit && horizontalFit;
        }
    };
    /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
     * right and bottom).
     *
     * @param {?} start Starting point from which the overlay is pushed.
     * @param {?} overlay Dimensions of the overlay.
     * @param {?} scrollPosition Current viewport scroll position.
     * @return {?} The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    FlexibleConnectedPositionStrategy.prototype._pushOverlayOnScreen = /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
     * right and bottom).
     *
     * @param {?} start Starting point from which the overlay is pushed.
     * @param {?} overlay Dimensions of the overlay.
     * @param {?} scrollPosition Current viewport scroll position.
     * @return {?} The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    function (start, overlay, scrollPosition) {
        // If the position is locked and we've pushed the overlay already, reuse the previous push
        // amount, rather than pushing it again. If we were to continue pushing, the element would
        // remain in the viewport, which goes against the expectations when position locking is enabled.
        if (this._previousPushAmount && this._positionLocked) {
            return {
                x: start.x + this._previousPushAmount.x,
                y: start.y + this._previousPushAmount.y
            };
        }
        /** @type {?} */
        var viewport = this._viewportRect;
        /** @type {?} */
        var overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
        /** @type {?} */
        var overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
        /** @type {?} */
        var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
        /** @type {?} */
        var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
        /** @type {?} */
        var pushX = 0;
        /** @type {?} */
        var pushY = 0;
        // If the overlay fits completely within the bounds of the viewport, push it from whichever
        // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
        // viewport and allow for the trailing end of the overlay to go out of bounds.
        if (overlay.width < viewport.width) {
            pushX = overflowLeft || -overflowRight;
        }
        else {
            pushX = start.x < this._viewportMargin ? (viewport.left - scrollPosition.left) - start.x : 0;
        }
        if (overlay.height < viewport.height) {
            pushY = overflowTop || -overflowBottom;
        }
        else {
            pushY = start.y < this._viewportMargin ? (viewport.top - scrollPosition.top) - start.y : 0;
        }
        this._previousPushAmount = { x: pushX, y: pushY };
        return {
            x: start.x + pushX,
            y: start.y + pushY,
        };
    };
    /**
     * Applies a computed position to the overlay and emits a position change.
     * @param {?} position The position preference
     * @param {?} originPoint The point on the origin element where the overlay is connected.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._applyPosition = /**
     * Applies a computed position to the overlay and emits a position change.
     * @param {?} position The position preference
     * @param {?} originPoint The point on the origin element where the overlay is connected.
     * @return {?}
     */
    function (position, originPoint) {
        this._setTransformOrigin(position);
        this._setOverlayElementStyles(originPoint, position);
        this._setBoundingBoxStyles(originPoint, position);
        if (position.panelClass) {
            this._addPanelClasses(position.panelClass);
        }
        // Save the last connected position in case the position needs to be re-calculated.
        this._lastPosition = position;
        // Notify that the position has been changed along with its change properties.
        // We only emit if we've got any subscriptions, because the scroll visibility
        // calculcations can be somewhat expensive.
        if (this._positionChangeSubscriptions > 0) {
            /** @type {?} */
            var scrollableViewProperties = this._getScrollVisibility();
            /** @type {?} */
            var changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);
            this._positionChanges.next(changeEvent);
        }
        this._isInitialRender = false;
    };
    /**
     * Sets the transform origin based on the configured selector and the passed-in position.
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._setTransformOrigin = /**
     * Sets the transform origin based on the configured selector and the passed-in position.
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (!this._transformOriginSelector) {
            return;
        }
        /** @type {?} */
        var elements = /** @type {?} */ ((this._boundingBox)).querySelectorAll(this._transformOriginSelector);
        /** @type {?} */
        var xOrigin;
        /** @type {?} */
        var yOrigin = position.overlayY;
        if (position.overlayX === 'center') {
            xOrigin = 'center';
        }
        else if (this._isRtl()) {
            xOrigin = position.overlayX === 'start' ? 'right' : 'left';
        }
        else {
            xOrigin = position.overlayX === 'start' ? 'left' : 'right';
        }
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = xOrigin + " " + yOrigin;
        }
    };
    /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     * @param {?} origin
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._calculateBoundingBoxRect = /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     * @param {?} origin
     * @param {?} position
     * @return {?}
     */
    function (origin, position) {
        /** @type {?} */
        var viewport = this._viewportRect;
        /** @type {?} */
        var isRtl = this._isRtl();
        /** @type {?} */
        var height;
        /** @type {?} */
        var top;
        /** @type {?} */
        var bottom;
        if (position.overlayY === 'top') {
            // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
            top = origin.y;
            height = viewport.bottom - origin.y;
        }
        else if (position.overlayY === 'bottom') {
            // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
            // the viewport margin back in, because the viewport rect is narrowed down to remove the
            // margin, whereas the `origin` position is calculated based on its `ClientRect`.
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
        }
        else {
            /** @type {?} */
            var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
            /** @type {?} */
            var previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;
            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                top = origin.y - (previousHeight / 2);
            }
        }
        /** @type {?} */
        var isBoundedByRightViewportEdge = (position.overlayX === 'start' && !isRtl) ||
            (position.overlayX === 'end' && isRtl);
        /** @type {?} */
        var isBoundedByLeftViewportEdge = (position.overlayX === 'end' && !isRtl) ||
            (position.overlayX === 'start' && isRtl);
        /** @type {?} */
        var width;
        /** @type {?} */
        var left;
        /** @type {?} */
        var right;
        if (isBoundedByLeftViewportEdge) {
            right = viewport.right - origin.x + this._viewportMargin;
            width = origin.x - viewport.left;
        }
        else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
        }
        else {
            /** @type {?} */
            var smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
            /** @type {?} */
            var previousWidth = this._lastBoundingBoxSize.width;
            width = smallestDistanceToViewportEdge * 2;
            left = origin.x - smallestDistanceToViewportEdge;
            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                left = origin.x - (previousWidth / 2);
            }
        }
        return { top: /** @type {?} */ ((top)), left: /** @type {?} */ ((left)), bottom: /** @type {?} */ ((bottom)), right: /** @type {?} */ ((right)), width: width, height: height };
    };
    /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stetches to the bounds of the viewport.
     *
     * @param {?} origin The point on the origin element where the overlay is connected.
     * @param {?} position The position preference
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._setBoundingBoxStyles = /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stetches to the bounds of the viewport.
     *
     * @param {?} origin The point on the origin element where the overlay is connected.
     * @param {?} position The position preference
     * @return {?}
     */
    function (origin, position) {
        /** @type {?} */
        var boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
        // It's weird if the overlay *grows* while scrolling, so we take the last size into account
        // when applying a new size.
        if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
        }
        /** @type {?} */
        var styles = /** @type {?} */ ({});
        if (this._hasExactPosition()) {
            styles.top = styles.left = '0';
            styles.bottom = styles.right = '';
            styles.width = styles.height = '100%';
        }
        else {
            /** @type {?} */
            var maxHeight = this._overlayRef.getConfig().maxHeight;
            /** @type {?} */
            var maxWidth = this._overlayRef.getConfig().maxWidth;
            styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.height);
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.top);
            styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.bottom);
            styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.width);
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.left);
            styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.right);
            // Push the pane content towards the proper direction.
            if (position.overlayX === 'center') {
                styles.alignItems = 'center';
            }
            else {
                styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
            }
            if (position.overlayY === 'center') {
                styles.justifyContent = 'center';
            }
            else {
                styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
            }
            if (maxHeight) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(maxHeight);
            }
            if (maxWidth) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(maxWidth);
            }
        }
        this._lastBoundingBoxSize = boundingBoxRect;
        extendStyles(/** @type {?} */ ((this._boundingBox)).style, styles);
    };
    /**
     * Resets the styles for the bounding box so that a new positioning can be computed.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._resetBoundingBoxStyles = /**
     * Resets the styles for the bounding box so that a new positioning can be computed.
     * @return {?}
     */
    function () {
        extendStyles(/** @type {?} */ ((this._boundingBox)).style, /** @type {?} */ ({
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: '',
        }));
    };
    /**
     * Resets the styles for the overlay pane so that a new positioning can be computed.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._resetOverlayElementStyles = /**
     * Resets the styles for the overlay pane so that a new positioning can be computed.
     * @return {?}
     */
    function () {
        extendStyles(this._pane.style, /** @type {?} */ ({
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
        }));
    };
    /**
     * Sets positioning styles to the overlay element.
     * @param {?} originPoint
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._setOverlayElementStyles = /**
     * Sets positioning styles to the overlay element.
     * @param {?} originPoint
     * @param {?} position
     * @return {?}
     */
    function (originPoint, position) {
        /** @type {?} */
        var styles = /** @type {?} */ ({});
        if (this._hasExactPosition()) {
            /** @type {?} */
            var scrollPosition = this._viewportRuler.getViewportScrollPosition();
            extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
            extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
        }
        else {
            styles.position = 'static';
        }
        /** @type {?} */
        var transformString = '';
        /** @type {?} */
        var offsetX = this._getOffset(position, 'x');
        /** @type {?} */
        var offsetY = this._getOffset(position, 'y');
        if (offsetX) {
            transformString += "translateX(" + offsetX + "px) ";
        }
        if (offsetY) {
            transformString += "translateY(" + offsetY + "px)";
        }
        styles.transform = transformString.trim();
        // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
        // we need these values to both be set to "100%" for the automatic flexible sizing to work.
        // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
        if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxHeight) {
            styles.maxHeight = '';
        }
        if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxWidth) {
            styles.maxWidth = '';
        }
        extendStyles(this._pane.style, styles);
    };
    /**
     * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
     * @param {?} position
     * @param {?} originPoint
     * @param {?} scrollPosition
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getExactOverlayY = /**
     * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
     * @param {?} position
     * @param {?} originPoint
     * @param {?} scrollPosition
     * @return {?}
     */
    function (position, originPoint, scrollPosition) {
        /** @type {?} */
        var styles = /** @type {?} */ ({ top: null, bottom: null });
        /** @type {?} */
        var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        /** @type {?} */
        var virtualKeyboardOffset = this._overlayContainer ?
            this._overlayContainer.getContainerElement().getBoundingClientRect().top : 0;
        // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
        // autocomplete), mobile browsers will shift everything in order to put the input in the middle
        // of the screen and to make space for the virtual keyboard. We need to account for this offset,
        // otherwise our positioning will be thrown off.
        overlayPoint.y -= virtualKeyboardOffset;
        // We want to set either `top` or `bottom` based on whether the overlay wants to appear
        // above or below the origin and the direction in which the element will expand.
        if (position.overlayY === 'bottom') {
            /** @type {?} */
            var documentHeight = /** @type {?} */ ((this._document.documentElement)).clientHeight;
            styles.bottom = documentHeight - (overlayPoint.y + this._overlayRect.height) + "px";
        }
        else {
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(overlayPoint.y);
        }
        return styles;
    };
    /**
     * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
     * @param {?} position
     * @param {?} originPoint
     * @param {?} scrollPosition
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getExactOverlayX = /**
     * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
     * @param {?} position
     * @param {?} originPoint
     * @param {?} scrollPosition
     * @return {?}
     */
    function (position, originPoint, scrollPosition) {
        /** @type {?} */
        var styles = /** @type {?} */ ({ left: null, right: null });
        /** @type {?} */
        var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        /** @type {?} */
        var horizontalStyleProperty;
        if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
        }
        else {
            horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
        }
        // When we're setting `right`, we adjust the x position such that it is the distance
        // from the right edge of the viewport rather than the left edge.
        if (horizontalStyleProperty === 'right') {
            /** @type {?} */
            var documentWidth = /** @type {?} */ ((this._document.documentElement)).clientWidth;
            styles.right = documentWidth - (overlayPoint.x + this._overlayRect.width) + "px";
        }
        else {
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(overlayPoint.x);
        }
        return styles;
    };
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getScrollVisibility = /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var originBounds = this._origin.getBoundingClientRect();
        /** @type {?} */
        var overlayBounds = this._pane.getBoundingClientRect();
        /** @type {?} */
        var scrollContainerBounds = this.scrollables.map(function (scrollable) {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
        });
        return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds),
        };
    };
    /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._subtractOverflows = /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    function (length) {
        var overflows = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            overflows[_i - 1] = arguments[_i];
        }
        return overflows.reduce(function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
        }, length);
    };
    /**
     * Narrows the given viewport rect by the current _viewportMargin.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getNarrowedViewportRect = /**
     * Narrows the given viewport rect by the current _viewportMargin.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = /** @type {?} */ ((this._document.documentElement)).clientWidth;
        /** @type {?} */
        var height = /** @type {?} */ ((this._document.documentElement)).clientHeight;
        /** @type {?} */
        var scrollPosition = this._viewportRuler.getViewportScrollPosition();
        return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - (2 * this._viewportMargin),
            height: height - (2 * this._viewportMargin),
        };
    };
    /**
     * Whether the we're dealing with an RTL context
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._isRtl = /**
     * Whether the we're dealing with an RTL context
     * @return {?}
     */
    function () {
        return this._overlayRef.getDirection() === 'rtl';
    };
    /**
     * Determines whether the overlay uses exact or flexible positioning.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._hasExactPosition = /**
     * Determines whether the overlay uses exact or flexible positioning.
     * @return {?}
     */
    function () {
        return !this._hasFlexibleDimensions || this._isPushed;
    };
    /**
     * Retrieves the offset of a position along the x or y axis.
     * @param {?} position
     * @param {?} axis
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOffset = /**
     * Retrieves the offset of a position along the x or y axis.
     * @param {?} position
     * @param {?} axis
     * @return {?}
     */
    function (position, axis) {
        if (axis === 'x') {
            // We don't do something like `position['offset' + axis]` in
            // order to avoid breking minifiers that rename properties.
            return position.offsetX == null ? this._offsetX : position.offsetX;
        }
        return position.offsetY == null ? this._offsetY : position.offsetY;
    };
    /**
     * Validates that the current position match the expected values.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._validatePositions = /**
     * Validates that the current position match the expected values.
     * @return {?}
     */
    function () {
        if (!this._preferredPositions.length) {
            throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
        }
        // TODO(crisbeto): remove these once Angular's template type
        // checking is advanced enough to catch these cases.
        this._preferredPositions.forEach(function (pair) {
            validateHorizontalPosition('originX', pair.originX);
            validateVerticalPosition('originY', pair.originY);
            validateHorizontalPosition('overlayX', pair.overlayX);
            validateVerticalPosition('overlayY', pair.overlayY);
        });
    };
    /**
     * Adds a single CSS class or an array of classes on the overlay panel.
     * @param {?} cssClasses
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._addPanelClasses = /**
     * Adds a single CSS class or an array of classes on the overlay panel.
     * @param {?} cssClasses
     * @return {?}
     */
    function (cssClasses) {
        var _this = this;
        if (this._pane) {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(cssClasses).forEach(function (cssClass) {
                if (_this._appliedPanelClasses.indexOf(cssClass) === -1) {
                    _this._appliedPanelClasses.push(cssClass);
                    _this._pane.classList.add(cssClass);
                }
            });
        }
    };
    /**
     * Clears the classes that the position strategy has applied from the overlay panel.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._clearPanelClasses = /**
     * Clears the classes that the position strategy has applied from the overlay panel.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._pane) {
            this._appliedPanelClasses.forEach(function (cssClass) { return _this._pane.classList.remove(cssClass); });
            this._appliedPanelClasses = [];
        }
    };
    return FlexibleConnectedPositionStrategy;
}());
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative to some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
 * \@breaking-change 8.0.0
 */
var  /**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative to some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
 * \@breaking-change 8.0.0
 */
ConnectedPositionStrategy = /** @class */ (function () {
    function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, 
    // @breaking-change 8.0.0 `platform` parameter to be made required.
    platform) {
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = [];
        // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.
        this._positionStrategy =
            new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform)
                .withFlexibleDimensions(false)
                .withPush(false)
                .withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
    }
    Object.defineProperty(ConnectedPositionStrategy.prototype, "_isRtl", {
        /** Whether the we're dealing with an RTL context */
        get: /**
         * Whether the we're dealing with an RTL context
         * @return {?}
         */
        function () {
            return this._overlayRef.getDirection() === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "onPositionChange", {
        /** Emits an event when the connection point changes. */
        get: /**
         * Emits an event when the connection point changes.
         * @return {?}
         */
        function () {
            return this._positionStrategy.positionChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "positions", {
        /** Ordered list of preferred positions, from most to least desirable. */
        get: /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */
        function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /** Attach this position strategy to an overlay. */
    /**
     * Attach this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.attach = /**
     * Attach this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        this._overlayRef = overlayRef;
        this._positionStrategy.attach(overlayRef);
        if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
        }
    };
    /** Disposes all resources used by the position strategy. */
    /**
     * Disposes all resources used by the position strategy.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.dispose = /**
     * Disposes all resources used by the position strategy.
     * @return {?}
     */
    function () {
        this._positionStrategy.dispose();
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.detach = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this._positionStrategy.detach();
    };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * @docs-private
     */
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.apply = /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     * @return {?}
     */
    function () {
        this._positionStrategy.apply();
    };
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.recalculateLastPosition = /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    function () {
        this._positionStrategy.reapplyLastPosition();
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withScrollableContainers = /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    function (scrollables) {
        this._positionStrategy.withScrollableContainers(scrollables);
    };
    /**
     * Adds a new preferred fallback position.
     * @param originPos
     * @param overlayPos
     */
    /**
     * Adds a new preferred fallback position.
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withFallbackPosition = /**
     * Adds a new preferred fallback position.
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @return {?}
     */
    function (originPos, overlayPos, offsetX, offsetY) {
        /** @type {?} */
        var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);
        this._preferredPositions.push(position);
        this._positionStrategy.withPositions(this._preferredPositions);
        return this;
    };
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param dir New layout direction.
     */
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param {?} dir New layout direction.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withDirection = /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param {?} dir New layout direction.
     * @return {?}
     */
    function (dir) {
        // Since the direction might be declared before the strategy is attached,
        // we save the value in a temporary property and we'll transfer it to the
        // overlay ref on attachment.
        if (this._overlayRef) {
            this._overlayRef.setDirection(dir);
        }
        else {
            this._direction = dir;
        }
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param offset New offset in the X axis.
     */
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withOffsetX = /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    function (offset) {
        this._positionStrategy.withDefaultOffsetX(offset);
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param  offset New offset in the Y axis.
     */
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withOffsetY = /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    function (offset) {
        this._positionStrategy.withDefaultOffsetY(offset);
        return this;
    };
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withLockedPosition = /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    function (isLocked) {
        this._positionStrategy.withLockedPosition(isLocked);
        return this;
    };
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param positions Position pairs to be set on the strategy.
     */
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param {?} positions Position pairs to be set on the strategy.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withPositions = /**
     * Overwrites the current set of positions with an array of new ones.
     * @param {?} positions Position pairs to be set on the strategy.
     * @return {?}
     */
    function (positions) {
        this._preferredPositions = positions.slice();
        this._positionStrategy.withPositions(this._preferredPositions);
        return this;
    };
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param origin Reference to the new origin element.
     */
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.setOrigin = /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    function (origin) {
        this._positionStrategy.setOrigin(origin);
        return this;
    };
    return ConnectedPositionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** *
 * Class to be added to the overlay pane wrapper.
  @type {?} */
var wrapperClass = 'cdk-global-overlay-wrapper';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
var  /**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
GlobalPositionStrategy = /** @class */ (function () {
    function GlobalPositionStrategy() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    GlobalPositionStrategy.prototype.attach = /**
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        /** @type {?} */
        var config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
            overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
            overlayRef.updateSize({ height: this._height });
        }
        overlayRef.hostElement.classList.add(wrapperClass);
        this._isDisposed = false;
    };
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param value New top offset.
     */
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New top offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.top = /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New top offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._bottomOffset = '';
        this._topOffset = value;
        this._alignItems = 'flex-start';
        return this;
    };
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param value New left offset.
     */
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New left offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.left = /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New left offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._rightOffset = '';
        this._leftOffset = value;
        this._justifyContent = 'flex-start';
        return this;
    };
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param value New bottom offset.
     */
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New bottom offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.bottom = /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New bottom offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._topOffset = '';
        this._bottomOffset = value;
        this._alignItems = 'flex-end';
        return this;
    };
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param value New right offset.
     */
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New right offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.right = /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New right offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._leftOffset = '';
        this._rightOffset = value;
        this._justifyContent = 'flex-end';
        return this;
    };
    /**
     * Sets the overlay width and clears any previously set width.
     * @param value New width for the overlay
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    /**
     * Sets the overlay width and clears any previously set width.
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * \@breaking-change 8.0.0
     * @param {?=} value New width for the overlay
     * @return {?}
     */
    GlobalPositionStrategy.prototype.width = /**
     * Sets the overlay width and clears any previously set width.
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * \@breaking-change 8.0.0
     * @param {?=} value New width for the overlay
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        if (this._overlayRef) {
            this._overlayRef.updateSize({ width: value });
        }
        else {
            this._width = value;
        }
        return this;
    };
    /**
     * Sets the overlay height and clears any previously set height.
     * @param value New height for the overlay
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    /**
     * Sets the overlay height and clears any previously set height.
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * \@breaking-change 8.0.0
     * @param {?=} value New height for the overlay
     * @return {?}
     */
    GlobalPositionStrategy.prototype.height = /**
     * Sets the overlay height and clears any previously set height.
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * \@breaking-change 8.0.0
     * @param {?=} value New height for the overlay
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        if (this._overlayRef) {
            this._overlayRef.updateSize({ height: value });
        }
        else {
            this._height = value;
        }
        return this;
    };
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param offset Overlay offset from the horizontal center.
     */
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.centerHorizontally = /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {?}
     */
    function (offset) {
        if (offset === void 0) { offset = ''; }
        this.left(offset);
        this._justifyContent = 'center';
        return this;
    };
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param offset Overlay offset from the vertical center.
     */
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.centerVertically = /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {?}
     */
    function (offset) {
        if (offset === void 0) { offset = ''; }
        this.top(offset);
        this._alignItems = 'center';
        return this;
    };
    /**
     * Apply the position to the element.
     * @docs-private
     */
    /**
     * Apply the position to the element.
     * \@docs-private
     * @return {?}
     */
    GlobalPositionStrategy.prototype.apply = /**
     * Apply the position to the element.
     * \@docs-private
     * @return {?}
     */
    function () {
        // Since the overlay ref applies the strategy asynchronously, it could
        // have been disposed before it ends up being applied. If that is the
        // case, we shouldn't do anything.
        if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
        }
        /** @type {?} */
        var styles = this._overlayRef.overlayElement.style;
        /** @type {?} */
        var parentStyles = this._overlayRef.hostElement.style;
        /** @type {?} */
        var config = this._overlayRef.getConfig();
        styles.position = this._cssPosition;
        styles.marginLeft = config.width === '100%' ? '0' : this._leftOffset;
        styles.marginTop = config.height === '100%' ? '0' : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        if (config.width === '100%') {
            parentStyles.justifyContent = 'flex-start';
        }
        else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
        }
        else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
                parentStyles.justifyContent = 'flex-end';
            }
            else if (this._justifyContent === 'flex-end') {
                parentStyles.justifyContent = 'flex-start';
            }
        }
        else {
            parentStyles.justifyContent = this._justifyContent;
        }
        parentStyles.alignItems = config.height === '100%' ? 'flex-start' : this._alignItems;
    };
    /**
     * Cleans up the DOM changes from the position strategy.
     * @docs-private
     */
    /**
     * Cleans up the DOM changes from the position strategy.
     * \@docs-private
     * @return {?}
     */
    GlobalPositionStrategy.prototype.dispose = /**
     * Cleans up the DOM changes from the position strategy.
     * \@docs-private
     * @return {?}
     */
    function () {
        if (this._isDisposed || !this._overlayRef) {
            return;
        }
        /** @type {?} */
        var styles = this._overlayRef.overlayElement.style;
        /** @type {?} */
        var parent = this._overlayRef.hostElement;
        /** @type {?} */
        var parentStyles = parent.style;
        parent.classList.remove(wrapperClass);
        parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop =
            styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
        this._overlayRef = /** @type {?} */ ((null));
        this._isDisposed = true;
    };
    return GlobalPositionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Builder for overlay position strategy.
 */
var OverlayPositionBuilder = /** @class */ (function () {
    function OverlayPositionBuilder(_viewportRuler, _document, 
    // @breaking-change 8.0.0 `_platform` and `_overlayContainer` parameters to be made required.
    _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
    }
    /**
     * Creates a global position strategy.
     */
    /**
     * Creates a global position strategy.
     * @return {?}
     */
    OverlayPositionBuilder.prototype.global = /**
     * Creates a global position strategy.
     * @return {?}
     */
    function () {
        return new GlobalPositionStrategy();
    };
    /**
     * Creates a relative position strategy.
     * @param elementRef
     * @param originPos
     * @param overlayPos
     * @deprecated Use `flexibleConnectedTo` instead.
     * @breaking-change 8.0.0
     */
    /**
     * Creates a relative position strategy.
     * @deprecated Use `flexibleConnectedTo` instead.
     * \@breaking-change 8.0.0
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    OverlayPositionBuilder.prototype.connectedTo = /**
     * Creates a relative position strategy.
     * @deprecated Use `flexibleConnectedTo` instead.
     * \@breaking-change 8.0.0
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    function (elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document);
    };
    /**
     * Creates a flexible position strategy.
     * @param elementRef
     */
    /**
     * Creates a flexible position strategy.
     * @param {?} elementRef
     * @return {?}
     */
    OverlayPositionBuilder.prototype.flexibleConnectedTo = /**
     * Creates a flexible position strategy.
     * @param {?} elementRef
     * @return {?}
     */
    function (elementRef) {
        return new FlexibleConnectedPositionStrategy(elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
    };
    OverlayPositionBuilder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    OverlayPositionBuilder.ctorParameters = function () { return [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
        { type: OverlayContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
    ]; };
    /** @nocollapse */ OverlayPositionBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function OverlayPositionBuilder_Factory() { return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(OverlayContainer, 8)); }, token: OverlayPositionBuilder, providedIn: "root" });
    return OverlayPositionBuilder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Next overlay unique ID.
  @type {?} */
var nextUniqueId = 0;
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
 */
var Overlay = /** @class */ (function () {
    function Overlay(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, 
    // @breaking-change 8.0.0 `_location` parameter to be made required.
    _location) {
        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
        this._directionality = _directionality;
        this._location = _location;
    }
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    /**
     * Creates an overlay.
     * @param {?=} config Configuration applied to the overlay.
     * @return {?} Reference to the created overlay.
     */
    Overlay.prototype.create = /**
     * Creates an overlay.
     * @param {?=} config Configuration applied to the overlay.
     * @return {?} Reference to the created overlay.
     */
    function (config) {
        /** @type {?} */
        var host = this._createHostElement();
        /** @type {?} */
        var pane = this._createPaneElement(host);
        /** @type {?} */
        var portalOutlet = this._createPortalOutlet(pane);
        /** @type {?} */
        var overlayConfig = new OverlayConfig(config);
        overlayConfig.direction = overlayConfig.direction || this._directionality.value;
        return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
    };
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @returns An overlay position builder.
     */
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?} An overlay position builder.
     */
    Overlay.prototype.position = /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?} An overlay position builder.
     */
    function () {
        return this._positionBuilder;
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?} host
     * @return {?} Newly-created pane element
     */
    Overlay.prototype._createPaneElement = /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?} host
     * @return {?} Newly-created pane element
     */
    function (host) {
        /** @type {?} */
        var pane = this._document.createElement('div');
        pane.id = "cdk-overlay-" + nextUniqueId++;
        pane.classList.add('cdk-overlay-pane');
        host.appendChild(pane);
        return pane;
    };
    /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @return {?} Newly-create host element.
     */
    Overlay.prototype._createHostElement = /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @return {?} Newly-create host element.
     */
    function () {
        /** @type {?} */
        var host = this._document.createElement('div');
        this._overlayContainer.getContainerElement().appendChild(host);
        return host;
    };
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal outlet.
     * @return {?} A portal outlet for the given DOM element.
     */
    Overlay.prototype._createPortalOutlet = /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal outlet.
     * @return {?} A portal outlet for the given DOM element.
     */
    function (pane) {
        // We have to resolve the ApplicationRef later in order to allow people
        // to use overlay-based providers during app initialization.
        if (!this._appRef) {
            this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]);
        }
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector);
    };
    Overlay.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] },
    ];
    /** @nocollapse */
    Overlay.ctorParameters = function () { return [
        { type: ScrollStrategyOptions },
        { type: OverlayContainer },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"] },
        { type: OverlayPositionBuilder },
        { type: OverlayKeyboardDispatcher },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
    ]; };
    return Overlay;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Default set of positions for the overlay. Follows the behavior of a dropdown.
  @type {?} */
var defaultPositionList = [
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
    },
    {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
    }
];
/** *
 * Injection token that determines the scroll handling while the connected overlay is open.
  @type {?} */
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
var CdkOverlayOrigin = /** @class */ (function () {
    function CdkOverlayOrigin(elementRef) {
        this.elementRef = elementRef;
    }
    CdkOverlayOrigin.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
                    exportAs: 'cdkOverlayOrigin',
                },] },
    ];
    /** @nocollapse */
    CdkOverlayOrigin.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    return CdkOverlayOrigin;
}());
/**
 * Directive to facilitate declarative creation of an
 * Overlay using a FlexibleConnectedPositionStrategy.
 */
var CdkConnectedOverlay = /** @class */ (function () {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
        this._overlay = _overlay;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._growAfterOpen = false;
        this._flexibleDimensions = false;
        this._push = false;
        this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Margin between the overlay and the viewport edges.
         */
        this.viewportMargin = 0;
        /**
         * Whether the overlay is open.
         */
        this.open = false;
        /**
         * Event emitted when the backdrop is clicked.
         */
        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the position has changed.
         */
        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been attached.
         */
        this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been detached.
         */
        this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when there are keyboard events that are targeted at the overlay.
         */
        this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["TemplatePortal"](templateRef, viewContainerRef);
        this._scrollStrategyFactory = scrollStrategyFactory;
        this.scrollStrategy = this._scrollStrategyFactory();
    }
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetX", {
        /** The offset in pixels for the overlay connection point on the x-axis */
        get: /**
         * The offset in pixels for the overlay connection point on the x-axis
         * @return {?}
         */
        function () { return this._offsetX; },
        set: /**
         * @param {?} offsetX
         * @return {?}
         */
        function (offsetX) {
            this._offsetX = offsetX;
            if (this._position) {
                this._updatePositionStrategy(this._position);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetY", {
        /** The offset in pixels for the overlay connection point on the y-axis */
        get: /**
         * The offset in pixels for the overlay connection point on the y-axis
         * @return {?}
         */
        function () { return this._offsetY; },
        set: /**
         * @param {?} offsetY
         * @return {?}
         */
        function (offsetY) {
            this._offsetY = offsetY;
            if (this._position) {
                this._updatePositionStrategy(this._position);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "hasBackdrop", {
        /** Whether or not the overlay should attach a backdrop. */
        get: /**
         * Whether or not the overlay should attach a backdrop.
         * @return {?}
         */
        function () { return this._hasBackdrop; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "lockPosition", {
        /** Whether or not the overlay should be locked when scrolling. */
        get: /**
         * Whether or not the overlay should be locked when scrolling.
         * @return {?}
         */
        function () { return this._lockPosition; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "flexibleDimensions", {
        /** Whether the overlay's width and height can be constrained to fit within the viewport. */
        get: /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         * @return {?}
         */
        function () { return this._flexibleDimensions; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "growAfterOpen", {
        /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */
        get: /**
         * Whether the overlay can grow after the initial open when flexible positioning is turned on.
         * @return {?}
         */
        function () { return this._growAfterOpen; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "push", {
        /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */
        get: /**
         * Whether the overlay can be pushed on-screen if none of the provided positions fit.
         * @return {?}
         */
        function () { return this._push; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "overlayRef", {
        /** The associated overlay reference. */
        get: /**
         * The associated overlay reference.
         * @return {?}
         */
        function () {
            return this._overlayRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "dir", {
        /** The element's layout direction. */
        get: /**
         * The element's layout direction.
         * @return {?}
         */
        function () {
            return this._dir ? this._dir.value : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkConnectedOverlay.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyOverlay();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkConnectedOverlay.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._position) {
            this._updatePositionStrategy(this._position);
            if (changes['origin'] && this.open) {
                this._position.apply();
            }
        }
        if (changes['open']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
        }
    };
    /**
     * Creates an overlay
     * @return {?}
     */
    CdkConnectedOverlay.prototype._createOverlay = /**
     * Creates an overlay
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig());
        this._overlayRef.keydownEvents().subscribe(function (event) {
            _this.overlayKeydown.next(event);
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"]) {
                _this._detachOverlay();
            }
        });
    };
    /**
     * Builds the overlay config based on the directive's inputs
     * @return {?}
     */
    CdkConnectedOverlay.prototype._buildConfig = /**
     * Builds the overlay config based on the directive's inputs
     * @return {?}
     */
    function () {
        /** @type {?} */
        var positionStrategy = this._position = this._createPositionStrategy();
        /** @type {?} */
        var overlayConfig = new OverlayConfig({
            direction: this._dir,
            positionStrategy: positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop
        });
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        if (this.panelClass) {
            overlayConfig.panelClass = this.panelClass;
        }
        return overlayConfig;
    };
    /**
     * Updates the state of a position strategy, based on the values of the directive inputs.
     * @param {?} positionStrategy
     * @return {?}
     */
    CdkConnectedOverlay.prototype._updatePositionStrategy = /**
     * Updates the state of a position strategy, based on the values of the directive inputs.
     * @param {?} positionStrategy
     * @return {?}
     */
    function (positionStrategy) {
        var _this = this;
        /** @type {?} */
        var positions = this.positions.map(function (currentPosition) { return ({
            originX: currentPosition.originX,
            originY: currentPosition.originY,
            overlayX: currentPosition.overlayX,
            overlayY: currentPosition.overlayY,
            offsetX: currentPosition.offsetX || _this.offsetX,
            offsetY: currentPosition.offsetY || _this.offsetY
        }); });
        return positionStrategy
            .setOrigin(this.origin.elementRef)
            .withPositions(positions)
            .withFlexibleDimensions(this.flexibleDimensions)
            .withPush(this.push)
            .withGrowAfterOpen(this.growAfterOpen)
            .withViewportMargin(this.viewportMargin)
            .withLockedPosition(this.lockPosition);
    };
    /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @return {?}
     */
    CdkConnectedOverlay.prototype._createPositionStrategy = /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);
        this._updatePositionStrategy(strategy);
        strategy.positionChanges.subscribe(function (p) { return _this.positionChange.emit(p); });
        return strategy;
    };
    /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    CdkConnectedOverlay.prototype._attachOverlay = /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._overlayRef) {
            this._createOverlay();
        }
        else {
            // Update the overlay size, in case the directive's inputs have changed
            this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight,
            });
        }
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
            this.attach.emit();
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function (event) {
                _this.backdropClick.emit(event);
            });
        }
    };
    /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    CdkConnectedOverlay.prototype._detachOverlay = /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }
        this._backdropSubscription.unsubscribe();
    };
    /**
     * Destroys the overlay created by this directive.
     * @return {?}
     */
    CdkConnectedOverlay.prototype._destroyOverlay = /**
     * Destroys the overlay created by this directive.
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        this._backdropSubscription.unsubscribe();
    };
    CdkConnectedOverlay.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
                    exportAs: 'cdkConnectedOverlay'
                },] },
    ];
    /** @nocollapse */
    CdkConnectedOverlay.ctorParameters = function () { return [
        { type: Overlay },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
    ]; };
    CdkConnectedOverlay.propDecorators = {
        origin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOrigin',] }],
        positions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayPositions',] }],
        offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOffsetX',] }],
        offsetY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOffsetY',] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayWidth',] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayHeight',] }],
        minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayMinWidth',] }],
        minHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayMinHeight',] }],
        backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayBackdropClass',] }],
        panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayPanelClass',] }],
        viewportMargin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayViewportMargin',] }],
        scrollStrategy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayScrollStrategy',] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOpen',] }],
        hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayHasBackdrop',] }],
        lockPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayLockPosition',] }],
        flexibleDimensions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayFlexibleDimensions',] }],
        growAfterOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayGrowAfterOpen',] }],
        push: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayPush',] }],
        backdropClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        positionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        attach: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        detach: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        overlayKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return CdkConnectedOverlay;
}());
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/** *
 * \@docs-private
  @type {?} */
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
    provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var OverlayModule = /** @class */ (function () {
    function OverlayModule() {
    }
    OverlayModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
                    exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
                    declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
                    providers: [
                        Overlay,
                        CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
                    ],
                },] },
    ];
    return OverlayModule;
}());
/** *
 * @deprecated Use `OverlayModule` instead.
 * \@breaking-change 8.0.0
 * \@docs-private
  @type {?} */
var OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    OVERLAY_KEYBOARD_DISPATCHER_PROVIDER,
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"],
    OVERLAY_CONTAINER_PROVIDER,
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Alternative to OverlayContainer that supports correct displaying of overlay elements in
 * Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 *
 * Should be provided in the root component.
 */
var FullscreenOverlayContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(FullscreenOverlayContainer, _super);
    function FullscreenOverlayContainer(_document) {
        return _super.call(this, _document) || this;
    }
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._fullScreenEventName && this._fullScreenListener) {
            this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
        }
    };
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._createContainer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype._createContainer.call(this);
        this._adjustParentForFullscreenChange();
        this._addFullscreenChangeListener(function () { return _this._adjustParentForFullscreenChange(); });
    };
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._adjustParentForFullscreenChange = /**
     * @return {?}
     */
    function () {
        if (!this._containerElement) {
            return;
        }
        /** @type {?} */
        var fullscreenElement = this.getFullscreenElement();
        /** @type {?} */
        var parent = fullscreenElement || this._document.body;
        parent.appendChild(this._containerElement);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._addFullscreenChangeListener = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var eventName = this._getEventName();
        if (eventName) {
            if (this._fullScreenListener) {
                this._document.removeEventListener(eventName, this._fullScreenListener);
            }
            this._document.addEventListener(eventName, fn);
            this._fullScreenListener = fn;
        }
    };
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._getEventName = /**
     * @return {?}
     */
    function () {
        if (!this._fullScreenEventName) {
            if (this._document.fullscreenEnabled) {
                this._fullScreenEventName = 'fullscreenchange';
            }
            else if (this._document.webkitFullscreenEnabled) {
                this._fullScreenEventName = 'webkitfullscreenchange';
            }
            else if ((/** @type {?} */ (this._document)).mozFullScreenEnabled) {
                this._fullScreenEventName = 'mozfullscreenchange';
            }
            else if ((/** @type {?} */ (this._document)).msFullscreenEnabled) {
                this._fullScreenEventName = 'MSFullscreenChange';
            }
        }
        return this._fullScreenEventName;
    };
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     */
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    FullscreenOverlayContainer.prototype.getFullscreenElement = /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    function () {
        return this._document.fullscreenElement ||
            this._document.webkitFullscreenElement ||
            (/** @type {?} */ (this._document)).mozFullScreenElement ||
            (/** @type {?} */ (this._document)).msFullscreenElement ||
            null;
    };
    FullscreenOverlayContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    FullscreenOverlayContainer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ FullscreenOverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function FullscreenOverlayContainer_Factory() { return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: FullscreenOverlayContainer, providedIn: "root" });
    return FullscreenOverlayContainer;
}(OverlayContainer));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=overlay.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/table.es5.js":
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/table.es5.js ***!
  \*****************************************************/
/*! exports provided: DataSource, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CDK_TABLE_TEMPLATE, CdkTable, CdkCellDef, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDefBase, _CdkColumnDefBase, CdkColumnDef, BaseCdkCell, CdkHeaderCell, CdkFooterCell, CdkCell, CDK_ROW_TEMPLATE, BaseRowDef, CdkHeaderRowDefBase, _CdkHeaderRowDefBase, CdkHeaderRowDef, CdkFooterRowDefBase, _CdkFooterRowDefBase, CdkFooterRowDef, CdkRowDef, CdkCellOutlet, CdkHeaderRow, CdkFooterRow, CdkRow, CdkTableModule, STICKY_DIRECTIONS, StickyStyler, mixinHasStickyInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function() { return DataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function() { return HeaderRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function() { return FooterRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function() { return CDK_TABLE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTable", function() { return CdkTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellDef", function() { return CdkCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function() { return CdkHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function() { return CdkFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkColumnDefBase", function() { return CdkColumnDefBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CdkColumnDefBase", function() { return _CdkColumnDefBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function() { return CdkColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function() { return BaseCdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function() { return CdkHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function() { return CdkFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCell", function() { return CdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function() { return CDK_ROW_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRowDef", function() { return BaseRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDefBase", function() { return CdkHeaderRowDefBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CdkHeaderRowDefBase", function() { return _CdkHeaderRowDefBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function() { return CdkHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowDefBase", function() { return CdkFooterRowDefBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CdkFooterRowDefBase", function() { return _CdkFooterRowDefBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function() { return CdkFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRowDef", function() { return CdkRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function() { return CdkCellOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function() { return CdkHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function() { return CdkFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRow", function() { return CdkRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule", function() { return CdkTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function() { return STICKY_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyStyler", function() { return StickyStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function() { return mixinHasStickyInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * \@docs-private
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinHasStickyInput(base) {
    return /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._sticky = false;
            /**
             * Whether the sticky input has changed since it was last checked.
             */
            _this._hasStickyChanged = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "sticky", {
            /** Whether sticky positioning should be applied. */
            get: /**
             * Whether sticky positioning should be applied.
             * @return {?}
             */
            function () { return this._sticky; },
            set: /**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                /** @type {?} */
                var prevValue = this._sticky;
                this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
                this._hasStickyChanged = prevValue !== this._sticky;
            },
            enumerable: true,
            configurable: true
        });
        /** Whether the sticky value has changed since this was last called. */
        /**
         * Whether the sticky value has changed since this was last called.
         * @return {?}
         */
        class_1.prototype.hasStickyChanged = /**
         * Whether the sticky value has changed since this was last called.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
        };
        /** Resets the dirty check for cases where the sticky state has been used without checking. */
        /**
         * Resets the dirty check for cases where the sticky state has been used without checking.
         * @return {?}
         */
        class_1.prototype.resetStickyChanged = /**
         * Resets the dirty check for cases where the sticky state has been used without checking.
         * @return {?}
         */
        function () {
            this._hasStickyChanged = false;
        };
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
var CdkCellDef = /** @class */ (function () {
    function CdkCellDef(template) {
        this.template = template;
    }
    CdkCellDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[cdkCellDef]' },] },
    ];
    /** @nocollapse */
    CdkCellDef.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
    ]; };
    return CdkCellDef;
}());
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
var CdkHeaderCellDef = /** @class */ (function () {
    function CdkHeaderCellDef(template) {
        this.template = template;
    }
    CdkHeaderCellDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[cdkHeaderCellDef]' },] },
    ];
    /** @nocollapse */
    CdkHeaderCellDef.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
    ]; };
    return CdkHeaderCellDef;
}());
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
var CdkFooterCellDef = /** @class */ (function () {
    function CdkFooterCellDef(template) {
        this.template = template;
    }
    CdkFooterCellDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[cdkFooterCellDef]' },] },
    ];
    /** @nocollapse */
    CdkFooterCellDef.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
    ]; };
    return CdkFooterCellDef;
}());
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
CdkColumnDefBase = /** @class */ (function () {
    function CdkColumnDefBase() {
    }
    return CdkColumnDefBase;
}());
/** @type {?} */
var _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
var CdkColumnDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkColumnDef, _super);
    function CdkColumnDef() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._stickyEnd = false;
        return _this;
    }
    Object.defineProperty(CdkColumnDef.prototype, "name", {
        /** Unique name for this column. */
        get: /**
         * Unique name for this column.
         * @return {?}
         */
        function () { return this._name; },
        set: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            // If the directive is set without a name (updated programatically), then this setter will
            // trigger with an empty string and should not overwrite the programatically set value.
            if (!name) {
                return;
            }
            this._name = name;
            this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkColumnDef.prototype, "stickyEnd", {
        /**
         * Whether this column should be sticky positioned on the end of the row. Should make sure
         * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
         * has been changed.
         */
        get: /**
         * Whether this column should be sticky positioned on the end of the row. Should make sure
         * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
         * has been changed.
         * @return {?}
         */
        function () { return this._stickyEnd; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            /** @type {?} */
            var prevValue = this._stickyEnd;
            this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._stickyEnd;
        },
        enumerable: true,
        configurable: true
    });
    CdkColumnDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[cdkColumnDef]',
                    inputs: ['sticky'],
                    providers: [{
                            provide: 'MAT_SORT_HEADER_COLUMN_DEF',
                            useExisting: CdkColumnDef
                        }],
                },] },
    ];
    CdkColumnDef.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['cdkColumnDef',] }],
        stickyEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['stickyEnd',] }],
        cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [CdkCellDef,] }],
        headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [CdkHeaderCellDef,] }],
        footerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [CdkFooterCellDef,] }]
    };
    return CdkColumnDef;
}(_CdkColumnDefBase));
/**
 * Base class for the cells. Adds a CSS classname that identifies the column it renders in.
 */
var  /**
 * Base class for the cells. Adds a CSS classname that identifies the column it renders in.
 */
BaseCdkCell = /** @class */ (function () {
    function BaseCdkCell(columnDef, elementRef) {
        /** @type {?} */
        var columnClassName = "cdk-column-" + columnDef.cssClassFriendlyName;
        elementRef.nativeElement.classList.add(columnClassName);
    }
    return BaseCdkCell;
}());
/**
 * Header cell template container that adds the right classes and role.
 */
var CdkHeaderCell = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkHeaderCell, _super);
    function CdkHeaderCell(columnDef, elementRef) {
        return _super.call(this, columnDef, elementRef) || this;
    }
    CdkHeaderCell.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: 'cdk-header-cell, th[cdk-header-cell]',
                    host: {
                        'class': 'cdk-header-cell',
                        'role': 'columnheader',
                    },
                },] },
    ];
    /** @nocollapse */
    CdkHeaderCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return CdkHeaderCell;
}(BaseCdkCell));
/**
 * Footer cell template container that adds the right classes and role.
 */
var CdkFooterCell = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkFooterCell, _super);
    function CdkFooterCell(columnDef, elementRef) {
        return _super.call(this, columnDef, elementRef) || this;
    }
    CdkFooterCell.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: 'cdk-footer-cell, td[cdk-footer-cell]',
                    host: {
                        'class': 'cdk-footer-cell',
                        'role': 'gridcell',
                    },
                },] },
    ];
    /** @nocollapse */
    CdkFooterCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return CdkFooterCell;
}(BaseCdkCell));
/**
 * Cell template container that adds the right classes and role.
 */
var CdkCell = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkCell, _super);
    function CdkCell(columnDef, elementRef) {
        return _super.call(this, columnDef, elementRef) || this;
    }
    CdkCell.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: 'cdk-cell, td[cdk-cell]',
                    host: {
                        'class': 'cdk-cell',
                        'role': 'gridcell',
                    },
                },] },
    ];
    /** @nocollapse */
    CdkCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return CdkCell;
}(BaseCdkCell));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
  @type {?} */
var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 * @abstract
 */
var  /**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 * @abstract
 */
BaseRowDef = /** @class */ (function () {
    function BaseRowDef(template, _differs) {
        this.template = template;
        this._differs = _differs;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseRowDef.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // Create a new columns differ if one does not yet exist. Initialize it based on initial value
        // of the columns property or an empty array if none is provided.
        if (!this._columnsDiffer) {
            /** @type {?} */
            var columns = (changes['columns'] && changes['columns'].currentValue) || [];
            this._columnsDiffer = this._differs.find(columns).create();
            this._columnsDiffer.diff(columns);
        }
    };
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     */
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     * @return {?}
     */
    BaseRowDef.prototype.getColumnsDiff = /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     * @return {?}
     */
    function () {
        return this._columnsDiffer.diff(this.columns);
    };
    /** Gets this row def's relevant cell template from the provided column def. */
    /**
     * Gets this row def's relevant cell template from the provided column def.
     * @param {?} column
     * @return {?}
     */
    BaseRowDef.prototype.extractCellTemplate = /**
     * Gets this row def's relevant cell template from the provided column def.
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
        }
        if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
        }
        else {
            return column.cell.template;
        }
    };
    return BaseRowDef;
}());
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
CdkHeaderRowDefBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkHeaderRowDefBase, _super);
    function CdkHeaderRowDefBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CdkHeaderRowDefBase;
}(BaseRowDef));
/** @type {?} */
var _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
var CdkHeaderRowDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkHeaderRowDef, _super);
    function CdkHeaderRowDef(template, _differs) {
        return _super.call(this, template, _differs) || this;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkHeaderRowDef.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    CdkHeaderRowDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[cdkHeaderRowDef]',
                    inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky'],
                },] },
    ];
    /** @nocollapse */
    CdkHeaderRowDef.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"] }
    ]; };
    return CdkHeaderRowDef;
}(_CdkHeaderRowDefBase));
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
CdkFooterRowDefBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkFooterRowDefBase, _super);
    function CdkFooterRowDefBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CdkFooterRowDefBase;
}(BaseRowDef));
/** @type {?} */
var _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
var CdkFooterRowDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkFooterRowDef, _super);
    function CdkFooterRowDef(template, _differs) {
        return _super.call(this, template, _differs) || this;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkFooterRowDef.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    CdkFooterRowDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[cdkFooterRowDef]',
                    inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky'],
                },] },
    ];
    /** @nocollapse */
    CdkFooterRowDef.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"] }
    ]; };
    return CdkFooterRowDef;
}(_CdkFooterRowDefBase));
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 * @template T
 */
var CdkRowDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkRowDef, _super);
    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    function CdkRowDef(template, _differs) {
        return _super.call(this, template, _differs) || this;
    }
    CdkRowDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[cdkRowDef]',
                    inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen'],
                },] },
    ];
    /** @nocollapse */
    CdkRowDef.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"] }
    ]; };
    return CdkRowDef;
}(BaseRowDef));
/**
 * Outlet for rendering cells inside of a row or header row.
 * \@docs-private
 */
var CdkCellOutlet = /** @class */ (function () {
    function CdkCellOutlet(_viewContainer) {
        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
    }
    /**
     * @return {?}
     */
    CdkCellOutlet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // If this was the last outlet being rendered in the view, remove the reference
        // from the static property after it has been destroyed to avoid leaking memory.
        if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
        }
    };
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */
    CdkCellOutlet.mostRecentCellOutlet = null;
    CdkCellOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[cdkCellOutlet]' },] },
    ];
    /** @nocollapse */
    CdkCellOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }
    ]; };
    return CdkCellOutlet;
}());
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 */
var CdkHeaderRow = /** @class */ (function () {
    function CdkHeaderRow() {
    }
    CdkHeaderRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: 'cdk-header-row, tr[cdk-header-row]',
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        'class': 'cdk-header-row',
                        'role': 'row',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                },] },
    ];
    return CdkHeaderRow;
}());
/**
 * Footer template container that contains the cell outlet. Adds the right class and role.
 */
var CdkFooterRow = /** @class */ (function () {
    function CdkFooterRow() {
    }
    CdkFooterRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: 'cdk-footer-row, tr[cdk-footer-row]',
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        'class': 'cdk-footer-row',
                        'role': 'row',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                },] },
    ];
    return CdkFooterRow;
}());
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
var CdkRow = /** @class */ (function () {
    function CdkRow() {
    }
    CdkRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: 'cdk-row, tr[cdk-row]',
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        'class': 'cdk-row',
                        'role': 'row',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                },] },
    ];
    return CdkRow;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * \@docs-private
 * @param {?} id Id whose lookup failed.
 * @return {?}
 */
function getTableUnknownColumnError(id) {
    return Error("Could not find column with id \"" + id + "\".");
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * \@docs-private
 * @param {?} name
 * @return {?}
 */
function getTableDuplicateColumnNameError(name) {
    return Error("Duplicate column definition name provided: \"" + name + "\".");
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * \@docs-private
 * @return {?}
 */
function getTableMultipleDefaultRowDefsError() {
    return Error("There can only be one default row without a when predicate function.");
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * \@docs-private
 * @param {?} data
 * @return {?}
 */
function getTableMissingMatchingRowDefError(data) {
    return Error("Could not find a matching row definition for the" +
        ("provided row data: " + JSON.stringify(data)));
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * \@docs-private
 * @return {?}
 */
function getTableMissingRowDefsError() {
    return Error('Missing definitions for header, footer, and row; ' +
        'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * \@docs-private
 * @return {?}
 */
function getTableUnknownDataSourceError() {
    return Error("Provided data source did not match an array, Observable, or DataSource");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * List of all possible directions that can be used for sticky positioning.
 * \@docs-private
  @type {?} */
var STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * \@docs-private
 */
var  /**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * \@docs-private
 */
StickyStyler = /** @class */ (function () {
    /**
     * @param isNativeHtmlTable Whether the sticky logic should be based on a table
     *     that uses the native `<table>` element.
     * @param stickCellCss The CSS class that will be applied to every row/cell that has
     *     sticky positioning applied.
     * @param direction The directionality context of the table (ltr/rtl); affects column positioning
     *     by reversing left/right positions.
     * @param _isBrowser Whether the table is currently being rendered on the server or the client.
     */
    function StickyStyler(isNativeHtmlTable, stickCellCss, direction, _isBrowser) {
        if (_isBrowser === void 0) { _isBrowser = true; }
        this.isNativeHtmlTable = isNativeHtmlTable;
        this.stickCellCss = stickCellCss;
        this.direction = direction;
        this._isBrowser = _isBrowser;
    }
    /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param rows The list of rows that should be cleared from sticking in the provided directions
     * @param stickyDirections The directions that should no longer be set as sticky on the rows.
     */
    /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param {?} rows The list of rows that should be cleared from sticking in the provided directions
     * @param {?} stickyDirections The directions that should no longer be set as sticky on the rows.
     * @return {?}
     */
    StickyStyler.prototype.clearStickyPositioning = /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param {?} rows The list of rows that should be cleared from sticking in the provided directions
     * @param {?} stickyDirections The directions that should no longer be set as sticky on the rows.
     * @return {?}
     */
    function (rows, stickyDirections) {
        for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
            var row = rows_1[_i];
            // If the row isn't an element (e.g. if it's an `ng-container`),
            // it won't have inline styles or `children` so we skip it.
            if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
            }
            this._removeStickyStyle(row, stickyDirections);
            for (var i = 0; i < row.children.length; i++) {
                /** @type {?} */
                var cell = /** @type {?} */ (row.children[i]);
                this._removeStickyStyle(cell, stickyDirections);
            }
        }
    };
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param rows The rows that should have its set of cells stuck according to the sticky states.
     * @param stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     */
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param {?} rows The rows that should have its set of cells stuck according to the sticky states.
     * @param {?} stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param {?} stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     * @return {?}
     */
    StickyStyler.prototype.updateStickyColumns = /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param {?} rows The rows that should have its set of cells stuck according to the sticky states.
     * @param {?} stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param {?} stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     * @return {?}
     */
    function (rows, stickyStartStates, stickyEndStates) {
        /** @type {?} */
        var hasStickyColumns = stickyStartStates.some(function (state) { return state; }) || stickyEndStates.some(function (state) { return state; });
        if (!rows.length || !hasStickyColumns || !this._isBrowser) {
            return;
        }
        /** @type {?} */
        var firstRow = rows[0];
        /** @type {?} */
        var numCells = firstRow.children.length;
        /** @type {?} */
        var cellWidths = this._getCellWidths(firstRow);
        /** @type {?} */
        var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        /** @type {?} */
        var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
        /** @type {?} */
        var isRtl = this.direction === 'rtl';
        for (var _i = 0, rows_2 = rows; _i < rows_2.length; _i++) {
            var row = rows_2[_i];
            for (var i = 0; i < numCells; i++) {
                /** @type {?} */
                var cell = /** @type {?} */ (row.children[i]);
                if (stickyStartStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'right' : 'left', startPositions[i]);
                }
                if (stickyEndStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'left' : 'right', endPositions[i]);
                }
            }
        }
    };
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     */
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param {?} rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param {?} stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param {?} position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     * @return {?}
     */
    StickyStyler.prototype.stickRows = /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param {?} rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param {?} stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param {?} position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     * @return {?}
     */
    function (rowsToStick, stickyStates, position) {
        // Since we can't measure the rows on the server, we can't stick the rows properly.
        if (!this._isBrowser) {
            return;
        }
        /** @type {?} */
        var rows = position === 'bottom' ? rowsToStick.reverse() : rowsToStick;
        /** @type {?} */
        var stickyHeight = 0;
        for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            if (!stickyStates[rowIndex]) {
                continue;
            }
            /** @type {?} */
            var row = rows[rowIndex];
            if (this.isNativeHtmlTable) {
                for (var j = 0; j < row.children.length; j++) {
                    /** @type {?} */
                    var cell = /** @type {?} */ (row.children[j]);
                    this._addStickyStyle(cell, position, stickyHeight);
                }
            }
            else {
                // Flex does not respect the stick positioning on the cells, needs to be applied to the row.
                // If this is applied on a native table, Safari causes the header to fly in wrong direction.
                this._addStickyStyle(row, position, stickyHeight);
            }
            if (rowIndex === rows.length - 1) {
                // prevent unnecessary reflow from getBoundingClientRect()
                return;
            }
            stickyHeight += row.getBoundingClientRect().height;
        }
    };
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     */
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     * @param {?} tableElement
     * @param {?} stickyStates
     * @return {?}
     */
    StickyStyler.prototype.updateStickyFooterContainer = /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     * @param {?} tableElement
     * @param {?} stickyStates
     * @return {?}
     */
    function (tableElement, stickyStates) {
        if (!this.isNativeHtmlTable) {
            return;
        }
        /** @type {?} */
        var tfoot = /** @type {?} */ ((tableElement.querySelector('tfoot')));
        if (stickyStates.some(function (state) { return !state; })) {
            this._removeStickyStyle(tfoot, ['bottom']);
        }
        else {
            this._addStickyStyle(tfoot, 'bottom', 0);
        }
    };
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     */
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     * @param {?} element
     * @param {?} stickyDirections
     * @return {?}
     */
    StickyStyler.prototype._removeStickyStyle = /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     * @param {?} element
     * @param {?} stickyDirections
     * @return {?}
     */
    function (element, stickyDirections) {
        for (var _i = 0, stickyDirections_1 = stickyDirections; _i < stickyDirections_1.length; _i++) {
            var dir = stickyDirections_1[_i];
            element.style[dir] = '';
        }
        element.style.zIndex = this._getCalculatedZIndex(element);
        /** @type {?} */
        var hasDirection = STICKY_DIRECTIONS.some(function (dir) { return !!element.style[dir]; });
        if (!hasDirection) {
            element.style.position = '';
            element.classList.remove(this.stickCellCss);
        }
    };
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     */
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     * @param {?} element
     * @param {?} dir
     * @param {?} dirValue
     * @return {?}
     */
    StickyStyler.prototype._addStickyStyle = /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     * @param {?} element
     * @param {?} dir
     * @param {?} dirValue
     * @return {?}
     */
    function (element, dir, dirValue) {
        element.classList.add(this.stickCellCss);
        element.style[dir] = dirValue + "px";
        element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
        element.style.zIndex = this._getCalculatedZIndex(element);
    };
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     */
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     * @param {?} element
     * @return {?}
     */
    StickyStyler.prototype._getCalculatedZIndex = /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1,
        };
        /** @type {?} */
        var zIndex = 0;
        for (var _i = 0, STICKY_DIRECTIONS_1 = STICKY_DIRECTIONS; _i < STICKY_DIRECTIONS_1.length; _i++) {
            var dir = STICKY_DIRECTIONS_1[_i];
            if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
            }
        }
        return zIndex ? "" + zIndex : '';
    };
    /** Gets the widths for each cell in the provided row. */
    /**
     * Gets the widths for each cell in the provided row.
     * @param {?} row
     * @return {?}
     */
    StickyStyler.prototype._getCellWidths = /**
     * Gets the widths for each cell in the provided row.
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var cellWidths = [];
        /** @type {?} */
        var firstRowCells = row.children;
        for (var i = 0; i < firstRowCells.length; i++) {
            /** @type {?} */
            var cell = /** @type {?} */ (firstRowCells[i]);
            cellWidths.push(cell.getBoundingClientRect().width);
        }
        return cellWidths;
    };
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    StickyStyler.prototype._getStickyStartColumnPositions = /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    function (widths, stickyStates) {
        /** @type {?} */
        var positions = [];
        /** @type {?} */
        var nextPosition = 0;
        for (var i = 0; i < widths.length; i++) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    };
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    StickyStyler.prototype._getStickyEndColumnPositions = /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    function (widths, stickyStates) {
        /** @type {?} */
        var positions = [];
        /** @type {?} */
        var nextPosition = 0;
        for (var i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    };
    return StickyStyler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * \@docs-private
 */
var DataRowOutlet = /** @class */ (function () {
    function DataRowOutlet(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
    DataRowOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[rowOutlet]' },] },
    ];
    /** @nocollapse */
    DataRowOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return DataRowOutlet;
}());
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * \@docs-private
 */
var HeaderRowOutlet = /** @class */ (function () {
    function HeaderRowOutlet(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
    HeaderRowOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[headerRowOutlet]' },] },
    ];
    /** @nocollapse */
    HeaderRowOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return HeaderRowOutlet;
}());
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * \@docs-private
 */
var FooterRowOutlet = /** @class */ (function () {
    function FooterRowOutlet(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
    FooterRowOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[footerRowOutlet]' },] },
    ];
    /** @nocollapse */
    FooterRowOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return FooterRowOutlet;
}());
/** *
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * \@docs-private
  @type {?} */
var CDK_TABLE_TEMPLATE = "\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>";
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * \@docs-private
 * @abstract
 * @template T
 */
var /**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * \@docs-private
 * @abstract
 * @template T
 */
RowViewRef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RowViewRef, _super);
    function RowViewRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RowViewRef;
}(_angular_core__WEBPACK_IMPORTED_MODULE_2__["EmbeddedViewRef"]));
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 * @template T
 */
var CdkTable = /** @class */ (function () {
    function CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, /**
                   * @deprecated
                   * @breaking-change 8.0.0 `_document` and `_platform` to
                   *    be made into a required parameters.
                   */
    _document, _platform) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this._platform = _platform;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Map of all the user's defined columns (header, data, and footer cell template) identified by
         * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
         * any custom column definitions added to `_customColumnDefs`.
         */
        this._columnDefsByName = new Map();
        /**
         * Column definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * column definitions as *it's* content child.
         */
        this._customColumnDefs = new Set();
        /**
         * Data row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in data rows as *it's* content child.
         */
        this._customRowDefs = new Set();
        /**
         * Header row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in header rows as *it's* content child.
         */
        this._customHeaderRowDefs = new Set();
        /**
         * Footer row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
         * built-in footer row as *it's* content child.
         */
        this._customFooterRowDefs = new Set();
        /**
         * Whether the header row definition has been changed. Triggers an update to the header row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._headerRowDefChanged = true;
        /**
         * Whether the footer row definition has been changed. Triggers an update to the footer row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._footerRowDefChanged = true;
        /**
         * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
         * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
         * the cached `RenderRow` objects when possible, the row identity is preserved when the data
         * and row template matches, which allows the `IterableDiffer` to check rows by reference
         * and understand which rows are added/moved/removed.
         *
         * Implemented as a map of maps where the first key is the `data: T` object and the second is the
         * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
         * contains an array of created pairs. The array is necessary to handle cases where the data
         * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
         * stored.
         */
        this._cachedRenderRowsMap = new Map();
        /**
         * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
         * table subclasses.
         */
        this.stickyCssClass = 'cdk-table-sticky';
        this._multiTemplateDataRows = false;
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({ start: 0, end: Number.MAX_VALUE });
        if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'grid');
        }
        this._document = _document;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
    }
    Object.defineProperty(CdkTable.prototype, "trackBy", {
        /**
         * Tracking function that will be used to check the differences in data changes. Used similarly
         * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
         * relative to the function to know if a row should be added/removed/moved.
         * Accepts a function that takes two parameters, `index` and `item`.
         */
        get: /**
         * Tracking function that will be used to check the differences in data changes. Used similarly
         * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
         * relative to the function to know if a row should be added/removed/moved.
         * Accepts a function that takes two parameters, `index` and `item`.
         * @return {?}
         */
        function () { return this._trackByFn; },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])() &&
                fn != null && typeof fn !== 'function' && /** @type {?} */ (console) && /** @type {?} */ (console.warn)) {
                console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ".");
            }
            this._trackByFn = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTable.prototype, "dataSource", {
        /**
         * The table's source of data, which can be provided in three ways (in order of complexity):
         *   - Simple data array (each object represents one table row)
         *   - Stream that emits a data array each time the array changes
         *   - `DataSource` object that implements the connect/disconnect interface.
         *
         * If a data array is provided, the table must be notified when the array's objects are
         * added, removed, or moved. This can be done by calling the `renderRows()` function which will
         * render the diff since the last table render. If the data array reference is changed, the table
         * will automatically trigger an update to the rows.
         *
         * When providing an Observable stream, the table will trigger an update automatically when the
         * stream emits a new array of data.
         *
         * Finally, when providing a `DataSource` object, the table will use the Observable stream
         * provided by the connect function and trigger updates when that stream emits new data array
         * values. During the table's ngOnDestroy or when the data source is removed from the table, the
         * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
         * subscriptions registered during the connect process).
         */
        get: /**
         * The table's source of data, which can be provided in three ways (in order of complexity):
         *   - Simple data array (each object represents one table row)
         *   - Stream that emits a data array each time the array changes
         *   - `DataSource` object that implements the connect/disconnect interface.
         *
         * If a data array is provided, the table must be notified when the array's objects are
         * added, removed, or moved. This can be done by calling the `renderRows()` function which will
         * render the diff since the last table render. If the data array reference is changed, the table
         * will automatically trigger an update to the rows.
         *
         * When providing an Observable stream, the table will trigger an update automatically when the
         * stream emits a new array of data.
         *
         * Finally, when providing a `DataSource` object, the table will use the Observable stream
         * provided by the connect function and trigger updates when that stream emits new data array
         * values. During the table's ngOnDestroy or when the data source is removed from the table, the
         * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
         * subscriptions registered during the connect process).
         * @return {?}
         */
        function () { return this._dataSource; },
        set: /**
         * @param {?} dataSource
         * @return {?}
         */
        function (dataSource) {
            if (this._dataSource !== dataSource) {
                this._switchDataSource(dataSource);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTable.prototype, "multiTemplateDataRows", {
        /**
         * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
         * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
         * dataobject will render the first row that evaluates its when predicate to true, in the order
         * defined in the table, or otherwise the default row which does not have a when predicate.
         */
        get: /**
         * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
         * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
         * dataobject will render the first row that evaluates its when predicate to true, in the order
         * defined in the table, or otherwise the default row which does not have a when predicate.
         * @return {?}
         */
        function () { return this._multiTemplateDataRows; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            if (this._rowOutlet.viewContainer.length) {
                this._forceRenderDataRows();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkTable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._setupStickyStyler();
        if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
        }
        // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
        // the user has provided a custom trackBy, return the result of that function as evaluated
        // with the values of the `RenderRow`'s data and index.
        this._dataDiffer = this._differs.find([]).create(function (_i, dataRow) {
            return _this.trackBy ? _this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
        });
    };
    /**
     * @return {?}
     */
    CdkTable.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
        this._cacheRowDefs();
        this._cacheColumnDefs();
        // Make sure that the user has at least added header, footer, or data row def.
        if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
            throw getTableMissingRowDefsError();
        }
        // Render updates if the list of columns have been changed for the header, row, or footer defs.
        this._renderUpdatedColumns();
        // If the header row definition has been changed, trigger a render to the header row.
        if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();
            this._headerRowDefChanged = false;
        }
        // If the footer row definition has been changed, trigger a render to the footer row.
        if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();
            this._footerRowDefChanged = false;
        }
        // If there is a data source and row definitions, connect to the data source unless a
        // connection has already been made.
        if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
        this._checkStickyStates();
    };
    /**
     * @return {?}
     */
    CdkTable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._rowOutlet.viewContainer.clear();
        this._headerRowOutlet.viewContainer.clear();
        this._footerRowOutlet.viewContainer.clear();
        this._cachedRenderRowsMap.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (this.dataSource instanceof _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]) {
            this.dataSource.disconnect(this);
        }
    };
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     */
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     * @return {?}
     */
    CdkTable.prototype.renderRows = /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderRows = this._getAllRenderRows();
        /** @type {?} */
        var changes = this._dataDiffer.diff(this._renderRows);
        if (!changes) {
            return;
        }
        /** @type {?} */
        var viewContainer = this._rowOutlet.viewContainer;
        changes.forEachOperation(function (record, prevIndex, currentIndex) {
            if (record.previousIndex == null) {
                _this._insertRow(record.item, /** @type {?} */ ((currentIndex)));
            }
            else if (currentIndex == null) {
                viewContainer.remove(/** @type {?} */ ((prevIndex)));
            }
            else {
                /** @type {?} */
                var view = /** @type {?} */ (viewContainer.get(/** @type {?} */ ((prevIndex))));
                viewContainer.move(/** @type {?} */ ((view)), currentIndex);
            }
        });
        // Update the meta context of a row's context data (index, count, first, last, ...)
        this._updateRowIndexContext();
        // Update rows that did not get added/removed/moved but may have had their identity changed,
        // e.g. if trackBy matched data on some property but the actual data reference changed.
        changes.forEachIdentityChange(function (record) {
            /** @type {?} */
            var rowView = /** @type {?} */ (viewContainer.get(/** @type {?} */ ((record.currentIndex))));
            rowView.context.$implicit = record.item.data;
        });
        this.updateStickyColumnStyles();
    };
    /**
     * Sets the header row definition to be used. Overrides the header row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
     * table's content is checked.
     * @docs-private
     * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
     * @breaking-change 8.0.0
     */
    /**
     * Sets the header row definition to be used. Overrides the header row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} headerRowDef
     * @return {?}
     */
    CdkTable.prototype.setHeaderRowDef = /**
     * Sets the header row definition to be used. Overrides the header row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} headerRowDef
     * @return {?}
     */
    function (headerRowDef) {
        this._customHeaderRowDefs = new Set([headerRowDef]);
        this._headerRowDefChanged = true;
    };
    /**
     * Sets the footer row definition to be used. Overrides the footer row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
     * table's content is checked.
     * @docs-private
     * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
     * @breaking-change 8.0.0
     */
    /**
     * Sets the footer row definition to be used. Overrides the footer row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} footerRowDef
     * @return {?}
     */
    CdkTable.prototype.setFooterRowDef = /**
     * Sets the footer row definition to be used. Overrides the footer row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} footerRowDef
     * @return {?}
     */
    function (footerRowDef) {
        this._customFooterRowDefs = new Set([footerRowDef]);
        this._footerRowDefChanged = true;
    };
    /** Adds a column definition that was not included as part of the content children. */
    /**
     * Adds a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    CdkTable.prototype.addColumnDef = /**
     * Adds a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    function (columnDef) {
        this._customColumnDefs.add(columnDef);
    };
    /** Removes a column definition that was not included as part of the content children. */
    /**
     * Removes a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    CdkTable.prototype.removeColumnDef = /**
     * Removes a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    function (columnDef) {
        this._customColumnDefs.delete(columnDef);
    };
    /** Adds a row definition that was not included as part of the content children. */
    /**
     * Adds a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    CdkTable.prototype.addRowDef = /**
     * Adds a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    function (rowDef) {
        this._customRowDefs.add(rowDef);
    };
    /** Removes a row definition that was not included as part of the content children. */
    /**
     * Removes a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    CdkTable.prototype.removeRowDef = /**
     * Removes a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    function (rowDef) {
        this._customRowDefs.delete(rowDef);
    };
    /** Adds a header row definition that was not included as part of the content children. */
    /**
     * Adds a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    CdkTable.prototype.addHeaderRowDef = /**
     * Adds a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    function (headerRowDef) {
        this._customHeaderRowDefs.add(headerRowDef);
        this._headerRowDefChanged = true;
    };
    /** Removes a header row definition that was not included as part of the content children. */
    /**
     * Removes a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    CdkTable.prototype.removeHeaderRowDef = /**
     * Removes a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    function (headerRowDef) {
        this._customHeaderRowDefs.delete(headerRowDef);
        this._headerRowDefChanged = true;
    };
    /** Adds a footer row definition that was not included as part of the content children. */
    /**
     * Adds a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    CdkTable.prototype.addFooterRowDef = /**
     * Adds a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    function (footerRowDef) {
        this._customFooterRowDefs.add(footerRowDef);
        this._footerRowDefChanged = true;
    };
    /** Removes a footer row definition that was not included as part of the content children. */
    /**
     * Removes a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    CdkTable.prototype.removeFooterRowDef = /**
     * Removes a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    function (footerRowDef) {
        this._customFooterRowDefs.delete(footerRowDef);
        this._footerRowDefChanged = true;
    };
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    CdkTable.prototype.updateStickyHeaderRowStyles = /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var headerRows = this._getRenderedRows(this._headerRowOutlet);
        this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
        /** @type {?} */
        var stickyStates = this._headerRowDefs.map(function (def) { return def.sticky; });
        this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
        // Reset the dirty state of the sticky input change since it has been used.
        this._headerRowDefs.forEach(function (def) { return def.resetStickyChanged(); });
    };
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    CdkTable.prototype.updateStickyFooterRowStyles = /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var footerRows = this._getRenderedRows(this._footerRowOutlet);
        this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
        /** @type {?} */
        var stickyStates = this._footerRowDefs.map(function (def) { return def.sticky; });
        this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
        this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
        // Reset the dirty state of the sticky input change since it has been used.
        this._footerRowDefs.forEach(function (def) { return def.resetStickyChanged(); });
    };
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     */
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     * @return {?}
     */
    CdkTable.prototype.updateStickyColumnStyles = /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var headerRows = this._getRenderedRows(this._headerRowOutlet);
        /** @type {?} */
        var dataRows = this._getRenderedRows(this._rowOutlet);
        /** @type {?} */
        var footerRows = this._getRenderedRows(this._footerRowOutlet);
        // Clear the left and right positioning from all columns in the table across all rows since
        // sticky columns span across all table sections (header, data, footer)
        this._stickyStyler.clearStickyPositioning(headerRows.concat(dataRows, footerRows), ['left', 'right']);
        // Update the sticky styles for each header row depending on the def's sticky state
        headerRows.forEach(function (headerRow, i) {
            _this._addStickyColumnStyles([headerRow], _this._headerRowDefs[i]);
        });
        // Update the sticky styles for each data row depending on its def's sticky state
        this._rowDefs.forEach(function (rowDef) {
            /** @type {?} */
            var rows = [];
            for (var i = 0; i < dataRows.length; i++) {
                if (_this._renderRows[i].rowDef === rowDef) {
                    rows.push(dataRows[i]);
                }
            }
            _this._addStickyColumnStyles(rows, rowDef);
        });
        // Update the sticky styles for each footer row depending on the def's sticky state
        footerRows.forEach(function (footerRow, i) {
            _this._addStickyColumnStyles([footerRow], _this._footerRowDefs[i]);
        });
        // Reset the dirty state of the sticky input change since it has been used.
        Array.from(this._columnDefsByName.values()).forEach(function (def) { return def.resetStickyChanged(); });
    };
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     * @return {?}
     */
    CdkTable.prototype._getAllRenderRows = /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var renderRows = [];
        /** @type {?} */
        var prevCachedRenderRows = this._cachedRenderRowsMap;
        this._cachedRenderRowsMap = new Map();
        // For each data object, get the list of rows that should be rendered, represented by the
        // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
        for (var i = 0; i < this._data.length; i++) {
            /** @type {?} */
            var data = this._data[i];
            /** @type {?} */
            var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
            if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
            }
            for (var j = 0; j < renderRowsForData.length; j++) {
                /** @type {?} */
                var renderRow = renderRowsForData[j];
                /** @type {?} */
                var cache = /** @type {?} */ ((this._cachedRenderRowsMap.get(renderRow.data)));
                if (cache.has(renderRow.rowDef)) {
                    /** @type {?} */ ((cache.get(renderRow.rowDef))).push(renderRow);
                }
                else {
                    cache.set(renderRow.rowDef, [renderRow]);
                }
                renderRows.push(renderRow);
            }
        }
        return renderRows;
    };
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     * @param {?} data
     * @param {?} dataIndex
     * @param {?=} cache
     * @return {?}
     */
    CdkTable.prototype._getRenderRowsForData = /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     * @param {?} data
     * @param {?} dataIndex
     * @param {?=} cache
     * @return {?}
     */
    function (data, dataIndex, cache) {
        /** @type {?} */
        var rowDefs = this._getRowDefs(data, dataIndex);
        return rowDefs.map(function (rowDef) {
            /** @type {?} */
            var cachedRenderRows = (cache && cache.has(rowDef)) ? /** @type {?} */ ((cache.get(rowDef))) : [];
            if (cachedRenderRows.length) {
                /** @type {?} */
                var dataRow = /** @type {?} */ ((cachedRenderRows.shift()));
                dataRow.dataIndex = dataIndex;
                return dataRow;
            }
            else {
                return { data: data, rowDef: rowDef, dataIndex: dataIndex };
            }
        });
    };
    /**
     * Update the map containing the content's column definitions.
     * @return {?}
     */
    CdkTable.prototype._cacheColumnDefs = /**
     * Update the map containing the content's column definitions.
     * @return {?}
     */
    function () {
        var _this = this;
        this._columnDefsByName.clear();
        /** @type {?} */
        var columnDefs = mergeQueryListAndSet(this._contentColumnDefs, this._customColumnDefs);
        columnDefs.forEach(function (columnDef) {
            if (_this._columnDefsByName.has(columnDef.name)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
            }
            _this._columnDefsByName.set(columnDef.name, columnDef);
        });
    };
    /**
     * Update the list of all available row definitions that can be used.
     * @return {?}
     */
    CdkTable.prototype._cacheRowDefs = /**
     * Update the list of all available row definitions that can be used.
     * @return {?}
     */
    function () {
        this._headerRowDefs =
            mergeQueryListAndSet(this._contentHeaderRowDefs, this._customHeaderRowDefs);
        this._footerRowDefs =
            mergeQueryListAndSet(this._contentFooterRowDefs, this._customFooterRowDefs);
        this._rowDefs =
            mergeQueryListAndSet(this._contentRowDefs, this._customRowDefs);
        /** @type {?} */
        var defaultRowDefs = this._rowDefs.filter(function (def) { return !def.when; });
        if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
            throw getTableMultipleDefaultRowDefsError();
        }
        this._defaultRowDef = defaultRowDefs[0];
    };
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     * @return {?}
     */
    CdkTable.prototype._renderUpdatedColumns = /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var columnsDiffReducer = function (acc, def) { return acc || !!def.getColumnsDiff(); };
        // Force re-render data rows if the list of column definitions have changed.
        if (this._rowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderDataRows();
        }
        // Force re-render header/footer rows if the list of column definitions have changed..
        if (this._headerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderHeaderRows();
        }
        if (this._footerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderFooterRows();
        }
    };
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     * @param {?} dataSource
     * @return {?}
     */
    CdkTable.prototype._switchDataSource = /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     * @param {?} dataSource
     * @return {?}
     */
    function (dataSource) {
        this._data = [];
        if (this.dataSource instanceof _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]) {
            this.dataSource.disconnect(this);
        }
        // Stop listening for data from the previous data source.
        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }
        if (!dataSource) {
            if (this._dataDiffer) {
                this._dataDiffer.diff([]);
            }
            this._rowOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
    };
    /**
     * Set up a subscription for the data provided by the data source.
     * @return {?}
     */
    CdkTable.prototype._observeRenderChanges = /**
     * Set up a subscription for the data provided by the data source.
     * @return {?}
     */
    function () {
        var _this = this;
        // If no data source has been set, there is nothing to observe for changes.
        if (!this.dataSource) {
            return;
        }
        /** @type {?} */
        var dataStream;
        // Check if the datasource is a DataSource object by observing if it has a connect function.
        // Cannot check this.dataSource['connect'] due to potential property renaming, nor can it
        // checked as an instanceof DataSource<T> since the table should allow for data sources
        // that did not explicitly extend DataSource<T>.
        if ((/** @type {?} */ (this.dataSource)).connect instanceof Function) {
            dataStream = (/** @type {?} */ (this.dataSource)).connect(this);
        }
        else if (this.dataSource instanceof rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]) {
            dataStream = this.dataSource;
        }
        else if (Array.isArray(this.dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.dataSource);
        }
        if (dataStream === undefined) {
            throw getTableUnknownDataSourceError();
        }
        this._renderChangeSubscription = dataStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._onDestroy))
            .subscribe(function (data) {
            _this._data = data || [];
            _this.renderRows();
        });
    };
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     * @return {?}
     */
    CdkTable.prototype._forceRenderHeaderRows = /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     * @return {?}
     */
    function () {
        var _this = this;
        // Clear the header row outlet if any content exists.
        if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
        }
        this._headerRowDefs.forEach(function (def, i) { return _this._renderRow(_this._headerRowOutlet, def, i); });
        this.updateStickyHeaderRowStyles();
        this.updateStickyColumnStyles();
    };
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     * @return {?}
     */
    CdkTable.prototype._forceRenderFooterRows = /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     * @return {?}
     */
    function () {
        var _this = this;
        // Clear the footer row outlet if any content exists.
        if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
        }
        this._footerRowDefs.forEach(function (def, i) { return _this._renderRow(_this._footerRowOutlet, def, i); });
        this.updateStickyFooterRowStyles();
        this.updateStickyColumnStyles();
    };
    /**
     * Adds the sticky column styles for the rows according to the columns' stick states.
     * @param {?} rows
     * @param {?} rowDef
     * @return {?}
     */
    CdkTable.prototype._addStickyColumnStyles = /**
     * Adds the sticky column styles for the rows according to the columns' stick states.
     * @param {?} rows
     * @param {?} rowDef
     * @return {?}
     */
    function (rows, rowDef) {
        var _this = this;
        /** @type {?} */
        var columnDefs = Array.from(rowDef.columns || []).map(function (c) { return ((_this._columnDefsByName.get(c))); });
        /** @type {?} */
        var stickyStartStates = columnDefs.map(function (columnDef) { return columnDef.sticky; });
        /** @type {?} */
        var stickyEndStates = columnDefs.map(function (columnDef) { return columnDef.stickyEnd; });
        this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
    };
    /** Gets the list of rows that have been rendered in the row outlet. */
    /**
     * Gets the list of rows that have been rendered in the row outlet.
     * @param {?} rowOutlet
     * @return {?}
     */
    CdkTable.prototype._getRenderedRows = /**
     * Gets the list of rows that have been rendered in the row outlet.
     * @param {?} rowOutlet
     * @return {?}
     */
    function (rowOutlet) {
        /** @type {?} */
        var renderedRows = [];
        for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (((rowOutlet.viewContainer.get(i)))));
            renderedRows.push(viewRef.rootNodes[0]);
        }
        return renderedRows;
    };
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     */
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     * @param {?} data
     * @param {?} dataIndex
     * @return {?}
     */
    CdkTable.prototype._getRowDefs = /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     * @param {?} data
     * @param {?} dataIndex
     * @return {?}
     */
    function (data, dataIndex) {
        if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
        }
        /** @type {?} */
        var rowDefs = [];
        if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter(function (def) { return !def.when || def.when(dataIndex, data); });
        }
        else {
            /** @type {?} */
            var rowDef = this._rowDefs.find(function (def) { return def.when && def.when(dataIndex, data); }) || this._defaultRowDef;
            if (rowDef) {
                rowDefs.push(rowDef);
            }
        }
        if (!rowDefs.length) {
            throw getTableMissingMatchingRowDefError(data);
        }
        return rowDefs;
    };
    /**
     * Create the embedded view for the data row template and place it in the correct index location
     * within the data row view container.
     * @param {?} renderRow
     * @param {?} renderIndex
     * @return {?}
     */
    CdkTable.prototype._insertRow = /**
     * Create the embedded view for the data row template and place it in the correct index location
     * within the data row view container.
     * @param {?} renderRow
     * @param {?} renderIndex
     * @return {?}
     */
    function (renderRow, renderIndex) {
        /** @type {?} */
        var rowDef = renderRow.rowDef;
        /** @type {?} */
        var context = { $implicit: renderRow.data };
        this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
    };
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     * @param {?} outlet
     * @param {?} rowDef
     * @param {?} index
     * @param {?=} context
     * @return {?}
     */
    CdkTable.prototype._renderRow = /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     * @param {?} outlet
     * @param {?} rowDef
     * @param {?} index
     * @param {?=} context
     * @return {?}
     */
    function (outlet, rowDef, index, context) {
        if (context === void 0) { context = {}; }
        // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
        outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
        for (var _a = 0, _b = this._getCellTemplates(rowDef); _a < _b.length; _a++) {
            var cellTemplate = _b[_a];
            if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
            }
        }
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     * @return {?}
     */
    CdkTable.prototype._updateRowIndexContext = /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var viewContainer = this._rowOutlet.viewContainer;
        for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            var viewRef = /** @type {?} */ (viewContainer.get(renderIndex));
            /** @type {?} */
            var context = /** @type {?} */ (viewRef.context);
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
            }
            else {
                context.index = this._renderRows[renderIndex].dataIndex;
            }
        }
    };
    /**
     * Gets the column definitions for the provided row def.
     * @param {?} rowDef
     * @return {?}
     */
    CdkTable.prototype._getCellTemplates = /**
     * Gets the column definitions for the provided row def.
     * @param {?} rowDef
     * @return {?}
     */
    function (rowDef) {
        var _this = this;
        if (!rowDef || !rowDef.columns) {
            return [];
        }
        return Array.from(rowDef.columns, function (columnId) {
            /** @type {?} */
            var column = _this._columnDefsByName.get(columnId);
            if (!column) {
                throw getTableUnknownColumnError(columnId);
            }
            return rowDef.extractCellTemplate(column);
        });
    };
    /**
     * Adds native table sections (e.g. tbody) and moves the row outlets into them.
     * @return {?}
     */
    CdkTable.prototype._applyNativeTableSections = /**
     * Adds native table sections (e.g. tbody) and moves the row outlets into them.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sections = [
            { tag: 'thead', outlet: this._headerRowOutlet },
            { tag: 'tbody', outlet: this._rowOutlet },
            { tag: 'tfoot', outlet: this._footerRowOutlet },
        ];
        for (var _a = 0, sections_1 = sections; _a < sections_1.length; _a++) {
            var section = sections_1[_a];
            /** @type {?} */
            var documentRef = this._document || document;
            /** @type {?} */
            var element = documentRef.createElement(section.tag);
            element.appendChild(section.outlet.elementRef.nativeElement);
            this._elementRef.nativeElement.appendChild(element);
        }
    };
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     * @return {?}
     */
    CdkTable.prototype._forceRenderDataRows = /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     * @return {?}
     */
    function () {
        this._dataDiffer.diff([]);
        this._rowOutlet.viewContainer.clear();
        this.renderRows();
        this.updateStickyColumnStyles();
    };
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     * @return {?}
     */
    CdkTable.prototype._checkStickyStates = /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stickyCheckReducer = function (acc, d) {
            return acc || d.hasStickyChanged();
        };
        // Note that the check needs to occur for every definition since it notifies the definition
        // that it can reset its dirty state. Using another operator like `some` may short-circuit
        // remaining definitions and leave them in an unchecked state.
        if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
        }
        if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
        }
        if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this.updateStickyColumnStyles();
        }
    };
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     * @return {?}
     */
    CdkTable.prototype._setupStickyStyler = /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var direction = this._dir ? this._dir.value : 'ltr';
        this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, 
        // @breaking-change 8.0.0 remove the null check for `this._platform`.
        this.stickyCssClass, direction, this._platform ? this._platform.isBrowser : true);
        (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._onDestroy))
            .subscribe(function (value) {
            _this._stickyStyler.direction = value;
            _this.updateStickyColumnStyles();
        });
    };
    CdkTable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: 'cdk-table, table[cdk-table]',
                    exportAs: 'cdkTable',
                    template: CDK_TABLE_TEMPLATE,
                    host: {
                        'class': 'cdk-table',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CdkTable.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"], args: ['role',] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
    ]; };
    CdkTable.propDecorators = {
        trackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        multiTemplateDataRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        _rowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [DataRowOutlet,] }],
        _headerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [HeaderRowOutlet,] }],
        _footerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [FooterRowOutlet,] }],
        _contentColumnDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [CdkColumnDef,] }],
        _contentRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [CdkRowDef,] }],
        _contentHeaderRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [CdkHeaderRowDef,] }],
        _contentFooterRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [CdkFooterRowDef,] }]
    };
    return CdkTable;
}());
/**
 * Utility function that gets a merged list of the entries in a QueryList and values of a Set.
 * @template T
 * @param {?} queryList
 * @param {?} set
 * @return {?}
 */
function mergeQueryListAndSet(queryList, set) {
    return queryList.toArray().concat(Array.from(set));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var EXPORTED_DECLARATIONS = [
    CdkTable,
    CdkRowDef,
    CdkCellDef,
    CdkCellOutlet,
    CdkHeaderCellDef,
    CdkFooterCellDef,
    CdkColumnDef,
    CdkCell,
    CdkRow,
    CdkHeaderCell,
    CdkFooterCell,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkFooterRow,
    CdkFooterRowDef,
    DataRowOutlet,
    HeaderRowOutlet,
    FooterRowOutlet,
];
var CdkTableModule = /** @class */ (function () {
    function CdkTableModule() {
    }
    CdkTableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                    exports: EXPORTED_DECLARATIONS,
                    declarations: EXPORTED_DECLARATIONS
                },] },
    ];
    return CdkTableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=table.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/dialog.es5.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/dialog.es5.js ***!
  \***********************************************************/
/*! exports provided: MatDialogModule, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MatDialog, throwMatDialogContentAlreadyAttachedError, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogConfig, MatDialogRef, matDialogAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule", function() { return MatDialogModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function() { return MAT_DIALOG_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function() { return MAT_DIALOG_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function() { return MAT_DIALOG_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialog", function() { return MatDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function() { return throwMatDialogContentAlreadyAttachedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function() { return MatDialogContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogClose", function() { return MatDialogClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function() { return MatDialogTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContent", function() { return MatDialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogActions", function() { return MatDialogActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function() { return MatDialogConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogRef", function() { return MatDialogRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function() { return matDialogAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Configuration for opening a modal dialog with the MatDialog service.
 * @template D
 */
var  /**
 * Configuration for opening a modal dialog with the MatDialog service.
 * @template D
 */
MatDialogConfig = /** @class */ (function () {
    function MatDialogConfig() {
        /**
         * The ARIA role of the dialog element.
         */
        this.role = 'dialog';
        /**
         * Custom class for the overlay pane.
         */
        this.panelClass = '';
        /**
         * Whether the dialog has a backdrop.
         */
        this.hasBackdrop = true;
        /**
         * Custom class for the backdrop,
         */
        this.backdropClass = '';
        /**
         * Whether the user can use escape or clicking on the backdrop to close the modal.
         */
        this.disableClose = false;
        /**
         * Width of the dialog.
         */
        this.width = '';
        /**
         * Height of the dialog.
         */
        this.height = '';
        /**
         * Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw
         */
        this.maxWidth = '80vw';
        /**
         * Data being injected into the child component.
         */
        this.data = null;
        /**
         * ID of the element that describes the dialog.
         */
        this.ariaDescribedBy = null;
        /**
         * Aria label to assign to the dialog element
         */
        this.ariaLabel = null;
        /**
         * Whether the dialog should focus the first focusable element on open.
         */
        this.autoFocus = true;
        /**
         * Whether the dialog should restore focus to the
         * previously-focused element, after it's closed.
         */
        this.restoreFocus = true;
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.closeOnNavigation = true;
    }
    return MatDialogConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var animationBody = [
    // Note: The `enter` animation transitions to `transform: none`, because for some reason
    // specifying the transform explicitly, causes IE both to blur the dialog content and
    // decimate the animation performance. Leaving it as `none` solves both issues.
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0.7)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'none' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'none', opacity: 1 }))),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))),
];
/** *
 * Animations used by MatDialog.
 * \@docs-private
  @type {?} */
var matDialogAnimations = {
    /** Animation that is applied on the dialog container by defalt. */
    dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('dialogContainer', animationBody),
    /** @deprecated @breaking-change 8.0.0 Use `matDialogAnimations.dialogContainer` instead. */
    slideDialog: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideDialog', animationBody)
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Throws an exception for the case when a ComponentPortal is
 * attached to a DomPortalOutlet without an origin.
 * \@docs-private
 * @return {?}
 */
function throwMatDialogContentAlreadyAttachedError() {
    throw Error('Attempting to attach dialog content after content is already attached');
}
/**
 * Internal component that wraps user-provided dialog content.
 * Animation is based on https://material.io/guidelines/motion/choreography.html.
 * \@docs-private
 */
var MatDialogContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MatDialogContainer, _super);
    function MatDialogContainer(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, _config) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._focusTrapFactory = _focusTrapFactory;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._document = _document;
        _this._config = _config;
        /**
         * Element that was focused before the dialog was opened. Save this to restore upon close.
         */
        _this._elementFocusedBeforeDialogWasOpened = null;
        /**
         * State of the dialog animation.
         */
        _this._state = 'enter';
        /**
         * Emits when an animation state changes.
         */
        _this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * ID of the element that should be considered as the dialog's label.
         */
        _this._ariaLabelledBy = null;
        return _this;
    }
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @template T
     * @param {?} portal Portal to be attached as the dialog content.
     * @return {?}
     */
    MatDialogContainer.prototype.attachComponentPortal = /**
     * Attach a ComponentPortal as content to this dialog container.
     * @template T
     * @param {?} portal Portal to be attached as the dialog content.
     * @return {?}
     */
    function (portal) {
        if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
        }
        this._savePreviouslyFocusedElement();
        return this._portalOutlet.attachComponentPortal(portal);
    };
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @template C
     * @param {?} portal Portal to be attached as the dialog content.
     * @return {?}
     */
    MatDialogContainer.prototype.attachTemplatePortal = /**
     * Attach a TemplatePortal as content to this dialog container.
     * @template C
     * @param {?} portal Portal to be attached as the dialog content.
     * @return {?}
     */
    function (portal) {
        if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
        }
        this._savePreviouslyFocusedElement();
        return this._portalOutlet.attachTemplatePortal(portal);
    };
    /**
     * Moves the focus inside the focus trap.
     * @return {?}
     */
    MatDialogContainer.prototype._trapFocus = /**
     * Moves the focus inside the focus trap.
     * @return {?}
     */
    function () {
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        }
        // If were to attempt to focus immediately, then the content of the dialog would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        if (this._config.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
        }
    };
    /**
     * Restores focus to the element that was focused before the dialog opened.
     * @return {?}
     */
    MatDialogContainer.prototype._restoreFocus = /**
     * Restores focus to the element that was focused before the dialog opened.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var toFocus = this._elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this._config.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    };
    /**
     * Saves a reference to the element that was focused before the dialog was opened.
     * @return {?}
     */
    MatDialogContainer.prototype._savePreviouslyFocusedElement = /**
     * Saves a reference to the element that was focused before the dialog was opened.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = /** @type {?} */ (this._document.activeElement);
            // Note that there is no focus method when rendering on the server.
            if (this._elementRef.nativeElement.focus) {
                // Move focus onto the dialog immediately in order to prevent the user from accidentally
                // opening multiple dialogs at the same time. Needs to be async, because the element
                // may not be focusable immediately.
                Promise.resolve().then(function () { return _this._elementRef.nativeElement.focus(); });
            }
        }
    };
    /** Callback, invoked whenever an animation on the host completes. */
    /**
     * Callback, invoked whenever an animation on the host completes.
     * @param {?} event
     * @return {?}
     */
    MatDialogContainer.prototype._onAnimationDone = /**
     * Callback, invoked whenever an animation on the host completes.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'enter') {
            this._trapFocus();
        }
        else if (event.toState === 'exit') {
            this._restoreFocus();
        }
        this._animationStateChanged.emit(event);
    };
    /** Callback, invoked when an animation on the host starts. */
    /**
     * Callback, invoked when an animation on the host starts.
     * @param {?} event
     * @return {?}
     */
    MatDialogContainer.prototype._onAnimationStart = /**
     * Callback, invoked when an animation on the host starts.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._animationStateChanged.emit(event);
    };
    /** Starts the dialog exit animation. */
    /**
     * Starts the dialog exit animation.
     * @return {?}
     */
    MatDialogContainer.prototype._startExitAnimation = /**
     * Starts the dialog exit animation.
     * @return {?}
     */
    function () {
        this._state = 'exit';
        // Mark the container for check so it can react if the
        // view container is using OnPush change detection.
        this._changeDetectorRef.markForCheck();
    };
    MatDialogContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: 'mat-dialog-container',
                    template: "<ng-template cdkPortalOutlet></ng-template>",
                    styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}@media screen and (-ms-high-contrast:active){.mat-dialog-container{outline:solid 1px}}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button+.mat-button,.mat-dialog-actions .mat-button+.mat-raised-button,.mat-dialog-actions .mat-raised-button+.mat-button,.mat-dialog-actions .mat-raised-button+.mat-raised-button{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button+.mat-button,[dir=rtl] .mat-dialog-actions .mat-button+.mat-raised-button,[dir=rtl] .mat-dialog-actions .mat-raised-button+.mat-button,[dir=rtl] .mat-dialog-actions .mat-raised-button+.mat-raised-button{margin-left:0;margin-right:8px}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                    // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
                    animations: [matDialogAnimations.dialogContainer],
                    host: {
                        'class': 'mat-dialog-container',
                        'tabindex': '-1',
                        'aria-modal': 'true',
                        '[attr.id]': '_id',
                        '[attr.role]': '_config.role',
                        '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
                        '[attr.aria-label]': '_config.ariaLabel',
                        '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
                        '[@dialogContainer]': '_state',
                        '(@dialogContainer.start)': '_onAnimationStart($event)',
                        '(@dialogContainer.done)': '_onAnimationDone($event)',
                    },
                },] },
    ];
    /** @nocollapse */
    MatDialogContainer.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: MatDialogConfig }
    ]; };
    MatDialogContainer.propDecorators = {
        _portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"],] }]
    };
    return MatDialogContainer;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["BasePortalOutlet"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var uniqueId = 0;
/**
 * Reference to a dialog opened via the MatDialog service.
 * @template T, R
 */
var  /**
 * Reference to a dialog opened via the MatDialog service.
 * @template T, R
 */
MatDialogRef = /** @class */ (function () {
    function MatDialogRef(_overlayRef, _containerInstance, 
    // @breaking-change 8.0.0 `_location` parameter to be removed.
    _location, id) {
        if (id === void 0) { id = "mat-dialog-" + uniqueId++; }
        var _this = this;
        this._overlayRef = _overlayRef;
        this._containerInstance = _containerInstance;
        this.id = id;
        /**
         * Whether the user is allowed to close the dialog.
         */
        this.disableClose = this._containerInstance._config.disableClose;
        /**
         * Subject for notifying the user that the dialog has finished opening.
         */
        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has finished closing.
         */
        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has started closing.
         */
        this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        // Pass the id along to the container.
        _containerInstance._id = id;
        // Emit when opening animation completes
        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event.phaseName === 'done' && event.toState === 'enter'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(function () {
            _this._afterOpened.next();
            _this._afterOpened.complete();
        });
        // Dispose overlay when closing animation is complete
        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event.phaseName === 'done' && event.toState === 'exit'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function () { return _this._overlayRef.dispose(); });
        _overlayRef.detachments().subscribe(function () {
            _this._beforeClosed.next(_this._result);
            _this._beforeClosed.complete();
            _this._afterClosed.next(_this._result);
            _this._afterClosed.complete();
            _this.componentInstance = /** @type {?} */ ((null));
            _this._overlayRef.dispose();
        });
        _overlayRef.keydownEvents()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ESCAPE"] && !_this.disableClose; }))
            .subscribe(function () { return _this.close(); });
    }
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    /**
     * Close the dialog.
     * @param {?=} dialogResult Optional result to return to the dialog opener.
     * @return {?}
     */
    MatDialogRef.prototype.close = /**
     * Close the dialog.
     * @param {?=} dialogResult Optional result to return to the dialog opener.
     * @return {?}
     */
    function (dialogResult) {
        var _this = this;
        this._result = dialogResult;
        // Transition the backdrop in parallel to the dialog.
        this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event.phaseName === 'start'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(function () {
            _this._beforeClosed.next(dialogResult);
            _this._beforeClosed.complete();
            _this._overlayRef.detachBackdrop();
        });
        this._containerInstance._startExitAnimation();
    };
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     */
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     * @return {?}
     */
    MatDialogRef.prototype.afterOpened = /**
     * Gets an observable that is notified when the dialog is finished opening.
     * @return {?}
     */
    function () {
        return this._afterOpened.asObservable();
    };
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     */
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     * @return {?}
     */
    MatDialogRef.prototype.afterClosed = /**
     * Gets an observable that is notified when the dialog is finished closing.
     * @return {?}
     */
    function () {
        return this._afterClosed.asObservable();
    };
    /**
     * Gets an observable that is notified when the dialog has started closing.
     */
    /**
     * Gets an observable that is notified when the dialog has started closing.
     * @return {?}
     */
    MatDialogRef.prototype.beforeClosed = /**
     * Gets an observable that is notified when the dialog has started closing.
     * @return {?}
     */
    function () {
        return this._beforeClosed.asObservable();
    };
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     * @return {?}
     */
    MatDialogRef.prototype.backdropClick = /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     * @return {?}
     */
    function () {
        return this._overlayRef.backdropClick();
    };
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     * @return {?}
     */
    MatDialogRef.prototype.keydownEvents = /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     * @return {?}
     */
    function () {
        return this._overlayRef.keydownEvents();
    };
    /**
     * Updates the dialog's position.
     * @param position New dialog position.
     */
    /**
     * Updates the dialog's position.
     * @param {?=} position New dialog position.
     * @return {?}
     */
    MatDialogRef.prototype.updatePosition = /**
     * Updates the dialog's position.
     * @param {?=} position New dialog position.
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var strategy = this._getPositionStrategy();
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        this._overlayRef.updatePosition();
        return this;
    };
    /**
     * Updates the dialog's width and height.
     * @param width New width of the dialog.
     * @param height New height of the dialog.
     */
    /**
     * Updates the dialog's width and height.
     * @param {?=} width New width of the dialog.
     * @param {?=} height New height of the dialog.
     * @return {?}
     */
    MatDialogRef.prototype.updateSize = /**
     * Updates the dialog's width and height.
     * @param {?=} width New width of the dialog.
     * @param {?=} height New height of the dialog.
     * @return {?}
     */
    function (width, height) {
        if (width === void 0) { width = ''; }
        if (height === void 0) { height = ''; }
        this._getPositionStrategy().width(width).height(height);
        this._overlayRef.updatePosition();
        return this;
    };
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     * @deprecated Use `afterOpened` instead.
     * @breaking-change 8.0.0
     */
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     * @deprecated Use `afterOpened` instead.
     * \@breaking-change 8.0.0
     * @return {?}
     */
    MatDialogRef.prototype.afterOpen = /**
     * Gets an observable that is notified when the dialog is finished opening.
     * @deprecated Use `afterOpened` instead.
     * \@breaking-change 8.0.0
     * @return {?}
     */
    function () {
        return this.afterOpened();
    };
    /**
     * Gets an observable that is notified when the dialog has started closing.
     * @deprecated Use `beforeClosed` instead.
     * @breaking-change 8.0.0
     */
    /**
     * Gets an observable that is notified when the dialog has started closing.
     * @deprecated Use `beforeClosed` instead.
     * \@breaking-change 8.0.0
     * @return {?}
     */
    MatDialogRef.prototype.beforeClose = /**
     * Gets an observable that is notified when the dialog has started closing.
     * @deprecated Use `beforeClosed` instead.
     * \@breaking-change 8.0.0
     * @return {?}
     */
    function () {
        return this.beforeClosed();
    };
    /**
     * Fetches the position strategy object from the overlay ref.
     * @return {?}
     */
    MatDialogRef.prototype._getPositionStrategy = /**
     * Fetches the position strategy object from the overlay ref.
     * @return {?}
     */
    function () {
        return /** @type {?} */ (this._overlayRef.getConfig().positionStrategy);
    };
    return MatDialogRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Injection token that can be used to access the data that was passed in to a dialog.
  @type {?} */
var MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatDialogData');
/** *
 * Injection token that can be used to specify default dialog options.
  @type {?} */
var MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-default-options');
/** *
 * Injection token that determines the scroll handling while the dialog is open.
  @type {?} */
var MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.block(); };
}
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.block(); };
}
/** *
 * \@docs-private
  @type {?} */
var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_DIALOG_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]],
    useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Service to open Material Design modal dialogs.
 */
var MatDialog = /** @class */ (function () {
    function MatDialog(_overlay, _injector, _location, _defaultOptions, scrollStrategy, _parentDialog, _overlayContainer) {
        var _this = this;
        this._overlay = _overlay;
        this._injector = _injector;
        this._location = _location;
        this._defaultOptions = _defaultOptions;
        this._parentDialog = _parentDialog;
        this._overlayContainer = _overlayContainer;
        this._openDialogsAtThisLevel = [];
        this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._ariaHiddenElements = new Map();
        /**
         * Stream that emits when all open dialog have finished closing.
         * Will emit on subscribe if there are no open dialogs to begin with.
         */
        this.afterAllClosed = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["defer"])(function () { return _this.openDialogs.length ?
            _this._afterAllClosed :
            _this._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(undefined)); });
        this._scrollStrategy = scrollStrategy;
    }
    Object.defineProperty(MatDialog.prototype, "openDialogs", {
        /** Keeps track of the currently-open dialogs. */
        get: /**
         * Keeps track of the currently-open dialogs.
         * @return {?}
         */
        function () {
            return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDialog.prototype, "afterOpened", {
        /** Stream that emits when a dialog has been opened. */
        get: /**
         * Stream that emits when a dialog has been opened.
         * @return {?}
         */
        function () {
            return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDialog.prototype, "afterOpen", {
        /**
         * Stream that emits when a dialog has been opened.
         * @deprecated Use `afterOpened` instead.
         * @breaking-change 8.0.0
         */
        get: /**
         * Stream that emits when a dialog has been opened.
         * @deprecated Use `afterOpened` instead.
         * \@breaking-change 8.0.0
         * @return {?}
         */
        function () {
            return this.afterOpened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDialog.prototype, "_afterAllClosed", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var parent = this._parentDialog;
            return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens a modal dialog containing the given component.
     * @param componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param config Extra configuration options.
     * @returns Reference to the newly-opened dialog.
     */
    /**
     * Opens a modal dialog containing the given component.
     * @template T, D, R
     * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param {?=} config Extra configuration options.
     * @return {?} Reference to the newly-opened dialog.
     */
    MatDialog.prototype.open = /**
     * Opens a modal dialog containing the given component.
     * @template T, D, R
     * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param {?=} config Extra configuration options.
     * @return {?} Reference to the newly-opened dialog.
     */
    function (componentOrTemplateRef, config) {
        var _this = this;
        config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());
        if (config.id && this.getDialogById(config.id)) {
            throw Error("Dialog with id \"" + config.id + "\" exists already. The dialog id must be unique.");
        }
        /** @type {?} */
        var overlayRef = this._createOverlay(config);
        /** @type {?} */
        var dialogContainer = this._attachDialogContainer(overlayRef, config);
        /** @type {?} */
        var dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
        // If this is the first dialog that we're opening, hide all the non-overlay content.
        if (!this.openDialogs.length) {
            this._hideNonDialogContentFromAssistiveTechnology();
        }
        this.openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe(function () { return _this._removeOpenDialog(dialogRef); });
        this.afterOpened.next(dialogRef);
        return dialogRef;
    };
    /**
     * Closes all of the currently-open dialogs.
     */
    /**
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    MatDialog.prototype.closeAll = /**
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    function () {
        this._closeDialogs(this.openDialogs);
    };
    /**
     * Finds an open dialog by its id.
     * @param id ID to use when looking up the dialog.
     */
    /**
     * Finds an open dialog by its id.
     * @param {?} id ID to use when looking up the dialog.
     * @return {?}
     */
    MatDialog.prototype.getDialogById = /**
     * Finds an open dialog by its id.
     * @param {?} id ID to use when looking up the dialog.
     * @return {?}
     */
    function (id) {
        return this.openDialogs.find(function (dialog) { return dialog.id === id; });
    };
    /**
     * @return {?}
     */
    MatDialog.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // Only close the dialogs at this level on destroy
        // since the parent service may still be active.
        this._closeDialogs(this._openDialogsAtThisLevel);
    };
    /**
     * Creates the overlay into which the dialog will be loaded.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to the OverlayRef for the created overlay.
     */
    MatDialog.prototype._createOverlay = /**
     * Creates the overlay into which the dialog will be loaded.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to the OverlayRef for the created overlay.
     */
    function (config) {
        /** @type {?} */
        var overlayConfig = this._getOverlayConfig(config);
        return this._overlay.create(overlayConfig);
    };
    /**
     * Creates an overlay config from a dialog config.
     * @param {?} dialogConfig The dialog configuration.
     * @return {?} The overlay configuration.
     */
    MatDialog.prototype._getOverlayConfig = /**
     * Creates an overlay config from a dialog config.
     * @param {?} dialogConfig The dialog configuration.
     * @return {?} The overlay configuration.
     */
    function (dialogConfig) {
        /** @type {?} */
        var state$$1 = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayConfig"]({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
            panelClass: dialogConfig.panelClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            direction: dialogConfig.direction,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight,
            disposeOnNavigation: dialogConfig.closeOnNavigation
        });
        if (dialogConfig.backdropClass) {
            state$$1.backdropClass = dialogConfig.backdropClass;
        }
        return state$$1;
    };
    /**
     * Attaches an MatDialogContainer to a dialog's already-created overlay.
     * @param {?} overlay Reference to the dialog's underlying overlay.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to a ComponentRef for the attached container.
     */
    MatDialog.prototype._attachDialogContainer = /**
     * Attaches an MatDialogContainer to a dialog's already-created overlay.
     * @param {?} overlay Reference to the dialog's underlying overlay.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to a ComponentRef for the attached container.
     */
    function (overlay, config) {
        /** @type {?} */
        var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        /** @type {?} */
        var injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalInjector"](userInjector || this._injector, new WeakMap([
            [MatDialogConfig, config]
        ]));
        /** @type {?} */
        var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](MatDialogContainer, config.viewContainerRef, injector);
        /** @type {?} */
        var containerRef = overlay.attach(containerPortal);
        return containerRef.instance;
    };
    /**
     * Attaches the user-provided component to the already-created MatDialogContainer.
     * @template T, R
     * @param {?} componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param {?} dialogContainer Reference to the wrapping MatDialogContainer.
     * @param {?} overlayRef Reference to the overlay in which the dialog resides.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to the MatDialogRef that should be returned to the user.
     */
    MatDialog.prototype._attachDialogContent = /**
     * Attaches the user-provided component to the already-created MatDialogContainer.
     * @template T, R
     * @param {?} componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param {?} dialogContainer Reference to the wrapping MatDialogContainer.
     * @param {?} overlayRef Reference to the overlay in which the dialog resides.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to the MatDialogRef that should be returned to the user.
     */
    function (componentOrTemplateRef, dialogContainer, overlayRef, config) {
        /** @type {?} */
        var dialogRef = new MatDialogRef(overlayRef, dialogContainer, this._location, config.id);
        // When the dialog backdrop is clicked, we want to close it.
        if (config.hasBackdrop) {
            overlayRef.backdropClick().subscribe(function () {
                if (!dialogRef.disableClose) {
                    dialogRef.close();
                }
            });
        }
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
            dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["TemplatePortal"](componentOrTemplateRef, /** @type {?} */ ((null)), /** @type {?} */ ({ $implicit: config.data, dialogRef: dialogRef })));
        }
        else {
            /** @type {?} */
            var injector = this._createInjector(config, dialogRef, dialogContainer);
            /** @type {?} */
            var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](componentOrTemplateRef, undefined, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        dialogRef
            .updateSize(config.width, config.height)
            .updatePosition(config.position);
        return dialogRef;
    };
    /**
     * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
     * of a dialog to close itself and, optionally, to return a value.
     * @template T
     * @param {?} config Config object that is used to construct the dialog.
     * @param {?} dialogRef Reference to the dialog.
     * @param {?} dialogContainer
     * @return {?} The custom injector that can be used inside the dialog.
     */
    MatDialog.prototype._createInjector = /**
     * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
     * of a dialog to close itself and, optionally, to return a value.
     * @template T
     * @param {?} config Config object that is used to construct the dialog.
     * @param {?} dialogRef Reference to the dialog.
     * @param {?} dialogContainer
     * @return {?} The custom injector that can be used inside the dialog.
     */
    function (config, dialogRef, dialogContainer) {
        /** @type {?} */
        var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        /** @type {?} */
        var injectionTokens = new WeakMap([
            [MatDialogContainer, dialogContainer],
            [MAT_DIALOG_DATA, config.data],
            [MatDialogRef, dialogRef]
        ]);
        if (config.direction &&
            (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], null))) {
            injectionTokens.set(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], {
                value: config.direction,
                change: Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])()
            });
        }
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalInjector"](userInjector || this._injector, injectionTokens);
    };
    /**
     * Removes a dialog from the array of open dialogs.
     * @param {?} dialogRef Dialog to be removed.
     * @return {?}
     */
    MatDialog.prototype._removeOpenDialog = /**
     * Removes a dialog from the array of open dialogs.
     * @param {?} dialogRef Dialog to be removed.
     * @return {?}
     */
    function (dialogRef) {
        /** @type {?} */
        var index = this.openDialogs.indexOf(dialogRef);
        if (index > -1) {
            this.openDialogs.splice(index, 1);
            // If all the dialogs were closed, remove/restore the `aria-hidden`
            // to a the siblings and emit to the `afterAllClosed` stream.
            if (!this.openDialogs.length) {
                this._ariaHiddenElements.forEach(function (previousValue, element) {
                    if (previousValue) {
                        element.setAttribute('aria-hidden', previousValue);
                    }
                    else {
                        element.removeAttribute('aria-hidden');
                    }
                });
                this._ariaHiddenElements.clear();
                this._afterAllClosed.next();
            }
        }
    };
    /**
     * Hides all of the content that isn't an overlay from assistive technology.
     * @return {?}
     */
    MatDialog.prototype._hideNonDialogContentFromAssistiveTechnology = /**
     * Hides all of the content that isn't an overlay from assistive technology.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var overlayContainer = this._overlayContainer.getContainerElement();
        // Ensure that the overlay container is attached to the DOM.
        if (overlayContainer.parentElement) {
            /** @type {?} */
            var siblings = overlayContainer.parentElement.children;
            for (var i = siblings.length - 1; i > -1; i--) {
                /** @type {?} */
                var sibling = siblings[i];
                if (sibling !== overlayContainer &&
                    sibling.nodeName !== 'SCRIPT' &&
                    sibling.nodeName !== 'STYLE' &&
                    !sibling.hasAttribute('aria-live')) {
                    this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
                    sibling.setAttribute('aria-hidden', 'true');
                }
            }
        }
    };
    /**
     * Closes all of the dialogs in an array.
     * @param {?} dialogs
     * @return {?}
     */
    MatDialog.prototype._closeDialogs = /**
     * Closes all of the dialogs in an array.
     * @param {?} dialogs
     * @return {?}
     */
    function (dialogs) {
        /** @type {?} */
        var i = dialogs.length;
        while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            dialogs[i].close();
        }
    };
    MatDialog.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    /** @nocollapse */
    MatDialog.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
        { type: MatDialogConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_DIALOG_DEFAULT_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_DIALOG_SCROLL_STRATEGY,] }] },
        { type: MatDialog, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"] }] },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayContainer"] }
    ]; };
    return MatDialog;
}());
/**
 * Applies default options to the dialog config.
 * @param {?=} config Config to be modified.
 * @param {?=} defaultOptions Default options provided.
 * @return {?} The new configuration object.
 */
function _applyConfigDefaults(config, defaultOptions) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, defaultOptions, config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Counter used to generate unique IDs for dialog elements.
  @type {?} */
var dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
var MatDialogClose = /** @class */ (function () {
    function MatDialogClose(dialogRef, _elementRef, _dialog) {
        this.dialogRef = dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        /**
         * Screenreader label for the button.
         */
        this.ariaLabel = 'Close dialog';
    }
    /**
     * @return {?}
     */
    MatDialogClose.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.dialogRef) {
            // When this directive is included in a dialog via TemplateRef (rather than being
            // in a Component), the DialogRef isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the DialogRef by
            // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
            // be resolved at constructor time.
            this.dialogRef = /** @type {?} */ ((getClosestDialog(this._elementRef, this._dialog.openDialogs)));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatDialogClose.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    };
    MatDialogClose.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: "button[mat-dialog-close], button[matDialogClose]",
                    exportAs: 'matDialogClose',
                    host: {
                        '(click)': 'dialogRef.close(dialogResult)',
                        '[attr.aria-label]': 'ariaLabel',
                        'type': 'button',
                    }
                },] },
    ];
    /** @nocollapse */
    MatDialogClose.ctorParameters = function () { return [
        { type: MatDialogRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: MatDialog }
    ]; };
    MatDialogClose.propDecorators = {
        ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-label',] }],
        dialogResult: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mat-dialog-close',] }],
        _matDialogClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matDialogClose',] }]
    };
    return MatDialogClose;
}());
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
var MatDialogTitle = /** @class */ (function () {
    function MatDialogTitle(_dialogRef, _elementRef, _dialog) {
        this._dialogRef = _dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        this.id = "mat-dialog-title-" + dialogElementUid++;
    }
    /**
     * @return {?}
     */
    MatDialogTitle.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._dialogRef) {
            this._dialogRef = /** @type {?} */ ((getClosestDialog(this._elementRef, this._dialog.openDialogs)));
        }
        if (this._dialogRef) {
            Promise.resolve().then(function () {
                /** @type {?} */
                var container = _this._dialogRef._containerInstance;
                if (container && !container._ariaLabelledBy) {
                    container._ariaLabelledBy = _this.id;
                }
            });
        }
    };
    MatDialogTitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[mat-dialog-title], [matDialogTitle]',
                    exportAs: 'matDialogTitle',
                    host: {
                        'class': 'mat-dialog-title',
                        '[id]': 'id',
                    },
                },] },
    ];
    /** @nocollapse */
    MatDialogTitle.ctorParameters = function () { return [
        { type: MatDialogRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: MatDialog }
    ]; };
    MatDialogTitle.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return MatDialogTitle;
}());
/**
 * Scrollable content container of a dialog.
 */
var MatDialogContent = /** @class */ (function () {
    function MatDialogContent() {
    }
    MatDialogContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
                    host: { 'class': 'mat-dialog-content' }
                },] },
    ];
    return MatDialogContent;
}());
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
var MatDialogActions = /** @class */ (function () {
    function MatDialogActions() {
    }
    MatDialogActions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
                    host: { 'class': 'mat-dialog-actions' }
                },] },
    ];
    return MatDialogActions;
}());
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param {?} element Element relative to which to look for a dialog.
 * @param {?} openDialogs References to the currently-open dialogs.
 * @return {?}
 */
function getClosestDialog(element, openDialogs) {
    /** @type {?} */
    var parent = element.nativeElement.parentElement;
    while (parent && !parent.classList.contains('mat-dialog-container')) {
        parent = parent.parentElement;
    }
    return parent ? openDialogs.find(function (dialog) { return dialog.id === /** @type {?} */ ((parent)).id; }) : null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatDialogModule = /** @class */ (function () {
    function MatDialogModule() {
    }
    MatDialogModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayModule"],
                        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"],
                    ],
                    exports: [
                        MatDialogContainer,
                        MatDialogClose,
                        MatDialogTitle,
                        MatDialogContent,
                        MatDialogActions,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"],
                    ],
                    declarations: [
                        MatDialogContainer,
                        MatDialogClose,
                        MatDialogTitle,
                        MatDialogActions,
                        MatDialogContent,
                    ],
                    providers: [
                        MatDialog,
                        MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
                    ],
                    entryComponents: [MatDialogContainer],
                },] },
    ];
    return MatDialogModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=dialog.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/grid-list.es5.js":
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/grid-list.es5.js ***!
  \**************************************************************/
/*! exports provided: MatGridListModule, MatGridList, MatGridTile, MatGridTileText, MatGridAvatarCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, ɵa11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridListModule", function() { return MatGridListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridList", function() { return MatGridList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTile", function() { return MatGridTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileText", function() { return MatGridTileText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function() { return MatGridAvatarCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function() { return MatGridTileHeaderCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function() { return MatGridTileFooterCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa11", function() { return MAT_GRID_LIST; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Injection token used to provide a grid list to a tile and to avoid circular imports.
 * \@docs-private
  @type {?} */
var MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatGridTile = /** @class */ (function () {
    function MatGridTile(_element, _gridList) {
        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
    }
    Object.defineProperty(MatGridTile.prototype, "rowspan", {
        /** Amount of rows that the grid tile takes up. */
        get: /**
         * Amount of rows that the grid tile takes up.
         * @return {?}
         */
        function () { return this._rowspan; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatGridTile.prototype, "colspan", {
        /** Amount of columns that the grid tile takes up. */
        get: /**
         * Amount of columns that the grid tile takes up.
         * @return {?}
         */
        function () { return this._colspan; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)); },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    MatGridTile.prototype._setStyle = /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    function (property, value) {
        (/** @type {?} */ (this._element.nativeElement.style))[property] = value;
    };
    MatGridTile.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-grid-tile',
                    exportAs: 'matGridTile',
                    host: {
                        'class': 'mat-grid-tile',
                    },
                    template: "<figure class=\"mat-figure\"><ng-content></ng-content></figure>",
                    styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatGridTile.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_GRID_LIST,] }] }
    ]; };
    MatGridTile.propDecorators = {
        rowspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        colspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return MatGridTile;
}());
var MatGridTileText = /** @class */ (function () {
    function MatGridTileText(_element) {
        this._element = _element;
    }
    /**
     * @return {?}
     */
    MatGridTileText.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
    };
    MatGridTileText.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-grid-tile-header, mat-grid-tile-footer',
                    template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content><div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div><ng-content></ng-content>",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatGridTileText.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    MatGridTileText.propDecorators = {
        _lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"],] }]
    };
    return MatGridTileText;
}());
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MatGridAvatarCssMatStyler = /** @class */ (function () {
    function MatGridAvatarCssMatStyler() {
    }
    MatGridAvatarCssMatStyler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-grid-avatar], [matGridAvatar]',
                    host: { 'class': 'mat-grid-avatar' }
                },] },
    ];
    return MatGridAvatarCssMatStyler;
}());
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MatGridTileHeaderCssMatStyler = /** @class */ (function () {
    function MatGridTileHeaderCssMatStyler() {
    }
    MatGridTileHeaderCssMatStyler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-grid-tile-header',
                    host: { 'class': 'mat-grid-tile-header' }
                },] },
    ];
    return MatGridTileHeaderCssMatStyler;
}());
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MatGridTileFooterCssMatStyler = /** @class */ (function () {
    function MatGridTileFooterCssMatStyler() {
    }
    MatGridTileFooterCssMatStyler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-grid-tile-footer',
                    host: { 'class': 'mat-grid-tile-footer' }
                },] },
    ];
    return MatGridTileFooterCssMatStyler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 *
 * \@docs-private
 */
var /**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 *
 * \@docs-private
 */
TileCoordinator = /** @class */ (function () {
    function TileCoordinator() {
        /**
         * Index at which the search for the next gap will start.
         */
        this.columnIndex = 0;
        /**
         * The current row index.
         */
        this.rowIndex = 0;
    }
    Object.defineProperty(TileCoordinator.prototype, "rowCount", {
        /** Gets the total number of rows occupied by tiles */
        get: /**
         * Gets the total number of rows occupied by tiles
         * @return {?}
         */
        function () { return this.rowIndex + 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileCoordinator.prototype, "rowspan", {
        /**
         * Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
         */
        get: /**
         * Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var lastRowMax = Math.max.apply(Math, this.tracker);
            // if any of the tiles has a rowspan that pushes it beyond the total row count,
            // add the difference to the rowcount
            return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the tile positions.
     * @param numColumns Amount of columns in the grid.
     */
    /**
     * Updates the tile positions.
     * @param {?} numColumns Amount of columns in the grid.
     * @param {?} tiles
     * @return {?}
     */
    TileCoordinator.prototype.update = /**
     * Updates the tile positions.
     * @param {?} numColumns Amount of columns in the grid.
     * @param {?} tiles
     * @return {?}
     */
    function (numColumns, tiles) {
        var _this = this;
        this.columnIndex = 0;
        this.rowIndex = 0;
        this.tracker = new Array(numColumns);
        this.tracker.fill(0, 0, this.tracker.length);
        this.positions = tiles.map(function (tile) { return _this._trackTile(tile); });
    };
    /**
     * Calculates the row and col position of a tile.
     * @param {?} tile
     * @return {?}
     */
    TileCoordinator.prototype._trackTile = /**
     * Calculates the row and col position of a tile.
     * @param {?} tile
     * @return {?}
     */
    function (tile) {
        /** @type {?} */
        var gapStartIndex = this._findMatchingGap(tile.colspan);
        // Place tile in the resulting gap.
        this._markTilePosition(gapStartIndex, tile);
        // The next time we look for a gap, the search will start at columnIndex, which should be
        // immediately after the tile that has just been placed.
        this.columnIndex = gapStartIndex + tile.colspan;
        return new TilePosition(this.rowIndex, gapStartIndex);
    };
    /**
     * Finds the next available space large enough to fit the tile.
     * @param {?} tileCols
     * @return {?}
     */
    TileCoordinator.prototype._findMatchingGap = /**
     * Finds the next available space large enough to fit the tile.
     * @param {?} tileCols
     * @return {?}
     */
    function (tileCols) {
        if (tileCols > this.tracker.length) {
            throw Error("mat-grid-list: tile with colspan " + tileCols + " is wider than " +
                ("grid with cols=\"" + this.tracker.length + "\"."));
        }
        /** @type {?} */
        var gapStartIndex = -1;
        /** @type {?} */
        var gapEndIndex = -1;
        // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
        do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
                this._nextRow();
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
            }
            gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
            // If there are no more empty spaces in this row at all, move on to the next row.
            if (gapStartIndex == -1) {
                this._nextRow();
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
            }
            gapEndIndex = this._findGapEndIndex(gapStartIndex);
            // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.
            this.columnIndex = gapStartIndex + 1;
            // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
            // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
        } while ((gapEndIndex - gapStartIndex < tileCols) || (gapEndIndex == 0));
        // If we still didn't manage to find a gap, ensure that the index is
        // at least zero so the tile doesn't get pulled out of the grid.
        return Math.max(gapStartIndex, 0);
    };
    /**
     * Move "down" to the next row.
     * @return {?}
     */
    TileCoordinator.prototype._nextRow = /**
     * Move "down" to the next row.
     * @return {?}
     */
    function () {
        this.columnIndex = 0;
        this.rowIndex++;
        // Decrement all spaces by one to reflect moving down one row.
        for (var i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
        }
    };
    /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     * @param {?} gapStartIndex
     * @return {?}
     */
    TileCoordinator.prototype._findGapEndIndex = /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     * @param {?} gapStartIndex
     * @return {?}
     */
    function (gapStartIndex) {
        for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
                return i;
            }
        }
        // The gap ends with the end of the row.
        return this.tracker.length;
    };
    /**
     * Update the tile tracker to account for the given tile in the given space.
     * @param {?} start
     * @param {?} tile
     * @return {?}
     */
    TileCoordinator.prototype._markTilePosition = /**
     * Update the tile tracker to account for the given tile in the given space.
     * @param {?} start
     * @param {?} tile
     * @return {?}
     */
    function (start, tile) {
        for (var i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
        }
    };
    return TileCoordinator;
}());
/**
 * Simple data structure for tile position (row, col).
 * \@docs-private
 */
var /**
 * Simple data structure for tile position (row, col).
 * \@docs-private
 */
TilePosition = /** @class */ (function () {
    function TilePosition(row, col) {
        this.row = row;
        this.col = col;
    }
    return TilePosition;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * RegExp that can be used to check whether a value will
 * be allowed inside a CSS `calc()` expression.
  @type {?} */
var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
/**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * \@docs-private
 * @abstract
 */
var /**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * \@docs-private
 * @abstract
 */
TileStyler = /** @class */ (function () {
    function TileStyler() {
        this._rows = 0;
        this._rowspan = 0;
    }
    /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param gutterSize Size of the grid's gutter.
     * @param tracker Instance of the TileCoordinator.
     * @param cols Amount of columns in the grid.
     * @param direction Layout direction of the grid.
     */
    /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param {?} gutterSize Size of the grid's gutter.
     * @param {?} tracker Instance of the TileCoordinator.
     * @param {?} cols Amount of columns in the grid.
     * @param {?} direction Layout direction of the grid.
     * @return {?}
     */
    TileStyler.prototype.init = /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param {?} gutterSize Size of the grid's gutter.
     * @param {?} tracker Instance of the TileCoordinator.
     * @param {?} cols Amount of columns in the grid.
     * @param {?} direction Layout direction of the grid.
     * @return {?}
     */
    function (gutterSize, tracker, cols, direction) {
        this._gutterSize = normalizeUnits(gutterSize);
        this._rows = tracker.rowCount;
        this._rowspan = tracker.rowspan;
        this._cols = cols;
        this._direction = direction;
    };
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param {?} sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param {?} gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return {?} The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    TileStyler.prototype.getBaseTileSize = /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param {?} sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param {?} gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return {?} The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    function (sizePercent, gutterFraction) {
        // Take the base size percent (as would be if evenly dividing the size between cells),
        // and then subtracting the size of one gutter. However, since there are no gutters on the
        // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
        // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
        // edge evenly among the cells).
        return "(" + sizePercent + "% - (" + this._gutterSize + " * " + gutterFraction + "))";
    };
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param offset Number of tiles that have already been rendered in the row/column.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @return Position of the tile as a CSS calc() expression.
     */
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param {?} offset Number of tiles that have already been rendered in the row/column.
     * @return {?} Position of the tile as a CSS calc() expression.
     */
    TileStyler.prototype.getTilePosition = /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param {?} offset Number of tiles that have already been rendered in the row/column.
     * @return {?} Position of the tile as a CSS calc() expression.
     */
    function (baseSize, offset) {
        // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
        // row/column (offset).
        return offset === 0 ? '0' : calc("(" + baseSize + " + " + this._gutterSize + ") * " + offset);
    };
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param span The tile's rowspan or colspan.
     * @return Size of the tile as a CSS calc() expression.
     */
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param {?} span The tile's rowspan or colspan.
     * @return {?} Size of the tile as a CSS calc() expression.
     */
    TileStyler.prototype.getTileSize = /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param {?} span The tile's rowspan or colspan.
     * @return {?} Size of the tile as a CSS calc() expression.
     */
    function (baseSize, span) {
        return "(" + baseSize + " * " + span + ") + (" + (span - 1) + " * " + this._gutterSize + ")";
    };
    /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param tile Tile to which to apply the styling.
     * @param rowIndex Index of the tile's row.
     * @param colIndex Index of the tile's column.
     */
    /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param {?} tile Tile to which to apply the styling.
     * @param {?} rowIndex Index of the tile's row.
     * @param {?} colIndex Index of the tile's column.
     * @return {?}
     */
    TileStyler.prototype.setStyle = /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param {?} tile Tile to which to apply the styling.
     * @param {?} rowIndex Index of the tile's row.
     * @param {?} colIndex Index of the tile's column.
     * @return {?}
     */
    function (tile, rowIndex, colIndex) {
        /** @type {?} */
        var percentWidthPerTile = 100 / this._cols;
        /** @type {?} */
        var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
        this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    };
    /** Sets the horizontal placement of the tile in the list. */
    /**
     * Sets the horizontal placement of the tile in the list.
     * @param {?} tile
     * @param {?} colIndex
     * @param {?} percentWidth
     * @param {?} gutterWidth
     * @return {?}
     */
    TileStyler.prototype.setColStyles = /**
     * Sets the horizontal placement of the tile in the list.
     * @param {?} tile
     * @param {?} colIndex
     * @param {?} percentWidth
     * @param {?} gutterWidth
     * @return {?}
     */
    function (tile, colIndex, percentWidth, gutterWidth) {
        /** @type {?} */
        var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
        /** @type {?} */
        var side = this._direction === 'rtl' ? 'right' : 'left';
        tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
        tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
    };
    /**
     * Calculates the total size taken up by gutters across one axis of a list.
     */
    /**
     * Calculates the total size taken up by gutters across one axis of a list.
     * @return {?}
     */
    TileStyler.prototype.getGutterSpan = /**
     * Calculates the total size taken up by gutters across one axis of a list.
     * @return {?}
     */
    function () {
        return this._gutterSize + " * (" + this._rowspan + " - 1)";
    };
    /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param tileHeight Height of the tile.
     */
    /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param {?} tileHeight Height of the tile.
     * @return {?}
     */
    TileStyler.prototype.getTileSpan = /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param {?} tileHeight Height of the tile.
     * @return {?}
     */
    function (tileHeight) {
        return this._rowspan + " * " + this.getTileSize(tileHeight, 1);
    };
    /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * @docs-private
     */
    /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * \@docs-private
     * @return {?}
     */
    TileStyler.prototype.getComputedHeight = /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * \@docs-private
     * @return {?}
     */
    function () { return null; };
    return TileStyler;
}());
/**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example `<mat-grid-list cols="3" rowHeight="100px">`
 * \@docs-private
 */
var /**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example `<mat-grid-list cols="3" rowHeight="100px">`
 * \@docs-private
 */
FixedTileStyler = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(FixedTileStyler, _super);
    function FixedTileStyler(fixedRowHeight) {
        var _this = _super.call(this) || this;
        _this.fixedRowHeight = fixedRowHeight;
        return _this;
    }
    /**
     * @param {?} gutterSize
     * @param {?} tracker
     * @param {?} cols
     * @param {?} direction
     * @return {?}
     */
    FixedTileStyler.prototype.init = /**
     * @param {?} gutterSize
     * @param {?} tracker
     * @param {?} cols
     * @param {?} direction
     * @return {?}
     */
    function (gutterSize, tracker, cols, direction) {
        _super.prototype.init.call(this, gutterSize, tracker, cols, direction);
        this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
        if (!cssCalcAllowedValue.test(this.fixedRowHeight)) {
            throw Error("Invalid value \"" + this.fixedRowHeight + "\" set as rowHeight.");
        }
    };
    /**
     * @param {?} tile
     * @param {?} rowIndex
     * @return {?}
     */
    FixedTileStyler.prototype.setRowStyles = /**
     * @param {?} tile
     * @param {?} rowIndex
     * @return {?}
     */
    function (tile, rowIndex) {
        tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
    };
    /**
     * @return {?}
     */
    FixedTileStyler.prototype.getComputedHeight = /**
     * @return {?}
     */
    function () {
        return [
            'height', calc(this.getTileSpan(this.fixedRowHeight) + " + " + this.getGutterSpan())
        ];
    };
    /**
     * @param {?} list
     * @return {?}
     */
    FixedTileStyler.prototype.reset = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        list._setListStyle(['height', null]);
        if (list._tiles) {
            list._tiles.forEach(function (tile) {
                tile._setStyle('top', null);
                tile._setStyle('height', null);
            });
        }
    };
    return FixedTileStyler;
}(TileStyler));
/**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
 * \@docs-private
 */
var /**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
 * \@docs-private
 */
RatioTileStyler = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(RatioTileStyler, _super);
    function RatioTileStyler(value) {
        var _this = _super.call(this) || this;
        _this._parseRatio(value);
        return _this;
    }
    /**
     * @param {?} tile
     * @param {?} rowIndex
     * @param {?} percentWidth
     * @param {?} gutterWidth
     * @return {?}
     */
    RatioTileStyler.prototype.setRowStyles = /**
     * @param {?} tile
     * @param {?} rowIndex
     * @param {?} percentWidth
     * @param {?} gutterWidth
     * @return {?}
     */
    function (tile, rowIndex, percentWidth, gutterWidth) {
        /** @type {?} */
        var percentHeightPerTile = percentWidth / this.rowHeightRatio;
        this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
        // Use padding-top and margin-top to maintain the given aspect ratio, as
        // a percentage-based value for these properties is applied versus the *width* of the
        // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
        tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));
        tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
    };
    /**
     * @return {?}
     */
    RatioTileStyler.prototype.getComputedHeight = /**
     * @return {?}
     */
    function () {
        return [
            'paddingBottom', calc(this.getTileSpan(this.baseTileHeight) + " + " + this.getGutterSpan())
        ];
    };
    /**
     * @param {?} list
     * @return {?}
     */
    RatioTileStyler.prototype.reset = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        list._setListStyle(['paddingBottom', null]);
        list._tiles.forEach(function (tile) {
            tile._setStyle('marginTop', null);
            tile._setStyle('paddingTop', null);
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatioTileStyler.prototype._parseRatio = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var ratioParts = value.split(':');
        if (ratioParts.length !== 2) {
            throw Error("mat-grid-list: invalid ratio given for row-height: \"" + value + "\"");
        }
        this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
    };
    return RatioTileStyler;
}(TileStyler));
/**
 * This type of styler is instantiated when the user selects a "fit" row height mode.
 * In other words, the row height will reflect the total height of the container divided
 * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
 *
 * \@docs-private
 */
var /**
 * This type of styler is instantiated when the user selects a "fit" row height mode.
 * In other words, the row height will reflect the total height of the container divided
 * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
 *
 * \@docs-private
 */
FitTileStyler = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(FitTileStyler, _super);
    function FitTileStyler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} tile
     * @param {?} rowIndex
     * @return {?}
     */
    FitTileStyler.prototype.setRowStyles = /**
     * @param {?} tile
     * @param {?} rowIndex
     * @return {?}
     */
    function (tile, rowIndex) {
        /** @type {?} */
        var percentHeightPerTile = 100 / this._rowspan;
        /** @type {?} */
        var gutterHeightPerTile = (this._rows - 1) / this._rows;
        /** @type {?} */
        var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
        tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
    };
    /**
     * @param {?} list
     * @return {?}
     */
    FitTileStyler.prototype.reset = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        if (list._tiles) {
            list._tiles.forEach(function (tile) {
                tile._setStyle('top', null);
                tile._setStyle('height', null);
            });
        }
    };
    return FitTileStyler;
}(TileStyler));
/**
 * Wraps a CSS string in a calc function
 * @param {?} exp
 * @return {?}
 */
function calc(exp) { return "calc(" + exp + ")"; }
/**
 * Appends pixels to a CSS string if no units are given.
 * @param {?} value
 * @return {?}
 */
function normalizeUnits(value) {
    return (value.match(/px|em|rem/)) ? value : value + 'px';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MAT_FIT_MODE = 'fit';
var MatGridList = /** @class */ (function () {
    function MatGridList(_element, _dir) {
        this._element = _element;
        this._dir = _dir;
        /**
         * The amount of space between tiles. This will be something like '5px' or '2em'.
         */
        this._gutter = '1px';
    }
    Object.defineProperty(MatGridList.prototype, "cols", {
        /** Amount of columns in the grid list. */
        get: /**
         * Amount of columns in the grid list.
         * @return {?}
         */
        function () { return this._cols; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatGridList.prototype, "gutterSize", {
        /** Size of the grid list's gutter in pixels. */
        get: /**
         * Size of the grid list's gutter in pixels.
         * @return {?}
         */
        function () { return this._gutter; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._gutter = "" + (value == null ? '' : value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatGridList.prototype, "rowHeight", {
        /** Set internal representation of row height from the user-provided value. */
        get: /**
         * Set internal representation of row height from the user-provided value.
         * @return {?}
         */
        function () { return this._rowHeight; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = "" + (value == null ? '' : value);
            if (newValue !== this._rowHeight) {
                this._rowHeight = newValue;
                this._setTileStyler(this._rowHeight);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatGridList.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._checkCols();
        this._checkRowHeight();
    };
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     */
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     * @return {?}
     */
    MatGridList.prototype.ngAfterContentChecked = /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     * @return {?}
     */
    function () {
        this._layoutTiles();
    };
    /**
     * Throw a friendly error if cols property is missing
     * @return {?}
     */
    MatGridList.prototype._checkCols = /**
     * Throw a friendly error if cols property is missing
     * @return {?}
     */
    function () {
        if (!this.cols) {
            throw Error("mat-grid-list: must pass in number of columns. " +
                "Example: <mat-grid-list cols=\"3\">");
        }
    };
    /**
     * Default to equal width:height if rowHeight property is missing
     * @return {?}
     */
    MatGridList.prototype._checkRowHeight = /**
     * Default to equal width:height if rowHeight property is missing
     * @return {?}
     */
    function () {
        if (!this._rowHeight) {
            this._setTileStyler('1:1');
        }
    };
    /**
     * Creates correct Tile Styler subtype based on rowHeight passed in by user
     * @param {?} rowHeight
     * @return {?}
     */
    MatGridList.prototype._setTileStyler = /**
     * Creates correct Tile Styler subtype based on rowHeight passed in by user
     * @param {?} rowHeight
     * @return {?}
     */
    function (rowHeight) {
        if (this._tileStyler) {
            this._tileStyler.reset(this);
        }
        if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
        }
        else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
        }
        else {
            this._tileStyler = new FixedTileStyler(rowHeight);
        }
    };
    /**
     * Computes and applies the size and position for all children grid tiles.
     * @return {?}
     */
    MatGridList.prototype._layoutTiles = /**
     * Computes and applies the size and position for all children grid tiles.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
        }
        /** @type {?} */
        var tracker = this._tileCoordinator;
        /** @type {?} */
        var tiles = this._tiles.filter(function (tile) { return !tile._gridList || tile._gridList === _this; });
        /** @type {?} */
        var direction = this._dir ? this._dir.value : 'ltr';
        this._tileCoordinator.update(this.cols, tiles);
        this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
        tiles.forEach(function (tile, index) {
            /** @type {?} */
            var pos = tracker.positions[index];
            _this._tileStyler.setStyle(tile, pos.row, pos.col);
        });
        this._setListStyle(this._tileStyler.getComputedHeight());
    };
    /** Sets style on the main grid-list element, given the style name and value. */
    /**
     * Sets style on the main grid-list element, given the style name and value.
     * @param {?} style
     * @return {?}
     */
    MatGridList.prototype._setListStyle = /**
     * Sets style on the main grid-list element, given the style name and value.
     * @param {?} style
     * @return {?}
     */
    function (style) {
        if (style) {
            (/** @type {?} */ (this._element.nativeElement.style))[style[0]] = style[1];
        }
    };
    MatGridList.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-grid-list',
                    exportAs: 'matGridList',
                    template: "<div><ng-content></ng-content></div>",
                    styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],
                    host: {
                        'class': 'mat-grid-list',
                    },
                    providers: [{
                            provide: MAT_GRID_LIST,
                            useExisting: MatGridList
                        }],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatGridList.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    MatGridList.propDecorators = {
        _tiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatGridTile, { descendants: true },] }],
        cols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        gutterSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return MatGridList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatGridListModule = /** @class */ (function () {
    function MatGridListModule() {
    }
    MatGridListModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                    exports: [
                        MatGridList,
                        MatGridTile,
                        MatGridTileText,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"],
                        MatGridTileHeaderCssMatStyler,
                        MatGridTileFooterCssMatStyler,
                        MatGridAvatarCssMatStyler
                    ],
                    declarations: [
                        MatGridList,
                        MatGridTile,
                        MatGridTileText,
                        MatGridTileHeaderCssMatStyler,
                        MatGridTileFooterCssMatStyler,
                        MatGridAvatarCssMatStyler
                    ],
                },] },
    ];
    return MatGridListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=grid-list.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/menu.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/menu.es5.js ***!
  \*********************************************************/
/*! exports provided: MAT_MENU_SCROLL_STRATEGY, MatMenuModule, MatMenu, MAT_MENU_DEFAULT_OPTIONS, MatMenuItem, MatMenuTrigger, matMenuAnimations, fadeInItems, transformMenu, MatMenuContent, ɵa23, ɵb23, ɵc23, ɵf23, ɵd23, ɵe23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY", function() { return MAT_MENU_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuModule", function() { return MatMenuModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenu", function() { return MatMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_DEFAULT_OPTIONS", function() { return MAT_MENU_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuItem", function() { return MatMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuTrigger", function() { return MatMenuTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matMenuAnimations", function() { return matMenuAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInItems", function() { return fadeInItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMenu", function() { return transformMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuContent", function() { return MatMenuContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa23", function() { return MAT_MENU_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb23", function() { return MatMenuItemBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc23", function() { return _MatMenuItemMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf23", function() { return MAT_MENU_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd23", function() { return MAT_MENU_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe23", function() { return MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Menu content that will be rendered lazily once the menu is opened.
 */
var MatMenuContent = /** @class */ (function () {
    function MatMenuContent(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document) {
        this._template = _template;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._document = _document;
        /**
         * Emits when the menu content has been attached.
         */
        this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * Attaches the content with a particular context.
     * @docs-private
     */
    /**
     * Attaches the content with a particular context.
     * \@docs-private
     * @param {?=} context
     * @return {?}
     */
    MatMenuContent.prototype.attach = /**
     * Attaches the content with a particular context.
     * \@docs-private
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        if (context === void 0) { context = {}; }
        if (!this._portal) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this._template, this._viewContainerRef);
        }
        this.detach();
        if (!this._outlet) {
            this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["DomPortalOutlet"](this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
        }
        /** @type {?} */
        var element = this._template.elementRef.nativeElement; /** @type {?} */
        ((
        // Because we support opening the same menu from different triggers (which in turn have their
        // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
        // risk it staying attached to a pane that's no longer in the DOM.
        element.parentNode)).insertBefore(this._outlet.outletElement, element);
        this._portal.attach(this._outlet, context);
        this._attached.next();
    };
    /**
     * Detaches the content.
     * @docs-private
     */
    /**
     * Detaches the content.
     * \@docs-private
     * @return {?}
     */
    MatMenuContent.prototype.detach = /**
     * Detaches the content.
     * \@docs-private
     * @return {?}
     */
    function () {
        if (this._portal.isAttached) {
            this._portal.detach();
        }
    };
    /**
     * @return {?}
     */
    MatMenuContent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._outlet) {
            this._outlet.dispose();
        }
    };
    MatMenuContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'ng-template[matMenuContent]'
                },] },
    ];
    /** @nocollapse */
    MatMenuContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    return MatMenuContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Animations used by the mat-menu component.
 * Animation duration and timing values are based on:
 * https://material.io/guidelines/components/menus.html#menus-usage
 * \@docs-private
  @type {?} */
var matMenuAnimations = {
    /**
       * This animation controls the menu panel's entry and exit from the page.
       *
       * When the menu panel is added to the DOM, it scales in and fades in its border.
       *
       * When the menu panel is removed from the DOM, it simply fades out after a brief
       * delay to display the ripple.
       */
    transformMenu: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('transformMenu', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            opacity: 0,
            transform: 'scale(0.8)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])('.mat-menu-content', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'scale(1)' })),
        ])),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })))
    ]),
    /**
       * This animation fades in the background color and content of the menu panel
       * after its containing element is scaled in.
       */
    fadeInItems: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fadeInItems', [
        // TODO(crisbeto): this is inside the `transformMenu`
        // now. Remove next time we do breaking changes.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
};
/** *
 * @deprecated
 * \@breaking-change 8.0.0
 * \@docs-private
  @type {?} */
var fadeInItems = matMenuAnimations.fadeInItems;
/** *
 * @deprecated
 * \@breaking-change 8.0.0
 * \@docs-private
  @type {?} */
var transformMenu = matMenuAnimations.transformMenu;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * Throws an exception for the case when menu trigger doesn't have a valid mat-menu instance
 * \@docs-private
 * @return {?}
 */
function throwMatMenuMissingError() {
    throw Error("matMenuTriggerFor: must pass in an mat-menu instance.\n\n    Example:\n      <mat-menu #menu=\"matMenu\"></mat-menu>\n      <button [matMenuTriggerFor]=\"menu\"></button>");
}
/**
 * Throws an exception for the case when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * \@docs-private
 * @return {?}
 */
function throwMatMenuInvalidPositionX() {
    throw Error("xPosition value must be either 'before' or after'.\n      Example: <mat-menu xPosition=\"before\" #menu=\"matMenu\"></mat-menu>");
}
/**
 * Throws an exception for the case when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * \@docs-private
 * @return {?}
 */
function throwMatMenuInvalidPositionY() {
    throw Error("yPosition value must be either 'above' or below'.\n      Example: <mat-menu yPosition=\"above\" #menu=\"matMenu\"></mat-menu>");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Injection token used to provide the parent menu to menu-specific components.
 * \@docs-private
  @type {?} */
var MAT_MENU_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_MENU_PANEL');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatMenuItemBase = /** @class */ (function () {
    function MatMenuItemBase() {
    }
    return MatMenuItemBase;
}());
/** @type {?} */
var _MatMenuItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisabled"])(MatMenuItemBase));
/**
 * This directive is intended to be used inside an mat-menu tag.
 * It exists mostly to set the role attribute.
 */
var MatMenuItem = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(MatMenuItem, _super);
    function MatMenuItem(_elementRef, document, _focusMonitor, _parentMenu) {
        var _this = 
        // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
        _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._focusMonitor = _focusMonitor;
        _this._parentMenu = _parentMenu;
        /**
         * Stream that emits when the menu item is hovered.
         */
        _this._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Whether the menu item is highlighted.
         */
        _this._highlighted = false;
        /**
         * Whether the menu item acts as a trigger for a sub-menu.
         */
        _this._triggersSubmenu = false;
        if (_focusMonitor) {
            // Start monitoring the element so it gets the appropriate focused classes. We want
            // to show the focus style for menu items only when the focus was not caused by a
            // mouse or touch interaction.
            _focusMonitor.monitor(_this._elementRef, false);
        }
        if (_parentMenu && _parentMenu.addItem) {
            _parentMenu.addItem(_this);
        }
        _this._document = document;
        return _this;
    }
    /** Focuses the menu item. */
    /**
     * Focuses the menu item.
     * @param {?=} origin
     * @return {?}
     */
    MatMenuItem.prototype.focus = /**
     * Focuses the menu item.
     * @param {?=} origin
     * @return {?}
     */
    function (origin) {
        if (origin === void 0) { origin = 'program'; }
        if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._getHostElement(), origin);
        }
        else {
            this._getHostElement().focus();
        }
    };
    /**
     * @return {?}
     */
    MatMenuItem.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._focusMonitor) {
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        if (this._parentMenu && this._parentMenu.removeItem) {
            this._parentMenu.removeItem(this);
        }
        this._hovered.complete();
    };
    /** Used to set the `tabindex`. */
    /**
     * Used to set the `tabindex`.
     * @return {?}
     */
    MatMenuItem.prototype._getTabIndex = /**
     * Used to set the `tabindex`.
     * @return {?}
     */
    function () {
        return this.disabled ? '-1' : '0';
    };
    /** Returns the host DOM element. */
    /**
     * Returns the host DOM element.
     * @return {?}
     */
    MatMenuItem.prototype._getHostElement = /**
     * Returns the host DOM element.
     * @return {?}
     */
    function () {
        return this._elementRef.nativeElement;
    };
    /** Prevents the default element actions if it is disabled. */
    /**
     * Prevents the default element actions if it is disabled.
     * @param {?} event
     * @return {?}
     */
    MatMenuItem.prototype._checkDisabled = /**
     * Prevents the default element actions if it is disabled.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    /** Emits to the hover stream. */
    /**
     * Emits to the hover stream.
     * @return {?}
     */
    MatMenuItem.prototype._handleMouseEnter = /**
     * Emits to the hover stream.
     * @return {?}
     */
    function () {
        this._hovered.next(this);
    };
    /** Gets the label to be used when determining whether the option should be focused. */
    /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    MatMenuItem.prototype.getLabel = /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this._elementRef.nativeElement;
        /** @type {?} */
        var textNodeType = this._document ? this._document.TEXT_NODE : 3;
        /** @type {?} */
        var output = '';
        if (element.childNodes) {
            /** @type {?} */
            var length_1 = element.childNodes.length;
            // Go through all the top-level text nodes and extract their text.
            // We skip anything that's not a text node to prevent the text from
            // being thrown off by something like an icon.
            for (var i = 0; i < length_1; i++) {
                if (element.childNodes[i].nodeType === textNodeType) {
                    output += element.childNodes[i].textContent;
                }
            }
        }
        return output.trim();
    };
    MatMenuItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: '[mat-menu-item]',
                    exportAs: 'matMenuItem',
                    inputs: ['disabled', 'disableRipple'],
                    host: {
                        'role': 'menuitem',
                        'class': 'mat-menu-item',
                        '[class.mat-menu-item-highlighted]': '_highlighted',
                        '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
                        '[attr.tabindex]': '_getTabIndex()',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.disabled]': 'disabled || null',
                        '(click)': '_checkDisabled($event)',
                        '(mouseenter)': '_handleMouseEnter()',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    template: "<ng-content></ng-content><div class=\"mat-menu-ripple\" matRipple [matRippleDisabled]=\"disableRipple || disabled\" [matRippleTrigger]=\"_getHostElement()\"></div>",
                },] },
    ];
    /** @nocollapse */
    MatMenuItem.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_MENU_PANEL,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    return MatMenuItem;
}(_MatMenuItemMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Injection token to be used to override the default options for `mat-menu`.
  @type {?} */
var MAT_MENU_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-menu-default-options', {
    providedIn: 'root',
    factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
    return {
        overlapTrigger: false,
        xPosition: 'after',
        yPosition: 'below',
        backdropClass: 'cdk-overlay-transparent-backdrop',
    };
}
/** *
 * Start elevation for the menu panel.
 * \@docs-private
  @type {?} */
var MAT_MENU_BASE_ELEVATION = 4;
var MatMenu = /** @class */ (function () {
    function MatMenu(_elementRef, _ngZone, _defaultOptions) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        this._xPosition = this._defaultOptions.xPosition;
        this._yPosition = this._defaultOptions.yPosition;
        /**
         * Menu items inside the current menu.
         */
        this._items = [];
        /**
         * Emits whenever the amount of menu items changes.
         */
        this._itemChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Subscription to tab events on the menu panel
         */
        this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        /**
         * Config object to be passed into the menu's ngClass
         */
        this._classList = {};
        /**
         * Current state of the panel animation.
         */
        this._panelAnimationState = 'void';
        /**
         * Emits whenever an animation on the menu completes.
         */
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Class to be added to the backdrop element.
         */
        this.backdropClass = this._defaultOptions.backdropClass;
        this._overlapTrigger = this._defaultOptions.overlapTrigger;
        this._hasBackdrop = this._defaultOptions.hasBackdrop;
        /**
         * Event emitted when the menu is closed.
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the menu is closed.
         * @deprecated Switch to `closed` instead
         * \@breaking-change 8.0.0
         */
        this.close = this.closed;
    }
    Object.defineProperty(MatMenu.prototype, "xPosition", {
        /** Position of the menu in the X axis. */
        get: /**
         * Position of the menu in the X axis.
         * @return {?}
         */
        function () { return this._xPosition; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== 'before' && value !== 'after') {
                throwMatMenuInvalidPositionX();
            }
            this._xPosition = value;
            this.setPositionClasses();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenu.prototype, "yPosition", {
        /** Position of the menu in the Y axis. */
        get: /**
         * Position of the menu in the Y axis.
         * @return {?}
         */
        function () { return this._yPosition; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== 'above' && value !== 'below') {
                throwMatMenuInvalidPositionY();
            }
            this._yPosition = value;
            this.setPositionClasses();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenu.prototype, "overlapTrigger", {
        /** Whether the menu should overlap its trigger. */
        get: /**
         * Whether the menu should overlap its trigger.
         * @return {?}
         */
        function () { return this._overlapTrigger; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._overlapTrigger = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenu.prototype, "hasBackdrop", {
        /** Whether the menu has a backdrop. */
        get: /**
         * Whether the menu has a backdrop.
         * @return {?}
         */
        function () { return this._hasBackdrop; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenu.prototype, "panelClass", {
        /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @param classes list of class names
         */
        set: /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @param {?} classes list of class names
         * @return {?}
         */
        function (classes) {
            if (classes && classes.length) {
                this._classList = classes.split(' ').reduce(function (obj, className) {
                    obj[className] = true;
                    return obj;
                }, {});
                this._elementRef.nativeElement.className = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenu.prototype, "classList", {
        /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @deprecated Use `panelClass` instead.
         * @breaking-change 8.0.0
         */
        get: /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @deprecated Use `panelClass` instead.
         * \@breaking-change 8.0.0
         * @return {?}
         */
        function () { return this.panelClass; },
        set: /**
         * @param {?} classes
         * @return {?}
         */
        function (classes) { this.panelClass = classes; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatMenu.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setPositionClasses();
    };
    /**
     * @return {?}
     */
    MatMenu.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusKeyManager"](this._items).withWrap().withTypeAhead();
        this._tabSubscription = this._keyManager.tabOut.subscribe(function () { return _this.closed.emit('tab'); });
    };
    /**
     * @return {?}
     */
    MatMenu.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._tabSubscription.unsubscribe();
        this.closed.complete();
    };
    /** Stream that emits whenever the hovered menu item changes. */
    /**
     * Stream that emits whenever the hovered menu item changes.
     * @return {?}
     */
    MatMenu.prototype._hovered = /**
     * Stream that emits whenever the hovered menu item changes.
     * @return {?}
     */
    function () {
        return this._itemChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._items), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (items) { return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, items.map(function (item) { return item._hovered; })); }));
    };
    /** Handle a keyboard event from the menu, delegating to the appropriate action. */
    /**
     * Handle a keyboard event from the menu, delegating to the appropriate action.
     * @param {?} event
     * @return {?}
     */
    MatMenu.prototype._handleKeydown = /**
     * Handle a keyboard event from the menu, delegating to the appropriate action.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"]:
                this.closed.emit('keydown');
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["LEFT_ARROW"]:
                if (this.parentMenu && this.direction === 'ltr') {
                    this.closed.emit('keydown');
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["RIGHT_ARROW"]:
                if (this.parentMenu && this.direction === 'rtl') {
                    this.closed.emit('keydown');
                }
                break;
            default:
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["DOWN_ARROW"]) {
                    this._keyManager.setFocusOrigin('keyboard');
                }
                this._keyManager.onKeydown(event);
        }
    };
    /**
     * Focus the first item in the menu.
     * @param origin Action from which the focus originated. Used to set the correct styling.
     */
    /**
     * Focus the first item in the menu.
     * @param {?=} origin Action from which the focus originated. Used to set the correct styling.
     * @return {?}
     */
    MatMenu.prototype.focusFirstItem = /**
     * Focus the first item in the menu.
     * @param {?=} origin Action from which the focus originated. Used to set the correct styling.
     * @return {?}
     */
    function (origin) {
        var _this = this;
        if (origin === void 0) { origin = 'program'; }
        // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
        if (this.lazyContent) {
            this._ngZone.onStable.asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
                .subscribe(function () { return _this._keyManager.setFocusOrigin(origin).setFirstItemActive(); });
        }
        else {
            this._keyManager.setFocusOrigin(origin).setFirstItemActive();
        }
    };
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     */
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     * @return {?}
     */
    MatMenu.prototype.resetActiveItem = /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     * @return {?}
     */
    function () {
        this._keyManager.setActiveItem(-1);
    };
    /**
     * Sets the menu panel elevation.
     * @param depth Number of parent menus that come before the menu.
     */
    /**
     * Sets the menu panel elevation.
     * @param {?} depth Number of parent menus that come before the menu.
     * @return {?}
     */
    MatMenu.prototype.setElevation = /**
     * Sets the menu panel elevation.
     * @param {?} depth Number of parent menus that come before the menu.
     * @return {?}
     */
    function (depth) {
        /** @type {?} */
        var newElevation = "mat-elevation-z" + (MAT_MENU_BASE_ELEVATION + depth);
        /** @type {?} */
        var customElevation = Object.keys(this._classList).find(function (c) { return c.startsWith('mat-elevation-z'); });
        if (!customElevation || customElevation === this._previousElevation) {
            if (this._previousElevation) {
                this._classList[this._previousElevation] = false;
            }
            this._classList[newElevation] = true;
            this._previousElevation = newElevation;
        }
    };
    /**
     * Registers a menu item with the menu.
     * @docs-private
     */
    /**
     * Registers a menu item with the menu.
     * \@docs-private
     * @param {?} item
     * @return {?}
     */
    MatMenu.prototype.addItem = /**
     * Registers a menu item with the menu.
     * \@docs-private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // We register the items through this method, rather than picking them up through
        // `ContentChildren`, because we need the items to be picked up by their closest
        // `mat-menu` ancestor. If we used `@ContentChildren(MatMenuItem, {descendants: true})`,
        // all descendant items will bleed into the top-level menu in the case where the consumer
        // has `mat-menu` instances nested inside each other.
        if (this._items.indexOf(item) === -1) {
            this._items.push(item);
            this._itemChanges.next(this._items);
        }
    };
    /**
     * Removes an item from the menu.
     * @docs-private
     */
    /**
     * Removes an item from the menu.
     * \@docs-private
     * @param {?} item
     * @return {?}
     */
    MatMenu.prototype.removeItem = /**
     * Removes an item from the menu.
     * \@docs-private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var index = this._items.indexOf(item);
        if (this._items.indexOf(item) > -1) {
            this._items.splice(index, 1);
            this._itemChanges.next(this._items);
        }
    };
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * @param posX Position of the menu along the x axis.
     * @param posY Position of the menu along the y axis.
     * @docs-private
     */
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * \@docs-private
     * @param {?=} posX Position of the menu along the x axis.
     * @param {?=} posY Position of the menu along the y axis.
     * @return {?}
     */
    MatMenu.prototype.setPositionClasses = /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * \@docs-private
     * @param {?=} posX Position of the menu along the x axis.
     * @param {?=} posY Position of the menu along the y axis.
     * @return {?}
     */
    function (posX, posY) {
        if (posX === void 0) { posX = this.xPosition; }
        if (posY === void 0) { posY = this.yPosition; }
        /** @type {?} */
        var classes = this._classList;
        classes['mat-menu-before'] = posX === 'before';
        classes['mat-menu-after'] = posX === 'after';
        classes['mat-menu-above'] = posY === 'above';
        classes['mat-menu-below'] = posY === 'below';
    };
    /** Starts the enter animation. */
    /**
     * Starts the enter animation.
     * @return {?}
     */
    MatMenu.prototype._startAnimation = /**
     * Starts the enter animation.
     * @return {?}
     */
    function () {
        // @breaking-change 8.0.0 Combine with _resetAnimation.
        this._panelAnimationState = 'enter';
    };
    /** Resets the panel animation to its initial state. */
    /**
     * Resets the panel animation to its initial state.
     * @return {?}
     */
    MatMenu.prototype._resetAnimation = /**
     * Resets the panel animation to its initial state.
     * @return {?}
     */
    function () {
        // @breaking-change 8.0.0 Combine with _startAnimation.
        this._panelAnimationState = 'void';
    };
    /** Callback that is invoked when the panel animation completes. */
    /**
     * Callback that is invoked when the panel animation completes.
     * @param {?} event
     * @return {?}
     */
    MatMenu.prototype._onAnimationDone = /**
     * Callback that is invoked when the panel animation completes.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._animationDone.next(event);
        this._isAnimating = false;
        // Scroll the content element to the top once the animation is done. This is necessary, because
        // we move focus to the first item while it's still being animated, which can throw the browser
        // off when it determines the scroll position. Alternatively we can move focus when the
        // animation is done, however moving focus asynchronously will interrupt screen readers
        // which are in the process of reading out the menu already. We take the `element` from
        // the `event` since we can't use a `ViewChild` to access the pane.
        if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
            event.element.scrollTop = 0;
        }
    };
    MatMenu.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-menu',
                    template: "<ng-template><div class=\"mat-menu-panel\" [ngClass]=\"_classList\" (keydown)=\"_handleKeydown($event)\" (click)=\"closed.emit('click')\" [@transformMenu]=\"_panelAnimationState\" (@transformMenu.start)=\"_isAnimating = true\" (@transformMenu.done)=\"_onAnimationDone($event)\" tabindex=\"-1\" role=\"menu\"><div class=\"mat-menu-content\"><ng-content></ng-content></div></div></ng-template>",
                    styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0}@media screen and (-ms-high-contrast:active){.mat-menu-panel{outline:solid 1px}}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}@media screen and (-ms-high-contrast:active){.mat-menu-item-highlighted,.mat-menu-item.cdk-keyboard-focused,.mat-menu-item.cdk-program-focused{outline:dotted 1px}}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:'';display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}.mat-menu-panel.ng-animating .mat-menu-item-submenu-trigger{pointer-events:none}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    exportAs: 'matMenu',
                    animations: [
                        matMenuAnimations.transformMenu,
                        matMenuAnimations.fadeInItems
                    ],
                    providers: [
                        { provide: MAT_MENU_PANEL, useExisting: MatMenu }
                    ]
                },] },
    ];
    /** @nocollapse */
    MatMenu.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_MENU_DEFAULT_OPTIONS,] }] }
    ]; };
    MatMenu.propDecorators = {
        backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        xPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        yPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatMenuItem,] }],
        lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatMenuContent,] }],
        overlapTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['class',] }],
        classList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return MatMenu;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Injection token that determines the scroll handling while the menu is open.
  @type {?} */
var MAT_MENU_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-menu-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/** *
 * \@docs-private
  @type {?} */
var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_MENU_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]],
    useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY,
};
/** *
 * Default top padding of the menu panel.
  @type {?} */
var MENU_PANEL_TOP_PADDING = 8;
/** *
 * Options for binding a passive event listener.
  @type {?} */
var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * This directive is intended to be used in conjunction with an mat-menu tag.  It is
 * responsible for toggling the display of the provided menu instance.
 */
var MatMenuTrigger = /** @class */ (function () {
    function MatMenuTrigger(_overlay, _element, _viewContainerRef, scrollStrategy, _parentMenu, _menuItemInstance, _dir, _focusMonitor) {
        var _this = this;
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._parentMenu = _parentMenu;
        this._menuItemInstance = _menuItemInstance;
        this._dir = _dir;
        this._focusMonitor = _focusMonitor;
        this._overlayRef = null;
        this._menuOpen = false;
        this._closeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        /**
         * Handles touch start events on the trigger.
         * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
         */
        this._handleTouchStart = function () { return _this._openedBy = 'touch'; };
        // Tracking input type is necessary so it's possible to only auto-focus
        // the first item of the list when the menu is opened via the keyboard
        this._openedBy = null;
        /**
         * Event emitted when the associated menu is opened.
         */
        this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the associated menu is opened.
         * @deprecated Switch to `menuOpened` instead
         * \@breaking-change 8.0.0
         */
        this.onMenuOpen = this.menuOpened;
        /**
         * Event emitted when the associated menu is closed.
         */
        this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the associated menu is closed.
         * @deprecated Switch to `menuClosed` instead
         * \@breaking-change 8.0.0
         */
        this.onMenuClose = this.menuClosed;
        _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
        if (_menuItemInstance) {
            _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
        }
        this._scrollStrategy = scrollStrategy;
    }
    Object.defineProperty(MatMenuTrigger.prototype, "_deprecatedMatMenuTriggerFor", {
        /**
         * @deprecated
         * @breaking-change 8.0.0
         */
        get: /**
         * @deprecated
         * \@breaking-change 8.0.0
         * @return {?}
         */
        function () { return this.menu; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.menu = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenuTrigger.prototype, "menu", {
        /** References the menu instance that the trigger is associated with. */
        get: /**
         * References the menu instance that the trigger is associated with.
         * @return {?}
         */
        function () { return this._menu; },
        set: /**
         * @param {?} menu
         * @return {?}
         */
        function (menu) {
            var _this = this;
            if (menu === this._menu) {
                return;
            }
            this._menu = menu;
            this._menuCloseSubscription.unsubscribe();
            if (menu) {
                this._menuCloseSubscription = menu.close.asObservable().subscribe(function (reason) {
                    _this._destroyMenu();
                    // If a click closed the menu, we should close the entire chain of nested menus.
                    if ((reason === 'click' || reason === 'tab') && _this._parentMenu) {
                        _this._parentMenu.closed.emit(reason);
                    }
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatMenuTrigger.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._checkMenu();
        this._handleHover();
    };
    /**
     * @return {?}
     */
    MatMenuTrigger.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
        this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
        this._cleanUpSubscriptions();
    };
    Object.defineProperty(MatMenuTrigger.prototype, "menuOpen", {
        /** Whether the menu is open. */
        get: /**
         * Whether the menu is open.
         * @return {?}
         */
        function () {
            return this._menuOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenuTrigger.prototype, "dir", {
        /** The text direction of the containing app. */
        get: /**
         * The text direction of the containing app.
         * @return {?}
         */
        function () {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /** Whether the menu triggers a sub-menu or a top-level one. */
    /**
     * Whether the menu triggers a sub-menu or a top-level one.
     * @return {?}
     */
    MatMenuTrigger.prototype.triggersSubmenu = /**
     * Whether the menu triggers a sub-menu or a top-level one.
     * @return {?}
     */
    function () {
        return !!(this._menuItemInstance && this._parentMenu);
    };
    /** Toggles the menu between the open and closed states. */
    /**
     * Toggles the menu between the open and closed states.
     * @return {?}
     */
    MatMenuTrigger.prototype.toggleMenu = /**
     * Toggles the menu between the open and closed states.
     * @return {?}
     */
    function () {
        return this._menuOpen ? this.closeMenu() : this.openMenu();
    };
    /** Opens the menu. */
    /**
     * Opens the menu.
     * @return {?}
     */
    MatMenuTrigger.prototype.openMenu = /**
     * Opens the menu.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._menuOpen) {
            return;
        }
        this._checkMenu();
        /** @type {?} */
        var overlayRef = this._createOverlay();
        this._setPosition(/** @type {?} */ (overlayRef.getConfig().positionStrategy));
        overlayRef.attach(this._getPortal());
        if (this.menu.lazyContent) {
            this.menu.lazyContent.attach(this.menuData);
        }
        this._closeSubscription = this._menuClosingActions().subscribe(function () { return _this.closeMenu(); });
        this._initMenu();
        if (this.menu instanceof MatMenu) {
            this.menu._startAnimation();
        }
    };
    /** Closes the menu. */
    /**
     * Closes the menu.
     * @return {?}
     */
    MatMenuTrigger.prototype.closeMenu = /**
     * Closes the menu.
     * @return {?}
     */
    function () {
        this.menu.close.emit();
    };
    /**
     * Focuses the menu trigger.
     * @param origin Source of the menu trigger's focus.
     */
    /**
     * Focuses the menu trigger.
     * @param {?=} origin Source of the menu trigger's focus.
     * @return {?}
     */
    MatMenuTrigger.prototype.focus = /**
     * Focuses the menu trigger.
     * @param {?=} origin Source of the menu trigger's focus.
     * @return {?}
     */
    function (origin) {
        if (origin === void 0) { origin = 'program'; }
        if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._element, origin);
        }
        else {
            this._element.nativeElement.focus();
        }
    };
    /**
     * Closes the menu and does the necessary cleanup.
     * @return {?}
     */
    MatMenuTrigger.prototype._destroyMenu = /**
     * Closes the menu and does the necessary cleanup.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._overlayRef || !this.menuOpen) {
            return;
        }
        /** @type {?} */
        var menu = this.menu;
        this._closeSubscription.unsubscribe();
        this._overlayRef.detach();
        if (menu instanceof MatMenu) {
            menu._resetAnimation();
            if (menu.lazyContent) {
                // Wait for the exit animation to finish before detaching the content.
                menu._animationDone
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (event) { return event.toState === 'void'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), 
                // Interrupt if the content got re-attached.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(menu.lazyContent._attached))
                    .subscribe(function () { return ((menu.lazyContent)).detach(); }, undefined, function () {
                    // No matter whether the content got re-attached, reset the menu.
                    _this._resetMenu();
                });
            }
            else {
                this._resetMenu();
            }
        }
        else {
            this._resetMenu();
            if (menu.lazyContent) {
                menu.lazyContent.detach();
            }
        }
    };
    /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     * @return {?}
     */
    MatMenuTrigger.prototype._initMenu = /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     * @return {?}
     */
    function () {
        this.menu.parentMenu = this.triggersSubmenu() ? this._parentMenu : undefined;
        this.menu.direction = this.dir;
        this._setMenuElevation();
        this._setIsMenuOpen(true);
        this.menu.focusFirstItem(this._openedBy || 'program');
    };
    /**
     * Updates the menu elevation based on the amount of parent menus that it has.
     * @return {?}
     */
    MatMenuTrigger.prototype._setMenuElevation = /**
     * Updates the menu elevation based on the amount of parent menus that it has.
     * @return {?}
     */
    function () {
        if (this.menu.setElevation) {
            /** @type {?} */
            var depth = 0;
            /** @type {?} */
            var parentMenu = this.menu.parentMenu;
            while (parentMenu) {
                depth++;
                parentMenu = parentMenu.parentMenu;
            }
            this.menu.setElevation(depth);
        }
    };
    /**
     * This method resets the menu when it's closed, most importantly restoring
     * focus to the menu trigger if the menu was opened via the keyboard.
     * @return {?}
     */
    MatMenuTrigger.prototype._resetMenu = /**
     * This method resets the menu when it's closed, most importantly restoring
     * focus to the menu trigger if the menu was opened via the keyboard.
     * @return {?}
     */
    function () {
        this._setIsMenuOpen(false);
        // We should reset focus if the user is navigating using a keyboard or
        // if we have a top-level trigger which might cause focus to be lost
        // when clicking on the backdrop.
        if (!this._openedBy) {
            // Note that the focus style will show up both for `program` and
            // `keyboard` so we don't have to specify which one it is.
            this.focus();
        }
        else if (!this.triggersSubmenu()) {
            this.focus(this._openedBy);
        }
        this._openedBy = null;
    };
    /**
     * @param {?} isOpen
     * @return {?}
     */
    MatMenuTrigger.prototype._setIsMenuOpen = /**
     * @param {?} isOpen
     * @return {?}
     */
    function (isOpen) {
        this._menuOpen = isOpen;
        this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
        if (this.triggersSubmenu()) {
            this._menuItemInstance._highlighted = isOpen;
        }
    };
    /**
     * This method checks that a valid instance of MatMenu has been passed into
     * matMenuTriggerFor. If not, an exception is thrown.
     * @return {?}
     */
    MatMenuTrigger.prototype._checkMenu = /**
     * This method checks that a valid instance of MatMenu has been passed into
     * matMenuTriggerFor. If not, an exception is thrown.
     * @return {?}
     */
    function () {
        if (!this.menu) {
            throwMatMenuMissingError();
        }
    };
    /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     * @return {?}
     */
    MatMenuTrigger.prototype._createOverlay = /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     * @return {?}
     */
    function () {
        if (!this._overlayRef) {
            /** @type {?} */
            var config = this._getOverlayConfig();
            this._subscribeToPositions(/** @type {?} */ (config.positionStrategy));
            this._overlayRef = this._overlay.create(config);
            // Consume the `keydownEvents` in order to prevent them from going to another overlay.
            // Ideally we'd also have our keyboard event logic in here, however doing so will
            // break anybody that may have implemented the `MatMenuPanel` themselves.
            this._overlayRef.keydownEvents().subscribe();
        }
        return this._overlayRef;
    };
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @return {?} OverlayConfig
     */
    MatMenuTrigger.prototype._getOverlayConfig = /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @return {?} OverlayConfig
     */
    function () {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayConfig"]({
            positionStrategy: this._overlay.position()
                .flexibleConnectedTo(this._element)
                .withLockedPosition()
                .withTransformOriginOn('.mat-menu-panel'),
            hasBackdrop: this.menu.hasBackdrop == null ? !this.triggersSubmenu() : this.menu.hasBackdrop,
            backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this._scrollStrategy(),
            direction: this._dir
        });
    };
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     * @param {?} position
     * @return {?}
     */
    MatMenuTrigger.prototype._subscribeToPositions = /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        if (this.menu.setPositionClasses) {
            position.positionChanges.subscribe(function (change) {
                /** @type {?} */
                var posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
                /** @type {?} */
                var posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above'; /** @type {?} */
                ((_this.menu.setPositionClasses))(posX, posY);
            });
        }
    };
    /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @param {?} positionStrategy Strategy whose position to update.
     * @return {?}
     */
    MatMenuTrigger.prototype._setPosition = /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @param {?} positionStrategy Strategy whose position to update.
     * @return {?}
     */
    function (positionStrategy) {
        var _a = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'], originX = _a[0], originFallbackX = _a[1];
        var _b = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'], overlayY = _b[0], overlayFallbackY = _b[1];
        var _c = [overlayY, overlayFallbackY], originY = _c[0], originFallbackY = _c[1];
        var _d = [originX, originFallbackX], overlayX = _d[0], overlayFallbackX = _d[1];
        /** @type {?} */
        var offsetY = 0;
        if (this.triggersSubmenu()) {
            // When the menu is a sub-menu, it should always align itself
            // to the edges of the trigger, instead of overlapping it.
            overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
            originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
            offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
        }
        else if (!this.menu.overlapTrigger) {
            originY = overlayY === 'top' ? 'bottom' : 'top';
            originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
        }
        positionStrategy.withPositions([
            { originX: originX, originY: originY, overlayX: overlayX, overlayY: overlayY, offsetY: offsetY },
            { originX: originFallbackX, originY: originY, overlayX: overlayFallbackX, overlayY: overlayY, offsetY: offsetY },
            {
                originX: originX,
                originY: originFallbackY,
                overlayX: overlayX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            },
            {
                originX: originFallbackX,
                originY: originFallbackY,
                overlayX: overlayFallbackX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            }
        ]);
    };
    /**
     * Cleans up the active subscriptions.
     * @return {?}
     */
    MatMenuTrigger.prototype._cleanUpSubscriptions = /**
     * Cleans up the active subscriptions.
     * @return {?}
     */
    function () {
        this._closeSubscription.unsubscribe();
        this._hoverSubscription.unsubscribe();
    };
    /**
     * Returns a stream that emits whenever an action that should close the menu occurs.
     * @return {?}
     */
    MatMenuTrigger.prototype._menuClosingActions = /**
     * Returns a stream that emits whenever an action that should close the menu occurs.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var backdrop = /** @type {?} */ ((this._overlayRef)).backdropClick();
        /** @type {?} */
        var detachments = /** @type {?} */ ((this._overlayRef)).detachments();
        /** @type {?} */
        var parentClose = this._parentMenu ? this._parentMenu.closed : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
        /** @type {?} */
        var hover = this._parentMenu ? this._parentMenu._hovered().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (active) { return active !== _this._menuItemInstance; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function () { return _this._menuOpen; })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(backdrop, parentClose, hover, detachments);
    };
    /** Handles mouse presses on the trigger. */
    /**
     * Handles mouse presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    MatMenuTrigger.prototype._handleMousedown = /**
     * Handles mouse presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["isFakeMousedownFromScreenReader"])(event)) {
            // Since right or middle button clicks won't trigger the `click` event,
            // we shouldn't consider the menu as opened by mouse in those cases.
            this._openedBy = event.button === 0 ? 'mouse' : null;
            // Since clicking on the trigger won't close the menu if it opens a sub-menu,
            // we should prevent focus from moving onto it via click to avoid the
            // highlight from lingering on the menu item.
            if (this.triggersSubmenu()) {
                event.preventDefault();
            }
        }
    };
    /** Handles key presses on the trigger. */
    /**
     * Handles key presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    MatMenuTrigger.prototype._handleKeydown = /**
     * Handles key presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        if (this.triggersSubmenu() && ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["RIGHT_ARROW"] && this.dir === 'ltr') ||
            (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["LEFT_ARROW"] && this.dir === 'rtl'))) {
            this.openMenu();
        }
    };
    /** Handles click events on the trigger. */
    /**
     * Handles click events on the trigger.
     * @param {?} event
     * @return {?}
     */
    MatMenuTrigger.prototype._handleClick = /**
     * Handles click events on the trigger.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.triggersSubmenu()) {
            // Stop event propagation to avoid closing the parent menu.
            event.stopPropagation();
            this.openMenu();
        }
        else {
            this.toggleMenu();
        }
    };
    /**
     * Handles the cases where the user hovers over the trigger.
     * @return {?}
     */
    MatMenuTrigger.prototype._handleHover = /**
     * Handles the cases where the user hovers over the trigger.
     * @return {?}
     */
    function () {
        var _this = this;
        // Subscribe to changes in the hovered item in order to toggle the panel.
        if (!this.triggersSubmenu()) {
            return;
        }
        this._hoverSubscription = this._parentMenu._hovered()
            // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
            // with different data and triggers), we have to delay it by a tick to ensure that
            // it won't be closed immediately after it is opened.
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (active) { return active === _this._menuItemInstance && !active.disabled; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_3__["asapScheduler"]))
            .subscribe(function () {
            _this._openedBy = 'mouse';
            // If the same menu is used between multiple triggers, it might still be animating
            // while the new trigger tries to re-open it. Wait for the animation to finish
            // before doing so. Also interrupt if the user moves to another item.
            if (_this.menu instanceof MatMenu && _this.menu._isAnimating) {
                // We need the `delay(0)` here in order to avoid
                // 'changed after checked' errors in some cases. See #12194.
                _this.menu._animationDone
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_3__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this._parentMenu._hovered()))
                    .subscribe(function () { return _this.openMenu(); });
            }
            else {
                _this.openMenu();
            }
        });
    };
    /**
     * Gets the portal that should be attached to the overlay.
     * @return {?}
     */
    MatMenuTrigger.prototype._getPortal = /**
     * Gets the portal that should be attached to the overlay.
     * @return {?}
     */
    function () {
        // Note that we can avoid this check by keeping the portal on the menu panel.
        // While it would be cleaner, we'd have to introduce another required method on
        // `MatMenuPanel`, making it harder to consume.
        if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this.menu.templateRef, this._viewContainerRef);
        }
        return this._portal;
    };
    MatMenuTrigger.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
                    host: {
                        'aria-haspopup': 'true',
                        '[attr.aria-expanded]': 'menuOpen || null',
                        '(mousedown)': '_handleMousedown($event)',
                        '(keydown)': '_handleKeydown($event)',
                        '(click)': '_handleClick($event)',
                    },
                    exportAs: 'matMenuTrigger'
                },] },
    ];
    /** @nocollapse */
    MatMenuTrigger.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_MENU_SCROLL_STRATEGY,] }] },
        { type: MatMenu, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: MatMenuItem, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }
    ]; };
    MatMenuTrigger.propDecorators = {
        _deprecatedMatMenuTriggerFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mat-menu-trigger-for',] }],
        menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matMenuTriggerFor',] }],
        menuData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matMenuTriggerData',] }],
        menuOpened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onMenuOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        menuClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onMenuClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return MatMenuTrigger;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatMenuModule = /** @class */ (function () {
    function MatMenuModule() {
    }
    MatMenuModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"],
                    ],
                    exports: [MatMenu, MatMenuItem, MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                    declarations: [MatMenu, MatMenuItem, MatMenuTrigger, MatMenuContent],
                    providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
                },] },
    ];
    return MatMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=menu.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/paginator.es5.js":
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/paginator.es5.js ***!
  \**************************************************************/
/*! exports provided: MatPaginatorModule, PageEvent, MatPaginatorBase, _MatPaginatorBase, MatPaginator, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginatorIntl, MAT_PAGINATOR_INTL_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function() { return MatPaginatorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEvent", function() { return PageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorBase", function() { return MatPaginatorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatPaginatorBase", function() { return _MatPaginatorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginator", function() { return MatPaginator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function() { return MAT_PAGINATOR_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function() { return MatPaginatorIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function() { return MAT_PAGINATOR_INTL_PROVIDER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
 * include it in a custom provider
 */
var MatPaginatorIntl = /** @class */ (function () {
    function MatPaginatorIntl() {
        /**
         * Stream to emit from when labels are changed. Use this to notify components when the labels have
         * changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * A label for the page size selector.
         */
        this.itemsPerPageLabel = 'Items per page:';
        /**
         * A label for the button that increments the current page.
         */
        this.nextPageLabel = 'Next page';
        /**
         * A label for the button that decrements the current page.
         */
        this.previousPageLabel = 'Previous page';
        /**
         * A label for the button that moves to the first page.
         */
        this.firstPageLabel = 'First page';
        /**
         * A label for the button that moves to the last page.
         */
        this.lastPageLabel = 'Last page';
        /**
         * A label for the range of items within the current page and the length of the whole list.
         */
        this.getRangeLabel = function (page, pageSize, length) {
            if (length == 0 || pageSize == 0) {
                return "0 of " + length;
            }
            length = Math.max(length, 0);
            /** @type {?} */
            var startIndex = page * pageSize;
            /** @type {?} */
            var endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + " - " + endIndex + " of " + length;
        };
    }
    MatPaginatorIntl.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ MatPaginatorIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MatPaginatorIntl_Factory() { return new MatPaginatorIntl(); }, token: MatPaginatorIntl, providedIn: "root" });
    return MatPaginatorIntl;
}());
/**
 * \@docs-private
 * @param {?} parentIntl
 * @return {?}
 */
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatPaginatorIntl();
}
/** *
 * \@docs-private
  @type {?} */
var MAT_PAGINATOR_INTL_PROVIDER = {
    // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
    provide: MatPaginatorIntl,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatPaginatorIntl]],
    useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * The default page size if there is no page size and there are no provided page size options.
  @type {?} */
var DEFAULT_PAGE_SIZE = 50;
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
var  /**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
PageEvent = /** @class */ (function () {
    function PageEvent() {
    }
    return PageEvent;
}());
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatPaginatorBase = /** @class */ (function () {
    function MatPaginatorBase() {
    }
    return MatPaginatorBase;
}());
/** @type {?} */
var _MatPaginatorBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinInitialized"])(MatPaginatorBase));
/**
 * Component to provide navigation between paged information. Displays the size of the current
 * page, user-selectable options to change that size, what items are being shown, and
 * navigational button to go to the previous or next page.
 */
var MatPaginator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatPaginator, _super);
    function MatPaginator(_intl, _changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this._intl = _intl;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._pageIndex = 0;
        _this._length = 0;
        _this._pageSizeOptions = [];
        _this._hidePageSize = false;
        _this._showFirstLastButtons = false;
        /**
         * Event emitted when the paginator changes the page size or page index.
         */
        _this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this._intlChanges = _intl.changes.subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
        return _this;
    }
    Object.defineProperty(MatPaginator.prototype, "pageIndex", {
        /** The zero-based page index of the displayed list of items. Defaulted to 0. */
        get: /**
         * The zero-based page index of the displayed list of items. Defaulted to 0.
         * @return {?}
         */
        function () { return this._pageIndex; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value), 0);
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "length", {
        /** The length of the total number of items that are being paginated. Defaulted to 0. */
        get: /**
         * The length of the total number of items that are being paginated. Defaulted to 0.
         * @return {?}
         */
        function () { return this._length; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value);
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "pageSize", {
        /** Number of items to display on a page. By default set to 50. */
        get: /**
         * Number of items to display on a page. By default set to 50.
         * @return {?}
         */
        function () { return this._pageSize; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value), 0);
            this._updateDisplayedPageSizeOptions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "pageSizeOptions", {
        /** The set of provided page size options to display to the user. */
        get: /**
         * The set of provided page size options to display to the user.
         * @return {?}
         */
        function () { return this._pageSizeOptions; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pageSizeOptions = (value || []).map(function (p) { return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(p); });
            this._updateDisplayedPageSizeOptions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "hidePageSize", {
        /** Whether to hide the page size selection UI from the user. */
        get: /**
         * Whether to hide the page size selection UI from the user.
         * @return {?}
         */
        function () { return this._hidePageSize; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "showFirstLastButtons", {
        /** Whether to show the first/last buttons UI to the user. */
        get: /**
         * Whether to show the first/last buttons UI to the user.
         * @return {?}
         */
        function () { return this._showFirstLastButtons; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatPaginator.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._initialized = true;
        this._updateDisplayedPageSizeOptions();
        this._markInitialized();
    };
    /**
     * @return {?}
     */
    MatPaginator.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._intlChanges.unsubscribe();
    };
    /** Advances to the next page if it exists. */
    /**
     * Advances to the next page if it exists.
     * @return {?}
     */
    MatPaginator.prototype.nextPage = /**
     * Advances to the next page if it exists.
     * @return {?}
     */
    function () {
        if (!this.hasNextPage()) {
            return;
        }
        /** @type {?} */
        var previousPageIndex = this.pageIndex;
        this.pageIndex++;
        this._emitPageEvent(previousPageIndex);
    };
    /** Move back to the previous page if it exists. */
    /**
     * Move back to the previous page if it exists.
     * @return {?}
     */
    MatPaginator.prototype.previousPage = /**
     * Move back to the previous page if it exists.
     * @return {?}
     */
    function () {
        if (!this.hasPreviousPage()) {
            return;
        }
        /** @type {?} */
        var previousPageIndex = this.pageIndex;
        this.pageIndex--;
        this._emitPageEvent(previousPageIndex);
    };
    /** Move to the first page if not already there. */
    /**
     * Move to the first page if not already there.
     * @return {?}
     */
    MatPaginator.prototype.firstPage = /**
     * Move to the first page if not already there.
     * @return {?}
     */
    function () {
        // hasPreviousPage being false implies at the start
        if (!this.hasPreviousPage()) {
            return;
        }
        /** @type {?} */
        var previousPageIndex = this.pageIndex;
        this.pageIndex = 0;
        this._emitPageEvent(previousPageIndex);
    };
    /** Move to the last page if not already there. */
    /**
     * Move to the last page if not already there.
     * @return {?}
     */
    MatPaginator.prototype.lastPage = /**
     * Move to the last page if not already there.
     * @return {?}
     */
    function () {
        // hasNextPage being false implies at the end
        if (!this.hasNextPage()) {
            return;
        }
        /** @type {?} */
        var previousPageIndex = this.pageIndex;
        this.pageIndex = this.getNumberOfPages() - 1;
        this._emitPageEvent(previousPageIndex);
    };
    /** Whether there is a previous page. */
    /**
     * Whether there is a previous page.
     * @return {?}
     */
    MatPaginator.prototype.hasPreviousPage = /**
     * Whether there is a previous page.
     * @return {?}
     */
    function () {
        return this.pageIndex >= 1 && this.pageSize != 0;
    };
    /** Whether there is a next page. */
    /**
     * Whether there is a next page.
     * @return {?}
     */
    MatPaginator.prototype.hasNextPage = /**
     * Whether there is a next page.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxPageIndex = this.getNumberOfPages() - 1;
        return this.pageIndex < maxPageIndex && this.pageSize != 0;
    };
    /** Calculate the number of pages */
    /**
     * Calculate the number of pages
     * @return {?}
     */
    MatPaginator.prototype.getNumberOfPages = /**
     * Calculate the number of pages
     * @return {?}
     */
    function () {
        if (!this.pageSize) {
            return 0;
        }
        return Math.ceil(this.length / this.pageSize);
    };
    /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     */
    /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     * @param {?} pageSize
     * @return {?}
     */
    MatPaginator.prototype._changePageSize = /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        /** @type {?} */
        var startIndex = this.pageIndex * this.pageSize;
        /** @type {?} */
        var previousPageIndex = this.pageIndex;
        this.pageIndex = Math.floor(startIndex / pageSize) || 0;
        this.pageSize = pageSize;
        this._emitPageEvent(previousPageIndex);
    };
    /** Checks whether the buttons for going forwards should be disabled. */
    /**
     * Checks whether the buttons for going forwards should be disabled.
     * @return {?}
     */
    MatPaginator.prototype._nextButtonsDisabled = /**
     * Checks whether the buttons for going forwards should be disabled.
     * @return {?}
     */
    function () {
        return this.disabled || !this.hasNextPage();
    };
    /** Checks whether the buttons for going backwards should be disabled. */
    /**
     * Checks whether the buttons for going backwards should be disabled.
     * @return {?}
     */
    MatPaginator.prototype._previousButtonsDisabled = /**
     * Checks whether the buttons for going backwards should be disabled.
     * @return {?}
     */
    function () {
        return this.disabled || !this.hasPreviousPage();
    };
    /**
     * Updates the list of page size options to display to the user. Includes making sure that
     * the page size is an option and that the list is sorted.
     * @return {?}
     */
    MatPaginator.prototype._updateDisplayedPageSizeOptions = /**
     * Updates the list of page size options to display to the user. Includes making sure that
     * the page size is an option and that the list is sorted.
     * @return {?}
     */
    function () {
        if (!this._initialized) {
            return;
        }
        // If no page size is provided, use the first page size option or the default page size.
        if (!this.pageSize) {
            this._pageSize = this.pageSizeOptions.length != 0 ?
                this.pageSizeOptions[0] :
                DEFAULT_PAGE_SIZE;
        }
        this._displayedPageSizeOptions = this.pageSizeOptions.slice();
        if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
            this._displayedPageSizeOptions.push(this.pageSize);
        }
        // Sort the numbers using a number-specific sort function.
        this._displayedPageSizeOptions.sort(function (a, b) { return a - b; });
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Emits an event notifying that a change of the paginator's properties has been triggered.
     * @param {?} previousPageIndex
     * @return {?}
     */
    MatPaginator.prototype._emitPageEvent = /**
     * Emits an event notifying that a change of the paginator's properties has been triggered.
     * @param {?} previousPageIndex
     * @return {?}
     */
    function (previousPageIndex) {
        this.page.emit({
            previousPageIndex: previousPageIndex,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            length: this.length
        });
    };
    MatPaginator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-paginator',
                    exportAs: 'matPaginator',
                    template: "<div class=\"mat-paginator-outer-container\"><div class=\"mat-paginator-container\"><div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\"><div class=\"mat-paginator-page-size-label\">{{_intl.itemsPerPageLabel}}</div><mat-form-field *ngIf=\"_displayedPageSizeOptions.length > 1\" [color]=\"color\" class=\"mat-paginator-page-size-select\"><mat-select [value]=\"pageSize\" [disabled]=\"disabled\" [aria-label]=\"_intl.itemsPerPageLabel\" (selectionChange)=\"_changePageSize($event.value)\"><mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">{{pageSizeOption}}</mat-option></mat-select></mat-form-field><div *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div></div><div class=\"mat-paginator-range-actions\"><div class=\"mat-paginator-range-label\">{{_intl.getRangeLabel(pageIndex, pageSize, length)}}</div><button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-first\" (click)=\"firstPage()\" [attr.aria-label]=\"_intl.firstPageLabel\" [matTooltip]=\"_intl.firstPageLabel\" [matTooltipDisabled]=\"_previousButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_previousButtonsDisabled()\" *ngIf=\"showFirstLastButtons\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-previous\" (click)=\"previousPage()\" [attr.aria-label]=\"_intl.previousPageLabel\" [matTooltip]=\"_intl.previousPageLabel\" [matTooltipDisabled]=\"_previousButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_previousButtonsDisabled()\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-next\" (click)=\"nextPage()\" [attr.aria-label]=\"_intl.nextPageLabel\" [matTooltip]=\"_intl.nextPageLabel\" [matTooltipDisabled]=\"_nextButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_nextButtonsDisabled()\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-last\" (click)=\"lastPage()\" [attr.aria-label]=\"_intl.lastPageLabel\" [matTooltip]=\"_intl.lastPageLabel\" [matTooltipDisabled]=\"_nextButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_nextButtonsDisabled()\" *ngIf=\"showFirstLastButtons\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/></svg></button></div></div></div>",
                    styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}"],
                    inputs: ['disabled'],
                    host: {
                        'class': 'mat-paginator',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatPaginator.ctorParameters = function () { return [
        { type: MatPaginatorIntl },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    MatPaginator.propDecorators = {
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        length: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageSizeOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hidePageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showFirstLastButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return MatPaginator;
}(_MatPaginatorBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatPaginatorModule = /** @class */ (function () {
    function MatPaginatorModule() {
    }
    MatPaginatorModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                    ],
                    exports: [MatPaginator],
                    declarations: [MatPaginator],
                    providers: [MAT_PAGINATOR_INTL_PROVIDER],
                },] },
    ];
    return MatPaginatorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=paginator.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/select.es5.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/select.es5.js ***!
  \***********************************************************/
/*! exports provided: MatSelectModule, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectChange, MatSelectBase, _MatSelectMixinBase, MatSelectTrigger, MatSelect, matSelectAnimations, transformPanel, fadeInContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule", function() { return MatSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function() { return SELECT_PANEL_MAX_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function() { return SELECT_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function() { return SELECT_PANEL_INDENT_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function() { return SELECT_ITEM_HEIGHT_EM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function() { return SELECT_MULTIPLE_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function() { return SELECT_PANEL_VIEWPORT_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function() { return MAT_SELECT_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectChange", function() { return MatSelectChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectBase", function() { return MatSelectBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatSelectMixinBase", function() { return _MatSelectMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function() { return MatSelectTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelect", function() { return MatSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function() { return matSelectAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformPanel", function() { return transformPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInContent", function() { return fadeInContent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * \@docs-private
  @type {?} */
var matSelectAnimations = {
    /**
       * This animation transforms the select's overlay panel on and off the page.
       *
       * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
       * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
       * side to ensure the option text correctly overlaps the trigger text.
       *
       * When the panel is removed from the DOM, it simply fades out linearly.
       */
    transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPanel', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scaleY(0.8)',
            minWidth: '100%',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            minWidth: 'calc(100% + 32px)',
            // 32px = 2 * 16px padding
            transform: 'scaleY(1)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            minWidth: 'calc(100% + 64px)',
            // 64px = 48px padding on the left + 16px padding on the right
            transform: 'scaleY(1)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })))
    ]),
    /**
       * This animation fades in the background color and text content of the
       * select's options. It is time delayed to occur 100ms after the overlay
       * panel has transformed in.
       * @deprecated Not used anymore. To be removed.
       * @breaking-change 8.0.0
       */
    fadeInContent: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInContent', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => showing', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
};
/** *
 * @deprecated
 * \@breaking-change 8.0.0
 * \@docs-private
  @type {?} */
var transformPanel = matSelectAnimations.transformPanel;
/** *
 * @deprecated
 * \@breaking-change 8.0.0
 * \@docs-private
  @type {?} */
var fadeInContent = matSelectAnimations.fadeInContent;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * \@docs-private
 * @return {?}
 */
function getMatSelectDynamicMultipleError() {
    return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * \@docs-private
 * @return {?}
 */
function getMatSelectNonArrayValueError() {
    return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 * @return {?}
 */
function getMatSelectNonFunctionValueError() {
    return Error('`compareWith` must be a function.');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var nextUniqueId = 0;
/** *
 * The max height of the select's overlay panel
  @type {?} */
var SELECT_PANEL_MAX_HEIGHT = 256;
/** *
 * The panel's padding on the x-axis
  @type {?} */
var SELECT_PANEL_PADDING_X = 16;
/** *
 * The panel's x axis padding if it is indented (e.g. there is an option group).
  @type {?} */
var SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/** *
 * The height of the select items in `em` units.
  @type {?} */
var SELECT_ITEM_HEIGHT_EM = 3;
/** *
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 20 = 44
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
  @type {?} */
var SELECT_MULTIPLE_PANEL_PADDING_X = 0;
/** *
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
  @type {?} */
var SELECT_PANEL_VIEWPORT_PADDING = 8;
/** *
 * Injection token that determines the scroll handling while a select is open.
  @type {?} */
var MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('mat-select-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/** *
 * \@docs-private
  @type {?} */
var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_SELECT_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]],
    useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Change event object that is emitted when the select value has changed.
 */
var  /**
 * Change event object that is emitted when the select value has changed.
 */
MatSelectChange = /** @class */ (function () {
    function MatSelectChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return MatSelectChange;
}());
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatSelectBase = /** @class */ (function () {
    function MatSelectBase(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._elementRef = _elementRef;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
    return MatSelectBase;
}());
/** @type {?} */
var _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["mixinErrorState"])(MatSelectBase))));
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */
var MatSelectTrigger = /** @class */ (function () {
    function MatSelectTrigger() {
    }
    MatSelectTrigger.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: 'mat-select-trigger'
                },] },
    ];
    return MatSelectTrigger;
}());
var MatSelect = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MatSelect, _super);
    function MatSelect(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory) {
        var _this = _super.call(this, elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
        _this._viewportRuler = _viewportRuler;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._ngZone = _ngZone;
        _this._dir = _dir;
        _this._parentFormField = _parentFormField;
        _this.ngControl = ngControl;
        /**
         * Whether or not the overlay panel is open.
         */
        _this._panelOpen = false;
        /**
         * Whether filling out the select is required in the form.
         */
        _this._required = false;
        /**
         * The scroll position of the overlay panel, calculated to center the selected option.
         */
        _this._scrollTop = 0;
        /**
         * Whether the component is in multiple selection mode.
         */
        _this._multiple = false;
        /**
         * Comparison function to specify which option is displayed. Defaults to object equality.
         */
        _this._compareWith = function (o1, o2) { return o1 === o2; };
        /**
         * Unique id for this input.
         */
        _this._uid = "mat-select-" + nextUniqueId++;
        /**
         * Emits whenever the component is destroyed.
         */
        _this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        /**
         * The cached font-size of the trigger element.
         */
        _this._triggerFontSize = 0;
        /**
         * `View -> model callback called when value changes`
         */
        _this._onChange = function () { };
        /**
         * `View -> model callback called when select has been touched`
         */
        _this._onTouched = function () { };
        /**
         * The IDs of child options to be passed to the aria-owns attribute.
         */
        _this._optionIds = '';
        /**
         * The value of the select panel's transform-origin property.
         */
        _this._transformOrigin = 'top';
        /**
         * Emits when the panel element is finished transforming in.
         */
        _this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */
        _this._offsetY = 0;
        /**
         * This position config ensures that the top "start" corner of the overlay
         * is aligned with with the top "start" of the origin by default (overlapping
         * the trigger completely). If the panel cannot fit below the trigger, it
         * will fall back to a position above the trigger.
         */
        _this._positions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
            },
        ];
        /**
         * Whether the component is disabling centering of the active option over the trigger.
         */
        _this._disableOptionCentering = false;
        _this._focused = false;
        /**
         * A name for this control that can be used by `mat-form-field`.
         */
        _this.controlType = 'mat-select';
        /**
         * Aria label of the select. If not specified, the placeholder will be used as label.
         */
        _this.ariaLabel = '';
        /**
         * Combined stream of all of the child options' change events.
         */
        _this.optionSelectionChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["defer"])(function () {
            if (_this.options) {
                return rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"].apply(void 0, _this.options.map(function (option) { return option.onSelectionChange; }));
            }
            return _this._ngZone.onStable
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(function () { return _this.optionSelectionChanges; }));
        });
        /**
         * Event emitted when the select panel has been toggled.
         */
        _this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        /**
         * Event emitted when the select has been opened.
         */
        _this._openedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function (o) { return o; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function () { }));
        /**
         * Event emitted when the select has been closed.
         */
        _this._closedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function (o) { return !o; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function () { }));
        /**
         * Event emitted when the selected value has been changed by the user.
         */
        _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */
        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        if (_this.ngControl) {
            // Note: we provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            _this.ngControl.valueAccessor = _this;
        }
        _this._scrollStrategyFactory = scrollStrategyFactory;
        _this._scrollStrategy = _this._scrollStrategyFactory();
        _this.tabIndex = parseInt(tabIndex) || 0;
        // Force setter to be called in case id was not specified.
        _this.id = _this.id;
        return _this;
    }
    Object.defineProperty(MatSelect.prototype, "focused", {
        /** Whether the select is focused. */
        get: /**
         * Whether the select is focused.
         * @return {?}
         */
        function () {
            return this._focused || this._panelOpen;
        },
        /**
         * @deprecated Setter to be removed as this property is intended to be readonly.
         * @breaking-change 8.0.0
         */
        set: /**
         * @deprecated Setter to be removed as this property is intended to be readonly.
         * \@breaking-change 8.0.0
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._focused = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "placeholder", {
        /** Placeholder to be shown if no value has been selected. */
        get: /**
         * Placeholder to be shown if no value has been selected.
         * @return {?}
         */
        function () { return this._placeholder; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placeholder = value;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "required", {
        /** Whether the component is required. */
        get: /**
         * Whether the component is required.
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "multiple", {
        /** Whether the user should be allowed to select multiple options. */
        get: /**
         * Whether the user should be allowed to select multiple options.
         * @return {?}
         */
        function () { return this._multiple; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._selectionModel) {
                throw getMatSelectDynamicMultipleError();
            }
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "disableOptionCentering", {
        /** Whether to center the active option over the trigger. */
        get: /**
         * Whether to center the active option over the trigger.
         * @return {?}
         */
        function () { return this._disableOptionCentering; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "compareWith", {
        /**
         * Function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         */
        get: /**
         * Function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         * @return {?}
         */
        function () { return this._compareWith; },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            if (typeof fn !== 'function') {
                throw getMatSelectNonFunctionValueError();
            }
            this._compareWith = fn;
            if (this._selectionModel) {
                // A different comparator means the selection could change.
                this._initializeSelection();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "value", {
        /** Value of the select control. */
        get: /**
         * Value of the select control.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (newValue !== this._value) {
                this.writeValue(newValue);
                this._value = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "id", {
        /** Unique id of the element. */
        get: /**
         * Unique id of the element.
         * @return {?}
         */
        function () { return this._id; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._id = value || this._uid;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatSelect.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](this.multiple);
        this.stateChanges.next();
        // We need `distinctUntilChanged` here, because some browsers will
        // fire the animation end event twice for the same animation. See:
        // https://github.com/angular/angular/issues/24084
        this._panelDoneAnimatingStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroy))
            .subscribe(function () {
            if (_this.panelOpen) {
                _this._scrollTop = 0;
                _this.openedChange.emit(true);
            }
            else {
                _this.openedChange.emit(false);
                _this.overlayDir.offsetX = 0;
                _this._changeDetectorRef.markForCheck();
            }
        });
    };
    /**
     * @return {?}
     */
    MatSelect.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._initKeyManager();
        this._selectionModel.onChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroy)).subscribe(function (event) {
            event.added.forEach(function (option) { return option.select(); });
            event.removed.forEach(function (option) { return option.deselect(); });
        });
        this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroy)).subscribe(function () {
            _this._resetOptions();
            _this._initializeSelection();
        });
    };
    /**
     * @return {?}
     */
    MatSelect.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.ngControl) {
            this.updateErrorState();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatSelect.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
        // the parent form field know to run change detection when the disabled state changes.
        if (changes["disabled"]) {
            this.stateChanges.next();
        }
    };
    /**
     * @return {?}
     */
    MatSelect.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next();
        this._destroy.complete();
        this.stateChanges.complete();
    };
    /** Toggles the overlay panel open or closed. */
    /**
     * Toggles the overlay panel open or closed.
     * @return {?}
     */
    MatSelect.prototype.toggle = /**
     * Toggles the overlay panel open or closed.
     * @return {?}
     */
    function () {
        this.panelOpen ? this.close() : this.open();
    };
    /** Opens the overlay panel. */
    /**
     * Opens the overlay panel.
     * @return {?}
     */
    MatSelect.prototype.open = /**
     * Opens the overlay panel.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
            return;
        }
        this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
        // Note: The computed font-size will be a string pixel value (e.g. "16px").
        // `parseInt` ignores the trailing 'px' and converts this to a number.
        this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
        this._panelOpen = true;
        this._keyManager.withHorizontalOrientation(null);
        this._calculateOverlayPosition();
        this._highlightCorrectOption();
        this._changeDetectorRef.markForCheck();
        // Set the font size on the panel element once it exists.
        this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function () {
            if (_this._triggerFontSize && _this.overlayDir.overlayRef &&
                _this.overlayDir.overlayRef.overlayElement) {
                _this.overlayDir.overlayRef.overlayElement.style.fontSize = _this._triggerFontSize + "px";
            }
        });
    };
    /** Closes the overlay panel and focuses the host element. */
    /**
     * Closes the overlay panel and focuses the host element.
     * @return {?}
     */
    MatSelect.prototype.close = /**
     * Closes the overlay panel and focuses the host element.
     * @return {?}
     */
    function () {
        if (this._panelOpen) {
            this._panelOpen = false;
            this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');
            this._changeDetectorRef.markForCheck();
            this._onTouched();
        }
    };
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} value New value to be written to the model.
     * @return {?}
     */
    MatSelect.prototype.writeValue = /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} value New value to be written to the model.
     * @return {?}
     */
    function (value) {
        if (this.options) {
            this._setSelectionByValue(value);
        }
    };
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the value changes.
     * @return {?}
     */
    MatSelect.prototype.registerOnChange = /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the value changes.
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the component has been touched.
     * @return {?}
     */
    MatSelect.prototype.registerOnTouched = /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the component has been touched.
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} isDisabled Sets whether the component is disabled.
     * @return {?}
     */
    MatSelect.prototype.setDisabledState = /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} isDisabled Sets whether the component is disabled.
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    };
    Object.defineProperty(MatSelect.prototype, "panelOpen", {
        /** Whether or not the overlay panel is open. */
        get: /**
         * Whether or not the overlay panel is open.
         * @return {?}
         */
        function () {
            return this._panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "selected", {
        /** The currently selected option. */
        get: /**
         * The currently selected option.
         * @return {?}
         */
        function () {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "triggerValue", {
        /** The value displayed in the trigger. */
        get: /**
         * The value displayed in the trigger.
         * @return {?}
         */
        function () {
            if (this.empty) {
                return '';
            }
            if (this._multiple) {
                /** @type {?} */
                var selectedOptions = this._selectionModel.selected.map(function (option) { return option.viewValue; });
                if (this._isRtl()) {
                    selectedOptions.reverse();
                }
                // TODO(crisbeto): delimiter should be configurable for proper localization.
                return selectedOptions.join(', ');
            }
            return this._selectionModel.selected[0].viewValue;
        },
        enumerable: true,
        configurable: true
    });
    /** Whether the element is in RTL mode. */
    /**
     * Whether the element is in RTL mode.
     * @return {?}
     */
    MatSelect.prototype._isRtl = /**
     * Whether the element is in RTL mode.
     * @return {?}
     */
    function () {
        return this._dir ? this._dir.value === 'rtl' : false;
    };
    /** Handles all keydown events on the select. */
    /**
     * Handles all keydown events on the select.
     * @param {?} event
     * @return {?}
     */
    MatSelect.prototype._handleKeydown = /**
     * Handles all keydown events on the select.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.disabled) {
            this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
        }
    };
    /**
     * Handles keyboard events while the select is closed.
     * @param {?} event
     * @return {?}
     */
    MatSelect.prototype._handleClosedKeydown = /**
     * Handles keyboard events while the select is closed.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"] ||
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"];
        /** @type {?} */
        var isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"];
        /** @type {?} */
        var manager = this._keyManager;
        // Open the select on ALT + arrow key to match the native <select>
        if ((isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) || ((this.multiple || event.altKey) && isArrowKey)) {
            event.preventDefault(); // prevents the page from scrolling down when pressing space
            this.open();
        }
        else if (!this.multiple) {
            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]) {
                keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                event.preventDefault();
            }
            else {
                manager.onKeydown(event);
            }
        }
    };
    /**
     * Handles keyboard events when the selected is open.
     * @param {?} event
     * @return {?}
     */
    MatSelect.prototype._handleOpenKeydown = /**
     * Handles keyboard events when the selected is open.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"];
        /** @type {?} */
        var manager = this._keyManager;
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]) {
            event.preventDefault();
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
        }
        else if (isArrowKey && event.altKey) {
            // Close the select on ALT + arrow key to match the native <select>
            event.preventDefault();
            this.close();
        }
        else if ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"]) && manager.activeItem &&
            !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
            event.preventDefault();
            manager.activeItem._selectViaInteraction();
        }
        else if (this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["A"] && event.ctrlKey) {
            event.preventDefault();
            /** @type {?} */
            var hasDeselectedOptions_1 = this.options.some(function (opt) { return !opt.disabled && !opt.selected; });
            this.options.forEach(function (option) {
                if (!option.disabled) {
                    hasDeselectedOptions_1 ? option.select() : option.deselect();
                }
            });
        }
        else {
            /** @type {?} */
            var previouslyFocusedIndex = manager.activeItemIndex;
            manager.onKeydown(event);
            if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem &&
                manager.activeItemIndex !== previouslyFocusedIndex) {
                manager.activeItem._selectViaInteraction();
            }
        }
    };
    /**
     * @return {?}
     */
    MatSelect.prototype._onFocus = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this._focused = true;
            this.stateChanges.next();
        }
    };
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     */
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     * @return {?}
     */
    MatSelect.prototype._onBlur = /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     * @return {?}
     */
    function () {
        this._focused = false;
        if (!this.disabled && !this.panelOpen) {
            this._onTouched();
            this._changeDetectorRef.markForCheck();
            this.stateChanges.next();
        }
    };
    /**
     * Callback that is invoked when the overlay panel has been attached.
     */
    /**
     * Callback that is invoked when the overlay panel has been attached.
     * @return {?}
     */
    MatSelect.prototype._onAttached = /**
     * Callback that is invoked when the overlay panel has been attached.
     * @return {?}
     */
    function () {
        var _this = this;
        this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function () {
            _this._setPseudoCheckboxPaddingSize();
            _this._changeDetectorRef.detectChanges();
            _this._calculateOverlayOffsetX();
            _this.panel.nativeElement.scrollTop = _this._scrollTop;
        });
    };
    /** Returns the theme to be used on the panel. */
    /**
     * Returns the theme to be used on the panel.
     * @return {?}
     */
    MatSelect.prototype._getPanelTheme = /**
     * Returns the theme to be used on the panel.
     * @return {?}
     */
    function () {
        return this._parentFormField ? "mat-" + this._parentFormField.color : '';
    };
    /**
     * Sets the pseudo checkbox padding size based on the width of the pseudo checkbox.
     * @return {?}
     */
    MatSelect.prototype._setPseudoCheckboxPaddingSize = /**
     * Sets the pseudo checkbox padding size based on the width of the pseudo checkbox.
     * @return {?}
     */
    function () {
        if (!SELECT_MULTIPLE_PANEL_PADDING_X && this.multiple) {
            /** @type {?} */
            var pseudoCheckbox = this.panel.nativeElement.querySelector('.mat-pseudo-checkbox');
            if (pseudoCheckbox) {
                SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + pseudoCheckbox.offsetWidth;
            }
        }
    };
    Object.defineProperty(MatSelect.prototype, "empty", {
        /** Whether the select has a value. */
        get: /**
         * Whether the select has a value.
         * @return {?}
         */
        function () {
            return !this._selectionModel || this._selectionModel.isEmpty();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatSelect.prototype._initializeSelection = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(function () {
            _this._setSelectionByValue(_this.ngControl ? _this.ngControl.value : _this._value);
        });
    };
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     * @param {?} value
     * @return {?}
     */
    MatSelect.prototype._setSelectionByValue = /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (this.multiple && value) {
            if (!Array.isArray(value)) {
                throw getMatSelectNonArrayValueError();
            }
            this._selectionModel.clear();
            value.forEach(function (currentValue) { return _this._selectValue(currentValue); });
            this._sortValues();
        }
        else {
            this._selectionModel.clear();
            /** @type {?} */
            var correspondingOption = this._selectValue(value);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what option the user interacted with last.
            if (correspondingOption) {
                this._keyManager.setActiveItem(correspondingOption);
            }
        }
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Finds and selects and option based on its value.
     * @param {?} value
     * @return {?} Option that has the corresponding value.
     */
    MatSelect.prototype._selectValue = /**
     * Finds and selects and option based on its value.
     * @param {?} value
     * @return {?} Option that has the corresponding value.
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var correspondingOption = this.options.find(function (option) {
            try {
                // Treat null as a special reset value.
                return option.value != null && _this._compareWith(option.value, value);
            }
            catch (error) {
                if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["isDevMode"])()) {
                    // Notify developers of errors in their comparator.
                    console.warn(error);
                }
                return false;
            }
        });
        if (correspondingOption) {
            this._selectionModel.select(correspondingOption);
        }
        return correspondingOption;
    };
    /**
     * Sets up a key manager to listen to keyboard events on the overlay panel.
     * @return {?}
     */
    MatSelect.prototype._initKeyManager = /**
     * Sets up a key manager to listen to keyboard events on the overlay panel.
     * @return {?}
     */
    function () {
        var _this = this;
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["ActiveDescendantKeyManager"](this.options)
            .withTypeAhead()
            .withVerticalOrientation()
            .withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr')
            .withAllowedModifierKeys(['shiftKey']);
        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroy)).subscribe(function () {
            // Restore focus to the trigger before closing. Ensures that the focus
            // position won't be lost if the user got focus into the overlay.
            _this.focus();
            _this.close();
        });
        this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroy)).subscribe(function () {
            if (_this._panelOpen && _this.panel) {
                _this._scrollActiveOptionIntoView();
            }
            else if (!_this._panelOpen && !_this.multiple && _this._keyManager.activeItem) {
                _this._keyManager.activeItem._selectViaInteraction();
            }
        });
    };
    /**
     * Drops current option subscriptions and IDs and resets from scratch.
     * @return {?}
     */
    MatSelect.prototype._resetOptions = /**
     * Drops current option subscriptions and IDs and resets from scratch.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(this.options.changes, this._destroy);
        this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(changedOrDestroyed)).subscribe(function (event) {
            _this._onSelect(event.source, event.isUserInput);
            if (event.isUserInput && !_this.multiple && _this._panelOpen) {
                _this.close();
                _this.focus();
            }
        });
        // Listen to changes in the internal state of the options and react accordingly.
        // Handles cases like the labels of the selected options changing.
        rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"].apply(void 0, this.options.map(function (option) { return option._stateChanges; })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(changedOrDestroyed))
            .subscribe(function () {
            _this._changeDetectorRef.markForCheck();
            _this.stateChanges.next();
        });
        this._setOptionIds();
    };
    /**
     * Invoked when an option is clicked.
     * @param {?} option
     * @param {?} isUserInput
     * @return {?}
     */
    MatSelect.prototype._onSelect = /**
     * Invoked when an option is clicked.
     * @param {?} option
     * @param {?} isUserInput
     * @return {?}
     */
    function (option, isUserInput) {
        /** @type {?} */
        var wasSelected = this._selectionModel.isSelected(option);
        if (option.value == null && !this._multiple) {
            option.deselect();
            this._selectionModel.clear();
            this._propagateChanges(option.value);
        }
        else {
            option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
            if (isUserInput) {
                this._keyManager.setActiveItem(option);
            }
            if (this.multiple) {
                this._sortValues();
                if (isUserInput) {
                    // In case the user selected the option with their mouse, we
                    // want to restore focus back to the trigger, in order to
                    // prevent the select keyboard controls from clashing with
                    // the ones from `mat-option`.
                    this.focus();
                }
            }
        }
        if (wasSelected !== this._selectionModel.isSelected(option)) {
            this._propagateChanges();
        }
        this.stateChanges.next();
    };
    /**
     * Sorts the selected values in the selected based on their order in the panel.
     * @return {?}
     */
    MatSelect.prototype._sortValues = /**
     * Sorts the selected values in the selected based on their order in the panel.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.multiple) {
            /** @type {?} */
            var options_1 = this.options.toArray();
            this._selectionModel.sort(function (a, b) {
                return _this.sortComparator ? _this.sortComparator(a, b, options_1) :
                    options_1.indexOf(a) - options_1.indexOf(b);
            });
            this.stateChanges.next();
        }
    };
    /**
     * Emits change event to set the model value.
     * @param {?=} fallbackValue
     * @return {?}
     */
    MatSelect.prototype._propagateChanges = /**
     * Emits change event to set the model value.
     * @param {?=} fallbackValue
     * @return {?}
     */
    function (fallbackValue) {
        /** @type {?} */
        var valueToEmit = null;
        if (this.multiple) {
            valueToEmit = (/** @type {?} */ (this.selected)).map(function (option) { return option.value; });
        }
        else {
            valueToEmit = this.selected ? (/** @type {?} */ (this.selected)).value : fallbackValue;
        }
        this._value = valueToEmit;
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this.selectionChange.emit(new MatSelectChange(this, valueToEmit));
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Records option IDs to pass to the aria-owns property.
     * @return {?}
     */
    MatSelect.prototype._setOptionIds = /**
     * Records option IDs to pass to the aria-owns property.
     * @return {?}
     */
    function () {
        this._optionIds = this.options.map(function (option) { return option.id; }).join(' ');
    };
    /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     * @return {?}
     */
    MatSelect.prototype._highlightCorrectOption = /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     * @return {?}
     */
    function () {
        if (this._keyManager) {
            if (this.empty) {
                this._keyManager.setFirstItemActive();
            }
            else {
                this._keyManager.setActiveItem(this._selectionModel.selected[0]);
            }
        }
    };
    /**
     * Scrolls the active option into view.
     * @return {?}
     */
    MatSelect.prototype._scrollActiveOptionIntoView = /**
     * Scrolls the active option into view.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activeOptionIndex = this._keyManager.activeItemIndex || 0;
        /** @type {?} */
        var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);
        this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["_getOptionScrollPosition"])(activeOptionIndex + labelCount, this._getItemHeight(), this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
    };
    /** Focuses the select element. */
    /**
     * Focuses the select element.
     * @return {?}
     */
    MatSelect.prototype.focus = /**
     * Focuses the select element.
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    /**
     * Gets the index of the provided option in the option list.
     * @param {?} option
     * @return {?}
     */
    MatSelect.prototype._getOptionIndex = /**
     * Gets the index of the provided option in the option list.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this.options.reduce(function (result, current, index) {
            return result === undefined ? (option === current ? index : undefined) : result;
        }, undefined);
    };
    /**
     * Calculates the scroll position and x- and y-offsets of the overlay panel.
     * @return {?}
     */
    MatSelect.prototype._calculateOverlayPosition = /**
     * Calculates the scroll position and x- and y-offsets of the overlay panel.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var itemHeight = this._getItemHeight();
        /** @type {?} */
        var items = this._getItemCount();
        /** @type {?} */
        var panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        /** @type {?} */
        var scrollContainerHeight = items * itemHeight;
        /** @type {?} */
        var maxScroll = scrollContainerHeight - panelHeight;
        /** @type {?} */
        var selectedOptionOffset = this.empty ? 0 : /** @type {?} */ ((this._getOptionIndex(this._selectionModel.selected[0])));
        selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups);
        /** @type {?} */
        var scrollBuffer = panelHeight / 2;
        this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
        this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);
        this._checkOverlayWithinViewport(maxScroll);
    };
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     */
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     * @param {?} selectedIndex
     * @param {?} scrollBuffer
     * @param {?} maxScroll
     * @return {?}
     */
    MatSelect.prototype._calculateOverlayScroll = /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     * @param {?} selectedIndex
     * @param {?} scrollBuffer
     * @param {?} maxScroll
     * @return {?}
     */
    function (selectedIndex, scrollBuffer, maxScroll) {
        /** @type {?} */
        var itemHeight = this._getItemHeight();
        /** @type {?} */
        var optionOffsetFromScrollTop = itemHeight * selectedIndex;
        /** @type {?} */
        var halfOptionHeight = itemHeight / 2;
        /** @type {?} */
        var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
        return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
    };
    /** Returns the aria-label of the select component. */
    /**
     * Returns the aria-label of the select component.
     * @return {?}
     */
    MatSelect.prototype._getAriaLabel = /**
     * Returns the aria-label of the select component.
     * @return {?}
     */
    function () {
        // If an ariaLabelledby value has been set by the consumer, the select should not overwrite the
        // `aria-labelledby` value by setting the ariaLabel to the placeholder.
        return this.ariaLabelledby ? null : this.ariaLabel || this.placeholder;
    };
    /** Returns the aria-labelledby of the select component. */
    /**
     * Returns the aria-labelledby of the select component.
     * @return {?}
     */
    MatSelect.prototype._getAriaLabelledby = /**
     * Returns the aria-labelledby of the select component.
     * @return {?}
     */
    function () {
        if (this.ariaLabelledby) {
            return this.ariaLabelledby;
        }
        // Note: we use `_getAriaLabel` here, because we want to check whether there's a
        // computed label. `this.ariaLabel` is only the user-specified label.
        if (!this._parentFormField || !this._parentFormField._hasFloatingLabel() ||
            this._getAriaLabel()) {
            return null;
        }
        return this._parentFormField._labelId || null;
    };
    /** Determines the `aria-activedescendant` to be set on the host. */
    /**
     * Determines the `aria-activedescendant` to be set on the host.
     * @return {?}
     */
    MatSelect.prototype._getAriaActiveDescendant = /**
     * Determines the `aria-activedescendant` to be set on the host.
     * @return {?}
     */
    function () {
        if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
            return this._keyManager.activeItem.id;
        }
        return null;
    };
    /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     * @return {?}
     */
    MatSelect.prototype._calculateOverlayOffsetX = /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
        /** @type {?} */
        var viewportSize = this._viewportRuler.getViewportSize();
        /** @type {?} */
        var isRtl = this._isRtl();
        /** @type {?} */
        var paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X :
            SELECT_PANEL_PADDING_X * 2;
        /** @type {?} */
        var offsetX;
        // Adjust the offset, depending on the option padding.
        if (this.multiple) {
            offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
        }
        else {
            /** @type {?} */
            var selected = this._selectionModel.selected[0] || this.options.first;
            offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
        }
        // Invert the offset in LTR.
        if (!isRtl) {
            offsetX *= -1;
        }
        /** @type {?} */
        var leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
        /** @type {?} */
        var rightOverflow = overlayRect.right + offsetX - viewportSize.width
            + (isRtl ? 0 : paddingWidth);
        // If the element overflows on either side, reduce the offset to allow it to fit.
        if (leftOverflow > 0) {
            offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        else if (rightOverflow > 0) {
            offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        // Set the offset directly in order to avoid having to go through change detection and
        // potentially triggering "changed after it was checked" errors. Round the value to avoid
        // blurry content in some browsers.
        this.overlayDir.offsetX = Math.round(offsetX);
        this.overlayDir.overlayRef.updatePosition();
    };
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     * @param {?} selectedIndex
     * @param {?} scrollBuffer
     * @param {?} maxScroll
     * @return {?}
     */
    MatSelect.prototype._calculateOverlayOffsetY = /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     * @param {?} selectedIndex
     * @param {?} scrollBuffer
     * @param {?} maxScroll
     * @return {?}
     */
    function (selectedIndex, scrollBuffer, maxScroll) {
        /** @type {?} */
        var itemHeight = this._getItemHeight();
        /** @type {?} */
        var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        /** @type {?} */
        var maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
        /** @type {?} */
        var optionOffsetFromPanelTop;
        // Disable offset if requested by user by returning 0 as value to offset
        if (this._disableOptionCentering) {
            return 0;
        }
        if (this._scrollTop === 0) {
            optionOffsetFromPanelTop = selectedIndex * itemHeight;
        }
        else if (this._scrollTop === maxScroll) {
            /** @type {?} */
            var firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
            /** @type {?} */
            var selectedDisplayIndex = selectedIndex - firstDisplayedIndex;
            /** @type {?} */
            var partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight;
            // Because the panel height is longer than the height of the options alone,
            // there is always extra padding at the top or bottom of the panel. When
            // scrolled to the very bottom, this padding is at the top of the panel and
            // must be added to the offset.
            optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
        }
        else {
            // If the option was scrolled to the middle of the panel using a scroll buffer,
            // its offset will be the scroll buffer minus the half height that was added to
            // center it.
            optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
        }
        // The final offset is the option's offset from the top, adjusted for the height difference,
        // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
        // The value is rounded to prevent some browsers from blurring the content.
        return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
    };
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     * @param {?} maxScroll
     * @return {?}
     */
    MatSelect.prototype._checkOverlayWithinViewport = /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     * @param {?} maxScroll
     * @return {?}
     */
    function (maxScroll) {
        /** @type {?} */
        var itemHeight = this._getItemHeight();
        /** @type {?} */
        var viewportSize = this._viewportRuler.getViewportSize();
        /** @type {?} */
        var topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
        /** @type {?} */
        var bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
        /** @type {?} */
        var panelHeightTop = Math.abs(this._offsetY);
        /** @type {?} */
        var totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        /** @type {?} */
        var panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;
        if (panelHeightBottom > bottomSpaceAvailable) {
            this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
        }
        else if (panelHeightTop > topSpaceAvailable) {
            this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
        }
        else {
            this._transformOrigin = this._getOriginBasedOnOption();
        }
    };
    /**
     * Adjusts the overlay panel up to fit in the viewport.
     * @param {?} panelHeightBottom
     * @param {?} bottomSpaceAvailable
     * @return {?}
     */
    MatSelect.prototype._adjustPanelUp = /**
     * Adjusts the overlay panel up to fit in the viewport.
     * @param {?} panelHeightBottom
     * @param {?} bottomSpaceAvailable
     * @return {?}
     */
    function (panelHeightBottom, bottomSpaceAvailable) {
        /** @type {?} */
        var distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable);
        // Scrolls the panel up by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel up into the viewport.
        this._scrollTop -= distanceBelowViewport;
        this._offsetY -= distanceBelowViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very top, it won't be able to fit the panel
        // by scrolling, so set the offset to 0 to allow the fallback position to take
        // effect.
        if (this._scrollTop <= 0) {
            this._scrollTop = 0;
            this._offsetY = 0;
            this._transformOrigin = "50% bottom 0px";
        }
    };
    /**
     * Adjusts the overlay panel down to fit in the viewport.
     * @param {?} panelHeightTop
     * @param {?} topSpaceAvailable
     * @param {?} maxScroll
     * @return {?}
     */
    MatSelect.prototype._adjustPanelDown = /**
     * Adjusts the overlay panel down to fit in the viewport.
     * @param {?} panelHeightTop
     * @param {?} topSpaceAvailable
     * @param {?} maxScroll
     * @return {?}
     */
    function (panelHeightTop, topSpaceAvailable, maxScroll) {
        /** @type {?} */
        var distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable);
        // Scrolls the panel down by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel down into the viewport.
        this._scrollTop += distanceAboveViewport;
        this._offsetY += distanceAboveViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very bottom, it won't be able to fit the
        // panel by scrolling, so set the offset to 0 to allow the fallback position
        // to take effect.
        if (this._scrollTop >= maxScroll) {
            this._scrollTop = maxScroll;
            this._offsetY = 0;
            this._transformOrigin = "50% top 0px";
            return;
        }
    };
    /**
     * Sets the transform origin point based on the selected option.
     * @return {?}
     */
    MatSelect.prototype._getOriginBasedOnOption = /**
     * Sets the transform origin point based on the selected option.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var itemHeight = this._getItemHeight();
        /** @type {?} */
        var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        /** @type {?} */
        var originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
        return "50% " + originY + "px 0px";
    };
    /**
     * Calculates the amount of items in the select. This includes options and group labels.
     * @return {?}
     */
    MatSelect.prototype._getItemCount = /**
     * Calculates the amount of items in the select. This includes options and group labels.
     * @return {?}
     */
    function () {
        return this.options.length + this.optionGroups.length;
    };
    /**
     * Calculates the height of the select's options.
     * @return {?}
     */
    MatSelect.prototype._getItemHeight = /**
     * Calculates the height of the select's options.
     * @return {?}
     */
    function () {
        return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
    };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    MatSelect.prototype.setDescribedByIds = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        this._ariaDescribedby = ids.join(' ');
    };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    MatSelect.prototype.onContainerClick = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    function () {
        this.focus();
        this.open();
    };
    Object.defineProperty(MatSelect.prototype, "shouldLabelFloat", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._panelOpen || !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    MatSelect.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{selector: 'mat-select',
                    exportAs: 'matSelect',
                    template: "<div cdk-overlay-origin class=\"mat-select-trigger\" aria-hidden=\"true\" (click)=\"toggle()\" #origin=\"cdkOverlayOrigin\" #trigger><div class=\"mat-select-value\" [ngSwitch]=\"empty\"><span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\u00A0'}}</span> <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\"><span *ngSwitchDefault>{{triggerValue || '\u00A0'}}</span><ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content></span></div><div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div></div><ng-template cdk-connected-overlay cdkConnectedOverlayLockPosition cdkConnectedOverlayHasBackdrop cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\" [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\" [cdkConnectedOverlayOrigin]=\"origin\" [cdkConnectedOverlayOpen]=\"panelOpen\" [cdkConnectedOverlayPositions]=\"_positions\" [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width\" [cdkConnectedOverlayOffsetY]=\"_offsetY\" (backdropClick)=\"close()\" (attach)=\"_onAttached()\" (detach)=\"close()\"><div #panel class=\"mat-select-panel {{ _getPanelTheme() }}\" [ngClass]=\"panelClass\" [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\" (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\" [style.transformOrigin]=\"_transformOrigin\" [style.font-size.px]=\"_triggerFontSize\" (keydown)=\"_handleKeydown($event)\"><ng-content></ng-content></div></ng-template>",
                    styles: [".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform .4s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}@media screen and (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}"],
                    inputs: ['disabled', 'disableRipple', 'tabIndex'],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        'role': 'listbox',
                        '[attr.id]': 'id',
                        '[attr.tabindex]': 'tabIndex',
                        '[attr.aria-label]': '_getAriaLabel()',
                        '[attr.aria-labelledby]': '_getAriaLabelledby()',
                        '[attr.aria-required]': 'required.toString()',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.aria-invalid]': 'errorState',
                        '[attr.aria-owns]': 'panelOpen ? _optionIds : null',
                        '[attr.aria-multiselectable]': 'multiple',
                        '[attr.aria-describedby]': '_ariaDescribedby || null',
                        '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
                        '[class.mat-select-disabled]': 'disabled',
                        '[class.mat-select-invalid]': 'errorState',
                        '[class.mat-select-required]': 'required',
                        '[class.mat-select-empty]': 'empty',
                        'class': 'mat-select',
                        '(keydown)': '_handleKeydown($event)',
                        '(focus)': '_onFocus()',
                        '(blur)': '_onBlur()',
                    },
                    animations: [
                        matSelectAnimations.transformPanel
                    ],
                    providers: [
                        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldControl"], useExisting: MatSelect },
                        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_OPTION_PARENT_COMPONENT"], useExisting: MatSelect }
                    ],
                },] },
    ];
    /** @nocollapse */
    MatSelect.ctorParameters = function () { return [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ViewportRuler"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }] },
        { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Attribute"], args: ['tabindex',] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [MAT_SELECT_SCROLL_STRATEGY,] }] }
    ]; };
    MatSelect.propDecorators = {
        trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: ['trigger',] }],
        panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: ['panel',] }],
        overlayDir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["CdkConnectedOverlay"],] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], { descendants: true },] }],
        optionGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptgroup"],] }],
        panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        customTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"], args: [MatSelectTrigger,] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        disableOptionCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['aria-label',] }],
        ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['aria-labelledby',] }],
        errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        sortComparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        openedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        _openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"], args: ['opened',] }],
        _closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"], args: ['closed',] }],
        selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }]
    };
    return MatSelect;
}(_MatSelectMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatSelectModule = /** @class */ (function () {
    function MatSelectModule() {
    }
    MatSelectModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"],
                    ],
                    exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"]],
                    declarations: [MatSelect, MatSelectTrigger],
                    providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
                },] },
    ];
    return MatSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=select.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/sort.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/sort.es5.js ***!
  \*********************************************************/
/*! exports provided: MatSortModule, MatSortHeaderBase, _MatSortHeaderMixinBase, MatSortHeader, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSortHeaderIntl, MAT_SORT_HEADER_INTL_PROVIDER, MatSortBase, _MatSortMixinBase, MatSort, matSortAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortModule", function() { return MatSortModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderBase", function() { return MatSortHeaderBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatSortHeaderMixinBase", function() { return _MatSortHeaderMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeader", function() { return MatSortHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function() { return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function() { return MatSortHeaderIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function() { return MAT_SORT_HEADER_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortBase", function() { return MatSortBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatSortMixinBase", function() { return _MatSortMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSort", function() { return MatSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSortAnimations", function() { return matSortAnimations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * \@docs-private
 * @param {?} id
 * @return {?}
 */
function getSortDuplicateSortableIdError(id) {
    return Error("Cannot have two MatSortables with the same id (" + id + ").");
}
/**
 * \@docs-private
 * @return {?}
 */
function getSortHeaderNotContainedWithinSortError() {
    return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
}
/**
 * \@docs-private
 * @return {?}
 */
function getSortHeaderMissingIdError() {
    return Error("MatSortHeader must be provided with a unique id.");
}
/**
 * \@docs-private
 * @param {?} direction
 * @return {?}
 */
function getSortInvalidDirectionError(direction) {
    return Error(direction + " is not a valid sort direction ('asc' or 'desc').");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatSortBase = /** @class */ (function () {
    function MatSortBase() {
    }
    return MatSortBase;
}());
/** @type {?} */
var _MatSortMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinInitialized"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(MatSortBase));
/**
 * Container for MatSortables to manage the sort state and provide default sort parameters.
 */
var MatSort = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatSort, _super);
    function MatSort() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Collection of all registered sortables that this directive manages.
         */
        _this.sortables = new Map();
        /**
         * Used to notify any child components listening to state changes.
         */
        _this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * The direction to set when an MatSortable is initially sorted.
         * May be overriden by the MatSortable's sort start.
         */
        _this.start = 'asc';
        _this._direction = '';
        /**
         * Event emitted when the user changes either the active sort or sort direction.
         */
        _this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        return _this;
    }
    Object.defineProperty(MatSort.prototype, "direction", {
        /** The sort direction of the currently active MatSortable. */
        get: /**
         * The sort direction of the currently active MatSortable.
         * @return {?}
         */
        function () { return this._direction; },
        set: /**
         * @param {?} direction
         * @return {?}
         */
        function (direction) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
                throw getSortInvalidDirectionError(direction);
            }
            this._direction = direction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSort.prototype, "disableClear", {
        /**
         * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
         * May be overriden by the MatSortable's disable clear input.
         */
        get: /**
         * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
         * May be overriden by the MatSortable's disable clear input.
         * @return {?}
         */
        function () { return this._disableClear; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) { this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v); },
        enumerable: true,
        configurable: true
    });
    /**
     * Register function to be used by the contained MatSortables. Adds the MatSortable to the
     * collection of MatSortables.
     */
    /**
     * Register function to be used by the contained MatSortables. Adds the MatSortable to the
     * collection of MatSortables.
     * @param {?} sortable
     * @return {?}
     */
    MatSort.prototype.register = /**
     * Register function to be used by the contained MatSortables. Adds the MatSortable to the
     * collection of MatSortables.
     * @param {?} sortable
     * @return {?}
     */
    function (sortable) {
        if (!sortable.id) {
            throw getSortHeaderMissingIdError();
        }
        if (this.sortables.has(sortable.id)) {
            throw getSortDuplicateSortableIdError(sortable.id);
        }
        this.sortables.set(sortable.id, sortable);
    };
    /**
     * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
     * collection of contained MatSortables.
     */
    /**
     * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
     * collection of contained MatSortables.
     * @param {?} sortable
     * @return {?}
     */
    MatSort.prototype.deregister = /**
     * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
     * collection of contained MatSortables.
     * @param {?} sortable
     * @return {?}
     */
    function (sortable) {
        this.sortables.delete(sortable.id);
    };
    /** Sets the active sort id and determines the new sort direction. */
    /**
     * Sets the active sort id and determines the new sort direction.
     * @param {?} sortable
     * @return {?}
     */
    MatSort.prototype.sort = /**
     * Sets the active sort id and determines the new sort direction.
     * @param {?} sortable
     * @return {?}
     */
    function (sortable) {
        if (this.active != sortable.id) {
            this.active = sortable.id;
            this.direction = sortable.start ? sortable.start : this.start;
        }
        else {
            this.direction = this.getNextSortDirection(sortable);
        }
        this.sortChange.emit({ active: this.active, direction: this.direction });
    };
    /** Returns the next sort direction of the active sortable, checking for potential overrides. */
    /**
     * Returns the next sort direction of the active sortable, checking for potential overrides.
     * @param {?} sortable
     * @return {?}
     */
    MatSort.prototype.getNextSortDirection = /**
     * Returns the next sort direction of the active sortable, checking for potential overrides.
     * @param {?} sortable
     * @return {?}
     */
    function (sortable) {
        if (!sortable) {
            return '';
        }
        /** @type {?} */
        var disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
        /** @type {?} */
        var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
        /** @type {?} */
        var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
        if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
        }
        return sortDirectionCycle[nextDirectionIndex];
    };
    /**
     * @return {?}
     */
    MatSort.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._markInitialized();
    };
    /**
     * @return {?}
     */
    MatSort.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._stateChanges.next();
    };
    /**
     * @return {?}
     */
    MatSort.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.complete();
    };
    MatSort.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[matSort]',
                    exportAs: 'matSort',
                    inputs: ['disabled: matSortDisabled']
                },] },
    ];
    MatSort.propDecorators = {
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matSortActive',] }],
        start: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matSortStart',] }],
        direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matSortDirection',] }],
        disableClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matSortDisableClear',] }],
        sortChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ['matSortChange',] }]
    };
    return MatSort;
}(_MatSortMixinBase));
/**
 * Returns the sort direction cycle to use given the provided parameters of order and clear.
 * @param {?} start
 * @param {?} disableClear
 * @return {?}
 */
function getSortDirectionCycle(start, disableClear) {
    /** @type {?} */
    var sortOrder = ['asc', 'desc'];
    if (start == 'desc') {
        sortOrder.reverse();
    }
    if (!disableClear) {
        sortOrder.push('');
    }
    return sortOrder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["AnimationDurations"].ENTERING + ' ' +
    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["AnimationCurves"].STANDARD_CURVE;
/** *
 * Animations used by MatSort.
 * \@docs-private
  @type {?} */
var matSortAnimations = {
    /** Animation that moves the sort indicator. */
    indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('indicator', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0px)' })),
        // 10px is the height of the sort indicator, minus the width of the pointers
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(10px)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
    leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('leftPointer', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'rotate(-45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'rotate(45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
    rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('rightPointer', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'rotate(45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'rotate(-45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    /** Animation that controls the arrow opacity. */
    arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('arrowOpacity', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: .54 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 })),
        // Transition between all states except for immediate transitions
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION)),
    ]),
    /**
       * Animation for the translation of the arrow as a whole. States are separated into two
       * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
       * peek, and active. The other states define a specific animation (source-to-destination)
       * and are determined as a function of their prev user-perceived state and what the next state
       * should be.
       */
    arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('arrowPosition', [
        // Hidden Above => Hint Center
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-25%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)' })
        ]))),
        // Hint Center => Hidden Below
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(25%)' })
        ]))),
        // Hidden Below => Hint Center
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(25%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)' })
        ]))),
        // Hint Center => Hidden Above
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-25%)' })
        ]))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-25%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(25%)' })),
    ]),
    /** Necessary trigger that calls animate on children animations. */
    allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('allowChildren', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* <=> *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animateChild"])(), { optional: true })
        ])
    ]),
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
 * include it in a custom provider.
 */
var MatSortHeaderIntl = /** @class */ (function () {
    function MatSortHeaderIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * ARIA label for the sorting button.
         */
        this.sortButtonLabel = function (id) {
            return "Change sorting for " + id;
        };
    }
    MatSortHeaderIntl.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ MatSortHeaderIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function MatSortHeaderIntl_Factory() { return new MatSortHeaderIntl(); }, token: MatSortHeaderIntl, providedIn: "root" });
    return MatSortHeaderIntl;
}());
/**
 * \@docs-private
 * @param {?} parentIntl
 * @return {?}
 */
function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatSortHeaderIntl();
}
/** *
 * \@docs-private
  @type {?} */
var MAT_SORT_HEADER_INTL_PROVIDER = {
    // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
    provide: MatSortHeaderIntl,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), MatSortHeaderIntl]],
    useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatSortHeaderBase = /** @class */ (function () {
    function MatSortHeaderBase() {
    }
    return MatSortHeaderBase;
}());
/** @type {?} */
var _MatSortHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(MatSortHeaderBase);
/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent MatSort directive.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 */
var MatSortHeader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatSortHeader, _super);
    function MatSortHeader(_intl, changeDetectorRef, _sort, _columnDef) {
        var _this = 
        // Note that we use a string token for the `_columnDef`, because the value is provided both by
        // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
        // and we want to avoid having the sort header depending on the CDK table because
        // of this single reference.
        _super.call(this) || this;
        _this._intl = _intl;
        _this._sort = _sort;
        _this._columnDef = _columnDef;
        /**
         * Flag set to true when the indicator should be displayed while the sort is not active. Used to
         * provide an affordance that the header is sortable by showing on focus and hover.
         */
        _this._showIndicatorHint = false;
        /**
         * The direction the arrow should be facing according to the current state.
         */
        _this._arrowDirection = '';
        /**
         * Whether the view state animation should show the transition between the `from` and `to` states.
         */
        _this._disableViewStateAnimation = false;
        /**
         * Sets the position of the arrow that displays when sorted.
         */
        _this.arrowPosition = 'after';
        if (!_sort) {
            throw getSortHeaderNotContainedWithinSortError();
        }
        _this._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes)
            .subscribe(function () {
            if (_this._isSorted()) {
                _this._updateArrowDirection();
            }
            // If this header was recently active and now no longer sorted, animate away the arrow.
            if (!_this._isSorted() && _this._viewState && _this._viewState.toState === 'active') {
                _this._disableViewStateAnimation = false;
                _this._setAnimationTransitionState({ fromState: 'active', toState: _this._arrowDirection });
            }
            changeDetectorRef.markForCheck();
        });
        return _this;
    }
    Object.defineProperty(MatSortHeader.prototype, "disableClear", {
        /** Overrides the disable clear value of the containing MatSort for this MatSortable. */
        get: /**
         * Overrides the disable clear value of the containing MatSort for this MatSortable.
         * @return {?}
         */
        function () { return this._disableClear; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) { this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatSortHeader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.id && this._columnDef) {
            this.id = this._columnDef.name;
        }
        // Initialize the direction of the arrow and set the view state to be immediately that state.
        this._updateArrowDirection();
        this._setAnimationTransitionState({ toState: this._isSorted() ? 'active' : this._arrowDirection });
        this._sort.register(this);
    };
    /**
     * @return {?}
     */
    MatSortHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._sort.deregister(this);
        this._rerenderSubscription.unsubscribe();
    };
    /**
     * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
     * user showing what the active sort will become. If set to false, the arrow will fade away.
     */
    /**
     * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
     * user showing what the active sort will become. If set to false, the arrow will fade away.
     * @param {?} visible
     * @return {?}
     */
    MatSortHeader.prototype._setIndicatorHintVisible = /**
     * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
     * user showing what the active sort will become. If set to false, the arrow will fade away.
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        // No-op if the sort header is disabled - should not make the hint visible.
        if (this._isDisabled() && visible) {
            return;
        }
        this._showIndicatorHint = visible;
        if (!this._isSorted()) {
            this._updateArrowDirection();
            if (this._showIndicatorHint) {
                this._setAnimationTransitionState({ fromState: this._arrowDirection, toState: 'hint' });
            }
            else {
                this._setAnimationTransitionState({ fromState: 'hint', toState: this._arrowDirection });
            }
        }
    };
    /**
     * Sets the animation transition view state for the arrow's position and opacity. If the
     * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
     * no animation appears.
     */
    /**
     * Sets the animation transition view state for the arrow's position and opacity. If the
     * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
     * no animation appears.
     * @param {?} viewState
     * @return {?}
     */
    MatSortHeader.prototype._setAnimationTransitionState = /**
     * Sets the animation transition view state for the arrow's position and opacity. If the
     * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
     * no animation appears.
     * @param {?} viewState
     * @return {?}
     */
    function (viewState) {
        this._viewState = viewState;
        // If the animation for arrow position state (opacity/translation) should be disabled,
        // remove the fromState so that it jumps right to the toState.
        if (this._disableViewStateAnimation) {
            this._viewState = { toState: viewState.toState };
        }
    };
    /** Triggers the sort on this sort header and removes the indicator hint. */
    /**
     * Triggers the sort on this sort header and removes the indicator hint.
     * @return {?}
     */
    MatSortHeader.prototype._handleClick = /**
     * Triggers the sort on this sort header and removes the indicator hint.
     * @return {?}
     */
    function () {
        if (this._isDisabled()) {
            return;
        }
        this._sort.sort(this);
        // Do not show the animation if the header was already shown in the right position.
        if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
            this._disableViewStateAnimation = true;
        }
        /** @type {?} */
        var viewState = this._isSorted() ?
            { fromState: this._arrowDirection, toState: 'active' } :
            { fromState: 'active', toState: this._arrowDirection };
        this._setAnimationTransitionState(viewState);
        this._showIndicatorHint = false;
    };
    /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
    /**
     * Whether this MatSortHeader is currently sorted in either ascending or descending order.
     * @return {?}
     */
    MatSortHeader.prototype._isSorted = /**
     * Whether this MatSortHeader is currently sorted in either ascending or descending order.
     * @return {?}
     */
    function () {
        return this._sort.active == this.id &&
            (this._sort.direction === 'asc' || this._sort.direction === 'desc');
    };
    /** Returns the animation state for the arrow direction (indicator and pointers). */
    /**
     * Returns the animation state for the arrow direction (indicator and pointers).
     * @return {?}
     */
    MatSortHeader.prototype._getArrowDirectionState = /**
     * Returns the animation state for the arrow direction (indicator and pointers).
     * @return {?}
     */
    function () {
        return "" + (this._isSorted() ? 'active-' : '') + this._arrowDirection;
    };
    /** Returns the arrow position state (opacity, translation). */
    /**
     * Returns the arrow position state (opacity, translation).
     * @return {?}
     */
    MatSortHeader.prototype._getArrowViewState = /**
     * Returns the arrow position state (opacity, translation).
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fromState = this._viewState.fromState;
        return (fromState ? fromState + "-to-" : '') + this._viewState.toState;
    };
    /**
     * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
     * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
     * active sorted direction. The reason this is updated through a function is because the direction
     * should only be changed at specific times - when deactivated but the hint is displayed and when
     * the sort is active and the direction changes. Otherwise the arrow's direction should linger
     * in cases such as the sort becoming deactivated but we want to animate the arrow away while
     * preserving its direction, even though the next sort direction is actually different and should
     * only be changed once the arrow displays again (hint or activation).
     */
    /**
     * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
     * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
     * active sorted direction. The reason this is updated through a function is because the direction
     * should only be changed at specific times - when deactivated but the hint is displayed and when
     * the sort is active and the direction changes. Otherwise the arrow's direction should linger
     * in cases such as the sort becoming deactivated but we want to animate the arrow away while
     * preserving its direction, even though the next sort direction is actually different and should
     * only be changed once the arrow displays again (hint or activation).
     * @return {?}
     */
    MatSortHeader.prototype._updateArrowDirection = /**
     * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
     * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
     * active sorted direction. The reason this is updated through a function is because the direction
     * should only be changed at specific times - when deactivated but the hint is displayed and when
     * the sort is active and the direction changes. Otherwise the arrow's direction should linger
     * in cases such as the sort becoming deactivated but we want to animate the arrow away while
     * preserving its direction, even though the next sort direction is actually different and should
     * only be changed once the arrow displays again (hint or activation).
     * @return {?}
     */
    function () {
        this._arrowDirection = this._isSorted() ?
            this._sort.direction :
            (this.start || this._sort.start);
    };
    /**
     * @return {?}
     */
    MatSortHeader.prototype._isDisabled = /**
     * @return {?}
     */
    function () {
        return this._sort.disabled || this.disabled;
    };
    /**
     * Gets the aria-sort attribute that should be applied to this sort header. If this header
     * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
     * says that the aria-sort property should only be present on one header at a time, so removing
     * ensures this is true.
     */
    /**
     * Gets the aria-sort attribute that should be applied to this sort header. If this header
     * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
     * says that the aria-sort property should only be present on one header at a time, so removing
     * ensures this is true.
     * @return {?}
     */
    MatSortHeader.prototype._getAriaSortAttribute = /**
     * Gets the aria-sort attribute that should be applied to this sort header. If this header
     * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
     * says that the aria-sort property should only be present on one header at a time, so removing
     * ensures this is true.
     * @return {?}
     */
    function () {
        if (!this._isSorted()) {
            return null;
        }
        return this._sort.direction == 'asc' ? 'ascending' : 'descending';
    };
    MatSortHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: '[mat-sort-header]',
                    exportAs: 'matSortHeader',
                    template: "<div class=\"mat-sort-header-container\" [class.mat-sort-header-sorted]=\"_isSorted()\" [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\"><button class=\"mat-sort-header-button\" type=\"button\" [attr.disabled]=\"_isDisabled() || null\" [attr.aria-label]=\"_intl.sortButtonLabel(id)\" (focus)=\"_setIndicatorHintVisible(true)\" (blur)=\"_setIndicatorHintVisible(false)\"><ng-content></ng-content></button><div class=\"mat-sort-header-arrow\" [@arrowOpacity]=\"_getArrowViewState()\" [@arrowPosition]=\"_getArrowViewState()\" [@allowChildren]=\"_getArrowDirectionState()\" (@arrowPosition.start)=\"_disableViewStateAnimation = true\" (@arrowPosition.done)=\"_disableViewStateAnimation = false\"><div class=\"mat-sort-header-stem\"></div><div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\"><div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div><div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div><div class=\"mat-sort-header-pointer-middle\"></div></div></div></div>",
                    styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}@media screen and (-ms-high-contrast:active){.mat-sort-header-stem{width:0;border-left:solid 2px}}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}@media screen and (-ms-high-contrast:active){.mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}@media screen and (-ms-high-contrast:active){.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
                    host: {
                        '(click)': '_handleClick()',
                        '(mouseenter)': '_setIndicatorHintVisible(true)',
                        '(longpress)': '_setIndicatorHintVisible(true)',
                        '(mouseleave)': '_setIndicatorHintVisible(false)',
                        '[attr.aria-sort]': '_getAriaSortAttribute()',
                        '[class.mat-sort-header-disabled]': '_isDisabled()',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    inputs: ['disabled'],
                    animations: [
                        matSortAnimations.indicator,
                        matSortAnimations.leftPointer,
                        matSortAnimations.rightPointer,
                        matSortAnimations.arrowOpacity,
                        matSortAnimations.arrowPosition,
                        matSortAnimations.allowChildren,
                    ]
                },] },
    ];
    /** @nocollapse */
    MatSortHeader.ctorParameters = function () { return [
        { type: MatSortHeaderIntl },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: MatSort, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: ['MAT_SORT_HEADER_COLUMN_DEF',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
    ]; };
    MatSortHeader.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mat-sort-header',] }],
        arrowPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        start: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        disableClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return MatSortHeader;
}(_MatSortHeaderMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatSortModule = /** @class */ (function () {
    function MatSortModule() {
    }
    MatSortModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
                    exports: [MatSort, MatSortHeader],
                    declarations: [MatSort, MatSortHeader],
                    providers: [MAT_SORT_HEADER_INTL_PROVIDER]
                },] },
    ];
    return MatSortModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=sort.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/table.es5.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/table.es5.js ***!
  \**********************************************************/
/*! exports provided: MatTableModule, MatCellDef, MatHeaderCellDef, MatFooterCellDef, MatColumnDef, MatHeaderCell, MatFooterCell, MatCell, MatTable, MatHeaderRowDef, MatFooterRowDef, MatRowDef, MatHeaderRow, MatFooterRow, MatRow, MatTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableModule", function() { return MatTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCellDef", function() { return MatCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function() { return MatHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function() { return MatFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatColumnDef", function() { return MatColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function() { return MatHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCell", function() { return MatFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCell", function() { return MatCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTable", function() { return MatTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function() { return MatHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function() { return MatFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRowDef", function() { return MatRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function() { return MatHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRow", function() { return MatFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRow", function() { return MatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function() { return MatTableDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Wrapper for the CdkTable with Material design styles.
 * @template T
 */
var MatTable = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatTable, _super);
    function MatTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Overrides the sticky CSS class set by the `CdkTable`.
         */
        _this.stickyCssClass = 'mat-table-sticky';
        return _this;
    }
    MatTable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: 'mat-table, table[mat-table]',
                    exportAs: 'matTable',
                    template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE_TEMPLATE"],
                    styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],
                    host: {
                        'class': 'mat-table',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    return MatTable;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
var MatCellDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatCellDef, _super);
    function MatCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatCellDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[matCellDef]',
                    providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"], useExisting: MatCellDef }]
                },] },
    ];
    return MatCellDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"]));
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
var MatHeaderCellDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatHeaderCellDef, _super);
    function MatHeaderCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatHeaderCellDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[matHeaderCellDef]',
                    providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"], useExisting: MatHeaderCellDef }]
                },] },
    ];
    return MatHeaderCellDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"]));
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
var MatFooterCellDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatFooterCellDef, _super);
    function MatFooterCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatFooterCellDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[matFooterCellDef]',
                    providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"], useExisting: MatFooterCellDef }]
                },] },
    ];
    return MatFooterCellDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"]));
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 */
var MatColumnDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatColumnDef, _super);
    function MatColumnDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatColumnDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[matColumnDef]',
                    providers: [
                        { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], useExisting: MatColumnDef },
                        { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
                    ],
                },] },
    ];
    MatColumnDef.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matColumnDef',] }],
        sticky: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        stickyEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return MatColumnDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]));
/**
 * Header cell template container that adds the right classes and role.
 */
var MatHeaderCell = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatHeaderCell, _super);
    function MatHeaderCell(columnDef, elementRef) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        elementRef.nativeElement.classList.add("mat-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    MatHeaderCell.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: 'mat-header-cell, th[mat-header-cell]',
                    host: {
                        'class': 'mat-header-cell',
                        'role': 'columnheader',
                    },
                },] },
    ];
    /** @nocollapse */
    MatHeaderCell.ctorParameters = function () { return [
        { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return MatHeaderCell;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"]));
/**
 * Footer cell template container that adds the right classes and role.
 */
var MatFooterCell = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatFooterCell, _super);
    function MatFooterCell(columnDef, elementRef) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        elementRef.nativeElement.classList.add("mat-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    MatFooterCell.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: 'mat-footer-cell, td[mat-footer-cell]',
                    host: {
                        'class': 'mat-footer-cell',
                        'role': 'gridcell',
                    },
                },] },
    ];
    /** @nocollapse */
    MatFooterCell.ctorParameters = function () { return [
        { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return MatFooterCell;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCell"]));
/**
 * Cell template container that adds the right classes and role.
 */
var MatCell = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatCell, _super);
    function MatCell(columnDef, elementRef) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        elementRef.nativeElement.classList.add("mat-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    MatCell.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: 'mat-cell, td[mat-cell]',
                    host: {
                        'class': 'mat-cell',
                        'role': 'gridcell',
                    },
                },] },
    ];
    /** @nocollapse */
    MatCell.ctorParameters = function () { return [
        { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return MatCell;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Header row definition for the mat-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
var MatHeaderRowDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatHeaderRowDef, _super);
    function MatHeaderRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatHeaderRowDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[matHeaderRowDef]',
                    providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"], useExisting: MatHeaderRowDef }],
                    inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky'],
                },] },
    ];
    return MatHeaderRowDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"]));
/**
 * Footer row definition for the mat-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
var MatFooterRowDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatFooterRowDef, _super);
    function MatFooterRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatFooterRowDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[matFooterRowDef]',
                    providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"], useExisting: MatFooterRowDef }],
                    inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky'],
                },] },
    ];
    return MatFooterRowDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"]));
/**
 * Data row definition for the mat-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 * @template T
 */
var MatRowDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatRowDef, _super);
    function MatRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatRowDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[matRowDef]',
                    providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"], useExisting: MatRowDef }],
                    inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen'],
                },] },
    ];
    return MatRowDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"]));
/**
 * Footer template container that contains the cell outlet. Adds the right class and role.
 */
var MatHeaderRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatHeaderRow, _super);
    function MatHeaderRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatHeaderRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: 'mat-header-row, tr[mat-header-row]',
                    template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                    host: {
                        'class': 'mat-header-row',
                        'role': 'row',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                    exportAs: 'matHeaderRow',
                    providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"], useExisting: MatHeaderRow }],
                },] },
    ];
    return MatHeaderRow;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"]));
/**
 * Footer template container that contains the cell outlet. Adds the right class and role.
 */
var MatFooterRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatFooterRow, _super);
    function MatFooterRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatFooterRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: 'mat-footer-row, tr[mat-footer-row]',
                    template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                    host: {
                        'class': 'mat-footer-row',
                        'role': 'row',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                    exportAs: 'matFooterRow',
                    providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"], useExisting: MatFooterRow }],
                },] },
    ];
    return MatFooterRow;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"]));
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
var MatRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatRow, _super);
    function MatRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: 'mat-row, tr[mat-row]',
                    template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                    host: {
                        'class': 'mat-row',
                        'role': 'row',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                    exportAs: 'matRow',
                    providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"], useExisting: MatRow }],
                },] },
    ];
    return MatRow;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var EXPORTED_DECLARATIONS = [
    MatTable,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    MatHeaderRow,
    MatRow,
    MatFooterRow,
];
var MatTableModule = /** @class */ (function () {
    function MatTableModule() {
    }
    MatTableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
                    exports: EXPORTED_DECLARATIONS,
                    declarations: EXPORTED_DECLARATIONS,
                },] },
    ];
    return MatTableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
 * flaky browser support and the value not being defined in Closure's typings.
  @type {?} */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
 * which defines how row data is converted to a string for filter matching.
 * @template T
 */
var  /**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
 * which defines how row data is converted to a string for filter matching.
 * @template T
 */
MatTableDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatTableDataSource, _super);
    function MatTableDataSource(initialData) {
        if (initialData === void 0) { initialData = []; }
        var _this = _super.call(this) || this;
        /**
         * Stream emitting render data to the table (depends on ordered data changes).
         */
        _this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        /**
         * Stream that emits when a new filter string is set on the data source.
         */
        _this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('');
        /**
         * Subscription to the changes that should trigger an update to the table's rendered rows, such
         * as filtering, sorting, pagination, or base data changes.
         */
        _this._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"].EMPTY;
        /**
         * Data accessor function that is used for accessing data properties for sorting through
         * the default sortData function.
         * This default function assumes that the sort header IDs (which defaults to the column name)
         * matches the data's properties (e.g. column Xyz represents data['Xyz']).
         * May be set to a custom function for different behavior.
         * @param data Data object that is being accessed.
         * @param sortHeaderId The name of the column that represents the data.
         */
        _this.sortingDataAccessor = function (data, sortHeaderId) {
            /** @type {?} */
            var value = (/** @type {?} */ (data))[sortHeaderId];
            if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["_isNumberValue"])(value)) {
                /** @type {?} */
                var numberValue = Number(value);
                // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
                // leave them as strings. For more info: https://goo.gl/y5vbSg
                return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
            }
            return value;
        };
        /**
         * Gets a sorted copy of the data array based on the state of the MatSort. Called
         * after changes are made to the filtered data or when sort changes are emitted from MatSort.
         * By default, the function retrieves the active sort and its direction and compares data
         * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
         * of data ordering.
         * @param data The array of data that should be sorted.
         * @param sort The connected MatSort that holds the current sort state.
         */
        _this.sortData = function (data, sort) {
            /** @type {?} */
            var active = sort.active;
            /** @type {?} */
            var direction = sort.direction;
            if (!active || direction == '') {
                return data;
            }
            return data.sort(function (a, b) {
                /** @type {?} */
                var valueA = _this.sortingDataAccessor(a, active);
                /** @type {?} */
                var valueB = _this.sortingDataAccessor(b, active);
                /** @type {?} */
                var comparatorResult = 0;
                if (valueA != null && valueB != null) {
                    // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                    if (valueA > valueB) {
                        comparatorResult = 1;
                    }
                    else if (valueA < valueB) {
                        comparatorResult = -1;
                    }
                }
                else if (valueA != null) {
                    comparatorResult = 1;
                }
                else if (valueB != null) {
                    comparatorResult = -1;
                }
                return comparatorResult * (direction == 'asc' ? 1 : -1);
            });
        };
        /**
         * Checks if a data object matches the data source's filter string. By default, each data object
         * is converted to a string of its properties and returns true if the filter has
         * at least one occurrence in that string. By default, the filter string has its whitespace
         * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
         * filter matching.
         * @param data Data object used to check against the filter.
         * @param filter Filter string that has been set on the data source.
         * @return Whether the filter matches against the data
         */
        _this.filterPredicate = function (data, filter) {
            /** @type {?} */
            var dataStr = Object.keys(data).reduce(function (currentTerm, key) {
                // Use an obscure Unicode character to delimit the words in the concatenated string.
                // This avoids matches where the values of two columns combined will match the user's query
                // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
                // that has a very low chance of being typed in by somebody in a text field. This one in
                // particular is "White up-pointing triangle with dot" from
                // https://en.wikipedia.org/wiki/List_of_Unicode_characters
                return currentTerm + (/** @type {?} */ (data))[key] + '◬';
            }, '').toLowerCase();
            /** @type {?} */
            var transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) != -1;
        };
        _this._data = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](initialData);
        _this._updateChangeSubscription();
        return _this;
    }
    Object.defineProperty(MatTableDataSource.prototype, "data", {
        /** Array of data that should be rendered by the table, where each object represents one row. */
        get: /**
         * Array of data that should be rendered by the table, where each object represents one row.
         * @return {?}
         */
        function () { return this._data.value; },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) { this._data.next(data); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTableDataSource.prototype, "filter", {
        /**
         * Filter term that should be used to filter out objects from the data array. To override how
         * data objects match to this filter string, provide a custom function for filterPredicate.
         */
        get: /**
         * Filter term that should be used to filter out objects from the data array. To override how
         * data objects match to this filter string, provide a custom function for filterPredicate.
         * @return {?}
         */
        function () { return this._filter.value; },
        set: /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) { this._filter.next(filter); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTableDataSource.prototype, "sort", {
        /**
         * Instance of the MatSort directive used by the table to control its sorting. Sort changes
         * emitted by the MatSort will trigger an update to the table's rendered data.
         */
        get: /**
         * Instance of the MatSort directive used by the table to control its sorting. Sort changes
         * emitted by the MatSort will trigger an update to the table's rendered data.
         * @return {?}
         */
        function () { return this._sort; },
        set: /**
         * @param {?} sort
         * @return {?}
         */
        function (sort) {
            this._sort = sort;
            this._updateChangeSubscription();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTableDataSource.prototype, "paginator", {
        /**
         * Instance of the MatPaginator component used by the table to control what page of the data is
         * displayed. Page changes emitted by the MatPaginator will trigger an update to the
         * table's rendered data.
         *
         * Note that the data source uses the paginator's properties to calculate which page of data
         * should be displayed. If the paginator receives its properties as template inputs,
         * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
         * initialized before assigning it to this data source.
         */
        get: /**
         * Instance of the MatPaginator component used by the table to control what page of the data is
         * displayed. Page changes emitted by the MatPaginator will trigger an update to the
         * table's rendered data.
         *
         * Note that the data source uses the paginator's properties to calculate which page of data
         * should be displayed. If the paginator receives its properties as template inputs,
         * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
         * initialized before assigning it to this data source.
         * @return {?}
         */
        function () { return this._paginator; },
        set: /**
         * @param {?} paginator
         * @return {?}
         */
        function (paginator) {
            this._paginator = paginator;
            this._updateChangeSubscription();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     */
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     * @return {?}
     */
    MatTableDataSource.prototype._updateChangeSubscription = /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var sortChange = this._sort ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._sort.sortChange, this._sort.initialized) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
        /** @type {?} */
        var pageChange = this._paginator ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._paginator.page, this._paginator.initialized) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
        /** @type {?} */
        var dataStream = this._data;
        /** @type {?} */
        var filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(dataStream, this._filter)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_a) {
            var data = _a[0];
            return _this._filterData(data);
        }));
        /** @type {?} */
        var orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(filteredData, sortChange)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_a) {
            var data = _a[0];
            return _this._orderData(data);
        }));
        /** @type {?} */
        var paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(orderedData, pageChange)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_a) {
            var data = _a[0];
            return _this._pageData(data);
        }));
        // Watched for paged data changes and send the result to the table to render.
        this._renderChangesSubscription.unsubscribe();
        this._renderChangesSubscription = paginatedData.subscribe(function (data) { return _this._renderData.next(data); });
    };
    /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterTermAccessor function. If no filter is set, returns the data array
     * as provided.
     */
    /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterTermAccessor function. If no filter is set, returns the data array
     * as provided.
     * @param {?} data
     * @return {?}
     */
    MatTableDataSource.prototype._filterData = /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterTermAccessor function. If no filter is set, returns the data array
     * as provided.
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        // If there is a filter string, filter out data that does not contain it.
        // Each data object is converted to a string using the function defined by filterTermAccessor.
        // May be overridden for customization.
        this.filteredData =
            !this.filter ? data : data.filter(function (obj) { return _this.filterPredicate(obj, _this.filter); });
        if (this.paginator) {
            this._updatePaginator(this.filteredData.length);
        }
        return this.filteredData;
    };
    /**
     * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     */
    /**
     * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     * @param {?} data
     * @return {?}
     */
    MatTableDataSource.prototype._orderData = /**
     * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // If there is no active sort or direction, return the data without trying to sort.
        if (!this.sort) {
            return data;
        }
        return this.sortData(data.slice(), this.sort);
    };
    /**
     * Returns a paged splice of the provided data array according to the provided MatPaginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     */
    /**
     * Returns a paged splice of the provided data array according to the provided MatPaginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     * @param {?} data
     * @return {?}
     */
    MatTableDataSource.prototype._pageData = /**
     * Returns a paged splice of the provided data array according to the provided MatPaginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (!this.paginator) {
            return data;
        }
        /** @type {?} */
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.slice().splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     */
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     * @param {?} filteredDataLength
     * @return {?}
     */
    MatTableDataSource.prototype._updatePaginator = /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     * @param {?} filteredDataLength
     * @return {?}
     */
    function (filteredDataLength) {
        var _this = this;
        Promise.resolve().then(function () {
            if (!_this.paginator) {
                return;
            }
            _this.paginator.length = filteredDataLength;
            // If the page index is set beyond the page, reduce it to the last page.
            if (_this.paginator.pageIndex > 0) {
                /** @type {?} */
                var lastPageIndex = Math.ceil(_this.paginator.length / _this.paginator.pageSize) - 1 || 0;
                _this.paginator.pageIndex = Math.min(_this.paginator.pageIndex, lastPageIndex);
            }
        });
    };
    /**
     * Used by the MatTable. Called when it connects to the data source.
     * @docs-private
     */
    /**
     * Used by the MatTable. Called when it connects to the data source.
     * \@docs-private
     * @return {?}
     */
    MatTableDataSource.prototype.connect = /**
     * Used by the MatTable. Called when it connects to the data source.
     * \@docs-private
     * @return {?}
     */
    function () { return this._renderData; };
    /**
     * Used by the MatTable. Called when it is destroyed. No-op.
     * @docs-private
     */
    /**
     * Used by the MatTable. Called when it is destroyed. No-op.
     * \@docs-private
     * @return {?}
     */
    MatTableDataSource.prototype.disconnect = /**
     * Used by the MatTable. Called when it is destroyed. No-op.
     * \@docs-private
     * @return {?}
     */
    function () { };
    return MatTableDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=table.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/tooltip.es5.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/tooltip.es5.js ***!
  \************************************************************/
/*! exports provided: MatTooltipModule, getMatTooltipInvalidPositionError, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltip, TooltipComponent, matTooltipAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function() { return MatTooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function() { return getMatTooltipInvalidPositionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function() { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function() { return MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function() { return SCROLL_THROTTLE_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function() { return TOOLTIP_PANEL_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function() { return MAT_TOOLTIP_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function() { return MAT_TOOLTIP_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltip", function() { return MatTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function() { return matTooltipAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Animations used by MatTooltip.
 * \@docs-private
  @type {?} */
var matTooltipAnimations = {
    /** Animation that transitions a tooltip in and out. */
    tooltipState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('state', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('initial, void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.5, transform: 'scale(0.99)', offset: 0.5 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)', offset: 1 })
        ]))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))),
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Time in ms to throttle repositioning after scroll events.
  @type {?} */
var SCROLL_THROTTLE_MS = 20;
/** *
 * CSS class that will be attached to the overlay panel.
  @type {?} */
var TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
/**
 * Creates an error to be thrown if the user supplied an invalid tooltip position.
 * \@docs-private
 * @param {?} position
 * @return {?}
 */
function getMatTooltipInvalidPositionError(position) {
    return Error("Tooltip position \"" + position + "\" is invalid.");
}
/** *
 * Injection token that determines the scroll handling while a tooltip is visible.
  @type {?} */
var MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["InjectionToken"]('mat-tooltip-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition({ scrollThrottle: SCROLL_THROTTLE_MS }); };
}
/** *
 * \@docs-private
  @type {?} */
var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_TOOLTIP_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"]],
    useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY,
};
/** *
 * Injection token to be used to override the default options for `matTooltip`.
  @type {?} */
var MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["InjectionToken"]('mat-tooltip-default-options', {
    providedIn: 'root',
    factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
    return {
        showDelay: 0,
        hideDelay: 0,
        touchendHideDelay: 1500,
    };
}
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.io/design/components/tooltips.html
 */
var MatTooltip = /** @class */ (function () {
    function MatTooltip(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions, hammerLoader) {
        var _this = this;
        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewContainerRef = _viewContainerRef;
        this._ngZone = _ngZone;
        this._ariaDescriber = _ariaDescriber;
        this._focusMonitor = _focusMonitor;
        this._dir = _dir;
        this._defaultOptions = _defaultOptions;
        this._position = 'below';
        this._disabled = false;
        /**
         * The default delay in ms before showing the tooltip after show is called
         */
        this.showDelay = this._defaultOptions.showDelay;
        /**
         * The default delay in ms before hiding the tooltip after hide is called
         */
        this.hideDelay = this._defaultOptions.hideDelay;
        this._message = '';
        this._manualListeners = new Map();
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
        this._scrollStrategy = scrollStrategy;
        /** @type {?} */
        var element = _elementRef.nativeElement;
        /** @type {?} */
        var elementStyle = /** @type {?} */ (element.style);
        /** @type {?} */
        var hasGestures = typeof window === 'undefined' || (/** @type {?} */ (window)).Hammer || hammerLoader;
        // The mouse events shouldn't be bound on mobile devices, because they can prevent the
        // first tap from firing its click event or can cause the tooltip to open for clicks.
        if (!platform.IOS && !platform.ANDROID) {
            this._manualListeners
                .set('mouseenter', function () { return _this.show(); })
                .set('mouseleave', function () { return _this.hide(); });
        }
        else if (!hasGestures) {
            // If Hammerjs isn't loaded, fall back to showing on `touchstart`, otherwise
            // there's no way for the user to trigger the tooltip on a touch device.
            this._manualListeners.set('touchstart', function () { return _this.show(); });
        }
        this._manualListeners.forEach(function (listener, event) { return element.addEventListener(event, listener); });
        if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
            // When we bind a gesture event on an element (in this case `longpress`), HammerJS
            // will add some inline styles by default, including `user-select: none`. This is
            // problematic on iOS and in Safari, because it will prevent users from typing in inputs.
            // Since `user-select: none` is not needed for the `longpress` event and can cause unexpected
            // behavior for text fields, we always clear the `user-select` to avoid such issues.
            elementStyle.webkitUserSelect = elementStyle.userSelect = elementStyle.msUserSelect = '';
        }
        // Hammer applies `-webkit-user-drag: none` on all elements by default,
        // which breaks the native drag&drop. If the consumer explicitly made
        // the element draggable, clear the `-webkit-user-drag`.
        if (element.draggable && elementStyle.webkitUserDrag === 'none') {
            elementStyle.webkitUserDrag = '';
        }
        _focusMonitor.monitor(_elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this._destroyed)).subscribe(function (origin) {
            // Note that the focus monitor runs outside the Angular zone.
            if (!origin) {
                _ngZone.run(function () { return _this.hide(0); });
            }
            else if (origin === 'keyboard') {
                _ngZone.run(function () { return _this.show(); });
            }
        });
    }
    Object.defineProperty(MatTooltip.prototype, "position", {
        /** Allows the user to define the position of the tooltip relative to the parent element */
        get: /**
         * Allows the user to define the position of the tooltip relative to the parent element
         * @return {?}
         */
        function () { return this._position; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._position) {
                this._position = value;
                if (this._overlayRef) {
                    this._updatePosition();
                    if (this._tooltipInstance) {
                        /** @type {?} */ ((this._tooltipInstance)).show(0);
                    }
                    this._overlayRef.updatePosition();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTooltip.prototype, "disabled", {
        /** Disables the display of the tooltip. */
        get: /**
         * Disables the display of the tooltip.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            // If tooltip is disabled, hide immediately.
            if (this._disabled) {
                this.hide(0);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTooltip.prototype, "message", {
        /** The message to be displayed in the tooltip */
        get: /**
         * The message to be displayed in the tooltip
         * @return {?}
         */
        function () { return this._message; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message);
            // If the message is not a string (e.g. number), convert it to a string and trim it.
            this._message = value != null ? ("" + value).trim() : '';
            if (!this._message && this._isTooltipVisible()) {
                this.hide(0);
            }
            else {
                this._updateTooltipMessage();
                this._ariaDescriber.describe(this._elementRef.nativeElement, this.message);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTooltip.prototype, "tooltipClass", {
        /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
        get: /**
         * Classes to be passed to the tooltip. Supports the same syntax as `ngClass`.
         * @return {?}
         */
        function () { return this._tooltipClass; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tooltipClass = value;
            if (this._tooltipInstance) {
                this._setTooltipClass(this._tooltipClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Dispose the tooltip when destroyed.
     */
    /**
     * Dispose the tooltip when destroyed.
     * @return {?}
     */
    MatTooltip.prototype.ngOnDestroy = /**
     * Dispose the tooltip when destroyed.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._tooltipInstance = null;
        }
        // Clean up the event listeners set in the constructor
        this._manualListeners.forEach(function (listener, event) {
            _this._elementRef.nativeElement.removeEventListener(event, listener);
        });
        this._manualListeners.clear();
        this._destroyed.next();
        this._destroyed.complete();
        this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.message);
        this._focusMonitor.stopMonitoring(this._elementRef);
    };
    /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
    /**
     * Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input
     * @param {?=} delay
     * @return {?}
     */
    MatTooltip.prototype.show = /**
     * Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input
     * @param {?=} delay
     * @return {?}
     */
    function (delay) {
        var _this = this;
        if (delay === void 0) { delay = this.showDelay; }
        if (this.disabled || !this.message || (this._isTooltipVisible() &&
            !/** @type {?} */ ((this._tooltipInstance))._showTimeoutId && !/** @type {?} */ ((this._tooltipInstance))._hideTimeoutId)) {
            return;
        }
        /** @type {?} */
        var overlayRef = this._createOverlay();
        this._detach();
        this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["ComponentPortal"](TooltipComponent, this._viewContainerRef);
        this._tooltipInstance = overlayRef.attach(this._portal).instance;
        this._tooltipInstance.afterHidden()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this._destroyed))
            .subscribe(function () { return _this._detach(); });
        this._setTooltipClass(this._tooltipClass);
        this._updateTooltipMessage(); /** @type {?} */
        ((this._tooltipInstance)).show(delay);
    };
    /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
    /**
     * Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input
     * @param {?=} delay
     * @return {?}
     */
    MatTooltip.prototype.hide = /**
     * Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input
     * @param {?=} delay
     * @return {?}
     */
    function (delay) {
        if (delay === void 0) { delay = this.hideDelay; }
        if (this._tooltipInstance) {
            this._tooltipInstance.hide(delay);
        }
    };
    /** Shows/hides the tooltip */
    /**
     * Shows/hides the tooltip
     * @return {?}
     */
    MatTooltip.prototype.toggle = /**
     * Shows/hides the tooltip
     * @return {?}
     */
    function () {
        this._isTooltipVisible() ? this.hide() : this.show();
    };
    /** Returns true if the tooltip is currently visible to the user */
    /**
     * Returns true if the tooltip is currently visible to the user
     * @return {?}
     */
    MatTooltip.prototype._isTooltipVisible = /**
     * Returns true if the tooltip is currently visible to the user
     * @return {?}
     */
    function () {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
    };
    /** Handles the keydown events on the host element. */
    /**
     * Handles the keydown events on the host element.
     * @param {?} e
     * @return {?}
     */
    MatTooltip.prototype._handleKeydown = /**
     * Handles the keydown events on the host element.
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this._isTooltipVisible() && e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"]) {
            e.stopPropagation();
            this.hide(0);
        }
    };
    /** Handles the touchend events on the host element. */
    /**
     * Handles the touchend events on the host element.
     * @return {?}
     */
    MatTooltip.prototype._handleTouchend = /**
     * Handles the touchend events on the host element.
     * @return {?}
     */
    function () {
        this.hide(this._defaultOptions.touchendHideDelay);
    };
    /**
     * Create the overlay config and position strategy
     * @return {?}
     */
    MatTooltip.prototype._createOverlay = /**
     * Create the overlay config and position strategy
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._overlayRef) {
            return this._overlayRef;
        }
        /** @type {?} */
        var strategy = this._overlay.position()
            .flexibleConnectedTo(this._elementRef)
            .withTransformOriginOn('.mat-tooltip')
            .withFlexibleDimensions(false)
            .withViewportMargin(8);
        /** @type {?} */
        var scrollableAncestors = this._scrollDispatcher
            .getAncestorScrollContainers(this._elementRef);
        strategy.withScrollableContainers(scrollableAncestors);
        strategy.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this._destroyed)).subscribe(function (change) {
            if (_this._tooltipInstance) {
                if (change.scrollableViewProperties.isOverlayClipped && _this._tooltipInstance.isVisible()) {
                    // After position changes occur and the overlay is clipped by
                    // a parent scrollable then close the tooltip.
                    _this._ngZone.run(function () { return _this.hide(0); });
                }
            }
        });
        this._overlayRef = this._overlay.create({
            direction: this._dir,
            positionStrategy: strategy,
            panelClass: TOOLTIP_PANEL_CLASS,
            scrollStrategy: this._scrollStrategy()
        });
        this._updatePosition();
        this._overlayRef.detachments()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this._destroyed))
            .subscribe(function () { return _this._detach(); });
        return this._overlayRef;
    };
    /**
     * Detaches the currently-attached tooltip.
     * @return {?}
     */
    MatTooltip.prototype._detach = /**
     * Detaches the currently-attached tooltip.
     * @return {?}
     */
    function () {
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
        this._tooltipInstance = null;
    };
    /**
     * Updates the position of the current tooltip.
     * @return {?}
     */
    MatTooltip.prototype._updatePosition = /**
     * Updates the position of the current tooltip.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = /** @type {?} */ (((this._overlayRef)).getConfig().positionStrategy);
        /** @type {?} */
        var origin = this._getOrigin();
        /** @type {?} */
        var overlay = this._getOverlayPosition();
        position.withPositions([
            Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, origin.main, overlay.main),
            Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, origin.fallback, overlay.fallback)
        ]);
    };
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     */
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     * @return {?}
     */
    MatTooltip.prototype._getOrigin = /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isLtr = !this._dir || this._dir.value == 'ltr';
        /** @type {?} */
        var position = this.position;
        /** @type {?} */
        var originPosition;
        if (position == 'above' || position == 'below') {
            originPosition = { originX: 'center', originY: position == 'above' ? 'top' : 'bottom' };
        }
        else if (position == 'before' ||
            (position == 'left' && isLtr) ||
            (position == 'right' && !isLtr)) {
            originPosition = { originX: 'start', originY: 'center' };
        }
        else if (position == 'after' ||
            (position == 'right' && isLtr) ||
            (position == 'left' && !isLtr)) {
            originPosition = { originX: 'end', originY: 'center' };
        }
        else {
            throw getMatTooltipInvalidPositionError(position);
        }
        var _a = this._invertPosition(originPosition.originX, originPosition.originY), x = _a.x, y = _a.y;
        return {
            main: originPosition,
            fallback: { originX: x, originY: y }
        };
    };
    /** Returns the overlay position and a fallback position based on the user's preference */
    /**
     * Returns the overlay position and a fallback position based on the user's preference
     * @return {?}
     */
    MatTooltip.prototype._getOverlayPosition = /**
     * Returns the overlay position and a fallback position based on the user's preference
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isLtr = !this._dir || this._dir.value == 'ltr';
        /** @type {?} */
        var position = this.position;
        /** @type {?} */
        var overlayPosition;
        if (position == 'above') {
            overlayPosition = { overlayX: 'center', overlayY: 'bottom' };
        }
        else if (position == 'below') {
            overlayPosition = { overlayX: 'center', overlayY: 'top' };
        }
        else if (position == 'before' ||
            (position == 'left' && isLtr) ||
            (position == 'right' && !isLtr)) {
            overlayPosition = { overlayX: 'end', overlayY: 'center' };
        }
        else if (position == 'after' ||
            (position == 'right' && isLtr) ||
            (position == 'left' && !isLtr)) {
            overlayPosition = { overlayX: 'start', overlayY: 'center' };
        }
        else {
            throw getMatTooltipInvalidPositionError(position);
        }
        var _a = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY), x = _a.x, y = _a.y;
        return {
            main: overlayPosition,
            fallback: { overlayX: x, overlayY: y }
        };
    };
    /**
     * Updates the tooltip message and repositions the overlay according to the new message length
     * @return {?}
     */
    MatTooltip.prototype._updateTooltipMessage = /**
     * Updates the tooltip message and repositions the overlay according to the new message length
     * @return {?}
     */
    function () {
        var _this = this;
        // Must wait for the message to be painted to the tooltip so that the overlay can properly
        // calculate the correct positioning based on the size of the text.
        if (this._tooltipInstance) {
            this._tooltipInstance.message = this.message;
            this._tooltipInstance._markForCheck();
            this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this._destroyed)).subscribe(function () {
                if (_this._tooltipInstance) {
                    /** @type {?} */ ((_this._overlayRef)).updatePosition();
                }
            });
        }
    };
    /**
     * Updates the tooltip class
     * @param {?} tooltipClass
     * @return {?}
     */
    MatTooltip.prototype._setTooltipClass = /**
     * Updates the tooltip class
     * @param {?} tooltipClass
     * @return {?}
     */
    function (tooltipClass) {
        if (this._tooltipInstance) {
            this._tooltipInstance.tooltipClass = tooltipClass;
            this._tooltipInstance._markForCheck();
        }
    };
    /**
     * Inverts an overlay position.
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    MatTooltip.prototype._invertPosition = /**
     * Inverts an overlay position.
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        if (this.position === 'above' || this.position === 'below') {
            if (y === 'top') {
                y = 'bottom';
            }
            else if (y === 'bottom') {
                y = 'top';
            }
        }
        else {
            if (x === 'end') {
                x = 'start';
            }
            else if (x === 'start') {
                x = 'end';
            }
        }
        return { x: x, y: y };
    };
    MatTooltip.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Directive"], args: [{
                    selector: '[matTooltip]',
                    exportAs: 'matTooltip',
                    host: {
                        '(longpress)': 'show()',
                        '(keydown)': '_handleKeydown($event)',
                        '(touchend)': '_handleTouchend()',
                    },
                },] },
    ];
    /** @nocollapse */
    MatTooltip.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ElementRef"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollDispatcher"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgZone"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["AriaDescriber"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"], args: [MAT_TOOLTIP_SCROLL_STRATEGY,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"], args: [MAT_TOOLTIP_DEFAULT_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"], args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_LOADER"],] }] }
    ]; };
    MatTooltip.propDecorators = {
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"], args: ['matTooltipPosition',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"], args: ['matTooltipDisabled',] }],
        showDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"], args: ['matTooltipShowDelay',] }],
        hideDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"], args: ['matTooltipHideDelay',] }],
        message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"], args: ['matTooltip',] }],
        tooltipClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"], args: ['matTooltipClass',] }]
    };
    return MatTooltip;
}());
/**
 * Internal component that wraps the tooltip's content.
 * \@docs-private
 */
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(_changeDetectorRef, _breakpointObserver) {
        this._changeDetectorRef = _changeDetectorRef;
        this._breakpointObserver = _breakpointObserver;
        /**
         * Property watched by the animation framework to show or hide the tooltip
         */
        this._visibility = 'initial';
        /**
         * Whether interactions on the page should close the tooltip
         */
        this._closeOnInteraction = false;
        /**
         * Subject for notifying that the tooltip has been hidden from the view
         */
        this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
        /**
         * Stream that emits whether the user has a handset-sized display.
         */
        this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["Breakpoints"].Handset);
    }
    /**
     * Shows the tooltip with an animation originating from the provided origin
     * @param delay Amount of milliseconds to the delay showing the tooltip.
     */
    /**
     * Shows the tooltip with an animation originating from the provided origin
     * @param {?} delay Amount of milliseconds to the delay showing the tooltip.
     * @return {?}
     */
    TooltipComponent.prototype.show = /**
     * Shows the tooltip with an animation originating from the provided origin
     * @param {?} delay Amount of milliseconds to the delay showing the tooltip.
     * @return {?}
     */
    function (delay) {
        var _this = this;
        // Cancel the delayed hide if it is scheduled
        if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
            this._hideTimeoutId = null;
        }
        // Body interactions should cancel the tooltip if there is a delay in showing.
        this._closeOnInteraction = true;
        this._showTimeoutId = setTimeout(function () {
            _this._visibility = 'visible';
            _this._showTimeoutId = null;
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            _this._markForCheck();
        }, delay);
    };
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param delay Amount of milliseconds to delay showing the tooltip.
     */
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param {?} delay Amount of milliseconds to delay showing the tooltip.
     * @return {?}
     */
    TooltipComponent.prototype.hide = /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param {?} delay Amount of milliseconds to delay showing the tooltip.
     * @return {?}
     */
    function (delay) {
        var _this = this;
        // Cancel the delayed show if it is scheduled
        if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
            this._showTimeoutId = null;
        }
        this._hideTimeoutId = setTimeout(function () {
            _this._visibility = 'hidden';
            _this._hideTimeoutId = null;
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            _this._markForCheck();
        }, delay);
    };
    /** Returns an observable that notifies when the tooltip has been hidden from view. */
    /**
     * Returns an observable that notifies when the tooltip has been hidden from view.
     * @return {?}
     */
    TooltipComponent.prototype.afterHidden = /**
     * Returns an observable that notifies when the tooltip has been hidden from view.
     * @return {?}
     */
    function () {
        return this._onHide.asObservable();
    };
    /** Whether the tooltip is being displayed. */
    /**
     * Whether the tooltip is being displayed.
     * @return {?}
     */
    TooltipComponent.prototype.isVisible = /**
     * Whether the tooltip is being displayed.
     * @return {?}
     */
    function () {
        return this._visibility === 'visible';
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype._animationStart = /**
     * @return {?}
     */
    function () {
        this._closeOnInteraction = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipComponent.prototype._animationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var toState = /** @type {?} */ (event.toState);
        if (toState === 'hidden' && !this.isVisible()) {
            this._onHide.next();
        }
        if (toState === 'visible' || toState === 'hidden') {
            this._closeOnInteraction = true;
        }
    };
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.io/design/components/tooltips.html#behavior
     */
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.io/design/components/tooltips.html#behavior
     * @return {?}
     */
    TooltipComponent.prototype._handleBodyInteraction = /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.io/design/components/tooltips.html#behavior
     * @return {?}
     */
    function () {
        if (this._closeOnInteraction) {
            this.hide(0);
        }
    };
    /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     */
    /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     * @return {?}
     */
    TooltipComponent.prototype._markForCheck = /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     * @return {?}
     */
    function () {
        this._changeDetectorRef.markForCheck();
    };
    TooltipComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"], args: [{selector: 'mat-tooltip-component',
                    template: "<div class=\"mat-tooltip\" [ngClass]=\"tooltipClass\" [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\" [@state]=\"_visibility\" (@state.start)=\"_animationStart()\" (@state.done)=\"_animationDone($event)\">{{message}}</div>",
                    styles: [".mat-tooltip-panel{pointer-events:none!important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}@media screen and (-ms-high-contrast:active){.mat-tooltip{outline:solid 1px}}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectionStrategy"].OnPush,
                    animations: [matTooltipAnimations.tooltipState],
                    host: {
                        // Forces the element to have a layout in IE and Edge. This fixes issues where the element
                        // won't be rendered if the animations are disabled or there is no web animations polyfill.
                        '[style.zoom]': '_visibility === "visible" ? 1 : null',
                        '(body:click)': 'this._handleBodyInteraction()',
                        'aria-hidden': 'true',
                    }
                },] },
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectorRef"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"] }
    ]; };
    return TooltipComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatTooltipModule = /** @class */ (function () {
    function MatTooltipModule() {
    }
    MatTooltipModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"], args: [{
                    imports: [
                        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatCommonModule"],
                    ],
                    exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatCommonModule"]],
                    declarations: [MatTooltip, TooltipComponent],
                    entryComponents: [TooltipComponent],
                    providers: [
                        MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
                        { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["GestureConfig"] },
                    ]
                },] },
    ];
    return MatTooltipModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=tooltip.es5.js.map


/***/ })

}]);
//# sourceMappingURL=default~auth-auth-module-ngfactory~pages-Home-home-module-ngfactory~pages-Tournaments-tournament-mod~8f821bb5.js.map