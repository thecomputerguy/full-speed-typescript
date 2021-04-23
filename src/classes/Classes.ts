class Training {
  constructor(
    private category: string,
    private title: string,
    private noOfDays: number
  ) {}

  buy() {
    console.log(
      "Buying this " +
        this.noOfDays +
        " day(s) " +
        this.title +
        " course from category " +
        this.category
    );
  }
}

class BuyTraining {
  constructor(private trainings: Training[]) {}

  buy() {
    var training = this.chooseTraining();
    training.buy();
  }

  private chooseTraining() {
    var whichTraining = 2;
    return this.trainings[whichTraining];
  }
}

var trainings = [
  new Training("Drupal", "Drupal 8 for Developers", 2),
  new Training("Angular", "Angular 2 Fundamentals", 3),
  new Training("Nodejs", "Developing web applications with the MEAN stack", 5),
  new Training("SQL", "T-SQL basics", 2),
  new Training("Management", "BPMN for code architects", 3),
];

var choice = new BuyTraining(trainings);
choice.buy();

//properties and methods
class CartWithTraining {
  private trainings: Training[] = [];
  static maxTraining: 10;
  constructor(public cartId: string) {}

  addTraining(training: Training) {
    if (this.trainings.length >= CartWithTraining.maxTraining) {
      throw new Error("Too many courses in your cart.");
    }
    this.trainings.push(training);
  }
}

//Creating a new instance
var courseCart = new CartWithTraining("Cart1");

//Accessing a public instance property
var nameCart = courseCart.cartId;

//Calling a public instance method
courseCart.addTraining(new Training("Spring boot", "Spring boot for users", 1));

//Accessing a public static property
var maxTrainings = CartWithTraining.maxTraining;

interface Invoice {
  id: string;
  clientId: number;
}

class FranchiseeAccountancyTool {
  private _invoice: any;

  constructor(public accToolKey: string, public taxRate: string) {}

  get invoice() {
    return this._invoice;
  }

  set invoice(invoice: Invoice) {
    this._invoice = invoice;
  }
}

var consultancyInv = { id: "INV_20_12072015", clientId: 234 };

var accToolInstance = new FranchiseeAccountancyTool(
  "cnaj837tjdhsu#jd9_fd8",
  "201"
);

accToolInstance.invoice = consultancyInv;

/**
 * Class heritage example
 */

interface Audio {
  play(): any;
}

class Song implements Audio {
  constructor(private artist: string, private title: string) {}

  play(): void {
    console.log("Playing " + this.title + " by " + this.artist);
  }

  static comparer(a: Song, b: Song): number {
    if (a.title === b.title) {
      return 0;
    }

    return a.title > b.title ? 1 : -1;
  }
}

class Playlist {
  constructor(public songs: Song[]) {}

  play() {
    var song = this.songs.pop();
    song?.play();
  }
  sort() {
    this.songs.sort(Song.comparer);
  }
}

class RepeatingPlaylist extends Playlist {
  private songIndex: number = 0;
  constructor(songs: Song[]) {
    super(songs);
  }

  play() {
    this.songs[this.songIndex].play();
    this.songIndex++;
    if (this.songIndex >= this.songs.length) {
      this.songIndex = 0;
    }
  }
}
