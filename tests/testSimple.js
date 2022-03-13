import chai from 'chai';
import { getYear, getHola} from "../controllers/helpers";
import {expect} from 'chai';
import IndexController from '../controllers/indexController';

describe('Helpers', () => {
    /**
     * Testea el metodo getYear
     */
    describe('Test getYear function', () => {
        let year, myYear;
        before(() => {
            console.log("Cargando valores");
            year = getYear();
            myYear = new Date().getFullYear()
        });
        after( () => {
            console.log("Ejecutando After");
        });
        it('Devuelve un número', () => {
            expect(year).to.be.a('number');
        });
        it('Devuelve el año en curso', () => {
            expect(year).to.be.equal(myYear);
        });
        it('Compara entre años', () => {
            expect(year).to.be.at.most(myYear+1);
            expect(year).to.be.at.least(myYear-1);
            expect(year).to.be.within(1000,3000);
            expect(year).not.to.be.NaN;
        });
    });

    describe('Test de Tipos', () => {
        it('Trabajando con otros tipos de datos', () => {
            const obj = {};
            expect(obj).to.be.a('Object');
            expect(obj).to.not.be.a('number');
            let null1;
            expect(null1).to.be.undefined;
            null1=null;
            expect(null1).to.be.null;
        });
        it('Trabajando con Objetos', () => {
            const obj1 = {name:"Ale"};
            const obj2 = {name:"Ale"};
            expect(obj1).to.have.property('name');
            expect(obj2).to.deep.equal(obj1);
            expect(obj1).to.have.keys(['name']);
            expect(obj1).to.have.any.keys(['name']);
            expect(obj1).to.have.all.keys(['name']);

            expect(obj1).to.be.instanceOf(Object);
            const instancia = new IndexController();
            expect(instancia).to.be.instanceOf(IndexController);
        });

        it('Comparando Errores', () => {
            const genError1 = () => {
                throw new TypeError('Error de DB');
            }
            expect(genError1).to.throw();
            expect(genError1).to.throw(TypeError);
            expect(genError1).to.throw('DB');
            const error = new TypeError('Error de DB');
            error.code = 500;
            const genError2 = () => {
                throw error;
            }
            expect(genError2).to.throw(error);
            expect(genError2).to.throw(TypeError).with.property('code',500);
        });
    });

    describe('Test getHola function', () => {
        let saludo;
        before( () => {
            saludo = getHola();
        });
        it('Devuelve un String', () => {
            expect(saludo).to.be.a('string');
        });
        it('Devuelve un saludo', () => {
            expect(saludo).to.have.string("Hola");
            expect(saludo).to.not.have.string("Adios");
        });
    });
});