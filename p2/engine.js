állatok = ['Cica', 'Kutya', 'Malac', 'Krokodil', 'Zsiráf','Aligátor','Pelikán','Majom','Fecske','Gólya','Béka','Liba','Kacsa']
window.onload = () => {
    document
        .querySelector('body')
        .innerHTML = állatok
        .sort()
        .map((állat, i) => `
            <div class="a a${i % 3}">${állat}</div>
        `)
        .join('')
}