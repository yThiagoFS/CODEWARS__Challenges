function DNAStrand(dna){
    let _dna = [...dna].map(item => item.toUpperCase())
    let modifiedDNA = []
    for(a in _dna) {
        if(_dna[a] === 'A') {
            modifiedDNA.push('T')
        } else if(_dna[a] === 'T') {
            modifiedDNA.push('A')
        } else if(_dna[a] === 'C') {
            modifiedDNA.push('G')
        } else if(_dna[a] === 'G') {
            modifiedDNA.push('C')
        }
    }
    return modifiedDNA.join('')
}
DNAStrand("AAAA")