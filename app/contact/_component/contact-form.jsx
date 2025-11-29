"use client";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  // State to handle loading status
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Form submission handler
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const payload = {
        name: data.fullName,
        email: data.email,
        contact_number: data.contactNumber,
        designation: data.designation,
        website: data.website,
        _subject: data.subject,
        message: data.message,
        _template: "table", // Makes the email look professional
        _captcha: "false", // Disables the captcha redirect for smoother UI
      };

      // 2. Send via AJAX
      const response = await fetch(
        "https://formsubmit.co/ajax/aryaengineeringwork24@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      // 3. Handle Response
      if (response.ok) {
        toast.success("Thank you! We'll get back to you soon.");
        reset(); // Clear the form
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Full Name */}
        <div>
          <Label
            htmlFor="fullName"
            className="text-lg text-foreground mb-2 block"
          >
            Full Name<span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            {...register("fullName", { required: "The full name is required" })}
            className="h-12"
            placeholder="Enter your full name"
            disabled={isSubmitting}
          />
          {errors.fullName && (
            <p className="text-destructive mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-lg text-foreground mb-2 block">
            Email Address<span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
            className="h-12"
            placeholder="Enter your email address"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Contact Number */}
        <div>
          <Label
            htmlFor="contactNumber"
            className="text-lg text-foreground mb-2 block"
          >
            Contact Number<span className="text-destructive">*</span>
          </Label>
          <Input
            id="contactNumber"
            type="tel"
            {...register("contactNumber", {
              required: "Contact number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Please enter a valid contact number",
              },
            })}
            className="h-12"
            placeholder="Enter your contact number"
            disabled={isSubmitting}
          />
          {errors.contactNumber && (
            <p className="text-destructive mt-1">
              {errors.contactNumber.message}
            </p>
          )}
        </div>

        {/* Designation */}
        <div>
          <Label
            htmlFor="designation"
            className="text-lg text-foreground mb-2 block"
          >
            Designation
          </Label>
          <Input
            id="designation"
            {...register("designation")}
            className="h-12"
            placeholder="Enter your designation (optional)"
            disabled={isSubmitting}
          />
        </div>

        {/* Website */}
        <div>
          <Label
            htmlFor="website"
            className="text-lg text-foreground mb-2 block"
          >
            Website
          </Label>
          <Input
            id="website"
            {...register("website")}
            className="h-12"
            placeholder="Enter your website (optional)"
            disabled={isSubmitting}
          />
        </div>

        {/* Subject */}
        <div>
          <Label
            htmlFor="subject"
            className="text-lg text-foreground mb-2 block"
          >
            Subject<span className="text-destructive">*</span>
          </Label>
          <Input
            id="subject"
            {...register("subject", { required: "Subject is required" })}
            className="h-12"
            placeholder="Enter subject"
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p className="text-destructive mt-1">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <Label
            htmlFor="message"
            className="text-lg text-foreground mb-2 block"
          >
            Your Message<span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            rows={5}
            placeholder="Enter your message"
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-destructive mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Toaster for Success/Error messages */}
        <Toaster />

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full h-12 text-lg font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit Enquiry"}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
