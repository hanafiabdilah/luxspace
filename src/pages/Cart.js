import React from 'react'

import Header from 'components/Header'
import Sitemap from 'components/Sitemap'
import Footer from 'components/Footer'
import ShoppingCart from 'parts/Cart/ShoppingCart'
import ShippingDetails from 'parts/Cart/ShippingDetails'
import Breadcrumb from 'components/Breadcrumb'

export default function Cart() {
    return (
        <>
        <Header theme="black"/>
        <Breadcrumb list={[
            { url: "/", name: "Home"},
            { url: "/cart", name: "Shopping Cart"},
        ]} />
        <section className="md:py-16">
            <div className="container mx-auto px-4">
                <div className="flex -mx-4 flex-wrap">
                    <ShoppingCart />
                    <ShippingDetails />
                </div>
            </div>
        </section>
        <Sitemap />
        <Footer />
    </>
    )
}
