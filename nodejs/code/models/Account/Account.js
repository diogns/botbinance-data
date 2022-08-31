'use strict';
const connectDDBB = require('../config/databaseAuth');

let pool=connectDDBB.psql();
module.exports = class Pop {

    constructor(id, numero_ticket, pop, celda, alarma, umbral, fecha,detalle,periodo) {
        this.id = id;
        this.numero_ticket = numero_ticket;
        this.pop = pop;
        this.celda = celda;
        this.alarma = alarma;
        this.umbral = umbral;
        this.fecha = fecha;
        this.detalle = detalle;
        this.periodo = periodo;
    }

    getID() {
        return this.id;
    }
    setID(id) {
        this.id=id;
    }
    getNumeroTicket() {
        return this.numero_ticket;
    }
    setNumeroTicket(numero_ticket) {
        this.numero_ticket=numero_ticket;
    }
    getPOP() {
        return this.pop;
    }
    setPOP(pop) {
        this.pop=pop;
    }
    getCelda() {
        return this.celda;
    }
    setCelda(celda) {
        this.celda=celda;
    }
    getAlarma() {
        return this.alarma;
    }
    setAlarma(alarma) {
        this.alarma=alarma;
    }
    getUmbral() {
        return this.umbral;
    }
    setUmbral(umbral) {
        this.umbral=umbral;
    }
    getFecha() {
        return this.fecha;
    }
    setFecha(fecha) {
        this.fecha=fecha;
    }
    getDetalle() {
        return this.detalle;
    }
    setDetalle(detalle) {
        this.detalle=detalle;
    }
    getPeriodo() {
        return this.periodo;
    }
    setPeriodo(periodo) {
        this.periodo=periodo;
    }


    async getAlarm(){
        try{
            const sql=`SELECT * FROM ticket WHERE fecha='${this.getFecha()}'`;
            let res = await pool.query(sql);
            return res.rows;
        }catch (e) {
            console.log(e);
        }
    };

    async saveAlarm(){
        try{
            const sql=`INSERT INTO ticket ( pop, celda, alarma, umbral, fecha,detalle,periodo) 
            VALUES(
                '${this.getPOP()}',
                '${this.getCelda()}',
                '${this.getAlarma()}',
                '${this.getUmbral()}',
                '${this.getFecha()}',
                '${this.getDetalle()}',
                '${this.getPeriodo()}'
                )`;
            await pool.query(sql);
        }catch (e) {
            console.log(e);
        }
    };

};
