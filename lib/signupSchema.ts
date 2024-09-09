import {z} from "zod";

export const signupSchema = z.object({

    fullName: z.string().min(1).max(20), 
    email: z.string().email(),
    zipCode:z.number().min(4), 
    password: z.string().min(8).max(30),
    confirmPassword: z.string().min(8).max(30),
    
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password Must Match",
    path:['confirmPassword']
})

