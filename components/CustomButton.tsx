"use client";

import Image from 'next/image'

const CustomButton = () => {
  return (
    <button
    disabled={false}
    type={"button"}
    className={`custom-btn`}
    onClick={() => {}}
    >
        <span className={`flex-1`}></span>
        Title
    </button>
  )
}

export default CustomButton