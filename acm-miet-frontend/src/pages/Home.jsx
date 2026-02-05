import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Hero from '../components/Hero';
import WhySection from '../components/WhySection';
import TeamSection from '../components/TeamSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { API_ENDPOINTS } from '../config/api';
import EventDescription from '../components/Eventdesc';
import Updates2 from '../components/Updates2';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Home = () => {
  const [events, setEvents] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updates, setupdates] = useState([]);
  const cardsRef = useRef(null);
  const updatesRef = useRef(null);
  const ctaRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' });
  const updatesInView = useInView(updatesRef, { once: true, margin: '-80px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsRes, achievementsRes, imageRes] = await Promise.all([
          fetch(API_ENDPOINTS.EVENTS),
          fetch(API_ENDPOINTS.ACHIEVEMENTS),
          fetch(API_ENDPOINTS.UPDATES)
        ]);

        const eventsData = eventsRes.ok ? await eventsRes.json() : [];
        const achievementsData = achievementsRes.ok ? await achievementsRes.json() : [];
        const imageData = imageRes.ok ? await imageRes.json() : [];
        const updatedEvents = eventsData.map(event => ({
          ...event,
          status: new Date(event.date) > new Date() ? 'upcoming' : 'past'
        }));

        setEvents(updatedEvents);
        setAchievements(achievementsData);
        setupdates(imageData.map(img => img.image));
      } catch (error) {
        console.error('Error fetching data:', error);
        setEvents([]);
        setAchievements([]);
        setupdates([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const upcomingEvents = events
    .filter(event => event.status === 'upcoming')
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 2);

  const latestAchievements = achievements
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {updates.length > 1 && <Updates2 updates={updates} />}

        {/* Quick Links Section */}
        <section ref={cardsRef} className="py-20 bg-slate-50/80">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-slate-100"
              >
                <h3 className="text-xl font-semibold mb-4 text-secondary">Upcoming Events</h3>
                {loading ? (
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                  </div>
                ) : upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <p className="font-medium text-slate-800">{event.title}</p>
                      <p className="text-sm text-slate-600">
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-600">No upcoming events</p>
                )}
                <Link
                  to="/events"
                  className="text-secondary hover:text-accent text-sm font-medium mt-4 inline-flex items-center gap-1 transition-colors"
                >
                  View All Events →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-slate-100"
              >
                <h3 className="text-xl font-semibold mb-4 text-secondary">Latest Achievements</h3>
                {loading ? (
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                  </div>
                ) : latestAchievements.length > 0 ? (
                  latestAchievements.map((achievement, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <p className="font-medium text-slate-800">{achievement.title}</p>
                      <p className="text-sm text-slate-600">{achievement.date}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-600">No achievements yet</p>
                )}
                <Link
                  to="/achievements"
                  className="text-secondary hover:text-accent text-sm font-medium mt-4 inline-flex items-center gap-1 transition-colors"
                >
                  View All Achievements →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gradient-to-br from-secondary to-accent/90 rounded-2xl shadow-card p-6 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 text-white"
              >
                <h3 className="text-xl font-semibold mb-4">Join ACM MIET Student Chapter</h3>
                <p className="text-white/90 mb-6">
                  Become a part of the world's largest computing society and unlock countless opportunities.
                </p>
                <Link
                  to="/join"
                  className="inline-flex items-center gap-2 bg-white text-secondary px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors duration-300"
                >
                  Join Now
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <WhySection />

        {/* Latest Updates Section */}
        <section ref={updatesRef} className="py-20 bg-slate-50/80">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={updatesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12 text-primary"
            >
              Latest Updates
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.slice(0, 3).map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={updatesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-slate-100"
                >
                  <div className="h-48 bg-slate-200 overflow-hidden">
                    {(Array.isArray(event.image) ? event.image[0] : event.image) ? (
                      <img
                        src={Array.isArray(event.image) ? event.image[0] : event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400">No image</div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary">{event.title}</h3>
                    <EventDescription description={event.description} />
                    <div className="flex justify-between items-center text-sm text-slate-500 mt-4">
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <TeamSection />

        {/* Call to Action Section */}
        <section ref={ctaRef} className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Join ACM MIET Student Chapter?
              </h2>
              <p className="mb-10 max-w-2xl mx-auto text-slate-300 text-lg">
                Take the first step towards your professional development and join our
                community of innovators and tech enthusiasts.
              </p>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 bg-accent text-primary px-10 py-4 rounded-xl font-semibold hover:bg-accent/90 hover:scale-105 transition-all duration-300"
              >
                Become a Member
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
