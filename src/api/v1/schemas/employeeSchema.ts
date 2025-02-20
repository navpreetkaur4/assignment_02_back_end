import Joi from 'joi';

export const employeeSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    position: Joi.string().valid('Manager', 'Staff', 'Intern').required(),
    email: Joi.string().email().required(),
    branchId: Joi.string().required(), // Assuming branchId is a string
});