// AuthContextProvider.tsx
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface AuthContextValues {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setCompanyProfile: React.Dispatch<React.SetStateAction<any>>;
  companyProfile: any;
  setPartners: React.Dispatch<React.SetStateAction<any>>;
  partners: any;
  travelers:any;
  setTravelers:React.Dispatch<React.SetStateAction<any>>;
  bookingData:any;
  setBookingData:React.Dispatch<React.SetStateAction<any>>;
}

export const AuthContextCreator = createContext<AuthContextValues>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  companyProfile: {},
  setCompanyProfile: () => {},
  setPartners: () => {},
  partners: {},
  travelers:{},
  setTravelers:() =>{},
  bookingData:{},
  setBookingData:() =>{},
});

interface AuthContextProviderProps {
  children: ReactNode;
  isLoggedInServer: boolean;
}
const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
  isLoggedInServer,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [companyProfile, setCompanyProfile] = useState();
  const [partners, setPartners] = useState();
  const [travelers, setTravelers] = useState({ adult: 1, child: 0, infant: 0 });
  const [bookingData, setBookingData] = useState();

  useEffect(() => {
    setIsLoggedIn(isLoggedInServer);
  }, [isLoggedInServer]);

  const values: AuthContextValues = {
    isLoggedIn,
    setIsLoggedIn,
    setCompanyProfile,
    companyProfile,
    partners, 
    setPartners,
    travelers,
    setTravelers,
    bookingData,
    setBookingData,
  };

  return (
    <AuthContextCreator.Provider value={values}>
      {children}
    </AuthContextCreator.Provider>
  );
};

export default AuthContextProvider;

