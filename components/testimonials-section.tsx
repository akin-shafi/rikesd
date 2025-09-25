import TestimonialCard from "./testimonial-card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Amina Hassan",
      role: "Research Director, Lagos University",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "RIKESD's Core Program transformed my research approach. The structured guidance and global network opened doors I never imagined possible.",
    },
    {
      name: "Emmanuel Okafor",
      role: "Tech Entrepreneur, KEIA Graduate",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Through KEIA, I refined my product and connected with investors. Today, my startup serves over 10,000 users across West Africa.",
    },
    {
      name: "Sarah Adebayo",
      role: "Urban Farmer, AroFarmer Community",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "AroFarmer helped me transform my rooftop into a thriving micro-farm. I now earn sustainable income while feeding my community.",
    },
    {
      name: "Prof. Michael Chukwu",
      role: "Environmental Scientist",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Pach Africa's initiatives align perfectly with our sustainability goals. The Campus Free Waste program has been transformational.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            What Our <span className="green-gradient-text">Community</span> Says
          </h2>
          <p className="text-xl text-gray-600">
            Hear from researchers, entrepreneurs, and innovators who have
            transformed their ideas into impact through RIKESD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
