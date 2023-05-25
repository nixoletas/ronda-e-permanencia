import { useState, useEffect } from 'react';
import Dialog from './Dialog.jsx';

export default function App() {
  const [p1, setp1] = useState('');
  const [p2, setp2] = useState('');
  const [pl, setpl] = useState('');
  const [plantao, setplantao] = useState('');

  const [senha, setsenha] = useState('');
  const [contrassenha, setcontrassenha] = useState('');

  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });

  const handleChange1 = (event) => {
    const value = event.target.value;
    setp1(value);
    localStorage.setItem('p1', value);
  };

  const handleChange2 = (event) => {
    const value = event.target.value;
    setp2(value);
    localStorage.setItem('p2', value);
  };

  const handleChange3 = (event) => {
    const value = event.target.value;
    setpl(value);
    localStorage.setItem('pl', value);
  };

  const handleChange4 = (event) => {
    const value = event.target.value;
    setplantao(value);
    localStorage.setItem('plantao', value);
  };
  const handleChange5 = (event) => {
    const value = event.target.value;
    setsenha(value);
    localStorage.setItem('senha', value);
  };
  const handleChange6 = (event) => {
    const value = event.target.value;
    setcontrassenha(value);
    localStorage.setItem('contrassenha', value);
  };

  useEffect(() => {
    const storedp1 = localStorage.getItem('p1');
    if (storedp1) {
      setp1(storedp1);
    }

    const storedp2 = localStorage.getItem('p2');
    if (storedp2) {
      setp2(storedp2);
    }

    const storedpl = localStorage.getItem('pl');
    if (storedpl) {
      setpl(storedpl);
    }

    const storedplantao = localStorage.getItem('plantao');
    if (storedplantao) {
      setplantao(storedplantao);
    }

    const storedsenha = localStorage.getItem('senha');
    if (storedsenha) {
      setsenha(storedsenha);
    }

    const storedcontrassenha = localStorage.getItem('contrassenha');
    if (storedcontrassenha) {
      setcontrassenha(storedcontrassenha);
    }

  }, []);

  const handleClearStorage = () => {
    setDialog({
      message: "Certeza?",
      isLoading: true,
    });
  };

  return (
    <>
    <header className='senha-contrassenha'>
      <div className='senha-contrassenha__container'>
        <input type='text' value={senha} onChange={handleChange5} id='senha' required="required" placeholder='senha'/>
        <input type='text' value={contrassenha} onChange={handleChange6} id='contrassenha' required="required" placeholder='contrassenha'/>
      </div>
    </header>
    <div className='card'>
      <div className='input-div'>
      <input type="text" value={p1} required="required" onChange={handleChange1} />
      <span> P1 </span>
      </div>
      <div className='input-div'>
      <input type="text" value={p2} required="required" onChange={handleChange2} />
      <span> P2 </span>
      </div>
      <div className='input-div'>
      <input type="text" value={pl} required="required" onChange={handleChange3} />
      <span> PL </span>
      </div>
      <div className='input-div'>
      <input type="text" value={plantao} required="required" onChange={handleChange4} />
      <span> Plantão </span>
      </div>

      <button onClick={handleClearStorage}>limpar</button>
    </div>
    {dialog.isLoading && <Dialog/>}
    </>
  );
}
