/*Добавление данных в таблицы*/
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const tableBody = document.querySelector('tbody');
    const priceElement = document.querySelector('#price');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Extract values from form fields
        const selectValue = event.target.querySelector('select').value;
        const volumeValue = event.target.querySelector('#exampleFormControlTextarea1').value;
        const weightValue = event.target.querySelector('#exampleFormControlTextarea2').value;

        // Calculate price (for demonstration purposes)
        let price = 0;
        if (volumeValue > 0 && weightValue > 0) {
            price = (volumeValue * 10) + (weightValue * 5);
        }

        // Update price display
        priceElement.textContent = price;

        // Create a new table row
        const newRow = document.createElement('tr');

        // Create table cells and fill with data
        const rowData = [
            document.createTextNode(tableBody.childElementCount + 1), // Row number
            document.createTextNode(volumeValue), // Volume
            document.createTextNode(selectValue), // Tariff
            document.createTextNode(weightValue), // Weight
            document.createTextNode(price) // Price
        ];

        rowData.forEach(data => {
            const newCell = document.createElement('td');
            newCell.appendChild(data);
            newRow.appendChild(newCell);
        });

        // Append the new row to the table body
        tableBody.appendChild(newRow);

        // Reset form fields
        event.target.reset();
    });
});
