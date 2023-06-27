<<<<<<< HEAD
import { useState } from "react";
=======
import { useState, useContext } from "react";

import ServiceContext from "../contexts/ServiceContext";

>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d

function Form() {

    const defaultFormValues = {
        id: 0,
        type: "",
        time: ""
    };

    const [form, setForm] = useState(defaultFormValues);

<<<<<<< HEAD
=======
    const { services, dispatch } = useContext(ServiceContext);


>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
    const handleCreateService = (event) => {
        event.preventDefault();

        if (form.type && form.time) {

            const newService = {
                id: Date.now(),
                type: form.type,
                time: form.time
            };

<<<<<<< HEAD
            console.log(newService);
=======
            dispatch(
                {
                    type: "ADD_SERVICE",
                    payload: [newService, ...services]
                }
            );
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d

            setForm(defaultFormValues);

        } else {
            alert("Verifique os dados do seu atendimento!")
        }
    }

    return (
        <form>

            <div>
                <label htmlFor="">Descrição</label>
                <br />
                <input
                    type="text"
                    value={form.type}
                    onChange={event => setForm({ ...form, type: event.target.value })}
                />
            </div>

            <br />

            <div>
                <label htmlFor="">Tempo estimado</label>
                <br />
                <input
                    type="text"
                    value={form.time}
                    onChange={event => setForm({ ...form, time: event.target.value })}
                />
            </div>

            <button onClick={handleCreateService}>Salvar</button>

        </form>
    );
}

export default Form;