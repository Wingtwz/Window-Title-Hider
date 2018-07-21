function saveOptions(e) {
    browser.storage.local.set({
        prefix: document.querySelector("#prefix").value
    });
}

function restoreOptions() {
    browser.storage.local.get("prefix", (res) => {
        document.querySelector("#prefix").value = res.prefix || '';
    });
}
  
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
