export class Vol{

  constructor(
    public id: number,
    public volNumber: string,
    public departureAirportCode: string,
    public arrivalAirportCode: string,
    public departureDate: string,
    public arrivalDate: string,
    public departureTime: string,
    public arrivalTime: string,
    public late: boolean,
    public price: number,
    public displayThis: boolean = true,

  ){}
}
