function addNewItem()
{
    let table = document.getElementById("items");
    let newItem = document.getElementById("new-item").value;

    if(newItem != "")
    {
        let row = table.insertRow(0);
        let cell = row.insertCell(0);
        cell.innerHTML = newItem + '<input type="checkbox" name="'+ newItem +'"></input>';
    }
}