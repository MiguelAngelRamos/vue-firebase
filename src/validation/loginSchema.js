export const loginSchema = {
  email(value) {
    if(!value) {
      return 'Este campo es obligatorio!';
    }

    // validar si es un email con formato
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(!regex.test(value)) {
      return 'Email no valido';
    }
    return true;
  },
  password(value) {    
    if(value) return true;
    return 'El password es obligatorio';
  }
}