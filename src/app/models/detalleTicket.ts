export class detalleTicket{
    constructor(
        public id_detalle?: number,
        public id_ticket?: number,
        public id_platillo?: number,
        public id_bebida?: number,
        public cantidad?: number,
        public observaciones?: String,
    ){}
}