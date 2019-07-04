class Travel {
    constructor(idTravel, name){
        this.idTravel = idTravel;
        this.name = name;
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
    constructor(idMove, topic, text) {
        this.idMove = idMove;
        this.topic = topic;
        this.text= text;
    }
}

class NotesTravel {
    constructor(idTravel, topic, text) {
        this.idTravel = idTravel;
        this.topic = topic;
        this.text= text;
    }
}