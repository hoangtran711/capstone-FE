import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagProps {
  title: string;
  description: string;
  image?: any;
}

const MetaTag = (props: MetaTagProps) => {
  const { title, description, image } = props;
  const metaTitle = title || 'Attendance - Work From Jome';
  const metaDescription = description || 'Attendance - Work From Jome';
  const metaImage = image || 'thumbnail.jpg';
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta property="og:image" content={metaImage} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
    </Helmet>
  );
};

export default MetaTag;
