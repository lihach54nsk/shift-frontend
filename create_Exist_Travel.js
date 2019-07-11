var countTravel = 1;
var countPlace = 1;

function GetJason(jason) {
   return JSON.parse(jason);
}

function Create_List_Of_existing_Travels() {
    //let ret = createRequest();
    let xhrTravelsList = new XMLHttpRequest();
    xhrTravelsList.open('GET', '/api/v001/travels', true); // GetTravels()
    xhrTravelsList.onreadystatechange = function () {
        if (xhrTravelsList.readyState === XMLHttpRequest.DONE && xhrTravelsList.status === 200) {
            //alert('DONE GetTravel');
            let JSON = GetJason(xhrTravelsList.responseText);
            //alert(JSON.toString());
            countTravel = JSON.length;
            alert(countTravel);

            for(let i = 1; i <= countTravel; i++) {
                let findDiv = document.getElementsByClassName('travel_list');
                let newDiv = document.createElement('div');
                newDiv.className = 'exist_travels travel_' + i.toString();

                newDiv.innerHTML = "<p class=\"travel_name\">" + JSON[i - 1].name + "</p>\n" + // xhrTravelsList.responseText.nameOfTravel
                    "               <button type=\"submit\" class=\"editTravel_" + i.toString() + "\" value=\""+ JSON[i - 1].id.toString() + "\" onclick=\"Open_Exist_Travel(" + JSON[i - 1].id.toString() + ")\">Редактировать</button>\n";
                findDiv[0].appendChild(newDiv);
            }
        }
    }
    xhrTravelsList.setRequestHeader('userId', 'UserA');
    xhrTravelsList.send();
}

function Open_Exist_Travel(value) {
    document.location = "exist_Travel.html?value=" + value.toString();
}

var travelNoteId = -1;

function Create_Exist_Places() {
    //countPlace++;
    let travelId = window.location.href.split("?")[1].split("=")[1];

    let xhrTravels = new XMLHttpRequest(); // CHECK TO WORK - GetTravel() DONE
    xhrTravels.open('GET', '/api/v001/travels/' + travelId.toString(), false);
    xhrTravels.setRequestHeader('userId','UserA');
    xhrTravels.send();

    let JSONTravelName = GetJason(xhrTravels.responseText);
    document.querySelectorAll('div.name_of_Travel p input')[0].value = JSONTravelName.name;

    /*запрос и обработка количества мест
    * countPlace = n;
    * не забыть присвоить название путешествия в форме названия бэд-трипа
    * */

    let xhrTravelInfo = new XMLHttpRequest(); // GetMoves() DONE
    xhrTravelInfo.open('GET', '/api/v001/moves?travelId=' + travelId.toString(), false);
    xhrTravelInfo.setRequestHeader('userId','UserA');
    xhrTravelInfo.send();

    let JSONTravelInfo = GetJason(xhrTravelInfo.responseText);
    //alert(JSONTravelInfo);
    countPlace = JSONTravelInfo.length;
    let arrId = []; // MoveId
    let arrTransferId = [];
    let arrFromPlace = [];
    let arrFromDate = [];
    let arrToPlace = [];
    let arrToDate = [];
    let arrDistance = [];
    let arrMoney = [];

    for (let j = 0; j < countPlace;j++) {
        arrId.push(JSONTravelInfo[j].id);
        arrTransferId.push(JSONTravelInfo[j].transferId);
        arrFromPlace.push(JSONTravelInfo[j].fromPlace);
        arrFromDate.push(new Date(JSONTravelInfo[j].fromDate));
        arrToPlace.push(JSONTravelInfo[j].toPlace);
        arrToDate.push(new Date(JSONTravelInfo[j].toDate));
        arrDistance.push(JSONTravelInfo[j].distance);
        arrMoney.push(JSONTravelInfo[j].money);
    }
    alert(arrFromDate);
    let arrMoveNotes = [];
    let arrIdNotes = [];
    arrMoveIds = arrId;

    for(let g = 0; g < countPlace; g++) {
        let xhrMoveNotes = new XMLHttpRequest();// GetMoveNotes() DONE
        xhrMoveNotes.open('GET', '/api/v001/notes/moves?moveId=' + arrId[g].toString(), false);
        xhrMoveNotes.setRequestHeader('userId', 'UserA');
        xhrMoveNotes.send();
        //alert('Request sent');
        let JSONMoveNotes = GetJason(xhrMoveNotes.responseText);
        if (JSONMoveNotes == ''){
            arrMoveNotes.push(" ");
        } else {
            arrMoveNotes.push(JSONMoveNotes[0].text);
        }
        arrIdNotes.push(JSONMoveNotes[0].id);
        /*запросить информацию о путешествии(-ях???)*/
    }

    arrNotesIds = arrIdNotes;
    alert(arrMoveNotes);

    let xhrTravelNotes = new XMLHttpRequest(); // GetTravelNotes() DONE
    xhrTravelNotes.open('GET', '/api/v001/notes/travels?travelId=' + travelId.toString(), false);
    xhrTravelNotes.setRequestHeader('userId', 'UserA');
    xhrTravelNotes.send();

    let TravelNote = GetJason(xhrTravelNotes.responseText)[0].text;
    travelNoteId = GetJason(xhrTravelNotes.responseText)[0].id;
    //alert(TravelNote);
    /*запросить информацию о заметках по путешествию*/

    for(let i = 0; i < countPlace; i++) { // TO DO (DATE + SELECTED)
        var findElement = document.getElementsByClassName('list');
        var newElement = document.createElement('li');
        newElement.className = "list_elem_" + (i + 1).toString();
        newElement.innerHTML = "<div class=\"destination_" + (i + 1).toString() + " point\">\n" +
            "                        <div class=\"in\"><p>Место отправления: <input type=\"text\" value=\"" + arrFromPlace[i].toString() + "\" name=\"from_" + (i + 1).toString() + "\" class=\"from\"></p></div>\n" +
            "                        <div class=\"in\"><p>Место прибытия: <input type=\"text\" value=\"" + arrToPlace[i].toString() + "\" name=\"to_" + (i + 1).toString() + "\" class=\"to\"></p></div>\n" +
            "                        <div class=\"in\"><p>Дата отправления: <input value=\"" + arrFromDate[i] + "\" type=\"date\" name=\"dateFrom_" + (i + 1).toString() + "\" class=\"dateFrom\"></p></div>\n" +
            "                        <div class=\"in\"><p>Дата прибытия: <input value=\"" + arrToDate[i] + "\" type=\"date\" name=\"dateTo_" + (i + 1).toString() + "\" class=\"dateTo\"></p></div>\n" +
            "                        <div class=\"in\"><p>Расстояние до пункта назначения: <input value=\"" + arrDistance[i].toString() + "\" type=\"text\" name=\"distance_" + (i + 1).toString() + "\" class=\"distance\"></p></div>\n" +
            "                        <div class=\"in\"><p>Выберите вид транспорта: <select name=\"transfer\" class=\"transfer_" + (i + 1).toString() + "\">\n" +
            "                            <option value=\"1\">Автомобиль</option>\n" +
            "                            <option value=\"2\">Общественный транспорт</option>\n" +
            "                            <option value=\"3\">Самолёт</option>\n" +
            "                            <option value=\"4\">Поезд</option>\n" +
            "                            <option value=\"5\">Пешком</option>\n" +
            "                            <option value=\"6\">Другое</option>\n" +
            "                        </select></p></div>\n" +
            "                        <div class=\"in\"><p>Затраты на транспорт: <input value=\"" + arrMoney[i].toString() + "\" type=\"text\" name=\"transferCost_" + (i + 1).toString() + "\" class=\"transferCost\"></p></div>\n" +
            "                        <div class=\"noteFrom_" + (i + 1).toString() + " note\"><p>Заметки к месту: <textarea>" + arrMoveNotes[i].toString() + "</textarea></p></div>\n" +
            "                    </div>"
        findElement[0].appendChild(newElement);
    }
    document.querySelectorAll('div.note_Travel p textarea')[0].value = TravelNote;
    count_Of_Exist_Place = countPlace;
}

