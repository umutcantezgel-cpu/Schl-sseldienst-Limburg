"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren vollständigen Namen ein"),
  email: z.string().email("Bitte prüfen Sie Ihre E-Mail-Adresse"),
  phone: z.string().optional(),
  message: z.string().min(10, "Bitte schildern Sie kurz Ihr Anliegen (min. 10 Zeichen)"),
  privacy: z.literal(true, {
    message: "Die Zustimmung zum Datenschutz ist für die Kontaktaufnahme erforderlich",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setIsError(false);
    
    try {
      // Replace with your actual Formspree endpoint ID
      const response = await fetch("https://formspree.io/f/xvgzyjko", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[var(--color-success-bg)] border border-[var(--color-emerald-200)] rounded-2xl p-8 text-center flex flex-col items-center">
        <div className="h-16 w-16 bg-[var(--color-success)] rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-[var(--text-h4)] font-[700] text-[var(--color-emerald-800)] mb-2">
          Anfrage erfolgreich übermittelt
        </h3>
        <p className="text-[var(--color-emerald-700)]">
          Unser Limburger Meister-Team hat Ihre Nachricht erhalten. In dringenden Fällen melden wir uns umgehend bei Ihnen.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-[var(--color-success)] font-[600] hover:underline"
        >
          Neue Nachricht verfassen
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-blue-dark)] rounded-2xl border border-[var(--color-border-subtle)] p-6 sm:p-8 shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {isError && (
          <div className="bg-[var(--color-error-bg)] border border-[var(--color-error)]/20 text-[var(--color-error)] px-4 py-3 rounded-xl flex items-start gap-3 mb-6">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <p className="text-sm">
              Übertragungsfehler. Bitte nutzen Sie in dringenden Fällen direkt unseren Limburger Notruf.
            </p>
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-[600] text-white mb-1.5">
            Ihr Name <span className="text-[var(--color-blue-primary)]">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={cn(
              "w-full rounded-xl border px-4 py-3 text-[var(--color-text-main)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-primary)]/20 focus:border-[var(--color-blue-primary)]",
              errors.name ? "border-[var(--color-error)]/40 bg-[var(--color-error-bg)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20" : "border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)]"
            )}
            placeholder="Vor- und Nachname"
          />
          {errors.name && <p className="mt-1.5 text-sm text-[var(--color-error)] font-medium">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-[600] text-white mb-1.5">
              Ihre E-Mail-Adresse <span className="text-[var(--color-blue-primary)]">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={cn(
                "w-full rounded-xl border px-4 py-3 text-[var(--color-text-main)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-primary)]/20 focus:border-[var(--color-blue-primary)]",
                errors.email ? "border-[var(--color-error)]/40 bg-[var(--color-error-bg)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20" : "border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)]"
              )}
              placeholder="ihre.adresse@beispiel.de"
            />
            {errors.email && <p className="mt-1.5 text-sm text-[var(--color-error)] font-medium">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-[600] text-white mb-1.5">
              Rückruf-Nummer (optional, für Notfälle)
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className="w-full rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] px-4 py-3 text-[var(--color-text-main)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-primary)]/20 focus:border-[var(--color-blue-primary)]"
              placeholder="Für einen schnellen Rückruf"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-[600] text-white mb-1.5">
            Schildern Sie Ihre Situation in Limburg <span className="text-[var(--color-blue-primary)]">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className={cn(
              "w-full rounded-xl border px-4 py-3 text-[var(--color-text-main)] placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-primary)]/20 focus:border-[var(--color-blue-primary)] resize-y",
              errors.message ? "border-[var(--color-error)]/40 bg-[var(--color-error-bg)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20" : "border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)]"
            )}
            placeholder="Beschreiben Sie kurz Ihr Anliegen (z.B. Tür zugefallen in Limburg-Dietkirchen)..."
          />
          {errors.message && <p className="mt-1.5 text-sm text-[var(--color-error)] font-medium">{errors.message.message}</p>}
        </div>

        <div className="flex items-start gap-3 pb-2">
          <div className="flex items-center h-5 mt-0.5">
            <input
              id="privacy"
              type="checkbox"
              {...register("privacy")}
              className="h-4 w-4 rounded border-gray-300 text-[var(--color-blue-primary)] focus:ring-[var(--color-blue-primary)]"
            />
          </div>
          <div className="text-sm text-white">
            <label htmlFor="privacy" className="font-medium">
              Sichere Datenübertragung
            </label>
            <p className="text-blue-50/80 mt-0.5">
              Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. Ihre Anfrage wird verschlüsselt an unser Limburger Team übertragen.
            </p>
            {errors.privacy && <p className="mt-1 text-sm text-[var(--color-error)] font-medium">{errors.privacy.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(buttonVariants({ size: "lg", variant: "default" }), "w-full min-h-[56px] text-lg mt-2")}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Anfrage wird übermittelt...
            </>
          ) : (
            "Jetzt sichere Anfrage senden"
          )}
        </button>
      </form>
    </div>
  );
}
