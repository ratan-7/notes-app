import { Link, useLocation } from "react-router-dom"

function Navbar() {
    const location = useLocation()

    return (
        <div className="w-full px-6 py-4 flex justify-between items-center 
    bg-black/40 backdrop-blur-md border-b border-white/20 shadow-lg">

            {/* Logo */}
            <h1 className="text-2xl font-bold text-transparent bg-clip-text 
      bg-gradient-to-r from-pink-500 to-blue-500">
                InkMind 🚀
            </h1>

            {/* Navigation */}
            <div className="flex items-center gap-4">

                {/* Notes */}
                <Link
                    to="/"
                    className={`px-4 py-1 rounded-lg text-white transition ${location.pathname === "/"
                        ? "bg-white/20"
                        : "hover:bg-white/10"
                        }`}
                >
                    Notes
                </Link>

                {/* Profile */}
                <Link
                    to="/profile"
                    className={`px-4 py-1 rounded-full text-white font-semibold transition 
          ${location.pathname === "/profile"
                            ? "bg-gradient-to-r from-pink-500 to-blue-500 shadow-md"
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                >
                    Profile
                </Link>

            </div>
        </div>
    )
}

export default Navbar