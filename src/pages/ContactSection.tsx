import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { InfoIcon, ExternalLink } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contactSchema, type ContactFormData } from "@/lib/schema";
import contactMethods from "@/components/contact/contact";
import { contact } from "@/data/contact";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import {
  sectionReveal,
  staggerContainer,
  staggerItem,
  DEFAULT_VIEWPORT,
} from "@/motion";

export default function ContactSection() {
  const [showAlert, setShowAlert] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { fullName: "", email: "", comment: "" },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Data:", data);
    setShowAlert(true);
  };

  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      id="contact"
      className="container relative z-10 mx-auto px-4 space-y-12"
    >
      <SectionHeading
        badge={contact.badge}
        title={contact.title}
        description={contact.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          className="flex flex-col space-y-4 w-full max-w-md mx-auto my-auto"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.id}
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                whileHover={{
                  backgroundColor: "rgba(var(--primary), 0.1)",
                  borderColor: "oklch(var(--primary))",
                }}
                className="group relative flex items-center p-4 gap-4 rounded-2xl border border-border bg-card/30 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(107,70,255,0.2)]"
              >
                <div className="relative flex items-center justify-center p-3 rounded-xl bg-muted/50 text-muted-foreground group-hover:text-primary transition-colors">
                  <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                    {method.id}
                  </span>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate max-w-[150px]">
                    {method.name}
                  </span>
                </div>

                <ExternalLink
                  size={14}
                  className="absolute right-4 top-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                />
              </motion.a>
            );
          })}
        </motion.div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldSet className="w-full max-w-md mx-auto bg-background/50 border border-primary/20 rounded-lg p-6">
            <FieldLegend>Form contact</FieldLegend>
            <FieldDescription>
              You can use this form to contact me. I will get back to you as
              soon as possible.
            </FieldDescription>
            <FieldSeparator />
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full name</FieldLabel>
                <Input
                  id="name"
                  autoComplete="off"
                  placeholder="Evil Rabbit"
                  {...register("fullName")}
                  aria-invalid={!!errors.fullName}
                />
                <FieldError>{errors.fullName?.message}</FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  autoComplete="off"
                  placeholder="evil.rabbit@example.com"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                />
                <FieldError>{errors.email?.message}</FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="comments">Additional comments</FieldLabel>
                <Textarea
                  id="comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                  {...register("comment")}
                  aria-invalid={!!errors.comment}
                />
                <FieldError>{errors.comment?.message}</FieldError>
              </Field>
              <FieldSeparator />
              <Field orientation="horizontal">
                <Button size="lg" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>

      {showAlert && (
        <Alert>
          <InfoIcon />
          <AlertTitle>Notification!!!</AlertTitle>
          <AlertDescription>
            This is a demo form. The data you entered will not be sent anywhere.
          </AlertDescription>
          <AlertAction>
            <Button variant="outline" onClick={() => setShowAlert(false)}>
              OK!!!!
            </Button>
          </AlertAction>
        </Alert>
      )}
    </motion.section>
  );
}
