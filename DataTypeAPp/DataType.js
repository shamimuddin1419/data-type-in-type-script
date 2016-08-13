var DataType = (function () {
    // we know that when class object will be Created then automatic call constructor 
    function DataType() {
        // boolean Type
        this.Status = true; // output ture
        // number Type
        this.Amount = 100; // output 100
        // number always support like decimal,hex,binary,octal
        this.Price = 50.5; // output 50.5
        // string Type
        this.Subject = "TypeScript"; // TypeScript
        // any like dynamic type 
        this.Value = 5;
        console.log(this.Status);
        console.log(this.Amount);
        console.log(this.Price);
        console.log(this.Subject);
        console.log(this.Value);
    }
    return DataType;
}());
window.onload = function () {
    // Create calass object 
    var val = new DataType();
};
//# sourceMappingURL=DataType.js.map