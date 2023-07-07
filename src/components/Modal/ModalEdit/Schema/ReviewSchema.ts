import { z } from "zod";

export const ReviewSchema = z
  .object({
    score: z
      .string()
      .min(1, "Selecione uma nota"),
      description: z
      .string()
      .nonempty("O comentário não pode estar vazio"),
  })

export type TReviewValues = z.infer<typeof ReviewSchema>;
