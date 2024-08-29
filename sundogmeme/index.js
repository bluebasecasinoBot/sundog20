import { __SYD, __c, __sC, __sS , __m} from './sydneyLib/sydneyDom.js'
import "./nav.js"
import "./page1.js"
import "./page2.js"
import "./page3.js"
import "./page4.js"
import "./page5.js"
import "./page6.js"

__sS([
    {
        nameTag:'container',
        style:{
            height:'100vh',
            width:'100vw',
            // backgroundColor:'#AF1E21',
            backgroundAttachment: 'fixed',
            // backgroundImage:'url("./b2.png")',
            overflowY:'scroll',
            position:'relative',
            fontFamily:'ubuntu',
            // wordSpacing:'5px',
            // fontFamily:'sunrise',
            overflowX:'hidden',
            color:'#fff'
        }
    },
])

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC['container']()
        },
        [
            __SYD.nav(),
            __SYD.floatingBtn(),
            __SYD.page1(),
            __SYD.page2(),
            __SYD.page3(),
            __SYD.page4(),
            __SYD.page5(),
            __SYD.page6()
        ]
    )
}

__SYD.floatingBtn = () =>{
    return __c(
        'a',
        {
            style:'position:fixed;bottom:20px;right:50px;background:linear-gradient(to right,#549ecd,#f75515,#549ecd);min-height:100px;width:fit-content;padding:10px 20px;display:flex;flex-direction:column;row-gap:10px;border-radius:10px;z-index:99999;display:flex;justify-content:center;align-items:center;width:70%;max-width:350px;min-width:250px;',
            class:"to_fro",
            href:'https://sunpump.meme/token/TXL6rJbvmjD46zeN1JssfgxvSo99qC8MRT'
        },
        [   
            __c(
                'h2',{style:'font-weight:900;font-family:duck;text-shadow:1px 1px 3px #171717;'},
                [
                    'TICKER : $SUN DOG2.0'
                ]
            ),
            __c(
                'h1',
                {
                    style:'font-weight:900;font-family:abs;text-shadow:1px 1px 3px #333;color:#fff'
                },[
                    'BUY NOW'
                ]
            )
        ]
    )
}
const audio_el = new Audio('./dog_aud.mp3')

window.onclick = () =>{
    if(audio_el.paused)
    {
        audio_el.play()
    }
}

window.ontouchstart = () =>{
    console.log('hey')
    if(audio_el.paused)
    {
        audio_el.play()
    }
}

audio_el.addEventListener('pause',() =>{
    audio_el.play()
})


__m(__SYD.container());