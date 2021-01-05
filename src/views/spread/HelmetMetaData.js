import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { NextSeo } from 'next-seo';

export default function HelmetMetaData(props) {
  const location = useLocation();
  const currentUrl = `http://www.gososhul.com${location.pathname}`;
  const quote = props.quote !== undefined ? props.quote : '';
  const title = props.title !== undefined ? props.title : 'GoSoshul';
  const image = props.image !== undefined ? props.image : 'https://res.cloudinary.com/dkoaz5iep/image/upload/v1605506466/gososhul/et6xmze2vefvrhufhu0r.png';
  const description = props.description !== undefined ? props.description : 'This is Test';
  const hashtag = props.hashtag !== undefined ? props.hashtag : '#camperstribe';
  return (
    <>
      {/* <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="image" content={image} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:quote" content={quote} />
        <meta property="og:hashtag" content={hashtag} />
        <meta property="og:image" content={image} />
        <meta property="og:image:url" content={image} />
        <meta property="og:image:secure_url" content={image} />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="CampersTribe" />
        <meta property="og:description" content={description} />
      </Helmet> */}
      <NextSeo
        title="Using More of Config"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
    </>

  );
}