function CreateNewNodeOfExistTravels(){
    var findNewElement = document.getElementsByClassName('list');
    countPlace++;
    var newListElement = document.createElement('li');
    newListElement.className = "list_elem_" + countPlace.toString();
    newListElement.innerHTML = "<div  class=\"destination_" + countPlace.toString() + " point\">\n" +
        "                        <div class=\"in\"><p>Место отправления: <input type=\"text\" name=\"from_" + countPlace.toString() + "\" class=\"from\"></p></div>\n" +
        "                        <div class=\"in\"><p>Место прибытия: <input type=\"text\" name=\"to_" + countPlace.toString() + "\" class=\"to\"></p></div>\n" +
        "                        <div class=\"in\"><p>Дата отправления: <input type=\"date\" name=\"dateFrom_" + countPlace.toString() + "\" class=\"dateFrom\"></p></div>\n" +
        "                        <div class=\"in\"><p>Дата прибытия: <input type=\"date\" name=\"dateTo_" + countPlace.toString() + "\" class=\"dateTo\"></p></div>\n" +
        "                        <div class=\"in\"><p>Расстояние до пункта назначения: <input type=\"text\" name=\"distance_" + countPlace.toString() + "\" class=\"distance\"></p></div>\n" +
        "                        <div class=\"in\"><p>Выберите вид транспорта: <select name=\"transfer\" class=\"transfer_" + countPlace.toString() + "\">\n" +
        "                            <option value=\"1\">Автомобиль</option>\n" +
        "                            <option value=\"2\">Общественный транспорт</option>\n" +
        "                            <option value=\"3\">Самолёт</option>\n" +
        "                            <option value=\"4\">Поезд</option>\n" +
        "                            <option value=\"5\">Пешком</option>\n" +
        "                            <option value=\"6\">Другое</option>\n" +
        "                        </select></p></div>\n" +
        "                        <div class=\"in\"><p>Затраты на транспорт: <input type=\"text\" name=\"transferCost_"+ countPlace.toString() + "\" class=\"transferCost\"></p></div>\n" +
        "                        <div class=\"noteFrom_" + countPlace.toString() + " note\"><p>Заметки к месту: <textarea></textarea></p></div>\n" +
        "                    </div>"
    findNewElement[0].appendChild(newListElement);
}