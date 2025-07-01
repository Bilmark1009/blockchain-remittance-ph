import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

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
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={2}
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Password"
                            className="bg-black/70 border border-white/10 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-500 rounded-xl"
                        />
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
