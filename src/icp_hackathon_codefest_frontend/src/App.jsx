import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import { icp_hackathon_codefest_backend, createActor } from "declarations/icp_hackathon_codefest_backend";
// import { AuthClient } from "@dfinity/auth-client";
// import { HttpAgent } from "@dfinity/agent";

// function App() {
//   const [user, setUser] = useState();
//   const [getPrincipal, setPrincipal] = useState("");
//   const [actor, setActor] = useState(icp_hackathon_codefest_backend);

//   console.log(process.env.CANISTER_ID_INTERNET_IDENTITY);
//   console.log(process.env.CANISTER_ID_ICP_HACKATHON_CODEFEST_BACKEND);

//   function handleSubmit(event) {
//     event.preventDefault();
//     const first_name = event.target.elements.first_name.value;
//     const last_name = event.target.elements.last_name.value;
//     const email = event.target.elements.email.value;
//     icp_hackathon_codefest_backend.register({ first_name: first_name, last_name: last_name, email: email }).then((user) => {
//       if (user.err) {
//         setUser(user.err);
//       } else {
//         setUser("User registered successfully!");
//       }
//     });
//     return false;
//   }

//   async function login(event) {
//     event.preventDefault();
//     let authClient = await AuthClient.create();
//     await new Promise((resolve) => {
//       authClient.login({
//         identityProvider: process.env.DFX_NETWORK === "ic" ? "https://identity.ic0.app" : `http://${process.env.CANISTER_ID_INTERNET_IDENTITY}.localhost:4943/#authorize`,
//         onSuccess: resolve,
//       });
//     });
//     const identity = authClient.getIdentity();
//     const agent = new HttpAgent({ identity });
//     setActor(
//       createActor(process.env.CANISTER_ID_ICP_HACKATHON_CODEFEST_BACKEND, {
//         agent,
//       })
//     );
//     const result = await actor
//       .makeSomeCallLikeHelloWorldOrCRUDOrMintOrSendBtcEtc()
//       // Update the ui accordingly...
//       .updateUi(result);
//     return false;
//   }

//   async function whoAmI(event) {
//     event.preventDefault();
//     const principal = await icp_hackathon_codefest_backend.whoami();

//     setPrincipal(principal.toString());
//     console.log("from principal :", principal.toString());
//     return false;
//   }

//   return (
//     <main>
//       <img src="/logo2.svg" alt="DFINITY logo" />
//       <br />
//       <br />
//       <form action="#" onSubmit={handleSubmit}>
//         <label htmlFor="name">Enter your first name: &nbsp;</label>
//         <input id="first_name" alt="first_name" type="text" />
//         <label htmlFor="name">Enter your last name: &nbsp;</label>
//         <input id="last_name" alt="last_name" type="text" />
//         <label htmlFor="name">Enter your email: &nbsp;</label>
//         <input id="email" alt="email" type="text" />
//         <button type="submit">Submit</button>
//       </form>
//       <section id="user">{user}</section>
//       <br />
//       <br />
//       <form>
//         <button onClick={login}>Login!</button>
//       </form>
//       <br />
//       {/* Tombol e iki dipencet sekali ae, trus dienteni */}
//       <form>
//         <button id="whoAmI" onClick={whoAmI}>
//           Who Am I
//         </button>
//       </form>
//       <section>1. {getPrincipal}</section>
//     </main>
//   );
// }

// export default App;
