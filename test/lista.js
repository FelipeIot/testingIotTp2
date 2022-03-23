
/**
 * Cuando se ingresa un nuevo elemento su clave deber ser un string
 * Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada
 * Cuando se agrega un elemento al principio la lista esta ordenada
 * Cuando se agrega un elemento al final la lista de claves esta ordena
 * Cuando se elimina un elemento el total de elementos disminuye en uno
 *
 */

const expect = require("chai").expect;

const { assert } = require("chai");
const Lista = require("../src/lista.js");

describe("lista de pares clave:valor", function () {

    describe("En una lista vacia", function () {
        var lista = new Lista();
        it(" hay cero elementos almacenados", function () {
            assert.equal(lista.count(), 0);
        }

        )
        it(" vacia no se encuentra ninguna clave", function () {
            assert.isNull(lista.find("clave"));
        }
        )
    }
    )
    describe("agrego un elemento a una lista vacia", function () {
        var lista = new Lista();
        lista.add("clave", "valor");
        it("hay un elemento almacenado", function () {
            assert.equal(lista.count(), 1);
        })
        it("se recupera le valor asociado a la clave", function () {
            assert.equal(lista.find("clave"), "valor");
        })
    }
    )
    describe("agrego dos elementos a una lista vacia", function () {
        var lista = new Lista();
        lista.add("cadena", "valor");
        lista.add("numero", 12345);
        it("hay dos elemento almacenado", function () {
            assert.equal(lista.count(), 2);
        })

    }
    )
    describe("agrego dos elementos con la misma clave", function () {
        var lista = new Lista();
        lista.add("cadena", "valor");
        lista.add("cadena", 12345);
        it("hay dos elemento almacenado", function () {
            assert.equal(lista.count(), 1);
        })
        it("se actualiza el valor agregado", function () {
            assert.equal(lista.find("cadena"), 12345);
        })

    }
    )
    describe("agrego un elemento con clave numérica a una lista vacia", function () {
        var lista = new Lista();
        lista.add(123, "valor");

        it("hay cero elementos almacenados", function () {
            assert.equal(lista.count(), 0);
        })


    }
    )

    describe("agrego dos elementos a una lista vacia", function () {
        var lista = new Lista();
        lista.add("cadena", "valor");
        lista.add("carro", "pqf-343");


        it("recupero una lista con las claves ordenas en orden alfa-numérico", function () {

            const expected = ['cadena', 'carro'];
            const actual = lista.keylist();
            assert.deepEqual(expected, actual);
        })
        it("agrego un elemento a la lista y recupero la lista de claves ordenada", function () {

            lista.add("carta", "espada");
            const expected = ['cadena', 'carro', 'carta'];
            const actual = lista.keylist();
            assert.deepEqual(expected, actual);
        })
        it("agrego un elemento que debería estar primero en la lista y recupero la lista de claves reordenada", function () {

            lista.add("ave", "puerta");
            const expected = ['ave', 'cadena', 'carro', 'carta'];
            const actual = lista.keylist();
            assert.deepEqual(expected, actual);
        })



    }
    )

})
