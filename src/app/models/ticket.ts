export class Ticket{
    constructor(
        public id_ticket?: number,
        public id_mesa?: number,
        public fecha?: Date,
        public confirmado?: Boolean,
    ){}
}