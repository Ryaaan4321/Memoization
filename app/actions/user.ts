"use server"
import { User } from '@prisma/client';
import client from '../db'

export interface UserData {
    username: string;
    email: string;
    password: string;
}

export async function createuser({username,email,password}:UserData){
    const response=await client.user.create({
        data:{
            username,
            email,
            password
        }
    });
    console.log(response);
}