
'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Message sent!');
        // Add logic to use src/lib/ configs here later
    };

    return (
        <section id="contact" className="py-24 px-4 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                            id="message"
                            className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 outline-none transition-all min-h-[120px]"
                            placeholder="How can we help?"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                    >
                        Send Message
                    </button>
                    {status && <p className="text-center text-sm text-green-600 mt-2">{status}</p>}
                </form>
            </div>
        </section>
    );
}
