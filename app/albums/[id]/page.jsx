import React from 'react'
export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }]
}

export async function generateMetadata(
    { params, searchParams },
    parent
) {
    // read route params
    const id = params.id

    // fetch data

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: 'product.title',
        openGraph: {
            images: ['/some-specific-page-image.jpg', ...previousImages],
        },
    }
}
export default function page({ params }) {


    return (
        <div>{params.id}</div>
    )
}