import React from 'react';

const DownloadButton = ({ url }) => {
  return (
    <a href={url} download>
      <button>Download</button>
    </a>
  );
};

export default DownloadButton;
