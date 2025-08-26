"use client"
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import Bento from '@/components/bento/Bento';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import ContentTextbox from '@/components/textbox/ContentTextbox';
import { useState } from 'react';
import Image from 'next/image';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input className='border p-2' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
      <input className='border p-2' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
      <textarea className='border p-2' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
      <button className='bg-blue-500 text-white p-2'>Submit</button>
    </form>
  );
};

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id='hero' className='bg-[#f4f7fb] py-16'>
        <SimpleHero title='Welcome to Our Page' description='We offer the best services.' primaryButtonText='Get Started' secondaryButtonText='Learn More' />
      </section>
      <section id='about' className='bg-white py-16'>
        <MinimalAbout description='We are a company that values excellence and trust.' />
      </section>
      <section id='services' className='bg-gradient-to-b from-white to-[#f7fbff] py-16'>
        <Bento items={[{ title: 'Service One', description: 'Description of service.' }, { title: 'Service Two', description: 'Description of service.' }]} />
      </section>
      <section id='cta' className='bg-[#eef6ff] py-16'>
        <ContentTextbox title={<h2>Ready to Get Started?</h2>} description={<p>Contact us for more information.</p>} />
      </section>
      <section id='contact' className='bg-white py-16'>
        <ContactForm />
      </section>
    </SiteThemeProvider>
  );
}
