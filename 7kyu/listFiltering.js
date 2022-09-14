function filter_list(l) {
    return l.filter(item => typeof item !== 'string')
}
filter_list([1,2,'a','b'])