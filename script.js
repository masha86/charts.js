var ctx = document.getElementById('weather').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'weather',
            data: [-2, 4, 7, 10, 6, 7, 9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 148, 80, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 148, 80, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {}
});

var ctx = document.getElementById('personWeight').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['winter', 'spring', 'summer', 'autumn'],
        datasets: [{
            label: 'weight',
            data: [55, 57, 56, 57],
            backgroundColor: 'rgba(169, 0, 84, 0.2)',
            borderColor: 'rgba(169, 0, 84, 1)',
        }]
    },

    options: {}
});

var ctx = document.getElementById('amountFood').getContext('2d');
var chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Breakfast', 'Lunch', 'Dinner'],
        datasets: [{
            data: [5, 6, 8],
            backgroundColor: ['rgba(225, 134, 0)', 'rgba(225, 181, 0)', 'rgba(178, 181, 0)'],
        
        }]
    },

    options: {}
});