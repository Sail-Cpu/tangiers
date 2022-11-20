const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
    try{
        let {email, pseudo, password1, password2} = req.body;
        const emailExist = await pool.query(`select * from users where email=$1`, [email]);
        const pseudoExist = await pool.query(`select * from users where pseudo=$1`, [pseudo]);
        if(email && pseudo.length >= 4 && password1 && password2){
            if(emailExist.rowCount === 0 && pseudoExist.rowCount === 0){
                if(password1 === password2 && password1.length >= 7){
                    let hashPass = await bcrypt.hash(password1, 10);
                    let insertUser = await pool.query(`insert into users (email, pseudo, password) values ($1, $2, $3) returning *`, [email, pseudo, hashPass],
                    (err, result) => {
                        if(result){
                            res.send({loggedIn: true, data: result.rows[0]});
                        }else console.log(err);
                    })
                }else{
                    if(password1 !== password2){
                        res.send({loggedIn: false, error: "mot de passe differents"});
                    }else{
                        res.send({loggedIn: false, error: "mot de passe trop cours"});
                    } 
                }
            }else{
                if(emailExist.rowCount > 0) {
                    res.send({loggedIn: false, error:"email deja utilisé"}); 
                }else{
                    if(pseudoExist.rowCount > 0) res.send({loggedIn: false, error:"pseudo déja utilisé"});
                }
                
            }
        }else{
            res.send({loggedIn: false, error:"tous les champs doive étre rempli"});
        }
    }catch(error){
        console.log(error)
    }
})

router.post("/login", async (req, res) => {
    try{
        let{ userName, password} = req.body;
        let user = await pool.query(`select * from users where email=$1 or pseudo=$1`, [userName], 
        (err, result) => {
            if(result.rowCount > 0){
                console.log(result.rows[0]);
                bcrypt.compare(password, result.rows[0].password, (err, isMatch) => {
                    if(err) throw err;
                    if(isMatch){
                        res.send({loggedIn: true, data: result.rows[0]});
                    }else{
                        res.send({loggedIn: false, error: "Mot de passe incorecte"});
                    }
                });
            }else{
                res.send({loggedIn: false, error: "Utilisateur introuvable"});
            }
        })
        
    }catch(err){
        console.log(err);
    }
})

module.exports = router;