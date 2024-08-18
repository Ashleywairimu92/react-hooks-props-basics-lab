// import React from "react";

// function Links ({ github, linkedin }) {
//   return (
//     <div>
//       <h3>Links</h3>
//       {github && <a href={github}>{github}</a>}
//       {linkedin && <a href={linkedin}>{linkedin}</a>}
      
//     </div>
//   );
// };

// export default Links;

// Links.js
import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  );
}

export default Links;
