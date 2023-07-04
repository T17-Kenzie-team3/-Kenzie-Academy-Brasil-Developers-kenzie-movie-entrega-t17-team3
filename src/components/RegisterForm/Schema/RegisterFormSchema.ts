import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    name: z
      .string()
      .nonempty("O nome é obrigatorio"),
    email: z
      .string()
      .nonempty("Digite seu e-mail")
      .email("Preencha o email corretamente"),
    password: z
      .string()
      .nonempty("Digite sua senha")
      .min(8, "A senha precisa ter no mínimo 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/\?][^!@$%^*+=\[\]{};:\\|<>\?]*$)/, "É necessário ao menos um caracter especial")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
    confirm: z.string().nonempty("Por favor confirme a sua senha"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam corresponder",
    path: ["confirm"],
  });

export type TRegisterValues = z.infer<typeof RegisterFormSchema>;
