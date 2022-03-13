import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import {app, serve} from '../app.js';
import { deleteItem } from "../controllers/deleteController";
import {getData} from '../controllers/indexController';

chai.use(chaiHttp);
chai.should();

/* 
.Skip -> para saltar un test
.Only -> para realizar ese unico test definido
*/

describe('GET 404', () => {
    it('Debe recibirse un código 404', ()=>{
        chai.request(app)
            .get('/error')
            .then((res) => {
                res.should.have.status(404);
            }, (err) => {
                Promise.reject();
            });
    });
});

describe('Llamadas Http', () => {
    describe('Get /', () => {
        it('Debe recibirse un código 200', (done)=>{
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it('Recibe un array con los datos', (done)=>{
            getData().then( (data) =>{
                expect(data).not.to.be.empty;
                done();
            });
        });
    });
    describe('Creando Datos', () => {
        after((done) => {
            serve.close();
            done();
        });
        let lastID;
        beforeEach((done) => {
            chai.request(app)
                .post('/new')
                .send({subject:"Nuevo Registro", description: "Hola Mundo"})
                .end((err, res) => {
                    done();
                });
        });
        afterEach((done) => {
            deleteItem(lastID).then(() => {
                done();
            }); 
        });
        it('Comprueba creación de Registro', (done)=>{
            getData().then( (data) =>{
                expect(data).not.to.be.empty;
                lastID = data[data.length-1].id;
                done();
            });
        });
    });
});