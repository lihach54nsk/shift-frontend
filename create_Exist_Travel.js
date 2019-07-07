var countPlace = 1;

function Create_Exist_Places() {
    countPlace++;

    /*запрос и обработка количества мест
    * countPlace = n;
    * не забыть присвоить название путешествия в форме названия бэд-трипа
    * */

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