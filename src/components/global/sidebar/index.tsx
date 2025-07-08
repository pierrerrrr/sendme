'use client'

import { usePaths } from '@/hooks/user-nav'
import Link from 'next/link'
import React from 'react'

type Props = {
    slug: string
}

const Sidebar = ({ slug }: Props) => {
    const { page } = usePaths()

    return (
        <div className='w-[250px] border-2 radial fixed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#7688dd] via-[#171717] to-[#7688dd] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden'>
            <div className='flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl'>
                <div className='flex gap-x-2 items-center p-5 justify-center'>
                    <Link
                        href="/"
                        aria-label="go home"
                        className="mx-auto block size-fit text-2xl font-bold">
                        sen<span className='text-blue-600'>DM</span>e
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar