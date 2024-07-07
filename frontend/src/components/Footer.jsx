// import React from "react";

// const Footer = () => {
//   return (
//     <footer>
//       <div className="banner">
//         <div className="title">
//           <h1>KING's</h1>
//           <p>Events and Weddings</p>
//         </div>
//         <div className="tag">
//           <label>News Letter</label>
//           <div>
//             <input type="text" placeholder="E-mail" />
//             <button>Subscribe</button>
//           </div>
//           <p>Sign up with your email address to receice news and updates!</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    // Optionally, you can add logic here to handle subscription via API or other actions
    setEmail(""); // Clear the email input after submission
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>KHUSHI's</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <form onSubmit={handleEmailSubmit}>
            <label htmlFor="email">News Letter</label>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button type="submit">Subscribe</button>
            </div>
            <p>Sign up with your email address to receive news and updates!</p>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
