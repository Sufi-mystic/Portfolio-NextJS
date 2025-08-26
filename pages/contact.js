import Layout from "@/components/Layout";
import { useState } from "react";

export default function Contact(){
    const [formData, setFormData] = useState({
        name : '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setStatus('sending...');

        try{
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if(data.success){
                setStatus("Message sent successfully..");
                setFormData({name:'', email:'', message:''});
            }
        } catch(error){
            setStatus('Error sending the message. Please try again.');
        }
    };

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    };

    return(
        <Layout>
            <h1 className="font-extrabold text-center mb-2"> Contact Me </h1>
            <form className="m-auto p-4" onSubmit={handleSubmit} style={{
                maxWidth: '500px',
                backgroundColor: 'whitesmoke',
                borderRadius: '8px'
                }}>
                <div style={{marginBottom: '15px'}}>
                    <label> Name </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-red-300"
                      style={{width: '100%', padding: '8px', marginTop: '5px'}}
                    />
                </div>

                <div style={{marginBottom: '15px'}}>
                    <label> Email </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-red-300"
                      style={{width: '100%', padding: '8px', marginTop: '5px'}}
                    />
                </div>

                <div style={{marginBottom: '15px'}}>
                    <label> Message </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows='5'
                      className="bg-red-300"
                      style={{width: '100%', padding: '8px', marginTop: '5px'}}
                    />
                </div>

                <button type="submit" className="bg-red-400 border-gray-400 border-2" style={{
                    padding: '10px 20px',
                    color: 'white',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    Send Message
                </button>

                {status && <p style={{marginTop: '10px'}}>{status}</p>}
            </form>
        </Layout>
    )
}