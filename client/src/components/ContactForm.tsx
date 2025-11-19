export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            SCHEDULE YOUR FREE CONSULTATION
          </h2>
          <p className="text-xl text-gray-700">
            Book a time that works for you. We'll show you all your options and give you a cash offer on the spot.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl border-2 border-yellow-500 p-4 md:p-8">
          {/* Calendar Booking Widget */}
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/LyGuGcTpxYkLdasELp1d" 
            style={{
              width: '100%',
              border: 'none',
              overflow: 'hidden',
              minHeight: '600px'
            }}
            scrolling="no" 
            id="LyGuGcTpxYkLdasELp1d_1762634983999"
            title="Schedule Consultation"
          />
        </div>


      </div>
      
      {/* Calendar Script */}
      <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
    </section>
  );
}

