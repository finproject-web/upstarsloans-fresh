<?php
// Simple PHP server to serve the React app
header('Content-Type: text/html');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Read the main HTML file
$html_content = file_get_contents('index.html');

// Replace the script src to use the built version (if exists) or development version
if (file_exists('dist/index.html')) {
    echo file_get_contents('dist/index.html');
} else {
    // For development, serve the original index.html
    echo $html_content;
}
?>
