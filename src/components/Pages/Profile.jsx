import React from 'react';

const Profile = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center pb-6 shadow-md px-4 mb-6">
        <h1 className="text-2xl font-semibold">My Profile</h1>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
            JD
          </div>
          <div>
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-gray-500">Software Developer</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Profile Sidebar */}
          <div className="lg:w-64 flex flex-col gap-4">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-3xl mx-auto mb-4">
                JD
              </div>
              <h2 className="text-xl font-semibold mb-1">John Doe</h2>
              <p className="text-gray-500 text-base mb-4">Software Developer</p>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 inline-block">
                Active
              </span>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 pb-3 border-b border-gray-200">
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-500">Years with Company</span>
                  <span className="font-medium">3.5 years</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-500">Projects Completed</span>
                  <span className="font-medium">17</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Performance Rating</span>
                  <span className="font-medium">4.7/5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Details Card */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4 pb-3 border-b border-gray-200">
                  Personal Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">Full Name</span>
                    <span className="font-medium">John Michael Doe</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">Date of Birth</span>
                    <span className="font-medium">15 March 1990</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">Employee ID</span>
                    <span className="font-medium">EMP-2020-001</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">Gender</span>
                    <span className="font-medium">Male</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Nationality</span>
                    <span className="font-medium">American</span>
                  </div>
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4 pb-3 border-b border-gray-200">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">Email</span>
                    <span className="font-medium">john.doe@company.com</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">Phone</span>
                    <span className="font-medium">(123) 456-7890</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">Address</span>
                    <span className="font-medium">123 Main St, San Francisco, CA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Emergency Contact</span>
                    <span className="font-medium">
                      Jane Doe (Spouse) - (123) 456-7891
                    </span>
                  </div>
                </div>
              </div>

              {/* Employment Details Card */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4 pb-3 border-b border-gray-200">
                  Employment Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">Position</span>
                    <span className="font-medium">Senior Software Developer</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">Department</span>
                    <span className="font-medium">Engineering</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">Manager</span>
                    <span className="font-medium">Sarah Johnson</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">Hire Date</span>
                    <span className="font-medium">15 April 2020</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Employment Type</span>
                    <span className="font-medium">Full-time</span>
                  </div>
                </div>
              </div>

              {/* Skills & Qualifications Card */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4 pb-3 border-b border-gray-200">
                  Skills & Qualifications
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">Technical Skills</span>
                    <span className="font-medium">
                      JavaScript, React, Node.js, Python
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">Certifications</span>
                    <span className="font-medium">
                      AWS Certified Developer, Google Cloud Professional
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500">Education</span>
                    <span className="font-medium">
                      MSc Computer Science, Stanford University
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Languages</span>
                    <span className="font-medium">
                      English (Native), Spanish (Intermediate)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;