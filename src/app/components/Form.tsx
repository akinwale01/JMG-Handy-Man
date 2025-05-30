'use client'

import { useState } from 'react'

export default function FormPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', service: '' })

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
         setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: '',
    })

      alert('Form submitted successfully!')
    } else {
      alert('Submission failed.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-5 w-full space-y-6 bg-white shadow-md rounded md:pb-12 lg:p-10 lg:h-[600px] ">
      <input
        name="name"
        type="text"
        placeholder="Name *"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded h-15"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email *"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded h-15"
        required
      />

    <input
        name="phone"
        type="tel"
        placeholder="Phone *"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded h-15"
        required
      />

      <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full text-[#00000077]"
        >
            <option value="" disabled hidden>What service do you need ?</option>
            <option value="General Repairs">General Home Repairs</option>
            <option value="Installation">Door & Window Installation</option>
            <option value="Furniture">Furniture Assembly</option>
            <option value="painting">Painting & Drywall Repair</option>
            <option value="Electrical & Plumbing">Electrical & Plumbing Repairs</option>
            <option value="Gutter Washing">Pressure Washing & Gutter Cleaning</option>
            <option value="Carpentry">Carpentry & Custom Woodwork</option>
            <option value="Lawn">Lawn Maintenance</option>
        </select>

        <textarea
        name="message"
        rows={4}
        placeholder="A brief description of your issue (Optional)"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded h-40 lg:h-20"
      />


      <button type="submit" className="w-full bg-[#DA2327] text-white py-4 font-medium text-base md:w-48 text-center md:flex md:justify-center md:items-center md:px-6 md:py-4 md:ml-auto md:mr-auto ">
        Send Message
      </button>
    </form>
  )
}