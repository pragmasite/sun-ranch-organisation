import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Schedule: Monday to Sunday (00:00-23:59 every day = open 24/7)
  const schedule = [
    { hours: "00:00 - 23:59" }, // Monday
    { hours: "00:00 - 23:59" }, // Tuesday
    { hours: "00:00 - 23:59" }, // Wednesday
    { hours: "00:00 - 23:59" }, // Thursday
    { hours: "00:00 - 23:59" }, // Friday
    { hours: "00:00 - 23:59" }, // Saturday
    { hours: "00:00 - 23:59" }, // Sunday
  ];

  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <section id="hours" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div className="mb-8 text-center">
            <span className="text-sm uppercase tracking-widest text-primary">{t.hours.label}</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-2">{t.hours.title}</h2>
          </div>

          <div className="rounded-2xl border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-bold">{t.hours.header}</span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />}
                      <span className={`font-medium ${isToday ? "text-primary" : ""}`}>
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full ml-auto">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span className={isClosed ? "text-muted-foreground" : ""}>
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
