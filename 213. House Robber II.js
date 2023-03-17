function rob(n){
    let r1 = n[0], s1 = r2 = s2 = 0
    for(let i = 1; i<n.length;i++)
        [r1,s1,r2,s2] = [s1 + n[i], Math.max(r1, s1), s2 + n[i], Math.max(r2, s2)]
    return Math.max(s1, r2, s2, n[0]) || 0
}