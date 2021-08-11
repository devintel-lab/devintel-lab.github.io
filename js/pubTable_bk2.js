var categories = ["all", "csl", "msi", "apa", "cvml", "cogmod"]

var titleWordLimit = 12;


var dateCardImgs = {
    2021: "./imgs/year/2021.JPG",
    2020: "./imgs/year/2020.JPG",
    2019: "./imgs/year/2019.JPG",
    2018: "./imgs/year/2018.JPG",
    2017: "./imgs/year/2017.JPG",
    2016: "./imgs/year/2016.JPG",
    2015: "./imgs/year/2015.JPG",
    2014: "./imgs/year/2014.JPG",
    2013: "./imgs/year/2013.JPG",
    2012: "./imgs/year/2012.JPG",
    2011: "./imgs/year/2011.JPG",
    2010: "./imgs/year/2010.JPG",
    2009: "./imgs/year/2009.JPG",
    2008: "./imgs/year/2008.JPG",
    2007: "./imgs/year/2007.JPG",
    2006: "./imgs/year/2006.JPG",
    2005: "./imgs/year/2005.JPG",
    2004: "./imgs/year/2004.JPG",
	2003: "./imgs/year/2003.JPG",
    2002: "./imgs/year/2002.JPG"
	
	}


function redraw() {
    filterTable(window.settings.ctg)
}


function toggleImages() {
    if (window.settings.images) {
        window.settings.images = false
    } else {
        window.settings.images = true
    }
    redraw()
}

function setCtgBtnColor(ctg) {
    categories.forEach((c) => {
        let btn = document.getElementById(c)
        btn.classList.remove(...btn.classList);
        btn.classList.add('ui', 'black', 'button')
    })

    let btn = document.getElementById(ctg)
    btn.classList.remove(...btn.classList);
    btn.classList.add('ui', 'orange', 'button')
}

function makeTable(id) {
    let table = document.createElement('div')
    table.classList.add("pubTable")
    table.id = id
    return table
}

function filterTable(ctg) {
    setCtgBtnColor(ctg)
    let table = document.createElement('div')
    table.classList.add("pubTable")

    window.settings.ctg = ctg

    pubs = sortPubs(pubs)

    var currYear = null;

    for (i = 0; i < pubs.length; i++) {
        if (pubs[i].categories.includes(ctg) || ctg == "all") {
            let card = null

            if (currYear === null) {
                currYear = pubs[i].year
                dateCard = makeDateCard(pubs[i].year)
                brk = makeBreak()

                if (ctg === "all") {
                    table.append(brk)
                    table.append(dateCard)
                }

            }
            if (currYear != pubs[i].year) {
                dateCard = makeDateCard(pubs[i].year)
                brk = makeBreak()
                if (ctg === "all") {
                    table.append(brk)
                    table.append(dateCard)
                }

                currYear = pubs[i].year
            }

            card = makeCard(pubs[i])

            table.appendChild(card)
        }
    }
    deleteTable()
    let container = document.getElementById("cardContainer")
    container.appendChild(table)
}

function deleteTable() {
    let container = document.getElementById("cardContainer")
    container.innerHTML = ''
}

function makeBreak() {
    let brk = document.createElement('div')
    brk.classList.add("break")
    return brk
}

function makeCard(pub) {
    let card = document.createElement('div')
    card.classList.add("ui", "raised", "card")
    card.id = "pubCardFlat"

    // add image if toggle is set - toggle defaults to true
    if (window.settings.images) {
        let imgDiv = document.createElement('div')
        imgDiv.classList.add("image")
        let img = document.createElement('img')
        img.src = pubs[i].icon
        img.id = "cardImg"
        imgDiv.appendChild(img)
        card.appendChild(imgDiv)
        card.id = "pubCard"
    }

    // add content
    let contentDiv = document.createElement('div')
    contentDiv.classList.add("content")

    let header = document.createElement('a')
    header.classList.add("header")
    header.id = "paperTitle"
    header.href = pub.pdf
    var t = pub.title.split(" ")

    if (t.length > titleWordLimit) {
        // console.log(t[titleWordLimit].concat("..."))
        t[titleWordLimit] = t[titleWordLimit].concat("...")
    }
    title = t.slice(0, titleWordLimit + 1).join(" ")
    // console.log()
    header.innerHTML = title

    let meta = document.createElement('div')
    meta.classList.add("meta")
    meta.innerHTML = `${pub.journal} (${pub.year})`

    let auths = document.createElement('div')
    auths.classList.add("description")
    auths.innerHTML = pub.authors.join(", ")

    let extra = document.createElement('div')
    extra.classList.add("extra", "content")
    // let extraInner = document.createElement('a')
    // extraInner.innerHTML = pub.keywords.join(", ")
    //extra.innerHTML = pub.keywords.join(", ")
    // extra.appendChild(extraInner)

    contentDiv.appendChild(header)
    contentDiv.appendChild(meta)
    contentDiv.appendChild(auths)

    card.appendChild(contentDiv)
    card.appendChild(extra)

    return card

}

function makeDateCard(year) {
    let card = document.createElement('div')
    card.classList.add("ui", "card")
    // card.classList.add("ui", "circular", "segment", "center", "aligned")
    card.id = "dateDivider"

    let h2 = document.createElement("h2")
    // h2.classList.add("ui", "header")
    h2.innerHTML = year
    h2.id = "yearHeader"
    card.appendChild(h2)

    let imgDiv = document.createElement('div')
    imgDiv.classList.add("image")
    let img = document.createElement('img')
    img.src = dateCardImgs[year]
    img.id = "cardImgDate"
    imgDiv.appendChild(img)
    card.appendChild(imgDiv)

    return card
}

function sortPubs(pubs) {
    // console.log(pubs)
    let entries = Object.values(pubs);
    entries.sort((a, b) => {
        aAuth = a.authors[0].split(" ")
        bAuth = b.authors[0].split(" ")
        // first sort by year
        if (a.year < b.year) {
            return 1;
        }
        if (a.year > b.year) {
            return -1
        }

        // then alphabetically by first author
        //if (aAuth[aAuth.length - 1] > bAuth[bAuth.length - 1]) {
        //    return 1;
        //}
        //if (aAuth[aAuth.length - 1] < bAuth[bAuth.length - 1]) {
        //    return -1
        //}
    }
    )
    return entries;
}