const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
    try{
        let {email, pseudo, password1, password2} = req.body;
        const emailExist = await pool.query(`select * from users where email=$1`, [email]);
        const pseudoExist = await pool.query(`select * from users where pseudo=$1`, [pseudo]);
        if(emailExist.rowCount === 0 && pseudoExist.rowCount === 0){
            console.log(pseudo.rows);
            if(password1 === password2 && password1.length >= 7){
                let hashPass = await bcrypt.hash(password1, 10);
                let insertUser = await pool.query(`insert into users (email, pseudo, password) values ($1, $2, $3) returning *`, [email, pseudo, hashPass],
                (err, result) => {
                    if(result){
                        res.send({loggedIn: true, user: result.rows});
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
    }catch(error){
        console.log(error)
    }
})

module.exports = router;