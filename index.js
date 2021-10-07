function addNewItem()
{
    let format = /[a-zA-Z]/g;
    let table = document.getElementById("items");
    let newItem = document.getElementById("new-item").value;
		let exist = false;
		
		for (var i = 0, row; row = table.rows[i]; i++) {
   		for (var j = 0, col; col = row.cells[j]; j++) {
				if(row.cells[j].id == 'i-' + "'" + newItem + "'") {
					exist = true;
				}
   		}  
		}


    if(newItem != "" && format.test(newItem) && !exist)
    {
        let row = table.insertRow(0);
        let cell = row.insertCell(0);
			cell.innerHTML = newItem + '<div class="item-inputs"><input type="checkbox" name="'+ newItem +'"></input>' + '<button type="button" class="btn btn-danger rm-item" onclick="delItem(\'i-\'' + newItem + '\'\')"><i class="fas fa-trash"></i></button></div>';
				cell.id = 'i-' + "'" + newItem + "'";
    }
}
