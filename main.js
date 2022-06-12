class Item {
    constructor(id, title, qty, unit) {
        this.id = id;
        this.title = title;
        this.qty = qty;
        this.unit = unit;
    }
}

class List {
    list = []

    constructor(listName, listOwner, maxQtyOfItems) {
        this.listName = listName;
        this.listOwner = listOwner;
        this.maxQtyOfItems = maxQtyOfItems;
    }

    addItem(id, title, qty, unit) {
        if (this.list.length >= this.maxQtyOfItems) {
            let err = new Error(`This item has not been added. Reason: You can not add more than ${this.maxQtyOfItems} items..`);
            throw console.error(`${title}: ${qty} ${unit} - ${err}`);
        } if (!title) {
            let err = new Error('This item has not been added. Reason: You did not enter a title..');
            throw console.error(`${title}: ${qty} ${unit} - ${err}`);
        } if (!qty) {
            let err = new Error('This item has not been added. Reason: You did not enter a quantity..');
            throw console.error(`${title}: ${qty} ${unit} - ${err}`);
        } if (!unit) {
            let err = new Error('This item has not been added. Reason: You did not specify a unit..');
            throw console.error(`${title}: ${qty} ${unit} - ${err}`);
        } else this.list.push(new Item(id, title, qty, unit));
        console.log(`${title}: ${qty} ${unit} - added. Object id: ${newList.list.findIndex((elem) => elem.id === id) + 1}`);
    }

    removeItem(id) {
        let removedElementIndex = this.list.findIndex((elem) => elem.id === id);
        let removedElement = this.list.find((elem) => elem.id === id);
        if (removedElementIndex) {
            let err = new Error(`This item has not been removed. Reason: The item with id = ${id} not found in the list..`);
            throw console.error(`${err}`);
        } else this.list.splice(removedElementIndex, 1);
        console.log(`${removedElement.title}: ${removedElement.qty} ${removedElement.unit}. This item has been successfully removed.`);
    }
}

let newList = new List('List', 'Man', 3);

function listCreator() {
    try {
        newList.addItem(1, 'Sugar', 5, 'kilogram(s)');
    } catch(err) {
    }

    try {
        newList.addItem(2, 'Chocolate', 2, 'bar(s)');
    } catch(err) {
    }

    try {
        newList.addItem(3, '', 5, 'kilogram(s)');
    } catch(err) {
    }

    try {
        newList.addItem(4, 'Juice', 1, 'liter(s)');
    } catch(err) {
    }

    try {
        newList.addItem(5, 'Bread', 5, 'kg');
    } catch(err) {
    }

    try {
        newList.removeItem(1);
    } catch(err) {
    }

    try {
        newList.removeItem(10);
    } catch(err) {
    }
};

listCreator();