import 'animate.css/animate.min.css'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'boxicons/css/boxicons.css'
import 'glightbox/dist/css/glightbox.css'
import 'swiper/css/bundle'
import './style/index.css'
import './style/common.less'
import './style/reset.scss'

import $ from 'jquery'
import 'aos/dist/aos.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'glightbox/dist/js/glightbox.min.js'
import 'isotope-layout/dist/isotope.pkgd.min.js'
import 'swiper/bundle'
import 'waypoints/lib/noframework.waypoints.js'

import './js/main.js'
$(function(){
    $('.title').text('test import').click(function(){
        alert('hello jquery');
    })
})