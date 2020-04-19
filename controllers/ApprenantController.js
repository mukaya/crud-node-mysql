const express = require('express');
const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'kda',
    insecureAuth : true,
    multipleStatements: true,
});
mysqlConnection.connect((error)=>{
    if(!error){
        console.log('connection à la BDD reussit');
    }else{
        console.log(`Erreur de connection à la BDD: ${error}`);
    }
});

class ApprennantController{

    static getAllApprenant(){
        return async (request, response, next)=>{
            const sql = `SELECT * FROM apprenant`;
            await mysqlConnection.query(sql,(error, rows, fiels)=>{
                if(!error){
                    response.render('list',{
                        title: 'Liste des apprenants',
                        apprenants: rows
                    })
                }
            });
        }
    }
    static formulaireAddApprenant(){
        return (request, response, next)=>{
            response.render('add_apprenant',{
                title: 'Add Apprenant',
            });
        }
    }

    static AddApprenant(){
        return async(request, response, next)=>{
            const { nom, prenom, option } = request.body;
            const sql = "INSERT INTO apprenant SET nom = ?, prenom = ?, optionApp = ?";
            await mysqlConnection.query(sql,[nom,prenom,option],(error,result)=>{
                if(!error){
                    response.redirect('/');
                }else{
                    console.log(error);
                }
            });
        }
    }
    static deleteApprenant(){
        return async(request, response, next)=>{
            const id = request.params.apprenantId;
            const sql = "DELETE FROM apprenant WHERE id = ?";
            await mysqlConnection.query(sql,[id],(error,result)=>{
                if(!error){
                    response.redirect('/');
                }else{
                    console.log(error);
                }
            });
        }
    }
    static displayApprenant(){
        return async(request, response, next)=>{
            const id = request.params.apprenantId;
            const sql = "SELECT * FROM apprenant WHERE id = ?";
            await mysqlConnection.query(sql,[id],(error,row, fiels)=>{
                if(!error){
                    response.render('edit_apprenant',{
                        title: 'Edit Apprenant',
                        apprenant: row
                    });
                }else{
                    console.log(error);
                }
            });
        }
    }
    static editApprenant(){
        return async(request, response, next)=>{
            const {idApprenant,nom, prenom, option} = request.body;
            const sql = "UPDATE apprenant SET nom = ?, prenom = ?, optionApp = ? WHERE id = ?";
            await mysqlConnection.query(sql,[nom,prenom,option,idApprenant],(error,row, fiels)=>{
                if(!error){
                    response.redirect('/');
                }else{
                    console.log(error);
                }
            });
        }
    }
}

module.exports = ApprennantController;