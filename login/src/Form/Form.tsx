/* import { useState } from 'react';

const Form = function () {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState('');

  async function submit(event) {
    event.preventDefault();

    const { login } = event.target;
    const { senha } = event.target;

    const code = login.value;
    const password = senha.value;
    const data = { code: code, password: password };

    const response = await fetch(`http://20.114.88.181:8080`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });
    console.log(response);
    if (response.status !== 200) {
      const json = await response.json();
      setError(String(json.error));
    } else {
      setError('');
      const json = await response.json();
      setUserData(json);
    }
  }

  return (
    <>
      <form className='input w-24' onSubmit={submit}>
        <input className='input w-40' name="login" type="text" placeholder='login' />
        <input name="senha" type="text" placeholder='senha' />
        <button className="button w-8 neum-grey text-primaryColor text-sm" type='submit'>Submit</button>
      </form>

      {
        error ? (
          <h1>{error}</h1>
        ) : (
          <div>
            <h1>{userData?.code}</h1>
            <h1>{userData.name}</h1>
            <h1>{userData?.color?.name}</h1>
          </div>
        )
      }
    </>
  );
};

export default Form; */