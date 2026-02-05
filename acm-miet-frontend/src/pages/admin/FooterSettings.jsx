import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ENDPOINTS, getAuthHeader } from '../../config/api';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

const FooterSettings = () => {
  const [footer, setFooter] = useState({
    description: '',
    quickLinks: [],
    contact: { email: '', address: '' },
    socialMedia: { linkedin: '', instagram: '', facebook: '', twitter: '' },
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchFooter();
  }, []);

  const fetchFooter = async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.FOOTER);
      const data = response.data;
      setFooter({
        description: data.description || '',
        quickLinks: Array.isArray(data.quickLinks) && data.quickLinks.length > 0
          ? data.quickLinks
          : [
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'Resources', href: '/resources' },
              { name: 'Events', href: '/events' },
              { name: 'Event Gallery', href: '/gallery' },
              { name: 'Achievements', href: '/achievements' },
              { name: 'Join Us', href: '/join' },
            ],
        contact: {
          email: data.contact?.email || '',
          address: data.contact?.address || '',
        },
        socialMedia: {
          linkedin: data.socialMedia?.linkedin || '',
          instagram: data.socialMedia?.instagram || '',
          facebook: data.socialMedia?.facebook || '',
          twitter: data.socialMedia?.twitter || '',
        },
      });
    } catch (err) {
      console.error('Error fetching footer:', err);
      setError('Failed to load footer data');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      await axios.put(API_ENDPOINTS.FOOTER, footer, {
        headers: getAuthHeader(),
      });
      setSuccess('Footer updated successfully');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update footer');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (field, value) => {
    setFooter((prev) => ({ ...prev, [field]: value }));
  };

  const handleContactChange = (field, value) => {
    setFooter((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
    }));
  };

  const handleSocialChange = (field, value) => {
    setFooter((prev) => ({
      ...prev,
      socialMedia: { ...prev.socialMedia, [field]: value },
    }));
  };

  const handleQuickLinkChange = (index, field, value) => {
    setFooter((prev) => {
      const links = [...prev.quickLinks];
      links[index] = { ...links[index], [field]: value };
      return { ...prev, quickLinks: links };
    });
  };

  const addQuickLink = () => {
    setFooter((prev) => ({
      ...prev,
      quickLinks: [...prev.quickLinks, { name: '', href: '' }],
    }));
  };

  const removeQuickLink = (index) => {
    setFooter((prev) => ({
      ...prev,
      quickLinks: prev.quickLinks.filter((_, i) => i !== index),
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Footer Settings</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Description / Tagline</label>
          <textarea
            value={footer.description}
            onChange={(e) => handleChange('description', e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Footer tagline or description"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-gray-700 font-medium">Quick Links</label>
            <button
              type="button"
              onClick={addQuickLink}
              className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
            >
              <PlusIcon className="h-4 w-4" /> Add Link
            </button>
          </div>
          <div className="space-y-3">
            {footer.quickLinks.map((link, index) => (
              <div key={index} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={link.name}
                  onChange={(e) => handleQuickLinkChange(index, 'name', e.target.value)}
                  placeholder="Link name"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  value={link.href}
                  onChange={(e) => handleQuickLinkChange(index, 'href', e.target.value)}
                  placeholder="/path or URL"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => removeQuickLink(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Contact Email</label>
            <input
              type="email"
              value={footer.contact.email}
              onChange={(e) => handleContactChange('email', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Contact Address</label>
            <input
              type="text"
              value={footer.contact.address}
              onChange={(e) => handleContactChange('address', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-3">Social Media Links</label>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">LinkedIn</label>
              <input
                type="url"
                value={footer.socialMedia.linkedin}
                onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Instagram</label>
              <input
                type="url"
                value={footer.socialMedia.instagram}
                onChange={(e) => handleSocialChange('instagram', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Facebook</label>
              <input
                type="url"
                value={footer.socialMedia.facebook}
                onChange={(e) => handleSocialChange('facebook', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Twitter</label>
              <input
                type="url"
                value={footer.socialMedia.twitter}
                onChange={(e) => handleSocialChange('twitter', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
          >
            {saving ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              'Save Footer'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FooterSettings;
