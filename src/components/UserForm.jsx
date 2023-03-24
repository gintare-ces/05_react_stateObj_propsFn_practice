import { useState } from "react";
import Btn from "./ui/Btn"


function UserForm() {
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        town: '',
        age: '',
        height: '',
    })
    const [formSent, setFormSent] = useState(false)
    const [currentStep, setCurrentStep] = useState(1)

    function handleFormSubmit(e) {
        // perimti formos valdyma ir neleisti perkrauti
        e.preventDefault()
        console.log('handleFormSubmit ===');
        setFormSent(true);
        setCurrentStep(2)
    }

    // function handleFirstNameInput(e) {
    //     // teisingas budas atnaujinti state kai jis yra objektinis
    //     setInputs({ ...inputs, firstName : e.target.value})
    //     // inputs.firstName = '';
    // }
    // function handleLastNameInput(e) {
    //      // teisingas budas atnaujinti state kai jis yra objektinis
    //     setInputs({ ...inputs, lastName : e.target.value})
    //     // inputs.lastName = ''
    // }

    function handleInput(e) {
        const field = e.target.name;
        const value = e.target.value;
        console.log('field ===', field);
        console.log('value ===', value);
        setInputs({...inputs, [field]: value})

    }
    // function handleBtnClick() {
    //     console.log('paspaudei');
    // }
  return (
    <div>
        <h2>UserForm</h2>
        {currentStep === 1 && (
        <form onSubmit={handleFormSubmit}>
            <input value={inputs.firstName} onChange={handleInput} type="text" name="firstName" placeholder="First Name" />
            <input value={inputs.lastName} onChange={handleInput} type="text" name="lastName" placeholder="Last Name" />
            <input value={inputs.town} onChange={handleInput} type="text" name="town" placeholder="Town" />
            <input value={inputs.age} onChange={handleInput} type="number" name="age" placeholder="Age" />
            <input value={inputs.height} onChange={handleInput} type="number" name="height" placeholder="Height" />
            <Btn submit >Add</Btn>
        </form>
        )}
        {currentStep === 2 && (
        <div className="formSuccess">
        <h2>Patikrinkite duomenis</h2>
        <p>
            Name: <span>{inputs.firstName}</span> <br />
            Lastname: <span>{inputs.lastName}</span> <br />
            Town: <span>{inputs.town}</span> <br />
            Age: <span>{inputs.age}</span> <br />
            Height: <span>{inputs.height}</span>
            </p>
            <Btn onClick={() => setCurrentStep(1)}>Go back</Btn>
            <Btn onClick={() => setCurrentStep(3)}>Siusti</Btn>
        </div>
        )}
        {currentStep === 3 && <div>Forma issiusta</div>}
    </div>
  )
}

export default UserForm

// supildzius ir pateikus forma, forma paslepiam
// rodom html kortele su visais uzpildytais duomenimis
// prideti mygtuka 'back' atgal parodytu forma ir pasleptu kortele

