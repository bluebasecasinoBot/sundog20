import { __SYD, __c } from "./sydneyLib/sydneyDom.js";

__SYD.page4 = () =>{
    return __c(
        'div',
        {
            style:'display:flex;flex-direction:column;row-gap:20px;padding:30px 0;background:#f75515;'
        },
        [
            __c(
                'h1',
                {
                    style:'font-weight:900;text-transform:uppercase;text-align:center;font-family:kage;text-shadow:5px 5px 2px #171717;',
                    class:'.page2_h1_text'
                },
                [
                    'road map'
                ]
            ),

            __c(
                'div',
                {
                    style:'height:120px;width:100%;display:flex;justify-content:center;align-items:center;z-index:500'
                },[
                    __c('h1' , {class:'page1_float',style:'font-weight:900;color:#fff;text-transform:uppercase;font-family:flame;text-shadow:1px 1px 3px #000'} , [
                        'sun dog', __c('span',{style:'font-family:abs'},[' 2.0 ']) ,'ON TRON'
                    ])
                ]
            ),

            __c(
                'div',
                {
                    style:'padding:15px;display:flex;column-gap:15px;height:fit-content;min-height:250px;row-gap:20px;perspective:800px;',
                    class:'sunomics_treats'
                },
                [
                    __SYD.large_btn('SUN DOG 2.0' , 'The dog is good '),
                    __SYD.large_btn('SUN DOG 2.0 TREATS' , 'we bark the sun'),
                ]
            )
        ]
    )
}

__SYD.large_btn = (val1,val2) =>{
    return __c(
        'div',
        {
            style:'height:250px;width:100%;background:#fff;display:flex;flex-direction:column;row-gap:15px;border-left:5px solid #171717;border-bottom:5px solid #171717;border-radius:15px;color:#171717;padding:10px;padding-left:30px;font-family:abs;text-transform:capitalize;',
            class:'flip_btn'
        },
        [
            __c(
                'h1',
                {
                    style:'font-weight:900;',
                    class:'page2_h1_text_3'
                },
                [
                    val1
                ]
            ),

            __c(
                'h1',
                {
                    style:'font-weight:900;',
                    class:'page2_h1_text_3'
                },
                [
                    val2
                ]
            )
        ]
    )
}