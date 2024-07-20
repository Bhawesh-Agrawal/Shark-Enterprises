import logo from './Logo.jpg'
import banner1 from './banner-1.png'
import Blister_Pack_black_10 from './Pentonic-product/Blister Pack 10 color.png'
import Pentonic_5_vibrant_color from './Pentonic-product/Pentonic 5 color ball pen.png'
import Pentonic_10_color from './Pentonic-product/Pentonic 10 color.png'
import Pentonic_B_Rt from './Pentonic-product/Pentonic B-Rt.png'
import Pentonic_Ball from './Pentonic-product/Pentonic Ball.png'
import Pentonic_Frost_Ball from './Pentonic-product/Pentonic Frost Ball.png'
import Pentonic_Frost_Gel from './Pentonic-product/Pentonic Frost Gel.png'
import Pentonic_Gel from './Pentonic-product/Pentonic Gel.png'
import No_10_pin from './Kangaroo-product/No-10 Pin.png'
import No_10_stapler from './Kangaroo-product/No.10 stapler.png'
import stapler_el_10f from './Kangaroo-product/stapler el-10f_1.png'
import stapler_hd_45l from './Kangaroo-product/stapler hd-45l.png'
import stapler_hd_b8_1 from './Kangaroo-product/stapler hd-b8_1.png'
import monami_marker from './Monami/Pen marker.png'
import Pilot_V5 from './Pilot/Pilot V5.png'
import Pilot_V7 from './Pilot/Pilot V7.png'

import pentonic_logo from './logo/pentonic logo.png'
import monami_logo from './logo/monami logo.png'
import kangaroo_logo from './logo/Kangaroo logo .png'
import pilot_logo from './logo/Pilot logo.png'

import hamburger from './hamburger.png'

import plus from './plus.png'
import minus from './minus.png'

import cross from './close.png'

import cart from './cart.png'

import dustbin from './dustbin.png'

import user from './user.png'

import shopping from './shopping.png'

import pencil from "./pencil.png"

import transparent from "./transparent.png"


export const assets = {
    logo,
    banner1,
    Blister_Pack_black_10,
    Pentonic_5_vibrant_color,
    Pentonic_10_color,
    Pentonic_B_Rt,
    Pentonic_Ball,
    Pentonic_Frost_Ball,
    Pentonic_Frost_Gel,
    Pentonic_Gel,
    No_10_pin,
    No_10_stapler,
    stapler_el_10f,
    stapler_hd_45l,
    stapler_hd_b8_1,
    monami_marker,
    Pilot_V5,
    Pilot_V7,
    hamburger,
    plus,
    minus,
    cross,
    cart,
    dustbin,
    user,
    shopping,
    pencil,
    transparent
}

export const brand_logo = [
    {logo_img:pentonic_logo},
    {logo_img:monami_logo},
    {logo_img:kangaroo_logo},
    {logo_img:pilot_logo},
]

