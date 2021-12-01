
function loadPage(url) {
    fetch(url)
        .then(data => data.text())
        .then(html => document.getElementById('element').innerHTML = html);
}

