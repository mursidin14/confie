export function makeCapital(name) {
    let nameArray = name.split(' ')
    let capitalName = ''
    nameArray.forEach(name => {
        capitalName += name.slice(0,1).toUpperCase() + name.slice(1) + ' '
    })
    return capitalName
}