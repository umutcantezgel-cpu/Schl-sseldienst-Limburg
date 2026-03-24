"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  privacy: z.literal(true, {
    message: "Sie müssen der Datenschutzerklärung zustimmen",
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
      <div className="bg-[var(--color-success-bg)] border border-[var(--color-emerald-200)] rounded-2xl p-[var(--space-8)] text-center flex flex-col items-center">
        <div className="h-16 w-16 bg-[var(--color-success)] rounded-full flex items-center justify-center mb-[var(--space-4)]">
          <CheckCircle2 className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-[var(--text-h4)] font-[700] text-[var(--color-emerald-800)] mb-[var(--space-2)]">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="text-[var(--color-emerald-700)]">
          Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-[var(--space-6)] text-[var(--color-success)] font-[600] hover:underline"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-[var(--color-border)] p-[var(--space-6)] sm:p-[var(--space-8)] shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-[var(--space-5)]" noValidate>
        {isError && (
          <div className="bg-[var(--color-error-bg)] border border-[var(--color-error)]/20 text-[var(--color-error)] px-4 py-3 rounded-xl flex items-start gap-3 mb-6">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <p className="text-sm">
              Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später noch einmal oder rufen Sie uns direkt an.
            </p>
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-[600] text-[var(--color-text-primary)] mb-1.5">
            Name <span className="text-[var(--color-brand)]">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={cn(
              "w-full rounded-xl border px-4 py-3 text-[var(--color-text-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)]",
              errors.name ? "border-[var(--color-error)]/40 bg-[var(--color-error-bg)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20" : "border-[var(--color-border-subtle)] bg-[var(--color-surface-subtle)]"
            )}
            placeholder="Max Mustermann"
          />
          {errors.name && <p className="mt-1.5 text-sm text-[var(--color-error)] font-medium">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-5)]">
          <div>
            <label htmlFor="email" className="block text-sm font-[600] text-[var(--color-text-primary)] mb-1.5">
              E-Mail <span className="text-[var(--color-brand)]">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={cn(
                "w-full rounded-xl border px-4 py-3 text-[var(--color-text-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)]",
                errors.email ? "border-[var(--color-error)]/40 bg-[var(--color-error-bg)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20" : "border-[var(--color-border-subtle)] bg-[var(--color-surface-subtle)]"
              )}
              placeholder="mail@beispiel.de"
            />
            {errors.email && <p className="mt-1.5 text-sm text-[var(--color-error)] font-medium">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-[600] text-[var(--color-text-primary)] mb-1.5">
              Telefonrückruf (optional)
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className="w-full rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-subtle)] px-4 py-3 text-[var(--color-text-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)]"
              placeholder="0151 1234567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-[600] text-[var(--color-text-primary)] mb-1.5">
            Ihre Nachricht <span className="text-[var(--color-brand)]">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className={cn(
              "w-full rounded-xl border px-4 py-3 text-[var(--color-text-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] resize-y",
              errors.message ? "border-[var(--color-error)]/40 bg-[var(--color-error-bg)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20" : "border-[var(--color-border-subtle)] bg-[var(--color-surface-subtle)]"
            )}
            placeholder="Wie können wir Ihnen helfen?"
          />
          {errors.message && <p className="mt-1.5 text-sm text-[var(--color-error)] font-medium">{errors.message.message}</p>}
        </div>

        <div className="flex items-start gap-3 pb-2">
          <div className="flex items-center h-5 mt-0.5">
            <input
              id="privacy"
              type="checkbox"
              {...register("privacy")}
              className="h-4 w-4 rounded border-gray-300 text-[var(--color-brand)] focus:ring-[var(--color-brand)]"
            />
          </div>
          <div className="text-sm text-[var(--color-text-body)]">
            <label htmlFor="privacy" className="font-medium">
              Datenschutz
            </label>
            <p className="text-gray-500 mt-0.5">
              Ich stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert werden dürfen. Diese Einwilligung kann jederzeit widerrufen werden.
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
              Wird gesendet...
            </>
          ) : (
            "Anfrage senden"
          )}
        </button>
      </form>
    </div>
  );
}
