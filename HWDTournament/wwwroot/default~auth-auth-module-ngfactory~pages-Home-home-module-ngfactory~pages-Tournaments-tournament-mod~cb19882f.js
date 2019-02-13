(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~auth-auth-module-ngfactory~pages-Home-home-module-ngfactory~pages-Tournaments-tournament-mod~cb19882f"],{

/***/ "./node_modules/@angular/material/esm5/button-toggle.es5.js":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/button-toggle.es5.js ***!
  \******************************************************************/
/*! exports provided: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggleGroupMultiple, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleBase, _MatButtonToggleMixinBase, MatButtonToggle, MatButtonToggleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", function() { return MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function() { return MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroupMultiple", function() { return MatButtonToggleGroupMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleChange", function() { return MatButtonToggleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroup", function() { return MatButtonToggleGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleBase", function() { return MatButtonToggleBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatButtonToggleMixinBase", function() { return _MatButtonToggleMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggle", function() { return MatButtonToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleModule", function() { return MatButtonToggleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
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
 * Injection token that can be used to configure the
 * default options for all button toggles within an app.
  @type {?} */
var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');
/** *
 * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * \@docs-private
  @type {?} */
var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () { return MatButtonToggleGroup; }),
    multi: true
};
/**
 * @deprecated Use `MatButtonToggleGroup` instead.
 * \@breaking-change 8.0.0
 */
var  /**
 * @deprecated Use `MatButtonToggleGroup` instead.
 * \@breaking-change 8.0.0
 */
MatButtonToggleGroupMultiple = /** @class */ (function () {
    function MatButtonToggleGroupMultiple() {
    }
    return MatButtonToggleGroupMultiple;
}());
/** @type {?} */
var _uniqueIdCounter = 0;
/**
 * Change event object emitted by MatButtonToggle.
 */
var  /**
 * Change event object emitted by MatButtonToggle.
 */
MatButtonToggleChange = /** @class */ (function () {
    function MatButtonToggleChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return MatButtonToggleChange;
}());
/**
 * Exclusive selection button toggle group that behaves like a radio-button group.
 */
