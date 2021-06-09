import * as React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import getConfig from 'next/config'
const config = getConfig().publicRuntimeConfig

const MetaHeader =  ({ title, description, image='', url='' }) => {
    return (
        <Head>
            <meta name="description" content={description}></meta>
            <link rel="shortcut icon" href={'/favicons/favicon.ico'} />
            <link rel="apple-touch-icon" href={'/favicons/apple-touch-icon.png'} />
            <title>配車システム - {title}</title>
        </Head>
    )
}

MetaHeader.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string
}

export default MetaHeader
