function SendData() {
    let travel = new Travel(document.querySelectorAll('div.name_of_Travel > p input')[0].value);

    var str = JSON.stringify(travel);
    let xmlTravelPOSTSend = new XMLHttpRequest(); // PostTravel()
    xmlTravelPOSTSend.open('POST','/api/v001/travels',true);
    xmlTravelPOSTSend.setRequestHeader('userId','UserA');
    xmlTravelPOSTSend.setRequestHeader('Content-Type','application/json');
    xmlTravelPOSTSend.onreadystatechange = function () {
        if (xmlTravelPOSTSend.status === 200 && xmlTravelPOSTSend.readyState === XMLHttpRequest.DONE) {
            let JSONTravelAnswer = GetJason(xmlTravelPOSTSend.responseText);
            alert('TravelId = '+ JSONTravelAnswer.id);
            var travelId = JSONTravelAnswer.id;

            alert(travelId);

            for (let i = 1; i <= countList; i++) {
                FindDataInput(i, travelId);
            }

            let notesTravel = new NotesTravel("topic", document.querySelectorAll('div.note_Travel textarea')[0].value);

            var str = JSON.stringify(notesTravel);

            let xmlTravelNotesPOSTSend = new XMLHttpRequest(); // PostTravelNote()
            xmlTravelNotesPOSTSend.open('POST','/api/v001/notes/travels?travelId=' + travelId.toString(), true);
            xmlTravelNotesPOSTSend.setRequestHeader('userId','UserA');
            xmlTravelNotesPOSTSend.setRequestHeader('Content-Type','application/json');
            xmlTravelNotesPOSTSend.onreadystatechange = function () {

            }
            xmlTravelNotesPOSTSend.send(str);

            alert(str);
        }
    }
    xmlTravelPOSTSend.send(str);


    /*отправка данных*/
}

function FindDataInput(number_Of_Tag, travelId) {
    let elements = document.querySelectorAll('div.destination_' + number_Of_Tag + ' > div p input');

    let move = new Move(elements[0].value, elements[2].value,
        elements[1].value, elements[3].value, elements[4].value,
        document.querySelectorAll( 'div.destination_' + number_Of_Tag + ' > div p select')[0].value, elements[5].value);

    str = JSON.stringify(move);
    let moveId = -1;

    let xhrMoveDataPOSTSend = new XMLHttpRequest(); // PostMove()
    xhrMoveDataPOSTSend.open('POST','/api/v001/moves?travelId=' + travelId.toString(),true);
    xhrMoveDataPOSTSend.setRequestHeader('userId','UserA');
    xhrMoveDataPOSTSend.setRequestHeader('Content-Type','application/json');
    xhrMoveDataPOSTSend.onreadystatechange = function () {
        if (xhrMoveDataPOSTSend.status === 200 && XMLHttpRequest.DONE === xhrMoveDataPOSTSend.readyState) {
            let JSONMoveDataAnswer = GetJason(xhrMoveDataPOSTSend.responseText);
            alert('MoveId = ' + JSONMoveDataAnswer.id);
            moveId = JSONMoveDataAnswer.id;

            alert(str);

            let notesMove = new NotesMove("topic", document.querySelectorAll('div.noteFrom_' + number_Of_Tag + ' p textarea')[0].value);

            str = JSON.stringify(notesMove);

            let xhrMoveNotePOSTSend = new XMLHttpRequest(); // PostNoteMove()
            xhrMoveNotePOSTSend.open('POST','/api/v001/notes/moves?moveId=' + moveId.toString(),true);
            xhrMoveNotePOSTSend.setRequestHeader('userId','UserA');
            xhrMoveNotePOSTSend.setRequestHeader('Content-Type','application/json');
            xhrMoveNotePOSTSend.onreadystatechange = function () {
                if (xhrMoveNotePOSTSend.status === 200 && XMLHttpRequest.DONE === xhrMoveNotePOSTSend.readyState) {
                    let JSONMoveNoteAnswer = GetJason(xhrMoveNotePOSTSend.responseText);
                    alert('NoteId = ' + JSONMoveNoteAnswer.id);
                }
            }
            xhrMoveNotePOSTSend.send(str);

            alert(str);
            /*отправка данных*/
        }
    }
    xhrMoveDataPOSTSend.send(str);


}