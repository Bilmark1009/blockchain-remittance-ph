import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle, Eye, EyeOff, Info } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);

    // Simple password strength checker (0-4)
    function checkStrength(password: string) {
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;
        return score;
    }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black bg-gradient-to-br from-black via-gray-900 to-black">
    <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl border border-white/10 bg-black/60 backdrop-blur-lg relative animate-fade-in">
        <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z" /></svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-1">Log in to Peso<span className="text-yellow-500">Chain</span></h1>
            <p className="text-white/80 text-sm">Enter your email and password below to log in</p>
        </div>
            <Head title="Log in" />

            <form className="flex flex-col gap-6" onSubmit={submit} autoComplete="off">
                
                <div className="grid gap-6">
                    <div className="grid gap-2">
                                
                        <Label htmlFor="email" className="text-white">Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="email@example.com"
                            className="bg-black/70 border border-white/10 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-500 rounded-xl"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                                
                        <div className="flex items-center">
                            <Label htmlFor="password" className="text-white">Password</Label>
                            {canResetPassword && (
                                <TextLink href={route('password.request')} className="ml-auto text-sm" tabIndex={5}>
                                    Forgot password?
                                </TextLink>
                            )}
                        </div>
                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                tabIndex={2}
                                autoComplete="current-password"
                                value={data.password}
                                onChange={(e) => {
                                    setData('password', e.target.value);
                                    setPasswordStrength(checkStrength(e.target.value));
                                }}
                                placeholder="Password"
                                className="bg-black/70 border border-white/10 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-500 rounded-xl pr-10"
                                onFocus={() => setShowTooltip(true)}
                                onBlur={() => setShowTooltip(false)}
                            />
                            <button
                                type="button"
                                tabIndex={-1}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-yellow-500 focus:outline-none"
                                onClick={() => setShowPassword((v) => !v)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                            {/* Tooltip icon removed as requested */}
                            {showTooltip && (
                                <div className="absolute left-0 top-full mt-2 w-64 bg-black/90 border border-yellow-500 text-white text-xs rounded-xl shadow-lg p-4 z-10 animate-fade-in">
                                    <div className="font-bold mb-1 text-yellow-400">Password requirements:</div>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>At least 8 characters</li>
                                        <li>At least 1 uppercase letter</li>
                                        <li>At least 1 number</li>
                                        <li>At least 1 special character</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        {/* Password strength meter */}
                        <div className="h-2 w-full bg-white/10 rounded-full mt-2">
                            <div
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    passwordStrength === 0
                                        ? 'w-0 bg-transparent'
                                        : passwordStrength === 1
                                        ? 'w-1/4 bg-red-500'
                                        : passwordStrength === 2
                                        ? 'w-2/4 bg-yellow-500'
                                        : passwordStrength === 3
                                        ? 'w-3/4 bg-blue-500'
                                        : 'w-full bg-green-500'
                                }`}
                            ></div>
                        </div>
                        <InputError message={errors.password} />
                    </div>

                    <div className="flex items-center space-x-3">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onClick={() => setData('remember', !data.remember)}
                            tabIndex={3}
                            className="accent-yellow-500 border-yellow-500"
                        />
                        <Label htmlFor="remember" className="text-white">Remember me</Label>
                    </div>

                    <Button type="submit" className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-all duration-300" tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Log in
                    </Button>
                </div>

                <div className="text-center text-sm text-white/70">
                    Don't have an account?{' '}
                    <TextLink href={route('register')} tabIndex={5} className="text-yellow-500 hover:underline">
                        Sign up
                    </TextLink>
                </div>
            </form>

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
            </div>
</div>
    );
}