export const product_detail = [
    {
        _id : "1",
        name : "Pentonic Gel Pen 0.7mm",
        image : Pentonic_Gel,
        price : 15,
        description : "0.7 mm Gel Pen with smooth writing | available color black & blue | modern design | hand friendly | made with reliable material with modern technology",
        company : "Pentonic",
        type : 'Pen'
    },
    {
        _id : "2",
        name : "Pentonic Ball Pen 0.7mm",
        image : Pentonic_Ball,
        price : 10,
        description : "0.7 mm Ball Pen with smooth writing | available color black, blue & red | modern design | hand friendly | made with reliable material with modern technology",
        company : "Pentonic",
        type : 'Pen'

    },
    {
        _id : "3",
        name : "Pentonic Frost Gel Pen 0.7mm",
        image : Pentonic_Frost_Gel,
        price : 18,
        description : "0.7 mm Frost Gel Pen with smooth writing | available color blue | modern design | hand friendly | made with reliable material with modern technology",
        company : "Pentonic",
        type : 'Pen'
    },
    {
        _id : "4",
        name : "Pentonic Frost Ball Pen 0.7mm",
        image : Pentonic_Frost_Ball,
        price : 18,
        description : "0.7 mm Forst Ball Pen with smooth writing | available color black,blue & red | modern design | hand friendly | made with reliable material with modern technology",
        company : "Pentonic",
        type : "Pen"
    },
    {
        _id : "5",
        name : "Pentonic B-Rt 0.7mm clickable",
        image : Pentonic_B_Rt,
        price : 25,
        description : "0.7 mm Ball Pen with smooth writing | available color black & blue | switch design | modern design | hand friendly | made with reliable material with modern technology",
        company : "Pentonic",
        type : "Pen"
    },
    {
        _id : "6",
        name : "Pentonic Blister Pack Ball Pen 0.7mm",
        image : Blister_Pack_black_10,
        price : 140,
        description : "0.7 mm Ball Pen with smooth writing | available color black | 10cs availble | modern design | hand friendly | made with reliable material with modern technology",
        company : "Pentonic",
        type : "Pen"
    },
    {
        _id : "7",
        name : "Pentonic 5 vibrant color Gel Pen 0.7mm",
        image : Pentonic_5_vibrant_color,
        price : 140,
        description : "0.7 mm Gel Pen with smooth writing | available color blue | vibrant color pink, blue, black, red, green | modern design | hand friendly | made with reliable material with modern technology",
        company : "Pentonic",
        type : "Pen"
    },
    {
        _id : "8",
        name : "Pentonic Multi color Ball Pen 0.7mm",
        image : Pentonic_10_color,
        price : 150,
        description : "0.7 mm Ball Pen with smooth writing | 10 Assorted color | modern design | hand friendly | made with reliable material with modern technology",
        company : "Pentonic",
        type : "Pen"
    },
    {
        _id : "9",
        name : "Kangaroo Blue No-10 pin",
        image : No_10_pin,
        price : 20,
        description : "Reliable Material | High Quality | Durable | Strong",
        company : "Kangaroo",
        type : "Stapler Pin"
    },
    {
        _id : "10",
        name : "Kangaroo No-10 Stapler",
        image : No_10_stapler,
        price : 50,
        description : "Reliable Material | High Quality | Smooth in using | Durable | Strong",
        company : "Kangaroo",
        type : "Stapler"
    },
    {
        _id : "11",
        name : "Kangaroo El-10f Stapler",
        image : stapler_el_10f,
        price : 250,
        description : "Reliable Material | High Quality | Smooth in using | Durable | Strong",
        company : "Kangaroo",
        type : "Stapler"
    },
    {
        _id : "12",
        name : "Kangaroo Hd-45l Stapler",
        image : stapler_hd_45l,
        price : 200,
        description : "Reliable Material | High Quality | Smooth in using | Durable | Strong",
        company : "Kangaroo",
        type : "Stapler"

    },
    {
        _id : "13",
        name : "Kangaroo Hd-b8 Stapler",
        image : stapler_hd_b8_1,
        price : 150,
        description : "Reliable Material | High Quality | Smooth in using | Durable | Strong",
        company : "Kangaroo",
        type:"Stapler"

    },
    {
        _id : "14",
        name : "Monami Pen Marker 0.5mm",
        image : monami_marker,
        price : 50,
        description : "Smooth Writing | Color available blue, black & red | No overflow | Long lasting ing | Reliable Material | High Quality | Durable | Strong",
        company : "Monami",
        type : "Marker"
    },
    {
        _id : "15",
        name : "Pilot V5",
        image : Pilot_V5,
        price : 120,
        description : "Smooth Writing | Color available blue, black & red | No overflow | Long lasting ing | Reliable Material | High Quality | Durable | Strong",
        company : "Pilot",
        type : "Pen"
    },
    {
        _id : "16",
        name : "Pilot V7",
        image : Pilot_V7,
        price : 120,
        description : "Smooth Writing | Color available blue, black & red | No overflow | Long lasting ing | Reliable Material | High Quality | Durable | Strongg",
        company : "Pilot",
        type : "Pen"
    },

]
