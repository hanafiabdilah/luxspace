import React from 'react'
import Header from 'components/Header'
import Clients from 'parts/HomePage/Clients'
import Sitemap from 'components/Sitemap'
import Footer from 'components/Footer'
import ProductDetail from 'parts/Details/ProductDetail'
import Suggestion from 'parts/Details/Suggestion'
import Breadcrumb from 'components/Breadcrumb'

export default function HomePage() {
    return (
        <>
            <Header theme="black"/>
            <Breadcrumb list={[
                { url: "/", name: "Home"},
                { url: "/categories/91231", name: "Office Room"},
                { url: "/categories/91231/products/7888", name: "Details" }
            ]} />
            <ProductDetail />
            <Suggestion />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    )
}
