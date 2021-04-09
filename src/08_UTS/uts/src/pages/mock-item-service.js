class ItemService {

    constructor () {

        this.items = [

            { link: 1, name: "Google Map 1", latitude: "1", lat: "-7.1502", longtitude: "1", long: "111.8817", description: "Bojonegoro" },
            { link: 2, name: "Google Map 2", latitude: "2", lat: "-7.1503", longtitude: "2", long: "111.8818", description: "Bojonegoro" },
            { link: 3, name: "Google Map 3", latitude: "3", lat: "-7.1504", longtitude: "3", long: "111.8819", description: "Bojonegoro" },
            { link: 4, name: "Google Map 4", latitude: "4", lat: "-7.1505", longtitude: "4", long: "111.88110", description: "Bojonegoro" },
            { link: 5, name: "Google Map 5", latitude: "5", lat: "-7.1506", longtitude: "5", long: "111.88111", description: "Bojonegoro" }

        ];

    }

    async retrieveItems() {

        return Promise.resolve(this.items);

    }


    async getItem(itemLink) {

        for (var i = 0; i < this.items.length; i++) {

            if (this.items[i].link === itemLink) {

                return Promise.resolve(this.items[i]);

            }

        }

        return null;

    }


    async createItem(item) {

        console.log("ItemService.createItem():");

        console.log(item);

        return Promise.resolve(item);

    }

    async deleteItem(itemId) {

        console.log("ItemService.deleteItem():");

        console.log("item ID:" + itemId);

    }

    async updateItem(item) {

        console.log("ItemService.updateItem():");

        console.log(item);

    }

}

export default ItemService;