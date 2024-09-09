állatok = ['Cica', 'Kutya', 'Malac', 'Krokodil', 'Zsiráf','Aligátor','Pelikán','Majom','Fecske','Gólya','Béka','Liba','Kacsa']
window.onload = () => {
    document
        .querySelector('body')
        .innerHTML = állatok
        .sort()
        .map((állat, i) => `
            <div draggable="true" class="a a${i % 3}">${állat}</div>
        `)
        .join('')
}