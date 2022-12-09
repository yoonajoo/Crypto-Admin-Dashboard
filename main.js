const chart = document.querySelector("#chart").getContext('2d');

// create a new chart instance
new Chart(chart, {
    type: 'line', 
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep','Oct', 'Nov'], 

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004], 
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 32569, 5000, 3000, 18234, 24832, 36855 ],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    }, 
    options: {
        responsive: true
    }
})


// SHOW OR HIDE SIDEBAR 
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})


// change theme - 어두운 테마 누르면 실행
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})

