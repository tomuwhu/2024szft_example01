állatok = ['Cica', 'Kutya', 'Malac', 'Krokodil', 'Zsiráf']
window.onload = () => {
    document.querySelectorAll('body')[0]
        .innerHTML = állatok
        .map(állat => `
            <div>${állat}</div>
        `).join('')
}