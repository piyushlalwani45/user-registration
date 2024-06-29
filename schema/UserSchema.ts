import { z } from "zod";

export const UserSchema = z.object({
firstName : z.string().nonempty(),
lastName : z.string().nonempty(),
email : z.string().email(),
phoneNo : z.string().min(10).max(10)
})