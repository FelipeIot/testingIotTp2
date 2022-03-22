


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
    describe("agrego dos elementos con la misma clave", function () {
        var lista = new Lista();
        lista.add("cadena", "valor");
        lista.add("numero", 12345);
        it("hay dos elemento almacenado", function () {
            assert.equal(lista.count(), 2);
        })
        it("se actualiza el valor agregado", function () {
            assert.equal(lista.find("numero"),12345);
        })

    }
    )


    
})
