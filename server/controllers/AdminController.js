import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import UserModel from '../models/User.js'

export const register = async (req, res) => {
    try {

        const pass = req.body.AdminPassword
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(pass, salt)
    
        const doc = new UserModel({
            AdminLogin: req.body.AdminLogin,
            AdminPassword: hash,
            AdminLevel: req.body.AdminLevel,
        })
    
        const user = await doc.save()

        const token = jwt.sign(
        {
        _id: user._id,
        }, 
        'bijutier123', 
        {
            expiresIn: '30d',
        },
        )

        const {AdminPassword, ... userData} = user._doc
    
        res.json(
            {
                ... userData,
            token,
            }
            )

    } catch (error) {
        res.json(error)
    }
}

export const login = async (req, res) => {

    try {
        const user = await UserModel.findOne({ AdminLogin: req.body.AdminLogin })

        if (!user) {
            return res.status(400).json({
                message: 'Login sau parola inexistenta'
            })
        }

        const isValidPass = await bcrypt.compare(req.body.AdminPassword, user._doc.AdminPassword)

        if (!isValidPass) {
            return res.status(400).json({
                message: 'Login sau parola inexistenta'
            })
        }

        
        const token = jwt.sign(
            {
            _id: user._id,
            }, 
            'bijutier123', 
            {
                expiresIn: '30d',
            },
            )

            const {AdminPassword, ... userData} = user._doc
    
            res.json(
                {
                    ... userData,
                token,
                }
                )

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Logarea nu a reusit',
        })
    }
}

export const getAdmin = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId)

        if (!user) {
            return res.status(404).json({
                message: 'Nu exista acces',
            })
        }

        const {AdminPassword, ... userData} = user._doc
    
        res.json(userData)
    } catch (error) {
        return res.status(404).json({
            message: 'Nu exista acces',
        })
    }
}