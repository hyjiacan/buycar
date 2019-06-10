function setCookie(name, value) {
    let date = new Date()
    date.setDate(date.getDate() + 65535)
    if (!Array.isArray(value)) {
        let exists = getCookie(name)
        if (exists.indexOf(value)) {
            return
        }
        exists.push(value)
        value = exists
    }
    value = value.join(',')
    document.cookie = `${name}=${value};expires=${date.toGMTString()}`
}

function getCookie(name) {
    if (!document.cookie.length) {
        return []
    }

    let start = document.cookie.indexOf(name + "=")
    if (start === -1) {
        return []
    }
    start = start + name.length + 1
    let end = document.cookie.indexOf(";", start)
    if (end === -1) {
        end = document.cookie.length
    }
    let value = unescape(document.cookie.substring(start, end))
    if (!value) {
        return []
    }
    return value.split(',').map(v => parseInt(v))
}

export default {
    getItem: getCookie,
    setItem: setCookie
}
