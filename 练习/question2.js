function unflatten(obj) {
    if (Object(obj) !== obj || Array.isArray(obj)) {
        return obj;
    }
    var result = {};
    var r = /\.?([^\.\[\]]+)|\[(\d+)\]/g;
    for (var prop in obj) {
        var matchs;
        var cur = result;
        var p = "";
        while (matchs = r.exec(prop)) {
            cur = cur[p] || (cur[p] = matchs[2] ? [] : {});
            p = matchs[2] || matchs[1];
        }
        cur[p] = obj[prop];
    }
    return result[""] || result;
}

console.log(unflatten({
    'A': 1,
    'B.A': 2,
    'B.B': 3,
    'CC.D.E': 4,
    'CC.D.F': 5
}))