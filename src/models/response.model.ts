export class Response {
    public data:any
    public status: number
    constructor(data: any, status: number){
        this.data = data
        this.status = status
    }

    response(){
        return {data:this.data, status:this.status}
    }

}
export default Response
