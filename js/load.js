
function loadPage(url) {
    fetch(url)
        .then(data => data.text())
        .then(html => document.getElementById('element').innerHTML = html);
}

function loadMainPage() {
    loadPage('./main.html')
    setTimeout(() => {
      loadSolvedacUserData()
      loadGithubData()
    }, 1100);
}