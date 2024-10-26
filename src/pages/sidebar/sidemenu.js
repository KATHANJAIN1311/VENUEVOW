// import React, { useState } from 'react';
// import {
//   Menu,
//   Home,
//   Calendar,
//   Utensils,
//   Phone,
//   Users,
//   X,
//   ChevronRight
// } from 'lucide-react';

// const SideMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { title: 'Home', icon: <Home size={20} />, path: '/', active: true },
//     { title: 'Reservations', icon: <Calendar size={20} />, path: '/reservations' },
//     { title: 'Dining', icon: <Utensils size={20} />, path: '/dining' },
//     { title: 'About Us', icon: <Users size={20} />, path: '/about' },
//     { title: 'Contact', icon: <Phone size={20} />, path: '/contact' },
//   ];

//   return (
//     <>
//       {/* Hamburger Menu Button */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-100 
//                    hover:scale-105 transition-transform duration-300 lg:hidden"
//         aria-label="Open Menu"
//       >
//         <Menu size={24} />
//       </button>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity 
//                      duration-300 ease-in-out z-40"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Side Menu */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col
//                     transform transition-transform duration-300 ease-in-out
//                     ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
//                     overflow-hidden`}
//       >
//         {/* Header */}
//         <div className="p-6 border-b border-gray-200 bg-gray-50">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-semibold text-gray-800">Hotel Name</h2>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="p-2 rounded-lg hover:bg-gray-200 transition-colors lg:hidden"
//               aria-label="Close Menu"
//             >
//               <X size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Menu Items */}
//         <navb className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-gray-300 
//                       scrollbar-track-gray-100">
//           {menuItems.map((item, index) => (
//             <a
//               key={index}
//               href={item.path}
//               className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 
//                          relative group transition-all duration-300 ease-in-out
//                          ${item.active ? 'bg-blue-50 border-r-4 border-blue-500' : ''}
//                          hover:pl-6`}
//             >
//               <span className="mr-3 text-gray-600 group-hover:text-blue-500 
//                              transition-colors duration-300">
//                 {item.icon}
//               </span>
//               <span className="flex-1 group-hover:text-blue-500 
//                              transition-colors duration-300">
//                 {item.title}
//               </span>
//               <ChevronRight 
//                 size={16} 
//                 className="opacity-0 group-hover:opacity-100 transition-opacity 
//                            duration-300 text-blue-500"
//               />
//             </a>
//           ))}
//         </navb>

//         {/* Footer */}
//         <div className="mt-auto p-4 border-t border-gray-200 text-center">
//           <p className="text-sm text-gray-500">© 2024 venuevows</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideMenu;