function removeAds() {
    document.body.style.backgroundImage = '' // Remove background ads images

    const topBarElements = document.getElementsByClassName('logoCon')

    topBarElements.item(0).childNodes.forEach(e => {
    })

    console.log(topBarElements.item(0).childNodes)
}

console.log('======= RUNING SCRIPTS HLTV LITE =======')
removeAds()
