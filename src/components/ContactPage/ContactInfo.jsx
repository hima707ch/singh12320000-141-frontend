import React from 'react';
import images from '../assets/images';

const ContactInfo = () => {
  return (
    <div id="ContactInfo_1" className="bg-white shadow-lg rounded-lg p-8">
      <div id="ContactInfo_2" className="mb-8">
        <h2 id="ContactInfo_3" className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
        <p id="ContactInfo_4" className="text-gray-600 mb-4">
          Feel free to reach out to us using the contact form or through any of the following methods:
        </p>
      </div>
      <div id="ContactInfo_5" className="space-y-6">
        <div id="ContactInfo_6" className="flex items-start">
          <div id="ContactInfo_7" className="flex-shrink-0">
            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div id="ContactInfo_8" className="ml-4">
            <p id="ContactInfo_9" className="text-gray-900 font-medium">Email</p>
            <p id="ContactInfo_10" className="text-gray-600">contact@example.com</p>
          </div>
        </div>
        <div id="ContactInfo_11" className="flex items-start">
          <div id="ContactInfo_12" className="flex-shrink-0">
            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div id="ContactInfo_13" className="ml-4">
            <p id="ContactInfo_14" className="text-gray-900 font-medium">Phone</p>
            <p id="ContactInfo_15" className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
        <div id="ContactInfo_16" className="flex items-start">
          <div id="ContactInfo_17" className="flex-shrink-0">
            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div id="ContactInfo_18" className="ml-4">
            <p id="ContactInfo_19" className="text-gray-900 font-medium">Address</p>
            <p id="ContactInfo_20" className="text-gray-600">123 Business Street, Suite 100<br />New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;