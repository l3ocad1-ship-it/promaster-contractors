<?php
/**
 * enviar.php — Pro Master Contractors
 * Recibe los datos del formulario de contacto y los envía por correo.
 * Funciona en Hostinger (PHP). El visitante nunca sale de la página (se llama vía AJAX).
 */

// --- Cabeceras de respuesta (siempre JSON) ---
header("Content-Type: application/json; charset=UTF-8");

// Solo aceptar POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido"]);
    exit;
}

// --- Configuración ---
$destinatario = "mycarpetclean@promastercontractors.com";
$asunto_base  = "Nueva solicitud desde la web - Pro Master Contractors";

// --- Leer y limpiar los datos del formulario ---
function limpiar($valor) {
    return trim(htmlspecialchars(strip_tags($valor ?? "")));
}

$nombre   = limpiar($_POST["name"]    ?? "");
$email    = limpiar($_POST["email"]   ?? "");
$telefono = limpiar($_POST["phone"]   ?? "");
$servicio = limpiar($_POST["service"] ?? "");
$mensaje  = limpiar($_POST["message"] ?? "");

// --- Validación básica ---
if ($nombre === "" || $email === "" || $mensaje === "") {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Faltan campos obligatorios"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Correo electrónico inválido"]);
    exit;
}

// --- Armar el cuerpo del correo ---
$cuerpo  = "Has recibido una nueva solicitud desde el sitio web:\n\n";
$cuerpo .= "Nombre:    " . $nombre . "\n";
$cuerpo .= "Correo:    " . $email . "\n";
$cuerpo .= "Teléfono:  " . ($telefono !== "" ? $telefono : "No proporcionado") . "\n";
$cuerpo .= "Servicio:  " . ($servicio !== "" ? $servicio : "No especificado") . "\n";
$cuerpo .= "\nMensaje:\n" . $mensaje . "\n";

// --- Cabeceras del correo ---
// IMPORTANTE: el "From" debe ser del mismo dominio para que Hostinger no lo rechace.
$headers  = "From: Pro Master Web <mycarpetclean@promastercontractors.com>\r\n";
$headers .= "Reply-To: " . $nombre . " <" . $email . ">\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// --- Enviar ---
$enviado = mail($destinatario, $asunto_base, $cuerpo, $headers);

if ($enviado) {
    echo json_encode(["success" => true, "message" => "Mensaje enviado correctamente"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "No se pudo enviar el mensaje"]);
}
