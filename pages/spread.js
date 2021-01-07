import { NextSeo } from 'next-seo';
import React, {useEffect} from 'react';
import * as userRequests from 'services/userRequests';

const Page = (props) => (
  <>
    <NextSeo
      title="Video Page Title"
      description="Description of video page"
      openGraph={{
        title: 'Open Graph Video Title',
        description: 'Description of open graph video',
        url: 'https://youtu.be/C0DPdy98e4c',
        videos: [
          {
            url: 'https://youtu.be/C0DPdy98e4c',
            // url : socialShare.videos,
            width: 800,
            height: 600,
            alt: 'Og Video Alt',
          },
        ],
        images: [
          {
            url: 'https://res.cloudinary.com/dkoaz5iep/image/upload/ar_1,q_100,r_5,c_crop/v1605505999/gososhul/r8mijsdkrkhxpwhnr5me.png',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: 'https://res.cloudinary.com/dkoaz5iep/image/upload/ar_1,q_100,r_5,c_crop/v1605505999/gososhul/r8mijsdkrkhxpwhnr5me.png',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: 'https://res.cloudinary.com/dkoaz5iep/image/upload/ar_1,q_100,r_5,c_crop/v1605505999/gososhul/r8mijsdkrkhxpwhnr5me.png' },
          { url: 'https://res.cloudinary.com/dkoaz5iep/image/upload/ar_1,q_100,r_5,c_crop/v1605505999/gososhul/r8mijsdkrkhxpwhnr5me.png' },
        ],
        site_name: 'GoSoShul',
      }}
    />
    <p>Simple Usage</p>
    <p>{JSON.stringify(props.data)}</p>
    <h2>{props.originalUrl}</h2>
  </>
);

// Page.getInitialProps = async (ctx) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const json = await res.json()
//   const data = await userRequests.GetRef("5fe3134edacad");
//   return { stars: json.stargazers_count, data }
// }

export default Page;
