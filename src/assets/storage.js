function setCookie(name, value) {
    let date = new Date()
    date.setDate(date.getDate() + 65535)
    document.cookie = `${name}=${escape(value)};expires=${date.toGMTString()}`
}

function getCookie(name) {
    if (!document.cookie.length) {
        return ''
    }

    let start = document.cookie.indexOf(name + "=")
    if (start === -1) {
        return ''
    }
    start = start + name.length + 1
    let end = document.cookie.indexOf(";", start)
    if (end === -1) {
        end = document.cookie.length
    }
    return unescape(document.cookie.substring(start, end))
}

export default {
    getItem: getCookie,
    setItem: setCookie
}
