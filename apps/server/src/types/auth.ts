import z from 'zod'

export const ZLoginReqBody = z.object({
	email: z.string().email(),
	password: z.string().min(8),
})

export const ZSignupReqBody = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string().min(8),
})

const ZUser = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string().email(),
	password: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
})
export type IUser = z.infer<typeof ZUser>

const ZCreateUser = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string(),
})
export type ICreateUser = z.infer<typeof ZCreateUser>