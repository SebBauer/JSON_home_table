'use strict';

var homeJSON = '{"pracownicy": [{"firstName": "Piotr", "lastName": "Kania"}, {"firstName": "Krzysztof", "lastName": "Nowak"}, {"firstName": "Manuel", "lastName": "Kowalski"}], "dostawcy": [{"firstName": "Krystyna", "lastName": "Nowak"}, {"firstName": "Anna", "lastName": "Nowakowska"}, {"firstName": "Marzena", "lastName": "Kowal"}]}';

var JSON_table = JSON.parse(homeJSON);
var end_table = '</table>';

var JSONhtml = '<table><tr><th>Pracownicy</th></tr>';

for(var i in JSON_table.pracownicy) {
    JSONhtml += '<tr><td>' + JSON_table.pracownicy[i].firstName + '</td><td>' + JSON_table.pracownicy[i].lastName + '</td></tr>';
    
    if(i == JSON_table.pracownicy.length - 1){
        JSONhtml += end_table;
    }
    
    }

JSONhtml += '<table><tr><th>Dostawcy</th></tr>';

for(var j in JSON_table.dostawcy) {
    JSONhtml += '<tr><td>' + JSON_table.dostawcy[j].firstName + '</td><td>' + JSON_table.dostawcy[j].lastName + '</td></tr>';
    
    if(j == JSON_table.dostawcy.length - 1){
        JSONhtml += end_table;
    }
    
    }

document.write(JSONhtml);
