"use client";

import { Combobox, Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types';
import Image from "next/image";
import { useState, Fragment } from 'react';
import { manufacturers } from '@/constants';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              { filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active}) =>`
                    relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' :'text-gray-900'}
                    `}
                    value={item}
                  >
                    {(props: { selected: boolean; active: boolean }) => (
                      <>
                      <span
                        className={`block truncate ${props.selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item}
                      </span>
                      {props.selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${props.active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;













// "use client";

// import { Combobox, Transition } from '@headlessui/react'
// import { SearchManufacturerProps } from '@/types'
// import Image from "next/image";
// import { useState, Fragment } from 'react';
// import { manufacturers } from '@/constants';


// const SearchManufacturer = ({ manufacturer, setManufacturer}: SearchManufacturerProps ) => {
//   const [query, setQuery] = useState('');

//   const filteredManufacturers =
//     query === ""
//       ? manufacturers
//       : manufacturers.filter((item) =>(
//         item.toLowerCase()
//         .replace(/\s+/g, "")
//         .includes(query.toLowerCase().replace(/\s+/g, "")
//   )))

//   return (
//     <div className="search-manufacturer">
//       <Combobox>
//         <div className="relative w-full">
//           <Combobox.Button className="absolute top-[14px]">
//             <Image 
//               src="/car-logo.svg"
//               width={20}
//               height={20}
//               className="ml-4"
//               alt="Car Logo"
//             />
//           </Combobox.Button>
//           <Combobox.Input
//             className="search-manufacturer__input"
//             placeholder="Volkswagen"
//             displayValue={(manufacturer: string) => manufacturer}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//             afterLeave={() => setQuery('')}
//           >
//             <Combobox.Options>
//               {filteredManufacturers.length === 0 &&
//                query !== "" ? (
//                 <Combobox.Option
//                   value={query}
//                   className="search-manufacturer__option"
//                 >
//                   Create "{query}"
//                 </Combobox.Option>
//               )}
//             </Combobox.Options>
//           </Transition>
//         </div>
//       </Combobox>
//     </div>
//   )
// }

// export default SearchManufacturer