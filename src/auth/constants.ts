import dotenv from 'dotenv';
dotenv.config();

export const jwtConstants = {
    secret: process.env.password,
  };