require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwtDecode = require('jwt-decode');
const _ = require('lodash');
const path = require("path");
const uri = process.env.URI;
const {
    createToken,
    hashPassword,
    verifyPassword,
} = require("./util.js");

const app = express();

const whitelist = ['https://nba-playoffbets.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors({
    corsOptions,
    credentials: true
}));
app.use(express.json())

app.use((req, res, next) => {
   
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});



mongoose.connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true, useUnifiedTopology: true });

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
    hasBet: {
        type: Boolean,
        required: true
    },
    score: {
        type: Number,
    },
    logCount: {
        type: Number,
    },
    bet: {
        teams: [],
        srTeams: [],
        trTeams: [],
        finals: []
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
            firstName: _.capitalize(firstName),
            lastName: _.capitalize(lastName),
            email: email.toLowerCase(),
            password: hashedPassword,
            role: 'admin',
            hasBet: false,
            score: 0,
            bet: {
                teams: [],
                srTeams: [],
                trTeams: [],
                finals: []
            }
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
                hasBet,
                score,
                bet
            } = savedUser;

            const userInfo = {
                firstName,
                lastName,
                email,
                role,
                hasBet,
                score,
                bet
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
                message: 'Logged In!',
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

});

app.post("/user", (req, res) => {
    const { id } = req.body;

    User.findById({ _id: id })
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))

});

app.post("/bet", (req, res) => {
    const { teams, srTeams, trTeams, finals, userInfo } = req.body;

    finals.map(team => team.value = team.value - 12)

    trTeams.map(team => {
        if (team.value >= 12) {
            return team.value = 4
        } else if (team.value >= 8) {
            return team.value = team.value - 8
        }
    });

    srTeams.map(team => {
        if (team.value >= 12) {
            return team.value = 4
        } else if (team.value >= 8) {
            return team.value = 4
        } else if (team.value >= 4) {
            return team.value = team.value - 4
        }
    });

    teams.map(team => {
        if (team.value >= 4) {
            return team.value = 4
        }
    });

    const newBet = {
        teams,
        srTeams,
        trTeams,
        finals
    }

    User.findOneAndUpdate({ 'email': userInfo.email }, { 'bet': newBet }, (err) => {
        if (err) {
            console.log(err);
        } else {
            User.findOneAndUpdate({ 'email': userInfo.email }, { hasBet: true }, err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Nuaghty Nuaghty!');
                }
            })
        }
    })



});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../build'));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "nba-project", "build", "index.html"));
    })
}

app.listen(process.env.PORT || 5000, () => {
    console.log('Server started on port 5000');
});