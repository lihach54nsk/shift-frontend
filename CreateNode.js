var countList = 1;

function CreateNewNode() {
    var findElem = document.getElementsByClassName('list');
    countList++;
    var newElem = document.createElement('li');
    newElem.className = "list_elem_" + countList.toString();
    newElem.innerHTML = "<div  class=\"destination_" + countList.toString() + " point\">\n" +
        "                        <div class=\"in\"><p>Место отправления: <input type=\"text\" name=\"from_" + countList.toString() + "\" class=\"from\"></p></div>\n" +
        "                        <div class=\"in\"><p>Место прибытия: <input type=\"text\" name=\"to_" + countList.toString() + "\" class=\"to\"></p></div>\n" +
        "                        <div class=\"in\"><p>Дата отправления: <input type=\"date\" name=\"dateFrom_" + countList.toString() + "\" class=\"dateFrom\"></p></div>\n" +
        "                        <div class=\"in\"><p>Дата прибытия: <input type=\"date\" name=\"dateTo_" + countList.toString() + "\" class=\"dateTo\"></p></div>\n" +
        "                        <div class=\"in\"><p>Расстояние до пункта назначения: <input type=\"text\" name=\"distance_" + countList.toString() + "\" class=\"distance\"></p></div>\n" +
        "                        <div class=\"in\"><p>Выберите вид транспорта: <select name=\"transfer\" class=\"transfer_" + countList.toString() + "\">\n" +
        "                            <option value=\"1\">Автомобиль</option>\n" +
        "                            <option value=\"2\">Общественный транспорт</option>\n" +
        "                            <option value=\"3\">Самолёт</option>\n" +
        "                            <option value=\"4\">Поезд</option>\n" +
        "                            <option value=\"5\">Пешком</option>\n" +
        "                            <option value=\"6\">Другое</option>\n" +
        "                        </select></p></div>\n" +
        "                        <div class=\"in\"><p>Затраты на транспорт: <input type=\"text\" name=\"transferCost_"+ countList.toString() + "\" class=\"transferCost\"></p></div>\n" +
        "                        <div class=\"noteFrom_" + countList.toString() + " note\"><p>Заметки к месту: <textarea></textarea></p></div>\n" +
        "                    </div>"
    findElem[0].appendChild(newElem);
}