import { __SYD, __c } from "./sydneyLib/sydneyDom.js";

__SYD.page3 = () =>{
    return __c(
        'div',
        {
            style:'display:flex;justify-content:center;align-items:center;padding:20px 5px;color:#171717;flex-direction:column;row-gap:30px;background:#549ecd'
        },
        [
            __c(
                'div',
                {
                    style:'width:80%;min-width:300px;display:flex;flex-direction:column;row-gap:50px;padding:30px 5px;align-items:center;'
                },
                [
                    __c(
                        'h1',
                        {
                            style:'width:100%;font-weight:900;font-family:kage;text-shadow:5px 5px 2px #171717;',
                            class:'page1_float'
                        },
                        [
                            'Tokenomics'
                        ]
                    ),

                    __c(
                        'div',
                        {
                            style:'height:200px;width:85%;max-width:550px;background:red;border-radius:20px;color:#fff;display:flex;flex-direction:column;row-gap:20px;justify-content:center;font-family:flame;text-shadow:1px 1px 3px #333;letter-spacing:3px',
                            class:'inhale'
                        },
                        [
                            __c(
                                'h1',
                                {
                                    style:'fpnt-weight:900;color:#fff',
                                    class:'page1_float'
                                },
                                [
                                    '1B supply'
                                ]
                            ),
                            __c(
                                'h1',
                                {
                                    style:'fpnt-weight:900;text-align:center;',
                                    class:'page2_h1_text_3'
                                },
                                [
                                    'Lp burnt'
                                ]
                            )
                        ]
                    )
                ]
            ),
            __c(
                'h1',
                {
                    style:'padding:15px;width:90%;max-width:700px;text-transform:uppercase;text-align:center;font-family:duck;background:rgb(170, 26, 26);border-radius:10px;border-left:4px solid #171717;border-bottom:4px solid #171717;',
                    class:'page2_h1_text'
                },
                [
                    'contract address'
                ]
            ),
            __c(
                'h2',
                {
                    style:'color:#fff;font-weight:900;text-align:center;text-shadow:0 7px 3px #333;font-family:duck;',
                    class:'ca_text'
                },
                [
                    'CA - TXL6rJbvmjD46zeN1JssfgxvSo99qC8MRT'
                ]
            )
        ]
    )
}