// Function to fetch and display a random cat fact
function getCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('factDisplay').textContent = data.fact;
        })
        .catch(error => {
            document.getElementById('factDisplay').textContent = 'Error fetching fact.'
        });
}
