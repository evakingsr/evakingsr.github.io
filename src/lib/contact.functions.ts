import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      subject: data.subject ?? null,
      message: data.message,
    });
    if (error) {
      console.error("[contact] insert failed", error.message);
      return { ok: false as const, error: "Something went wrong. Please try again." };
    }
    return { ok: true as const };
  });
