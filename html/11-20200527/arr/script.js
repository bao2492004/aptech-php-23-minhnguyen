var data = {
    "users": [
        {
            "id": 10,
            "name": "Ethyl Medhurst",
            "email": "noah.hand@example.org",
            "password": "$2y$10$GLfHbVK./jG2WD8QQ0.ZDOqqeJe7rz.hl827sKoHOhd9LLoXfyHHG",
            "created_at": "2019-03-26 04:55:04",
            "updated_at": "2019-03-26 04:55:04"
        },
        {
            "id": 9,
            "name": "Eula Lebsack PhD",
            "email": "schroeder.sylvan@example.org",
            "password": "$2y$10$.vzCIUVX34GibJ3.ObFqYu5Bd.Ig8PqF3adoLHza78eq510mfhy9G",
            "created_at": "2019-03-26 04:55:03",
            "updated_at": "2019-03-26 04:55:03"
        },
        {
            "id": 8,
            "name": "Mrs. Kathlyn Parisian DDS",
            "email": "ggrimes@example.net",
            "password": "$2y$10$N.DpYW9Sd0c8p3rSVjO0MeZ5e7idfPeKPZyOO77m8vNSEOnMws5O2",
            "created_at": "2019-03-26 04:55:03",
            "updated_at": "2019-03-26 04:55:03"
        }
    ]
};
var items = data['users'];
console.log(items);

function fillData() {
    
    for(var i = 0; i < items.length ; i++)
    {
        document.getElementById("table-body").innerHTML += 
        "<tr>"+
            "<td>"+items[i]["id"]+"</td>"+
            "<td>"+items[i]["name"]+"</td>"+
            "<td>"+items[i]["email"]+"</td>"+
            "<td>"+items[i]["password"]+"</td>"+
            "<td>"+items[i]["created_at"]+"</td>"+
            "<td>"+items[i]["updated_at"]+"</td>"+
        "</tr>";    
        // var tableRow = document.createElement("tr");
        // tBodyElement.appendChild(tableRow);
        // var tableData1 = document.createElement("td");
        // tableData1.innerHTML = items[i]["id"];

        // var tableData2 = document.createElement("td");
        // tableData2.innerHTML = items[i]["name"];
        
        // var tableData3 = document.createElement("td");
        // tableData3.innerHTML = items[i]["email"];

        // var tableData4 = document.createElement("td");
        // tableData4.innerHTML = items[i]["password"];

        // var tableData5 = document.createElement("td");
        // tableData5.innerHTML = items[i]["created_at"];

        // var tableData6 = document.createElement("td");
        // tableData6.innerHTML = items[i]["updated_at"];

        // tableRow.appendChild(tableData1);
        // tableRow.appendChild(tableData2);
        // tableRow.appendChild(tableData3);
        // tableRow.appendChild(tableData4);
        // tableRow.appendChild(tableData5);
        // tableRow.appendChild(tableData6);
    }
    
}