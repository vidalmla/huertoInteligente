//para ignorar el tiemp
const errores = (code) =>
{
	switch (code) {
		case 'auth/email-already-in-use':
			return 'Correo electrónico ya existente';
		case 'auth/invalid-email':
            return 'Formato de correo inválido';
        case 'auth/weak-password':
			return 'la contraseña debe de ser mayor a 6 digitos'
		case 'auth/user-not-found':
			return 'El correo no existe'
		
	}
	
};
export default errores;