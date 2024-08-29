import { __SYD, __c } from "./sydneyLib/sydneyDom.js";

__SYD.page1 = () =>{
    return __c(
        'div',
        {
            style:'height:100vh;width:100%;position:relative;overflow:hidden;background-image:url("./p1_img.jpg")'
        },
        [
            __c(
                'div',
                {
                    style:'height:120px;width:100%;position:absolute;bottom:0;display:flex;justify-content:center;align-items:center;z-index:500;background:#fff'
                },[
                    __c('h1' , {class:'page1_float',style:'font-weight:900;color:#fdd523;font-family:flame;text-shadow:1px 1px 3px #333'} , [
                        '$SUN DOG IS BACK'
                    ])
                ]
            ),

            __SYD.rotating_sun()
        ],
        {
            genericStyle:['bg_cover']
        }
    )
}

__SYD.rotating_sun = () =>{
    return __c(
        'div',
        {
            style:'position:absolute;top:0px;right:-50px;',
            class:'sun'
        },[],{genericStyle:['bg_cover']}
    )
}