import { z } from "zod";

export const AddReviewSchema = z
  .object({
    score: z
      .string()
      .min(1, "Selecione uma nota"),
      description: z
      .string()
      .nonempty("O comentário não pode estar vazio"),
  })

export type TAddReviewValues = z.infer<typeof AddReviewSchema>;
