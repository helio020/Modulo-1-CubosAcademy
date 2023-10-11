const comentario = "Esse COVID é muito perigoso!";

function filtrarComentarios(comentario) {
    if (comentario.includes("covid") || comentario.includes("pandemia") || comentario.includes("COVID") || comentario.includes("PANDEMIA")) {
        console.log("Comentário bloqueado por conter palavras proibidas");
    } else {
        console.log("Comentário autorizado");
    }
}
filtrarComentarios(comentario);