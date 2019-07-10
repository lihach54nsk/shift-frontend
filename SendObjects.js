class Travel {
    constructor(idUser, idTravel, name){
        this.name = name;
    }
}

class Move {
    constructor(from, dateFrom, to, dateTo, distance, transferId, money) {
        this.fromPlace = from;
        this.fromDate = dateFrom;
        this.toPlace = to;
        this.toDate = dateTo;
        this.distance = distance;
        this.transferId = transferId;
        this.money = money;
    }
}

class NotesMove {
    constructor(topic, text) {
        this.title = topic;
        this.text= text;
    }
}

class NotesTravel {
    constructor(topic, text) {
        this.title = topic;
        this.text= text;
    }
}