import React, { useState } from 'react';
// import army from '../assets/login/kushal.PNG';
import logo from '../assets/logo/logo1.png';
import logo1 from '../assets/logo/logo2.png';

const Layout = ({ children, selectedSection, onSectionChange }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { text: 'Dashboard', icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
</svg>
), id: 'dashboard' },
    { text: 'Rooms', icon: (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 18V6h-5v12h5Zm0 0h2M4 18h2.5m3.5-5.5V12M6 6l7-2v16l-7-2V6Z"/>
</svg>
), id: 'rooms' },
    { text: 'BookingStatus', icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
</svg>
), id: 'bookingstatus' },
    { text: 'Inventory', icon: (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z"/>
  <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z"/>
</svg>
), id: 'inventory' },
    { text: 'Analytics', icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>
), id: 'analytics' },
  ];

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col min-h-screen md:flex-row bg-[#0d1313]">
      {/* Mobile sidebar toggle */}
      <div className="sticky top-0 z-40 md:hidden flex items-center justify-between bg-[#2F323B] px-4 py-3 shadow">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Kushal Logo" className="w-10 h-10 object-contain rounded-full" />
          <span className="text-white text-lg font-bold">STEAG</span>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white focus:outline-none">
          <span className="text-2xl">☰</span>
        </button>
      </div>
      {/* Sidebar Backdrop for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/40 md:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}
      {/* Sidebar */}
      <div className={`fixed md:sticky md:top-0 z-30 top-0 left-0  md:h-screen w-70 bg-gradient-to-br from-[#2F323B] to-[#1d1f25] shadow-2xl flex flex-col h-full overflow-y-auto transition-transform duration-300 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex md:relative`}>
        <div className="hidden md:flex items-center gap-3 p-3 border-b border-white/10">
          <img src={logo} alt="Kushal Logo" className="w-16 h-14 object-contain rounded-full shadow-lg border-white/20" />
          <div>
            <h1 className="text-white text-xl font-bold tracking-wide">STEAG</h1>
          </div>
        </div>
        <div className="border-b border-white/20 mb-2 hidden md:block"></div>
        {/* Menu Items */}
        <nav className="flex-1 px-3 py-6 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onSectionChange(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left hover:transform hover:translate-x-2 hover:shadow-lg ${
                selectedSection === item.id
                  ? 'bg-white/15 text-white border-l-4 border-blue-400 shadow-md'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-xl w-6 flex justify-center">{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </button>
          ))}
        </nav>
        {/* Footer Section - always visible at bottom */}
        <div className="mt-auto p-4 border-t border-white/10 backdrop-blur-sm bg-gradient-to-br from-[#2F323B] to-[#1d1f25]">
          <div className="flex items-center gap-3 p-3 mb-3 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(to bottom right, #020B17, #0a1a2e)'}}>
              <span className="text-white font-bold">S</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">STEAG</p>
              <p className="text-white/60 text-xs">System Administrator</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl shadow-lg"
            style={{background: 'linear-gradient(to right, #dc2626, #b91c1c)'}}
            onMouseEnter={e => e.target.style.background = 'linear-gradient(to right, #ef4444, #dc2626)'}
            onMouseLeave={e => e.target.style.background = 'linear-gradient(to right, #dc2626, #b91c1c)'}
          >
            <span>🚪</span>
            <span>Sign Out</span>
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="relative flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="z-20 shadow-xl  px-1 py-0 md:p-6 lg:p-3 xl:p-6 w-full flex-shrink-0 bg-gradient-to-br to-[#2F323B] from-[#1d1f25] h-20 items-center" >
          <div className="flex flex-col sm:flex-row items-center px-2 sm:px-4 py-0  w-full ">
            <div className='flex justify-center items-center'>
              <h2 className="text-transparent bg-clip-text text-xl text-center sm:text-2xl md:text-3xl lg:text-3xl font-bold tracking-wide drop-shadow-lg" style={{backgroundImage: 'linear-gradient(to right, #ffffff, #d1d5db, #9ca3af)'}}>
                  WELCOME TO GUEST ROOM MANAGEMENT ...
              </h2>
            </div>
            <div>
              {/* <img src={logo1} alt="logo" className='w-14 h-10 object-contain' /> */}
            </div>
          </div>
        </header>
        {/* Main Content Area */}
        <main className="  flex-1   bg-black">
          <div className="bg-[#020B17] backdrop-blur-sm rounded-2xl shadow-xl border-white/20 p-2 sm:p-6 md:p-8 min-h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout; 