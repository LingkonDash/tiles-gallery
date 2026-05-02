import bgImage2 from '@/assets/hero-bg/newBG4.png'
import RegisterForm from '@/components/form/RegisterPage'

export default function RegisterPage() {
    return (
        <div className="text-center relative min-h-screen flex justify-center items-center bg-center bg-cover w-full py-20" style={{ backgroundImage: `url(${bgImage2.src})` }}>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
            <div className='z-10 block'>
                <RegisterForm />
            </div>
        </div>
    )
}