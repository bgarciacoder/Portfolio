import { useState } from "react";
import { useTranslation } from 'react-i18next';
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export const ContactPage = () => {
    const { t } = useTranslation();

    const form = useRef();

    console.log("PUBLIC", import.meta.env.VITE_PUBLIC_KEY)

    const handleSubmit = (e) => {
        e.preventDefault();

        // Aquí puedes enviar los datos a una API

        emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            form.current, 
            {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div className="mt-[8rem] flex items-start justify-center p-5">
            <section className="w-full max-w-sm flex flex-col gap-5">
                <h1 className="text-center text-xl font-bold">{t('contactFormTitle')}</h1>

                <form className="flex flex-col gap-4" ref={form} onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3">
                        <label className="text-[#F7DF1E]">{t('contactName')}</label>
                        <input
                            type="text"
                            name="name"
                            placeholder={t('contactNamePlaceholder')}
                            className="border p-2 outline-none"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-[#F7DF1E]">{t('contactEmail')}</label>
                        <input
                            type="email"
                            name="email"
                            placeholder={t('contactEmailPlaceholder')}
                            className="border p-2 outline-none"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-[#F7DF1E]">{t('contactMessage')}</label>
                        <textarea
                            name="message"
                            className="border p-2 resize-none outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="border p-2 cursor-pointer hover:text-[#F7DF1E] transition"
                    >
                        {t('contactSubmit')}
                    </button>
                </form>
            </section>
        </div>
    );
};