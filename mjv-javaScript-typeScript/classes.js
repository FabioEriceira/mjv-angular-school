"use strict";
/**
 * Classes são basicamente templetes para criação de objetos  eles encapsulam dados e código para trbalhar com estes
 * dados e são baseados em prototypes
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserDevSchooll = /** @class */ (function () {
    function UserDevSchooll(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    UserDevSchooll.prototype.getUppercaseName = function () {
        return this.nome.toUpperCase();
    };
    return UserDevSchooll;
}());
/***
 * Este código fica repetitivo, mas podemos simplificar da seguinte forma
 * usando os modificadores de acesso public no construtor. Automaticamente o ts vai setar estas propriedades quando forem inicializar
 * a classe do construtor
*/
var UserDevSchool = /** @class */ (function () {
    function UserDevSchool(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    /**
     * Aqui tb temos um método que está publico, podemos modificar o acesso a este método ou as propriedades do construtor utilizando
     * private somente a classe em si pode acessar este método
     * protected permite o acesso a estes métodos ou propriedades pelas classes filhas
     * public ou sem nada é o mesmo que public
    */
    UserDevSchool.prototype.getUppercaseName = function () {
        return this.nome.toUpperCase();
    };
    return UserDevSchool;
}());
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(id, nome, materiais) {
        var _this = _super.call(this, id, nome) || this;
        _this.materiais = materiais;
        return _this;
    }
    return Professor;
}(UserDevSchool));
/**
 * Para instanciar uma chasse é parecido com o ao java
 */
var professor = new Professor("123", "Alan", ["typescript"]);
function test(user) {
    user.nome;
}
