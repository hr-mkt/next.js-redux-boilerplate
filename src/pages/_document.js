import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config'

const config = getConfig()

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        const styleString = `
            html { width: 100vw; height:100vh; margin: 0; }
            #__next { height:100vh; margin: 0; }
        `

        return (
            <Html  lang="ja" style={{height: '100%', width: '100%'}}>
                <Head>
                    <style>
                        {styleString}
                    </style>
                </Head>
                <body style={{height: '100%', width: '100%', margin: 0}}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
