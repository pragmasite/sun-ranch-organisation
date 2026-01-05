import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.span variants={itemVariants} className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </motion.span>
          <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-5xl mt-2">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </motion.p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Phone */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 p-6 rounded-lg bg-card shadow-soft border"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold mb-1">{t.contact.phone}</h3>
                <a href="tel:+41767248801" className="text-primary hover:underline">
                  +41 76 724 88 01
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 p-6 rounded-lg bg-card shadow-soft border"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold mb-1">{t.contact.email}</h3>
                <a href="mailto:sun-ranch@mail.ch" className="text-primary hover:underline">
                  sun-ranch@mail.ch
                </a>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 p-6 rounded-lg bg-card shadow-soft border"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold mb-1">{t.contact.address}</h3>
                <p className="text-muted-foreground">
                  Via Nova 20<br />
                  7156 Rueun, Switzerland
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <Button asChild size="lg" className="w-full gap-2">
                <a href="tel:+41767248801">
                  <Phone className="h-5 w-5" />
                  {t.contact.callNow}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-soft h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.1234567890!2d9.141206!3d46.776523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47842d0b0b0b0b0b%3A0x0b0b0b0b0b0b0b0b!2sVia%20Nova%2020%2C%207156%20Rueun%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
