import { FC } from "react";
import Head from 'next/head';
interface SEOProps {
    description?: string;
    author?: string;
    title?: string;
    meta?: any[];
    lang?: string;
}

const SEO: FC<SEOProps> = ({
    description,
    author,
    title,
    meta,
}) => {

    const metaData = [
        {
            name: 'description',
            content: description,
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            name: 'twitter:card',
            content: 'summary',
        },
        {
            name: 'twitter:creator',
            content: author,
        },
        {
            name: 'twitter:title',
            content: title,
        }, {
            name: 'twitter:description',
            content: description,
        }
    ].concat(meta!);

    return (
        <Head>
            <title>{title}</title>
            {
                metaData.map(({ name, content }, i) => (
                    <meta key={i} name={name} content={content} />
                ))
            }
        </Head>
    )
}


SEO.defaultProps = {
    description: "startup product landing page",
    author: "KD",
    title: "startup product landing page",
    meta: [],
    lang: "en"
}
export default SEO;
