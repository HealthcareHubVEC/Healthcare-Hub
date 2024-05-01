import React from 'react';
import healthcareImage from '../../src/assets/images/learn-more1.jpg'; // Import your healthcare image here

const LearnMore1 = () => {
  return (
    <div className="min-h-screen py-12 px-4 bg-gray-100 flex justify-end items-center">
      {/* Main Content */}
      <main className="container mx-auto relative z-10 max-w-screen-lg">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Empowering Healthcare Management
            </h1>
            <img src={healthcareImage} alt="Healthcare" className="mx-auto mb-6 lg:mb-8 rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '100%' }} />
            <p className="text-lg md:text-xl leading-relaxed mb-12">
              Welcome to Healthcare Hub, where we revolutionize healthcare management through cutting-edge technology and unwavering dedication. For years, we've been at the forefront of innovation, leveraging advanced systems to enhance patient care, streamline processes, and improve outcomes.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-12">
              Our commitment to excellence extends beyond traditional healthcare models. We understand the importance of efficient management systems in delivering quality care. That's why we've developed a comprehensive Healthcare Management System, utilizing state-of-the-art database management techniques to optimize patient-doctor interactions, appointment scheduling, and feedback mechanisms.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-12">
              At Healthcare Hub, we believe in empowering individuals to take control of their healthcare journey. Through our user-friendly platform, patients can easily access vital healthcare services, connect with top-tier professionals, and provide valuable feedback to drive continuous improvement.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-12">
              Join us in our mission to redefine healthcare management. Experience the future of healthcare today with Healthcare Hub, where innovation meets compassion, and excellence knows no bounds.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearnMore1