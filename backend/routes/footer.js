const router = require('express').Router();
const auth = require('../middleware/auth');
const Footer = require('../models/Footer');

const DEFAULT_QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Resources', href: '/resources' },
  { name: 'Events', href: '/events' },
  { name: 'Event Gallery', href: '/gallery' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Join Us', href: '/join' },
];

const defaultFooter = () => ({
  description: process.env.DEFAULT_FOOTER_DESCRIPTION || 'Empowering students through technology, innovation, and professional development.',
  quickLinks: DEFAULT_QUICK_LINKS,
  contact: {
    email: process.env.DEFAULT_CONTACT_EMAIL || 'acm.sb@mietjammu.in',
    address: process.env.DEFAULT_CONTACT_ADDRESS || 'MIET Jammu Campus, Kot Bhalwal Jammu J&K',
  },
  socialMedia: {
    linkedin: process.env.DEFAULT_LINKEDIN_URL || 'https://in.linkedin.com/company/acmsc-miet',
    instagram: process.env.DEFAULT_INSTAGRAM_URL || 'https://www.instagram.com/acmmiet/',
    facebook: process.env.DEFAULT_FACEBOOK_URL || '',
    twitter: process.env.DEFAULT_TWITTER_URL || '',
  },
});

// GET footer (public)
router.get('/', async (req, res) => {
  try {
    let footer = await Footer.findOne();
    if (!footer) {
      footer = new Footer(defaultFooter());
      await footer.save();
    }
    res.json(footer);
  } catch (error) {
    console.error('Error getting footer:', error);
    res.status(500).json({ message: error.message });
  }
});

// PUT footer (admin only)
router.put('/', auth, async (req, res) => {
  try {
    const { description, quickLinks, contact, socialMedia } = req.body;

    let footer = await Footer.findOne();

    if (!footer) {
      footer = new Footer(defaultFooter());
    }

    if (description !== undefined) footer.description = description;
    if (Array.isArray(quickLinks)) footer.quickLinks = quickLinks;
    if (contact) {
      if (contact.email !== undefined) footer.contact.email = contact.email;
      if (contact.address !== undefined) footer.contact.address = contact.address;
    }
    if (socialMedia) {
      if (socialMedia.linkedin !== undefined) footer.socialMedia.linkedin = socialMedia.linkedin;
      if (socialMedia.instagram !== undefined) footer.socialMedia.instagram = socialMedia.instagram;
      if (socialMedia.facebook !== undefined) footer.socialMedia.facebook = socialMedia.facebook;
      if (socialMedia.twitter !== undefined) footer.socialMedia.twitter = socialMedia.twitter;
    }

    footer.lastUpdated = new Date();
    await footer.save();
    res.json(footer);
  } catch (error) {
    console.error('Error updating footer:', error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
