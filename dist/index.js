"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var proto = Object.defineProperties({}, (_a = {},
    _a[Symbol.toPrimitive] = {
        value: function () {
            return this.toString();
        },
    },
    _a[Symbol.toStringTag] = {
        get: function () {
            return 'Any';
        },
    },
    _a.toString = {
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return args.join('.');
        },
        configurable: true,
    },
    _a));
exports.default = Object.preventExtensions(new Proxy(proto, {
    get: function (target, key, proxy) {
        if (target[key] === undefined) {
            var newProxy = Object.create(proxy);
            var toStringDescriptor = Object.getOwnPropertyDescriptor(proxy, 'toString');
            if (toStringDescriptor && typeof toStringDescriptor.value === 'function') {
                Object.defineProperty(newProxy, 'toString', {
                    value: proxy.toString.bind(newProxy, key),
                    configurable: true,
                });
            }
            return newProxy;
        }
        return target[key];
    }
}));
