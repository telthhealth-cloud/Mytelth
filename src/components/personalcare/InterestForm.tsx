import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2, MapPin, Mail, Phone, User, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20),
  location: z.string().min(2, "Please enter your location").max(100),
  inquiry_type: z.enum(["personal_care", "care_pay_card"]),
  preferred_contact: z.enum(["email", "phone"]),
  message: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

interface InterestFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInquiryType?: "personal_care" | "care_pay_card";
}

const majorCities = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad",
  "London", "Manchester", "Birmingham", "Edinburgh", "Glasgow",
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Other"
];

export const InterestForm = ({ isOpen, onClose, defaultInquiryType = "personal_care" }: InterestFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferred_contact: "email",
      inquiry_type: defaultInquiryType,
    },
  });

  const selectedLocation = watch("location");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from("personal_care_inquiries")
        .insert([{
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          location: data.location,
          inquiry_type: data.inquiry_type,
          preferred_contact: data.preferred_contact,
          message: data.message || null,
        }]);

      if (error) throw error;

      setIsSuccess(true);
      toast.success("Thank you! We'll contact you within 24 hours.");
      
      setTimeout(() => {
        reset();
        setIsSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background-dark/95 backdrop-blur-sm"
          />

          {/* Form Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto">
              <div className="relative glass-card-futuristic bg-background-dark/95 rounded-2xl p-8 border-2 border-primary/30 shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Close form"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Success State */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center bg-background-dark/95 rounded-2xl z-10"
                    >
                      <div className="text-center space-y-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                        >
                          <CheckCircle2 className="w-20 h-20 text-accent-teal mx-auto" />
                        </motion.div>
                        <h3 className="text-2xl font-bold gradient-text-purple-teal">
                          Thank You!
                        </h3>
                        <p className="text-white/80">
                          We'll contact you within 24 hours
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold gradient-text-purple-teal mb-3">
                    {watch("inquiry_type") === "care_pay_card" 
                      ? "Apply for Care Pay™ Card" 
                      : "Begin Your Health Journey"}
                  </h2>
                  <p className="text-white/70 text-lg">
                    {watch("inquiry_type") === "care_pay_card"
                      ? "Get your gateway to seamless healthcare payments"
                      : "Share your details and we'll craft a personalized care plan for you"}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="full_name" className="text-white flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Full Name *
                    </Label>
                    <Input
                      id="full_name"
                      {...register("full_name")}
                      placeholder="John Doe"
                      className="bg-white/5 border-white/20 focus:border-primary text-white placeholder:text-white/40"
                    />
                    {errors.full_name && (
                      <p className="text-sm text-red-400">{errors.full_name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="john@example.com"
                      className="bg-white/5 border-white/20 focus:border-primary text-white placeholder:text-white/40"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="+91 98765 43210"
                      className="bg-white/5 border-white/20 focus:border-primary text-white placeholder:text-white/40"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-400">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Location *
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("location", value)}
                      value={selectedLocation}
                    >
                      <SelectTrigger className="bg-white/5 border-white/20 focus:border-primary text-white">
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        {majorCities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.location && (
                      <p className="text-sm text-red-400">{errors.location.message}</p>
                    )}
                    <p className="text-xs text-white/50">
                      Your location helps us provide accurate regional pricing and service availability
                    </p>
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <Label htmlFor="inquiry_type" className="text-white flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      What are you interested in? *
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("inquiry_type", value as "personal_care" | "care_pay_card")}
                      value={watch("inquiry_type")}
                    >
                      <SelectTrigger className="bg-white/5 border-white/20 focus:border-primary text-white">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal_care">Personal Care Plan</SelectItem>
                        <SelectItem value="care_pay_card">Care Pay™ Card Application</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.inquiry_type && (
                      <p className="text-sm text-red-400">{errors.inquiry_type.message}</p>
                    )}
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-2">
                    <Label className="text-white">Preferred Contact Method *</Label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="email"
                          {...register("preferred_contact")}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-white">Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="phone"
                          {...register("preferred_contact")}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-white">Phone</span>
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Additional Information (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us about your health goals or specific needs..."
                      rows={4}
                      className="bg-white/5 border-white/20 focus:border-primary text-white placeholder:text-white/40 resize-none"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent-teal hover:opacity-90 text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Request Personalized Care Plan"
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};