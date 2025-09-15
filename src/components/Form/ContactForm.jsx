import React from "react";


const ContactForm = () => {
    
  return (
    <>
        <form>
            <div className='w-full flex flex-row flex-wrap justify-between mt-8'>
                <div className='w-full md:w-[48%] mt-2'>
                    <input className='w-full rounded p-3 placeholder:text-black' type="text" name="user_name"  placeholder='Your Name' required/>                           
                </div>
                <div className='w-full md:w-[48%] mt-2'>
                    <input className='w-full rounded p-3 placeholder:text-black' type="email" name="user_email"  placeholder='Your Email' required/>                    
                </div>
                <div className='w-full mt-2'>
                    {/* <input className='w-full rounded p-3 placeholder:text-black' type="text"  placeholder='Services'/>   */}
                     <select name="service" required className="w-full rounded-lg p-3 bg-white text-gray-700  cursor-pointer focus:outline-none text-sm sm:text-base md:text-lg">
                        <option value="">Select a Service</option>
                        <option value="web">🌐 Web Development</option>
                        <option value="app">📱 App Development</option>
                        <option value="ui">🎨 UI/UX Design</option>
                        <option value="seo">🚀 SEO Optimization</option>
                    </select>
                </div>
                <div className='w-full mt-2'>
                    <textarea className='w-full rounded p-3 h-40 placeholder:text-black' name="message" id=""  placeholder='Message...' required></textarea>   
                </div>
                <div className='w-full mt-2'>
                    <input className='w-full rounded p-3 bg-blue-800 text-white' type="submit" value="send message" />   
                </div>
            </div>
        </form>
    </>
  )
}

export default ContactForm
