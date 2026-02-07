// src/components/TestAsset2.jsx
import React from 'react';
import testVideo from '../assets/Video3.mp4';

const TestAsset2 = () => {
  console.log('Video path:', testVideo); // Check console
  
  return (
    <div style={{ padding: '50px', background: '#260a30' }}>
      <h1 style={{ color: '#ffc091' }}>Testing Video Import</h1>
      <p style={{ color: 'white' }}>Video path: {testVideo}</p>
      <video 
        controls 
        width="400"
        style={{ border: '2px solid #ffc091' }}
        onLoadedData={() => console.log('Video loaded successfully')}
        onError={(e) => console.error('Video failed to load:', e)}
      >
        <source src={testVideo} type="video/mp4" />
        Your browser doesn't support HTML5 video.
      </video>
    </div>
  );
};

export default TestAsset2;