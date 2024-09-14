// Função para realizar a formatação do celular
function formatPhone(input) {
    // Remove qualquer caractere que não seja número
    let value = input.value.replace(/\D/g, '');

    // Aplica a máscara no valor
    if (value.length > 0) {
        value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
    }

    // Define o valor formatado no campo
    input.value = value.substring(0, 15); // Limita o comprimento a 15 caracteres
}

// Função para comparar senhas e ver se está digitada igual
document.getElementById('confirmarSenha').addEventListener('input', function() {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = this.value;
    const senhaError = document.getElementById('senhaError');

    if (confirmarSenha !== senha) {
        senhaError.textContent = 'As senhas não coincidem';
        senhaError.style.color = 'red';
    } else {
        senhaError.textContent = 'As senhas coincidem';
        senhaError.style.color = 'green';
    }
});

// Função do olho para mostrar o password
function togglePassword(fieldId, icon) {
    const field = document.getElementById(fieldId);
    const iconElement = icon.querySelector('i');

    if (field.type === "password") {
        field.type = "text";
        iconElement.classList.remove('fa-eye');
        iconElement.classList.add('fa-eye-slash');
    } else {
        field.type = "password";
        iconElement.classList.remove('fa-eye-slash');
        iconElement.classList.add('fa-eye');
    }
}
// Função que verifica em tempo real se o usuário está atendendo os requisitos de senha.
document.getElementById('senha').addEventListener('input', function() {
    const password = this.value;

    // Requisitos
    const lengthRequirement = password.length >= 12;
    const uppercaseRequirement = /[A-Z]/.test(password);
    const lowercaseRequirement = /[a-z]/.test(password);
    const numberRequirement = /[0-9]/.test(password);
    const specialCharRequirement = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const noEmailRequirement = !/\S+@\S+\.\S+/.test(password);

    // Atualiza a interface com as validações
    document.getElementById('length').classList.toggle('text-success', lengthRequirement);
    document.getElementById('length').classList.toggle('text-danger', !lengthRequirement);

    document.getElementById('uppercase').classList.toggle('text-success', uppercaseRequirement);
    document.getElementById('uppercase').classList.toggle('text-danger', !uppercaseRequirement);

    document.getElementById('lowercase').classList.toggle('text-success', lowercaseRequirement);
    document.getElementById('lowercase').classList.toggle('text-danger', !lowercaseRequirement);

    document.getElementById('number').classList.toggle('text-success', numberRequirement);
    document.getElementById('number').classList.toggle('text-danger', !numberRequirement);

    document.getElementById('specialChar').classList.toggle('text-success', specialCharRequirement);
    document.getElementById('specialChar').classList.toggle('text-danger', !specialCharRequirement);

    document.getElementById('noEmail').classList.toggle('text-success', noEmailRequirement);
    document.getElementById('noEmail').classList.toggle('text-danger', !noEmailRequirement);
});