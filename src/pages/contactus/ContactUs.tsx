import ContactImage from "../../assets/images/contactimage.png";

import ContactForm from "../../components/contactus/ContactForm"
import ContactInformation from "../../components/contactus/ContactInformation";

import Map from "../../components/contactus/Map";

const Contact = () => {
  return (
    <>
      <div className="relative">
        <img src={ContactImage} alt="image" className="w-full " />
      </div>

      <div className=" flex flex-col lg:flex-row px-4 lg:px-20 md:space-x-4">
        {/* Contact Information goes here */}
        <ContactInformation />
        {/* From goes here */}
        <ContactForm />
      </div>
      <div className="mt-10">
        <Map />
      </div>
    </>
  );
};
export default Contact;
