import { body, ValidationChain } from 'express-validator/check';

import { id, password, name } from '../../../../config/regexp.json';

const RegisterValidation: ValidationChain[] = [
  body('id')
    .isString()
    .matches(id),
  body('password')
    .isString()
    .matches(password),
  body('name')
    .isString()
    .matches(name),
];

export default RegisterValidation;
