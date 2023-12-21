function convertObjectToPromise(obj, target) {
    for (const key in obj) {
        const value = obj[key];
        if (value instanceof Promise) {
            value.then((val) => {
                const nestedProp = target[key];
                if (!nestedProp) {
                    nestedProp = {};
                }
                convertObjectToPromise(val, nestedProp);
            });
        } else {
            target[key] = value;
        }
    }
    return obj;
}

export default convertObjectToPromise;