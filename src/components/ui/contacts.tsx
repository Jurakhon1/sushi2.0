import React, { useState, useEffect, useRef } from 'react';
import { PhoneCall, X } from 'lucide-react';
import { FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa';

interface ContactsProps {
    active: boolean;
    setActive: (value: boolean) => void;
}

export default function Contacts({ active, setActive }: ContactsProps) {
    const [showContacts, setShowContacts] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const contacts = [
        {
            icon: <FaWhatsapp className="text-white" size={24} />,
            bg: 'bg-[#25D366]',
            href: 'https://wa.me/556269090'
        },
        {
            icon: <PhoneCall className="text-white" size={24} />,
            bg: 'bg-[#25D366]',
            href: 'tel:+992556269090'
        },
        {
            icon: <FaTelegram className="text-white" size={24} />,
            bg: 'bg-[#0088CC]',
            href: 'https://t.me/+992556269090'
        },
        {
            icon: <FaInstagram className="text-white" size={24} />,
            bg: 'bg-gradient-to-r from-[#E1306C] to-[#F77737]',
            href: 'https://www.instagram.com/sushichef.tj?igsh=a25oYjhmeWNtNzNv'
        }
    ];

    useEffect(() => {
        if (active) {
            setShowContacts(true);
        } else {
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setShowContacts(false), 300);
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [active]);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className="fixed z-50 bottom-20 right-6">
            {showContacts && (
                <div className="flex flex-col items-center mb-4 space-y-3">
                    {contacts.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                ${contact.bg} w-12 h-12 rounded-full flex items-center justify-center
                                shadow-lg transform transition-all duration-300
                                ${active
                                    ? 'translate-y-0 opacity-100 scale-100'
                                    : 'translate-y-10 opacity-0 scale-50'
                                }
                            `}
                            style={{
                                transitionDelay: active
                                    ? `${index * 50}ms`
                                    : '0ms'
                            }}
                        >
                            {contact.icon}
                        </a>
                    ))}
                </div>
            )}

            <button
                onClick={handleClick}
                className={`
                    rounded-full p-4 shadow-xl flex items-center justify-center
                    transition-all duration-300 transform
                    ${active
                        ? 'bg-red-500 rotate-0 scale-110'
                        : 'bg-green-600 hover:bg-green-500 rotate-0 hover:rotate-12'
                    }
                `}
                style={{
                    boxShadow: '0 8px 25px rgba(72, 187, 120, 0.7)',
                    transition: 'all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
            >
                {active ? (
                    <X className="text-white w-6 h-6 transition-all" />
                ) : (
                    <PhoneCall className="text-white w-6 h-6 transition-all" />
                )}
            </button>
        </div>
    );
}