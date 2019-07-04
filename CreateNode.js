var countList = 1;

function CreateNewNode(){
    var findElem = document.getElementsByClassName('list');
    countList++;
    var newElem = document.createElement('li');
    newElem.className = "list_elem_" + countList.toString();
    newElem.innerHTML = "<div  class=\"destination_" + countList.toString() + "\">\n" +
        "                        <div><p>Место отправления: <input type=\"text\" name=\"from\" class=\"from\"></p></div>\n" +
        "                        <div><p>Место прибытия: <input type=\"text\" name=\"to\" class=\"to\"></p></div>\n" +
        "                        <div><p>Дата отправления: <input type=\"datetime-local\" name=\"dateFrom\" class=\"dateFrom\"></p></div>\n" +
        "                        <div><p>Дата прибытия: <input type=\"datetime-local\" name=\"dateTo\" class=\"dateTo\"></p></div>\n" +
        "                        <div><p>Расстояние до пункта назначения: <input type=\"text\" name=\"distance\" class=\"distance\"></p></div>\n" +
        "                        <div><p>Выберите вид транспорта: <select name=\"transfer\" class=\"transfer\">\n" +
        "                            <option value=\"auto\">Автомобиль</option>\n" +
        "                            <option value=\"society\">Общественный транспорт</option>\n" +
        "                            <option value=\"air\">Самолёт</option>\n" +
        "                            <option value=\"train\">Поезд</option>\n" +
        "                            <option value=\"walk\">Пешком</option>\n" +
        "                            <option value=\"other\">Другое</option>\n" +
        "                        </select></p></div>\n" +
        "                        <div><p>Затраты на транспорт: <input type=\"text\" name=\"transferCost\" class=\"transferCost\"></p></div>\n" +
        "                        <div><p>Заметки: <textarea name=\"noteFrom\" class=\"noteFrom\"></textarea></p></div>\n" +
        "                    </div>"
    findElem[0].appendChild(newElem);
    //var newDiv=document.createElement('div');
    //newDiv.className="new";
    //findElem=document.getElementsByClassName("list_elem_" + countList.toString());
    //findElem[0].appendChild(newDiv);
}