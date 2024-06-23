

const ContactInformation = () => {
  return (
    <div>
       <div className="w-full lg:w-1/2 p-4">
          <h1 className="text-3xl font-semibold mb-4">Contact Information</h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo velit
            facilis cum porro accusamus quae nisi nihi.
          </p>
          <div className="flex flex-col">
            <span className="border-b border-gray-200 pb-2 pt-4 pl-6">
              Good Travels Pvt Ltd Gaushala 01
            </span>
            <a
              href="tel:+977 974-5604537"
              className="border-b border-gray-200 pb-2 pt-4 pl-6"
            >
              +977 974-5604537
            </a>
            <a
              href="mailto:info@metaholidaysnepal.com"
              className="pb-2 pt-4 pl-6"
            >
              info@goodtravelsnepal.com
            </a>
          </div>
        </div>
    </div>
  )
}

export default ContactInformation
