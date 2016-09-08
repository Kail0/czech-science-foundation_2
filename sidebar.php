<?php
/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package gacr
 */

if ( ! is_active_sidebar( 'page' ) ) {
	return;
}
?>

<aside id="secondary" class="widget-area col s12 m4 l3" role="complementary">
	<?php dynamic_sidebar( 'page' ); ?>
</aside><!-- #secondary -->