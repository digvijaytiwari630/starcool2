import React, { useState } from 'react';

const BLOG_POSTS = [
  {
    id: 1,
    date: 'Feb 15, 2026',
    category: 'AC Maintenance',
    title: 'How to Maintain Your AC for Maximum Cooling & Low Power Bills',
    snippet: 'Regular cleaning and timely maintenance can extend your AC lifespan by years and cut summer electricity bills by 25%. Here are top expert tips.',
    content: 'Air conditioners in Mumbai work in high humidity and coastal dust. To maintain top cooling efficiency: clean your air filters every 15 days under tap water, ensure 2 feet clearance around the outdoor condenser unit, never set temperature below 24°C for power saving, and schedule a professional jet foam service before summer starts.'
  },
  {
    id: 2,
    date: 'Feb 10, 2026',
    category: 'Troubleshooting',
    title: 'Top 5 Signs Your AC Needs Immediate Repair Before Breakdown',
    snippet: 'Strange noises, weak airflow, indoor water dripping, or burning smells? Catching these early prevents costly compressor failure.',
    content: 'If your AC takes longer than 20 minutes to cool the room, hisses like escaping gas, or trips your MCB switch, shut off the power immediately. Continuing to run an AC with low gas or a failing capacitor burns out the compressor winding, turning a ₹500 repair into a ₹7,000 replacement.'
  },
  {
    id: 3,
    date: 'Feb 5, 2026',
    category: 'Buying Guide',
    title: 'Split AC vs Inverter AC vs Window AC: Which is Best for Mumbai?',
    snippet: 'Confused between 3-star, 5-star inverter, and heavy-duty window ACs? Here is our comprehensive buying guide for Mumbai homes.',
    content: 'For bedrooms with 8+ hours daily usage, a 5-Star Inverter Split AC saves significant electricity. For rental flats or temporary setups, a Window AC is easy to shift and rugged. For commercial shops and clinics, 4-Way Cassette or Ductable units provide uniform 360-degree airflow.'
  }
];

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="py-16 bg-navy/40 relative border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-wider inline-block mb-3">
            LATEST UPDATES & GUIDES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Our AC Care <span className="gold-gradient-text">Blog & Tips</span>
          </h2>
          <p className="text-slate-300 text-sm mt-3">
            Expert advice from certified technicians on AC maintenance, energy saving, and troubleshooting in Mumbai.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="glass-panel p-6 rounded-2xl border border-gold/25 hover:border-gold transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-gold/15 text-gold font-bold text-[10px] uppercase">
                    {post.category}
                  </span>
                  <span className="text-slate-400">{post.date}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-gold transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {post.snippet}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Full Article</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Help Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-gold/30 bg-midnight-dark text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have an AC problem not covered here?</h4>
            <p className="text-xs text-slate-400">Ask our Mumbai technicians directly on WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/918108437170?text=Hi%20Star%20Cool%20Air%20Con,%20I%20have%20an%20AC%20query%20from%20your%20blog."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 whitespace-nowrap shadow-lg"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i>
            <span>Ask Technician</span>
          </a>
        </div>

      </div>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[140] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-lg w-full border border-gold/50 relative bg-midnight-dark text-left">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center"
            >
              <i className="fa-solid fa-xmark text-base"></i>
            </button>
            <span className="text-[10px] font-bold text-gold uppercase tracking-wider block mb-2">
              {selectedPost.category} • {selectedPost.date}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-4 leading-tight">
              {selectedPost.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
              {selectedPost.content}
            </p>
            <div className="flex gap-3">
              <a
                href="#book-service"
                onClick={() => setSelectedPost(null)}
                className="flex-1 py-3 rounded-xl btn-gold-gradient font-bold text-center text-xs"
              >
                Book AC Service
              </a>
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
