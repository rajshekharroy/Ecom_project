import logo from './logo/logo.png'
import logo_white from './logo/logo_white.png'
import phone from './logo/phone.jpg'
import laptop from './logo/laptop.jpg'
import smartwatch from './logo/smartwatch.jpg'
import camera from './logo/camera.jpg'
import apple_logo from './logo/apple_logo.png'
import samsung_logo from './logo/samsung_logo.png'
import asus_logo from './logo/asus_logo.png'
import oneplus_logo  from './logo/oneplus_logo.png'
import realme_logo from  './logo/realme_logo.png'
import msi_logo from  './logo/msi_logo.png'
import canon_logo from  './logo/canon_logo.png'
import nikon_logo from './logo/nikon_logo.png'
import cart_icon from './logo/cart.png'
import search_icon from './logo/search.png'
import minus from './logo/minus.png'
import plus from './logo/plus.png'

//social_icons

import facebook_icon from './social_icons/facebook_icon.png'
import twitter_icon from './social_icons/twitter_icon.png'
import linkedin_icon from './social_icons/linkedin_icon.png'


//apple_phones

import apple1 from './apple/iphone_14.jpg'
import apple2 from './apple/iphone_14_plus.jpg'
import apple3 from './apple/iphone_15.jpg'
import apple4 from './apple/iphone_15_plus.jpg'
import apple5 from './apple/iphone_15pro.jpg'
import apple6 from './apple/iphone_15pro_max.jpg'

//samsung_phones

import samsung1 from './samsung/samsung_s23_ultra.jpg'
import samsung2 from './samsung/samsung_s24.jpg'
import samsung3 from './samsung/samsung_s24_plus.jpg'
import samsung4 from './samsung/samsung_s24_ultra.jpg'
import samsung5 from './samsung/samsung_z_flip5.jpg'
import samsung6 from './samsung/samsung_z_fold5.jpg'

//oneplus_phones

import oneplus1 from './oneplus/oneplus_11r.jpg'
import oneplus2 from './oneplus/oneplus_12.jpg'
import oneplus3 from './oneplus/oneplus_12r.jpg'
import oneplus4 from './oneplus/oneplus_nord_ce3.jpg'
import oneplus5 from './oneplus/oneplus_nord3.jpg'

//realme_phones

import realme1 from './realme/realme_12.jpg'
import realme2 from './realme/realme_12pro.jpg'
import realme3 from './realme/realme_narzo_60.jpg'
import realme4 from './realme/realme_narzo_60x.jpg'
import realme5 from './realme/realme_narzo_70pro.jpg'
import realme6 from './realme/realme_narzo_n53.jpg'

//apple_watch

import applew1 from './apple_watch/apple_watch_7.jpg'
import applew2 from './apple_watch/apple_watch_8.jpg'
import applew3 from './apple_watch/apple_watch_9.jpg'
import applew4 from './apple_watch/apple_watch_se.jpg'
import applew5 from './apple_watch/apple_watch_ultra.jpg'
import applew6 from './apple_watch/apple_watch_ultra2.jpg'


//samsung_watch

import samsungw1 from './samsung_watch/galaxy_watch_4.jpg'
import samsungw2 from './samsung_watch/galaxy_watch_4_classic.jpg'
import samsungw3 from './samsung_watch/galaxy_watch_5.jpg'
import samsungw4 from './samsung_watch/galaxy_watch_5_pro.jpg'
import samsungw5 from './samsung_watch/galaxy_watch_6.jpg'
import samsungw6 from './samsung_watch/galaxy_watch_6_classic.jpg'

//amazfit_watch

import amazfit1 from './amazfit_watch/amazefit_gtr3.jpg'
import amazfit2 from './amazfit_watch/amazefit_gts4.jpg'
import amazfit3 from './amazfit_watch/amazfit_gtr2.jpg'
import amazfit4 from './amazfit_watch/amazfit_gtr3_pro.jpg'
import amazfit5 from './amazfit_watch/amazfit_t_rex2.jpg'

