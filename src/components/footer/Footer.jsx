

const Footer = () => {
  return (
    <div className='mt-60' >
        <div className='flex flex-col justify-between gap-8 lg:flex-row' >
                <div className='lg:w-3/5 flex flex-col justify-center'>
                        <img src="/footerLogo.svg" alt="" />
                        <button className='w-full  lg:w-auto mt-11 py-3  bg-gradient-to-b from-[#011F1A] to-[#013229] border-[1px] border-[#eaeddc7c] rounded-md text-[#EDF1E4] font-bold ' >Sign up now</button>
                </div>
                <div className='flex w-full justify-between text-[#EDF1E4]' >
                        <ul className='flex flex-col gap-[2rem]' >
                            <li className='text-[#D7CEA5] font-bold font-dm-sans text-sm md:text-2xl' >Category 1</li>
                            <li className="font-medium" >Link 1</li>
                            <li className="font-medium">Link 2</li>
                            <li className="font-medium">Link 3</li>
                            <li className="font-medium">Link 4</li>
                        </ul>
                        <ul className='flex flex-col gap-[2rem]'>
                            <li className='text-[#D7CEA5] font-bold font-dm-sans text-sm md:text-2xl'>Category 2</li>
                            <li className="font-medium">Link 1</li>
                            <li className="font-medium">Link 2</li>
                            <li className="font-medium">Link 3</li>
                            <li className="font-medium">Link 4</li>
                        </ul>
                        <ul className='flex flex-col gap-[2rem]'>
                            <li className='text-[#D7CEA5] font-bold font-dm-sans text-sm md:text-2xl'>Category 3</li>
                            <li className="font-medium">Link 1</li>
                            <li className="font-medium">Link 2</li>
                            <li className="font-medium">Link 3</li>
                            <li className="font-medium">Link 4</li>
                        </ul>
                </div>
        </div>
        <div className='flex flex-col-reverse lg:flex-row items-center gap-3 justify-between mt-20 pb-28' >
            <p className='text-[#3D8361]' >© Copyright 2023, codemarch. All Rights Reserved.</p>

            <div className='flex gap-8 '>
                <img src="/fbLogo.svg" width={20} alt="" />
                <img src="/instaLogo.svg"width={20} alt="" />
                <img src="/fbLogo.svg" width={20} alt="" />
                <img src="/fbLogo.svg" width={20} alt="" />
                <img src="/fbLogo.svg" width={20} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Footer