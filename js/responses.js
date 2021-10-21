function getBotResponse(input) {
    
    // Simple responses
    if (input == "Hola") {
        return "Hola, en que puedo ayudarte?";
    } else if (input == "Gracias") {
        return "Nos vemos luego!";
    } else if (input == "Emergencia") {
        return "1. Asistencia profesional 2. Llamar al servicio médico";
    }else if (input == "1") {
        return "El veterinario Juan lo atenderá en unos segundos ...";
    }else if (input == "2") {
        alert("Llamando a emergencias ...");
        return "Llamando a emergencias ...";
    }else {
        return "Formule de nuevo la pregunta!";
    }
}