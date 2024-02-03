
import { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Result from './components/Result/Result';

function App() {

  const [dataForm, setDataForm] = useState(null);

  const handleFormSubmit = (data) => {
    setDataForm(data);
  };

  return (
    <>

    <Header />

    <Form onFormSubmit={handleFormSubmit} />
      
    <Result data={ dataForm } />

    </>
  )
}

export default App
