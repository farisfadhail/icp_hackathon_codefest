import { useState } from 'react';
import { icp_hackathon_codefest_backend } from 'declarations/icp_hackathon_codefest_backend';

function App() {
  const [user, setUser] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const first_name = event.target.elements.first_name.value;
    const last_name = event.target.elements.last_name.value;
    const email = event.target.elements.email.value;
    icp_hackathon_codefest_backend.register({first_name:first_name,last_name:last_name,email:email}).then((user) => {
      if(user.err){
        setUser(user.err);
      }else{
        setUser("User registered successfully!");
      }
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your first name: &nbsp;</label>
        <input id="first_name" alt="first_name" type="text" />
        <label htmlFor="name">Enter your last name: &nbsp;</label>
        <input id="last_name" alt="last_name" type="text" />
        <label htmlFor="name">Enter your email: &nbsp;</label>
        <input id="email" alt="email" type="text" />
        <button type="submit">Submit</button>
      </form>
      <section id="user">{user}</section>
    </main>
  );
}

export default App;
