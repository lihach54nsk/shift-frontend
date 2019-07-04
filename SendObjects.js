class Travel {
    constructor(idUser, idTravel, name){
        this.idUser = idUser;
        this.idTravel = idTravel;
        this.nameTravel = name;
    }
}

class Move {
    constructor(idMove, idTravel, from, dateFrom, to, dateTo, distance, transferId, money) {
        this.idMove = idMove;
        this.idTravel = idTravel;
        this.from = from;
        this.dateFrom = dateFrom;
        this.to = to;
        this.dateTo = dateTo;
        this.distance = distance;
        this.transferId = transferId;
        this.money = money;
    }
}

class NotesMove {
    constructor(idNote, idMove, topic, text) {
        this.idNote = idNote;
        this.idMove = idMove;
        this.topicMove = topic;
        this.text= text;
    }
}

class NotesTravel {
    constructor(idNote, idTravel, topic, text) {
        this.idNote = idNote;
        this.idTravel = idTravel;
        this.topicTravel = topic;
        this.text= text;
    }
}