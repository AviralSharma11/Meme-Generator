import React from "react";


function HeaderHomepage() {
  return (
    <div className="relative w-screen  overflow-hidden h-36">
      <video autoPlay loop muted id="video" className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/Videos/a.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default HeaderHomepage;
