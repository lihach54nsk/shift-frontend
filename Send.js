function SendData() {
    let travel = new Travel(1, document.querySelectorAll('div.name_of_Travel > p input')[0].value);

    var str = JSON.stringify(travel);
    let xmlTravelPOSTSend = new XMLHttpRequest(); // PostTravel()
    xmlTravelPOSTSend.setRequestHeader('userId','UserA');
    xmlTravelPOSTSend.setRequestHeader('Content-Type','application/json');
    xmlTravelPOSTSend.open('POST','URL.URL',true);
    xmlTravelPOSTSend.send(str);

    alert(str);

    for (i = 1; i <= countList; i++) {
        FindDataInput(i);
    }

    let notesTravel = new NotesTravel(1,1,"topic", document.querySelectorAll('div.note_Travel textarea')[0].value);

    var str = JSON.stringify(notesTravel);

    let xmlTravelNotesPOSTSend = new XMLHttpRequest(); // PostTravelNote()
    xmlTravelNotesPOSTSend.setRequestHeader('userId','UserA');
    xmlTravelNotesPOSTSend.setRequestHeader('Content-Type','application/json');
    xmlTravelNotesPOSTSend.open('POST','URL.URL', true);
    xmlTravelNotesPOSTSend.send(str);

    alert(str);
    /*отправка данных*/
}

function FindDataInput(number_Of_Tag) {
    let elements = document.querySelectorAll('div.destination_' + number_Of_Tag + ' > div p input');

    let idMove = -1;
    let idTravel = -1;
    let idNote = -1;

    let move = new Move(idMove, idTravel, elements[0].value, elements[2].value,
        elements[1].value, elements[3].value, elements[4].value,
        document.querySelectorAll( 'div.destination_' + number_Of_Tag + ' > div p select')[0].value, elements[5].value);

    str = JSON.stringify(move);

    let xhrMoveDataPOSTSend = new XMLHttpRequest(); // PostMove()
    xhrMoveDataPOSTSend.setRequestHeader('userId','UserA');
    xhrMoveDataPOSTSend.setRequestHeader('Content-Type','application/json');
    xhrMoveDataPOSTSend.open('POST','URL.URL',true);
    xhrMoveDataPOSTSend.send(str);

    alert(str);

    let notesMove = new NotesMove(idNote, idMove, "topic", document.querySelectorAll('div.noteFrom_' + number_Of_Tag + ' p textarea')[0].value);

    str = JSON.stringify(notesMove);

    let xhrMoveNotePOSTSend = new XMLHttpRequest(); // PostNoteMove()
    xhrMoveNotePOSTSend.setRequestHeader('userId','UserA');
    xhrMoveNotePOSTSend.setRequestHeader('Content-Type','application/json');
    xhrMoveNotePOSTSend.open('POST','URL.URL',true);
    xhrMoveNotePOSTSend.send(str);

    alert(str);
    /*отправка данных*/
}