//macbook

import mac1 from './macbook/apple_macbook_air_13inch.jpg'
import mac2 from './macbook/apple_macbook_air_15inch.jpg'
import mac3 from './macbook/apple_macbook_pro_14inch.jpg'
import mac4 from './macbook/apple_macbook_pro_16inch.jpg'

//asus_laptop

import asus1 from './asus_laptop/asus_gaming_f15.jpg'
import asus2 from './asus_laptop/asus_vivobook_16x.jpg'
import asus3 from './asus_laptop/asus_vivobook_go15.jpg'
import asus4 from './asus_laptop/asus_vivobook_s15.jpg'
import asus5 from './asus_laptop/asus_zenbook14.jpg'

//msi_laptop

import msi1 from './msi/msi_cyborg15.jpg'
import msi2 from './msi/msi_gl63.jpg'
import msi3 from './msi/msi_katana15.jpg'
import msi4 from './msi/msi_modern14.jpg'
import msi5 from './msi/msi_sword15.jpg'

//canon_camera

import canon1 from './canon/eos_90d.jpg';
import canon2 from './canon/eos_200d.jpg';
import canon3 from './canon/eos_r7.jpg';
import canon4 from './canon/eos_r10.jpg';
import canon5 from './canon/eos_r50.jpg';


//nikon_camera

import nikon1 from './nikon/nikon_coolpix_p950.jpg';
import nikon2 from './nikon/nikon_d7500.jpg';
import nikon3 from './nikon/nikon_gr_iiix.jpg';
import nikon4 from './nikon/nikon_mirrorless_zfc.jpg';
import nikon5 from './nikon/nikon_z6_ii.jpg';
import nikon6 from './nikon/nikon_z50.jpg';


export const datas = {
    logo,
    phone,
    laptop,
    smartwatch,
    camera,
    facebook_icon,
    twitter_icon,
    linkedin_icon,
    logo_white,
    cart_icon,
    search_icon,
    minus,
    plus
}

export const brands = [
    {
        brand_name: "Apple",
        brand_image: apple_logo
    },
    {
        brand_name: "Samsung",
        brand_image: samsung_logo
    },
    {
        brand_name: "Asus",
        brand_image: asus_logo
    },
    {
        brand_name: "OnePlus",
        brand_image: oneplus_logo
    },
    {
        brand_name: "Realme",
        brand_image: realme_logo
    },
    {
        brand_name: "MSI",
        brand_image: msi_logo
    },
    {
        brand_name: "Canon",
        brand_image: canon_logo
    },
    {
        brand_name: "Nikon",
        brand_image: nikon_logo
    }
]


