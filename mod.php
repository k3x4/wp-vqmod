<?php

use MatthiasMullie\Minify;

class k3x4mod{

    public function __construct(){
        add_action('wp_enqueue_scripts', [$this, 'portoScripts'], 9999);

        if(isset($_GET['k3x4mod'])){
            $this->woocommerceTheme();
        }
    }

    public function portoScripts(){
        wp_dequeue_script('porto-woocommerce-theme');
        wp_enqueue_script( 'porto-woocommerce-theme-k3x4', CHILD_THEME_URL . '/mod/export/woocommerce-theme.min.js', array( 'porto-theme' ), '1.0', true );
    }

    ////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////

    public function woocommerceTheme(){
        $text = file_get_contents(PORTO_THEME_DIR . '/js/woocommerce-theme.js');

        $text = $this->woocommerceThemeVariations($text);

        file_put_contents(CHILD_THEME_DIR . '/mod/export/woocommerce-theme.js', $text);
        $minifier = new Minify\JS(CHILD_THEME_DIR . '/mod/export/woocommerce-theme.js');
        $minifier->minify(CHILD_THEME_DIR . '/mod/export/woocommerce-theme.min.js');
    }

    public function woocommerceThemeVariations($text){
        $start = preg_quote("$( document ).on( 'found_variation', '.variations_form', function(event, variation) {");
        $end = "\}\);\s+\}\);";

        $pattern = '#' . $start . '.*?' . $end . '#ms';
        $replace = file_get_contents(CHILD_THEME_DIR . '/mod/replaces/woocommerce-theme_variations.js');

        $text = preg_replace($pattern, $replace, $text);

        return $text;
    }

}

new k3x4mod;