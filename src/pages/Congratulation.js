import React from 'react'

import Header from 'parts/Header'
import Breadcrumb from 'components/Breadcrumb'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
import Success from 'parts/Congratulation/Success'

export default function Congratulation() {
    return (
        <>
            <Header />
            <Breadcrumb list={[
                {url: "/", name:"Home"},
                {url: "/congratulation", name:"Success Checkout"}
            ]}/>
            <Success />
            <Sitemap />
            <Footer />
        </>
    )
}
