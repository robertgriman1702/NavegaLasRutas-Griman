import React from 'react'

const FormCheckout = ({dataform, sendOrder, handleChange}) => {
  return (
    <div>
      <form onSubmit={sendOrder} className="form">
        <div>
          <label className="label">nombre completo</label>
          <input type="text" name="fullname" value={dataform.fullname} onChange={handleChange}/>
        </div>
                <div>
          <label className="label">Correo electronico</label>
          <input type="email" name="email" value={dataform.email} onChange={handleChange}/>
        </div>

        <div>
          <label className="label">Numero de telefono</label>
          <input type="tel" name="phone" value={dataform.phone} onChange={handleChange}/>
        </div>     

        <button type="submit">enviar orden</button>
      </form>
    </div>
  )
}

export default FormCheckout
