import React from 'react'

import Header from 'components/Header'
import Sitemap from 'components/Sitemap'
import Footer from 'components/Footer'
import Success from 'parts/Congratulation/Success'
import Breadcrumb from 'components/Breadcrumb'

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
