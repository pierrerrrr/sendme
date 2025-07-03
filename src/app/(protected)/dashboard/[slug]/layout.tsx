import Sidebar from '@/components/global/sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode
    params: { slug: string }
}

const Layout = ({ children, params }: Props) => {
    // query client
    // WIP: query client and fetch data

    return <div className='p-3'>
        {/* sidebar */}
        <Sidebar slug={params.slug} />
        {/* navbar */}

    </div>
}

export default Layout