"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0] || { title: "", value: "" });

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(value) => setSelected(value)}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="flex items-center px-4 py-2 bg-gray-200 rounded">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron up down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  value={option}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 px-4 ${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span className={selected ? "font-medium" : "font-normal"}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;


































// "use client";
// import { Fragment, useState } from 'react'
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { Listbox, Transition } from '@headlessui/react';
// import { CustomFilterProps } from '@/types';


// const CustomFilter = ({ title, options }: CustomFilterProps) => {
//   const [selected, setSelected] = useState(options[0]);
//   return (
//     <div className='w-fit'>
//       <Listbox
//         value={selected}
//         onChange={(e) => setSelected(e)}
//       >
//         <div className='relative w-fit z-10'>
//           <Listbox.Button className="custom-filter__btn">
//             <span className='block truncate'>{selected.title}</span>
//             <Image
//               src="/chevron-up-down.svg"
//               width={20}
//               height={20}
//               className='ml-4 object-contain'
//               alt="chevron up down"
//             />
//           </Listbox.Button>
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Listbox.Options className="custom-filter__options">
//               {options.map((option) => (
//                 <Listbox.Option>
//                   {({ selected }) => (
//                     <span>
//                       {option.title}
//                     </span>
//                   )}
//                 </Listbox.Option>
//               )}
//             </Listbox.Options>
//           </Transition>
//         </div>
//       </Listbox>
//     </div>
//   )
// }

// export default CustomFilter