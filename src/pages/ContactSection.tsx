import SectionHeading from "@/components/common/SectionHeading";
import Facebook from "@/assets/icons/facebook.svg?react";
import Github from "@/assets/icons/github.svg?react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/schema";
import type { ContactFormData } from "@/lib/schema";

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
import { Input } from "@/components/ui/input";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      comment: "",
    },
  });
  const onSubmit = (data: ContactFormData) => {
    console.log("Form Data:", data);
    // Xử lý gửi API ở đây
  };
  return (
    <div className="container relative z-10 mx-auto px-4 space-y-12">
      {" "}
      <SectionHeading
        badge="Contact"
        title="Let's Connect in the Cosmos"
        description="Whether you have a project in mind or just want to say hi, I'm always open to new connections and collaborations. Let's create something cosmic together!"
      />{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:your.email@example.com"
            className="text-xl font-medium text-primary hover:text-primary/80"
          >
            your.email@example.com
          </a>
          <a
            href="tel:0839479440"
            className="text-lg font-medium text-primary hover:text-primary/80"
          >
            <span className="font-bold">SDT</span>0839479440
          </a>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-medium text-primary hover:text-primary/80"
            >
              <Facebook className="w-8 h-8 " />
              <p>Facebook</p>
            </a>
            <a
              href="https://www.github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-medium text-primary hover:text-primary/80"
            >
              <Github className="w-8 h-8 " />
              <p>GitHub</p>
            </a>
          </div>
        </div>

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
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Additional comments
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                  {...register("comment")}
                  aria-invalid={!!errors.comment}
                />
                <FieldError>{errors.comment?.message}</FieldError>
              </Field>
              <Field orientation="horizontal">
                <Button size="lg" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
    </div>
  );
}
