const proto = Object.defineProperties({}, {
    [Symbol.toPrimitive]: {
        value() {
            return this.toString();
        },
    },
    [Symbol.toStringTag]: {
        get() {
            return 'Any';
        },
    },
    toString: {
        value(...args: string[]) {
            return args.join('.');
        },
        configurable: true,
    },
});

export default new Proxy(proto, {
    get(target, key, proxy) {
        if (target[key] === undefined) {
            const newProxy = Object.create(proxy);

            const toStringDescriptor = Object.getOwnPropertyDescriptor(proxy, 'toString');

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
});
