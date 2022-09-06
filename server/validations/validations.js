import { body } from 'express-validator'

export const registerValidation = [
    body('AdminLogin').isLength({ min: 3 }),
    body('AdminPassword').isLength({ min: 5 }),
]

export const loginValidation = [
    body('AdminLogin').isLength({ min: 3 }),
    body('AdminPassword').isLength({ min: 5 }),
]

export const postCreateValidation = [
    body('title').isLength({ min: 1 }).isString(),
    body('number').optional().isLength({ min: 1 }).isString(),
    body('mass').optional().isString(),
    body('category').isString(),
    body('imageUrl').optional().isString(),
]