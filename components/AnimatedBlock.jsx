"use client";
import { motion } from "framer-motion";

export default function AnimatedBlock({ image, children, reverse = false }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20 relative px-4 md:px-0">

      {/* IMAGEN */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 200 : -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className={`${reverse ? "md:order-2" : ""} w-full`}
      >
        <img
          src={image}
          alt=""
          className="rounded-3xl shadow-2xl hover:shadow-[0_0_35px_rgba(255,140,0,0.35)]
                     transition-all duration-500 object-cover w-full h-auto"
        />
      </motion.div>

      {/* TEXTO */}
      <motion.p
        initial={{ opacity: 0, x: reverse ? -200 : 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
        className="text-magazine text-dropcap font-inria max-w-[700px] mx-auto"
      >
        {children}
      </motion.p>

    </section>
  );
}


