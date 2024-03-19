/**
 * Remove all elements with the given class name
 * @param {string} className The class name of the elements to remove
 */
function removeItemByClassName(className) {
    try {
        const elements = document.getElementsByClassName(className) // Get all elements with the given class name

        // Convert the HTMLCollection to an array and remove each element
        Array.from(elements).forEach(e => {
            e.remove() // Remove the element
        })
    } catch (e) {
        // Do nothing
    }
}

/**
 * Update the max width of the first element with the given class name
 * @param {string} className The class name of the element to update
 * @param {string} maxWidth The new max width
 */
function updateMaxWidthByClassName(className, maxWidth) {
    try {
        const elements = document.getElementsByClassName(className) // Get all elements with the given class name

        // Update the max width of the first element
        const element = elements.item(0)
        element.style.maxWidth = maxWidth
    } catch (e) {
        // Do nothing
    }

}

/**
 * Remove ads from the page
 */
function removeAds() {
    document.body.style.backgroundImage = '' // Remove background ads images

    const topBarElements = document.getElementsByClassName('logoCon') // Get top bar elements
    // Each child nodes of the first top bar element
    Array.from(topBarElements.item(0).childNodes).forEach(e => {
        if (e?.tagName !== 'A') { // Remove all elements that are not links
            e.remove()
        }
    })

    // Remove all elements with the given class names
    const elementsForRemoval = ['ggbe-firstcol-box', 'column-euvSWYMDm4JzUCnc-box', 'bg-sidebar', 'bg-enabler-child', 'mpv-container', 'matchpage-live-odds', 'player-oxVVUdvP123Gazx', '1xbet']

    // Each class name to remove
    elementsForRemoval.forEach(removeItemByClassName)
}

/**
 * Remove match comments from the page
 */
function removeMatchComments() {
    removeItemByClassName('match-comments')
}

/**
 * Make the page wide
 */
function wide() {
    updateMaxWidthByClassName('scoreboard', '100%')
    updateMaxWidthByClassName('bgPadding', '1250px')
    updateMaxWidthByClassName('widthControl', '100%')
}

// Run the functions
removeAds()
wide()
removeMatchComments()