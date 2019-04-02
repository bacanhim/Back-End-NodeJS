function started() {
    console.log("Started Download");
}

function update() {
    for (i = 0; i <= 100; i++) {
        console.log(i + "% of Download")
    }
}

function completed() {
    console.log("Download Complete")
}

function performDownload(started, update, completed) {
    started();
    update();
    completed();
}
// performDownload(started, update, completed);

var arrayUtils = require('./ArrayUtils.js');

console.log(arrayUtils.concatenate([5,1,6,5,6,2,6],[1,2,3,4,5,6]));