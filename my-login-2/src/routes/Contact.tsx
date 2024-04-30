import DefaultLayout from "../layout/DefaultLayout";
export default function Contact() {
    return (
        <DefaultLayout>
            <form className="form">
                <h1>Contact:</h1>
                <label>Nombre</label>
                <input type="text" />

                <label>Apellido</label>
                <input type="text" />

                <label>Email</label>
                <input type="text" />

                <label>Telefono</label>
                <input type="text" />

                <label>Mensaje</label>
                <input type="text" />

                <button type="button">Enviar</button>
            </form>
        </DefaultLayout>
    )
}