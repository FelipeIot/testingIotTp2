const { isString } = require("mocha/lib/utils");



module.exports = class Lista {

    #elements
    #get_index(key) {
        ///<sumary>  devuelve el indice del elemento de la lista</sumary>
        ///<param name="key">clave del elemento a buscar</param>
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
       ///<sumary>  devuelve el numero de elementos de la lista</sumary>
       ///<returns>numero de elementos de la lista</returns>
        return this.#elements.length;
    }

    find(key) {
        ///<sumary>  devuelve el valor asociado a la clave</sumary>
        ///<param name="key">clave a buscar</param>
        ///<returns>valor asociado a la clave</returns>

        let index = this.#get_index(key);

        if (!isNaN(index)) {
            return this.#elements[index].value;
        }
        return null;

    }
    add(key, value) {
        ///<sumary>  agrega un elemento a la lista</sumary>
        ///<param name="key">clave del elemento</param> 
        ///<param name="value">valor del elemento</param>
        if (!isString(key)) {
            return;
        }
        let index = this.#get_index(key);
        if (!isNaN(index)) {
            this.#elements[index].value = value;
        }
        else {
            this.#elements.push({ "key": key, "value": value });
        }


    }
    keylist() {
        ///<sumary>  devuelve una lista con las claves de los elementos de la lista</sumary>
        ///<returns>lista con las claves de los elementos de la lista</returns>
        let array=[];
        this.#elements.forEach(element=>array.push(element.key));
        array.sort();
        return array;

    }
    delete(key)
    {
        ///<sumary>  elimina un elemento de la lista</sumary>
        ///<param name="key">clave del elemento a eliminar</param>
        this.#elements=this.#elements.filter(element=>element.key!=key);
    }

}