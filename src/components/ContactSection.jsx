import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: t("contact.toast.success.title"),
        description: t("contact.toast.success.description"),
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("contact.title1")} <span className="text-primary"> {t("contact.title2")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.description")}
        </p>

        <div className="flex justify-center items-center">
          <div className="space-y-8 text-center">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact.info_title")}
            </h3>

            <div className="space-y-6 flex flex-col items-start">
              <div className="grid grid-cols-[48px_1fr] items-center min-h-[56px] gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <a
                    href="https://www.jianshu.com/u/b1652e41c9ae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t("contact.blog")}
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[48px_1fr] items-center min-h-[56px] gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t("contact.email")}
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[48px_1fr] items-center min-h-[56px] gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t("contact.phone")}
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[48px_1fr] items-center min-h-[56px] gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    {t("contact.location")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
