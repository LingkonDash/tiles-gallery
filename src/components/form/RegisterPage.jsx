"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField, } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RegisterForm() {

    const [isVisible, setIsVisible] = useState(false)


    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData);

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.photo,
        });

        if (error) {
            toast.error(error.message || "Registration failed");
            return;
        }

        toast.success("Registration successful! Redirecting...");

        setTimeout(() => {
            router.push("/login");
        }, 1200);
    };

    return (
        <div className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-lg">

            <h1 className="text-2xl font-semibold text-white mb-2 text-center">
                Register
            </h1>

            <p className="text-sm text-white/80 text-center mb-6">
                Access this page from the Navbar Register link
            </p>

            <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

                <TextField
                    isRequired
                    name="name"
                >
                    <Label className="text-white/90 text-left">Name</Label>
                    <Input
                        placeholder="John Doe"
                        className="bg-white/20 text-white placeholder-white/70 border-white/30"
                    />
                    <FieldError className="text-left" />
                </TextField>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                        ) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label className="text-white/90 text-left">Email</Label>
                    <Input
                        placeholder="john@example.com"
                        className="bg-white/20 text-white placeholder-white/70 border-white/30"
                    />
                    <FieldError className="text-left" />
                </TextField>

                <TextField
                    isRequired
                    name="photo"
                    type="url"
                    validate={(value) => {
                        try {
                            new URL(value);
                            return null;
                        } catch {
                            return "Enter a valid URL";
                        }
                    }}
                >
                    <Label className="text-white/90 text-left">Photo URL</Label>
                    <Input
                        placeholder="https://example.com/photo.jpg"
                        className="bg-white/20 text-white placeholder-white/70 border-white/30"
                    />
                    <FieldError className="text-left" />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type={isVisible ? 'text' : "password"}
                    className={'relative'}
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        return null;
                    }}
                >
                    <Label className="text-white/90 text-left">Password</Label>
                    <Input
                        placeholder="Enter your password"
                        className="bg-white/20 text-white placeholder-white/70 border-white/30"
                    />
                    <div
                        onClick={() => setIsVisible(!isVisible)}
                        className="absolute top-[34px] right-2.5 cursor-pointer hover:text-blue-200"
                    >
                        {isVisible ? <FaEye /> : <FaEyeSlash />}
                    </div>
                    <Description className="text-white/70 text-left">
                        Must be at least 8 characters
                    </Description>
                    <FieldError className="text-left" />
                </TextField>

                <div className="flex gap-2 mt-2">
                    <Button
                        type="submit"
                        className="w-full bg-white text-black hover:text-white transition-all font-medium hover:bg-blue-400"
                    >
                        Register
                    </Button>

                    <Button
                        type="reset"
                        variant="secondary"
                        className="w-full bg-white/20 text-white hover:bg-white/40"
                    >
                        Reset
                    </Button>
                </div>
            </Form>

            <div className="my-5 text-center text-white/70 text-sm">
                or continue with
            </div>

            <Button
                // onClick={handleGoogleLogin}
                className="w-full bg-white/10 hover:bg-white/40 border border-white/40"
            >
                <FcGoogle />
                Sign up with Google
            </Button>

            <p className="text-center text-sm text-white/80 mt-6">
                Already have an account?{" "}
                <Link href="/login" className="underline text-white font-semibold">
                    Login
                </Link>
            </p>
        </div>
    );
}