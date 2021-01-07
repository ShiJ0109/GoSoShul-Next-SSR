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
        url: 'https://www.example.com/videos/video-title',
        type: 'video.movie',
        videos: [
          {
            url: 'https://youtu.be/C0DPdy98e4c',
            // url : socialShare.videos,
            width: 800,
            height: 600,
            alt: 'Og Video Alt',
          },
        ],
        video: {
          // Multiple Open Graph actors is only available in version `7.0.2-canary.35`+ of next
          actors: [
            {
              profile: 'https://www.example.com/actors/@firstnameA-lastnameA',
              role: 'Protagonist',
            },
            {
              profile: 'https://www.example.com/actors/@firstnameB-lastnameB',
              role: 'Antagonist',
            },
          ],
          // Multiple Open Graph directors is only available in version `7.0.2-canary.35`+ of next
          directors: [
            'https://www.example.com/directors/@firstnameA-lastnameA',
            'https://www.example.com/directors/@firstnameB-lastnameB',
          ],
          // Multiple Open Graph writers is only available in version `7.0.2-canary.35`+ of next
          writers: [
            'https://www.example.com/writers/@firstnameA-lastnameA',
            'https://www.example.com/writers/@firstnameB-lastnameB',
          ],
          duration: 680000,
          releaseDate: '2022-12-21T22:04:11Z',
          // Multiple Open Graph tags is only available in version `7.0.2-canary.35`+ of next
          tags: ['Tag A', 'Tag B', 'Tag C'],
        },
        site_name: 'SiteName',
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
