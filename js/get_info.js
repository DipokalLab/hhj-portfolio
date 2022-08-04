// https://solved.ac/api/v3/user/show?handle=dipokal
// By DipokalHHJ 2021

all_tier = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ruby']
all_subtier = ['V', "IV", 'III', 'II', 'I']

// Solved AC 데이터 가져오기
async function getSolvedacUserData() {
    let response = await fetch("https://solved.ac/api/v3/user/show?handle=dipokal", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    let data = await response.json();
    return data;
}

// Solved AC 데이터 적용하기
async function loadSolvedacUserData() {     
    let data = await getSolvedacUserData();
    let calculateTier = await calculateSolvedacTier(data.tier);
    let count = document.querySelector('#totalSolvedCount');
    let tier = document.querySelector('#solvedTier');
    let maxstreak = document.querySelector('#solvedMaxStreak');

    count.innerHTML = `백준에서 <b class="text-primary">${data.solvedCount}문제</b>를 해결했습니다.`;
    tier.innerHTML = `Solvedac 티어는 <b class="text-primary">${calculateTier}</b> 입니다.`;
    maxstreak.innerHTML = `<b class="text-warning">${data.maxStreak}일 연속</b>으로 한 문제 이상 해결했었습니다.`;

}

function loadGithubData() {
  GitHubCalendar("#github_grass", "DipokalLab", { responsive: true, tooltips: false, global_stats: false});

}


// Solved AC 티어 계산
async function calculateSolvedacTier(idx) {     
    let tier = 0
    let subtier = 0

    if (Number.isInteger(idx/5)) {
        tier = Math.floor(idx/5)-1
    } else {
        tier = Math.floor(idx/5)
    }

    if (idx%5 == 1) {
        subtier = 0
    }else if (idx%5 == 0) {
        subtier = 4
    } else {
        subtier = (idx%5)-1
    }

    return `${all_tier[tier]} ${all_subtier[subtier]}`
}
