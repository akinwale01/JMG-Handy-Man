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
    <div className='flex p-5 flex-col gap-8 self-stretch rounded-sm bg-white md:p-10 md:gap-10 md:items-center lg:w-full'>
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4 self-stretch md:gap-6 lg:w-full lg:gap-6">
      <input
        name="name"
        type="text"
        placeholder="Name *"
        value={formData.name}
        onChange={handleChange}
        className="flex py-3 px-4 items-end gap-2.5 self-stretch rounded-sm border border-[#E6E6E6]"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email *"
        value={formData.email}
        onChange={handleChange}
        className="flex py-3 px-4 items-end gap-2.5 self-stretch rounded-sm border border-[#E6E6E6]"
        required
      />

    <input
        name="phone"
        type="tel"
        placeholder="Phone *"
        value={formData.phone}
        onChange={handleChange}
        className="flex py-3 px-4 items-end gap-2.5 self-stretch rounded-sm border border-[#E6E6E6]"
        required
      />

      <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="flex py-3 px-4 justify-between items-center self-stretch text-[#00000077] border rounded-sm border-[#E6E6E6]"
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
        className="flex h-[104px] py-3 px-4 items-start gap-2.5 self-stretch rounded-sm border border-[#E6E6E6] resize-none"
      />
    </form>

    <div className="lg:px-10">
      <button type="submit" className="flex py-4 px-6 justify-center items-center gap-2.5 self-stretch bg-[#DA2327] text-white text-base font-medium lg:w-[166px] lg:gap-2.5">
        Send Message
      </button>
      </div>
    </div>
    )
}