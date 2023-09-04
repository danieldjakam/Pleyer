import React from 'react'
export default async function page({ params }) {

    return (

        <div class="min-h-screen p-10">
            <h1>Results for <span>{params.search}</span></h1>
        </div>
    )
}