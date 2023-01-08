class ProjectList extends HTMLElement {
    connectedCallback() {
        let match = this.getAttribute('match-tag')

        let table = document.createElement('table')
        table.classList.add("table", "table-dark", "table-striped")

        let thead = document.createElement('thead')
        let tbody = document.createElement('tbody')


        let projects = [
            {
                "title": "Frame",
                "tag": ["NodeJS", "MariaDB"],
                "link": "https://github.com/Team-DeVent/devent-frame"
            },
            {
                "title": "Deploy",
                "tag": ["NodeJS", "Docker", "Github", "Sqlite3", "Ngnix"],
                "link": "https://github.com/Team-DeVent/devent-deploy"
            },            
            {
                "title": "DeVent Design System",
                "tag": ["DS", "Webpack", "Sass", "WebComponent"],
                "link": "https://github.com/Team-DeVent/devent-designsystem"
            },
            {
                "title": "Gr0und",
                "tag": ["NodeJS", "ThreeJS", "Socket.io"],
                "link": "https://github.com/Team-DeVent/gr0und"
            },
            {
                "title": "DMP",
                "tag": ["NodeJS", "PWA", "SPA"],
                "link": "https://github.com/Team-DeVent/devent-musicplayer"
            },
            {
                "title": "Cludos",
                "tag": ["Docker"],
                "link": "https://freezing-pluto-006.notion.site/Cludos-a321a166b413448bad3ff9a9051a2d4d"
            },
            {
                "title": "V2(vision2)",
                "tag": ["RSA", "JWT", "OauthServer"],
                "link": "https://freezing-pluto-006.notion.site/Vision2-501d433782314f9398239a24037c85b6"
            },
            {
                "title": "Smoother",
                "tag": ["NodeJS", "Socket.io", "OTP"],
                "link": "https://freezing-pluto-006.notion.site/Vision2-501d433782314f9398239a24037c85b6"
            }
        ]

        let result = projects.filter((element) => {
          return element.tag.findIndex(i => i == match) >= 0 ? true : false
        });

        thead.innerHTML = `<tr class="d-none">
        <th scope="col">프로젝트 이름</th>
        <th scope="col">링크</th>
      </tr>`

        result.forEach((element) => {
            let tbody_tr = document.createElement('tr')
            let th_title = document.createElement('th')
            let th_link = document.createElement('th')
            let link = document.createElement('button')

            th_title.innerText = element.title
            link.setAttribute("onclick", `window.open('${element.link}')`)
            link.innerHTML = '<i class="fas fa-link"></i>'
            link.classList.add("btn", "text-primary", "text-icon", "btn-transparent")

            th_link.appendChild(link)
            th_link.classList.add("d-flex", "flex-row-reverse")

            tbody_tr.appendChild(th_title)
            tbody_tr.appendChild(th_link)
            tbody.appendChild(tbody_tr)
        })

        
        table.appendChild(thead)
        table.appendChild(tbody)
        this.appendChild(table)
    }
}


export { ProjectList }