var MatButtonToggleGroup = /** @class */ (function () {
    function MatButtonToggleGroup(_changeDetector, defaultOptions) {
        this._changeDetector = _changeDetector;
        this._vertical = false;
        this._multiple = false;
        this._disabled = false;
        /**
         * The method to be called in order to update ngModel.
         * Now `ngModel` binding is not supported in multiple selection mode.
         */
        this._controlValueAccessorChangeFn = function () { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         */
        this._onTouched = function () { };
        this._name = "mat-button-toggle-group-" + _uniqueIdCounter++;
        /**
         * Event that emits whenever the value of the group changes.
         * Used to facilitate two-way data binding.
         * \@docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when the group's value changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.appearance =
            defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
    }
    Object.defineProperty(MatButtonToggleGroup.prototype, "name", {
        /** `name` attribute for the underlying `input` element. */
        get: /**
         * `name` attribute for the underlying `input` element.
         * @return {?}
         */
        function () { return this._name; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._name = value;
            if (this._buttonToggles) {
                this._buttonToggles.forEach(function (toggle) { return toggle.name = _this._name; });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "vertical", {
        /** Whether the toggle group is vertical. */
        get: /**
         * Whether the toggle group is vertical.
         * @return {?}
         */
        function () { return this._vertical; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "value", {
        /** Value of the toggle group. */
        get: /**
         * Value of the toggle group.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var selected = this._selectionModel ? this._selectionModel.selected : [];
            if (this.multiple) {
                return selected.map(function (toggle) { return toggle.value; });
            }
            return selected[0] ? selected[0].value : undefined;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._setSelectionByValue(newValue);
            this.valueChange.emit(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "selected", {
        /** Selected button toggles in the group. */
        get: /**
         * Selected button toggles in the group.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var selected = this._selectionModel.selected;
            return this.multiple ? selected : (selected[0] || null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "multiple", {
        /** Whether multiple button toggles can be selected. */
        get: /**
         * Whether multiple button toggles can be selected.
         * @return {?}
         */
        function () { return this._multiple; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "disabled", {
        /** Whether multiple button toggle group is disabled. */
        get: /**
         * Whether multiple button toggle group is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            if (this._buttonToggles) {
                this._buttonToggles.forEach(function (toggle) { return toggle._markForCheck(); });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatButtonToggleGroup.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](this.multiple, undefined, false);
    };
    /**
     * @return {?}
     */
    MatButtonToggleGroup.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _a;
        (_a = this._selectionModel).select.apply(_a, this._buttonToggles.filter(function (toggle) { return toggle.checked; }));
    };
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value Value to be set to the model.
     */
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value Value to be set to the model.
     * @return {?}
     */
    MatButtonToggleGroup.prototype.writeValue = /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value Value to be set to the model.
     * @return {?}
     */
    function (value) {
        this.value = value;
        this._changeDetector.markForCheck();
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatButtonToggleGroup.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatButtonToggleGroup.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MatButtonToggleGroup.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /** Dispatch change event with current selection and group value. */
    /**
     * Dispatch change event with current selection and group value.
     * @return {?}
     */
    MatButtonToggleGroup.prototype._emitChangeEvent = /**
     * Dispatch change event with current selection and group value.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selected = this.selected;
        /** @type {?} */
        var source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
        /** @type {?} */
        var event = new MatButtonToggleChange(/** @type {?} */ ((source)), this.value);
        this._controlValueAccessorChangeFn(event.value);
        this.change.emit(event);
    };
    /**
     * Syncs a button toggle's selected state with the model value.
     * @param toggle Toggle to be synced.
     * @param select Whether the toggle should be selected.
     * @param isUserInput Whether the change was a result of a user interaction.
     */
    /**
     * Syncs a button toggle's selected state with the model value.
     * @param {?} toggle Toggle to be synced.
     * @param {?} select Whether the toggle should be selected.
     * @param {?=} isUserInput Whether the change was a result of a user interaction.
     * @return {?}
     */
    MatButtonToggleGroup.prototype._syncButtonToggle = /**
     * Syncs a button toggle's selected state with the model value.
     * @param {?} toggle Toggle to be synced.
     * @param {?} select Whether the toggle should be selected.
     * @param {?=} isUserInput Whether the change was a result of a user interaction.
     * @return {?}
     */
    function (toggle, select, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        // Deselect the currently-selected toggle, if we're in single-selection
        // mode and the button being toggled isn't selected at the moment.
        if (!this.multiple && this.selected && !toggle.checked) {
            (/** @type {?} */ (this.selected)).checked = false;
        }
        if (select) {
            this._selectionModel.select(toggle);
        }
        else {
            this._selectionModel.deselect(toggle);
        }
        // Only emit the change event for user input.
        if (isUserInput) {
            this._emitChangeEvent();
        }
        // Note: we emit this one no matter whether it was a user interaction, because
        // it is used by Angular to sync up the two-way data binding.
        this.valueChange.emit(this.value);
    };
    /** Checks whether a button toggle is selected. */
    /**
     * Checks whether a button toggle is selected.
     * @param {?} toggle
     * @return {?}
     */
    MatButtonToggleGroup.prototype._isSelected = /**
     * Checks whether a button toggle is selected.
     * @param {?} toggle
     * @return {?}
     */
    function (toggle) {
        return this._selectionModel.isSelected(toggle);
    };
    /** Determines whether a button toggle should be checked on init. */
    /**
     * Determines whether a button toggle should be checked on init.
     * @param {?} toggle
     * @return {?}
     */
    MatButtonToggleGroup.prototype._isPrechecked = /**
     * Determines whether a button toggle should be checked on init.
     * @param {?} toggle
     * @return {?}
     */
    function (toggle) {
        if (typeof this._rawValue === 'undefined') {
            return false;
        }
        if (this.multiple && Array.isArray(this._rawValue)) {
            return this._rawValue.some(function (value) { return toggle.value != null && value === toggle.value; });
        }
        return toggle.value === this._rawValue;
    };
    /**
     * Updates the selection state of the toggles in the group based on a value.
     * @param {?} value
     * @return {?}
     */
    MatButtonToggleGroup.prototype._setSelectionByValue = /**
     * Updates the selection state of the toggles in the group based on a value.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this._rawValue = value;
        if (!this._buttonToggles) {
            return;
        }
        if (this.multiple && value) {
            if (!Array.isArray(value)) {
                throw Error('Value must be an array in multiple-selection mode.');
            }
            this._clearSelection();
            value.forEach(function (currentValue) { return _this._selectValue(currentValue); });
        }
        else {
            this._clearSelection();
            this._selectValue(value);
        }
    };
    /**
     * Clears the selected toggles.
     * @return {?}
     */
    MatButtonToggleGroup.prototype._clearSelection = /**
     * Clears the selected toggles.
     * @return {?}
     */
    function () {
        this._selectionModel.clear();
        this._buttonToggles.forEach(function (toggle) { return toggle.checked = false; });
    };
    /**
     * Selects a value if there's a toggle that corresponds to it.
     * @param {?} value
     * @return {?}
     */
    MatButtonToggleGroup.prototype._selectValue = /**
     * Selects a value if there's a toggle that corresponds to it.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var correspondingOption = this._buttonToggles.find(function (toggle) {
            return toggle.value != null && toggle.value === value;
        });
        if (correspondingOption) {
            correspondingOption.checked = true;
            this._selectionModel.select(correspondingOption);
        }
    };
    MatButtonToggleGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'mat-button-toggle-group',
                    providers: [
                        MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR,
                        { provide: MatButtonToggleGroupMultiple, useExisting: MatButtonToggleGroup },
                    ],
                    host: {
                        'role': 'group',
                        'class': 'mat-button-toggle-group',
                        '[attr.aria-disabled]': 'disabled',
                        '[class.mat-button-toggle-vertical]': 'vertical',
                        '[class.mat-button-toggle-group-appearance-standard]': 'appearance === "standard"',
                    },
                    exportAs: 'matButtonToggleGroup',
                },] },
    ];
    /** @nocollapse */
    MatButtonToggleGroup.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,] }] }
    ]; };
    MatButtonToggleGroup.propDecorators = {
        _buttonToggles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () { return MatButtonToggle; }),] }],
        appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
    };
    return MatButtonToggleGroup;
}());
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatButtonToggleBase = /** @class */ (function () {
    function MatButtonToggleBase() {
    }
    return MatButtonToggleBase;
}());
/** @type {?} */
var _MatButtonToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisableRipple"])(MatButtonToggleBase);
/**
 * Single button inside of a toggle group.
 */
