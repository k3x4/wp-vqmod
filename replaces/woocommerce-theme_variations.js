$( document ).on( 'found_variation', '.variations_form', function(event, variation) {

    if (typeof variation == 'undefined') {
        return;
    }

    if (typeof variation.image_src == 'undefined') {
        return;
    }

    var $product       = $(this).closest( '.product, .product-col' ),
        $image_slider  = $product.find('.product-image-slider'),
        $thumbs_slider = $product.find('.product-thumbs-slider'),
        links;

    var $imageItems =  $image_slider.find('.owl-item');
    var cloned = $image_slider.find('.owl-item.cloned').length / 2;
    var variationImgIndex = 0;
    $image_slider.find('.owl-item:not(.cloned) img').each(function() {
        if($(this).attr('src') === variation.image_src){
            variationImgIndex = $imageItems.index($(this).closest('.owl-item')) - cloned;
            return;
        }
    });

    if ($image_slider.length) {
        $image_slider.trigger('to.owl.carousel', [variationImgIndex, 1, true]);
        // links = $image_slider.data('links');
    }
    if ($thumbs_slider.length) {
        $thumbs_slider.trigger('to.owl.carousel', [variationImgIndex, 1, true]);
        $thumbs_slider.find('.owl-item:eq(' + variationImgIndex + ')').click();
    }
    
    

    // var $shop_single_image     = $product.find( 'div.product-images .woocommerce-main-image' ).length ? $product.find( 'div.product-images .woocommerce-main-image' ) : $('.single-product div.product-images .woocommerce-main-image'),
    //     productimage           =  $shop_single_image.attr('data-o_src'),
    //     imagetitle             =  $shop_single_image.attr('data-o_title'),
    //     imagehref              =  $shop_single_image.attr('data-o_href'),
    //     $shop_thumb_image = $product.find( '.woocommerce-main-thumb'),
    //     thumbimage   =  $shop_thumb_image.attr('data-o_src'),
    //     variation_image = variation.image_src,
    //     variation_link = variation.image_link,
    //     variation_title = variation.image_title,
    //     variation_thumb = variation.image_thumb;

    // if ( $product.hasClass('product-col') ) { // shop pages
    //     $shop_single_image = $product.find( 'div.product-image .inner img:first-child' );
    //     variation_image = variation.image.thumb_src;
    // }

    // if ( ! productimage ) {
    //     productimage = $shop_single_image.attr('data-oi') ? $shop_single_image.attr('data-oi') : ( ( ! $shop_single_image.attr('src') ) ? '' : $shop_single_image.attr('src') );
    //     $shop_single_image.attr('data-o_src', productimage );
    // }

    // if ( ! imagehref ) {
    //     imagehref = ( ! $shop_single_image.attr('href') ) ? '' : $shop_single_image.attr('href');
    //     $shop_single_image.attr('data-o_href', imagehref );
    // }

    // if ( ! imagetitle ) {
    //     imagetitle = ( ! $shop_single_image.attr('alt') ) ? '' : $shop_single_image.attr('alt');
    //     $shop_single_image.attr('data-o_title', imagetitle );
    // }

    // if ( ! thumbimage ) {
    //     thumbimage = $shop_thumb_image.attr('data-oi') ? $shop_thumb_image.attr('data-oi') : ( ( ! $shop_thumb_image.attr('src') ) ? '' : $shop_thumb_image.attr('src') );
    //     $shop_thumb_image.attr('data-o_src', thumbimage );
    // }

    // if ( variation_image ) {
    //     $shop_single_image.attr( 'src', variation_image );
    //     $shop_single_image.attr( 'srcset', '' );
    //     $shop_single_image.attr( 'alt', variation_title );
    //     $shop_single_image.attr( 'href', variation_link );
    //     $shop_thumb_image.attr( 'src', variation_thumb );
    //     if (theme.product_image_popup && typeof links != 'undefined') {
    //         links[0].src = variation_link;
    //         links[0].title = variation_title;
    //     }
    // } else {
    //     $shop_single_image.attr( 'src', productimage );
    //     $shop_single_image.attr( 'srcset', '' );
    //     $shop_single_image.attr( 'alt', imagetitle );
    //     $shop_single_image.attr( 'href', imagehref );
    //     $shop_thumb_image.attr( 'src', thumbimage );
    //     if (theme.product_image_popup && typeof links != 'undefined') {
    //         links[0].src = imagehref;
    //         links[0].title = imagetitle;
    //     }
    // }
    // $shop_single_image.each(function() {
    //     var elevateZoom = $(this).data('elevateZoom');
    //     if (typeof elevateZoom != 'undefined') {
    //         elevateZoom.swaptheimage($(this).attr( 'src' ), $(this).attr( 'src' ));
    //     }
    // });
});