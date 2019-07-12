function SendData() {
    let travel = new Travel(document.querySelectorAll('div.name_of_Travel > p input')[0].value.toString());

    var strTravel = JSON.stringify(travel);
    let xmlTravelPOSTSend = new XMLHttpRequest(); // PostTravel()
    xmlTravelPOSTSend.open('POST','/api/v001/travels',true);
    xmlTravelPOSTSend.setRequestHeader('userId','UserA');
    xmlTravelPOSTSend.setRequestHeader('Content-Type','application/json');
    xmlTravelPOSTSend.onreadystatechange = function () {
        if (xmlTravelPOSTSend.status === 200 && xmlTravelPOSTSend.readyState === XMLHttpRequest.DONE) {
            let JSONTravelAnswer = GetJason(xmlTravelPOSTSend.responseText);
            //alert('TravelId = '+ JSONTravelAnswer.id);
            var travelId = JSONTravelAnswer.id;

            //alert(travelId);

            for (let i = 1; i <= countList; i++) {
                FindDataInput(i, travelId);
            }

            let notesTravel = new NotesTravel("topic", document.querySelectorAll('div.note_Travel textarea')[0].value);

            var str = JSON.stringify(notesTravel);

            let xmlTravelNotesPOSTSend = new XMLHttpRequest(); // PostTravelNote()
            xmlTravelNotesPOSTSend.open('POST','/api/v001/notes/travels?travelId=' + travelId.toString(), true);
            xmlTravelNotesPOSTSend.setRequestHeader('userId','UserA');
            xmlTravelNotesPOSTSend.setRequestHeader('Content-Type','application/json');
            xmlTravelNotesPOSTSend.onreadystatechange = function () {}
            xmlTravelNotesPOSTSend.send(str);

            //alert(str);
        }
    }
    //alert('Travel = ' + str);
    xmlTravelPOSTSend.send(strTravel);
    /*отправка данных*/
}

var count_Of_Exist_Place = -1;

function PatchData() {
    let travelId = window.location.href.split("?")[1].split("=")[1];

    let travel = new TravelPATCH(travelId.toString(), document.querySelectorAll('div.name_of_Travel > p input')[0].value.toString());
    var str = JSON.stringify(travel);
    let xhrTravelPATCH = new XMLHttpRequest();
    xhrTravelPATCH.open('PATCH','/api/v001/travels/' + travelId.toString(), true);
    xhrTravelPATCH.setRequestHeader('userId','UserA');
    xhrTravelPATCH.setRequestHeader('Content-Type','application/json');
    xhrTravelPATCH.onreadystatechange = function () {
        if (xhrTravelPATCH.status === 200 && xhrTravelPATCH.readyState === XMLHttpRequest.DONE) {
            //alert(travelId);
            //alert('Request travel sent successfully!');

            for (let i = 1; i <= count_Of_Exist_Place; i++) {
                FindDataPatch(i, travelId);
                //alert('Request exist move sent successfully!');
            }

            if (count_Of_Exist_Place !== countPlace) {
                for(let k = count_Of_Exist_Place + 1; k <= countPlace; k++){
                    FindDataInput(k ,travelId);
                    //alert('Request move sent successfully!');
                }
            }

            let notesTravel = new NotesTravelPATCH(travelNoteId ,"topic", document.querySelectorAll('div.note_Travel textarea')[0].value);

            var str = JSON.stringify(notesTravel);

            let xmlTravelNotesPATCHSend = new XMLHttpRequest(); // PostTravelNote()
            xmlTravelNotesPATCHSend.open('PATCH','/api/v001/notes/travels/' + travelNoteId.toString() + '?travelId=' + travelId.toString(), true);
            xmlTravelNotesPATCHSend.setRequestHeader('userId','UserA');
            xmlTravelNotesPATCHSend.setRequestHeader('Content-Type','application/json');
            xmlTravelNotesPATCHSend.onreadystatechange = function () {}
            xmlTravelNotesPATCHSend.send(str);

            //alert(str);
            //alert('Request travel note sent successfully!');
        }
    }
    xhrTravelPATCH.send(str);
}

var arrMoveIds = [];
var arrNotesIds = [];