var MatButtonToggle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatButtonToggle, _super);
    function MatButtonToggle(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, 
    // @breaking-change 8.0.0 `defaultTabIndex` to be made a required parameter.
    defaultTabIndex, defaultOptions) {
        var _this = _super.call(this) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._elementRef = _elementRef;
        _this._focusMonitor = _focusMonitor;
        _this._isSingleSelector = false;
        _this._checked = false;
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        _this.ariaLabelledby = null;
        _this._disabled = false;
        /**
         * Event emitted when the group value changes.
         */
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** @type {?} */
        var parsedTabIndex = Number(defaultTabIndex);
        _this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
        _this.buttonToggleGroup = toggleGroup;
        _this.appearance =
            defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
        return _this;
    }
    Object.defineProperty(MatButtonToggle.prototype, "buttonId", {
        /** Unique ID for the underlying `button` element. */
        get: /**
         * Unique ID for the underlying `button` element.
         * @return {?}
         */
        function () { return this.id + "-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "appearance", {
        /** The appearance style of the button. */
        get: /**
         * The appearance style of the button.
         * @return {?}
         */
        function () {
            return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._appearance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "checked", {
        /** Whether the button is checked. */
        get: /**
         * Whether the button is checked.
         * @return {?}
         */
        function () {
            return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            if (newValue !== this._checked) {
                this._checked = newValue;
                if (this.buttonToggleGroup) {
                    this.buttonToggleGroup._syncButtonToggle(this, this._checked);
                }
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "disabled", {
        /** Whether the button is disabled. */
        get: /**
         * Whether the button is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.buttonToggleGroup && this.buttonToggleGroup.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatButtonToggle.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._isSingleSelector = this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
        this._type = this._isSingleSelector ? 'radio' : 'checkbox';
        this.id = this.id || "mat-button-toggle-" + _uniqueIdCounter++;
        if (this._isSingleSelector) {
            this.name = this.buttonToggleGroup.name;
        }
        if (this.buttonToggleGroup && this.buttonToggleGroup._isPrechecked(this)) {
            this.checked = true;
        }
        this._focusMonitor.monitor(this._elementRef, true);
    };
    /**
     * @return {?}
     */
    MatButtonToggle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._elementRef);
    };
    /** Focuses the button. */
    /**
     * Focuses the button.
     * @return {?}
     */
    MatButtonToggle.prototype.focus = /**
     * Focuses the button.
     * @return {?}
     */
    function () {
        this._buttonElement.nativeElement.focus();
    };
    /** Checks the button toggle due to an interaction with the underlying native button. */
    /**
     * Checks the button toggle due to an interaction with the underlying native button.
     * @return {?}
     */
    MatButtonToggle.prototype._onButtonClick = /**
     * Checks the button toggle due to an interaction with the underlying native button.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newChecked = this._isSingleSelector ? true : !this._checked;
        if (newChecked !== this._checked) {
            this._checked = newChecked;
            if (this.buttonToggleGroup) {
                this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
                this.buttonToggleGroup._onTouched();
            }
        }
        // Emit a change event when it's the single selector
        this.change.emit(new MatButtonToggleChange(this, this.value));
    };
    /**
     * Marks the button toggle as needing checking for change detection.
     * This method is exposed because the parent button toggle group will directly
     * update bound properties of the radio button.
     */
    /**
     * Marks the button toggle as needing checking for change detection.
     * This method is exposed because the parent button toggle group will directly
     * update bound properties of the radio button.
     * @return {?}
     */
    MatButtonToggle.prototype._markForCheck = /**
     * Marks the button toggle as needing checking for change detection.
     * This method is exposed because the parent button toggle group will directly
     * update bound properties of the radio button.
     * @return {?}
     */
    function () {
        // When the group value changes, the button will not be notified.
        // Use `markForCheck` to explicit update button toggle's status.
        this._changeDetectorRef.markForCheck();
    };
    MatButtonToggle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{selector: 'mat-button-toggle',
                    template: "<button #button class=\"mat-button-toggle-button\" type=\"button\" [id]=\"buttonId\" [attr.tabindex]=\"disabled ? -1 : tabIndex\" [attr.aria-pressed]=\"checked\" [disabled]=\"disabled || null\" [attr.name]=\"name || null\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" (click)=\"_onButtonClick()\"><div class=\"mat-button-toggle-label-content\"><ng-content></ng-content></div></button><div class=\"mat-button-toggle-focus-overlay\"></div><div class=\"mat-button-toggle-ripple\" matRipple [matRippleTrigger]=\"button\" [matRippleDisabled]=\"this.disableRipple || this.disabled\"></div>",
                    styles: [".mat-button-toggle-group,.mat-button-toggle-standalone{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}@media screen and (-ms-high-contrast:active){.mat-button-toggle-group,.mat-button-toggle-standalone{outline:solid 1px}}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border-radius:4px}@media screen and (-ms-high-contrast:active){.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}@media screen and (-ms-high-contrast:active){.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}@media screen and (-ms-high-contrast:active){.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}}@media (hover:none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}@media screen and (-ms-high-contrast:active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}}@media screen and (-ms-high-contrast:active){.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:0 0;color:inherit;padding:0;margin:0;font:inherit;outline:0;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    exportAs: 'matButtonToggle',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                    inputs: ['disableRipple'],
                    host: {
                        '[class.mat-button-toggle-standalone]': '!buttonToggleGroup',
                        '[class.mat-button-toggle-checked]': 'checked',
                        '[class.mat-button-toggle-disabled]': 'disabled',
                        '[class.mat-button-toggle-appearance-standard]': 'appearance === "standard"',
                        'class': 'mat-button-toggle',
                        // Always reset the tabindex to -1 so it doesn't conflict with the one on the `button`,
                        // but can still receive focus from things like cdkFocusInitial.
                        '[attr.tabindex]': '-1',
                        '[attr.id]': 'id',
                        '(focus)': 'focus()',
                    }
                },] },
    ];
    /** @nocollapse */
    MatButtonToggle.ctorParameters = function () { return [
        { type: MatButtonToggleGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"], args: ['tabindex',] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,] }] }
    ]; };
    MatButtonToggle.propDecorators = {
        ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-label',] }],
        ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-labelledby',] }],
        _buttonElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['button',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
    };
    return MatButtonToggle;
}(_MatButtonToggleMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatButtonToggleModule = /** @class */ (function () {
    function MatButtonToggleModule() {
    }
    MatButtonToggleModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"]],
                    exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle],
                    declarations: [MatButtonToggleGroup, MatButtonToggle],
                },] },
    ];
    return MatButtonToggleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=button-toggle.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/card.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/card.es5.js ***!
  \*********************************************************/
/*! exports provided: MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardImage, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardXlImage, MatCardAvatar, MatCard, MatCardHeader, MatCardTitleGroup, MatCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardContent", function() { return MatCardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardTitle", function() { return MatCardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardSubtitle", function() { return MatCardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardActions", function() { return MatCardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardFooter", function() { return MatCardFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardImage", function() { return MatCardImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardSmImage", function() { return MatCardSmImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardMdImage", function() { return MatCardMdImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardLgImage", function() { return MatCardLgImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardXlImage", function() { return MatCardXlImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardAvatar", function() { return MatCardAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCard", function() { return MatCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardHeader", function() { return MatCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardTitleGroup", function() { return MatCardTitleGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardModule", function() { return MatCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
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
 * Content of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardContent = /** @class */ (function () {
    function MatCardContent() {
    }
    MatCardContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-card-content',
                    host: { 'class': 'mat-card-content' }
                },] },
    ];
    return MatCardContent;
}());
/**
 * Title of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardTitle = /** @class */ (function () {
    function MatCardTitle() {
    }
    MatCardTitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "mat-card-title, [mat-card-title], [matCardTitle]",
                    host: {
                        'class': 'mat-card-title'
                    }
                },] },
    ];
    return MatCardTitle;
}());
/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardSubtitle = /** @class */ (function () {
    function MatCardSubtitle() {
    }
    MatCardSubtitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]",
                    host: {
                        'class': 'mat-card-subtitle'
                    }
                },] },
    ];
    return MatCardSubtitle;
}());
/**
 * Action section of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardActions = /** @class */ (function () {
    function MatCardActions() {
        /**
         * Position of the actions inside the card.
         */
        this.align = 'start';
    }
    MatCardActions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-card-actions',
                    exportAs: 'matCardActions',
                    host: {
                        'class': 'mat-card-actions',
                        '[class.mat-card-actions-align-end]': 'align === "end"',
                    }
                },] },
    ];
    MatCardActions.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return MatCardActions;
}());
/**
 * Footer of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardFooter = /** @class */ (function () {
    function MatCardFooter() {
    }
    MatCardFooter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-card-footer',
                    host: { 'class': 'mat-card-footer' }
                },] },
    ];
    return MatCardFooter;
}());
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardImage = /** @class */ (function () {
    function MatCardImage() {
    }
    MatCardImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-image], [matCardImage]',
                    host: { 'class': 'mat-card-image' }
                },] },
    ];
    return MatCardImage;
}());
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardSmImage = /** @class */ (function () {
    function MatCardSmImage() {
    }
    MatCardSmImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-sm-image], [matCardImageSmall]',
                    host: { 'class': 'mat-card-sm-image' }
                },] },
    ];
    return MatCardSmImage;
}());
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardMdImage = /** @class */ (function () {
    function MatCardMdImage() {
    }
    MatCardMdImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-md-image], [matCardImageMedium]',
                    host: { 'class': 'mat-card-md-image' }
                },] },
    ];
    return MatCardMdImage;
}());
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardLgImage = /** @class */ (function () {
    function MatCardLgImage() {
    }
    MatCardLgImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-lg-image], [matCardImageLarge]',
                    host: { 'class': 'mat-card-lg-image' }
                },] },
    ];
    return MatCardLgImage;
}());
/**
 * Large image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardXlImage = /** @class */ (function () {
    function MatCardXlImage() {
    }
    MatCardXlImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-xl-image], [matCardImageXLarge]',
                    host: { 'class': 'mat-card-xl-image' }
                },] },
    ];
    return MatCardXlImage;
}());
/**
 * Avatar image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardAvatar = /** @class */ (function () {
    function MatCardAvatar() {
    }
    MatCardAvatar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-avatar], [matCardAvatar]',
                    host: { 'class': 'mat-card-avatar' }
                },] },
    ];
    return MatCardAvatar;
}());
/**
 * A basic content container component that adds the styles of a Material design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - mat-card-title
 * - mat-card-subtitle
 * - mat-card-content
 * - mat-card-actions
 * - mat-card-footer
 */
