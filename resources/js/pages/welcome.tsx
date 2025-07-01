import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="PesoChain | Instant Blockchain Remittance for OFWs">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>

            {/* Glassmorphism Navigation */}
            <header className="fixed w-full z-50">
                <div className="container mx-auto px-6 py-4">
                    <nav className="backdrop-blur-lg bg-black/5 border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
                        <div className="text-2xl font-bold text-white">Peso<span className="text-yellow-500">Chain</span></div>
                        <div className="flex items-center gap-3">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-5 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 font-medium rounded-full hover:shadow-lg transition-all duration-300"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="px-5 py-2 text-white hover:text-amber-400 transition-colors font-medium"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="px-5 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 font-medium rounded-full hover:shadow-lg transition-all duration-300"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </div>
            </header>

            {/* Hero Section with Animated Gradient */}
            <section className="min-h-screen bg-black text-white pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                    <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-16 lg:mb-0">
                            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1 rounded-full mb-6">
                                <span className="text-yellow-500">NEW</span> Blockchain-powered remittance
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                                Send Money Home <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">Faster</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">Cheaper</span>
                            </h1>
                            <p className="text-xl opacity-90 mb-10 max-w-lg text-white">
                                OFWs save up to 85% on fees with our blockchain technology. Instant transfers to any bank, e-wallet, or cash pickup in the Philippines.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={route('register')}
                                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 text-center"
                                >
                                    Start Sending Now
                                </Link>
                                <Link
                                    href="#how-it-works"
                                    className="border border-white/20 bg-black/5 backdrop-blur-sm rounded-xl hover:bg-black/10 transition-all duration-300 text-center"
                                >
                                    See How It Works
                                </Link>
                            </div>

                            <div className="mt-12 flex items-center space-x-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((item) => (
                                        <div key={item} className="w-10 h-10 rounded-full border-2 border-white bg-gray-800 overflow-hidden">
                                            {/* Profile images would go here */}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm mt-1 opacity-80 text-white">Trusted by 50,000+ OFWs worldwide</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="relative">
                                <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
                                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="p-1 bg-gradient-to-r from-yellow-500 to-yellow-600">
                                        <div className="bg-gray-900 p-6 rounded-xl">
                                            <div className="flex justify-between items-center mb-8">
                                                <div className="text-2xl font-bold">PesoChain</div>
                                                <div className="text-sm bg-gradient-to-r from-yellow-500 to-yellow-600 text-transparent bg-clip-text font-medium">BLOCKCHAIN REMITTANCE</div>
                                            </div>
                                            
                                            <div className="space-y-6">
                                                <div className="bg-gray-800/50 p-4 rounded-lg">
                                                    <div className="text-xs text-gray-400 mb-1">You send</div>
                                                    <div className="flex items-center justify-between">
                                                        <div className="text-2xl font-bold">100 USD</div>
                                                        <div className="text-sm text-gray-400">=</div>
                                                        <div className="text-2xl font-bold text-yellow-500">5,600 PHP</div>
                                                    </div>
                                                </div>
                                                
                                                <div className="bg-gray-800/50 p-4 rounded-lg">
                                                    <div className="text-xs text-gray-400 mb-1">Recipient gets</div>
                                                    <div className="flex items-center justify-between">
                                                        <div className="text-2xl font-bold">5,550 PHP</div>
                                                        <div className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded">+50 PHP bonus</div>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center justify-between text-sm text-gray-400">
                                                    <span>Fee: 50 PHP (0.9%)</span>
                                                    <span>Rate: 1 USD = 56 PHP</span>
                                                </div>
                                            </div>
                                            
                                            <button className="w-full mt-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium rounded-lg hover:shadow-lg transition-all">
                                                Confirm Transfer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <div className="py-8 bg-gray-900 border-t border-b border-white/10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-500 mb-1">1.2M+</div>
                            <div className="text-sm text-gray-400">Transactions</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-500 mb-1">85%</div>
                            <div className="text-sm text-gray-400">Savings vs Banks</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-500 mb-1">24s</div>
                            <div className="text-sm text-gray-400">Average Transfer Time</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-500 mb-1">50K+</div>
                            <div className="text-sm text-gray-400">OFWs Served</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-20 bg-gray-900" id="features">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1 rounded-full mb-4">
                            <span className="text-yellow-500">WHY PESOCHAIN</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-4">Remittance <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Reinvented</span></h2>
                        <p className="text-xl opacity-80 max-w-2xl mx-auto">
                            Traditional remittance is slow and expensive. We're changing that with blockchain technology.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                ),
                                title: "Instant Settlement",
                                desc: "No more 3-5 day waits. Transactions complete in seconds on the blockchain."
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "Ultra-Low Fees",
                                desc: "Just 1% fee compared to 5-10% at traditional remittance centers."
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                                title: "Bank-Level Security",
                                desc: "Military-grade encryption and blockchain immutability protect every transaction."
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                ),
                                title: "Multiple Cash-Out Options",
                                desc: "Bank deposit, e-wallets (GCash, Maya), or 10,000+ cash pickup locations."
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                ),
                                title: "24/7 Availability",
                                desc: "Send money anytime, even on weekends and holidays."
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "Real-Time Tracking",
                                desc: "See exactly where your money is at every step of the process."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-gray-800/50 hover:bg-gray-800/70 border border-white/10 rounded-xl p-8 transition-all hover:-translate-y-1">
                                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-gray-900 mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-gray-800" id="how-it-works">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1 rounded-full mb-4">
                            <span className="text-yellow-500">SIMPLE PROCESS</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-4">How <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">PesoChain</span> Works</h2>
                        <p className="text-xl opacity-80 max-w-2xl mx-auto">
                            Sending money home takes just minutes with our easy 3-step process.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full -translate-y-1/2"></div>
                        
                        <div className="grid md:grid-cols-3 gap-8 relative z-10">
                            {[
                                {
                                    step: "1",
                                    title: "Create Your Free Account",
                                    desc: "Sign up in 2 minutes with just your email and phone number. No lengthy paperwork required.",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    )
                                },
                                {
                                    step: "2",
                                    title: "Fund Your Wallet",
                                    desc: "Deposit via bank transfer, credit card, or crypto. Convert to PHP-pegged stablecoin at best rates.",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )
                                },
                                {
                                    step: "3",
                                    title: "Send to Philippines",
                                    desc: "Enter recipient details and send. Money arrives instantly in their preferred payout method.",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>
                                    )
                                }
                            ].map((step, index) => (
                                <div key={index} className="bg-gray-900 border border-white/10 rounded-xl p-8 hover:shadow-lg transition-all">
                                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 relative">
                                        {step.step}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 text-sm">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-gray-400">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1 rounded-full mb-4">
                            <span className="text-yellow-500">OFW TESTIMONIALS</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-4">Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Filipinos Worldwide</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Maria Santos",
                                role: "Nurse in Dubai",
                                quote: "I save over 300 AED every month compared to traditional remittance. My family gets the money instantly!",
                                stars: 5
                            },
                            {
                                name: "Juan Dela Cruz",
                                role: "Engineer in Canada",
                                quote: "The lowest fees I've found. What used to cost me $15 now costs just $1.50 with PesoChain.",
                                stars: 5
                            },
                            {
                                name: "Sarah Lim",
                                role: "Domestic Helper in HK",
                                quote: "So easy to use even for someone like me who's not tech-savvy. Customer service is excellent too.",
                                stars: 4
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-gray-800/50 border border-white/10 rounded-xl p-8 hover:shadow-lg transition-all">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    {[...Array(testimonial.stars)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-yellow-900 to-yellow-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                    <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Save on <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Remittance Fees</span>?</h2>
                        <p className="text-xl opacity-90 mb-10">
                            Join thousands of OFWs who are already enjoying fast, low-cost money transfers to the Philippines.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={route('register')}
                                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 text-center"
                            >
                                Get Started for Free
                            </Link>
                            <Link
                                href="#features"
                                className="border border-white/20 bg-black/5 backdrop-blur-sm rounded-xl hover:bg-black/10 transition-all duration-300 text-center"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-white/10 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                        <div className="col-span-2">
                            <div className="text-2xl font-bold mb-4">Peso<span className="text-yellow-500">Chain</span></div>
                            <p className="text-gray-400 mb-4">
                                Blockchain-powered remittance for the global Filipino community.
                            </p>
                            <div className="flex space-x-4">
                                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                                    <a key={social} href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition">
                                        <span className="sr-only">{social}</span>
                                        {/* Icon would go here */}
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-bold mb-4">Company</h4>
                            <ul className="space-y-2">
                                {['About Us', 'Careers', 'Blog', 'Press'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-amber-400 transition">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-bold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                {['Help Center', 'Community', 'Tutorials', 'API Docs'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-amber-400 transition">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-bold mb-4">Legal</h4>
                            <ul className="space-y-2">
                                {['Privacy', 'Terms', 'Security', 'Compliance'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-amber-400 transition">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 mb-4 md:mb-0">
                            © {new Date().getFullYear()} PesoChain. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition">English</a>
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition">Filipino</a>
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition">العربية</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Animation styles */}
            <style jsx>{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </>
    );
}