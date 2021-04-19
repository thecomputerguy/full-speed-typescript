class Customer {
  customerId: number;
  public companyName: string;
  private address: string;

  constructor(_customerId: number, _companyName: string, _address: string) {
    this.companyName = _companyName;
    this.customerId = _customerId;
    this.address = _address;
  }
}

const jackson: Customer = new Customer(1, "MI", "China");
console.log(jackson.customerId);
console.log(jackson.companyName);
//can't do below as address is private. expose it via getter and then access it.
//console.log(jackson.address);
