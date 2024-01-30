
document.querySelectorAll('.card__num').forEach((ele) => {
    ele.addEventListener('click', () => {
        if (document.querySelector('.card__num--active')) {
        document.querySelector('.card__num--active').classList.remove('card__num--active');
    }
    
        ele.classList.add('card__num--active');
        const valBtn = ele.value;
        document.querySelector('.card__btn').addEventListener('click', () => {
            document.querySelector('.card1').style.display = 'flex';
        })
        document.querySelector('.card1__num').innerText = `You Selected ${valBtn} out of 5`;
    })
})

