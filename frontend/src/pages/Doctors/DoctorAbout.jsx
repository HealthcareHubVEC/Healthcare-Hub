import React from 'react';
import { formatDate } from '../../utils/formatDate';

const DoctorAbout = () => {
  return (
    <div>
    <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
            About of
            <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                Muhibur Rahman
            </span>
            </h3>
            <p className="text__para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
    </div>
        <div className="mt-12">
            <h3 className = "text-[20px] leading-[30px] text-headingColor font-semibold">
                Education
            </h3>
            <ul className = "pt-4 md:p-5">
                <li className = "flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
                    <div>
                        <span className = "text-irisBlueColor text-[15px] leading-6 font-semibold">
                            23 June, 2008
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">
                                PHD in Surgeon
                            </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                                New Apollo Hospital, New York.
                            </p>
                </li>
                <li className = "flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
                    <div>
                        <span className = "text-irisBlueColor text-[15px] leading-6 font-semibold">
                            {formatDate('12-04-2010')}
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">
                                PHD in Surgeon
                            </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                                New Apollo Hospital, New York.
                            </p>
                </li>

            </ul>
        </div>

  </div>
  );

};

export default DoctorAbout;