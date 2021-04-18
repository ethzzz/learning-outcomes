// 初始化变量
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// 复制 collection 以便测试
var collectionCopy = JSON.parse(JSON.stringify(collection));

// 请把你的代码写在这条注释以下
function updateRecords(id, prop, value) {
    if (prop === "tracks") {
        if (collection[id].hasOwnProperty('tracks') === false) {
            collection[id].tracks = [];
            collection[id][prop].push(value)
        } else if (collection[id].hasOwnProperty('tracks') === true) {
            if (value === "") {

            } else {
                collection[id][prop].push(value);
            }
        }
    } else {
        if (value === "") {
            delete collection[id][prop];
        } else {
            collection[id][prop] = value;
        }
    }
    return collection;
}

// 你可以修改这一行来测试你的代码
console.log(updateRecords(2548, "tracks", ""));