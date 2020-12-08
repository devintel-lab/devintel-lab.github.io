var categories = ["all", "language learning", "perception action", "embodied social", "ai", "modeling"]

var titleWordLimit = 12;


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
    console.log(ctg)
    categories.forEach((c) => {
        let btn = document.getElementById(c)
        btn.classList.remove(...btn.classList);
        btn.classList.add('ui', 'black', 'basic', 'button')
        // console.log(btn.classList)
    })

    let btn = document.getElementById(ctg)
    btn.classList.remove(...btn.classList);
    btn.classList.add('ui', 'blue', 'primary', 'button')
}

function filterTable(ctg) {
    setCtgBtnColor(ctg)
    let table = document.createElement('div')
    table.classList.add("pubTable")
    window.settings.ctg = ctg

    var currYear = null;

    for (i = 0; i < pubs.length; i++) {
        if (pubs[i].categories.includes(ctg) || ctg == "all") {
            let card = null
            if (currYear === null) {
                currYear = pubs[i].year
            }
            if (currYear != pubs[i].year) {
                dateCard = makeDateCard(pubs[i].year)
                table.append(dateCard)
                currYear = pubs[i].year
            }
            if (window.settings.images) {
                card = makeCard(pubs[i])
            } else {
                card = makeFlat(pubs[i])
            }
            table.appendChild(card)

            // console.log(card)
            // console.log(i)
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

function makeCard(pub) {
    let card = document.createElement('div')
    card.classList.add("ui", "raised", "card")
    card.id = "pubCard"

    // add image
    let imgDiv = document.createElement('div')
    imgDiv.classList.add("image")
    let img = document.createElement('img')
    img.src = pubs[i].icon
    imgDiv.appendChild(img)
    card.appendChild(imgDiv)

    // add content
    let contentDiv = document.createElement('div')
    contentDiv.classList.add("content")

    let header = document.createElement('a')
    header.classList.add("header")
    header.id = "paperTitle"
    header.href = pub.pdf
    var t = pub.title.split(" ")

    if (t.length > titleWordLimit) {
        console.log(t[titleWordLimit].concat("..."))
        t[titleWordLimit] = t[titleWordLimit].concat("...")
    }
    title = t.slice(0, titleWordLimit + 1).join(" ")
    console.log()
    header.innerHTML = title

    let meta = document.createElement('div')
    meta.classList.add("meta")
    meta.innerHTML = `${pub.journal} (${pub.year})`

    let auths = document.createElement('div')
    auths.classList.add("description")
    auths.innerHTML = pub.authors.join(", ")

    let extra = document.createElement('div')
    extra.classList.add("extra", "content")
    let extraInner = document.createElement('a')
    extraInner.innerHTML = pub.keywords.join(", ")
    extra.appendChild(extraInner)


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
    h2.classList.add("ui", "header")
    h2.innerHTML = year

    card.appendChild(h2)

    return card
}

function makeFlat(pub) {
    let card = document.createElement('div')
    card.classList.add("ui", "raised", "card", "pubCard")

    // add content
    let contentDiv = document.createElement('div')
    contentDiv.classList.add("content")

    let header = document.createElement('a')
    header.classList.add("header")
    header.href = pub.pdf
    var t = pub.title.split(" ")

    if (t.length > titleWordLimit) {
        console.log(t[titleWordLimit].concat("..."))
        t[titleWordLimit] = t[titleWordLimit].concat("...")
    }
    title = t.slice(0, titleWordLimit + 1).join(" ")
    header.innerHTML = title

    let meta = document.createElement('div')
    meta.classList.add("meta")
    meta.innerHTML = `${pub.journal} (${pub.year})`

    let auths = document.createElement('div')
    auths.classList.add("description")
    auths.innerHTML = pub.authors.join(", ")

    let extra = document.createElement('div')
    extra.classList.add("extra", "content")
    let extraInner = document.createElement('a')
    extraInner.innerHTML = pub.keywords.join(", ")
    extra.appendChild(extraInner)


    contentDiv.appendChild(header)
    contentDiv.appendChild(meta)
    contentDiv.appendChild(auths)

    card.appendChild(contentDiv)
    card.appendChild(extra)



    return card

}