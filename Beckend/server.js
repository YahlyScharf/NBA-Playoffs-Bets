require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { hash } = require('bcrypt');
const jwtDecode = require('jwt-decode');
const uri = process.env.URI
const secret = process.env.SECRET;
const {
    createToken,
    hashPassword,
    verifyPassword,
    requireAdmin
} = require("./util.js");

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json())



mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established succesfully');
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    score: {
        type:Number,
    }
}, {
    timestamps: true
});


const User = mongoose.model('user', userSchema);

app.post("/signup", async (req, res) => {

    try {
        const { lastName, firstName, email } = req.body;

        const hashedPassword = await hashPassword(
            req.body.password
        );

        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email.toLowerCase(),
            password: hashedPassword,
            role: 'admin',
            score:0
        };


        const existingUsername = await User.findOne(
            { email: userData.email }
        ).lean();

        if (existingUsername) {
            return res
                .status(400)
                .json({ message: 'This Email Address Is Alreay Registerd' });
        }

        const newUser = new User(userData);
        const savedUser = await newUser.save();

        if (savedUser) {
            const token = createToken(savedUser);
            const decodeedToken = jwtDecode(token);
            const expiresAt = decodeedToken.exp;

            const {
                firstName,
                lastName,
                email,
                role,
                score
            } = savedUser;

            const userInfo = {
                firstName,
                lastName,
                email,
                role,
                score
            }

            return res.json({
                message: 'User Added!',
                token,
                userInfo,
                expiresAt
            });

        } else {
            return res
                .status(400)
                .json({ message: 'There Was A Problem Creating Your Account' });
        }
    } catch (err) {
        return res.status(400).json({
            message: 'There Was A Problem Creating Your Account'
        });
    }

});


app.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            email
        }).lean();

        if (!user) {
            return res
                .status(400)
                .json({ message: 'Wrong Email Or Password' })
        };

        const userVelidation = await verifyPassword(
            password,
            user.password
        );

        if (userVelidation) {
            const { password, bio, ...rest } = user;
            const userInfo = Object.assign({}, { ...rest });

            const token = createToken(userInfo);
            const decodeedToken = jwtDecode(token);
            const expiresAt = decodeedToken.exp;

            return res.json({
                message: 'User Authorized!',
                token,
                userInfo,
                expiresAt
            });
        } else {
            res.status(403).json({ message: 'Wrong Email Or Password' });
        }
    }
    catch (err) {
        console.log(err);
        return res
            .status(400)
            .json({ message: 'Something Went Wrong.' });
    }

});

app.get("/users", (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err))

})

app.listen(5000 || process.env.PORT, () => {
    console.log('Server started on port 5000');
});