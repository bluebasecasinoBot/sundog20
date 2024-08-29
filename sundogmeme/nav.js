import { __SYD, __c } from './sydneyLib/sydneyDom.js'

__SYD.nav = () =>{
    const el = () =>{
        const element = [];
        for(let i = 0; i < 15; i++)
        {
            element.push(__SYD.addNavElement())
        }
        return element
    }
    return __c(
        'div',
        {
            style:'height:100px;width:100%;position:absolute;z-index:500;border-bottom:2px solid #171717'
        },
        [
            __c(
                'div',
                {
                    style:'height:100%;min-width:fit-content;background:#fdd523;display:flex;column-gap:30px;padding:0 15px;',
                    class:"slider_anime"
                },
                [
                    ...el()
                ]
            )
        ]
    )
}
__SYD.addNavElement = () =>{
    return __c(
        'div',
        {
            style:'height:100%;width:fit-content;display:flex;column-gap:15px;align-items:center'
        },
        [
            __c('img',{height:'50px',width:'50px',alt:'dog',style:"border-radius:50%;min-height:50px;min-width:50px;",src:'./logo.jpeg'},[]),
            __c('h1',{style:'font-weight:900;width:max-content;font-family:duck;text-shadow:1px 1px 3px #333'},['$SUNDOG 2.0'])
        ]
    )
}
