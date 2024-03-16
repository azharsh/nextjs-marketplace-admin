"use client"

const TopNavigation: React.FC = () => {
    return (
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-lg">Your Logo</div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:underline">Home</a>
            <a href="#" className="text-white hover:underline">About</a>
            <a href="#" className="text-white hover:underline">Services</a>
            <a href="#" className="text-white hover:underline">Contact</a>
            <a href="#" className="text-white hover:underline">Login</a>
          </div>
          <div className="md:hidden">
            <button className="text-white">
              {/* Add your responsive menu icon (e.g., Hamburger menu icon) */}
              ☰
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default TopNavigation;
  