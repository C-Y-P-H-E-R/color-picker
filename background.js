let greet = "Welcome to Color picker!"

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ greet });
})