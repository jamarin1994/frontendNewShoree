export interface Flight{
    origin: string
    destination: string
    price: number
    transport: Transport
}

export interface Transport {
    number: string
    carrier: string
}