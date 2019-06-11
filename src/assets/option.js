let option

function getOption() {
    if (option) {
        return option
    }
    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveObject('Microsoft.XMLHttp')
    xhr.open('get', 'option.json', false)
    xhr.setRequestHeader('accept', 'application/json')
    xhr.send(null)
    return JSON.parse(xhr.responseText)
}

option = getOption()

export default option
