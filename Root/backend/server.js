import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";
import Cors from "cors";

const app=express();
const port= process.env.PORT || 8001;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(Cors());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "MySQL@05",
    database: "interview"
});

app.get("/", (req, res)=> {
        
    res.send("Hello World!!");
   
});

app.get("/All", (req,res)=> {
    const abc = "select * from products";
    db.query(abc, (err,result)=> {
        res.send(result);
    });
});

app.get("/Apple", (req,res)=> {
    const abc = "select * from products WHERE manufacturer='Apple'";
    db.query(abc, (err,result)=> {
        res.send(result);
    });
});

app.get("/Samsung", (req,res)=> {
    const abc = "select * from products WHERE manufacturer='Samsung'";
    db.query(abc, (err,result)=> {
        res.send(result);
    });
});

app.get("/OnePlus", (req,res)=> {
    const abc = "select * from products WHERE manufacturer='One Plus'";
    db.query(abc, (err,result)=> {
        res.send(result);
    });
});

app.get("/Google", (req,res)=> {
    const abc = "select * from products WHERE manufacturer='Google'";
    db.query(abc, (err,result)=> {
        res.send(result);
    });
});

app.get("/Huawei", (req,res)=> {
    const abc = "select * from products WHERE manufacturer='Huawei'";
    db.query(abc, (err,result)=> {
        res.send(result);
    });
});

app.get("/Sony", (req,res)=> {
    const abc = "select * from products WHERE manufacturer='Sony'";
    db.query(abc, (err,result)=> {
        res.send(result);
    });
});

app.listen(port, ()=> {
    console.log("Listening on port");
});
