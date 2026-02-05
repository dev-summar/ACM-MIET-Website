const mongoose = require('mongoose');

const quickLinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  href: { type: String, required: true },
}, { _id: false });

const footerSchema = new mongoose.Schema({
  description: {
    type: String,
    default: 'Empowering students through technology, innovation, and professional development.',
  },
  quickLinks: [quickLinkSchema],
  contact: {
    email: { type: String, default: 'acm.sb@mietjammu.in' },
    address: { type: String, default: 'MIET Jammu Campus, Kot Bhalwal Jammu J&K' },
  },
  socialMedia: {
    linkedin: { type: String, default: 'https://in.linkedin.com/company/acmsc-miet' },
    instagram: { type: String, default: 'https://www.instagram.com/acmmiet/' },
    facebook: { type: String, default: '' },
    twitter: { type: String, default: '' },
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

const Footer = mongoose.model('Footer', footerSchema);
module.exports = Footer;
