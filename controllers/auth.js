var mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.login = async (req, res) => {
    try {
        const{ email , password } = req.body;
        
        if( !email || !password ){
            return res.status(400).render('login', {
                message: 'Email ve Şifrenizi Kontrol Ediniz!'
            });
        }

        db.query('SELECT * FROM kullanicilar WHERE email =? ', [email], async (error , results) => {
            console.log(results);
            if( !results || !(await bcrypt.compare(password, results[0].password) ) ){
                res.status(401).render('login', {
                    message: 'Email veya Şifre Yanlış Girilmiştir!'
                })
            }
            else {
                const id= results[0].id;
                const token = jwt.sign({ id : id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPORES_IN
                });
            }
        });

    } catch (error) {
        console.log(error);
    }
};

exports.register = (req, res) => {
    console.log(req.body);

    const { adi , email , sifre , sifreonay} = req.body;

    db.query('SELECT email FROM kullanicilar WHERE email = ?', [email] , async (error, results) => {
        if(error){
            console.log(error);
        }
        /*if( error = "ER_DUP_ENTRY"){
            return res.render('register',{
                message: 'Email Kullanılmaktadır!, Farklı Bir Email Deneyiniz!'
            });
        }*/
        else if(sifre!== sifreonay){
            return res.render('register',{
                message: 'Şifreler Eşleşmemekte!'
            });
        };
        let hashedpassword = await bcrypt.hash(sifre, 8);
        console.log(hashedpassword);
        
        db.query('INSERT INTO kullanicilar SET ?', {adi : adi , email : email , sifre : hashedpassword}, (error, results) => {
           if(error){
               console.log(error);
           } else {
               console.log(results);
            return res.render('register',{
                message: 'Kullanıcı Kayıt Oldu'
            } );
           };

        });
    });
};