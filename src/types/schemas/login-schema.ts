import { z } from 'zod';

const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email({ message: 'Invalid email' }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters',
  }),
});

export { loginSchema };
export type TLoginSchema = z.infer<typeof loginSchema>;
