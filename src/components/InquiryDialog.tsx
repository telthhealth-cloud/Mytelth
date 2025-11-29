import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle, Loader2 } from "lucide-react";

const inquirySchema = z.object({
  fullName: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, "Invalid phone format"),
  company: z.string()
    .max(100, "Company name must be less than 100 characters")
    .optional(),
  inquiryType: z.string()
    .min(1, "Please select an inquiry type"),
  location: z.string()
    .min(2, "Location is required")
    .max(100, "Location must be less than 100 characters"),
  message: z.string()
    .min(20, "Please provide more details (at least 20 characters)")
    .max(1000, "Message must be less than 1000 characters"),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

interface InquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultInquiryType?: string;
  context?: "community" | "care-home";
}

export const InquiryDialog = ({ open, onOpenChange, defaultInquiryType = "", context = "community" }: InquiryDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: defaultInquiryType,
      location: "",
      message: "",
    },
  });

  // Update inquiry type when defaultInquiryType changes
  if (defaultInquiryType && form.getValues("inquiryType") !== defaultInquiryType) {
    form.setValue("inquiryType", defaultInquiryType);
  }

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke("submit-partner-inquiry", {
        body: {
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          company: data.company || "",
          partnerType: data.inquiryType,
          location: data.location,
          message: data.message,
        },
      });

      if (error) throw error;

      setShowSuccess(true);
      
      // Auto-close after 5 seconds
      setTimeout(() => {
        handleClose();
      }, 5000);

    } catch (error) {
      console.error("Error submitting inquiry:", error);
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowSuccess(false);
    form.reset();
    onOpenChange(false);
  };

  const inquiryOptions = context === "care-home" 
    ? [
        "Request Care@Home Visit",
        "Care Plans Inquiry",
        "Schedule Assessment",
        "Chronic Care Management",
        "Emergency Care Access",
        "Assign Care Manager",
        "Insurance Coverage Query",
        "Other Healthcare Inquiry"
      ]
    : [
        "Request Hub for My Location",
        "Franchise Opportunity",
        "Community Partnership (CSR/Government)",
        "General Partnership Inquiry",
        "Request More Information",
        "Other"
      ];

  const dialogTitle = context === "care-home" 
    ? "Request Care@Home Services"
    : "Get in Touch with Telth";

  const dialogDescription = context === "care-home"
    ? "Fill out the form below and our Care Manager will contact you within 24 hours to schedule your visit."
    : "Fill out the form below and our team will contact you within 24-48 hours.";

  const successMessage = context === "care-home"
    ? "A Care Manager will reach out to you within 24 hours to discuss your healthcare needs."
    : "Someone from Telth will contact you within 24-48 hours to discuss your inquiry about:";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {!showSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{dialogTitle}</DialogTitle>
              <DialogDescription>
                {dialogDescription}
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone *</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (234) 567-8900" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company/Organization</FormLabel>
                        <FormControl>
                          <Input placeholder="Optional" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="inquiryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Inquiry Type *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {inquiryOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location/Region *</FormLabel>
                      <FormControl>
                        <Input placeholder="City, State/Province, Country" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your needs and goals..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>
              </form>
            </Form>
          </>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center animate-scale-in">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">Thank You!</h3>
              <p className="text-lg text-muted-foreground">
                We've received your inquiry
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <p className="text-sm font-semibold">What happens next?</p>
              <p className="text-sm text-muted-foreground">
                {successMessage}
              </p>
              {context !== "care-home" && (
                <p className="text-sm font-semibold text-primary">
                  {form.getValues("inquiryType")}
                </p>
              )}
            </div>

            <Button onClick={handleClose} size="lg" className="mt-4">
              Close
            </Button>

            <p className="text-xs text-muted-foreground">
              This dialog will close automatically in 5 seconds
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
