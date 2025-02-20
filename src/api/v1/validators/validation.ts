import Joi from 'joi';
// src/api/v1/validators/validation.ts
export const validateData = (data: any) => {
    if (!data || typeof data !== 'object' || !data.name || !data.age) {
        return false;
    }
    return true;
 };
 