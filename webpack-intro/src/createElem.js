export function createElem(tag, innerText) {
    const elem = document.createElement(tag)
    elem.innerText = innerText
    document.body.append(elem)
}