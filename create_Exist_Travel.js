var countTravel = 3;
var countPlace = 1;

function Create_List_Of_existing_Travels() {
    for(i = 1; i <= countTravel; i++) {
        let findDiv = document.getElementsByClassName('travel_list');
        let newDiv = document.createElement('div');
        newDiv.className = 'exist_travels travel_' + i.toString();

        newDiv.innerHTML = "<p class=\"travel_name\">Paris</p>\n" +
            "                <p class=\"travel_name\">Date</p>\n" +
            "                <button type=\"submit\" class=\"editTravel_" + i.toString() + "\" value=\""+ i.toString() + "\" onclick=\"Open_Exist_Travel(" + i.toString() + ")\">Редактировать</button>\n";
        findDiv[0].appendChild(newDiv);
    }
}

function Open_Exist_Travel(value) {
    document.location = "exist_Travel.html?value=" + value.toString();
}

function Create_Exist_Places() {
    //countPlace++;
    let userId = 'получить из value на странице ';
    /*function OnLoad() {
            var paramValue = window.location.href.split("?")[1].split("=")[1];
            document.getElementById("UsName").innerHTML = paramValue;
        }
    */
    let xhrTravels = new XMLHttpRequest(); // CHECK TO WORK
    xhrTravels.open('GET', 'URL.URL', false);
    xhrTravels.setRequestHeader(userId,'UserA');
    xhrTravels.send();

    if (xhrTravels.status !== 200) {
        alert('ERROR!');
    } else {
        countPlace = xhrTravels.responseText;
    }
    /*запрос и обработка количества мест
    * countPlace = n;
    * не забыть присвоить название путешествия в форме названия бэд-трипа
    * */

    let xhrTravelInfo = new XMLHttpRequest();
    xhrTravelInfo.open('GET', "URL.URL", false);

    xhrTravelInfo.send();
    /*запросить информацию о путешествии(-ях???)*/

    let xhrTravelNotes = new XMLHttpRequest();
    xhrTravelNotes.open('GET', 'URL.URL', false);
    xhrTravelNotes.setRequestHeader(userId, 'UserA');
    xhrTravelNotes.send();

    if(xhrTravelNotes.status !== 200) {
        alert('ERROR');
    } else {
        let travelNote = xhrTravelNotes.responseText; // заметка на всё путешествие
    }
    /*запросить информацию о заметках по путешествию*/

    for(i = 1; i <= countPlace; i++) {

        var findElement = document.getElementsByClassName('list');
        var newElement = document.createElement('li');
        newElement.className = "list_elem_" + i.toString();
        newElement.innerHTML = "<div class=\"destination_" + i.toString() + " point\">\n" +
            "                        <div class=\"in\"><p>Место отправления: <input type=\"text\" name=\"from_" + i.toString() + "\" class=\"from\"></p></div>\n" +
            "                        <div class=\"in\"><p>Место прибытия: <input type=\"text\" name=\"to_" + i.toString() + "\" class=\"to\"></p></div>\n" +
            "                        <div class=\"in\"><p>Дата отправления: <input type=\"datetime-local\" name=\"dateFrom_" + i.toString() + "\" class=\"dateFrom\"></p></div>\n" +
            "                        <div class=\"in\"><p>Дата прибытия: <input type=\"datetime-local\" name=\"dateTo_" + i.toString() + "\" class=\"dateTo\"></p></div>\n" +
            "                        <div class=\"in\"><p>Расстояние до пункта назначения: <input type=\"text\" name=\"distance_" + i.toString() + "\" class=\"distance\"></p></div>\n" +
            "                        <div class=\"in\"><p>Выберите вид транспорта: <select name=\"transfer\" class=\"transfer_" + i.toString() + "\">\n" +
            "                            <option value=\"auto\">Автомобиль</option>\n" +
            "                            <option value=\"society\">Общественный транспорт</option>\n" +
            "                            <option value=\"air\">Самолёт</option>\n" +
            "                            <option value=\"train\">Поезд</option>\n" +
            "                            <option value=\"walk\">Пешком</option>\n" +
            "                            <option value=\"other\">Другое</option>\n" +
            "                        </select></p></div>\n" +
            "                        <div class=\"in\"><p>Затраты на транспорт: <input type=\"text\" name=\"transferCost_" + i.toString() + "\" class=\"transferCost\"></p></div>\n" +
            "                        <div class=\"noteFrom_" + i.toString() + " note\"><p>Заметки к месту: <textarea></textarea></p></div>\n" +
            "                    </div>"
        findElement[0].appendChild(newElement);
    }
}

function CreateNewNodeOfExistTravels(){
    var findNewElement = document.getElementsByClassName('list');
    countPlace++;
    var newListElement = document.createElement('li');
    newListElement.className = "list_elem_" + countPlace.toString();
    newListElement.innerHTML = "<div  class=\"destination_" + countPlace.toString() + " point\">\n" +
        "                        <div class=\"in\"><p>Место отправления: <input type=\"text\" name=\"from_" + countPlace.toString() + "\" class=\"from\"></p></div>\n" +
        "                        <div class=\"in\"><p>Место прибытия: <input type=\"text\" name=\"to_" + countPlace.toString() + "\" class=\"to\"></p></div>\n" +
        "                        <div class=\"in\"><p>Дата отправления: <input type=\"datetime-local\" name=\"dateFrom_" + countPlace.toString() + "\" class=\"dateFrom\"></p></div>\n" +
        "                        <div class=\"in\"><p>Дата прибытия: <input type=\"datetime-local\" name=\"dateTo_" + countPlace.toString() + "\" class=\"dateTo\"></p></div>\n" +
        "                        <div class=\"in\"><p>Расстояние до пункта назначения: <input type=\"text\" name=\"distance_" + countPlace.toString() + "\" class=\"distance\"></p></div>\n" +
        "                        <div class=\"in\"><p>Выберите вид транспорта: <select name=\"transfer\" class=\"transfer_" + countPlace.toString() + "\">\n" +
        "                            <option value=\"auto\">Автомобиль</option>\n" +
        "                            <option value=\"society\">Общественный транспорт</option>\n" +
        "                            <option value=\"air\">Самолёт</option>\n" +
        "                            <option value=\"train\">Поезд</option>\n" +
        "                            <option value=\"walk\">Пешком</option>\n" +
        "                            <option value=\"other\">Другое</option>\n" +
        "                        </select></p></div>\n" +
        "                        <div class=\"in\"><p>Затраты на транспорт: <input type=\"text\" name=\"transferCost_"+ countPlace.toString() + "\" class=\"transferCost\"></p></div>\n" +
        "                        <div class=\"noteFrom_" + countPlace.toString() + " note\"><p>Заметки к месту: <textarea></textarea></p></div>\n" +
        "                    </div>"
    findNewElement[0].appendChild(newListElement);
}