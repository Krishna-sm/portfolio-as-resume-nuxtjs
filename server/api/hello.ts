export default  defineEventHandler(async(event)=>{
        const body =await readBody(event);   
    return {
            
        body,
            msg:"Hello kana",
            bodys:"dsada",
            
            // data:(JSON.stringify(event))
        }
})