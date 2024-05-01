import React from 'react';
import patientImage from '../../src/assets/images/virtualPatient1.jpg';
import doctorImage from '../../src/assets/images/virtualDoctor.jpg';

const Procedure = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Procedure for Patients */}
      <div className="lg:w-2/3 p-8 shadow-lg rounded-2xl mb-8">
        <h2 className="text-4xl font-bold mb-4">If you are a <span className='text-primaryColor'>Patient</span></h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 mb-4 lg:mb-0 text-justify">
            <ul className="list-disc pl-6 pr-8 text-xl text-headingColor">
              <li>Embark on your healthcare journey by registering as a patient and creating your unique profile.</li>
              <li>Discover the perfect match for your medical needs by searching for doctors based on their expertise and specializations.</li>
              <li>Seal the deal by booking appointments with your chosen healthcare providers for personalized care.</li>
              <li>Share your valuable experiences by providing reviews and ratings to help fellow patients.</li>
            </ul>
          </div>
          <div className="lg:w-1/3">
            <img src={patientImage} alt="Patient" className="w-full h-auto shadow-lg rounded-3xl" />
          </div>
        </div>
      </div>

      {/* Procedure for Doctors */}
      <div className="lg:w-2/3 p-8 shadow-lg rounded-2xl">
        <h2 className="text-4xl font-bold mb-4">If you are a <span className='text-primaryColor'>Doctor</span></h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 mb-4 lg:mb-0">
            <ul className="list-disc pl-6 pr-8 text-xl text-headingColor">
              <li>Join our esteemed community of healthcare professionals by registering as a doctor and creating your comprehensive profile.</li>
              <li>Illuminate your expertise by filling in your bio, qualifications, and experience, ensuring patients have a clear picture of your capabilities.</li>
              <li>Put your best face forward by uploading a professional profile photo that resonates with patients.</li>
            </ul>
          </div>
          <div className="lg:w-1/3">
            <img src={doctorImage} alt="Doctor" className="w-full h-auto shadow-lg rounded-3xl" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Procedure;
