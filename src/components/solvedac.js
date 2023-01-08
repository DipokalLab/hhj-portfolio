class SolvedAcUserData extends HTMLElement {
    constructor() {
        super()

        this.allTier = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ruby']
        this.allSubtier = ['V', "IV", 'III', 'II', 'I']
    }



    async getSolvedacUserData() {
        let response = await fetch("https://solved.ac/api/v3/user/show?handle=dipokal", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        let data = await response.json();
        return data;
    }

    async loadSolvedacUserData() {     
        let data = await this.getSolvedacUserData();
        let calculateTier = await this.calculateSolvedacTier(data.tier);
        let count = this.querySelector('#totalSolvedCount');
        let tier = this.querySelector('#solvedTier');
        let maxstreak = this.querySelector('#solvedMaxStreak');

        count.innerHTML = `백준에서 <b class="text-primary">${data.solvedCount}문제</b>를 해결했습니다.`;
        tier.innerHTML = `Solvedac 티어는 <b class="text-primary">${calculateTier}</b> 입니다.`;
        maxstreak.innerHTML = `<b class="text-warning">${data.maxStreak}일 연속</b>으로 한 문제 이상 해결했었습니다.`;

    }

    async calculateSolvedacTier(idx) {     
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

        return `${this.allTier[tier]} ${this.allSubtier[subtier]}`
    }

    render() {
        this.innerHTML = this.template();
        this.loadSolvedacUserData()
    }

    template() {
        return `
        <h5 id="totalSolvedCount" class="text-secondary font-title p-0">백준에서 <b class="text-primary">390문제</b>를 해결했습니다.</h5>
        <h5 id="solvedTier" class="text-secondary font-title p-0">Solvedac 티어는 <b class="text-primary">Gold III</b> 입니다.</h5>
        <h5 id="solvedMaxStreak" class="text-secondary font-title p-0"><b class="text-light">255일 연속</b>으로 한 문제 이상 해결했었습니다.</h5>
        `
    }

    connectedCallback() {
        this.render();

    }
}


export { SolvedAcUserData }