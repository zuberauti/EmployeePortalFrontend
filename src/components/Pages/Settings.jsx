import React from 'react';

const Settings= () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center pb-6 px-2  shadow-md mb-6">
        <h1 className="text-2xl font-semibold">Account Settings</h1>
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

      {/* Personal Information Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-6 pb-4 shadow-md px-4">
          <h2 className="text-xl font-semibold">Personal Information</h2>
        </div>
        
        <div className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input 
              type="text" 
              className="input input-bordered w-full" 
              defaultValue="John Doe"
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input 
              type="email" 
              className="input input-bordered w-full" 
              defaultValue="john.doe@company.com"
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Phone Number</span>
            </label>
            <input 
              type="tel" 
              className="input input-bordered w-full" 
              defaultValue="(123) 456-7890"
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Position</span>
            </label>
            <input 
              type="text" 
              className="input input-bordered w-full bg-gray-100" 
              defaultValue="Software Developer"
              readOnly
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Department</span>
            </label>
            <input 
              type="text" 
              className="input input-bordered w-full bg-gray-100" 
              defaultValue="Engineering"
              readOnly
            />
          </div>
          
          <button className="btn btn-primary mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
            </svg>
            Save Changes
          </button>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6 pb-4 shadow-md px-4">
          <h2 className="text-xl font-semibold">Security</h2>
        </div>
        
        <div className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Current Password</span>
            </label>
            <input 
              type="password" 
              className="input input-bordered w-full" 
              placeholder="Enter your current password"
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">New Password</span>
            </label>
            <input 
              type="password" 
              className="input input-bordered w-full" 
              placeholder="Enter your new password"
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Confirm New Password</span>
            </label>
            <input 
              type="password" 
              className="input input-bordered w-full" 
              placeholder="Confirm your new password"
            />
          </div>
          
          <button className="btn btn-primary mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;