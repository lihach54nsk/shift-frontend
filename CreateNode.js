var countList = 1;

function CreateNewNode() {
    var findElem = document.getElementsByClassName('list');
    countList++;
    var newElem = document.createElement('li');
    newElem.className = "list_elem_" + countList.toString();
    newElem.innerHTML = "<div  class=\"destination_" + countList.toString() + " point\">\n" +
        "                        <div class=\"in\"><p>Место отправления: <input type=\"text\" name=\"from_" + countList.toString() + "\" class=\"from\"></p></div>\n" +
        "                        <div class=\"in\"><p>Место прибытия: <input type=\"text\" name=\"to_" + countList.toString() + "\" class=\"to\"></p></div>\n" +
        "                        <div class=\"in\"><p>Дата отправления: <input type=\"datetime-local\" name=\"dateFrom_" + countList.toString() + "\" class=\"dateFrom\"></p></div>\n" +
        "                        <div class=\"in\"><p>Дата прибытия: <input type=\"datetime-local\" name=\"dateTo_" + countList.toString() + "\" class=\"dateTo\"></p></div>\n" +
        "                        <div class=\"in\"><p>Расстояние до пункта назначения: <input type=\"text\" name=\"distance_" + countList.toString() + "\" class=\"distance\"></p></div>\n" +
        "                        <div class=\"in\"><p>Выберите вид транспорта: <select name=\"transfer\" class=\"transfer_" + countList.toString() + "\">\n" +
        "                            <option value=\"auto\">Автомобиль</option>\n" +
        "                            <option value=\"society\">Общественный транспорт</option>\n" +
        "                            <option value=\"air\">Самолёт</option>\n" +
        "                            <option value=\"train\">Поезд</option>\n" +
        "                            <option value=\"walk\">Пешком</option>\n" +
        "                            <option value=\"other\">Другое</option>\n" +
        "                        </select></p></div>\n" +
        "                        <div class=\"in\"><p>Затраты на транспорт: <input type=\"text\" name=\"transferCost_"+ countList.toString() + "\" class=\"transferCost\"></p></div>\n" +
        "                        <div class=\"noteFrom_" + countList.toString() + " note\"><p>Заметки к месту: <textarea></textarea></p></div>\n" +
        "                    </div>"
    findElem[0].appendChild(newElem);
    //var newDiv=document.createElement('div');
    //newDiv.className="new";
    //findElem=document.getElementsByClassName("list_elem_" + countList.toString());
    //findElem[0].appendChild(newDiv);
}