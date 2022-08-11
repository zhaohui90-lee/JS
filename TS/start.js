function start(arg) {
    if (typeof arg === 'string') {
        return commonCase(arg);
    }
    else if (Array.isArray(arg)) {
        return arg.map(commonCase).join(',');
    }
    else if (typeof arg === 'function') {
        return commonCase(arg());
    }
    else {
        return commonCase(arg.s);
    }
}
function commonCase(s) {
    return s;
}
function area(s) {
    if (s.kind === 'circle') {
        return Math.PI * s.radius * s.radius;
    }
    else if (s.kind === 'square') {
        return s.x * s.x;
    }
    else {
        return 0.5 * s.x * s.y;
    }
}
