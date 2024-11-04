function insert_Row() {
    // Get the reference to the table using its id
    const table = document.getElementById('sampleTable');
    
    // Create a new row element
    const newRow = table.insertRow(0); // Insert the row at the top (index 0)
    
    // Insert two new cells in the new row
    const cell1 = newRow.insertCell(0); // Left cell
    const cell2 = newRow.insertCell(1); // Right cell

    // Set the content of the cells
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';
}
