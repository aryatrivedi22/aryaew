"use client";
import { toast, Toaster } from "sonner";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    toast.success("Thank you! We'll get back to you soon.");
    reset();
  };

  return (
    <>
      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
          />
          {errors.fullName && (
            <p className="text-destructive mt-1">{"This field is required!"}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-lg text-foreground mb-2 block">
            Email Address<span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="h-12"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div>
          <Label
            htmlFor="contactNumber"
            className="text-lg text-foreground mb-2 block"
          >
            Contact Number<span className="text-destructive">*</span>
          </Label>
          <Input
            id="contactNumber"
            {...register("contactNumber")}
            className="h-12"
            placeholder="Enter your contact number"
            required
          />
        </div>

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
          />
        </div>

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
          />
        </div>

        <div>
          <Label
            htmlFor="subject"
            className="text-lg text-foreground mb-2 block"
          >
            Subject<span className="text-destructive">*</span>
          </Label>
          <Input
            id="subject"
            {...register("subject")}
            className="h-12"
            placeholder="Enter subject"
            required
          />
        </div>

        <div>
          <Label
            htmlFor="message"
            className="text-lg text-foreground mb-2 block"
          >
            Your Message<span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            {...register("message")}
            rows={5}
            placeholder="Enter your message"
            required
          />
        </div>
        <Toaster />
        <Button type="submit" className="w-full h-12 text-lg font-semibold">
          Submit Enquiry
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
