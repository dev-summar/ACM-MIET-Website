import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

const Join = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [id, setid] = useState("");
  const [branch, setbranch] = useState("")
  const [res, setres] = useState(null);
  const [loading, setloading] = useState(false)
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setloading(true);
    try {
      const response = await axios.post(API_ENDPOINTS.STUDENTS,{
        name,
        email,
        id,
        branch
      })
      setres({status:true,text:"Successfully submitted"});
      setemail("");
      setname("");
      setid("");
      setbranch("");
    } catch (error) {
      setres({status:false,text:"Failed to submit"});
    }finally{
      setloading(false);
    }
  }
  return (
    <>
    <Navbar/>
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-heading text-4xl font-bold mb-8 text-center text-primary">Join ACM MIET Student Chapter</h1>

        <div className="max-w-4xl mx-auto">
          {/* Benefits Section */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">
              Benefits of Joining
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Professional Development</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Access to technical resources</li>
                  <li>Networking opportunities</li>
                  <li>Leadership experience</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Technical Resources</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>ACM Digital Library</li>
                  <li>Technical workshops</li>
                  <li>Conference discounts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Membership Form */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-secondary">
              Membership Application
            </h2>
            {res!==null ? res.status?
            <h3 style={{marginBottom:'15px',color:'green'}}>{res.text}</h3>
            :
            <h3 style={{marginBottom:'15px',color:'red'}}>{res.text}</h3>
            :
            <></>
            }
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-secondary focus:border-secondary"
                    required
                    value={name}
                    onChange={e=>setname(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-secondary focus:border-secondary"
                    required
                    value={email}
                    onChange={e=>setemail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student ID
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-secondary focus:border-secondary"
                    required
                    value={id}
                    onChange={e=>setid(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Branch/Department
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-secondary focus:border-secondary"
                    required
                    value={branch}
                    onChange={e=>setbranch(e.target.value)}
                  />
                </div>
              </div>

              <button
              disabled={loading}
                type="submit"
                className="w-full bg-secondary text-white py-3 px-6 rounded-xl 
                         hover:bg-accent transition duration-300 font-medium"
              >
                Submit Application
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Join; 