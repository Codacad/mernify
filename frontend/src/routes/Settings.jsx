import React, { useState } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profile);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password.newPassword === password.confirmPassword) {
      console.log("Password updated:", password.newPassword);
    } else {
      console.error("Passwords do not match!");
    }
  };

  const handleNotificationSubmit = (e) => {
    e.preventDefault();
    console.log("Notification preferences updated:", notifications);
  };

  return (
    <div className="container md:w-[80%] lg:w-[60%] mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Settings</h2>

      {/* Profile Section */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Update Profile
        </h3>
        <form onSubmit={handleProfileSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm"
          >
            Save Changes
          </button>
        </form>
      </section>

      {/* Password Section */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Change Password
        </h3>
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={password.currentPassword}
              onChange={handlePasswordChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={password.newPassword}
              onChange={handlePasswordChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={password.confirmPassword}
              onChange={handlePasswordChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm"
          >
            Change Password
          </button>
        </form>
      </section>

      {/* Notifications Section */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Notification Preferences
        </h3>
        <form onSubmit={handleNotificationSubmit} className="space-y-4">
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="email"
                checked={notifications.email}
                onChange={handleNotificationChange}
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2 text-gray-700">Email Notifications</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="sms"
                checked={notifications.sms}
                onChange={handleNotificationChange}
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2 text-gray-700">SMS Notifications</span>
            </label>
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm"
          >
            Save Preferences
          </button>
        </form>
      </section>
    </div>
  );
};

export default Settings;
