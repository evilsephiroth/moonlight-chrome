// Called by the common.js module.
function attachListeners() {
    document.getElementById('startButton').addEventListener('click', startPushed);
    document.getElementById('stopButton').addEventListener('click', stopPushed);
}

// Called by the common.js module.
function moduleDidLoad() {
    // The module is not hidden by default so we can easily see if the plugin
    // failed to load.
    common.hideModule();
}

function getGFEHostIPField() {
    return document.getElementById('GFEHostIPField');
}

function startPushed() {
    common.naclModule.postMessage('setGFEHostIPField:' + getGFEHostIPField().value);
    //common.naclModule.postMessage('startPushed');
}

function stopPushed() {
    common.naclModule.postMessage('stopPushed');
}

// Called by the common.js module.
function handleMessage(msg) {
    var logEl = document.getElementById('GFEHostIPField');
    logEl.value = msg.data;
}

chrome.app.window.current().fullscreen();