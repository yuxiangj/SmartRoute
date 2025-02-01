document.addEventListener("DOMContentLoaded", function() {
    // Check if the language is stored in localStorage, otherwise set it to "english" by default
    let storedLanguage = localStorage.getItem("language") || "english"; 

    // Set the language on page load
    changeLanguage(storedLanguage);
});

function changeLanguage(language) {
    // Store the selected language
    localStorage.setItem("language", language);

    // Update the next buttons on index.html
    if (language === "english") {
        updateNextButtonText("Who are we?", "Product", "News", "Support", "FAQ");
    } else if (language === "spanish") {
        updateNextButtonText("¿Quiénes somos?", "Producto", "Noticias", "Soporte", "FAQ");
    } else if (language === "catalan") {
        updateNextButtonText("Qui som?", "Producte", "Notícies", "Suport", "FAQ");
    }

    // If we are on intro.html, update its content
    changeIntroText(language);
    
    // If we are on !disponible.html, update its description content
    changeDescriptionText(language);
}

function updateNextButtonText(itext0, itext1, itext2, itext3, itext4) {
    document.getElementById("0").innerText = itext0;
    document.getElementById("1").innerText = itext1;
    document.getElementById("2").innerText = itext2;
    document.getElementById("3").innerText = itext3;
    document.getElementById("4").innerText = itext4;
}

// Function to update the text in intro.html
function changeIntroText(language) {
    if (document.getElementById("title")) {
        if (language === "english") {
            document.getElementById("title").innerText = "SmartRoute Technologies";
            document.getElementById("slogan").innerText = "The path your company needs";
            document.getElementById("description").innerText = "We are UPF students. The company was born with the idea of improving efficiency in transportation and logistics companies.";
        } else if (language === "spanish") {
            document.getElementById("title").innerText = "SmartRoute Technologies";
            document.getElementById("slogan").innerText = "El camino que tu empresa necesita";
            document.getElementById("description").innerText = "Somos estudiantes de la UPF. La empresa nació con la idea de mejorar la eficiencia de las empresas de transporte y logística.";
        } else if (language === "catalan") {
            document.getElementById("title").innerText = "SmartRoute Technologies";
            document.getElementById("slogan").innerText = "El camí que la teva empresa necessita";
            document.getElementById("description").innerText = "Som estudiants de la UPF. L'empresa va néixer amb la idea de millorar l'eficiència de les empreses de transport i logística.";
        }
    }
}

// Function to update the text in !disponible.html
function changeDescriptionText(language) {
    if (document.getElementById("description")) {
        if (language === "english") {
            document.getElementById("description").innerText = "Information not available yet";
        } else if (language === "spanish") {
            document.getElementById("description").innerText = "Información aún no disponible";
        } else if (language === "catalan") {
            document.getElementById("description").innerText = "Informació encara no disponible";
        }
    }
}


