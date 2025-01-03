<?php
// Sicherstellen, dass die Variablen definiert sind
$search_term = $search_term ?? "Photovoltaik"; // Standardwert
$city = $city ?? "Dorsten"; // Standardwert
$ads = null; // Standardwert

// URL
$url = "https://www.kleinanzeigen.de/s-46286/anbieter:privat/anzeige:gesuche/photovoltaik/k0l1758r100";

// Initialize cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
]);
$response = curl_exec($ch);

if ($response === false) {
    die("cURL Error: " . curl_error($ch));
}
curl_close($ch);

// Parse HTML
libxml_use_internal_errors(true);
$dom = new DOMDocument();
$dom->loadHTML($response);
libxml_clear_errors();
$xpath = new DOMXPath($dom);

// Find ads
$ads = $xpath->query("//article[contains(@class, 'aditem') and not(ancestor::ul[@id='srchrslt-adtable-altads'])]");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anzeigen Galerie</title>
    <style>
        body {
            background: linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d);
            color: #ffffff;
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
        }
        h1 {
            text-align: center;
            color: #f7d51d;
            font-size: 2.5rem;
            margin-bottom: 20px;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        }
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .card {
            background: #2c3e50;
            border-radius: 12px;
            padding: 15px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .card.clicked {
            background: #e74c3c;
        }
        .card img {
            max-width: 100%;
            border-radius: 8px;
            margin-bottom: 15px;
        }
        .card a {
            color: #f7d51d;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.2rem;
        }
        .card a:hover {
            text-decoration: underline;
        }
        .card p {
            color: #ecf0f1;
            font-size: 1rem;
            margin-top: 10px;
        }
    </style>
</head>
<body>

<h1>
    Gefundene Anzeigen für 
    <select id="category-selector" onchange="handleCategoryChange()" style="font-size: 1em; padding: 5px; background: none; color: #f7d51d; border: none; text-decoration: underline; cursor: pointer;">
        <option value="Photovoltaik" selected>Photovoltaik</option>
        <option value="Klimaanlagen">Klimaanlagen</option>
    </select>
</h1>

<script>
    function handleCategoryChange() {
        const selectedCategory = document.getElementById('category-selector').value;

        // Debugging-Ausgabe in der Konsole
        console.log(`Selected category: ${selectedCategory}`);

        // Überprüfen der Auswahl und Weiterleitung
        if (selectedCategory === 'Photovoltaik') {
            console.log("Weiterleitung zu Photovoltaik.php");
            window.location.href = 'Photovoltaik.php'; // Weiterleitung zu Photovoltaik.php
        } else if (selectedCategory === 'Klimaanlagen') {
            console.log("Weiterleitung zu Klima.php");
            window.location.href = 'Klima.php'; // Weiterleitung zu Klima.php
        } else {
            console.log("Unbekannte Kategorie ausgewählt: ", selectedCategory);
        }
    }
</script>

<div class="gallery">
<?php
if ($ads && $ads->length > 0) {
    $index = 0;
    foreach ($ads as $ad) {
        $titleNode = $xpath->query(".//a[contains(@class, 'ellipsis')]", $ad)->item(0);
        $priceNode = $xpath->query(".//p[contains(@class, 'aditem-main--middle--price')]", $ad)->item(0);
        $relativeLinkNode = $xpath->query(".//a[contains(@class, 'ellipsis')]//@href", $ad)->item(0);

        $title = $titleNode ? trim($titleNode->textContent) : "Kein Titel";

        // Überspringe Anzeigen mit "Praktikant", "Verstärkung" oder "Festanstellung"
        if (
            stripos($title, 'Praktikant') !== false || 
            stripos($title, 'Verstärkung') !== false || 
            stripos($title, 'Festanstellung') !== false
        ) {
            continue;
        }

        $price = $priceNode ? trim($priceNode->textContent) : "Kein Preis";
        $relativeLink = $relativeLinkNode ? trim($relativeLinkNode->textContent) : "#";
        $link = "https://www.kleinanzeigen.de" . $relativeLink;

        $imageNode = $xpath->query(".//img[contains(@alt, '" . $title . "')]", $ad)->item(0);
        $imageUrl = $imageNode ? $imageNode->getAttribute('src') : "https://static.kleinanzeigen.de/static/img/common/logo/logo-kleinanzeigen-horizontal.1f2pao1sh7vgo.svg";

        echo "<div class='card' data-index='$index'>";
        echo "<img src='" . htmlspecialchars($imageUrl) . "' alt='Anzeige Bild'>";
        echo "<h3><a href='" . htmlspecialchars($link) . "' target='_blank'>" . htmlspecialchars($title) . "</a></h3>";
        echo "<p><strong>Preis:</strong> " . htmlspecialchars($price) . "</p>";
        echo "</div>";
        $index++;
    }
} else {
    echo "<p>Keine Anzeigen für '" . htmlspecialchars($search_term) . "' in '" . htmlspecialchars($city) . "' gefunden.</p>";
}
?>
</div>

<script>
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    }

    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [key, value] = cookie.trim().split('=');
            if (key === name) return value;
        }
        return null;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card');

        cards.forEach((card, index) => {
            if (getCookie(`card_clicked_${index}`) === 'true') {
                card.classList.add('clicked');
            }

            const link = card.querySelector('a');
            link.addEventListener('click', () => {
                card.classList.add('clicked');
                setCookie(`card_clicked_${index}`, 'true', 7);
            });
        });
    });
</script>

</body>
</html>
