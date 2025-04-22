import LoginForm from "./LoginForm";
import Logo from "./Logo";

const Home = () => {
    return (
        <div
            className="relative flex items-center justify-center bg-gray-100"
            style={{
                backgroundImage: "url('/home.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
            }}
        >
            {/* Black overlay */}
            <div
                className="absolute inset-0 bg-black opacity-50"
            ></div>

            <div className="relative flex sm:flex-row flex-col items-center justify-center space-x-6 sm:gap-20">
                <Logo />
                <LoginForm />
            </div>
        </div>
    );
};

export default Home;
