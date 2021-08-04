import React from 'react'
import Header from 'parts/Header'
import Breadcrumb from 'components/Breadcrumb'
// import BrowseRoom from 'parts/HomePage/BrowseRoom'
// import JustArrived from 'parts/HomePage/JustArrived'
import Clients from 'parts/Clients'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
import ProductDetail from 'parts/Details/ProductDetail'
import Suggestion from 'parts/Details/Suggestion'

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
