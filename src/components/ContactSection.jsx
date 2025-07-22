import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "消息已发送！",
        description: "感谢您的留言，我会尽快与您联系。",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          联系 <span className="text-primary"> 我</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          有项目想法或希望合作？欢迎随时联系我。
          我始终乐于探讨新的机会。
        </p>

        <div className="flex justify-center items-center">
          <div className="space-y-8 text-center">

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
                    https://www.jianshu.com/u/b1652e41c9ae
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[48px_1fr] items-center min-h-[56px] gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  {/* <h4 className="font-medium">Email</h4> */}
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    carriexin928@gmail.com
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[48px_1fr] items-center min-h-[56px] gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  {/* <h4 className="font-medium">Phone</h4> */}
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +86159****9431
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[48px_1fr] items-center min-h-[56px] gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  {/* <h4 className="font-medium">Location</h4> */}
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    深圳，广东，中国
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
