module.exports = class Lista {

    #elements
    #get_index(key) {
        for (let index = 0; index < this.#elements.length; index++) {
            if (this.#elements[index].key == key) {
                return index;
            };
        }
        return NaN;
    }

    constructor() {


        this.#elements = [];
    }
    count() {
        return this.#elements.length;
    }

    find(key) {

        let index = this.#get_index(key);

        if (!isNaN(index)) {
            return this.#elements[index].value;
        }
        return null;

    }
    add(key, valor) {
        let index = this.#get_index(key);
        if (!isNaN(index)) {
            this.#elements[index].value = valor;
        }
        else {
            this.#elements.push({ "key": key, "value": valor });
        }

    }

}