export const product_list = [
    {
        _id: "1",
        name: "iPhone 14",
        image: apple1,
        category: "Phone",
        price: 56999,
        description: "The iPhone 14 offers a sleek design and innovative features",
        brand_name: "Apple"
    },
    {
        _id: "2",
        name: "iPhone 14 Plus",
        image: apple2,
        category: "Phone",
        price: 66999,
        description: "Experience the larger screen and enhanced features with the iPhone 14 Plus.",
        brand_name: "Apple"
    },
    {
        _id: "3",
        name: "iPhone 15",
        image: apple3,
        category: "Phone",
        price: 69999,
        description: "The iPhone 15 introduces groundbreaking technology and a sleek design.",
        brand_name: "Apple"
    },
    {
        _id: "4",
        name: "iPhone 15 Plus",
        image: apple4,
        category: "Phone",
        price: 80999,
        description: "Get even more with the iPhone 15 Plus, featuring advanced camera capabilities.",
        brand_name: "Apple"
    },
    {
        _id: "5",
        name: "iPhone 15 Pro",
        image: apple5,
        category: "Phone",
        price: 127990,
        description: "Experience professional-grade performance with the iPhone 15 Pro.",
        brand_name: "Apple"
    },
    {
        _id: "6",
        name: "iPhone 15 Pro Max",
        image: apple6,
        category: "Phone",
        price: 148900,
        description: "Maximize your productivity with the powerful iPhone 15 Pro Max.",
        brand_name: "Apple"
    },
    // Add more entries for Apple phones here
    {
        _id: "7",
        name: "Samsung S23 Ultra",
        image: samsung1,
        category: "Phone",
        price: 99999,
        description: "Experience ultimate performance with the Samsung S23 Ultra.",
        brand_name: "Samsung"
    },
    {
        _id: "8",
        name: "Samsung S24",
        image: samsung2,
        category: "Phone",
        price: 79999,
        description: "The Samsung S24 offers a sleek design and innovative features.",
        brand_name: "Samsung"
    },    
    {
        _id: "9",
        name: "Samsung S24 Plus",
        image: samsung3,
        category: "Phone",
        price: 109999,
        description: "Get more screen real estate with the Samsung S24 Plus.",
        brand_name: "Samsung"
    },
    {
        _id: "10",
        name: "Samsung S24 Ultra",
        image: samsung4,
        category: "Phone",
        price: 129999,
        description: "Experience the ultimate luxury with the Samsung S24 Ultra.",
        brand_name: "Samsung"
    },
    {
        _id: "11",
        name: "Samsung Z Flip 5",
        image: samsung5,
        category: "Phone",
        price: 12000,
        description: "Flip into the future with the Samsung Z Flip 5.",
        brand_name: "Samsung"
    },
    {
        _id: "12",
        name: "Samsung Z Fold 5",
        image: samsung6,
        category: "Phone",
        price: 99999,
        description: "Unfold endless possibilities with the Samsung Z Fold 5.",
        brand_name: "Samsung"
    },
    {
        _id: "-888",
        name: "OnePlus 11R",
        image: oneplus1,
        category: "Phone",
        price: 35999,
        description: "The OnePlus 11R delivers exceptional performance at an affordable price.",
        brand_name: "OnePlus"
    },
    {
        _id: "13",
        name: "OnePlus 12R",
        image: oneplus1,
        category: "Phone",
        price: 45999,
        description: "The OnePlus 12R offers flagship performance in a compact form factor.",
        brand_name: "OnePlus"
    },
    {
        _id: "14",
        name: "OnePlus 12",
        image: oneplus2,
        category: "Phone",
        price: 64999,
        description: "Experience the power of speed with the OnePlus 12.",
        brand_name: "OnePlus"
    },
   
    {
        _id: "16",
        name: "OnePlus Nord CE 3",
        image: oneplus4,
        category: "Phone",
        price: 17999,
        description: "The OnePlus Nord CE 3 combines affordability with premium features.",
        brand_name: "OnePlus"
    },
    {
        _id: "17",
        name: "OnePlus Nord 3",
        image: oneplus5,
        category: "Phone",
        price: 28999,
        description: "Experience smooth performance and stunning design with the OnePlus Nord 3.",
        brand_name: "OnePlus"
    },
    {
        _id: "18",
        name: "Realme 12",
        image: realme1,
        category: "Phone",
        price: 17999,
        description: "The Realme 12 offers impressive features at an unbeatable price.",
        brand_name: "Realme"
    },    
    {
        _id: "19",
        name: "Realme 12 Pro",
        image: realme2,
        category: "Phone",
        price: 24999,
        description: "Experience flagship-level performance with the Realme 12 Pro.",
        brand_name: "Realme"
    },
    {
        _id: "20",
        name: "Realme Narzo 60",
        image: realme3,
        category: "Phone",
        price: 14999,
        description: "Get the power you need with the Realme Narzo 60.",
        brand_name: "Realme"
    },
    {
        _id: "21",
        name: "Realme Narzo 60X",
        image: realme4,
        category: "Phone",
        price: 12999,
        description: "Experience smooth performance with the Realme Narzo 60X.",
        brand_name: "Realme"
    },
    {
        _id: "22",
        name: "Realme Narzo 70 Pro",
        image: realme5,
        category: "Phone",
        price: 19999,
        description: "Unlock your gaming potential with the Realme Narzo 70 Pro.",
        brand_name: "Realme"
    },
    {
        _id: "23",
        name: "Realme Narzo N53",
        image: realme6,
        category: "Phone",
        price: 8499,
        description: "The Realme Narzo N53 offers an immersive entertainment experience.",
        brand_name: "Realme"
    },
    {
        _id: "24",
        name: "Apple Watch 7",
        image: applew1,
        category: "Smartwatch",
        price: 43900,
        description: "The Apple Watch 7 introduces a larger, more durable display.",
        brand_name: "Apple"
    },
    {
        _id: "25",
        name: "Apple Watch 8",
        image: applew2,
        category: "Smartwatch",
        price: 33900,
        description: "Experience advanced health tracking and seamless connectivity with the Apple Watch 8.",
        brand_name: "Apple"
    },
    {
        _id: "26",
        name: "Apple Watch 9",
        image: applew3,
        category: "Smartwatch",
        price: 41900,
        description: "Stay connected and organized with the sleek design of the Apple Watch 9.",
        brand_name: "Apple"
    },
    {
        _id: "27",
        name: "Apple Watch SE",
        image: applew4,
        category: "Smartwatch",
        price: 29900,
        description: "Get essential features at an affordable price with the Apple Watch SE.",
        brand_name: "Apple"
    },
    {
        _id: "28",
        name: "Apple Watch Ultra",
        image: applew5,
        category: "Smartwatch",
        price: 82999,
        description: "Experience the ultimate in performance and style with the Apple Watch Ultra.",
        brand_name: "Apple"
    },    
    {
        _id: "29",
        name: "Apple Watch Ultra 2",
        image: applew6,
        category: "Smartwatch",
        price: 89990,
        description: "Take your fitness and productivity to the next level with the Apple Watch Ultra 2.",
        brand_name: "Apple"
    },
    {
        _id: "30",
        name: "Samsung Galaxy Watch 4",
        image: samsungw1,
        category: "Smartwatch",
        price: 13999,
        description: "The Samsung Galaxy Watch 4 combines style and functionality for everyday use.",
        brand_name: "Samsung"
    },
    {
        _id: "31",
        name: "Samsung Galaxy Watch 4 Classic",
        image: samsungw2,
        category: "Smartwatch",
        price: 10499,
        description: "Get a timeless look with modern features in the Samsung Galaxy Watch 4 Classic.",
        brand_name: "Samsung"
    },
    {
        _id: "32",
        name: "Samsung Galaxy Watch 5",
        image: samsungw3,
        category: "Smartwatch",
        price: 27999,
        description: "Stay connected and motivated with the Samsung Galaxy Watch 5.",
        brand_name: "Samsung"
    },
    {
        _id: "33",
        name: "Samsung Galaxy Watch 5 Pro",
        image: samsungw4,
        category: "Smartwatch",
        price: 30999,
        description: "Enhance your fitness routine with the advanced features of the Samsung Galaxy Watch 5 Pro.",
        brand_name: "Samsung"
    },
    {
        _id: "34",
        name: "Samsung Galaxy Watch 6",
        image: samsungw5,
        category: "Smartwatch",
        price: 38999,
        description: "Experience next-level performance and style with the Samsung Galaxy Watch 6.",
        brand_name: "Samsung"
    },
    {
        _id: "35",
        name: "Samsung Galaxy Watch 6 Classic",
        image: samsungw6,
        category: "Smartwatch",
        price: 40999,
        description: "Get the classic look with modern features in the Samsung Galaxy Watch 6 Classic.",
        brand_name: "Samsung"
    },
    {
        _id: "36",
        name: "Amazfit GTR 3",
        image: amazfit1,
        category: "Smartwatch",
        price: 9999,
        description: "The Amazfit GTR 3 offers a sleek design and comprehensive health tracking features.",
        brand_name: "Amazfit"
    },
    {
        _id: "37",
        name: "Amazfit GTS 4",
        image: amazfit2,
        category: "Smartwatch",
        price: 15999,
        description: "Stay connected and stylish with the Amazfit GTS 4 smartwatch.",
        brand_name: "Amazfit"
    },
    {
        _id: "38",
        name: "Amazfit GTR 2",
        image: amazfit3,
        category: "Smartwatch",
        price: 12999,
        description: "Experience the perfect blend of style and functionality with the Amazfit GTR 2.",
        brand_name: "Amazfit"
    },    
    {
        _id: "39",
        name: "Amazfit GTR 3 Pro",
        image: amazfit4,
        category: "Smartwatch",
        price: 14999,
        description: "Take your fitness journey to the next level with the Amazfit GTR 3 Pro.",
        brand_name: "Amazfit"
    },
    {
        _id: "40",
        name: "Amazfit T-Rex 2",
        image: amazfit5,
        category: "Smartwatch",
        price: 15999,
        description: "The Amazfit T-Rex 2 is built to withstand extreme conditions while tracking your activities.",
        brand_name: "Amazfit"
    },
    {
        _id: "41",
        name: "Apple MacBook Air 13-inch",
        image: mac1,
        category: "Laptop",
        price: 69999,
        description: "The Apple MacBook Air 13-inch delivers powerful performance in a sleek design.",
        brand_name: "Apple"
    },
    {
        _id: "42",
        name: "Apple MacBook Air 15-inch",
        image: mac2,
        category: "Laptop",
        price: 115990,
        description: "Experience stunning visuals and seamless multitasking with the Apple MacBook Air 15-inch.",
        brand_name: "Apple"
    },
    {
        _id: "43",
        name: "Apple MacBook Pro 14-inch",
        image: mac3,
        category: "Laptop",
        price: 169900,
        description: "The Apple MacBook Pro 14-inch offers professional-grade performance and portability.",
        brand_name: "Apple"
    },
    {
        _id: "44",
        name: "Apple MacBook Pro 16-inch",
        image: mac4,
        category: "Laptop",
        price: 249900,
        description: "Maximize your productivity with the large display and powerful features of the Apple MacBook Pro 16-inch.",
        brand_name: "Apple"
    },
    {
        _id: "45",
        name: "Asus Gaming F15",
        image: asus1,
        category: "Laptop",
        price: 82990,
        description: "Immerse yourself in gaming with the powerful Asus Gaming F15 laptop.",
        brand_name: "Asus"
    },
    {
        _id: "46",
        name: "Asus VivoBook 16x",
        image: asus2,
        category: "Laptop",
        price: 46990,
        description: "The Asus VivoBook 16x offers a balance of performance and affordability.",
        brand_name: "Asus"
    },
    {
        _id: "47",
        name: "Asus VivoBook Go15",
        image: asus3,
        category: "Laptop",
        price: 35990,
        description: "Get things done on the go with the lightweight and portable Asus VivoBook Go15.",
        brand_name: "Asus"
    },
    {
        _id: "48",
        name: "Asus VivoBook S15",
        image: asus4,
        category: "Laptop",
        price: 78250,
        description: "Experience style and performance with the Asus VivoBook S15.",
        brand_name: "Asus"
    },    
    {
        _id: "49",
        name: "Asus ZenBook 14",
        image: asus5,
        category: "Laptop",
        price: 65990,
        description: "Unleash your creativity with the sleek and powerful Asus ZenBook 14.",
        brand_name: "Asus"
    },
    {
        _id: "50",
        name: "MSI Cyborg 15",
        image: msi1,
        category: "Laptop",
        price: 114990,
        description: "Dominate your gaming sessions with the high-performance MSI Cyborg 15 laptop.",
        brand_name: "MSI"
    },
    {
        _id: "51",
        name: "MSI GL63",
        image: msi2,
        category: "Laptop",
        price: 109990,
        description: "Experience immersive gaming on the MSI GL63 laptop with its powerful specs and stunning display.",
        brand_name: "MSI"
    },
    {
        _id: "52",
        name: "MSI Katana 15",
        image: msi3,
        category: "Laptop",
        price: 85990,
        description: "Unleash your creativity with the sleek and powerful MSI Katana 15 laptop.",
        brand_name: "MSI"
    },
    {
        _id: "53",
        name: "MSI Modern 14",
        image: msi4,
        category: "Laptop",
        price: 34990,
        description: "Stay productive and stylish with the MSI Modern 14 laptop.",
        brand_name: "MSI"
    },
    {
        _id: "54",
        name: "MSI Sword 15",
        image: msi5,
        category: "Laptop",
        price: 94990,
        description: "Conquer any task with the razor-sharp performance of the MSI Sword 15 laptop.",
        brand_name: "MSI"
    },
    {
        _id: "55",
        name: "Canon EOS 90D",
        image: canon1,
        category: "Camera",
        price: 134900,
        description: "Capture stunning moments with the advanced features and exceptional performance of the Canon EOS 90D camera.",
        brand_name: "Canon"
    },
    {
        _id: "56",
        name: "Canon EOS 200D",
        image: canon2,
        category: "Camera",
        price: 54990,
        description: "Experience the perfect blend of portability and power with the Canon EOS 200D camera.",
        brand_name: "Canon"
    },
    {
        _id: "57",
        name: "Canon EOS R7",
        image: canon3,
        category: "Camera",
        price: 164995,
        description: "Unleash your creativity with the unique features and exceptional image quality of the Canon EOS R7 mirrorless camera.",
        brand_name: "Canon"
    },
    {
        _id: "58",
        name: "Canon EOS R10",
        image: canon4,
        category: "Camera",
        price: 92990,
        description: "Redefine photography with the unparalleled performance of the Canon EOS R10 mirrorless camera.",
        brand_name: "Canon"
    },    
    {
        _id: "59",
        name: "Canon EOS R50",
        image: canon5,
        category: "Camera",
        price: 69990,
        description: "Elevate your photography game with the cutting-edge features of the Canon EOS R50 mirrorless camera.",
        brand_name: "Canon"
    },
    {
        _id: "60",
        name: "Nikon Coolpix P950",
        image: nikon1,
        category: "Camera",
        price: 61990,
        description: "Get closer to the action and capture stunning details with the Nikon Coolpix P950.",
        brand_name: "Nikon"
    },
    {
        _id: "61",
        name: "Nikon D7500",
        image: nikon2,
        category: "Camera",
        price: 76990,
        description: "Experience the ultimate combination of speed, precision, and durability with the Nikon D7500 DSLR camera.",
        brand_name: "Nikon"
    },
    {
        _id: "62",
        name: "Nikon GR IIIX",
        image: nikon3,
        category: "Camera",
        price: 92199,
        description: "Unlock your creative potential and capture breathtaking images with the compact yet powerful Nikon GR IIIX compact camera.",
        brand_name: "Nikon"
    },
    {
        _id: "63",
        name: "Nikon Mirrorless ZFC",
        image: nikon4,
        category: "Camera",
        price: 99999,
        description: "Embrace the vintage-inspired design and cutting-edge technology of the Nikon ZFC mirrorless camera.",
        brand_name: "Nikon"
    },
    {
        _id: "64",
        name: "Nikon Z6 II",
        image: nikon5,
        category: "Camera",
        price: 180999,
        description: "Unleash your full potential with the Nikon Z6 II mirrorless camera.",
        brand_name: "Nikon"
    },
    {
        _id: "65",
        name: "Nikon Z50",
        image: nikon6,
        category: "Camera",
        price: 91990,
        description: "Experience the perfect balance of portability and performance with the Nikon Z50 mirrorless camera.",
        brand_name: "Nikon"
    }    
    
]