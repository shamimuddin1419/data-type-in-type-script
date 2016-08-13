class DataType {

    // boolean Type
    Status: boolean = true; // output ture
    // number Type
    Amount: number = 100; // output 100
    // number always support like decimal,hex,binary,octal
    Price: number = 50.5; // output 50.5
    // string Type
    Subject: string = "TypeScript"; // TypeScript
    // any like dynamic type 
    Value: any = 5;

    // we know that when class object will be Created then automatic call constructor 
    constructor() {
        console.log(this.Status);
        console.log(this.Amount);
        console.log(this.Price);
        console.log(this.Subject);
        console.log(this.Value);
    }
}
window.onload = () => {
    // Create calass object 
    var val = new DataType();
}