var MatCard = /** @class */ (function () {
    function MatCard() {
    }
    MatCard.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-card',
                    exportAs: 'matCard',
                    template: "<ng-content></ng-content><ng-content select=\"mat-card-footer\"></ng-content>",
                    styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media screen and (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px 0}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-title{margin-bottom:8px}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: { 'class': 'mat-card' }
                },] },
    ];
    return MatCard;
}());
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * \@docs-private
 */
var MatCardHeader = /** @class */ (function () {
    function MatCardHeader() {
    }
    MatCardHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-card-header',
                    template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content><div class=\"mat-card-header-text\"><ng-content select=\"mat-card-title, mat-card-subtitle, [mat-card-title], [mat-card-subtitle], [matCardTitle], [matCardSubtitle]\"></ng-content></div><ng-content></ng-content>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: { 'class': 'mat-card-header' }
                },] },
    ];
    return MatCardHeader;
}());
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
 * layout that groups an image with a title section.
 * \@docs-private
 */
var MatCardTitleGroup = /** @class */ (function () {
    function MatCardTitleGroup() {
    }
    MatCardTitleGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-card-title-group',
                    template: "<div><ng-content select=\"mat-card-title, mat-card-subtitle, [mat-card-title], [mat-card-subtitle], [matCardTitle], [matCardSubtitle]\"></ng-content></div><ng-content select=\"img\"></ng-content><ng-content></ng-content>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: { 'class': 'mat-card-title-group' }
                },] },
    ];
    return MatCardTitleGroup;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatCardModule = /** @class */ (function () {
    function MatCardModule() {
    }
    MatCardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                    exports: [
                        MatCard,
                        MatCardHeader,
                        MatCardTitleGroup,
                        MatCardContent,
                        MatCardTitle,
                        MatCardSubtitle,
                        MatCardActions,
                        MatCardFooter,
                        MatCardSmImage,
                        MatCardMdImage,
                        MatCardLgImage,
                        MatCardImage,
                        MatCardXlImage,
                        MatCardAvatar,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"],
                    ],
                    declarations: [
                        MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle,
                        MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage,
                        MatCardXlImage, MatCardAvatar,
                    ],
                },] },
    ];
    return MatCardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=card.es5.js.map


/***/ })

}]);
//# sourceMappingURL=default~auth-auth-module-ngfactory~pages-Home-home-module-ngfactory~pages-Tournaments-tournament-mod~cb19882f.js.map