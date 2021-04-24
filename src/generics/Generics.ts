function whoAmI<G>(param: G): G {
  return param;
}

let resu = whoAmI<string>("This is a string"); //type of output will be string...

//type argument inference
let resu1 = whoAmI("This is another string"); //type of output will be string...

/***
 * Call signature of an object literal type
 */
let amIme: { <U>(arg: U): U } = whoAmI;

/**
 * Generic interface
 */
interface GenericWhoAmIFn {
  <B>(param: B): B;
}

function spitOutWhatYouCan<B>(param: B): B {
  return param;
}

let spitOut: GenericWhoAmIFn = spitOutWhatYouCan;
console.log(amIme("Dude you are awesome! Don't give a damn!"));

//Generic classes
class GenericInvoice<C> {
  invoiceOwner?: C;
  send?: (invId: C, invType: C) => C;
}

let myInvoice = new GenericInvoice<string>();
myInvoice.invoiceOwner = "Alex";
myInvoice.send = function (invId: string, invType: string) {
  let invRemarks =
    invType + " invoice with number " + invId + " has been issued";
  return invRemarks;
};

console.log(
  myInvoice.send("12-23012018", "ProForma") + " by " + myInvoice.invoiceOwner
);
