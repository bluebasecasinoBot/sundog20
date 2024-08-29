import { __SYD, __c } from "./sydneyLib/sydneyDom.js";

__SYD.page2 = () =>{
    return __c
    (
        'div',
        {
            style:'height:fit-content;padding:20px;width:100%;display:flex;flex-direction:column;row-gap:20px;color:#171717;align-items:center;padding-bottom:200px;position:relative;background:#ee1c25'
        },
        [
            __c(
                'h1',
                {
                    style:'font-weight:900;text-transform:uppercase;text-align:center;width:100%;max-width:800px;font-family:kage',
                    class:'page2_h1_text'
                },
                [
                    'Missed sun dog before it key rocketed now is you chance sundog 2.0 '
                ]
            ),

            __c(
                'h1',
                {
                    style:'font-weight:900;text-transform:uppercase;text-align:center;width:100%;margin-top:120px;text-align:right;transform:rotateZ(-10deg);max-width:800px;font-family:kage',
                    class:'page2_h1_text'
                },
                [
                    'Wondering if $SUNDOG 2.0 would hit the sun ? Just tell me why not what could go wrong ?'
                ]
            ),

            __c(
                'img',
                {
                    style:'height:150px;width:150px;position:absolute;left:10px;bottom:10px;transform:rotateZ(30deg)',
                    src:'./poop.svg'
                }
            )
        ]
    )
}