function FindDataPatch(number_Of_Tag, travelId) {
    let elements = document.querySelectorAll('div.destination_' + number_Of_Tag + ' > div p input');

    let move = new MovePATCH(arrMoveIds[number_Of_Tag - 1].toString(), elements[0].value, elements[2].value,
        elements[1].value, elements[3].value, elements[4].value,
        document.querySelectorAll( 'div.destination_' + number_Of_Tag + ' > div p select')[0].value, elements[5].value);

    str = JSON.stringify(move);

    let xhrMoveDataPATCHSend = new XMLHttpRequest(); // PostMove()
    xhrMoveDataPATCHSend.open('PATCH','/api/v001/moves/' + arrMoveIds[number_Of_Tag - 1].toString() + '?travelId=' + travelId.toString(),true);
    xhrMoveDataPATCHSend.setRequestHeader('userId','UserA');
    xhrMoveDataPATCHSend.setRequestHeader('Content-Type','application/json');
    xhrMoveDataPATCHSend.onreadystatechange = function () {
        if (xhrMoveDataPATCHSend.status === 200 && XMLHttpRequest.DONE === xhrMoveDataPATCHSend.readyState) {
            //alert(str);

            let notesMove = new NotesMovePATCH(arrNotesIds[number_Of_Tag - 1].toString(),"topic", document.querySelectorAll('div.noteFrom_' + number_Of_Tag + ' p textarea')[0].value);

            str = JSON.stringify(notesMove);

            let xhrMoveNotePATCHSend = new XMLHttpRequest(); // PostNoteMove()
            xhrMoveNotePATCHSend.open('PATCH','/api/v001/notes/moves/' + arrNotesIds[number_Of_Tag - 1].toString()
                + '?moveId=' + arrMoveIds[number_Of_Tag - 1].toString(),true);
            xhrMoveNotePATCHSend.setRequestHeader('userId','UserA');
            xhrMoveNotePATCHSend.setRequestHeader('Content-Type','application/json');
            xhrMoveNotePATCHSend.onreadystatechange = function () {
                if (xhrMoveNotePATCHSend.status === 200 && XMLHttpRequest.DONE === xhrMoveNotePATCHSend.readyState) {}
            }
            xhrMoveNotePATCHSend.send(str);

            //alert(str);
            /*отправка данных*/
        }
    }
    xhrMoveDataPATCHSend.send(str);
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
            //alert('MoveId = ' + JSONMoveDataAnswer.id);
            moveId = JSONMoveDataAnswer.id;

            //alert(str);

            let notesMove = new NotesMove("topic", document.querySelectorAll('div.noteFrom_' + number_Of_Tag + ' p textarea')[0].value);

            str = JSON.stringify(notesMove);

            let xhrMoveNotePOSTSend = new XMLHttpRequest(); // PostNoteMove()
            xhrMoveNotePOSTSend.open('POST','/api/v001/notes/moves?moveId=' + moveId.toString(),true);
            xhrMoveNotePOSTSend.setRequestHeader('userId','UserA');
            xhrMoveNotePOSTSend.setRequestHeader('Content-Type','application/json');
            xhrMoveNotePOSTSend.onreadystatechange = function () {
                if (xhrMoveNotePOSTSend.status === 200 && XMLHttpRequest.DONE === xhrMoveNotePOSTSend.readyState) {
                    let JSONMoveNoteAnswer = GetJason(xhrMoveNotePOSTSend.responseText);
                    //alert('NoteId = ' + JSONMoveNoteAnswer.id);
                }
            }
            xhrMoveNotePOSTSend.send(str);

            //alert(str);
            /*отправка данных*/
        }
    }
    xhrMoveDataPOSTSend.send(str);
}

function GetFullMoney() {
    let travelId = window.location.href.split("?")[1].split("=")[1];
    let xhrFullMoney = new XMLHttpRequest();
    xhrFullMoney.open('GET','/api/v001/finalPrice/' + travelId.toString(),true);
    xhrFullMoney.setRequestHeader('userId','UserA');
    xhrFullMoney.onreadystatechange = function () {
        let travelMoney = GetJason(xhrFullMoney.responseText);
        document.querySelectorAll('div.in p input.fullMoney')[0].value = travelMoney.price;
    }
    xhrFullMoney.send();
}