import SectionHeading from "@/components/common/SectionHeading";
import Facebook from "@/assets/icons/facebook.svg?react";
import Github from "@/assets/icons/github.svg?react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/schema";
import type { ContactFormData } from "@/lib/schema";
import StarIcon from "@/components/common/StarIcon";

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
    <section
      id="contact"
      className="container relative z-10 mx-auto px-4 space-y-12"
    >
      {" "}
      <SectionHeading
        badge="Contact"
        title="Let's Connect in the Cosmos"
        description="Whether you have a project in mind or just want to say hi, I'm always open to new connections and collaborations. Let's create something cosmic together!"
      />{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <StarIcon />
            <a
              href="mailto:thd13062005@gmail.com"
              className="text-xl font-medium text-white hover:text-primary"
            >
              thd13062005@gmail.com
            </a>
          </div>
          <a
            href="tel:0839479440"
            className="text-lg font-medium text-white hover:text-primary"
          >
            <span className="font-bold mr-2">SDT</span>0839479440
          </a>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/tran.dang.913442/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-medium text-white hover:text-primary"
            >
              <Facebook className="w-8 h-8 " />
              <p>Dang Tran</p>
            </a>
            <a
              href="https://github.com/dak-1306"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-medium text-white hover:text-primary"
            >
              <Github className="w-8 h-8 " />
              <p>dak-1306</p>
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
    </section>
  );
}
