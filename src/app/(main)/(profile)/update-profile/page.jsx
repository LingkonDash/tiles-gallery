"use client";

import { Button, FieldError, Form, Input, Label, TextField, } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import bgImage2 from "@/assets/hero-bg/newBG4.png";

export default function UpdateProfilePage() {
    const router = useRouter();
    const { data: session } = authClient.useSession();

    const handleUpdate = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const updated = Object.fromEntries(formData);

        const { error } = await authClient.updateUser({
            name: updated.name,
            image: updated.image,
        });

        if (error) {
            toast.error(error.message || "Update failed");
            return;
        }

        toast.success("Profile updated successfully");

        setTimeout(() => {
            router.push("/profile");
        }, 1000);
    };

    return (
        <div
            className="relative min-h-screen flex justify-center items-center bg-center bg-cover w-full py-20 px-4"
            style={{ backgroundImage: `url(${bgImage2.src})` }}
        >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />

            <div className="z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-lg text-white">

                <h1 className="text-2xl font-semibold mb-6 text-center">
                    Update Your Profile
                </h1>

                <Form className="flex flex-col gap-4" onSubmit={handleUpdate}>

                    <TextField
                        defaultValue={session?.user?.name || ""}
                        isRequired name="name">
                        <Label className="text-white/90 text-left">Name</Label>
                        <Input
                            placeholder="Enter your name"
                            className="bg-white/20 text-white placeholder-white/70 border-white/30"
                        />
                        <FieldError className="text-left" />
                    </TextField>

                    <TextField
                        isRequired
                        name="image"
                        type="url"
                        defaultValue={session?.user?.image || ""}
                        validate={(value) => {
                            try {
                                new URL(value);
                                return null;
                            } catch {
                                return "Enter a valid URL";
                            }
                        }}
                    >
                        <Label className="text-white/90 text-left">Image URL</Label>
                        <Input
                            placeholder="https://example.com/image.jpg"
                            className="bg-white/20 text-white placeholder-white/70 border-white/30"
                        />
                        <FieldError className="text-left" />
                    </TextField>

                    <Button
                        type="submit"
                        className="mt-2 w-full bg-white text-black hover:text-white transition-all font-medium hover:bg-blue-400"
                    >
                        Update Information
                    </Button>
                </Form>
            </div>
        </div>
    );
}