import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
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
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.span variants={itemVariants} className="text-sm uppercase tracking-widest text-primary">
            {t.about.label}
          </motion.span>
          <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-5xl mt-2">
            {t.about.title1}
            <br />
            <span className="text-accent">{t.about.title2}</span>
          </motion.h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.p2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {/* Stats */}
            <div className="bg-card rounded-lg p-6 text-center shadow-soft">
              <div className="font-serif text-4xl text-primary font-bold mb-2">20+</div>
              <div className="text-sm text-muted-foreground">{t.about.stat1}</div>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-soft">
              <div className="font-serif text-4xl text-primary font-bold mb-2">500+</div>
              <div className="text-sm text-muted-foreground">{t.about.stat2}</div>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-soft md:col-span-2">
              <div className="font-serif text-4xl text-primary font-bold mb-2">15</div>
              <div className="text-sm text-muted-foreground">{t.about.stat3}</div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {t.about.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-lg p-6 shadow-soft border"
            >
              <h3 className="font-serif text-lg font-bold mb-3 text-primary">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
