// not finished
function compareVersions(version1, version2) {
    let v1 = [...version1]
    let v2 = [...version2]
    if (v1[3] != 1) {
        v1.splice(3, 0, '0')
    }
    if (v2[3] != 1) {
        v2.splice(3, 0, '0')
    }
    version1 = v1.join('')
    version2 = v2.join('')

    if (parseFloat(version1.slice(0, 5)) === parseFloat(version2.slice(0, 5))) {
        console.log(version1.length, version2.length)
        return version1.length >= version2.length
    }else if (parseFloat(version1) >= parseFloat(version2)) {
        return true
    }
    else {
        return false
    }
}
compareVersions("10.5", "10.5.4")